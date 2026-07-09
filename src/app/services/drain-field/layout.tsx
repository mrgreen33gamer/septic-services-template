import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/services/drain-field';

export const metadata: Metadata = {
  title: "Drain Field Repair Waco TX | ClearFlow Septic",
  description: "Drain field repair and replacement for saturated, clogged, or failing septic fields in Central Texas.",
  keywords: [
    "drain field repair Waco TX",
    "septic field replacement Central Texas",
    "leach field repair Waco",
    "ClearFlow Septic",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Drain Field Repair Waco TX | ClearFlow Septic",
    description: "Drain field repair and replacement for saturated, clogged, or failing septic fields in Central Texas.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Field Repair Waco TX | ClearFlow Septic",
    description: "Drain field repair and replacement for saturated, clogged, or failing septic fields in Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Field Repair",
  description: "Drain field repair and replacement for saturated, clogged, or failing septic fields in Central Texas.",
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
  serviceType: "Drain Field Repair",
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