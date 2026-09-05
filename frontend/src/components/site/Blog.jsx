import { ArrowUpRight } from "lucide-react";
import { BLOG } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Blog = () => (
  <section id="blog" data-testid="blog-section" className="relative py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>{BLOG.overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {BLOG.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG.posts.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <article
              data-testid={`blog-post-${i}`}
              className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/40 transition-colors duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[#D4AF37]">{p.date}</div>
                <h3 className="font-display mt-3 text-lg font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#D4AF37]">
                  Leer más
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
