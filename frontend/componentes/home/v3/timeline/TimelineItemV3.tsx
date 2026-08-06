import { TimelineDetailsV3 } from "@/componentes/home/v3/timeline/TimelineDetailsV3";
import { Tag } from "@/componentes/shared/Tag";
import type { ExperienciaProfissional } from "@/dominio/experiencia/ExperienciaProfissional";

type PropriedadesTimelineItemV3 = {
  experiencia: ExperienciaProfissional;
};

export function TimelineItemV3({
  experiencia,
}: PropriedadesTimelineItemV3) {
  return (
    <li className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 gap-y-2 py-5 first:pt-0 last:pb-0 lg:grid-cols-[9rem_1.25rem_minmax(0,1fr)] lg:gap-x-5 lg:gap-y-0 lg:py-6">
      <div className="relative z-10 row-span-2 flex justify-center lg:col-start-2">
        <span
          aria-hidden="true"
          className="mt-1.5 size-3 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_var(--background)]"
        />
      </div>

      <p className="col-start-2 row-start-1 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-primary lg:col-start-1 lg:pt-1">
        {experiencia.periodo}
      </p>

      <article className="col-start-2 row-start-2 min-w-0 lg:col-start-3 lg:row-span-2 lg:row-start-1">
        <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          {experiencia.empresa}
        </h3>
        <p className="mt-1.5 text-base font-medium text-foreground">
          {experiencia.cargo}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          {experiencia.resumo}
        </p>
        <div
          className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1.5"
          aria-label="Tecnologias principais"
        >
          {experiencia.tecnologias.slice(0, 4).map((tecnologia) => (
            <Tag key={tecnologia}>{tecnologia}</Tag>
          ))}
        </div>

        <TimelineDetailsV3 experiencia={experiencia} />
      </article>
    </li>
  );
}
