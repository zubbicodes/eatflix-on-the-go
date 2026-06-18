import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Film, Ticket, Bell, User } from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/experiences", label: "Experiences", icon: Film },
  { to: "/tickets", label: "Tickets", icon: Ticket },
  { to: "/notifications", label: "Alerts", icon: Bell },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function MobileShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col bg-background">
      {/* status bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-medium text-foreground/70 backdrop-blur-xl bg-background/70">
        <span>9:41</span>
        <span className="font-marquee tracking-[0.3em] gold-text text-[10px]">EATFLIX</span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground/60" />
          <span className="inline-block h-2 w-3 rounded-sm border border-foreground/60" />
        </span>
      </div>

      <main className="flex-1 pb-28">{children}</main>

      {/* bottom nav */}
      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[440px] -translate-x-1/2 px-3 pb-3">
        <div className="glass rounded-full px-2 py-2 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)]">
          <ul className="flex items-center justify-between">
            {nav.map(({ to, label, icon: Icon, exact }) => {
              const active = exact ? pathname === to : pathname.startsWith(to);
              return (
                <li key={to} className="flex-1">
                  <Link
                    to={to}
                    className={`flex flex-col items-center gap-0.5 rounded-full py-1.5 text-[10px] font-medium transition-all ${
                      active ? "text-background" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full transition-all ${
                        active ? "ember-bg shadow-[var(--shadow-glow)]" : ""
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={active ? 2.5 : 2} />
                    </span>
                    <span className={active ? "text-foreground" : ""}>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export function ScreenHeader({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <header className="flex items-end justify-between px-5 pt-4 pb-5">
      <div className="min-w-0">
        {subtitle && (
          <p className="font-marquee text-[11px] tracking-[0.3em] text-[color:var(--gold)]">
            {subtitle}
          </p>
        )}
        <h1 className="mt-1 truncate text-3xl font-bold leading-none">{title}</h1>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </header>
  );
}
