import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clearflowseptic.com";

export const metadata: Metadata = {
  title: "Septic Services Waco TX | Pumping, Install, Repair & Aerobic",
  description:
    "ClearFlow Septic services: septic pumping, new installs, aerobic systems, repair, drain field repair, and inspections across Waco and Central Texas. TCEQ-licensed.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Septic Services Waco TX | ClearFlow Septic",
    description:
      "Pumping, installs, aerobic systems, repair, drain fields, and inspections. TCEQ-licensed · Clean Job Guarantee.",
    url: `${BASE_URL}/services`,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
