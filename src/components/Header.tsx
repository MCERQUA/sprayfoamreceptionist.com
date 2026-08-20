"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, PhoneCall } from "lucide-react";
import { SITE, GUIDES } from "@/lib/site";

const NAV = [
  { label: "Guides", href: "/#guides" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-head font-bold text-ink text-base sm:text-lg shrink-0">
          <PhoneCall className="text-amber shrink-0" size={26} />
          <span className="leading-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink">
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button className="hover:text-amber transition-colors cursor-pointer">Guides</button>
            {guidesOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="rounded-xl bg-white border border-ink/10 shadow-lg p-2">
                  {GUIDES.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/${g.slug}/`}
                      className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paperRaised hover:text-amber transition-colors"
                    >
                      {g.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {NAV.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-amber transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-1.5 font-bold text-ink hover:text-amber transition-colors">
            <Phone size={16} className="text-amber" />
            {SITE.phone}
          </a>
          <Link
            href="/get-assessment/"
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-white hover:bg-amberDark transition-colors"
          >
            Free Assessment
          </Link>
        </div>

        <button
          className="lg:hidden text-ink cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper px-4 py-4 space-y-1">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/${g.slug}/`}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paperRaised hover:text-amber"
              onClick={() => setOpen(false)}
            >
              {g.navLabel}
            </Link>
          ))}
          <div className="h-px bg-ink/10 my-2" />
          {NAV.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paperRaised hover:text-amber"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 px-3 py-2.5 font-bold text-ink"
          >
            <Phone size={16} className="text-amber" />
            {SITE.phone}
          </a>
          <Link
            href="/get-assessment/"
            className="block text-center rounded-full bg-amber px-5 py-3 text-sm font-bold text-white mt-2"
            onClick={() => setOpen(false)}
          >
            Free Assessment
          </Link>
        </div>
      )}
    </header>
  );
}
