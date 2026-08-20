import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Spray Foam Receptionist",
  description: "Cost guides and honest comparisons on call-handling options for spray foam contractors.",
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }])} />
      <section className="bg-paperRaised">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-amber font-semibold text-sm uppercase tracking-wide mb-3">Blog</p>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Call-Handling Guides for Spray Foam Contractors
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group block rounded-2xl bg-white border border-ink/10 p-6 sm:p-8 hover:border-amber transition-colors"
            >
              <p className="flex items-center gap-2 text-xs font-semibold text-inkSoft uppercase tracking-wide mb-2">
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 className="font-head text-xl font-bold text-ink mb-2 group-hover:text-amber transition-colors">
                {post.title}
              </h2>
              <p className="text-inkSoft text-sm leading-relaxed mb-3">{post.excerpt}</p>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-amber">
                Read more <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
