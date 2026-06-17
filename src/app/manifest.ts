export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dima Hinev | Senior Frontend Developer",
    short_name: "Dima Hinev CV",
    description:
      "Senior Frontend Developer with 6+ years of experience. Expert in React, Next.js, TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0369a1",
  };
}
