import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';

export const metadata: Metadata = {
  title: 'Septic Tips & Insights | ClearFlow Septic Blog',
  description:
    'Septic safety tips, spring & cable repair guides, and door maintenance advice for Waco and Central Texas homeowners from ClearFlow Septic.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Septic Tips & Insights | ClearFlow Septic Blog',
    description: 'Practical septic guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'ClearFlow Septic',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
