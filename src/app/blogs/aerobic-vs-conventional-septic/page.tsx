'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faHouseChimney, faShieldHalved, faWrench, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  { type: 'prose', body: "Conventional septic systems use a tank and a gravity or pumped drain field. They are simple, proven, and cost-effective when soils percolate well and setbacks allow. Many Central Texas rural homes still run conventional systems for decades with proper pumping." },
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
  { type: 'prose', body: "Aerobic treatment units (ATUs) add oxygen and treatment stages so effluent is cleaner before disposal — often via spray irrigation. They are common where soils are poor, lots are small, or regulations require advanced treatment. They need electricity, more maintenance, and chlorination or disinfection in many designs." },
  { type: 'prose', body: "Neither system is universally better. The right choice depends on soil report results, lot constraints, occupancy, and budget for ongoing maintenance. An honest installer will not push aerobic when conventional works — or conventional when the site cannot support it." },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Before you buy a property or build, get a site evaluation. ClearFlow Septic designs and installs both conventional and aerobic systems across Central Texas. Call (254) 870-7070.",
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
        title="Aerobic vs. Conventional Septic: Which System Fits Your Property?"
        description="Soil, lot size, and regulations decide more than preference. An honest comparison for Waco-area properties."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Aerobic vs. Conventional Septic: Which System Fits Your Property?"
        category="Installation"
        date="June 24, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need Help Choosing a System?"
        body="Get a site evaluation from ClearFlow Septic — TCEQ-licensed installers."
        buttonText="Schedule Service"
        buttonHref="/services/aerobic-systems"
      />
      <NewsletterSignup variant={1} spot="aerobic-vs-conventional-septic-blog" />
    </>
  );
}