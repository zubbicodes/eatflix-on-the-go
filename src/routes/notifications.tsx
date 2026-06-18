import { createFileRoute } from "@tanstack/react-router";
import { Bell, Sparkles, Ticket, Utensils, Star } from "lucide-react";
import { notifications } from "@/lib/events";
import { ScreenHeader } from "@/components/MobileShell";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications — EatFlix" }] }),
  component: NotificationsScreen,
});

const ICONS = {
  reminder: Ticket,
  new: Sparkles,
  news: Bell,
  perk: Star,
  menu: Utensils,
} as const;

function NotificationsScreen() {
  const unreadCount = notifications.filter((n) => n.unread).length;
  return (
    <div className="animate-float-up">
      <ScreenHeader
        subtitle="PUSH ALERTS"
        title="Notifications"
        right={
          <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
            {unreadCount} new
          </span>
        }
      />

      {/* Today */}
      <div className="px-5">
        <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">Today</p>
        <ul className="space-y-2">
          {notifications.slice(0, 2).map((n) => (
            <NotificationItem key={n.id} {...n} />
          ))}
        </ul>
      </div>

      <div className="mt-6 px-5">
        <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">Earlier</p>
        <ul className="space-y-2">
          {notifications.slice(2).map((n) => (
            <NotificationItem key={n.id} {...n} />
          ))}
        </ul>
      </div>

      {/* Push opt-in card */}
      <div className="mt-8 px-5">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/40 bg-gradient-to-br from-[color:var(--gold)]/15 via-card to-card p-5">
          <Bell className="h-6 w-6 text-[color:var(--gold)]" />
          <h3 className="mt-3 font-serif text-xl font-bold">Never miss a drop</h3>
          <p className="mt-2 text-xs text-muted-foreground">
            New experiences sell out in hours. Turn on push alerts to get early-access tickets 48 hours before public release.
          </p>
          <button className="mt-4 rounded-full ember-bg px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-glow)]">
            Enable push notifications
          </button>
        </div>
      </div>
    </div>
  );
}

function NotificationItem({
  title, body, time, type, unread,
}: (typeof notifications)[number]) {
  const Icon = ICONS[type as keyof typeof ICONS] ?? Bell;
  return (
    <li className={`relative flex gap-3 rounded-2xl border p-4 ${unread ? "border-[color:var(--gold)]/30 bg-card" : "border-border/60 bg-card/60"}`}>
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${unread ? "ember-bg" : "bg-secondary"}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-serif text-sm font-semibold leading-tight">{title}</p>
          <span className="shrink-0 text-[10px] text-muted-foreground">{time}</span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</p>
      </div>
      {unread && <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[color:var(--gold)]" />}
    </li>
  );
}
