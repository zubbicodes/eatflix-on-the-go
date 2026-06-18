import { createFileRoute } from "@tanstack/react-router";
import { Ticket, Utensils, Bell, MapPin, Film, MessageSquareHeart, Check } from "lucide-react";
import { ScreenHeader } from "@/components/MobileShell";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "My Experience Journey — EatFlix" },
      { name: "description", content: "From booking to encore — every EatFlix experience, mapped." },
    ],
  }),
  component: JourneyScreen,
});

const steps = [
  { icon: Ticket, title: "Ticket purchased", body: "Confirmation in your wallet within seconds. Add to calendar with one tap.", status: "done", time: "Mon 9 Feb" },
  { icon: Utensils, title: "Menu revealed", body: "Two weeks before the event we drop the full themed menu, ingredients, and wine pairings.", status: "done", time: "Mon 23 Feb" },
  { icon: Bell, title: "Event reminder", body: "Push alert 24 hours before doors. Pre-order signature cocktails and skip the bar queue.", status: "current", time: "Thu 13 Feb" },
  { icon: MapPin, title: "Arrival instructions", body: "Live directions, parking tips, and your QR ticket appear at the top of the app on the day.", status: "upcoming", time: "Fri 14 Feb" },
  { icon: Film, title: "Cinema experience", body: "Doors at 7:00 PM. Dim the phone, enjoy the show. Your menu is timed to scene cues.", status: "upcoming", time: "Fri 14 Feb · 7:30 PM" },
  { icon: MessageSquareHeart, title: "Leave a review", body: "Rate, tag your favourite dish, and earn loyalty points for your next encore.", status: "upcoming", time: "Sat 15 Feb" },
] as const;

function JourneyScreen() {
  return (
    <div className="animate-float-up">
      <ScreenHeader subtitle="NEW · BOOKING FLOW" title="My Journey" />

      <div className="px-5 pb-2">
        <div className="rounded-2xl border border-border/60 bg-card p-4">
          <div className="flex items-center justify-between">
            <p className="font-serif text-sm font-semibold">Grease — Greased Lightnin' Diner Night</p>
            <span className="text-[10px] uppercase tracking-wider text-[color:var(--gold)]">In progress</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-1/2 ember-bg" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            <span>Booked</span><span>3 of 6</span><span>Encore</span>
          </div>
        </div>
      </div>

      <div className="relative px-5 pt-6">
        {/* timeline rail */}
        <div className="absolute left-[36px] top-8 bottom-4 w-px bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--primary)] to-border" />

        <ul className="space-y-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const done = s.status === "done";
            const current = s.status === "current";
            return (
              <li key={s.title} className="relative flex gap-4" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative z-10 shrink-0">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 ${
                      done
                        ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-background"
                        : current
                        ? "border-[color:var(--primary)] ember-bg pulse-ring"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </div>
                </div>
                <div className={`flex-1 rounded-2xl border p-4 ${current ? "border-[color:var(--primary)]/40 bg-card" : "border-border/50 bg-card/60"}`}>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-serif text-base font-semibold">{s.title}</p>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.time}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                  {current && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-[color:var(--primary)]/15 p-2 text-[11px]">
                      <Bell className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                      <span>Push alert scheduled · 6:00 PM tomorrow</span>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
