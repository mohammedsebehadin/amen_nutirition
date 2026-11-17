import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/#protocol`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/#meals`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/#coach`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/#plans`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/#faq`, lastModified, changeFrequency: "monthly", priority: 0.75 },
  ];
}
