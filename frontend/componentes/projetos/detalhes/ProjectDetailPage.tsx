import Link from "next/link";
import { ProjectGalleryV3 } from "@/componentes/home/v3/projects/ProjectGalleryV3";
import { FooterV3 } from "@/componentes/home/v3/FooterV3";
import { NavbarV3 } from "@/componentes/home/v3/NavbarV3";
import { SectionDivider } from "@/componentes/shared/SectionDivider";
import { Container } from "@/componentes/ui/Container";
import type { ProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectDetailPage = {
  projeto: ProjetoV3;
};

function ListaEditorial({ itens }: { itens: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-base leading-7 text-muted sm:grid-cols-2">
      {itens.map((item) => <li key={item} className="border-l border-primary/60 pl-4">{item}</li>)}
    </ul>
  );
}

function BlocoEditorial({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border/80 pt-7" aria-labelledby={`titulo-${titulo.toLowerCase().replaceAll(" ", "-")}`}>
      <h2 id={`titulo-${titulo.toLowerCase().replaceAll(" ", "-")}`} className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{titulo}</h2>
      {children}
    </section>
  );
}

export function ProjectDetailPage({ projeto }: PropriedadesProjectDetailPage) {
  return (
    <>
      <NavbarV3 basePath="/" />
      <main>
        <Container className="py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-subtle">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#projetos" className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Projetos</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-muted">{projeto.titulo}</li>
            </ol>
          </nav>

          <header className="mt-10 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Projeto conceitual</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">{projeto.titulo}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{projeto.resumo}</p>
            <p className="mt-7 border-l-2 border-primary bg-surface px-5 py-4 text-base leading-7 text-foreground">{projeto.avisoConceitual}</p>
          </header>

          <div className="mt-10 max-w-6xl">
            <ProjectGalleryV3 projeto={projeto.titulo} imagens={projeto.imagens} ampla mostrarAmpliar={false} />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.75fr)] lg:gap-16">
            <div className="space-y-10">
              <BlocoEditorial titulo="Sobre o projeto">
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{projeto.descricao}</p>
              </BlocoEditorial>
              <BlocoEditorial titulo="Problema que pretende resolver">
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{projeto.problema}</p>
              </BlocoEditorial>
              <BlocoEditorial titulo="Proposta da solução">
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{projeto.proposta}</p>
              </BlocoEditorial>
              <BlocoEditorial titulo="Funcionalidades previstas">
                <ListaEditorial itens={projeto.funcionalidadesPrevistas} />
              </BlocoEditorial>
              <BlocoEditorial titulo="Arquitetura conceitual">
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{projeto.arquitetura.resumo}</p>
                <ListaEditorial itens={projeto.arquitetura.componentes} />
              </BlocoEditorial>
              <BlocoEditorial titulo="Roadmap">
                <div className="mt-5 divide-y divide-border/80 border-y border-border/80">
                  {projeto.roadmap.map((fase) => (
                    <article key={fase.fase} className="py-5 first:pt-0 last:pb-0">
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">{fase.fase}</p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">{fase.titulo}</h3>
                      <ListaEditorial itens={fase.itens} />
                    </article>
                  ))}
                </div>
              </BlocoEditorial>
            </div>

            <aside className="space-y-8 lg:pt-7" aria-label="Informações técnicas previstas">
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Público-alvo</p>
                <ListaEditorial itens={projeto.publicoAlvo} />
              </section>
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Tecnologias previstas</p>
                <p className="mt-4 text-base leading-7 text-muted">{projeto.tecnologias.join(" · ")}</p>
              </section>
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Decisões técnicas planejadas</p>
                <ListaEditorial itens={projeto.decisoesTecnicas} />
              </section>
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Segurança prevista</p>
                <ListaEditorial itens={projeto.segurancaPrevista} />
              </section>
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Observabilidade prevista</p>
                <ListaEditorial itens={projeto.observabilidadePrevista} />
              </section>
              <section>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Desafios esperados</p>
                <ListaEditorial itens={projeto.desafiosEsperados} />
              </section>
            </aside>
          </div>

          <div className="mt-14">
            <SectionDivider />
            <Link href="/#projetos" className="mt-6 inline-flex min-h-11 items-center border-b border-primary py-1 text-sm font-semibold text-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              ← Voltar para os projetos
            </Link>
          </div>
        </Container>
      </main>
      <FooterV3 basePath="/" />
    </>
  );
}
