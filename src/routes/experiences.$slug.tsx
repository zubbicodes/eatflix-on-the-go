import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Heart, Share2, Utensils, Wine, Sparkles, ChevronRight } from "lucide-react";
import { getExperience, experiences, type Experience } from "@/lib/events";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const exp = getExperience(params.slug);
    if (!exp) throw notFound();
    return { exp };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.exp.title} — EatFlix Cinema` },
          { name: "description", content: loaderData.exp.description },
          { property: "og:title", content: `${loaderData.exp.title} — EatFlix` },
          { property: "og:description", content: loaderData.exp.description },
          { property: "og:image", content: loaderData.exp.image },
        ]
      : [],
  }),
  component: ExperienceDetail,
  notFoundComponent: () => (
    <div className="px-5 py-20 text-center">
      <p className="font-marquee text-sm tracking-[0.3em] gold-text">EXPERIENCE NOT FOUND</p>
      <Link to="/experiences" className="mt-4 inline-block text-sm text-[color:var(--gold)]">← Back to experiences</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="px-5 py-20 text-center">
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded-full ember-bg px-5 py-2 text-sm font-semibold">Try again</button>
      </div>
    );
  },
});

function ExperienceDetail() {
  const { exp } = Route.useLoaderData() as { exp: Experience };
  const related = experiences.filter((e) => e.slug !== exp.slug).slice(0, 3);

  return (
    <div className="animate-float-up">
      {/* Poster header */}
      <div className="relative h-[440px] w-full overflow-hidden">
        <img src={exp.image} alt={exp.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

        <div className="absolute top-3 flex w-full items-center justify-between px-4">
          <Link to="/experiences" className="grid h-10 w-10 place-items-center rounded-full bg-background/60 backdrop-blur-md">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-full bg-background/60 backdrop-blur-md">
              <Heart className="h-4 w-4" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full bg-background/60 backdrop-blur-md">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
          <p className="font-marquee text-[11px] tracking-[0.3em] text-[color:var(--gold)]">
            {exp.tagline.toUpperCase()}
          </p>
          <h1 className="mt-1 font-serif text-4xl font-bold leading-none">{exp.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-foreground/80">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{exp.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{exp.duration}</span>
            <span className="rounded-full border border-foreground/30 px-2 py-0.5 text-[10px] uppercase">{exp.ageRating}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="px-5 pt-6">
        <p className="leading-relaxed text-foreground/85">{exp.description}</p>
      </section>

      {/* Highlights */}
      <section className="mt-6 px-5">
        <h2 className="font-serif text-lg font-bold">Experience highlights</h2>
        <ul className="mt-3 space-y-2">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <span className="text-sm">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Themed menu */}
      <section className="mt-8 px-5">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-lg font-bold">Sample themed menu</h2>
          <span className="font-marquee text-[10px] tracking-[0.3em] text-[color:var(--gold)]">{exp.vibe.toUpperCase()}</span>
        </div>
        <div className="mt-3 overflow-hidden rounded-2xl border border-border/60 bg-card">
          {exp.menu.map((m, i) => (
            <div key={m.dish} className={`flex items-start gap-3 p-4 ${i ? "border-t border-border/60" : ""}`}>
              <Utensils className="mt-1 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.course}</p>
                <p className="font-serif text-base font-semibold">{m.dish}</p>
                <p className="text-xs text-muted-foreground">{m.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border/60 bg-card p-4">
          <Wine className="h-4 w-4 text-[color:var(--gold)]" />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">Themed bar</p>
            <p className="truncate text-sm">{exp.drinks.join(" · ")}</p>
          </div>
        </div>
      </section>

      {/* Dates */}
      <section className="mt-8 px-5">
        <h2 className="font-serif text-lg font-bold">Available dates</h2>
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          {exp.dates.map((d, i) => (
            <button
              key={d}
              className={`shrink-0 rounded-2xl border px-4 py-3 text-left text-xs transition-all ${
                i === 0 ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10" : "border-border/60 bg-card"
              }`}
            >
              <p className="font-marquee tracking-widest text-[color:var(--gold)]">{d.split(" ")[0].toUpperCase()}</p>
              <p className="mt-1 font-serif text-base font-bold leading-none">{d.split(" ").slice(1).join(" ")}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">{exp.time} · 12 left</p>
            </button>
          ))}
        </div>
      </section>

      {/* Venue */}
      <section className="mt-6 px-5">
        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15">
            <MapPin className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-sm font-semibold">EatFlix Soho · Screen 02</p>
            <p className="text-xs text-muted-foreground">14 Dean Street, London W1D 3RS</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </section>

      {/* Related */}
      <section className="mt-8 px-5">
        <h2 className="font-serif text-lg font-bold">You might also love</h2>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/experiences/$slug"
              params={{ slug: r.slug }}
              className="group relative aspect-[3/4] w-36 shrink-0 overflow-hidden rounded-2xl border border-border/40"
            >
              <img src={r.image} alt={r.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <p className="absolute bottom-2 left-3 right-3 font-serif text-sm font-bold leading-tight">{r.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky bottom-24 z-30 mt-8 px-5">
        <div className="glass flex items-center justify-between gap-3 rounded-2xl p-3 shadow-[var(--shadow-glow)]">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">From</p>
            <p className="font-serif text-xl font-bold leading-none">£42<span className="text-xs text-muted-foreground">pp</span></p>
          </div>
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl ember-bg px-4 py-3 text-sm font-bold">
            <Users className="h-4 w-4" /> Book This Experience
          </button>
        </div>
      </div>
    </div>
  );
}
