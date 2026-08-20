import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import AssessmentForm from "@/components/AssessmentForm";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Your Free Call Coverage Assessment | Spray Foam Receptionist",
  description: "A real, no-obligation conversation about your call volume and where the gaps are. There's nothing to buy on this page. Call 844-967-5247.",
};

const WHO_ITS_FOR = [
  "Contractors who already suspect they're losing jobs to missed calls but haven't measured it",
  "Businesses trying to decide between a live answering service, an AI system, or a lighter text-back setup",
  "Anyone who got a pitch from a specific answering-service provider and wants a second opinion before signing anything",
];

export default function GetAssessmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Free Assessment", path: "/get-assessment/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-amber font-semibold text-sm uppercase tracking-wide mb-3">Free Assessment</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6 max-w-3xl">
            Get Your Free Call Coverage Assessment
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed max-w-2xl">
            A real, no-obligation conversation about your call volume and where the gaps are —
            not a signup or purchase flow. There&apos;s nothing to buy on this page.
          </p>
        </div>
      </section>

      <div className="relative w-full h-56 sm:h-72">
        <Image src="/images/assessment-cta.jpg" alt="A genuine conversation about call coverage" fill className="object-cover" />
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-10">
            <div className="rounded-xl bg-amber/10 border border-amber/30 p-5">
              <p className="text-sm text-inkSoft leading-relaxed">
                To be direct about it: we don&apos;t sell an answering service, and this
                isn&apos;t a lead form for one. This is a free conversation with someone who will
                ask a few honest questions about how your calls are currently handled, help you
                get a realistic read on whether you actually have a costly gap or not, and — if
                it turns out a paid solution would genuinely help — point you toward the kind of
                provider or approach that fits your situation. If the honest answer is &quot;you
                probably don&apos;t need to spend money on this yet,&quot; we&apos;ll tell you
                that too.
              </p>
            </div>

            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">What We&apos;ll Ask</h2>
              <p className="text-inkSoft leading-relaxed">
                A typical assessment conversation covers your rough weekly call volume, how calls
                are currently handled (voicemail, a person on your team, nothing formal), whether
                you have a sense of how many calls go unanswered or unreturned for hours, and what
                a missed job is typically worth to your business. None of this requires precise
                numbers — a reasonable estimate is enough to have a useful conversation.
              </p>
            </div>

            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">What Happens After You Submit</h2>
              <p className="text-inkSoft leading-relaxed">
                We&apos;ll reach out — usually within one business day — to schedule a short call
                or continue by phone right away if you&apos;re available. There&apos;s no script
                pushing you toward any particular solution, and no follow-up sales sequence after
                the conversation ends. If you decide you&apos;re not interested in pursuing
                anything further, that&apos;s a completely normal outcome and not a problem.
              </p>
            </div>

            <div>
              <h2 className="font-head text-2xl font-bold text-ink mb-4">Who This Is a Good Fit For</h2>
              <ul className="space-y-3">
                {WHO_ITS_FOR.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-moss shrink-0 mt-0.5" />
                    <p className="text-sm text-inkSoft leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-charcoal p-5">
              <p className="text-sm text-paper/80 leading-relaxed">
                {SITE.name} doesn&apos;t operate a call center, an AI answering platform, or any
                phone-answering product. This assessment is educational and consultative — its
                purpose is to help you understand your own situation clearly enough to make a
                good decision, whatever that decision turns out to be.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <AssessmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
