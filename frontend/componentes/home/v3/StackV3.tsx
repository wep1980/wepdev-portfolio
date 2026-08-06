import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { Container } from "@/componentes/ui/Container";
import { gruposTecnologiasV3 } from "@/constantes/tecnologiasV3";

export function StackV3() {
  return (
    <section id="tecnologias" aria-labelledby="titulo-stack-v3">
      <Container>
        <SectionHeader
          label="Stack Tecnológica"
          titulo="Competências organizadas por contexto"
          descricao="Tecnologias apresentadas como evidências de competência em engenharia."
          headingId="titulo-stack-v3"
        />
        <div className="mt-8 divide-y divide-border/80 border-y border-border/80">
          {gruposTecnologiasV3.map((grupo) => (
            <article key={grupo.id} className="grid gap-4 py-5 sm:grid-cols-[minmax(10rem,0.5fr)_minmax(0,1.5fr)] sm:gap-8 sm:py-6">
              <div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary sm:tracking-[0.14em]">
                  {grupo.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-foreground sm:text-xl">
                  {grupo.titulo}
                </h3>
              </div>
              <div>
                <p className="max-w-2xl text-sm leading-6 text-muted">{grupo.descricao}</p>
                <p className="mt-2.5 font-mono text-[0.72rem] leading-6 text-subtle">
                  {grupo.itens.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
