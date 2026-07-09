import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const slug = 'how-often-pump-septic-texas';
const url = BASE_URL + '/blogs/' + slug;
const imgUrl = BASE_URL + '/pages/blogs/maintenance-plan.jpg';

export const metadata: Metadata = {
  title: 'How Often Should You Pump a Septic Tank in Central Texas?',
  description: 'Most Central Texas homes need pumping every 3–5 years — but occupancy, tank size, and water habits can change that.',
  alternates: { canonical: url },
  openGraph: {
    title: 'How Often Should You Pump a Septic Tank in Central Texas?',
    description: 'Most Central Texas homes need pumping every 3–5 years — but occupancy, tank size, and water habits can change that.',
    url,
    siteName: 'ClearFlow Septic',
    type: 'article',
    images: [{ url: imgUrl }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}