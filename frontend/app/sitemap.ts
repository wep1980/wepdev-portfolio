import type { MetadataRoute } from "next";
import { urlSiteOficial } from "@/constantes/site";

const ultimaModificacaoHome = new Date("2026-08-05T00:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${urlSiteOficial}/`,
      lastModified: ultimaModificacaoHome,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
