import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ProjectGalleryV3 } from "@/componentes/home/v3/projects/ProjectGalleryV3";
import { FooterV3 } from "@/componentes/home/v3/FooterV3";
import { NavbarV3 } from "@/componentes/home/v3/NavbarV3";
import { IconeTecnologia } from "@/componentes/tecnologias/iconesTecnologia";
import { SectionDivider } from "@/componentes/shared/SectionDivider";
import { Container } from "@/componentes/ui/Container";
import type { ProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectDetailPage = {
  projeto: ProjetoV3;
};

export function ProjectDetailPage({ projeto }: PropriedadesProjectDetailPage) {
  return (
    <>
      <NavbarV3 basePath="/" />
      <main>
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#projetos"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border px-4 text-sm font-semibold text-muted outline-none transition duration-200 hover:border-foreground/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Voltar
              </Link>
              <h1 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
                {projeto.titulo}
              </h1>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary">
                {projeto.categoria}
              </span>
            </div>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-subtle">
              {projeto.status}
            </span>
          </div>

          <div className="mt-8 max-w-6xl">
            <ProjectGalleryV3
              projeto={projeto.titulo}
              imagens={projeto.imagens}
              ampla
              mostrarAmpliar
              rotuloImagem={projeto.status === "Projeto real" ? "Ambiente de demonstração" : "Interface conceitual"}
            />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(15rem,0.7fr)] lg:gap-14">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                  {projeto.titulo}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{projeto.descricao}</p>
              </section>

              <section className="border-t border-border/80 pt-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Destaques técnicos
                </p>
                <ul className="mt-4 space-y-3">
                  {projeto.destaquesTecnicos.map((destaque) => (
                    <li key={destaque} className="border-l border-primary/60 pl-4 text-base leading-7 text-muted">
                      {destaque}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-t border-border/80 pt-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Problemas resolvidos
                </p>
                <ul className="mt-4 space-y-3">
                  {projeto.problemasResolvidos.map((problema) => (
                    <li key={problema} className="flex items-start gap-3 text-base leading-7 text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {problema}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-8 lg:pt-1" aria-label="Informações técnicas do projeto">
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Tecnologias
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias previstas">
                  {projeto.tecnologias.map((tecnologia) => (
                    <li
                      key={tecnologia}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-foreground"
                    >
                      <IconeTecnologia tecnologia={tecnologia} className="size-3.5" />
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Tags</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags do projeto">
                  {projeto.tags.map((tag) => (
                    <li key={tag} className="text-sm font-medium text-subtle">
                      #{tag}
                    </li>
                  ))}
                </ul>
              </section>

              {projeto.repositorioUrl ? (
                <section>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Código fonte
                  </p>
                  <a
                    href={projeto.repositorioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground outline-none transition duration-200 hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <FaGithub className="size-4" aria-hidden="true" />
                    Repositório
                  </a>
                </section>
              ) : null}
            </aside>
          </div>

          <p className="mt-14 max-w-3xl border-l-2 border-primary bg-surface px-5 py-4 text-base leading-7 text-foreground">
            {projeto.notaFinal}
          </p>

          <div className="mt-10">
            <SectionDivider />
            <Link
              href="/#projetos"
              className="mt-6 inline-flex min-h-11 items-center border-b border-primary py-1 text-sm font-semibold text-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              ← Voltar para os projetos
            </Link>
          </div>
        </Container>
      </main>
      <FooterV3 basePath="/" />
    </>
  );
}
