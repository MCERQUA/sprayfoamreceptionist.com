import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | Spray Foam Receptionist",
  description: "Terms of use for sprayfoamreceptionist.com, an educational resource — not an answering service or telecommunications provider.",
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="font-head text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">Terms of Use</h1>
          <p className="text-inkSoft text-sm">Effective date: August 20, 2026</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 space-y-8">
          <p className="text-inkSoft leading-relaxed">
            Welcome to {SITE.domain} (the &quot;Site&quot;), operated by {SITE.name} (&quot;we,&quot;
            &quot;us&quot;). By using this Site, you agree to these Terms of Use.
          </p>

          <div className="rounded-xl bg-amber/10 border border-amber/30 p-5">
            <h2 className="font-head text-lg font-bold text-ink mb-3">
              Educational Content Only — Not an Answering Service or Telecommunications Provider
            </h2>
            <p className="text-inkSoft leading-relaxed mb-3">
              The content on this Site, including all guides and articles, is provided for
              general educational purposes only. {SITE.name} does not operate a call center, an
              AI voice-answering platform, or any telecommunications or answering service.
              Nothing on this Site is an offer to sell, or a description of, any product or
              service we provide directly. Where this Site discusses pricing models or market
              patterns for third-party answering services, that information is general and
              educational, not a quote, price list, or offer from us.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Assessment Conversations</h2>
            <p className="text-inkSoft leading-relaxed">
              Submitting the Free Call Coverage Assessment form is a request for an educational,
              consultative conversation — it does not create any purchase obligation, service
              agreement, or ongoing relationship. We may, in the course of that conversation,
              provide general guidance about third-party providers or approaches, but we do not
              act as an agent for, and are not responsible for, any third-party answering service,
              software provider, or telecommunications company you may ultimately choose to work
              with.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Use of the Site</h2>
            <p className="text-inkSoft leading-relaxed">
              You agree to use this Site only for lawful purposes. You may not attempt to
              interfere with the Site&apos;s normal operation, misuse any form on the Site, or
              submit false information through any form for fraudulent purposes.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Intellectual Property</h2>
            <p className="text-inkSoft leading-relaxed">
              The content, design, and organization of this Site are the property of {SITE.name}{" "}
              unless otherwise noted. You may view and reference this content for personal or
              business informational use, but may not republish, redistribute, or reproduce
              substantial portions of this Site&apos;s content without our permission.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">No Warranty</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site and its content are provided &quot;as is,&quot; without warranties of any
              kind, express or implied. Market pricing, provider offerings, and technology in the
              answering-service and AI-voice space change over time — always confirm current
              details directly with any third-party provider before making a decision.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Limitation of Liability</h2>
            <p className="text-inkSoft leading-relaxed">
              To the fullest extent permitted by law, {SITE.name} is not liable for any damages
              arising from your use of, or reliance on, this Site&apos;s content, or from any
              decision you make regarding a third-party answering service or related product.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Third-Party Links</h2>
            <p className="text-inkSoft leading-relaxed">
              This Site may reference or link to third-party resources or providers. We are not
              responsible for the content, accuracy, pricing, or business practices of
              third-party sites or companies.
            </p>
          </div>

          <div>
            <h2 className="font-head text-xl font-bold text-ink mb-3">Changes to These Terms</h2>
            <p className="text-inkSoft leading-relaxed">
              We may update these Terms of Use from time to time. Continued use of the Site after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="rounded-xl bg-paperRaised border border-ink/10 p-6">
            <h2 className="font-head text-lg font-bold text-ink mb-2">Contact Us</h2>
            <p className="text-sm text-inkSoft leading-relaxed">
              {SITE.name}<br />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
              Phone: <a href={SITE.phoneHref} className="text-amber">{SITE.phone}</a><br />
              Email: <a href={`mailto:${SITE.email}`} className="text-amber">{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
