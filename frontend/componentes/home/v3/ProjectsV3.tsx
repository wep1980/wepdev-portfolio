import { ProjectGridV3 } from "@/componentes/home/v3/projects/ProjectGridV3";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { Container } from "@/componentes/ui/Container";
import { projetosV3 } from "@/constantes/projetosV3";

export function ProjectsV3() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos-v3">
      <Container>
        <SectionHeader
          label="Projetos"
          titulo="Projetos que representam as soluções que quero construir."
          descricao="Conceitos de produtos para explorar backend, Inteligência Artificial, interfaces modernas, mobile, microsserviços e observabilidade."
          headingId="titulo-projetos-v3"
        />
        <div className="mt-8">
          <ProjectGridV3 projetos={projetosV3} />
        </div>
      </Container>
    </section>
  );
}
