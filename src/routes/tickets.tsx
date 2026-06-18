import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarPlus, Compass, Share2, MapPin } from "lucide-react";
import { tickets, getExperience } from "@/lib/events";
import { ScreenHeader } from "@/components/MobileShell";

export const Route = createFileRoute("/tickets")({
  head: () => ({ meta: [{ title: "My Tickets — EatFlix" }] }),
  component: TicketsScreen,
});

// Simple inline SVG "QR" mosaic for a believable, deterministic look
function QR({ seed }: { seed: string }) {
  const cells = 21;
  // deterministic pseudo-random
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const grid: boolean[] = [];
  for (let i = 0; i < cells * cells; i++) {
    h = (h * 1664525 + 1013904223) >>> 0;
    grid.push((h & 1) === 0);
  }
  return (
    <svg viewBox={`0 0 ${cells} ${cells}`} className="h-32 w-32" aria-label="QR code">
      <rect width={cells} height={cells} fill="white" />
      {grid.map((on, i) =>
        on ? (
          <rect key={i} x={i % cells} y={Math.floor(i / cells)} width={1} height={1} fill="black" />
        ) : null,
      )}
      {/* finder squares */}
      {[
        [0, 0], [cells - 7, 0], [0, cells - 7],
      ].map(([x, y], idx) => (
        <g key={idx}>
          <rect x={x} y={y} width={7} height={7} fill="black" />
          <rect x={x + 1} y={y + 1} width={5} height={5} fill="white" />
          <rect x={x + 2} y={y + 2} width={3} height={3} fill="black" />
        </g>
      ))}
    </svg>
  );
}

function TicketsScreen() {
  return (
    <div className="animate-float-up">
      <ScreenHeader
        subtitle="MY TICKETS"
        title="Upcoming"
        right={
          <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider">
            {tickets.length} active
          </span>
        }
      />

      <div className="space-y-5 px-5">
        {tickets.map((t) => {
          const exp = getExperience(t.expSlug)!;
          return (
            <div key={t.id} className="relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-glow)]">
              {/* Top - movie strip */}
              <div className="relative h-32 w-full overflow-hidden">
                <img src={exp.image} alt={exp.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-marquee text-[10px] tracking-[0.3em] text-[color:var(--gold)]">EATFLIX CINEMA</p>
                  <h2 className="font-serif text-xl font-bold leading-tight">{exp.title}</h2>
                </div>
              </div>

              {/* Perforation */}
              <div className="ticket-notch relative h-6 bg-card">
                <div className="absolute inset-x-6 top-1/2 border-t border-dashed border-border" />
              </div>

              {/* Body */}
              <div className="grid grid-cols-[1fr_auto] gap-4 p-5 pt-1">
                <div className="min-w-0 space-y-3">
                  <Field label="DATE" value={exp.date} />
                  <Field label="DOORS" value={exp.time} />
                  <Field label="SEATS" value={t.seats} />
                  <Field label="PARTY" value={`${t.party} guests`} />
                  <Field label="TICKET" value={t.id} mono />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-xl bg-white p-2">
                    <QR seed={t.id} />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Scan at door</p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-2 border-t border-dashed border-border px-5 py-3 text-xs">
                <MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                <span className="truncate text-muted-foreground">EatFlix Soho · 14 Dean St, W1D 3RS</span>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                <ActionButton icon={CalendarPlus} label="Calendar" />
                <ActionButton icon={Compass} label="Directions" />
                <ActionButton icon={Share2} label="Share" />
              </div>
            </div>
          );
        })}

        <Link
          to="/experiences"
          className="block rounded-2xl border border-dashed border-border/80 p-5 text-center text-sm text-muted-foreground transition-colors hover:border-[color:var(--gold)] hover:text-foreground"
        >
          + Book another experience
        </Link>
      </div>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`text-sm font-semibold ${mono ? "font-mono text-xs" : ""}`}>{value}</p>
    </div>
  );
}

function ActionButton({ icon: Icon, label }: { icon: typeof CalendarPlus; label: string }) {
  return (
    <button className="flex items-center justify-center gap-2 py-3 text-xs font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground">
      <Icon className="h-4 w-4 text-[color:var(--gold)]" />
      {label}
    </button>
  );
}
