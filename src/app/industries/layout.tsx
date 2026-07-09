import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Rural Residential, Homebuilders & Commercial | ClearFlow Septic",
  description:
    "ClearFlow Septic serves property management companies, rv-parks & remodelers, and commercial facilities across Waco and Central Texas with septic repair, installation, and maintenance.",
  keywords: [
    "septic property management Waco",
    "homebuilder septics Texas",
    "commercial septics Waco TX",
    "multi-unit septic service",
    "ClearFlow Septic industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | ClearFlow Septic",
    description: "Septic programs for property managers, rv-parks, and commercial facilities in Central Texas.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
