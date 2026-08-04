import type { ExperienciaProfissional } from "@/dominio/experiencia/ExperienciaProfissional";

type PropriedadesItemExperiencia = {
  experiencia: ExperienciaProfissional;
};

export function ItemExperiencia({ experiencia }: PropriedadesItemExperiencia) {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 size-3 rounded-full border border-primary bg-background shadow-[0_0_18px_rgb(56_189_248_/_34%)]"
      />

      <article className="rounded-lg border border-border bg-surface/70 p-5 shadow-[0_14px_50px_rgb(0_0_0_/_16%)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold text-primary">
              {experiencia.periodo}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {experiencia.empresa}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary-hover">
              {experiencia.cargo}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">
          {experiencia.resumo}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
          {experiencia.tecnologias.map((tecnologia) => (
            <li
              key={tecnologia}
              className="rounded-full border border-border/80 bg-background-secondary/70 px-3 py-1.5 font-mono text-[0.7rem] text-muted"
            >
              {tecnologia}
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-border/70 pt-4">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle">
            Competências desenvolvidas
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2">
            {experiencia.competencias.map((competencia) => (
              <li key={competencia}>{competencia}</li>
            ))}
          </ul>
        </div>

        <details
          className="group mt-5 rounded-md border border-border/80 bg-background-secondary/55"
          open={experiencia.destaque}
        >
          <summary className="cursor-pointer list-none px-4 py-3 font-mono text-xs font-semibold text-foreground outline-none transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="text-primary">
                +
              </span>
              Ver principais atividades
            </span>
          </summary>

          <ul className="space-y-2 border-t border-border/70 px-4 pb-4 pt-3 text-sm leading-6 text-muted">
            {experiencia.atividades.map((atividade) => (
              <li key={atividade}>{atividade}</li>
            ))}
          </ul>
        </details>
      </article>
    </li>
  );
}
