import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Spray Foam Receptionist",
  description: "Questions about missed calls and call-handling options for your spray foam business? Contact us. Call 844-967-5247.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-amber font-semibold text-sm uppercase tracking-wide mb-3">Contact</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-6">
            Contact Spray Foam Receptionist
          </h1>
          <p className="text-lg text-inkSoft leading-relaxed max-w-2xl">
            Have a question about a guide on this site, or want to talk through your specific
            call-handling situation before deciding what — if anything — to do about it? Reach
            out directly, or use the form below and we&apos;ll get back to you promptly.
          </p>
          <p className="text-inkSoft leading-relaxed max-w-2xl mt-4">
            If you&apos;re ready for a real conversation about your call volume and options, the
            fastest path is the{" "}
            <Link href="/get-assessment/" className="text-amber underline font-semibold">
              Free Call Coverage Assessment
            </Link>{" "}
            request instead — this contact form is best for general questions that don&apos;t
            need a full assessment conversation yet.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-head text-2xl font-bold text-ink mb-6">Direct Contact</h2>
            <div className="space-y-4 mb-8">
              <a href={SITE.phoneHref} className="flex items-center gap-3 text-ink hover:text-amber transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber/10 text-amber shrink-0">
                  <Phone size={18} />
                </span>
                <span className="font-semibold">{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-ink hover:text-amber transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber/10 text-amber shrink-0">
                  <Mail size={18} />
                </span>
                <span className="font-semibold">{SITE.email}</span>
              </a>
              <div className="flex items-start gap-3 text-ink">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber/10 text-amber shrink-0">
                  <MapPin size={18} />
                </span>
                <span className="font-semibold">
                  {SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-paperRaised border border-ink/10 p-5 mb-6">
              <p className="text-sm text-inkSoft leading-relaxed">
                <strong className="text-ink">What we&apos;re not the right contact for:</strong>{" "}
                we&apos;re an educational resource, not an answering-service provider — if
                you&apos;re looking to actually purchase or sign up for phone-answering coverage,
                this isn&apos;t the place to do that directly. We can help you think through what
                to look for and ask the right questions of a real provider, but the purchase
                itself would be with whichever provider you ultimately choose.
              </p>
            </div>

            <p className="text-sm text-inkSoft">We aim to respond to messages within one business day.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
