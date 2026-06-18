import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Wifi, Bell, Zap, Repeat, Ticket, CalendarClock, Download } from "lucide-react";
import { ScreenHeader } from "@/components/MobileShell";

export const Route = createFileRoute("/pwa")({
  head: () => ({
    meta: [
      { title: "App Features — EatFlix" },
      { name: "description", content: "Install EatFlix to your phone. Offline, push, fast." },
    ],
  }),
  component: PWAScreen,
});

const features = [
  { icon: Smartphone, title: "Install to home screen", body: "One tap from the website. No App Store. No download bar." },
  { icon: Wifi, title: "Works offline", body: "Your tickets, menu, and arrival info stay available even without signal." },
  { icon: Bell, title: "Push notifications", body: "Native phone alerts for early access drops and event reminders." },
  { icon: Zap, title: "Sub-second loading", body: "Cached-first delivery means screens open instantly, every time." },
  { icon: Ticket, title: "Saved tickets", body: "QR codes stored locally — flash and scan at the door." },
  { icon: Repeat, title: "One-tap rebooking", body: "Loved it? Rebook the next showing in two taps from the journey screen." },
  { icon: CalendarClock, title: "Smart reminders", body: "Auto-syncs to your phone calendar with venue, doors, and seat info." },
];

function PWAScreen() {
  return (
    <div className="animate-float-up">
      <ScreenHeader subtitle="MOBILE EXPERIENCE" title="App Features" />

      {/* Install banner */}
      <div className="px-5">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/30 bg-gradient-to-br from-[color:var(--primary)]/20 via-card to-card p-5 shadow-[var(--shadow-glow)]">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
          <Download className="h-7 w-7 text-[color:var(--gold)]" />
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight">
            Install EatFlix<br />to your phone
          </h2>
          <p className="mt-2 text-xs text-muted-foreground">
            A real mobile app experience without the App Store. Tap "Add to Home Screen" and we're in.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full ember-bg px-5 py-3 text-sm font-bold shadow-[var(--shadow-glow)]">
            <Smartphone className="h-4 w-4" /> Install App
          </button>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
            {["iOS Safari", "Android Chrome", "No App Store", "No fees"].map((t) => (
              <span key={t} className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 px-5">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-4 animate-float-up" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--gold)]/15">
                <Icon className="h-4 w-4 text-[color:var(--gold)]" />
              </div>
              <p className="mt-3 font-serif text-sm font-bold leading-tight">{f.title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          );
        })}
      </div>

      {/* Live demo strip */}
      <div className="mt-8 px-5">
        <h3 className="font-serif text-lg font-bold">Live capabilities</h3>
        <div className="mt-3 space-y-2">
          {[
            { label: "Service worker", value: "Active", ok: true },
            { label: "Push notifications", value: "Enabled", ok: true },
            { label: "Offline tickets", value: "Cached · 2", ok: true },
            { label: "Install prompt", value: "Available", ok: true },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3 text-sm">
              <span>{r.label}</span>
              <span className="flex items-center gap-2 text-[color:var(--gold)]">
                <span className="h-2 w-2 rounded-full bg-[color:var(--gold)] shadow-[0_0_8px_var(--gold)]" />
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
