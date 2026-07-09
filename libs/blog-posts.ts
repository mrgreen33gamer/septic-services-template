// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-often-pump-septic-texas',
    title:    'How Often Should You Pump a Septic Tank in Central Texas?',
    excerpt:  'Most Central Texas homes need pumping every 3–5 years — but occupancy, tank size, and water habits can change that. Here is how to set a smart schedule.',
    category: 'Maintenance',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-3.jpg',
    imageAlt: 'How often to pump a septic tank in Central Texas',
    featured: true,
  },
  {
    slug:     'aerobic-vs-conventional-septic',
    title:    'Aerobic vs. Conventional Septic: Which System Fits Your Property?',
    excerpt:  'Soil, lot size, and regulations decide more than preference. An honest comparison of aerobic and conventional septic systems for Waco-area properties.',
    category: 'Installation',
    date:     'June 24, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Aerobic vs conventional septic systems comparison for Texas homes',
  },
  {
    slug:     'signs-septic-system-failing',
    title:    '7 Signs Your Septic System Is Failing (And What To Do Next)',
    excerpt:  'Slow drains, soggy yards, and outdoor odors are early warnings. Learn the red flags and when to call a pro in Central Texas.',
    category: 'Repair',
    date:     'June 15, 2026',
    readTime: 6,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Signs a septic system is failing in Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
