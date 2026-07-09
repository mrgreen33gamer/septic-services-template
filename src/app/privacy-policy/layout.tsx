import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ClearFlow Septic",
  description: "How we collect, use, and protect your information at ClearFlow Septic in Waco, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}