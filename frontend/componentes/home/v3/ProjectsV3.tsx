import { ProjectGridV3 } from "@/componentes/home/v3/projects/ProjectGridV3";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import {
  categoriasProjetosV3,
  projetosV3,
} from "@/constantes/projetosV3";

export function ProjectsV3() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos-v3">
      <SectionHeader
        label="Projetos"
        titulo="Projetos que representam as soluções que quero construir."
        descricao="Conceitos de produtos para explorar backend, Inteligência Artificial, interfaces modernas, mobile, microsserviços e observabilidade."
        headingId="titulo-projetos-v3"
      />
      <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3" aria-label="Categorias de projetos">
        {categoriasProjetosV3.map((categoria, indice) => (
          <span
            key={categoria}
            className={indice === 0 ? "border-b border-primary pb-1 font-mono text-[0.72rem] text-primary" : "font-mono text-[0.72rem] text-subtle"}
          >
            {categoria}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <ProjectGridV3 projetos={projetosV3} />
      </div>
    </section>
  );
}
