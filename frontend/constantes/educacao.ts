export type FormacaoAcademica = {
  readonly id: string;
  readonly instituicao: string;
  readonly curso: string;
  readonly periodo: string;
  readonly situacao?: string;
  readonly logoSrc?: string;
  readonly logoCorFundo?: string;
  readonly url?: string;
};

export const formacaoAcademica: readonly FormacaoAcademica[] = [
  {
    id: "full-cycle-mba",
    instituicao: "Full Cycle",
    curso: "MBA em Engenharia de Software com IA",
    periodo: "2026",
    situacao: "Em andamento",
    logoSrc: "/logos/full-cycle.jpg",
    logoCorFundo: "#050C12",
    url: "https://fullcycle.com.br/",
  },
  {
    id: "unicarioca-ads",
    instituicao: "Centro Universitário UniCarioca",
    curso: "Análise e Desenvolvimento de Sistemas",
    periodo: "2014 — 2018",
    logoSrc: "/logos/unicarioca.png",
    url: "https://www.unicarioca.edu.br/",
  },
];
