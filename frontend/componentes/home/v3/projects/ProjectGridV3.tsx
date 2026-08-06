import { ProjectCardV3 } from "@/componentes/home/v3/projects/ProjectCardV3";
import type { ProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectGridV3 = {
  projetos: readonly ProjetoV3[];
};

export function ProjectGridV3({ projetos }: PropriedadesProjectGridV3) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projetos.map((projeto) => (
        <ProjectCardV3 key={projeto.id} projeto={projeto} />
      ))}
    </ul>
  );
}
