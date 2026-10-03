import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllGuides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;
  const lastModified = new Date();

  // Core static pages
  const staticRoutes = [
    "",
    "/home-insurance",
    "/auto-insurance",
    "/roofing",
    "/guides",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/advertising-disclosure",
    "/editorial-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route.includes("-insurance") || route === "/roofing" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/guides") || route.includes("-insurance") || route === "/roofing" ? 0.9 : 0.5,
  }));

  // Guide articles
  const guideRoutes = getAllGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedDate || guide.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...guideRoutes];
}
