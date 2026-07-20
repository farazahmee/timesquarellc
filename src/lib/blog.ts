import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date, e.g. 2026-07-21
  keywords: string[];
  coverImage?: string;
  html: string;
  readingMinutes: number;
}

/**
 * All markdown files under /content/blog are pulled in at build time. Committing
 * a new .md file (e.g. from the n8n content engine) is enough to publish it —
 * Vite re-globs on the next build and the post appears in the listing, on its
 * own page, and in sitemap.xml. See content/blog/README.md for the contract.
 */
const rawPosts = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

function parseKeywords(value?: string): string[] {
  if (!value) return [];
  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((k) => k.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

marked.setOptions({ gfm: true, breaks: false });

function build(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [filePath, raw] of Object.entries(rawPosts)) {
    const fileName = filePath.split("/").pop()!;
    if (fileName.toLowerCase() === "readme.md") continue; // docs, not a post

    const { data, body } = parseFrontmatter(raw);
    const slug = data.slug || fileName.replace(/\.mdx?$/, "");

    if (!data.title) {
      // Skip malformed drafts rather than crash the whole listing.
      console.warn(`[blog] Skipping ${filePath}: missing "title" in frontmatter`);
      continue;
    }

    const wordCount = body.split(/\s+/).filter(Boolean).length;

    posts.push({
      slug,
      title: data.title,
      description: data.description || "",
      date: data.date || "",
      keywords: parseKeywords(data.keywords),
      coverImage: data.coverImage || undefined,
      html: marked.parse(body) as string,
      readingMinutes: Math.max(1, Math.round(wordCount / 200)),
    });
  }

  // Newest first.
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

const posts = build();

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}
