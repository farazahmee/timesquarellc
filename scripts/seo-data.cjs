/**
 * Single source of truth for build-time SEO data, shared by
 * generate-sitemap.cjs and prerender.cjs.
 *
 * STATIC_ROUTES titles/descriptions must match the useSEO() calls in the
 * corresponding page components so the pre-rendered HTML and the client
 * agree.
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://timesquarellc.com';
const DEFAULT_OG_IMAGE = `${SITE}/og-image-1200x630.png`;
const BLOG_DIR = path.join(__dirname, '../content/blog');

const STATIC_ROUTES = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    title: 'TimeSquare LLC | AI Integration & Automation Agency | UK',
    description:
      'We build AI-powered automation, ChatGPT integration services, and data analytics solutions for businesses. Based in UK, serving clients globally.',
  },
  {
    path: '/services',
    priority: 0.9,
    changefreq: 'monthly',
    title: 'AI Integration & Automation Services | ChatGPT, Web Dev, Analytics | TimeSquare LLC',
    description:
      'Comprehensive AI integration agency services: business process automation, LLM integration services, full-stack web development, and data analytics consulting with Python FastAPI development and React.',
  },
  {
    path: '/case-studies',
    priority: 0.8,
    changefreq: 'weekly',
    title: 'AI Case Studies & Portfolio | Healthcare, Finance, Retail Projects | TimeSquare LLC',
    description:
      'Explore our portfolio of AI automation solutions across healthcare, finance, and retail, including SurgiSync, Simpla.AI, and RevelTV projects.',
  },
  {
    path: '/blog',
    priority: 0.75,
    changefreq: 'weekly',
    title: 'Blog | AI Automation & Software Insights | TimeSquare LLC',
    description:
      'Practical insights on AI automation, workflow automation, and custom software development for B2B teams — from the engineers at TimeSquare LLC.',
  },
  {
    path: '/about',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'About TimeSquare LLC | AI Automation Experts | Our Team & Mission',
    description:
      'Meet the team behind TimeSquare LLC. We combine deep AI and full-stack development expertise with strategic vision to deliver AI automation solutions that drive real results.',
  },
  {
    path: '/contact',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Contact TimeSquare LLC | Book a Free AI Consultation',
    description:
      'Contact TimeSquare LLC for AI integration, business process automation, and full-stack web development. Book a free consultation or send an inquiry.',
  },
  {
    path: '/privacy-policy',
    priority: 0.3,
    changefreq: 'yearly',
    title: 'Privacy Policy | TimeSquare LLC',
    description:
      'How TimeSquare LLC collects, uses, and protects your information when you use timesquarellc.com.',
  },
  {
    path: '/terms-of-service',
    priority: 0.3,
    changefreq: 'yearly',
    title: 'Terms of Service | TimeSquare LLC',
    description:
      'The terms and conditions governing your use of the TimeSquare LLC website and services.',
  },
];

function readFrontmatter(raw) {
  const match = raw.match(/^---\s*[\r\n]([\s\S]*?)[\r\n]---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
  }
  return data;
}

function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f) && f.toLowerCase() !== 'readme.md')
    .map((f) => ({ f, fm: readFrontmatter(fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8')) }))
    .filter(({ fm }) => fm.title)
    .map(({ f, fm }) => {
      const slug = fm.slug || f.replace(/\.mdx?$/, '');
      return {
        slug,
        path: `/blog/${slug}`,
        title: `${fm.title} | TimeSquare LLC`,
        description: fm.description || '',
        date: fm.date ? String(fm.date).split('T')[0] : '',
        keywords: (fm.keywords || '')
          .replace(/^\[|\]$/g, '')
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean),
        coverImage: fm.coverImage ? `${SITE}${fm.coverImage}` : DEFAULT_OG_IMAGE,
      };
    });
}

module.exports = { SITE, DEFAULT_OG_IMAGE, STATIC_ROUTES, getBlogPosts };
