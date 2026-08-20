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

export const FAQS: { q: string; a: string; category: string }[] = [
  { category: "Cost & Value", q: "How much does an answering service charge?", a: "Pricing in the market generally follows one of three models: per-minute, per-call, or a flat monthly fee with an included call or minute allotment. Live-agent services tend to sit at the higher end of the market, AI voice-answering systems are often more predictable and moderate in cost, and missed-call text-back automation is typically the least expensive since it doesn't involve a live conversation." },
  { category: "Cost & Value", q: "How much does an answering dispatch service cost per hour?", a: "Most answering services don't price by the hour — per-minute or per-call billing is far more common, sometimes with a flat monthly fee that includes a set number of minutes or calls before overage charges apply. \"Per hour\" isn't usually the right way to think about the cost structure for this category." },
  { category: "Cost & Value", q: "Is an answering service worth it?", a: "It depends on your call volume, how often calls currently go unanswered, and your average job value — for a business missing even a few calls a week on jobs worth a few thousand dollars each, the math often favors some kind of paid solution. For a very low call-volume business, a free or low-cost option like missed-call text-back may be enough." },
  { category: "Comparing Options", q: "What's the difference between an answering service and a virtual assistant?", a: "A traditional answering service focuses specifically on call handling — answering, taking messages, sometimes basic scheduling. A virtual assistant is typically a broader role that might include call handling alongside other administrative tasks. If call handling is your main concern, a dedicated answering service or AI voice system is usually a more targeted fit than a general virtual assistant." },
  { category: "Comparing Options", q: "Is AI answering actually good enough, or do I need a real person?", a: "For straightforward calls — quote requests, scheduling questions, basic information — a well-configured AI system can handle the interaction competently and consistently. For more complex or emotionally charged calls, a live agent still generally offers more flexibility." },
  { category: "Comparing Options", q: "What if I already have voicemail — isn't that basically the same thing?", a: "Not really. Voicemail is passive and delayed — the caller leaves a message and waits for a callback, with no confirmation their call registered. An answering service, AI system, or even simple text-back automation responds immediately, which measurably changes whether a caller keeps looking for another contractor in the meantime." },
  { category: "Does This Apply to My Business?", q: "Does this apply to a one-person crew, or only bigger companies?", a: "It applies to businesses of any size, and arguably matters more for smaller ones — a single-truck operation has less cushion to absorb a lost job than a larger company with more overall call volume and revenue." },
  { category: "Does This Apply to My Business?", q: "I only get a handful of calls a week — is a paid service overkill?", a: "Possibly. For low call volume, a lighter-weight option like missed-call text-back is often the more sensible starting point rather than a full answering service with a monthly minimum." },
  { category: "Does This Apply to My Business?", q: "Does this only matter for residential jobs, or commercial too?", a: "Both — commercial and metal building inquiries are often higher-value and come with their own call-handling considerations." },
  { category: "Getting Started", q: "Do you sell an answering service?", a: "No. Spray Foam Receptionist is an educational resource — we don't operate a call center or an AI answering platform, and there's no product to purchase here. We can help you think through your options and, if useful, point you toward the kind of provider that fits your situation." },
  { category: "Getting Started", q: "How do I know if I even have a call-handling problem?", a: "Start by checking your voicemail box and missed-call log for a typical week, and compare that against how many jobs you actually booked in the same period. If you're not sure how to read what you find, that's exactly what a free assessment conversation is for." },
  { category: "Getting Started", q: "How do I get started?", a: "Read through the guides most relevant to your situation, or skip straight to requesting a free, no-obligation call coverage assessment if you'd rather talk it through directly." },
];
