export type PrincipioEngenharia = {
  readonly id: string;
  readonly titulo: string;
  readonly descricao: string;
};

export const principiosEngenharia: readonly PrincipioEngenharia[] = [
  {
    id: "simplicidade",
    titulo: "Simplicidade antes da complexidade",
    descricao:
      "Escolher a solução mais simples que resolva o problema atual e preserve caminhos claros para evolução.",
  },
  {
    id: "evolucao-incremental",
    titulo: "Evolução incremental",
    descricao:
      "Entregar em pequenas etapas, validar resultados e reduzir riscos antes de ampliar a complexidade.",
  },
  {
    id: "seguranca",
    titulo: "Segurança por padrão",
    descricao:
      "Tratar segurança como requisito de arquitetura e desenvolvimento, e não como correção posterior.",
  },
  {
    id: "observabilidade",
    titulo: "Observabilidade desde o início",
    descricao:
      "Planejar logs, métricas e rastreabilidade como parte do comportamento esperado do sistema.",
  },
  {
    id: "apis",
    titulo: "APIs claras e documentadas",
    descricao:
      "Construir contratos previsíveis, compreensíveis e fáceis de integrar e evoluir.",
  },
  {
    id: "testes",
    titulo: "Testes como parte da entrega",
    descricao:
      "Utilizar testes para reduzir regressões, documentar comportamentos e apoiar mudanças seguras.",
  },
  {
    id: "responsabilidades",
    titulo: "Separação de responsabilidades",
    descricao:
      "Manter componentes, serviços e camadas com papéis claros e baixo acoplamento.",
  },
  {
    id: "ia",
    titulo: "IA com julgamento técnico",
    descricao:
      "Usar Inteligência Artificial para acelerar pesquisa, documentação e desenvolvimento sem delegar decisões críticas.",
  },
];
