import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.clearflowseptic.com';
const slug = 'signs-septic-system-failing';
const url = BASE_URL + '/blogs/' + slug;
const imgUrl = BASE_URL + '/pages/blogs/ac-replacement.jpg';

export const metadata: Metadata = {
  title: '7 Signs Your Septic System Is Failing (And What To Do Next)',
  description: 'Slow drains, soggy yards, and outdoor odors are early warnings. Learn the red flags for Central Texas systems.',
  alternates: { canonical: url },
  openGraph: {
    title: '7 Signs Your Septic System Is Failing (And What To Do Next)',
    description: 'Slow drains, soggy yards, and outdoor odors are early warnings. Learn the red flags for Central Texas systems.',
    url,
    siteName: 'ClearFlow Septic',
    type: 'article',
    images: [{ url: imgUrl }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}