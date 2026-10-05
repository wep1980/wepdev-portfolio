import type { MetadataRoute } from "next";
import { projetosV3 } from "@/constantes/projetosV3";
import { urlSiteOficial } from "@/constantes/site";

// Data do build: o sitemap acompanha cada publicação do site.
const ultimaModificacaoHome = new Date();
const ultimaModificacaoProjetos = ultimaModificacaoHome;

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
