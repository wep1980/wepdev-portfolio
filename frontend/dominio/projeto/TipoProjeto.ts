export type TipoProjeto = "produto" | "laboratorio" | "estudo-de-caso";

export const rotulosTipoProjeto: Record<TipoProjeto, string> = {
  produto: "Produto",
  laboratorio: "Laboratório",
  "estudo-de-caso": "Estudo de caso",
};
