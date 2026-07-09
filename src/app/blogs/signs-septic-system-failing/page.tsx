'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faHouseChimney, faShieldHalved, faWrench, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  { type: 'prose', body: "Septic systems rarely fail overnight without warning. Slow drains in multiple fixtures, sewage odors indoors or outdoors, and unusually green or soggy strips over the drain field are classic early signs. Gurgling toilets and backups after laundry day also deserve attention." },
  {
    type: 'cards',
    heading: 'Key Takeaways',
    cards: [
      { icon: faClock, title: 'Act on a schedule', body: 'Do not wait for backups — preventative service protects your drain field.' },
      { icon: faHouseChimney, title: 'Property type matters', body: 'Homes, parks, and ranches stress systems differently. Size service to usage.' },
      { icon: faShieldHalved, title: 'Licensed work only', body: 'TCEQ-licensed installers protect compliance and long-term performance.' },
      { icon: faWrench, title: 'Repair vs replace', body: 'Honest diagnosis first — not every issue needs a full system replacement.' },
      { icon: faExclamationTriangle, title: 'Watch early warnings', body: 'Odors, slow drains, and soggy fields are signals — not inconveniences.' },
      { icon: faCheckCircle, title: 'Document everything', body: 'Keep pump and inspection records for sales, insurance, and peace of mind.' },
    ],
  },
  { type: 'prose', body: "Outdoor red flags include standing water near the field, sewage surfacing, and lush grass only over laterals. On aerobic systems, frequent alarms, spray heads that will not run, or strong odors near the unit mean components need service now — not next month." },
  { type: 'prose', body: "Do not keep adding chemical additives as a miracle fix, and do not keep pumping a failed field hoping it recovers. Pumping helps the tank; it does not restore a clogged or saturated drain field. Diagnosis first — then repair, rest, or replacement as appropriate." },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you see more than one warning sign, call a pro before a full backup. ClearFlow Septic offers same-day diagnostics and emergency pump-outs. Call (254) 870-7070.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Note when the tank was last pumped if known',
      'Watch for slow drains, odors, and soggy yard spots',
      'Avoid chemical miracle additives as a substitute for pumping',
      'Schedule an inspection or pump-out with a TCEQ-licensed company',
      'Ask for a flat-rate written quote before any major repair',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Septic System Is Failing (And What To Do Next)"
        description="Slow drains, soggy yards, and outdoor odors are early warnings. Learn the red flags for Central Texas systems."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="7 Signs Your Septic System Is Failing (And What To Do Next)"
        category="Repair"
        date="June 15, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Seeing Warning Signs?"
        body="Schedule a septic diagnosis with ClearFlow Septic — flat-rate quotes, Clean Job Guarantee."
        buttonText="Schedule Service"
        buttonHref="/services/septic-repair"
      />
      <NewsletterSignup variant={1} spot="signs-septic-system-failing-blog" />
    </>
  );
}