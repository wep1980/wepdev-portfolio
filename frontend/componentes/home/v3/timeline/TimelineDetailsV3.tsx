import type { ExperienciaProfissional } from "@/dominio/experiencia/ExperienciaProfissional";

type PropriedadesTimelineDetailsV3 = {
  experiencia: ExperienciaProfissional;
};

export function TimelineDetailsV3({
  experiencia,
}: PropriedadesTimelineDetailsV3) {
  return (
    <details className="group mt-3 max-w-2xl">
      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-3 border-b border-primary/60 py-2 font-mono text-xs font-semibold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <span
          aria-hidden="true"
          className="text-primary transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
        Ver detalhes da atuação
      </summary>

      <div className="mt-5 grid gap-7 border-l border-border pl-5 sm:grid-cols-2 sm:pl-6">
        <div>
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-subtle sm:tracking-[0.16em]">
            Principais atividades
          </p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
            {experiencia.atividades.map((atividade) => (
              <li key={atividade}>{atividade}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-subtle sm:tracking-[0.16em]">
            Competências e stack
          </p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
            {experiencia.competencias.map((competencia) => (
              <li key={competencia}>{competencia}</li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-xs leading-6 text-subtle">
            {experiencia.tecnologias.join(" · ")}
          </p>
        </div>
      </div>
    </details>
  );
}
