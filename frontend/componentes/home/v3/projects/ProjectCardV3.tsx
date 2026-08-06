import { ProjectMockupV3 } from "@/componentes/home/v3/projects/ProjectMockupV3";
import type { ProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectCardV3 = {
  projeto: ProjetoV3;
};

export function ProjectCardV3({ projeto }: PropriedadesProjectCardV3) {
  return (
    <li>
      <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface transition-[border-color,background-color] duration-200 hover:border-border-accent/45 hover:bg-surface-hover/20">
        <ProjectMockupV3 variante={projeto.varianteVisual} />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary">
              {projeto.categoria}
            </p>
            <span className="font-mono text-[0.68rem] text-subtle">
              {projeto.status}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground sm:text-xl">
            {projeto.titulo}
          </h3>
          <p className="mt-2.5 text-sm leading-6 text-muted">{projeto.descricao}</p>
          <p className="mt-auto pt-5 font-mono text-[0.72rem] leading-5 text-subtle">
            {projeto.tecnologias.join(" · ")}
          </p>
          <p className="mt-3 text-[0.72rem] font-medium text-muted">
            Estudo de caso em preparação
          </p>
        </div>
      </article>
    </li>
  );
}
