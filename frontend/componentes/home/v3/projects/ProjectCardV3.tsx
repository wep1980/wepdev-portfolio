import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { IconeTecnologia } from "@/componentes/tecnologias/iconesTecnologia";
import type { ProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectCardV3 = {
  projeto: ProjetoV3;
};

const MAXIMO_TAGS_VISIVEIS = 4;

export function ProjectCardV3({ projeto }: PropriedadesProjectCardV3) {
  const imagemCapa = projeto.imagens[0];
  const tecnologiasVisiveis = projeto.tecnologias.slice(0, MAXIMO_TAGS_VISIVEIS);
  const tecnologiasRestantes = projeto.tecnologias.length - tecnologiasVisiveis.length;

  return (
    <li>
      <article className="group flex h-full min-w-0 -translate-y-0 flex-col overflow-hidden rounded-2xl border border-card-dark-border bg-card-dark shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb877]/40 hover:shadow-[0_10px_36px_rgba(0,0,0,0.3)]">
        <div className="relative aspect-[5/3] w-full overflow-hidden bg-background-secondary">
          {imagemCapa ? (
            <Image
              src={imagemCapa.src}
              alt={imagemCapa.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />
          ) : null}
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white">
            {projeto.categoria}
          </span>
          <span className="absolute right-3 top-3 rounded-full border border-white/25 bg-black/60 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/80">
            {projeto.status}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-bold leading-tight text-card-dark-foreground">{projeto.titulo}</h3>
          <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-card-dark-muted">{projeto.descricao}</p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Principais tecnologias">
            {tecnologiasVisiveis.map((tecnologia) => (
              <li
                key={tecnologia}
                className="inline-flex items-center gap-1.5 rounded-full bg-card-dark-tag px-2.5 py-1 text-[0.7rem] font-semibold text-card-dark-foreground/80 transition-colors duration-300 group-hover:text-card-dark-foreground"
              >
                <IconeTecnologia tecnologia={tecnologia} className="size-3.5" />
                {tecnologia}
              </li>
            ))}
            {tecnologiasRestantes > 0 ? (
              <li className="inline-flex items-center rounded-full bg-card-dark-tag px-2.5 py-1 text-[0.7rem] font-semibold text-card-dark-muted">
                +{tecnologiasRestantes}
              </li>
            ) : null}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-3 pt-6">
            <Link
              href={`/projetos/${projeto.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-[#ffb877] outline-none transition duration-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Ver detalhes
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            {projeto.repositorioUrl ? (
              <a
                href={projeto.repositorioUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositório do projeto ${projeto.titulo}`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-card-dark-muted outline-none transition duration-200 hover:text-card-dark-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <FaGithub className="size-5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </li>
  );
}
