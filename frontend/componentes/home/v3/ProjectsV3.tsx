import { ProjectGridV3 } from "@/componentes/home/v3/projects/ProjectGridV3";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { projetosV3 } from "@/constantes/projetosV3";

export function ProjectsV3() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos-v3" className="scroll-mt-28">
      <SectionHeader
        label="Projetos"
        titulo="Meus Projetos em Destaque"
        headingId="titulo-projetos-v3"
      />
      <div className="mt-8">
        <ProjectGridV3 projetos={projetosV3} />
      </div>
    </section>
  );
}
