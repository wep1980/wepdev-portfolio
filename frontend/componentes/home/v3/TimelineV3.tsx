import { TimelineItemV3 } from "@/componentes/home/v3/timeline/TimelineItemV3";
import { SectionDivider } from "@/componentes/shared/SectionDivider";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { experienciasProfissionais } from "@/constantes/experiencias";

export function TimelineV3() {
  return (
    <section id="experiencia" aria-labelledby="titulo-timeline-v3">
      <SectionHeader
        label="Minha trajetória"
        titulo="Experiência construída em projetos, produtos e sistemas corporativos."
        descricao="Uma visão completa da minha evolução profissional, com leitura resumida para recrutadores e detalhes técnicos acessíveis em cada experiência."
        headingId="titulo-timeline-v3"
      />
      <ol className="relative mt-7 before:absolute before:bottom-0 before:left-[0.6rem] before:top-0 before:w-px before:bg-border lg:before:left-[9.6rem]">
        {experienciasProfissionais.map((experiencia) => (
          <TimelineItemV3
            key={experiencia.id}
            experiencia={experiencia}
          />
        ))}
      </ol>
      <div className="mt-7">
        <SectionDivider />
      </div>
    </section>
  );
}
