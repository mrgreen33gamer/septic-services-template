import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/services/septic-repair';

export const metadata: Metadata = {
  title: "Septic Repair Waco TX | ClearFlow Septic",
  description: "Septic tank, pump, baffle, and distribution repairs across Waco and Central Texas. Flat-rate quotes.",
  keywords: [
    "septic repair Waco TX",
    "septic tank repair Central Texas",
    "septic pump repair Waco",
    "ClearFlow Septic",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Septic Repair Waco TX | ClearFlow Septic",
    description: "Septic tank, pump, baffle, and distribution repairs across Waco and Central Texas. Flat-rate quotes.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Septic Repair Waco TX | ClearFlow Septic",
    description: "Septic tank, pump, baffle, and distribution repairs across Waco and Central Texas. Flat-rate quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Septic Repair",
  description: "Septic tank, pump, baffle, and distribution repairs across Waco and Central Texas. Flat-rate quotes.",
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
  serviceType: "Septic Repair",
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