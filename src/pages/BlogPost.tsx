import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
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
          image: post.coverImage ? `${SITE_ORIGIN}${post.coverImage}` : `${SITE_ORIGIN}/og-image-1200x630.png`,
          mainEntityOfPage: `${SITE_ORIGIN}/blog/${post.slug}`,
          author: { "@type": "Organization", name: "TimeSquare LLC", url: SITE_ORIGIN },
          publisher: {
            "@type": "Organization",
            name: "TimeSquare LLC",
            logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/og-image-1200x630.png` },
          },
        }
      : null
  );

  if (!post) {
    return (
      <div className="relative min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            This article doesn't exist or may have been moved.
          </p>
          <Link to="/blog" className="btn-gradient inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
        </header>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-xl border border-border/50 mb-10"
            loading="lazy"
          />
        )}

        <div
          className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-primary prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-16 glass-card p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-3">
            Want automation like this in <span className="gradient-text">your business?</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Book a free consultation and we'll map the highest-impact automations for your team.
          </p>
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </div>
  );
}
