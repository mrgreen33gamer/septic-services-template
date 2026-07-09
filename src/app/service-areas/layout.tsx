import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Septic Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | ClearFlow Septic',
  description:
    'ClearFlow Septic serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, Clean Job Guarantee.',
  keywords: [
    'septic service areas Central Texas',
    'septic repair Waco TX',
    'septic technician Hewitt TX',
    'septic technician Killeen TX',
    'septic technician Temple TX',
    'ClearFlow Septic service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Septic Service Areas | ClearFlow Septic — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate septic repair, spring & cable repair, and installation. Same-day service available.',
    url,
    siteName: 'ClearFlow Septic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Septic Service Areas | ClearFlow Septic — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — TCEQ-licensed septic service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
