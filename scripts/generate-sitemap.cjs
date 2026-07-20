#!/usr/bin/env node

/**
 * Sitemap generator for TimeSquare LLC.
 * Runs at build time (see package.json "build" and vercel.json "buildCommand").
 *
 * Static routes below MUST match the routes registered in src/App.tsx.
 * Blog posts are discovered automatically from content/blog/*.md(x), so an
 * n8n workflow only has to commit a new markdown file — the next build picks
 * it up here and in the /blog listing.
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://timesquarellc.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const BLOG_DIR = path.join(__dirname, '../content/blog');

const today = new Date().toISOString().split('T')[0];

// Static routes — keep in sync with the <Route> list in src/App.tsx.
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog', priority: 0.75, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
];

// Minimal frontmatter reader — pulls `slug` and `date` from a markdown file.
function readFrontmatter(file) {
  const raw = fs.readFileSync(file, 'utf-8');
  const match = raw.match(/^---\s*[\r\n]([\s\S]*?)[\r\n]---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
  }
  return data;
}

function discoverBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f) && f.toLowerCase() !== 'readme.md')
    .map((f) => ({ f, fm: readFrontmatter(path.join(BLOG_DIR, f)) }))
    .filter(({ fm }) => fm.title) // only real, publishable posts
    .map(({ f, fm }) => {
      const slug = fm.slug || f.replace(/\.mdx?$/, '');
      return {
        path: `/blog/${slug}`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: fm.date ? String(fm.date).split('T')[0] : today,
      };
    });
}

const routes = [...staticRoutes, ...discoverBlogPosts()];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const lastmod = route.lastmod || today;
    return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

const dirPath = path.dirname(OUTPUT_PATH);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}
fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');

console.log(`Sitemap generated: ${OUTPUT_PATH}`);
console.log(`Total URLs: ${routes.length} (${routes.length - staticRoutes.length} blog posts)`);
