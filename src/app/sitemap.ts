import type { MetadataRoute } from "next";
import { SITE, GUIDES, BLOG_POSTS } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about/", "/contact/", "/get-assessment/", "/faq/", "/blog/", "/privacy/", "/terms/"];
  const guidePaths = GUIDES.map((g) => `/${g.slug}/`);
  const blogPaths = BLOG_POSTS.map((p) => `/blog/${p.slug}/`);
  const all = [...staticPaths, ...guidePaths, ...blogPaths];
  return all.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
