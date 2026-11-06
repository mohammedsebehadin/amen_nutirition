import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Amen Weight & Wellness — Simple, Sustainable Nutrition",
  description: "Evidence-based metabolic nutrition and 1-on-1 personal coaching with Coach Amen.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#062016] text-[#f8fafc] selection:bg-emerald-400/30 selection:text-white font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
