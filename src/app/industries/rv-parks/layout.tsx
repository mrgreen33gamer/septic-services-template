import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/industries/rv-parks';

export const metadata: Metadata = {
  title: "RV Parks & Campgrounds Septic Services | ClearFlow Septic",
  description: "High-use septic pumping, repair, and maintenance for RV parks and campgrounds across Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "RV Parks & Campgrounds Septic Services | ClearFlow Septic",
    description: "High-use septic pumping, repair, and maintenance for RV parks and campgrounds across Central Texas.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}