# Blog content — publishing contract

This folder holds every blog post as a single Markdown file. **To publish a new
article, add one `.md` file here and push to the repo.** Vercel rebuilds on push,
and the post automatically appears:

- in the `/blog` listing (newest first),
- on its own page at `/blog/<slug>`,
- and in `sitemap.xml` (so Google can discover it).

No code changes are needed. This is the contract the n8n content engine writes against.

## File location & name

- Path: `content/blog/<slug>.md`
- The filename (without `.md`) becomes the URL slug **unless** you set `slug:` in the
  frontmatter, which then wins. Use lowercase words separated by hyphens.

## Required frontmatter

Every file must start with a frontmatter block between `---` fences:

```markdown
---
title: How AI Automation Saves B2B Teams 20 Hours a Week
description: A one-to-two sentence summary used for the listing, meta description, and social cards.
date: 2026-07-21
slug: how-ai-automation-saves-b2b-teams-20-hours-a-week
keywords: AI automation, B2B automation, workflow automation
coverImage: /og-image-1200x630.png
---

Your article body in Markdown goes here...
```

| Field         | Required | Notes                                                                 |
| ------------- | -------- | --------------------------------------------------------------------- |
| `title`       | yes      | Post H1 + `<title>`. A file with no title is skipped.                 |
| `description` | yes      | Meta description, OG/Twitter description, and listing excerpt.        |
| `date`        | yes      | `YYYY-MM-DD`. Controls ordering and `datePublished` in Article JSON-LD.|
| `slug`        | no       | Overrides the filename as the URL. Keep it stable once published.     |
| `keywords`    | no       | Comma-separated. Feeds the Article JSON-LD `keywords`.                |
| `coverImage`  | no       | Absolute path from site root (e.g. `/blog/my-image.png`). Falls back to the default OG image. |

## Body format

- Standard Markdown (GitHub-flavored): headings, lists, links, bold, blockquotes,
  code blocks, tables.
- Start body headings at `##` — the `title` is already rendered as the page's single `<h1>`.
- Internal links work as normal Markdown links, e.g. `[contact us](/contact)`.

## SEO handled for you

Per post, the site automatically generates: the `<title>`, meta description,
canonical URL, Open Graph + Twitter tags, `Article` JSON-LD structured data, and the
`sitemap.xml` entry. Just fill in the frontmatter correctly.
