// libs/local-db/reviews.ts
// Static testimonials for ClearFlow Septic — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Septic Pumping',
    text:     "Our tank was overdue and starting to smell. ClearFlow pumped the same week, found a worn baffle, and explained everything clearly. Clean job, fair price, lids secured. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Septic Repair',
    text:     'Woke up to slow drains and a wet spot near the field. Called ClearFlow and they diagnosed a bad effluent pump the same day. Fixed it without trying to sell a whole new system. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Aerobic Systems',
    text:     'Had three companies quote aerobic maintenance. ClearFlow was honest about chlorination and compressor wear we actually needed — not just upselling. Quiet, professional, and they left the site cleaner than they found it.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'New Septic Install',
    text:     'They removed our failed system and installed a new conventional septic sized for our family. The layout advice was excellent and the finish grading looked great. Worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Drain Field Repair',
    text:     'We hired ClearFlow after a soggy drain field ruined our backyard. They diagnosed biomat failure, replaced the field, and finished ahead of schedule. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Inspections & Maintenance',
    text:     'Signed up for their maintenance plan after years of ignoring the tank. System runs better, and they catch small issues before they become emergencies. My go-to septic company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Septic Pumping',
    text:     'Emergency pump-out after a holiday weekend overload. ClearFlow came out fast, pumped thoroughly, and did not gouge us. Highly recommend for emergency septic service.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Septic Repair',
    text:     'Called about sewage odors and a tank alarm on our ATU. They treated it like it mattered, explained options clearly, and finished the same visit. Thank you, ClearFlow.',
  },
];

export default reviews;
