"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return;
    const query = searchParams.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;
    window.gtag("config", GA_ID, { page_path });
  }, [pathname, searchParams]);

  return null;
}

/** アフィリエイトのリンク先を ASP ごとに見分ける。対象外のリンクは null。 */
function affiliateProgram(url: URL): string | null {
  const host = url.hostname;
  if (host.endsWith("amazon.co.jp") || host === "amzn.to") return "amazon";
  if (host.endsWith("a8.net")) return "a8";
  return null;
}

/**
 * アフィリエイトリンクのクリックを affiliate_click イベントとして送る。
 * リンクは Server Component にも散らばっているので、個別に onClick を付けず
 * document で拾う。placement は祖先の data-affiliate-placement（無ければページのパス）。
 */
function AffiliateClickTracker() {
  useEffect(() => {
    const handle = (event: MouseEvent) => {
      if (typeof window.gtag !== "function") return;
      // auxclick は右クリックでも飛んでくるので中クリックだけ通す
      if (event.type === "auxclick" && event.button !== 1) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }
      const program = affiliateProgram(url);
      if (!program) return;

      const placement =
        anchor.closest<HTMLElement>("[data-affiliate-placement]")?.dataset.affiliatePlacement ??
        window.location.pathname;

      window.gtag("event", "affiliate_click", {
        program,
        placement,
        link_url: anchor.href,
        link_text: anchor.textContent?.trim().slice(0, 100),
        transport_type: "beacon",
      });
    };

    // 中クリック（新しいタブで開く）は click では発火しないので auxclick も拾う
    document.addEventListener("click", handle, true);
    document.addEventListener("auxclick", handle, true);
    return () => {
      document.removeEventListener("click", handle, true);
      document.removeEventListener("auxclick", handle, true);
    };
  }, []);

  return null;
}

export default function GoogleAnalytics() {
  // ID未設定（ローカル開発・未連携）のときは何も読み込まない
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <AffiliateClickTracker />
    </>
  );
}
