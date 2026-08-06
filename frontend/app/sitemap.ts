import type { MetadataRoute } from "next";
import { projetosV3 } from "@/constantes/projetosV3";
import { urlSiteOficial } from "@/constantes/site";

const ultimaModificacaoHome = new Date("2026-08-05T00:00:00-03:00");
const ultimaModificacaoProjetos = new Date("2026-08-06T00:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${urlSiteOficial}/`,
      lastModified: ultimaModificacaoHome,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projetosV3.map((projeto) => ({
      url: `${urlSiteOficial}/projetos/${projeto.slug}`,
      lastModified: ultimaModificacaoProjetos,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
