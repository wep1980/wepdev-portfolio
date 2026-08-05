export type TipoCanalProfissional =
  | "linkedin"
  | "github"
  | "email"
  | "curriculo";

export type CanalProfissional = {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly href: string;
  readonly externo: boolean;
  readonly principal?: boolean;
  readonly tipo: TipoCanalProfissional;
  readonly download?: string;
  readonly eventoAnalitico?: string;
};
