import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amenwellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amen Weight & Wellness — Personalized Nutrition & Fitness Coached by Amen",
    template: "%s | Amen Weight & Wellness",
  },
  description:
    "Transform your metabolic health with evidence-based personalized nutrition plans, sustainable fat loss, and 1-on-1 personal coaching with Coach Amen directly inside Telegram.",
  keywords: [
    "Amen Weight and Wellness",
    "Coach Amen",
    "personalized nutrition plan",
    "sustainable weight loss",
    "metabolic health coaching",
    "custom macro diet",
    "anti-inflammatory nutrition",
    "Telegram fitness mini app",
    "body recomposition coach",
    "online nutritionist consultation",
    "healthy meal plans",
    "visceral fat reduction",
    "gut health and weight loss",
  ],
  authors: [{ name: "Coach Amen", url: siteUrl }],
  creator: "Coach Amen",
  publisher: "Amen Weight & Wellness",
  category: "Health & Fitness",
  applicationName: "Amen Wellness Telegram Mini App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Amen Weight & Wellness — Personalized Nutrition & Fitness Coached by Amen",
    description:
      "Evidence-based metabolic nutrition plans, habit coaching, and 1-on-1 daily accountability with Coach Amen right inside Telegram.",
    url: siteUrl,
    siteName: "Amen Weight & Wellness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Amen Weight & Wellness Wholesome Culinary Architecture",
      },
      {
        url: "/images/coach.jpg",
        width: 800,
        height: 1000,
        alt: "Coach Amen — Head Nutritionist & Performance Specialist",
      },
      {
        url: "/images/logo.jpg",
        width: 500,
        height: 500,
        alt: "Amen Weight & Wellness Official Crest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amen Weight & Wellness | Coached by Amen",
    description:
      "No crash diets. Just science, whole foods, and personalized metabolic coaching inside Telegram.",
    images: ["/images/banner.jpg"],
    creator: "@amenwellness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.jpg",
  },
  other: {
    // GEO (Geographic SEO & Local Search tags)
    "geo.region": "US-CA",
    "geo.placename": "Los Angeles, CA",
    "geo.position": "34.0522;-118.2437",
    ICBM: "34.0522, -118.2437",
    "target-country": "Worldwide",
    // GEO (Generative Engine Optimization / AI Search Crawlers)
    "ai-intent": "Personalized Nutrition, Weight Loss Coaching, Metabolic Health, Fitness Coaching",
    "ai-entity": "Amen Weight & Wellness, Coach Amen",
  },
};

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
  // Rich Structured Data (JSON-LD) for Search Engines & Generative AI Models (GEO/SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HealthAndBeautyBusiness", "SportsClub", "LocalBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: "Amen Weight & Wellness",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.jpg`,
        image: `${siteUrl}/images/banner.jpg`,
        description:
          "Amen Weight & Wellness provides personalized metabolic nutrition protocols, sustainable fat loss, and 1-on-1 personal coaching with Coach Amen via web and Telegram Mini App.",
        priceRange: "$$",
        telephone: "+1-800-555-AMEN",
        founder: {
          "@type": "Person",
          name: "Coach Amen",
          jobTitle: "Head Nutritionist & Athletic Performance Coach",
          image: `${siteUrl}/images/coach.jpg`,
          description:
            "Certified nutrition specialist and strength coach dedicated to bio-individual metabolic transformation.",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.0522,
          longitude: -118.2437,
        },
        areaServed: [
          "Worldwide",
          "United States",
          "United Kingdom",
          "Canada",
          "United Arab Emirates",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "07:00",
            closes: "21:00",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Personalized Metabolic Nutrition & Weight Transformation Program",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Health & Nutrition Coaching",
        description:
          "Custom macro-balanced meal schedules, glycemic load optimization, weekly habit review, and 24/7 direct coaching via Telegram.",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How does the Amen Weight & Wellness protocol work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Amen Protocol begins with a metabolic and lifestyle assessment. Coach Amen designs a 100% bio-individual meal architecture with calibrated proteins, healthy fats, and low-glycemic carbs to accelerate fat oxidation while keeping hunger and cravings under control.",
            },
          },
          {
            "@type": "Question",
            name: "How do I access Coach Amen on Telegram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can open our Telegram Mini App in one tap from your phone or desktop. Inside Telegram, you can review your daily meal schedule, log habits, and send photos of your meals directly to Coach Amen for real-time feedback.",
            },
          },
          {
            "@type": "Question",
            name: "Are the nutrition plans restrictive or based on crash diets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Coach Amen strictly avoids crash starvation diets that wreck metabolism. Every protocol is built around anti-inflammatory whole foods, satisfying portions, and sustainable nutritional science that you can maintain for life.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        {/* JSON-LD Structured Data Schema for SEO & AI Engine Crawlers (GEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#fbfbfa] text-stone-900 selection:bg-emerald-500/20 selection:text-emerald-950 font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
