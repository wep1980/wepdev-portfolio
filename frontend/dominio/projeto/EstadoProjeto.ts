export type EstadoProjeto =
  | "concluido"
  | "em-evolucao"
  | "em-construcao"
  | "estudo-de-caso"
  | "planejado";

export const rotulosEstadoProjeto: Record<EstadoProjeto, string> = {
  concluido: "Concluído",
  "em-evolucao": "Em evolução",
  "em-construcao": "Em construção",
  "estudo-de-caso": "Estudo de caso",
  planejado: "Planejado",
};
