import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, ArrowRight, DollarSign, Scale, Moon, MessageCircle, ListChecks, Flame,
  MessageSquareText, HelpCircle, ShieldCheck, PhoneOutgoing,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBar from "@/components/TrustBar";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, GUIDES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Spray Foam Contractors Can't Afford to Miss a Call",
  description:
    "A free resource that helps spray foam insulation contractors understand why calls get missed, what it costs them, and how to close the gap. Call 844-967-5247.",
};

const GUIDE_ICONS: Record<string, typeof DollarSign> = {
  "cost-of-missed-calls": DollarSign,
  "answering-service-vs-ai-vs-voicemail": Scale,
  "after-hours-and-weekend-calls": Moon,
  "missed-call-text-back": MessageCircle,
  "choosing-an-answering-service": ListChecks,
  "spray-foam-call-handling": Flame,
};

const PROCESS = [
  { icon: MessageSquareText, title: "You tell us what's happening", body: "Call volume, how calls are currently handled, and where you think the gaps are — or if you're not sure, that's fine too." },
  { icon: HelpCircle, title: "We ask a few honest questions", body: "How many calls come in after hours, how often voicemail goes unchecked, whether your crew size makes self-managing calls realistic." },
  { icon: ShieldCheck, title: "We give you a straight read", body: "Sometimes the answer is \"try this first.\" Sometimes it's \"this is costing you real money and here's what would help.\"" },
  { icon: PhoneOutgoing, title: "You decide what's next", body: "Nothing is sold on this call. If a paid solution makes sense, we'll point you toward the kind of provider that fits." },
];

