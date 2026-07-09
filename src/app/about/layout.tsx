import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About ClearFlow Septic — Waco TX Septic Company Since 2004",
  description:
    "Meet the ClearFlow Septic team. Locally owned and operated in Waco, Texas since 2004. TCEQ-licensed technicians, bonded & insured, honest pricing, and a Clean Job Guarantee. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about ClearFlow Septic",
    "Waco septic company",
    "septic contractor Waco TX",
    "locally owned septic Waco",
    "IDA trained septic Waco Texas",
    "Wade Harmon ClearFlow Septic",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About ClearFlow Septic — Waco TX Septic Company Since 2004",
    description:
      "Locally owned septic company in Waco, TX. TCEQ-licensed, flat-rate pricing, Clean Job Guarantee.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ClearFlow Septic — Waco TX Since 2004",
    description: "Locally owned septic company in Waco, TX. TCEQ-licensed, flat-rate pricing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "ClearFlow Septic",
  url: BASE_URL,
  telephone: "+12548707070",
  email: "hello@clearflowseptic.com",
  foundingDate: "2011",
  founder: {
    "@type": "Person",
    name: "Wade Harmon",
    jobTitle: "Owner & Lead Septic Technician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1900 S University Parks Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/clearflowseptic",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {children}
    </>
  );
}
