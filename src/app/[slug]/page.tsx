import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import GuideLayout from "@/components/GuideLayout";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { GUIDES, getGuide } from "@/lib/site";
import { GUIDE_CONTENT } from "@/content/guides";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return { title: guide.metaTitle, description: guide.metaDescription };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const content = GUIDE_CONTENT[slug];
  if (!guide || !content) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: guide.navLabel, path: `/${guide.slug}/` }]),
          faqSchema(content.faq),
        ]}
      />
      <GuideLayout content={content} />
    </>
  );
}
