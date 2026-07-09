import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/services/septic-pumping';

export const metadata: Metadata = {
  title: "Septic Pumping Waco TX | ClearFlow Septic",
  description: "Scheduled and emergency septic tank pump-outs with thorough cleaning. Flat-rate pricing, Clean Job Guarantee, TCEQ-licensed.",
  keywords: [
    "septic pumping Waco TX",
    "septic tank pump out Waco",
    "emergency septic pump-out Central Texas",
    "ClearFlow Septic",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Septic Pumping Waco TX | ClearFlow Septic",
    description: "Scheduled and emergency septic tank pump-outs with thorough cleaning. Flat-rate pricing, Clean Job Guarantee, TCEQ-licensed.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Septic Pumping Waco TX | ClearFlow Septic",
    description: "Scheduled and emergency septic tank pump-outs with thorough cleaning. Flat-rate pricing, Clean Job Guarantee, TCEQ-licensed.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Septic Pumping",
  description: "Scheduled and emergency septic tank pump-outs with thorough cleaning. Flat-rate pricing, Clean Job Guarantee, TCEQ-licensed.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "ClearFlow Septic",
    url: BASE_URL,
    telephone: "+12548707070",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1900 S University Parks Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Septic Pumping",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}