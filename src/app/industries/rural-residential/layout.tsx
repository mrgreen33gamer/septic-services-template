import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/industries/rural-residential';

export const metadata: Metadata = {
  title: "Rural Residential Septic Services | ClearFlow Septic",
  description: "Septic pumping, installs, repair, and inspections for rural homes, acreage properties, and country living across Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Rural Residential Septic Services | ClearFlow Septic",
    description: "Septic pumping, installs, repair, and inspections for rural homes, acreage properties, and country living across Central Texas.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}