import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const slug = 'aerobic-vs-conventional-septic';
const url = BASE_URL + '/blogs/' + slug;
const imgUrl = BASE_URL + '/pages/blogs/energy-savings.jpg';

export const metadata: Metadata = {
  title: 'Aerobic vs. Conventional Septic: Which System Fits Your Property?',
  description: 'Soil, lot size, and regulations decide more than preference. An honest comparison for Waco-area properties.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Aerobic vs. Conventional Septic: Which System Fits Your Property?',
    description: 'Soil, lot size, and regulations decide more than preference. An honest comparison for Waco-area properties.',
    url,
    siteName: 'ClearFlow Septic',
    type: 'article',
    images: [{ url: imgUrl }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}