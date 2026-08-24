export type GrupoTecnologias = {
  readonly id: string;
  readonly label: string;
  readonly titulo: string;
  readonly itens: readonly string[];
  readonly destaques?: readonly string[];
};
