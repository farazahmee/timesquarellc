#!/usr/bin/env node

/**
 * Build-time metadata pre-rendering.
 *
 * The app is a client-rendered SPA, so the raw HTML served for every route was
 * the homepage <head> until JS ran — meaning social scrapers and non-JS
 * crawlers saw the wrong title/description and no Article data. This script
 * takes the built dist/index.html and writes a per-route dist/<path>/index.html
 * whose <head> already contains the correct title, description, canonical,
 * Open Graph / Twitter tags, and (for posts) Article JSON-LD. The <body> is the
 * same SPA root, so React still hydrates the visible content on load.
 *
 * Runs after `vite build`; see package.json "build".
 */

const fs = require('fs');
const path = require('path');
const { SITE, DEFAULT_OG_IMAGE, STATIC_ROUTES, getBlogPosts } = require('./seo-data.cjs');

const DIST = path.join(__dirname, '../dist');
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

const escAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function replaceMeta(html, selectorAttr, key, value) {
  const re = new RegExp(`(<meta ${selectorAttr}="${key}" content=")[^"]*(")`);
  if (re.test(html)) return html.replace(re, (_, a, b) => a + escAttr(value) + b);
  // Insert before </head> if the tag doesn't exist yet.
  const tag = `    <meta ${selectorAttr}="${key}" content="${escAttr(value)}" />\n`;
  return html.replace('</head>', tag + '</head>');
}

function renderHead(html, { title, description, canonical, image, robots }) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(title)}</title>`);
  html = replaceMeta(html, 'name', 'description', description);
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', description);
  html = replaceMeta(html, 'property', 'og:url', canonical);
  html = replaceMeta(html, 'property', 'og:image', image || DEFAULT_OG_IMAGE);
  html = replaceMeta(html, 'name', 'twitter:title', title);
  html = replaceMeta(html, 'name', 'twitter:description', description);
  html = replaceMeta(html, 'name', 'twitter:image', image || DEFAULT_OG_IMAGE);
  if (robots) html = replaceMeta(html, 'name', 'robots', robots);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => a + escAttr(canonical) + b);
  return html;
}

function writeRoute(routePath, html) {
  // Flat "<route>.html" files (e.g. dist/about.html, dist/blog/<slug>.html)
  // served as clean URLs by Vercel's cleanUrls. More predictable than relying
  // on directory-index resolution.
  if (routePath === '/') {
    fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf-8');
    return;
  }
  const file = path.join(DIST, routePath.replace(/^\//, '') + '.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, 'utf-8');
}

let count = 0;

// Static routes (skip "/", the template is already correct for it).
for (const r of STATIC_ROUTES) {
  if (r.path === '/') continue;
  const html = renderHead(template, {
    title: r.title,
    description: r.description,
    canonical: `${SITE}${r.path}`,
  });
  writeRoute(r.path, html);
  count++;
}

// Blog posts — include Article JSON-LD.
for (const post of getBlogPosts()) {
  const canonical = `${SITE}${post.path}`;
  let html = renderHead(template, {
    title: post.title,
    description: post.description,
    canonical,
    image: post.coverImage,
  });
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.replace(/ \| TimeSquare LLC$/, ''),
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(', '),
    image: post.coverImage,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'TimeSquare LLC', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'TimeSquare LLC',
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
  };
  const script = `    <script type="application/ld+json" data-blog-post="true">${JSON.stringify(article)}</script>\n`;
  html = html.replace('</head>', script + '</head>');
  writeRoute(post.path, html);
  count++;
}

// 404 page — SPA still renders <NotFound/>, but tell crawlers not to index it.
const notFound = renderHead(template, {
  title: 'Page Not Found | TimeSquare LLC',
  description: 'The page you are looking for could not be found.',
  canonical: `${SITE}/404`,
  robots: 'noindex, follow',
});
fs.writeFileSync(path.join(DIST, '404.html'), notFound, 'utf-8');

console.log(`Pre-rendered ${count} routes + 404.html into dist/`);
