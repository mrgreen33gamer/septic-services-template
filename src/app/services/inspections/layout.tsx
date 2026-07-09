import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/services/inspections';

export const metadata: Metadata = {
  title: "Inspections & Maintenance Waco TX | ClearFlow Septic",
  description: "Septic inspections for real estate and preventative maintenance plans for Waco and Central Texas systems.",
  keywords: [
    "septic inspection Waco TX",
    "septic maintenance plan Central Texas",
    "real estate septic inspection Waco",
    "ClearFlow Septic",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Inspections & Maintenance Waco TX | ClearFlow Septic",
    description: "Septic inspections for real estate and preventative maintenance plans for Waco and Central Texas systems.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspections & Maintenance Waco TX | ClearFlow Septic",
    description: "Septic inspections for real estate and preventative maintenance plans for Waco and Central Texas systems.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inspections & Maintenance",
  description: "Septic inspections for real estate and preventative maintenance plans for Waco and Central Texas systems.",
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
  serviceType: "Inspections & Maintenance",
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