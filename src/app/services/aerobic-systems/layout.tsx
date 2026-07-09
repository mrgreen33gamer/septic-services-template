import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/services/aerobic-systems';

export const metadata: Metadata = {
  title: "Aerobic Systems Waco TX | ClearFlow Septic",
  description: "Aerobic treatment unit installation, service, chlorination, and maintenance for Central Texas properties.",
  keywords: [
    "aerobic septic system Waco TX",
    "ATU service Central Texas",
    "aerobic system maintenance Waco",
    "ClearFlow Septic",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Aerobic Systems Waco TX | ClearFlow Septic",
    description: "Aerobic treatment unit installation, service, chlorination, and maintenance for Central Texas properties.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerobic Systems Waco TX | ClearFlow Septic",
    description: "Aerobic treatment unit installation, service, chlorination, and maintenance for Central Texas properties.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aerobic Systems",
  description: "Aerobic treatment unit installation, service, chlorination, and maintenance for Central Texas properties.",
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
  serviceType: "Aerobic Systems",
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