import type { MetadataRoute } from "next";
import { urlSiteOficial } from "@/constantes/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${urlSiteOficial}/sitemap.xml`,
    host: urlSiteOficial,
  };
}
