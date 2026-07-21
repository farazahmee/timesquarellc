#!/usr/bin/env node

/**
 * Sitemap generator for TimeSquare LLC. Runs at build time.
 *
 * Routes come from scripts/seo-data.cjs (the shared source of truth). Blog
 * posts are discovered from content/blog automatically, so the content engine
 * only has to commit a markdown file. Writes to public/ (source) and, when it
 * exists, dist/ (the served output) so a new post shows up in the same build.
 */

const fs = require('fs');
const path = require('path');
const { SITE, STATIC_ROUTES, getBlogPosts } = require('./seo-data.cjs');

const today = new Date().toISOString().split('T')[0];

const routes = [
  ...STATIC_ROUTES.map((r) => ({ path: r.path, priority: r.priority, changefreq: r.changefreq })),
  ...getBlogPosts().map((p) => ({
    path: p.path,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: p.date || today,
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE}${route.path}</loc>
    <lastmod>${route.lastmod || today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const targets = [path.join(__dirname, '../public/sitemap.xml')];
const distPath = path.join(__dirname, '../dist/sitemap.xml');
if (fs.existsSync(path.dirname(distPath))) targets.push(distPath);

for (const target of targets) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, sitemap, 'utf-8');
}

console.log(`Sitemap: ${routes.length} URLs (${routes.length - STATIC_ROUTES.length} posts) -> ${targets.join(', ')}`);
