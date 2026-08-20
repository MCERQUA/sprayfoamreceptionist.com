import type { GuideContent } from "@/components/GuideLayout";

export const GUIDE_CONTENT: Record<string, GuideContent> = {
  "cost-of-missed-calls": {
    slug: "cost-of-missed-calls",
    image: "/images/cost-breakdown-mood.jpg",
    intro:
      "A missed call feels like nothing in the moment — no invoice, no visible loss, just a red notification you clear later. That's exactly why it's so easy to underestimate. The real cost only becomes visible when you actually run the math on what a handful of missed calls a month adds up to over a year.",
    sections: [
      {
        heading: "An Illustrative Example (Not a Universal Statistic)",
        body: [
          "Every business is different, so treat this as a way to think about your own numbers, not a claim about what's \"typical.\" Say your average spray foam job — a mix of attic retrofits, crawl spaces, and the occasional new-construction or metal building project — nets out to $2,500 in revenue. Say you miss just three calls a week because a crew was mid-application, driving, or simply out of range. Not every missed call would have converted, obviously, but industry-general close rates on inbound calls for home-improvement trades tend to run somewhere in the 20-40% range when a call is actually answered promptly. Even at a conservative 25% close rate, three missed calls a week is roughly 150 missed calls a year, and a quarter of those converting would have been close to 37 jobs — north of $90,000 in revenue, gone quietly, with nothing on a spreadsheet to show for it. Adjust the job value, the missed-call count, and the close rate to your own real numbers, and you'll get a figure that's actually meaningful to your business specifically.",
        ],
      },
      {
        heading: "Why This Number Is Almost Always Invisible",
        body: [
          "Nobody tracks missed-call revenue the way they track completed jobs, because there's no natural record of it. A completed job shows up in your books. A missed call that turned into a competitor's job shows up nowhere — no lead record, no note, nothing. That asymmetry is exactly why most contractors feel like their business is running fine while quietly leaking revenue through a gap they've never actually measured. The only way to see it is to deliberately look: checking how many voicemails go unheard for hours, noticing how many callback attempts reach a number that's already booked with someone else, or simply tracking a week's worth of calls against a week's worth of booked jobs and looking at the gap.",
        ],
      },
      {
        heading: "It's Not Just About Volume — It's About Timing",
        body: [
          "A missed call at 9pm on a Tuesday and a missed call during a Saturday storm-damage rush aren't the same cost. The second one is far more expensive, because it's exactly the moment when demand (and competition for that demand) is highest. Spray foam has real seasonal and weather-driven surges — pre-winter attic work, post-storm crawl space and moisture jobs, new-construction pushes tied to building schedules — and those surges are precisely when your crew is busiest and least available to answer a phone. The cost of a missed call isn't flat across the year; it concentrates hardest in exactly the weeks it hurts most to lose business.",
        ],
      },
      {
        heading: "The Competitive Piece",
        body: [
          "Homeowners and property managers calling about a spray foam job are rarely calling just one contractor. Multiple-quote behavior is common for a job in this price range, which means speed to answer is often a genuine competitive factor, not just a nice-to-have. A caller who reaches a real person (or even a well-handled automated response that gets them a callback fast) has less reason to keep calling down their list. A caller who hits voicemail with no clear expectation of a return call has every reason to move on immediately. In a market with more than one spray foam contractor, the fastest responder often wins jobs that have nothing to do with price or quality of work — purely on who picked up first.",
        ],
      },
      {
        heading: "What to Do With This Number",
        body: [
          "Once you have a rough sense of what missed calls are actually costing you, the next question is whether any fix is worth paying for — and if so, which kind. A live answering service, an AI voice assistant, or even a much lighter missed-call text-back setup all cost something, and the right comparison is always against your own estimated loss, not against a generic \"is this expensive\" gut check.",
        ],
      },
    ],
    faq: [
      { q: "Is this $90,000 example a real statistic I should quote?", a: "No — it's a worked illustrative example using a conservative, generic close-rate assumption, meant to show you how to do the math for your own numbers. Your actual average job value, missed-call volume, and close rate will be different. Use the same method with your real figures." },
      { q: "How do I even find out how many calls I'm missing?", a: "Most phone systems and cell carriers show missed-call logs — start there. If you use a business line through a VOIP or CRM-linked system, it may already track this more precisely. A rough week-long manual count is also a reasonable starting point if you don't have anything more sophisticated." },
    ],
    relatedSlugs: ["answering-service-vs-ai-vs-voicemail", "after-hours-and-weekend-calls"],
  },

  "answering-service-vs-ai-vs-voicemail": {
    slug: "answering-service-vs-ai-vs-voicemail",
    image: "/images/choosing-service-meeting.jpg",
    intro:
      "There isn't one universal right answer to \"what should I use to handle my calls\" — the right fit depends on your call volume, your budget, how technical you want to get, and how much you trust an automated system to represent your business on the phone. Here's a straightforward look at the real options, without a sales pitch attached to any of them.",
    sections: [
      {
        heading: "Live-Agent Answering Services",
        body: [
          "This is the traditional option: a company employs real people who answer your business calls using a script and information you provide, take messages or basic details, and route calls or send you notifications. The strength here is obvious — a real human on the other end genuinely feels different to a caller than an automated system, and a good live agent can handle unexpected questions or an upset caller with a flexibility no script-following AI fully matches yet.",
          "The tradeoff is cost and consistency. Live-agent services are typically the most expensive option in the category, usually billed per minute or per call, often with a monthly minimum regardless of how many calls actually come in. Quality also varies significantly by provider and by which agent happens to pick up — a generalist answering service handling calls for a dozen unrelated small businesses may not represent your spray foam business with the same familiarity as someone who's been briefed specifically on your services and pricing structure.",
        ],
      },
      {
        heading: "AI Voice Answering",
        body: [
          "A newer category: AI systems that answer calls, hold a natural-sounding conversation, capture caller information, and can often book appointments directly into a calendar or CRM. The technology has improved substantially and, for straightforward calls (a homeowner asking for a quote on an attic job, someone wanting to schedule an estimate), a well-configured AI answering system can handle the interaction competently and consistently, every time, at any hour, without the per-call cost scaling the way live-agent pricing does.",
          "The tradeoff is that AI answering can still stumble on genuinely unusual calls — an angry customer with a complicated warranty issue, a caller asking something outside the system's training, or a conversation that needs real judgment rather than pattern-matching. Setup quality matters enormously here too: a poorly configured AI system can sound obviously robotic or mishandle basic questions, which can do more damage to a caller's impression of your business than a simple voicemail would have.",
        ],
      },
      {
        heading: "Missed-Call Text-Back",
        body: [
          "A lighter-weight, lower-cost category: automated systems that detect a missed call and immediately send the caller a text message — something like \"Sorry we missed your call, we'll get back to you shortly\" or a link to request a quote. This doesn't handle the conversation at all, but it solves a specific, real problem: a caller who gets an instant text response is far less likely to immediately call the next contractor down their list than a caller who gets nothing but a ring-out.",
        ],
      },
      {
        heading: "Plain Voicemail",
        body: [
          "The default most contractors start with, and it's not without merit — it's free (beyond your existing phone service), requires no setup, and does capture caller information for a callback. The real weakness is speed and caller expectations. Voicemail is a one-way, delayed communication with no confirmation the caller was heard, and for a caller comparing multiple contractors on a time-sensitive job, voicemail often reads as \"this business isn't that responsive\" — even if you call back within the hour.",
        ],
      },
      {
        heading: "How to Think About Which One Fits",
        body: [
          "Call volume matters most. A one- or two-person operation getting a handful of calls a week may find missed-call text-back sufficient, since the volume doesn't justify a paid answering service's monthly minimum. A busier operation fielding dozens of calls a week, especially with real after-hours volume, is more likely to see a clear return from either a live-agent service or a well-configured AI system. Budget matters too — live-agent services generally cost more than AI answering, which generally costs more than a text-back-only system.",
        ],
      },
    ],
    faq: [
      { q: "Can I combine more than one of these?", a: "Yes, and many contractors do — missed-call text-back as a baseline safety net, with a live answering service or AI system layered on top for higher-value or after-hours calls specifically." },
      { q: "Which one is most \"spray foam specific\"?", a: "None of these providers are typically spray-foam-specific out of the box — most serve general contractors or small businesses broadly. See Spray Foam Call Handling for what to look for or specify so whichever option you choose actually understands your trade's specific call patterns." },
    ],
    relatedSlugs: ["choosing-an-answering-service", "missed-call-text-back"],
  },

  "after-hours-and-weekend-calls": {
    slug: "after-hours-and-weekend-calls",
    image: "/images/after-hours-jobsite.jpg",
    intro:
      "Most spray foam businesses operate on a fairly standard schedule — weekday business hours, maybe a bit of Saturday work during busy season. But calls don't follow your schedule. A homeowner who notices a cold attic problem often does it in the evening, after work, when they're actually home and paying attention to their house. A property manager dealing with a moisture issue after a weekend storm isn't going to wait until Monday morning to start calling contractors. The gap between when people call and when your business is actually staffed to answer is where a meaningful share of missed opportunity lives.",
    sections: [
      {
        heading: "Why After-Hours Calls Are Often Higher-Intent, Not Lower",
        body: [
          "There's a common assumption that after-hours calls are less serious — someone just browsing, not ready to commit. In practice, the opposite is often true. Someone calling a contractor at 7pm on a Tuesday, or first thing Saturday morning, has usually already decided they have a real problem worth addressing and is actively working through their list of options right then. That's a hot lead, not a cold one — and if your phone just rings out or goes straight to voicemail, that motivated caller moves immediately to whoever answers next.",
        ],
      },
      {
        heading: "Weekend Storm and Damage Patterns",
        body: [
          "Spray foam work has a real relationship with weather events — a bad storm, an ice dam, sudden moisture intrusion — and those events don't check your business hours before happening. A homeowner dealing with a Saturday afternoon problem is looking for help right now, and by Monday morning, they've often already scheduled someone else. This is one of the clearest cases where after-hours call handling has a direct, measurable relationship to lost jobs specifically tied to weather-driven demand spikes — exactly the moments your crew is also busiest catching up on backlog from the same storm.",
        ],
      },
      {
        heading: "The Voicemail Trap",
        body: [
          "A lot of contractors reason that voicemail covers the after-hours gap well enough — the caller leaves a message, you call back first thing in the morning. The problem is what happens between the message and the callback. A caller who leaves a voicemail at 8pm and doesn't hear back until 9am the next day has had 13 hours to keep calling other contractors, and if even one of them answered live or texted back quickly, that caller likely already has an appointment booked by the time you return the call. The callback itself isn't the failure — the gap before it is.",
        ],
      },
      {
        heading: "What Actually Closes This Gap",
        body: [
          "A few approaches genuinely help here, each with a different cost and complexity level. A live answering service staffed for evening and weekend hours specifically (rather than full 24/7 coverage, which costs more) can cover the highest-volume after-hours windows without paying for round-the-clock coverage you may not need. An AI voice answering system, since it doesn't require human staffing at all, can realistically provide true 24/7 coverage at a more predictable cost. Missed-call text-back is the lowest-cost option and doesn't provide real conversation, but it does immediately signal to an after-hours caller that they've been heard and will hear back soon — often enough to keep them from calling the next name on their list.",
        ],
      },
      {
        heading: "Does This Apply If You're a Small Crew?",
        body: [
          "Yes, arguably more so. A larger company can sometimes absorb a missed after-hours lead because there's enough volume elsewhere to compensate. A one- or two-truck operation has much less cushion — a single lost weekend call from a real, ready-to-book customer is a much bigger percentage swing in a smaller business's month than in a larger one's.",
        ],
      },
    ],
    faq: [
      { q: "Do I need full 24/7 coverage, or just evenings and weekends?", a: "For most spray foam businesses, evenings and weekends cover the bulk of the meaningful after-hours gap — true overnight coverage (say, 1am to 6am) rarely captures much real demand and can be a lower priority than making sure evening and weekend calls are handled well." },
      { q: "Is an AI system reliable enough for after-hours calls specifically?", a: "For straightforward calls — quote requests, scheduling questions — a well-configured AI system can handle after-hours volume consistently. See Answering Service vs. AI vs. Voicemail for a fuller comparison of where each option's strengths and limits are." },
    ],
    relatedSlugs: ["missed-call-text-back", "cost-of-missed-calls"],
  },

  "missed-call-text-back": {
    slug: "missed-call-text-back",
    image: "/images/text-back-phone.jpg",
    intro:
      "Not every business is ready for a full answering service, and not every business needs one. Missed-call text-back automation is a smaller, cheaper, simpler category worth understanding on its own before you consider anything bigger — for some spray foam contractors, it's genuinely enough on its own; for others, it's a reasonable first step before layering on more coverage.",
    sections: [
      {
        heading: "What It Actually Is",
        body: [
          "Missed-call text-back is a piece of software (sometimes built into a phone system, CRM, or a dedicated tool) that automatically detects when an incoming call goes unanswered and immediately sends the caller a text message. A typical message might say something like \"Sorry we missed your call — we'll get back to you as soon as we can\" or include a short link to request a quote or leave more detail. It doesn't have a conversation, doesn't answer questions, and doesn't book anything on its own — it does exactly one thing, automatically and instantly, every time a call is missed.",
        ],
      },
      {
        heading: "What Problem It Actually Solves",
        body: [
          "The core value here is speed of acknowledgment, not speed of resolution. A caller who hears nothing but a ring-out or a generic voicemail greeting has no signal that their call registered at all, and every reason to assume the business either isn't answering or isn't interested. A caller who gets an immediate text — even a simple one — knows the business saw the call and is going to follow up. That single signal measurably reduces the odds a caller immediately moves to the next contractor on their list, because they now have a reasonable expectation of a callback instead of silence.",
        ],
      },
      {
        heading: "What It Doesn't Solve",
        body: [
          "Text-back doesn't replace an actual conversation, and it doesn't handle anything that needs real judgment — a caller with a specific technical question, someone who wants to talk through project details before committing to leave their information, or an urgent same-day request that really needs a live response, not just an acknowledgment. It also depends entirely on you (or someone on your team) actually following up promptly once the text goes out — the automation buys you time and reduces the immediate risk of losing the caller to a competitor, but it doesn't do the follow-up work for you.",
        ],
      },
      {
        heading: "Who This Fits Best",
        body: [
          "Text-back tends to make the most sense for smaller crews with lower call volume, businesses easing into automated call handling for the first time without committing to a bigger monthly cost, and anyone who wants a genuinely low-cost first step before evaluating whether a full answering service or AI voice system is worth the larger investment. It's also a reasonable complement to a bigger system rather than a replacement — some contractors use text-back as the baseline safety net and layer a live or AI answering service on top for higher-value calls specifically.",
        ],
      },
      {
        heading: "Setting It Up Well",
        body: [
          "The message content matters more than people expect. A generic \"we'll call you back\" text is fine, but a text that also sets a rough expectation (\"we typically call back within the hour\") or includes a direct way to provide more detail (a short form link, or an invitation to reply with what they need) tends to perform better, since it gives the caller something more concrete than a vague promise. If your phone system or CRM supports it, routing the missed-call notification to whoever's actually available to follow up — rather than a general inbox nobody checks promptly — closes the loop faster.",
        ],
      },
    ],
    faq: [
      { q: "Does text-back work for every kind of missed call, including after-hours?", a: "Yes — it's typically triggered automatically any time a call goes unanswered, regardless of time of day, which makes it a genuinely useful baseline layer for after-hours and weekend gaps specifically." },
      { q: "Is this cheaper than a full answering service?", a: "Generally, yes, often significantly — text-back automation is usually priced as a software feature or add-on rather than a per-call or per-minute service, since it doesn't involve a human or an AI conversation, just an automated trigger and message." },
    ],
    relatedSlugs: ["after-hours-and-weekend-calls", "answering-service-vs-ai-vs-voicemail"],
  },

  "choosing-an-answering-service": {
    slug: "choosing-an-answering-service",
    image: "/images/choosing-service-meeting.jpg",
    intro:
      "If you've decided a paid answering solution makes sense for your spray foam business, the next challenge is picking one — and the market has a lot of options, from traditional live-agent services to newer AI voice platforms, with real differences in cost, quality, and fit. This is a general buyer's checklist to help you ask the right questions, not a recommendation of any specific provider.",
    sections: [
      {
        heading: "Ask How They'll Actually Represent Your Business",
        body: [
          "A generic answering service handling calls for dozens of unrelated small businesses may only have a brief script to work from, which shows on the call — vague answers, no real familiarity with what spray foam insulation actually involves, and an obviously scripted feel that some callers pick up on immediately. Ask any provider you're evaluating how much time they spend understanding your specific business (services offered, typical pricing ranges, service area, scheduling process) versus how much is a generic template applied to every client.",
        ],
      },
      {
        heading: "Understand the Pricing Model Before You Commit",
        body: [
          "Answering services and AI platforms price in a few common ways: per-minute (you pay for actual talk time), per-call (a flat rate regardless of call length), or a flat monthly fee with a call or minute allotment and overage charges beyond that. Each model rewards different call patterns — per-minute can get expensive with long calls, per-call can get expensive with high volume, and flat-fee plans can either be a great deal or a waste depending on whether your actual usage matches what you're paying for. Ask for a clear breakdown of exactly how you'll be billed, including what happens if you go over any included minutes or calls, before you commit to anything.",
        ],
      },
      {
        heading: "Check for Monthly Minimums and Contract Terms",
        body: [
          "Many answering services require a monthly minimum spend regardless of how many calls you actually receive, and some require a contract term (three months, six months, a year) with an early-cancellation fee. Neither of these is automatically a dealbreaker, but you should know about them upfront rather than discovering them after your first invoice. If you're not sure how consistent your call volume will be, a month-to-month arrangement or a trial period is worth prioritizing over locking into a long-term contract with an unproven provider.",
        ],
      },
      {
        heading: "Ask About Integration With Your Scheduling or CRM",
        body: [
          "If you use scheduling software, a CRM, or even just a shared calendar to manage estimates and jobs, ask whether the answering service or AI platform can integrate directly — booking appointments straight into your system rather than just taking a message you then have to manually enter. This can meaningfully reduce the friction (and the chance of a lead falling through the cracks) between a call coming in and an appointment actually getting booked.",
        ],
      },
      {
        heading: "Request a Trial Period or Sample Call",
        body: [
          "A written script and a sales pitch only tell you so much. If a provider offers any kind of trial period, free sample call, or recorded example of how they handle a realistic scenario, use it. Listening to (or reading a transcript of) how an unfamiliar caller with a fairly typical question gets handled tells you more about real quality than any marketing page will.",
        ],
      },
    ],
    faq: [
      { q: "Should I get quotes from multiple providers before deciding?", a: "Generally yes — pricing models and quality vary enough between providers that comparing at least two or three options, using the questions above, will give you a much clearer picture than evaluating just one in isolation." },
      { q: "What's the biggest mistake contractors make when picking an answering service?", a: "Committing to a long-term contract or an expensive plan before confirming call volume actually justifies the cost, and before testing how the provider actually sounds on a realistic call. Both are avoidable with the questions above." },
    ],
    relatedSlugs: ["answering-service-vs-ai-vs-voicemail", "cost-of-missed-calls"],
  },

  "spray-foam-call-handling": {
    slug: "spray-foam-call-handling",
    image: "/images/spray-foam-crew-attic.jpg",
    intro:
      "Most answering services and AI voice platforms are built to serve small businesses broadly — plumbers, HVAC companies, general contractors, sometimes any small business at all. That generalist approach works fine for basic call-taking, but spray foam insulation has specific call patterns that a generic script or AI configuration often misses. Understanding what's actually different helps you brief any provider correctly, or evaluate whether they're set up to handle your calls well at all.",
    sections: [
      {
        heading: "Same-Day and Weather-Sensitive Urgency",
        body: [
          "A meaningful share of spray foam inquiries aren't casual research calls — they're tied to a specific, often time-pressured situation. A homeowner dealing with a sudden cold spot after a storm, a property manager with a moisture issue that's actively getting worse, a builder on a schedule where insulation delays hold up the next trade. These callers often want to know not just \"can you do this job\" but \"how soon can someone actually look at this.\" A generic script that doesn't prompt for urgency, or an AI system that doesn't recognize time-sensitive language and route it appropriately, can turn a genuinely hot lead into just another message in the queue.",
        ],
      },
      {
        heading: "Open-Cell vs. Closed-Cell Questions",
        body: [
          "Callers researching spray foam insulation frequently have questions about the difference between open-cell and closed-cell foam, which application fits their specific space, or why one costs more than the other. A generic answering service with no insulation-specific briefing typically can't answer any of this and defaults to \"someone will call you back\" — which is fine, but a caller who gets even a basic, accurate answer to a simple question is more likely to stay engaged than one who gets nothing but a promise of a callback.",
        ],
      },
      {
        heading: "Crews Who Are Physically Mid-Application",
        body: [
          "This is the core structural problem spray foam contractors face that a lot of other trades don't experience quite as acutely: once a spray foam rig is running and a crew member is mid-application, stopping to answer a phone isn't a quick pause — it means stopping the job, which has real cost and safety implications depending on the application. A plumber between tasks can sometimes glance at a phone; someone actively spraying foam in an attic genuinely cannot. This makes reliable call coverage less of a \"nice to have\" and more of a structural necessity for a spray foam business specifically.",
        ],
      },
      {
        heading: "Warranty and Callback Questions",
        body: [
          "Once a job is done, spray foam businesses field a different category of call: warranty questions, concerns about settling or gaps, or requests for a callback inspection. These calls need to be routed differently than a new-lead inquiry — a caller with an existing job and a concern shouldn't get the same generic \"we'll get you a quote\" response a new prospect would, and misrouting an existing customer's concern as a fresh sales lead (or vice versa) creates a bad experience on both sides.",
        ],
      },
      {
        heading: "What to Brief Any Provider On",
        body: [
          "If you're evaluating an answering service or AI platform, the most useful thing you can do is write out (even briefly) the handful of scenarios above — urgency signals, basic open-cell/closed-cell terminology, how to distinguish new leads from existing-customer callbacks, and how commercial or metal building inquiries should be flagged. A provider willing to actually incorporate that briefing into their script or AI configuration is a meaningfully better fit than one that only offers a generic small-business template.",
        ],
      },
    ],
    faq: [
      { q: "Do AI answering systems handle spray-foam-specific terminology well?", a: "It depends entirely on how well the system is configured and trained for your business specifically — a generic out-of-the-box AI system likely won't know the difference between open-cell and closed-cell foam unless it's specifically briefed to." },
      { q: "Is this level of customization realistic for a small crew, or only larger companies?", a: "It's realistic for businesses of any size — the briefing itself doesn't require much beyond writing down your own common scenarios, and most providers (live-agent or AI) can incorporate business-specific information regardless of your company's size." },
    ],
    relatedSlugs: ["choosing-an-answering-service", "answering-service-vs-ai-vs-voicemail"],
  },
};
