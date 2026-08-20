import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Spray Foam Receptionist",
  description: "An educational resource for spray foam insulation contractors on missed calls and call-handling gaps. Not an answering service. Call 844-967-5247.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-amber font-semibold text-sm uppercase tracking-wide mb-3">About</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            About Spray Foam Receptionist
          </h1>
        </div>
      </section>

      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <Image src="/images/about-mood.jpg" alt="A spray foam contracting business's yard and equipment" fill className="object-cover" priority />
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          <p className="text-inkSoft leading-relaxed">
            Spray Foam Receptionist is an educational resource built for one specific audience:
            spray foam insulation contractors who suspect — or already know — that they&apos;re
            losing jobs to missed calls, and who want a straight, honest answer about what to do
            about it.
          </p>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">What This Site Is</h2>
            <p className="text-inkSoft leading-relaxed">
              This site exists to walk through a real, common problem in plain language: spray
              foam is physical, hands-on work, and the people best positioned to answer a sales
              call are frequently the same people who are up a ladder, inside an attic, or
              driving between job sites. That structural reality means calls get missed, and
              missed calls in a time-sensitive, competitive trade like spray foam often mean lost
              jobs, not just delayed ones. The guides on this site cover what that actually costs,
              what your real options are for fixing it, and how to think through which option —
              if any — actually fits a business your size.
            </p>
          </div>

          <div className="rounded-2xl bg-charcoal p-6 sm:p-8">
            <h2 className="font-head text-xl font-bold text-white mb-3">What This Site Is Not</h2>
            <p className="text-paper/80 leading-relaxed">
              This is not an answering service. We don&apos;t operate a call center, we
              don&apos;t have live agents standing by, and we don&apos;t run an AI
              voice-answering platform. There&apos;s no product to sign up for here, no pricing
              plan to select, and no contract to commit to. If a page on this site discusses what
              answering services typically cost or how they&apos;re commonly structured,
              that&apos;s general market information meant to help you evaluate real providers —
              not a price list for anything we sell.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Why We Built This</h2>
            <p className="text-inkSoft leading-relaxed">
              The real answering-service and AI-voice-answering market is crowded, well-funded,
              and — frankly — not built with spray foam&apos;s specific call patterns in mind.
              Most providers serve small businesses broadly, or contractors generally, without
              accounting for the things that make a spray foam call different: same-day urgency
              tied to weather or moisture problems, open-cell versus closed-cell questions a
              generic script can&apos;t answer, crews who are structurally unreachable
              mid-application, and the difference between a new lead and an existing
              customer&apos;s warranty callback. We built this resource to lay all of that out
              honestly, in one place, specifically for this trade.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Our Approach</h2>
            <p className="text-inkSoft leading-relaxed">
              Every guide on this site is written to be genuinely useful on its own, whether or
              not you ever request a conversation with us. We don&apos;t inflate the cost of
              missed calls with fabricated statistics, we don&apos;t claim call-handling problems
              are more urgent than they actually are for every business, and we don&apos;t push a
              single &quot;right answer&quot; — because there isn&apos;t one. A one-person
              operation getting a handful of calls a week has different needs than a multi-crew
              company fielding dozens of calls a day, and the honest answer for each is different.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-4">Who This Site Is Written For</h2>
            <p className="text-inkSoft leading-relaxed">
              We&apos;re writing primarily for owner-operators and small crew leads — the person
              who&apos;s both running the business and, on a lot of days, still on the tools.
              That&apos;s a deliberate choice. A lot of business-operations content assumes an
              office manager or a dedicated sales team exists to handle this kind of decision, and
              for most spray foam contractors, that&apos;s simply not the reality. Everything here
              is written to be useful to someone reading it on a phone between jobs, not someone
              with an afternoon free to research vendors.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-ink/10 p-6 sm:p-8">
            <h2 className="font-head text-xl font-bold text-ink mb-3">If You Want to Talk It Through</h2>
            <p className="text-inkSoft leading-relaxed mb-4">
              If you&apos;ve read through the guides and still aren&apos;t sure what fits your
              specific situation, or you just want a second opinion before committing to a
              provider, we offer a free, no-obligation call coverage assessment. It&apos;s a real
              conversation — not a sales call for a product we sell — about your actual call
              volume, where the gaps are, and what kind of solution (if any) makes sense for your
              business right now.
            </p>
            <p className="text-inkSoft leading-relaxed mb-4">
              Have a question, or ready to talk through your situation?{" "}
              <Link href="/get-assessment/" className="text-amber underline">Get Your Free Call Coverage Assessment</Link>,
              call {SITE.phone}, or email {SITE.email}.
            </p>
            <p className="text-sm text-inkSoft">
              {SITE.name} — {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
