// src/app/layout.tsx
// ClearFlow Septic — root layout
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.clearflowseptic.com"
  : "http://localhost:3000";

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d1b2a" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d1b2a" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ClearFlow Septic | Pumping, Install, Repair & Aerobic Systems — Waco, TX",
    template: "%s | ClearFlow Septic",
  },
  description:
    "ClearFlow Septic is a Waco, TX septic company offering septic pumping, new installs, aerobic systems, repair, drain field service, and inspections for Central Texas homes, ranches, and RV parks. TCEQ-licensed, bonded & insured.",
  keywords: [
    "ClearFlow Septic",
    "septic pumping Waco TX",
    "septic install Waco Texas",
    "aerobic septic system Central Texas",
    "septic repair Waco TX",
    "drain field repair Waco",
    "septic inspection Temple TX",
    "emergency septic pump-out Waco",
    "TCEQ licensed septic installer",
  ],
  authors: [{ name: "ClearFlow Septic", url: BASE_URL }],
  creator: "ClearFlow Septic",
  publisher: "ClearFlow Septic",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "ClearFlow Septic | Pumping, Install, Repair & Aerobic Systems — Waco, TX",
    description:
      "Waco-based septic company for pumping, installs, aerobic systems, repair, drain fields, and inspections across Central Texas. TCEQ-licensed · Clean Job Guarantee · Emergency pump-out available.",
    url: BASE_URL,
    siteName: "ClearFlow Septic",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "ClearFlow Septic — Waco TX Septic Pumping, Install & Repair",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearFlow Septic | Waco TX Septic Pros",
    description:
      "Septic pumping, installs, aerobic systems, repair & inspections for Central Texas. TCEQ-licensed · Clean Job Guarantee.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
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
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "ClearFlow Septic",
  alternateName: "ClearFlow Septic Waco",
  description:
    "Residential and commercial septic services in Waco and Central Texas — septic pumping, new septic install, aerobic systems, septic repair, drain field repair, and inspections. TCEQ-licensed installers, bonded & insured, Clean Job Guarantee, emergency pump-out available.",
  url: BASE_URL,
  telephone: "+12548707070",
  email: "hello@clearflowseptic.com",
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: "Wade Harmon",
    jobTitle: "Owner & Lead Septic Specialist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1900 S University Parks Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Septic Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Pumping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Septic Install" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aerobic Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Field Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspections & Maintenance" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/clearflowseptic",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#065f46" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0d1b2a",
                }}
              >
                <PulseLoader size={50} color="#065f46" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
