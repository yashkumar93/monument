import type { Metadata } from "next";
import { ThemeProvider, themeBootstrapScript } from "@/lib/theme";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { Tweaks } from "@/components/tweaks";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monument — Infrastructure Studio",
  description:
    "An infrastructure studio for ambitious CPA, law, and advisory firms. Brand, web, and demand systems, built by operators.",
  metadataBase: new URL("https://monument.solutions"),
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon-32.png",
  },
  openGraph: {
    title: "Monument — Infrastructure Studio",
    description:
      "An infrastructure studio for ambitious CPA, law, and advisory firms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline bootstrap so theme is set before paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,0..100;1,9..144,300..600,0..100&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-page text-ink antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <CursorGlow />
          <Nav />
          {children}
          <SiteFooter />
          <Tweaks />
        </ThemeProvider>
      </body>
    </html>
  );
}
