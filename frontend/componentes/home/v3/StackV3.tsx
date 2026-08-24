import { IconeTecnologia } from "@/componentes/tecnologias/iconesTecnologia";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { gruposTecnologiasV3 } from "@/constantes/tecnologiasV3";

export function StackV3() {
  return (
    <section id="tecnologias" aria-labelledby="titulo-stack-v3" className="scroll-mt-28">
      <SectionHeader label="Tecnologias" titulo="Stacks que uso no dia a dia" headingId="titulo-stack-v3" />
      <div className="mt-8 flex flex-col gap-7">
        {gruposTecnologiasV3.map((grupo) => (
          <div key={grupo.id}>
            <h3 className="text-sm font-bold text-foreground">{grupo.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-3" aria-label={grupo.titulo}>
              {grupo.itens.map((item) => {
                const destaque = grupo.destaques?.includes(item);

                return (
                  <li key={item}>
                    <span
                      title={item}
                      aria-label={item}
                      className={[
                        "flex size-11 items-center justify-center rounded-full border bg-surface text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5",
                        destaque ? "border-primary/40 ring-2 ring-primary/20" : "border-border",
                      ].join(" ")}
                    >
                      <IconeTecnologia tecnologia={item} className="size-5" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
