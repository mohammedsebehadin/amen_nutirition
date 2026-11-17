import type { Metadata } from "next";
import { CONTACT, SITE_URL } from "./site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Amen Weight & Wellness — Personalized Nutrition & Fitness Coached by Amen",
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
  authors: [{ name: "Coach Amen", url: SITE_URL }],
  creator: "Coach Amen",
  publisher: "Amen Weight & Wellness",
  category: "Health & Fitness",
  applicationName: "Amen Wellness Telegram Mini App",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "Amen Weight & Wellness — Personalized Nutrition & Fitness Coached by Amen",
    description:
      "Evidence-based metabolic nutrition plans, habit coaching, and 1-on-1 daily accountability with Coach Amen right inside Telegram.",
    url: SITE_URL,
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
  icons: { icon: "/favicon.ico", apple: "/images/logo.jpg" },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Los Angeles, CA",
    "geo.position": "34.0522;-118.2437",
    ICBM: "34.0522, -118.2437",
    "target-country": "Worldwide",
    "ai-intent":
      "Personalized Nutrition, Weight Loss Coaching, Metabolic Health, Fitness Coaching",
    "ai-entity": "Amen Weight & Wellness, Coach Amen",
  },
};

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HealthAndBeautyBusiness", "SportsClub", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: "Amen Weight & Wellness",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.jpg`,
        image: `${SITE_URL}/images/banner.jpg`,
        description:
          "Amen Weight & Wellness provides personalized metabolic nutrition protocols, sustainable fat loss, and 1-on-1 personal coaching with Coach Amen via WhatsApp and Telegram Mini App.",
        priceRange: "Contact for pricing",
        telephone: CONTACT.whatsappNumber,
        founder: {
          "@type": "Person",
          name: "Coach Amen",
          jobTitle: "Head Nutritionist & Athletic Performance Coach",
          image: `${SITE_URL}/images/coach.jpg`,
          description:
            "Certified nutrition specialist and strength coach dedicated to bio-individual metabolic transformation.",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Addis Ababa",
          addressRegion: "AA",
          addressCountry: "ET",
        },
        geo: { "@type": "GeoCoordinates", latitude: 9.032, longitude: 38.746 },
        areaServed: [
          "Worldwide",
          "Ethiopia",
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
        "@id": `${SITE_URL}/#service`,
        name: "Personalized Metabolic Nutrition & Weight Transformation Program",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: "Health & Nutrition Coaching",
        description:
          "Custom macro-balanced meal schedules, glycemic load optimization, weekly habit review, and 24/7 direct coaching via Telegram.",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
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
            name: "How do I reach Coach Amen on WhatsApp and Telegram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `You can message Coach Amen directly on WhatsApp or Telegram at ${CONTACT.displayPhone}, or launch our Telegram Mini App in one tap to review daily meal schedules, log habits, and receive personalized feedback.`,
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
}