const FAQ_PREVIEW = [
  { q: "Is an answering service actually worth it for a spray foam contractor?", a: "For a lot of contractors, yes — but it depends on call volume, how often calls are currently going unanswered, and average job value. See our answering-service-worth-it breakdown for a way to think through the math for your own business." },
  { q: "How much does an answering service cost?", a: "Pricing in the market generally runs on a per-minute, per-call, or flat monthly model, often with a monthly minimum. See our cost breakdown for a realistic view of how providers typically structure pricing." },
  { q: "Do you sell an answering service?", a: "No. Spray Foam Receptionist is an educational resource. We don't operate a call center or an AI answering platform, and we don't sell phone coverage. If you want help thinking through your options, request a free assessment and we'll talk through your specific situation." },
  { q: "What if I only get a handful of calls a week — is this even relevant to me?", a: "Yes, arguably more so. A smaller business has less room to absorb a lost job, and a single missed call from a weather-sensitive lead can matter more to your month than it would to a larger crew fielding dozens of calls a day." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />

      {/* Hero — full-bleed image with scrim */}
      <section className="relative">
        <div className="relative h-[560px] sm:h-[600px]">
          <Image src="/images/hero-homepage.jpg" alt="A spray foam contractor applying insulation, unable to answer a call mid-job" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/55" />
          <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              <p className="text-terracotta font-semibold text-sm uppercase tracking-wide mb-4">
                A Free Resource for Spray Foam Contractors
              </p>
              <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Why Spray Foam Contractors Can&apos;t Afford to Miss a Call
              </h1>
              <p className="text-paper/85 text-lg leading-relaxed mb-8">
                Spray Foam Receptionist helps spray foam insulation contractors understand why
                calls get missed, what it actually costs them, and how to close the gap — whether
                that&apos;s a live answering service, an AI voice assistant, missed-call
                text-back, or just a better process. No product to buy here. Just a straight
                answer for your situation.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/get-assessment/" className="rounded-full bg-amber px-8 py-3.5 text-sm font-bold text-white hover:bg-amberDark transition-colors">
                  Get Your Free Call Coverage Assessment
                </Link>
                <a href="#guides" className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  See the Guides
                </a>
              </div>
              <a href={SITE.phoneHref} className="mt-6 flex items-center gap-2 text-white font-bold text-lg hover:text-terracotta transition-colors w-fit">
                <Phone size={20} className="text-terracotta" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Overview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-6">
            Why Spray Foam Contractors Miss So Many Calls
          </h2>
          <p className="text-inkSoft leading-relaxed mb-4">
            Spray foam is a physical trade. The person who could close a $4,000 job is usually the
            same person who&apos;s up on a ladder, inside an attic, or driving between two job
            sites with foam rigs strapped to a trailer. That&apos;s not a staffing failure —
            it&apos;s just the nature of the work. But it creates a specific, recurring problem:
            the phone rings exactly when nobody can answer it.
          </p>
          <p className="text-inkSoft leading-relaxed mb-4">
            Compare that to a lot of other small businesses. An office-based service can staff a
            front desk. A spray foam crew doesn&apos;t have that luxury — everyone who could pick
            up the phone is either mid-application, driving, or standing in a customer&apos;s
            attic assessing a job. The call goes to voicemail, or it just rings out, and the
            homeowner or property manager on the other end moves to the next name on their list.
          </p>
          <p className="text-inkSoft leading-relaxed mb-6">
            Spray foam jobs are frequently time-sensitive and weather-sensitive — a homeowner
            dealing with a cold attic in December, a property manager with a leak-adjacent
            moisture problem, a builder on a tight construction schedule. These callers are often
            calling two or three insulation contractors back to back and going with whoever picks
            up first. A missed call in this trade doesn&apos;t just delay a lead — it frequently
            loses the job outright to whichever competitor answered.
          </p>
          <div className="rounded-xl bg-amber/10 border border-amber/30 p-5">
            <p className="text-sm text-inkSoft leading-relaxed">
              This site exists to walk through that problem honestly: what it&apos;s actually
              costing you, what the real options look like, and how to think about which one — if
              any — actually fits a business your size. We don&apos;t sell any of these services
              ourselves. We&apos;re a resource, and if you want to talk through your specific
              situation with a real person, that&apos;s what the assessment call is for.
            </p>
          </div>
        </div>
      </section>

      {/* Guide grid */}
      <section id="guides" className="bg-paperRaised">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-3 text-center">
            The Guides
          </h2>
          <p className="text-inkSoft text-center max-w-2xl mx-auto mb-12">
            Honest, specific guides on the missed-call problem and the real options to fix it.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((g) => {
              const Icon = GUIDE_ICONS[g.slug] ?? MessageSquareText;
              return (
                <Link
                  key={g.slug}
                  href={`/${g.slug}/`}
                  className="group flex flex-col rounded-2xl bg-white border border-ink/10 p-6 hover:border-amber hover:shadow-md transition-all"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-amber/10 text-amber mb-4">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-head font-bold text-ink mb-2 group-hover:text-amber transition-colors">
                    {g.navLabel}
                  </h3>
                  <p className="text-sm text-inkSoft leading-relaxed mb-4 flex-1">{g.teaser}</p>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-amber">
                    Read the guide <ArrowRight size={15} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signs section — inverted band */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-6">
            Signs You&apos;re Losing More Than You Realize
          </h2>
          <p className="text-paper/80 leading-relaxed mb-4">
            Most contractors underestimate how often calls actually go unanswered, because a
            missed call doesn&apos;t leave much of a trace. If your voicemail box regularly has
            messages you don&apos;t get to until the end of the day, that&apos;s calls sitting
            cold for hours during exactly the window when a caller is deciding who to hire. If
            callback numbers never pick up when you eventually return the call, that&apos;s very
            likely a lead who already booked someone else.
          </p>
          <p className="text-paper/80 leading-relaxed">
            It&apos;s also worth being honest about seasonality. The exact weeks when call volume
            spikes are usually the same weeks your crew is most stretched thin and least able to
            answer the phone — peak demand colliding with peak unavailability. A call-handling gap
            that&apos;s a minor inconvenience in a slow month can be a real drag on revenue during
            your busiest one.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-12 text-center">
            How a Free Assessment Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-paperRaised border border-ink/10 p-6">
                <span className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 rounded-full bg-amber text-white text-sm font-bold">
                  {i + 1}
                </span>
                <step.icon size={22} className="text-moss mb-4" />
                <h3 className="font-head font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-inkSoft leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-ink mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={FAQ_PREVIEW} />
          <div className="text-center mt-8">
            <Link href="/faq/" className="text-amber font-semibold hover:underline">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-head text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure If You Actually Have a Call-Handling Problem?
          </h2>
          <p className="text-paper/75 mb-8 max-w-2xl mx-auto">
            Request a free, no-obligation call coverage assessment. We&apos;ll talk through
            what&apos;s actually happening with your calls and help you figure out whether a fix
            is worth pursuing — and if so, which kind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-assessment/" className="rounded-full bg-amber px-8 py-3.5 text-sm font-bold text-white hover:bg-amberDark transition-colors">
              Get Your Free Assessment
            </Link>
            <a href={SITE.phoneHref} className="flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              <Phone size={16} className="text-terracotta" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
