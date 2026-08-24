import { ItemExperienciaCardV3 } from "@/componentes/home/v3/timeline/ItemExperienciaCardV3";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { experienciasProfissionais } from "@/constantes/experiencias";

export function TimelineV3() {
  return (
    <section id="experiencia" aria-labelledby="titulo-timeline-v3">
      <SectionHeader label="Experiência" titulo="Trajetória profissional" headingId="titulo-timeline-v3" />
      <ol className="mt-7 flex flex-col gap-4">
        {experienciasProfissionais.map((experiencia) => (
          <li key={experiencia.id}>
            <ItemExperienciaCardV3 experiencia={experiencia} />
          </li>
        ))}
      </ol>
    </section>
  );
}
