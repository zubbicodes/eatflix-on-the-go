import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, Utensils, Wine } from "lucide-react";
import { experiences } from "@/lib/events";
import { ScreenHeader } from "@/components/MobileShell";

export const Route = createFileRoute("/experiences/")({
  head: () => ({
    meta: [
      { title: "Experiences — EatFlix Cinema" },
      { name: "description", content: "Browse upcoming themed dinner-cinema experiences." },
    ],
  }),
  component: ExperiencesList,
});

function ExperiencesList() {
  return (
    <div className="animate-float-up">
      <ScreenHeader subtitle="NOW SHOWING" title="Experiences" />
      <div className="space-y-4 px-5">
        {experiences.map((e, i) => (
          <Link
            key={e.slug}
            to="/experiences/$slug"
            params={{ slug: e.slug }}
            className="group block overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-[var(--shadow-glow)]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              {e.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-[color:var(--gold)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                  {e.badge}
                </span>
              )}
              <div className="absolute bottom-3 left-4 right-4">
                <p className="font-marquee text-[10px] tracking-[0.3em] text-foreground/80">{e.tagline.toUpperCase()}</p>
                <h2 className="font-serif text-2xl font-bold leading-tight">{e.title}</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground line-clamp-2">{e.description}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{e.date.split(" ").slice(0, 3).join(" ")}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{e.duration}</span>
                <span className="flex items-center gap-1"><Utensils className="h-3 w-3" />{e.menu.length} courses</span>
                <span className="flex items-center gap-1"><Wine className="h-3 w-3" />Themed bar</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
