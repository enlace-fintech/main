import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG } from "../../data/content";
import { Reveal, Overline } from "./Primitives";

export const Blog = ({ posts = BLOG.posts, title = BLOG.title, overline = BLOG.overline }) => (
  <section id="blog" data-testid="blog-section" className="relative py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <Reveal className="max-w-2xl">
        <Overline>{overline}</Overline>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link to={`/blog/${p.slug}`} data-testid={`blog-post-${i}`} className="block h-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/40 transition-colors duration-300">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D4AF37]">
                    <span>{p.category}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500 normal-case tracking-normal">{p.date}</span>
                  </div>
                  <h3 className="font-display mt-3 text-lg font-bold text-white leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4AF37]">
                      Leer más
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={13} /> {p.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
