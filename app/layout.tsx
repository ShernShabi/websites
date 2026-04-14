import type { Metadata } from "next";
import "./globals.css";
// Self-hosted via fontsource (equivalent to next/font/google's DM Sans and
// DM Serif Display). Exposed as --font-sans and --font-serif in globals.css.
import "@fontsource-variable/dm-sans/index.css";
import "@fontsource/dm-serif-display/index.css";
import "@fontsource/dm-serif-display/400-italic.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
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
  twitter: {
    card: "summary_large_image",
    title: config.seo.defaultTitle,
    description: config.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { colors } = config;
  // Warm Modernist design tokens, emitted as a static `:root` block.
  // We write these through a dedicated <style> tag rather than the body's
  // `style` prop because React 19 serializes custom-property style objects
  // inconsistently between server and client, which causes a hydration
  // mismatch that can cancel className application. Raw CSS text is
  // byte-identical on both sides and hydrates cleanly.
  const tokensCss = `:root{--color-bg:${colors.bg};--color-fg:${colors.fg};--color-dark:${colors.dark};--color-charcoal:${colors.charcoal};--color-terracotta:${colors.terracotta};--color-terracotta-deep:${colors.terracottaDeep};--color-sage:${colors.sage};--color-muted:${colors.muted};--color-line:${colors.line};}`;

  return (
    <html lang="en" className="h-full">
      <head>
        <style dangerouslySetInnerHTML={{ __html: tokensCss }} />
      </head>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentComplexJsonLd()),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
