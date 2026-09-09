import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Clock, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Blog } from "@/components/site/Blog";
import { Contacto } from "@/components/site/Contacto";
import { ShareButtons } from "@/components/site/ShareButtons";
import { Reveal } from "@/components/site/Primitives";
import { BLOG } from "@/data/content";

const API = process.env.REACT_APP_BACKEND_URL;

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG.posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;
  const related = BLOG.posts.filter((p) => p.slug !== slug).slice(0, 3);
  const q = new URLSearchParams({ title: post.title, desc: post.excerpt, image: post.image }).toString();
  const shareUrl = `${API}/api/share/blog/${post.slug}?${q}`;

  return (
    <>
      <Breadcrumbs trail={[{ label: "Blog", href: "/blog" }, { label: post.category }]} />
      <article data-testid="blog-article" className="relative py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#D4AF37]">
              <span data-testid="blog-article-category">{post.category}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500 normal-case tracking-normal">{post.date}</span>
              <span className="inline-flex items-center gap-1 text-slate-500 normal-case tracking-normal"><Clock size={13} /> {post.readTime} de lectura</span>
            </div>
            <h1 data-testid="blog-article-title" className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">{post.title}</h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6">
              <ShareButtons url={shareUrl} title={post.title} />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-10">
            <div className="absolute -inset-3 rounded-3xl bg-[#D4AF37]/10 blur-2xl" aria-hidden />
            <img src={post.image} alt={post.title} className="relative w-full h-[320px] sm:h-[420px] object-cover rounded-2xl border border-white/10" />
          </Reveal>

          <div className="mt-12 space-y-12">
            {post.sections.map((s, i) => (
              <Reveal key={i} delay={0.05}>
                <section data-testid={`blog-section-${i}`}>
                  <h2 className="font-display text-2xl font-bold text-white leading-snug">{s.h}</h2>
                  {s.p?.map((t, j) => (
                    <p key={j} className="mt-4 text-slate-300 leading-relaxed">{t}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-5 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                          <Check size={16} className="mt-1 shrink-0 text-[#D4AF37]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">Siguiente paso</div>
              <p className="font-display mt-2 text-xl font-bold text-white">¿Quieres aplicarlo en tu negocio?</p>
            </div>
            <Link to={post.cta.href} data-testid="blog-article-cta" className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B132B] hover:bg-[#F3C94F] transition-colors duration-200 shrink-0">
              {post.cta.text}
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Reveal>
          <div className="mt-8">
            <ShareButtons url={shareUrl} title={post.title} />
          </div>
        </div>
      </article>

      <Blog posts={related} overline="Sigue leyendo" title="Artículos relacionados" />
      <Contacto />
    </>
  );
}
