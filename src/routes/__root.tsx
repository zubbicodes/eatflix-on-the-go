import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { MobileShell } from "../components/MobileShell";

function NotFoundComponent() {
  return (
    <MobileShell>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-marquee text-sm tracking-[0.4em] gold-text">SCREEN NOT FOUND</p>
        <h1 className="mt-4 font-serif text-5xl font-bold">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This reel is missing. Take a seat — we'll roll the next one.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full ember-bg px-6 py-3 text-sm font-semibold shadow-[var(--shadow-glow)]"
        >
          Back to Home
        </Link>
      </div>
    </MobileShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <MobileShell>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-2xl font-bold">Intermission</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something interrupted the projector. Try again.
        </p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full ember-bg px-6 py-3 text-sm font-semibold"
        >
          Try again
        </button>
      </div>
    </MobileShell>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a0808" },
      { title: "EatFlix Cinema — Watch It. Eat It. Love It." },
      { name: "description", content: "Immersive dinner-cinema experiences. Themed movies, themed menus, unforgettable nights." },
      { property: "og:title", content: "EatFlix Cinema" },
      { property: "og:description", content: "Watch It. Eat It. Love It. Themed dinner-cinema events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <MobileShell>
        <Outlet />
      </MobileShell>
    </QueryClientProvider>
  );
}
