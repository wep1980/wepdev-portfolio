import { ItemExperiencia } from "@/componentes/experiencia/ItemExperiencia";
import type { ExperienciaProfissional } from "@/dominio/experiencia/ExperienciaProfissional";

type PropriedadesLinhaDoTempoExperiencia = {
  experiencias: readonly ExperienciaProfissional[];
};

export function LinhaDoTempoExperiencia({
  experiencias,
}: PropriedadesLinhaDoTempoExperiencia) {
  return (
    <ol className="relative space-y-5 before:absolute before:bottom-0 before:left-[0.35rem] before:top-2 before:w-px before:bg-border">
      {experiencias.map((experiencia) => (
        <ItemExperiencia
          key={experiencia.id}
          experiencia={experiencia}
        />
      ))}
    </ol>
  );
}
