import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, History, Bookmark, Salad, Leaf, Settings, ChevronRight, Sparkles, Crown } from "lucide-react";
import { ScreenHeader } from "@/components/MobileShell";
import { experiences } from "@/lib/events";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — EatFlix" }] }),
  component: ProfileScreen,
});

function ProfileScreen() {
  return (
    <div className="animate-float-up">
      <ScreenHeader subtitle="MEMBER" title="Profile" />

      {/* Member card */}
      <section className="px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--primary)] via-[color:var(--ember)] to-[color:var(--gold)] p-5 text-background shadow-[var(--shadow-gold)]">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-background/20 backdrop-blur-md font-serif text-xl font-bold">
              HM
            </div>
            <div>
              <p className="font-marquee text-[11px] tracking-[0.3em] text-background/90">FRONT ROW MEMBER</p>
              <h2 className="font-serif text-2xl font-bold leading-tight">Hannah Morgan</h2>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <Stat label="Events" value="12" />
            <Stat label="Tickets" value="24" />
            <Stat label="Reviews" value="8" />
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-2xl bg-background/15 p-3 backdrop-blur-md">
            <Crown className="h-4 w-4" />
            <p className="text-xs">
              <span className="font-semibold">Gold tier</span> · 3 events to Platinum
            </p>
          </div>
        </div>
      </section>

      {/* Favourites */}
      <section className="mt-8 px-5">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold">Favourite experiences</h3>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">3 saved</span>
        </div>
        <div className="no-scrollbar mt-3 -mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
          {experiences.slice(0, 3).map((e) => (
            <Link key={e.slug} to="/experiences/$slug" params={{ slug: e.slug }} className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-2xl border border-border/40">
              <img src={e.image} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <Heart className="absolute right-2 top-2 h-3.5 w-3.5 fill-[color:var(--primary)] text-[color:var(--primary)]" />
              <p className="absolute bottom-2 left-2 right-2 truncate text-[11px] font-semibold">{e.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="mt-6 px-5">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <Row icon={History} label="Booking history" hint="12 past events" />
          <Row icon={Bookmark} label="Saved events" hint="5 saved" />
          <Row icon={Salad} label="Food preferences" hint="2 set" />
          <Row icon={Leaf} label="Dietary requirements" hint="Vegetarian" />
        </div>

        <div className="mt-3 overflow-hidden rounded-2xl border border-border/60 bg-card">
          <Row icon={Sparkles} label="My experience journey" hint="See the flow" to="/journey" />
          <Row icon={Settings} label="Settings" hint="Notifications, account" />
        </div>
      </section>

      {/* App showcase shortcut */}
      <section className="mt-8 px-5">
        <Link to="/pwa" className="flex items-center justify-between rounded-2xl border border-[color:var(--gold)]/30 bg-gradient-to-br from-[color:var(--gold)]/10 to-transparent p-4">
          <div>
            <p className="font-marquee text-[10px] tracking-[0.3em] text-[color:var(--gold)]">NEW</p>
            <p className="font-serif text-base font-bold">Install EatFlix to your phone</p>
            <p className="text-[11px] text-muted-foreground">Faster booking · push alerts · offline tickets</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-background/15 py-2 backdrop-blur-md">
      <p className="font-serif text-xl font-bold leading-none">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider opacity-80">{label}</p>
    </div>
  );
}

function Row({ icon: Icon, label, hint, to }: { icon: typeof Heart; label: string; hint: string; to?: "/journey" | "/pwa" }) {
  const inner = (
    <>
      <Icon className="h-4 w-4 text-[color:var(--gold)]" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-[11px] text-muted-foreground">{hint}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className="flex items-center gap-3 border-b border-border/60 p-4 last:border-b-0 hover:bg-secondary/50">
        {inner}
      </Link>
    );
  }
  return (
    <button className="flex w-full items-center gap-3 border-b border-border/60 p-4 text-left last:border-b-0 hover:bg-secondary/50">
      {inner}
    </button>
  );
}
