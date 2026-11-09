import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function Blog() {
  useSEO({
    title: "Blog | AI Automation & Software Insights | TimeSquare LLC",
    description:
      "Practical insights on AI automation, workflow automation, and custom software development for B2B teams — from the engineers at TimeSquare LLC.",
    canonical: "https://timesquarellc.com/blog",
  });

  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="relative">
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from{" "}
            <span className="text-white/38">the build.</span>
          </>
        }
        lead="Practical takes on AI automation, workflow design, and custom software — written for the teams we build for, not for the algorithm."
      />

      <section className="pb-8">
        <Container>
          {posts.length === 0 ? (
            <p className="body-copy">New articles are on the way. Check back soon.</p>
          ) : (
            <>
              <Reveal>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group glass card-lift grid overflow-hidden lg:grid-cols-[1.08fr_0.92fr]"
                >
                  <div className="flex flex-col justify-between p-6 md:p-9">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/32">
                        <span className="rounded-[5px] border border-ice/20 bg-ice/[0.06] px-2 py-1 text-ice/70">
                          Latest
                        </span>
                        <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                        <span aria-hidden="true">·</span>
                        <span>{featured.readingMinutes} min read</span>
                      </div>
                      <h2 className="display-2 mt-7 max-w-[520px] transition-colors duration-300 group-hover:text-white">
                        {featured.title}
                      </h2>
                      <p className="body-copy mt-4 max-w-[480px]">
                        {featured.description}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50 transition-colors group-hover:text-white/90">
                      Read article
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>

                  <div className="relative hidden min-h-[320px] overflow-hidden border-l border-white/10 bg-gradient-to-br from-ice/[0.08] via-indigo/10 to-transparent lg:block">
                    <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50" />
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-10 right-6 font-display text-[12rem] font-medium leading-none tracking-[-0.08em] text-white/[0.045]"
                    >
                      {String(posts.length).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-6 flex flex-col justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/28">
                        TimeSquare field notes
                      </span>
                      <span className="max-w-[240px] text-[12px] leading-[1.6] text-white/40">
                        Written by the engineers doing the work. No thought
                        leadership, no listicles.
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>

              {rest.length > 0 && (
                <div className="mt-4">
                  {rest.map((post, index) => (
                    <Reveal key={post.slug} delay={index * 60}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group grid gap-4 border-b border-white/10 py-6 transition-colors duration-300 hover:border-white/20 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-8"
                      >
                        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/30 md:flex-col md:items-start md:gap-1.5">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          <span>{post.readingMinutes} min read</span>
                        </div>
                        <div>
                          <h2 className="text-[19px] font-medium leading-snug tracking-[-0.02em] text-white/78 transition-colors duration-300 group-hover:text-white">
                            {post.title}
                          </h2>
                          <p className="mt-2 max-w-[640px] text-[13px] leading-[1.6] text-white/45">
                            {post.description}
                          </p>
                        </div>
                        <span className="hidden h-8 w-8 place-items-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-white/25 group-hover:text-white/75 md:grid">
                          <ArrowUpRight size={13} strokeWidth={1.8} />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </div>
  );
}
