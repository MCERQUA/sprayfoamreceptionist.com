import Link from "next/link";
import { Phone, Mail, MapPin, PhoneCall } from "lucide-react";
import { SITE, GUIDES, BLOG_POSTS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-head font-bold text-white text-lg mb-3">
            <PhoneCall className="text-terracotta" size={22} />
            {SITE.name}
          </div>
          <p className="text-sm text-paper/70 mb-4">
            An educational resource for spray foam contractors on missed calls, call-handling
            gaps, and how to fix them.
          </p>
          <div className="space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-terracotta transition-colors">
              <Phone size={15} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-terracotta transition-colors">
              <Mail size={15} /> {SITE.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-head font-bold text-white mb-3">Guides</h3>
          <ul className="space-y-2 text-sm">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={`/${g.slug}/`} className="hover:text-terracotta transition-colors">{g.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-head font-bold text-white mb-3">Blog</h3>
          <ul className="space-y-2 text-sm">
            {BLOG_POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}/`} className="hover:text-terracotta transition-colors">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-head font-bold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/" className="hover:text-terracotta transition-colors">About</Link></li>
            <li><Link href="/faq/" className="hover:text-terracotta transition-colors">FAQ</Link></li>
            <li><Link href="/contact/" className="hover:text-terracotta transition-colors">Contact</Link></li>
            <li><Link href="/get-assessment/" className="hover:text-terracotta transition-colors">Free Assessment</Link></li>
            <li><Link href="/privacy/" className="hover:text-terracotta transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms/" className="hover:text-terracotta transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-6 px-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. Educational resource — not an answering service or telecommunications provider.
      </div>
    </footer>
  );
}
