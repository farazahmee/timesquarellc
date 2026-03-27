#!/usr/bin/env node

/**
 * Sitemap Generator for TimeSquare LLC
 * Run: node scripts/generate-sitemap.js
 * Or add to package.json: "build": "tsc && vite build && node scripts/generate-sitemap.js"
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://timesquarellc.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Define all routes with metadata
const routes = [
  // Main pages
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/services',
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/services/ai-integration',
    priority: 0.85,
    changefreq: 'monthly'
  },
  {
    path: '/services/automation',
    priority: 0.85,
    changefreq: 'monthly'
  },
  {
    path: '/services/consulting',
    priority: 0.85,
    changefreq: 'monthly'
  },
  {
    path: '/case-studies',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/about',
    priority: 0.75,
    changefreq: 'monthly'
  },
  {
    path: '/blog',
    priority: 0.75,
    changefreq: 'weekly'
  },
  {
    path: '/contact',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/demo',
    priority: 0.6,
    changefreq: 'monthly'
  },

  // Legal pages
  {
    path: '/privacy-policy',
    priority: 0.5,
    changefreq: 'yearly'
  },
  {
    path: '/terms-of-service',
    priority: 0.5,
    changefreq: 'yearly'
  },
];

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes.map(route => {
  const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
  return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

// Ensure directory exists
const dirPath = path.dirname(OUTPUT_PATH);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Write file
fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully!`);
console.log(`📍 File: ${OUTPUT_PATH}`);
console.log(`📊 Total URLs: ${routes.length}`);
console.log(`🌐 Domain: ${DOMAIN}`);
console.log(`\n📝 Remember to:`);
console.log(`   1. Copy this to public/sitemap.xml`);
console.log(`   2. Deploy to production`);
console.log(`   3. Submit to Google Search Console`);
console.log(`   4. Monitor crawl errors in GSC`);
