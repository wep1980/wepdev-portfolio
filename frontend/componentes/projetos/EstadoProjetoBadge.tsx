import {
  rotulosEstadoProjeto,
  type EstadoProjeto,
} from "@/dominio/projeto/EstadoProjeto";

type PropriedadesEstadoProjetoBadge = {
  estado: EstadoProjeto;
};

const classesPorEstado: Record<EstadoProjeto, string> = {
  concluido: "border-status/35 bg-status/10 text-status",
  "em-evolucao": "border-primary/40 bg-primary/10 text-primary-hover",
  "em-construcao": "border-accent/40 bg-accent/12 text-accent-light",
  "estudo-de-caso": "border-accent/40 bg-accent/12 text-accent-light",
  planejado: "border-border bg-surface-elevated/70 text-muted",
};

export function EstadoProjetoBadge({ estado }: PropriedadesEstadoProjetoBadge) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase ${classesPorEstado[estado]}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {rotulosEstadoProjeto[estado]}
    </span>
  );
}
