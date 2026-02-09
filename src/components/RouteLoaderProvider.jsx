"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

const RouteLoaderContext = createContext({
  startLoading: () => {},
});

export function useRouteLoader() {
  return useContext(RouteLoaderContext);
}

function isModifiedEvent(e) {
  return e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
}

function getSameOriginUrl(href) {
  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    return url;
  } catch {
    return null;
  }
}

export default function RouteLoaderProvider({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const ctx = useMemo(
    () => ({
      startLoading: () => setIsLoading(true),
    }),
    []
  );

  // Stop loader when navigation completes.
  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  // Global click handler to show loader for internal navigations (Link -> <a>).
  useEffect(() => {
    const onClickCapture = (e) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return; // left click only
      if (isModifiedEvent(e)) return;

      const target = e.target;
      const anchor =
        target instanceof Element ? target.closest("a[href]") : null;
      if (!anchor) return;

      // Ignore new tab/window, downloads, etc.
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr) return;
      if (hrefAttr.startsWith("#")) return;
      if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;

      const nextUrl = getSameOriginUrl(hrefAttr);
      if (!nextUrl) return;

      const currentUrl = new URL(window.location.href);
      if (
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.search === currentUrl.search
      ) {
        return; // same page, don't show loader
      }

      setIsLoading(true);

      // Safety auto-hide (in case navigation is blocked)
      window.setTimeout(() => setIsLoading(false), 8000);
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, []);

  return (
    <RouteLoaderContext.Provider value={ctx}>
      {children}
      {isLoading ? (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-white/90 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/logo.png"
              alt="MuttaiKadai"
              width={110}
              height={110}
              priority
            />
            <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
            <div className="text-sm font-semibold text-purple">
              Loading...
            </div>
          </div>
        </div>
      ) : null}
    </RouteLoaderContext.Provider>
  );
}

