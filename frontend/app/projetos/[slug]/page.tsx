import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/componentes/projetos/detalhes/ProjectDetailPage";
import { projetosV3 } from "@/constantes/projetosV3";
import { urlSiteOficial } from "@/constantes/site";

type PropriedadesPaginaProjeto = {
  params: Promise<{ slug: string }>;
};

function encontrarProjeto(slug: string) {
  return projetosV3.find((projeto) => projeto.slug === slug);
}

export function generateStaticParams() {
  return projetosV3.map((projeto) => ({ slug: projeto.slug }));
}

export async function generateMetadata({ params }: PropriedadesPaginaProjeto): Promise<Metadata> {
  const { slug } = await params;
  const projeto = encontrarProjeto(slug);

  if (!projeto) {
    return { title: "Projeto não encontrado" };
  }

  const title = `${projeto.titulo} | WEPDEV`;
  const description = `Projeto conceitual de ${projeto.resumo.toLowerCase()}`;
  const url = `${urlSiteOficial}/projetos/${projeto.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: "WEPDEV Portfolio", locale: "pt_BR" },
    twitter: { card: "summary", title, description },
  };
}

export default async function PaginaProjeto({ params }: PropriedadesPaginaProjeto) {
  const { slug } = await params;
  const projeto = encontrarProjeto(slug);

  if (!projeto) {
    notFound();
  }

  return <ProjectDetailPage projeto={projeto} />;
}
