import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import ButtonLink from "@/components/site/ButtonLink";
import { getPostBySlug, formatDate } from "@/lib/blog";

const SITE_ORIGIN = "https://timesquarellc.com";

/** Injects Article JSON-LD for this post and removes it on unmount. */
function useArticleJsonLd(json: Record<string, unknown> | null) {
  useEffect(() => {
    // Drop any pre-rendered Article block so we never duplicate structured data.
    document.head.querySelectorAll("script[data-blog-post]").forEach((el) => el.remove());
    if (!json) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-post", "true");
    script.textContent = JSON.stringify(json);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [json]);
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useSEO({
    title: post ? `${post.title} | TimeSquare LLC` : "Article Not Found | TimeSquare LLC",
    description: post?.description || "The article you are looking for could not be found.",
    canonical: post ? `${SITE_ORIGIN}/blog/${post.slug}` : `${SITE_ORIGIN}/blog`,
    image: post?.coverImage ? `${SITE_ORIGIN}${post.coverImage}` : undefined,
  });

  useArticleJsonLd(
    post
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.keywords.join(", "),
          image: post.coverImage
            ? `${SITE_ORIGIN}${post.coverImage}`
            : `${SITE_ORIGIN}/og-image-1200x630.png`,
          mainEntityOfPage: `${SITE_ORIGIN}/blog/${post.slug}`,
          author: { "@type": "Organization", name: "TimeSquare LLC", url: SITE_ORIGIN },
          publisher: {
            "@type": "Organization",
            name: "TimeSquare LLC",
            logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/og-image-1200x630.png` },
          },
        }
      : null,
  );

  if (!post) {
    return (
      <div className="relative flex min-h-[70vh] items-center justify-center">
        <div className="px-4 text-center">
          <p className="meta-label">404</p>
          <h1 className="display-2 mt-5">Article not found</h1>
          <p className="body-copy mx-auto mt-4 max-w-md">
            This article doesn't exist or may have been moved.
          </p>
          <ButtonLink to="/blog" variant="secondary" withArrow className="mt-7">
            Back to all articles
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Container>
        <article className="mx-auto max-w-[780px] pb-10 pt-36 md:pt-44">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:text-white/70"
            >
              <ArrowLeft size={13} strokeWidth={1.8} />
              All articles
            </Link>
          </Reveal>

          <header className="mt-8">
            <Reveal delay={60}>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/32">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
                <span>{post.readingMinutes} min read</span>
                {post.keywords.length > 0 && (
                  <>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
                    <span>{post.keywords[0]}</span>
                  </>
                )}
              </div>
            </Reveal>
            <Reveal delay={110}>
              <h1 className="display-1 mt-5">{post.title}</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead mt-5">{post.description}</p>
            </Reveal>
          </header>

          {post.coverImage && (
            <Reveal delay={200}>
              <img
                src={post.coverImage}
                alt={post.title}
                className="mt-10 w-full rounded-[14px] border border-white/10"
                loading="lazy"
              />
            </Reveal>
          )}

          <Reveal delay={220}>
            <div className="mt-10 border-t border-white/10 pt-9">
              <div
                className="prose-site"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-14 rounded-[14px] border border-white/12 bg-gradient-to-br from-white/[0.05] to-transparent p-7 md:p-9">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-[440px]">
                  <p className="meta-label">A practical next step</p>
                  <h2 className="display-3 mt-4">
                    Want automation like this in your business?
                  </h2>
                  <p className="body-copy mt-3">
                    Book a free consultation and we'll map the highest-impact
                    automations for your team.
                  </p>
                </div>
                <ButtonLink to="/contact" variant="primary" withArrow className="shrink-0">
                  Book a free consultation
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/28">
              TimeSquare LLC · {formatDate(post.date)}
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:text-white/70"
            >
              More articles
              <ArrowUpRight size={11} />
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
