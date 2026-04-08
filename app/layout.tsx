import type { Metadata } from "next";
import "./globals.css";
// Self-hosted via fontsource (equivalent to next/font/google's Inter and
// Playfair Display). Exposed as --font-inter and --font-playfair in globals.css.
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/playfair-display/index.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { config } from "@/site.config";
import { apartmentComplexJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.siteUrl),
  title: {
    default: config.seo.defaultTitle,
    template: config.seo.titleTemplate,
  },
  description: config.seo.description,
  openGraph: {
    title: config.seo.defaultTitle,
    description: config.seo.description,
    url: config.seo.siteUrl,
    siteName: config.businessName,
    locale: config.seo.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { colors } = config;
  const bodyStyle = {
    // Design tokens from site.config.ts, exposed to every component
    "--color-bg": colors.bg,
    "--color-fg": colors.fg,
    "--color-dark": colors.dark,
    "--color-muted": colors.muted,
    "--color-line": colors.line,
    "--color-gold": colors.gold,
    "--color-gold-deep": colors.goldDeep,
  } as React.CSSProperties;

  return (
    <html lang="en" className="h-full">
      <body style={bodyStyle} className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentComplexJsonLd()),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
