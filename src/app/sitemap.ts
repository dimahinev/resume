export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { locales } from "@/src/shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `https://hinev.cc/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://hinev.cc/${l}`])
      ),
    },
  }));
}