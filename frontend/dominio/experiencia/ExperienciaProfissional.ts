export type ExperienciaProfissional = {
  id: string;
  periodo: string;
  empresa: string;
  cargo: string;
  resumo: string;
  atividades: readonly string[];
  tecnologias: readonly string[];
  competencias: readonly string[];
  destaque?: boolean;
};
