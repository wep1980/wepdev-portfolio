import { ProjectGalleryV3 } from "@/componentes/home/v3/projects/ProjectGalleryV3";
import Link from "next/link";
import type { ProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectCardV3 = {
  projeto: ProjetoV3;
  destaque?: boolean;
  centralizarNoDesktop?: boolean;
};

export function ProjectCardV3({
  projeto,
  destaque = false,
  centralizarNoDesktop = false,
}: PropriedadesProjectCardV3) {
  return (
    <li
      className={[
        destaque ? "md:col-span-2 lg:col-span-3" : "",
        centralizarNoDesktop ? "lg:col-start-2" : "",
      ].join(" ")}
    >
      <article
        className={[
          "flex h-full min-w-0 flex-col overflow-hidden rounded-md border border-border bg-surface",
          destaque
            ? "md:grid md:grid-cols-[1.25fr_1fr] lg:grid-cols-[1.45fr_1fr]"
            : "",
        ].join(" ")}
      >
        <ProjectGalleryV3 projeto={projeto.titulo} imagens={projeto.imagens} />
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary">
              {projeto.categoria}
            </p>
            <span className="whitespace-nowrap font-mono text-[0.68rem] font-semibold text-primary">
              {projeto.status}
            </span>
          </div>
          <h3
            className={[
              "mt-4 font-semibold leading-tight text-foreground",
              destaque ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl",
            ].join(" ")}
          >
            {projeto.titulo}
          </h3>
          <p className="mt-2.5 text-sm leading-6 text-muted">{projeto.descricao}</p>
          <p className="mt-auto pt-5 font-mono text-[0.72rem] leading-5 text-subtle">
            {projeto.tecnologias.join(" · ")}
          </p>
          <p className="mt-3 text-[0.72rem] font-medium text-muted">
            Estudo de caso em preparação
          </p>
          <Link
            href={`/projetos/${projeto.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 self-start border-b border-primary/70 py-1 text-sm font-semibold text-foreground outline-none transition duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            <span>Ver detalhes do projeto</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </li>
  );
}
