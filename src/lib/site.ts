export const SITE = {
  name: "Spray Foam Receptionist",
  shortName: "Spray Foam Receptionist",
  domain: "sprayfoamreceptionist.com",
  url: "https://sprayfoamreceptionist.com",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  tagline: "Helping spray foam contractors stop losing jobs to missed calls.",
};

export type GuidePage = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  teaser: string;
};

export const GUIDES: GuidePage[] = [
  {
    slug: "cost-of-missed-calls",
    navLabel: "Cost of Missed Calls",
    h1: "What a Missed Call Actually Costs a Spray Foam Contractor",
    metaTitle: "The Real Cost of Missed Calls for Spray Foam Contractors",
    metaDescription:
      "A missed call isn't just an inconvenience — it's a lost job. Here's what missed calls actually cost a spray foam contracting business. Call 844-967-5247.",
    teaser: "It's not one lost call — it's the job, and often the customer, for good.",
  },
  {
    slug: "answering-service-vs-ai-vs-voicemail",
    navLabel: "Answering Service vs. AI vs. Voicemail",
    h1: "Answering Service vs. AI Answering vs. Voicemail: What's the Difference?",
    metaTitle: "Answering Service vs. AI vs. Voicemail Compared",
    metaDescription:
      "An honest comparison of live-agent answering services, AI voice answering, and plain voicemail for a spray foam contracting business. Call 844-967-5247.",
    teaser: "Three real options, three real tradeoffs — here's how to think about each one.",
  },
  {
    slug: "after-hours-and-weekend-calls",
    navLabel: "After-Hours & Weekend Calls",
    h1: "After-Hours and Weekend Calls: The Coverage Gap Most Contractors Ignore",
    metaTitle: "After-Hours & Weekend Call Coverage for Contractors",
    metaDescription:
      "Leads don't stop calling when your crew clocks out. Here's why after-hours coverage matters more than most spray foam contractors realize. Call 844-967-5247.",
    teaser: "Your crew clocks out at 5. Leads don't know that.",
  },
  {
    slug: "missed-call-text-back",
    navLabel: "Missed Call Text-Back",
    h1: "Missed Call Text-Back: A Lighter-Weight Fix Worth Understanding",
    metaTitle: "Missed Call Text-Back Explained for Contractors",
    metaDescription:
      "Missed call text-back automation won't replace a live answering service, but it's a real, low-cost step worth understanding. Call 844-967-5247.",
    teaser: "Not a full fix, but a genuinely useful first step — here's what it does and doesn't solve.",
  },
  {
    slug: "choosing-an-answering-service",
    navLabel: "Choosing an Answering Service",
    h1: "Choosing an Answering Service: A Buyer's Checklist",
    metaTitle: "How to Choose an Answering Service | Buyer's Checklist",
    metaDescription:
      "What to actually look for before picking an answering service — industry familiarity, pricing models, contract terms, and more. Call 844-967-5247.",
    teaser: "What to actually check before you commit to a provider or a contract.",
  },
  {
    slug: "spray-foam-call-handling",
    navLabel: "Spray Foam Call Handling",
    h1: "What's Different About Handling Calls for a Spray Foam Business",
    metaTitle: "Spray Foam-Specific Call Handling Explained",
    metaDescription:
      "Spray foam calls aren't generic contractor calls — same-day urgency, weather sensitivity, and warranty questions all need specific handling. Call 844-967-5247.",
    teaser: "Generic contractor call scripts miss what actually matters for a spray foam job.",
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  relatedGuides: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-answering-service-cost",
    title: "How Much Does an Answering Service Cost? A Realistic Breakdown",
    metaTitle: "How Much Does an Answering Service Cost?",
    metaDescription: "A realistic look at how answering services are typically priced — per-minute, per-call, and flat-rate models explained.",
    date: "2026-09-12",
    excerpt: "A realistic look at how answering services are typically priced — per-minute, per-call, and flat-rate models explained.",
    relatedGuides: ["choosing-an-answering-service"],
  },
  {
    slug: "is-answering-service-worth-it",
    title: "Is an Answering Service Worth It for a Spray Foam Contractor?",
    metaTitle: "Is an Answering Service Worth It for Contractors?",
    metaDescription: "An honest look at when an answering service pays for itself for a spray foam contracting business, and when it might not.",
    date: "2026-09-26",
    excerpt: "An honest look at when an answering service pays for itself for a spray foam contracting business, and when it might not.",
    relatedGuides: ["cost-of-missed-calls", "answering-service-vs-ai-vs-voicemail"],
  },
  {
    slug: "real-cost-of-missed-call",
    title: "The Real Cost of a Missed Call for a Spray Foam Business",
    metaTitle: "The Real Cost of a Missed Call for a Spray Foam Business",
    metaDescription: "Beyond the lost job itself — what a pattern of missed calls actually does to a spray foam contracting business over time.",
    date: "2026-10-10",
    excerpt: "Beyond the lost job itself — what a pattern of missed calls actually does to a spray foam contracting business over time.",
    relatedGuides: ["cost-of-missed-calls", "spray-foam-call-handling"],
  },
  {
    slug: "live-agents-vs-ai-answering",
    title: "Live Agents vs. AI Answering: What Actually Fits a Spray Foam Crew?",
    metaTitle: "Live Agents vs. AI Answering for Spray Foam Contractors",
    metaDescription: "A practical comparison of live-agent and AI-based answering solutions for a spray foam contracting business.",
    date: "2026-10-24",
    excerpt: "A practical comparison of live-agent and AI-based answering solutions for a spray foam contracting business.",
    relatedGuides: ["answering-service-vs-ai-vs-voicemail", "choosing-an-answering-service"],
  },
];

export const FAQS: { q: string; a: string; category: string }[] = [];
