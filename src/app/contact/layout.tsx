// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact ClearFlow Septic | Schedule Service in Waco & Central Texas',
  description:
    'Contact ClearFlow Septic to schedule septic repair, spring & cable repair, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (554) 870-7070.',
  keywords: [
    'contact ClearFlow Septic',
    'septic service Waco TX',
    'schedule septic repair Waco',
    'septic estimate Central Texas',
    'ClearFlow Septic contact',
    '554-750-1100',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact ClearFlow Septic | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, Clean Job Guarantee, TCEQ-licensed septic technicians.',
    url,
    siteName: 'ClearFlow Septic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ClearFlow Septic | Waco & Central Texas',
    description: 'Schedule septic service or get a free estimate. Call (554) 870-7070.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
