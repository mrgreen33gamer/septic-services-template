import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = BASE_URL + '/industries/agriculture';

export const metadata: Metadata = {
  title: "Agriculture & Ranches Septic Services | ClearFlow Septic",
  description: "Septic service for ranch houses, ag housing, and rural agricultural properties throughout Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Agriculture & Ranches Septic Services | ClearFlow Septic",
    description: "Septic service for ranch houses, ag housing, and rural agricultural properties throughout Central Texas.",
    url,
    siteName: "ClearFlow Septic",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}