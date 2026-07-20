import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function Blog() {
  useSEO({
    title: "Blog | AI Automation & Software Insights | TimeSquare LLC",
    description:
      "Practical insights on AI automation, workflow automation, and custom software development for B2B teams — from the engineers at TimeSquare LLC.",
    canonical: "https://timesquarellc.com/blog",
  });

  const posts = getAllPosts();

  return (
    <div className="relative">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Insights
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            The TimeSquare <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Practical takes on AI automation, workflow automation, and custom software —
            written for the B2B teams we build for.
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">New articles are on the way. Check back soon.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-500"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                      Read article
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
