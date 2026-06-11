import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AdSenseConsentGate } from "@/components/adsense-consent-gate";
import { CookieBanner } from "@/components/cookie-banner";
import { GraffitiBackdrop } from "@/components/graffiti-backdrop";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import { getAdsenseClientId } from "@/lib/adsense-config";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const adsenseClient = getAdsenseClientId();

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} – skate, BMX, løbehjul og skateparker i Danmark`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: siteUrl },
  other: {
    "google-adsense-account": adsenseClient,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="da"
      className={`${bebas.variable} ${barlow.variable} ${marker.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta name="google-adsense-account" content={adsenseClient} />
      </head>
      <body className="flex min-h-full flex-col font-sans text-[var(--text)]">
        <GraffitiBackdrop />
        <AdSenseConsentGate />
        <CookieBanner />
        <OrganizationJsonLd />
        <WebSiteJsonLd url={siteUrl} />
        <SiteHeader />
        <main className="relative z-10 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
