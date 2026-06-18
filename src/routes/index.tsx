import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Sparkles, Star, Ticket, Zap, BarChart3, Bell } from "lucide-react";
import { experiences } from "@/lib/events";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EatFlix Cinema — Watch It. Eat It. Love It." },
      { name: "description", content: "Themed dinner-cinema experiences. Book your next immersive movie night." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = experiences[0];
  const rest = experiences.slice(1);

  return (
    <div className="animate-float-up">
      {/* Hero */}
      <section className="relative -mt-2 mb-4 overflow-hidden">
        <div className="relative h-[520px] w-full">
          <img
            src={heroImg}
            alt="EatFlix cinema interior with dining tables under projector beam"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
          <div className="spotlight" />

          <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="h-3 w-3" /> Now Showing
              </span>
              <span className="text-[10px] uppercase tracking-widest text-foreground/70">
                Season 04
              </span>
            </div>
            <h1 className="mt-3 font-serif text-[44px] font-bold leading-[0.95]">
              Watch It.<br />
              <span className="gold-text italic">Eat It.</span><br />
              Love It.
            </h1>
            <p className="mt-3 max-w-[280px] text-sm text-foreground/75">
              An immersive cinema where every meal is the movie. Themed menus, live atmosphere, unforgettable nights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured event */}
      <section className="px-5">
        <Link
          to="/experiences/$slug"
          params={{ slug: featured.slug }}
          className="group block overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-glow)]"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
              Featured Experience
            </span>
          </div>
          <div className="p-5">
            <p className="font-marquee text-[11px] tracking-[0.3em] text-[color:var(--gold)]">
              {featured.tagline.toUpperCase()}
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold">{featured.title}</h2>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />Soho Screen 02</span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm">from <span className="font-semibold text-foreground">£42pp</span></span>
              <span className="inline-flex items-center gap-2 rounded-full ember-bg px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-glow)]">
                Book Now <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Upcoming rail */}
      <section className="mt-8">
        <div className="flex items-center justify-between px-5">
          <h3 className="font-serif text-xl font-bold">Upcoming Experiences</h3>
          <Link to="/experiences" className="text-xs text-[color:var(--gold)]">See all</Link>
        </div>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-5 pb-2">
          {rest.map((e) => (
            <Link
              key={e.slug}
              to="/experiences/$slug"
              params={{ slug: e.slug }}
              className="group relative aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-2xl border border-border/40"
            >
              <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-[10px] text-foreground/60">{e.date.split(" ").slice(0, 3).join(" ")}</p>
                <p className="font-serif text-sm font-bold leading-tight">{e.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Special offer */}
      <section className="mt-8 px-5">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/30 bg-gradient-to-br from-[color:var(--gold)]/15 via-card to-card p-5">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
          <p className="font-marquee text-[11px] tracking-[0.3em] text-[color:var(--gold)]">SPECIAL OFFER</p>
          <h3 className="mt-1 font-serif text-2xl font-bold">Kids Eat Free Sundays</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            One child ticket free with every adult booking at our family brunch screenings.
          </p>
          <Link to="/experiences/$slug" params={{ slug: "monsters-inc" }} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gold)]">
            View family screenings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-8 px-5">
        <h3 className="font-serif text-xl font-bold">Loved by guests</h3>
        <div className="no-scrollbar mt-3 -mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
          {[
            { name: "Hannah M.", text: "Hands down the most fun cinema night I've ever had. The Grease menu was unreal.", stars: 5 },
            { name: "Daniel R.", text: "It's not a cinema, it's a whole event. We've booked three more.", stars: 5 },
            { name: "Priya S.", text: "Ratatouille night was magical. The sommelier pairing made it.", stars: 5 },
          ].map((r) => (
            <div key={r.name} className="w-72 shrink-0 rounded-2xl border border-border/60 bg-card p-4">
              <div className="flex items-center gap-1 text-[color:var(--gold)]">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm leading-relaxed">"{r.text}"</p>
              <p className="mt-3 text-xs text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover the app */}
      <section className="mt-8 px-5">
        <h3 className="font-serif text-xl font-bold">Discover the app</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Link to="/journey" className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4">
            <Ticket className="h-5 w-5 text-[color:var(--gold)]" />
            <p className="mt-3 font-serif text-base font-bold leading-tight">My Experience Journey</p>
            <p className="mt-1 text-[11px] text-muted-foreground">From booking to encore.</p>
          </Link>
          <Link to="/pwa" className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4">
            <Zap className="h-5 w-5 text-[color:var(--gold)]" />
            <p className="mt-3 font-serif text-base font-bold leading-tight">App Features</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Install · offline · push.</p>
          </Link>
          <Link to="/notifications" className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4">
            <Bell className="h-5 w-5 text-[color:var(--gold)]" />
            <p className="mt-3 font-serif text-base font-bold leading-tight">Live Alerts</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Never miss a drop.</p>
          </Link>
          <Link to="/benefits" className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4">
            <BarChart3 className="h-5 w-5 text-[color:var(--gold)]" />
            <p className="mt-3 font-serif text-base font-bold leading-tight">For Operators</p>
            <p className="mt-1 text-[11px] text-muted-foreground">The business impact.</p>
          </Link>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mt-8 px-5">
        <h3 className="font-serif text-xl font-bold">Coming soon</h3>
        <ul className="mt-3 divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card">
          {[
            { title: "Pulp Fiction", date: "Summer 2026", note: "Royale with cheese tasting menu" },
            { title: "La La Land", date: "Autumn 2026", note: "Rooftop jazz & small plates" },
            { title: "Spirited Away", date: "Winter 2026", note: "Studio Ghibli family banquet" },
          ].map((c) => (
            <li key={c.title} className="flex items-center justify-between p-4">
              <div>
                <p className="font-serif text-base font-semibold">{c.title}</p>
                <p className="text-xs text-muted-foreground">{c.note}</p>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[color:var(--gold)]">{c.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
