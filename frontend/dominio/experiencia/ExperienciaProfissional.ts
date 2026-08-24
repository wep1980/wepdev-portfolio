export type ClienteAtendido = {
  readonly nome: string;
  readonly logoSrc?: string;
  readonly url?: string;
  readonly bordaClara?: boolean;
  readonly corFundo?: string;
};

export type ExperienciaProfissional = {
  id: string;
  periodo: string;
  empresa: string;
  cliente?: string;
  clientes?: readonly ClienteAtendido[];
  cargo: string;
  resumo: string;
  atividades: readonly string[];
  tecnologias: readonly string[];
  competencias: readonly string[];
  destaque?: boolean;
  logoSrc?: string;
  logoBordaClara?: boolean;
  logoCorFundo?: string;
  siteUrl?: string;
  linkedinUrl?: string;
};
