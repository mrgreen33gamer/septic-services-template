'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faHouseChimney, faShieldHalved, faWrench, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  { type: 'prose', body: "Most homeowners wait until something smells wrong — and that is usually too late. In Waco and across Central Texas, septic tanks fill with solids on a predictable schedule based on tank size, household size, and water use. Pumping on time protects your drain field, the most expensive part of the system." },
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
  { type: 'prose', body: "A typical 1,000-gallon tank serving a family of four often needs pumping every 3 to 5 years. Garbage disposals, frequent guests, or undersized tanks shorten that interval. Larger tanks and lighter use can stretch it. The only reliable way to know is to measure sludge and scum levels — which we do during service visits." },
  { type: 'prose', body: "Waiting until backups start often means the field is already stressed. Solids that leave the tank clog laterals and create soggy yards that pumping alone cannot fix. A few hundred dollars of routine pumping can prevent thousands in field repair." },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you do not know when your tank was last pumped, schedule an inspection. ClearFlow Septic serves Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, and Bellmead — call (254) 870-7070.",
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
        title="How Often Should You Pump a Septic Tank in Central Texas?"
        description="Most Central Texas homes need pumping every 3–5 years — but occupancy, tank size, and water habits can change that."
        imageSrc="/pages/blogs/maintenance-plan.jpg"
        imageAlt="How Often Should You Pump a Septic Tank in Central Texas?"
        category="Maintenance"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Due for a Pump-Out?"
        body="Schedule septic pumping with ClearFlow Septic — TCEQ-licensed, Clean Job Guarantee."
        buttonText="Schedule Service"
        buttonHref="/services/septic-pumping"
      />
      <NewsletterSignup variant={1} spot="how-often-pump-septic-texas-blog" />
    </>
  );
}