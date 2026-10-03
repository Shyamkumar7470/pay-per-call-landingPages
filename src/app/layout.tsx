import "./globals.css";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.siteName} | Connect with Licensed Providers`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: "Connect directly with verified local roofing contractors, home insurance specialists, and auto insurance providers over the phone. Free referral network.",
  verification: {
    google: siteConfig.verification.google,
    other: {
      "msvalidate.01": siteConfig.verification.bing,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} | Direct Phone Referral Network`,
    description: "Connect directly with verified licensed providers for home insurance, auto insurance, and roofing over the phone.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} | Direct Phone Referral Network`,
    description: "Connect directly with verified licensed providers for home insurance, auto insurance, and roofing over the phone.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#184542",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-signal focus:text-ink">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
