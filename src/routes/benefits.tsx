import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Repeat, Bell, Zap, TrendingDown, Check, X } from "lucide-react";
import { ScreenHeader } from "@/components/MobileShell";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Business Benefits — EatFlix" },
      { name: "description", content: "How the EatFlix PWA drives retention and repeat bookings." },
    ],
  }),
  component: BenefitsScreen,
});

const stats = [
  { label: "Customer Retention", value: "+42%", icon: TrendingUp, trend: "vs. web-only baseline" },
  { label: "Repeat Bookings", value: "+35%", icon: Repeat, trend: "within 90 days" },
  { label: "Notification Open Rate", value: "78%", icon: Bell, trend: "vs. 19% email" },
  { label: "Checkout Speed", value: "2.4×", icon: Zap, trend: "faster than web flow" },
];

function BenefitsScreen() {
  return (
    <div className="animate-float-up">
      <ScreenHeader subtitle="FOR OPERATORS" title="Business Impact" />

      {/* Stats grid */}
      <section className="px-5">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4 animate-float-up" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between">
                  <Icon className="h-5 w-5 text-[color:var(--gold)]" />
                  <span className="rounded-full bg-[color:var(--gold)]/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--gold)]">Live</span>
                </div>
                <p className="mt-3 font-serif text-3xl font-bold gold-text">{s.value}</p>
                <p className="mt-1 text-xs font-medium">{s.label}</p>
                <p className="text-[10px] text-muted-foreground">{s.trend}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Drop-off chart */}
      <section className="mt-6 px-5">
        <div className="rounded-3xl border border-border/60 bg-card p-5">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-serif text-base font-bold">Booking drop-off</p>
              <p className="text-[11px] text-muted-foreground">Last 30 days · all events</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--gold)]/15 px-2 py-1 text-[10px] font-bold text-[color:var(--gold)]">
              <TrendingDown className="h-3 w-3" /> -48%
            </span>
          </div>
          <div className="mt-5 flex items-end gap-2 h-32">
            {[
              { l: "Browse", v: 100 },
              { l: "Select", v: 88 },
              { l: "Date", v: 80 },
              { l: "Seats", v: 76 },
              { l: "Pay", v: 71 },
              { l: "Done", v: 68 },
            ].map((b, i) => (
              <div key={b.l} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md ember-bg transition-all"
                  style={{ height: `${b.v}%`, opacity: 0.4 + i * 0.1 }}
                />
                <span className="text-[9px] text-muted-foreground">{b.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mt-6 px-5">
        <h3 className="font-serif text-lg font-bold">PWA vs Native App</h3>
        <div className="mt-3 overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border bg-secondary/40 px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
            <span></span><span className="text-center">PWA</span><span className="text-center">Native</span>
          </div>
          {[
            ["No App Store fees", true, false],
            ["No Apple review process", true, false],
            ["No Android review process", true, false],
            ["Works on every phone", true, false],
            ["Install from website", true, false],
            ["Push notifications", true, true],
            ["Offline tickets", true, true],
            ["Home screen icon", true, true],
          ].map(([label, pwa, native]) => (
            <div key={label as string} className="grid grid-cols-[1fr_auto_auto] gap-4 border-t border-border/40 px-4 py-3 text-sm first:border-t-0">
              <span>{label}</span>
              <span className="text-center">{pwa ? <Check className="mx-auto h-4 w-4 text-[color:var(--gold)]" /> : <X className="mx-auto h-4 w-4 text-muted-foreground" />}</span>
              <span className="text-center">{native ? <Check className="mx-auto h-4 w-4 text-muted-foreground" /> : <X className="mx-auto h-4 w-4 text-muted-foreground" />}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-8 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--primary)] via-[color:var(--ember)] to-[color:var(--gold)] p-5 text-background shadow-[var(--shadow-gold)]">
          <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
          <p className="font-marquee text-[11px] tracking-[0.3em] opacity-90">FOR EATFLIX</p>
          <h3 className="mt-1 font-serif text-2xl font-bold leading-tight">A real mobile presence in 2026</h3>
          <p className="mt-2 max-w-[280px] text-xs opacity-90">
            Built specifically for themed dinner-cinema. Owned channel, no platform fees, every guest one tap from rebooking.
          </p>
        </div>
      </section>
    </div>
  );
}
