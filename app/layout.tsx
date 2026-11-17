import type { Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteMetadata, getJsonLd } from "@/lib/seo";

export const metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#15803d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getJsonLd();

  return (
    <html lang="en" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="flex min-h-full flex-col bg-[#fbfbfa] font-sans text-stone-900 selection:bg-emerald-500/20 selection:text-emerald-950"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
