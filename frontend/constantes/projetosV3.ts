export const categoriasProjetosV3 = [
  "Todos",
  "Backend",
  "Frontend",
  "Mobile",
  "IA",
  "Microsserviços",
  "DevOps",
] as const;

export const statusProjetoV3 = "Projeto conceitual" as const;

export const variantesProjetoV3 = [
  "ia",
  "microsservicos",
  "react",
  "angular",
  "mobile",
  "observabilidade",
] as const;

export type VarianteProjetoV3 = (typeof variantesProjetoV3)[number];

export type ImagemProjetoV3 = {
  readonly src: string;
  readonly alt: string;
};

export type ProjetoV3 = {
  readonly id: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly categoria: string;
  readonly tecnologias: readonly string[];
  readonly status: typeof statusProjetoV3;
  readonly varianteVisual: VarianteProjetoV3;
  readonly imagens: readonly ImagemProjetoV3[];
};

export const projetosV3: readonly ProjetoV3[] = [
  {
    id: "assistente-corporativo-ia",
    titulo: "Assistente Corporativo com IA",
    descricao:
      "Aplicação Full Stack conceitual com backend Java, frontend moderno e IA generativa para trabalhar com informações corporativas.",
    categoria: "IA",
    tecnologias: ["OpenAI", "Ollama", "RAG", "Agentes", "Java"],
    status: statusProjetoV3,
    varianteVisual: "ia",
    imagens: [
      { src: "/projetos/assistente-ia/01.svg", alt: "Visão geral conceitual do assistente corporativo com IA" },
      { src: "/projetos/assistente-ia/02.svg", alt: "Conversa conceitual com resposta fundamentada e fontes" },
      { src: "/projetos/assistente-ia/03.svg", alt: "Painel conceitual de administração da base de conhecimento" },
    ],
  },
  {
    id: "plataforma-microsservicos-v3",
    titulo: "Plataforma de Microsserviços",
    descricao:
      "Arquitetura backend Java conceitual para aplicações Full Stack escaláveis, com mensageria, orquestração e observabilidade integrada.",
    categoria: "Microsserviços",
    tecnologias: ["Java", "Spring Boot", "Kafka", "Kubernetes", "OpenTelemetry"],
    status: statusProjetoV3,
    varianteVisual: "microsservicos",
    imagens: [
      { src: "/projetos/microsservicos/01.svg", alt: "Arquitetura conceitual da plataforma de microsserviços" },
      { src: "/projetos/microsservicos/02.svg", alt: "Fluxo conceitual de requisição entre serviços" },
      { src: "/projetos/microsservicos/03.svg", alt: "Estado conceitual dos serviços distribuídos" },
    ],
  },
  {
    id: "dashboard-administrativo-react",
    titulo: "Dashboard Administrativo React",
    descricao:
      "Frontend React conceitual para visualização de métricas e gestão de dados integrado a APIs Java.",
    categoria: "Frontend",
    tecnologias: ["React", "TypeScript", "APIs REST", "Java"],
    status: statusProjetoV3,
    varianteVisual: "react",
    imagens: [
      { src: "/projetos/dashboard-react/01.svg", alt: "Visão executiva conceitual do dashboard React" },
      { src: "/projetos/dashboard-react/02.svg", alt: "Tabela conceitual de pedidos do dashboard React" },
      { src: "/projetos/dashboard-react/03.svg", alt: "Relatórios conceituais do dashboard React" },
    ],
  },
  {
    id: "portal-corporativo-angular",
    titulo: "Portal Corporativo Angular",
    descricao:
      "Interface Angular conceitual para solicitações, aprovações e controle de acesso integrada a microsserviços Java.",
    categoria: "Frontend",
    tecnologias: ["Angular", "TypeScript", "APIs REST", "Controle de acesso"],
    status: statusProjetoV3,
    varianteVisual: "angular",
    imagens: [
      { src: "/projetos/portal-angular/01.svg", alt: "Portal inicial conceitual em Angular" },
      { src: "/projetos/portal-angular/02.svg", alt: "Fluxo conceitual de aprovação do portal Angular" },
      { src: "/projetos/portal-angular/03.svg", alt: "Gestão conceitual de solicitações no portal Angular" },
    ],
  },
  {
    id: "aplicativo-mobile-react-native",
    titulo: "Aplicativo Mobile React Native",
    descricao:
      "Aplicativo mobile conceitual conectado a APIs REST Java, com autenticação, navegação e experiência consistente.",
    categoria: "Mobile",
    tecnologias: ["React Native", "TypeScript", "Autenticação", "Backend"],
    status: statusProjetoV3,
    varianteVisual: "mobile",
    imagens: [
      { src: "/projetos/aplicativo-mobile/01.svg", alt: "Tela conceitual de acesso do aplicativo mobile" },
      { src: "/projetos/aplicativo-mobile/02.svg", alt: "Home conceitual do aplicativo mobile" },
      { src: "/projetos/aplicativo-mobile/03.svg", alt: "Telas conceituais de detalhes e perfil do aplicativo mobile" },
    ],
  },
  {
    id: "plataforma-observabilidade",
    titulo: "Plataforma de Observabilidade",
    descricao:
      "Monitoramento conceitual de aplicações Full Stack com logs, métricas, traces e alertas para sistemas distribuídos.",
    categoria: "DevOps",
    tecnologias: ["OpenTelemetry", "Prometheus", "Grafana", "Logs", "Traces"],
    status: statusProjetoV3,
    varianteVisual: "observabilidade",
    imagens: [
      { src: "/projetos/observabilidade/01.svg", alt: "Métricas conceituais da plataforma de observabilidade" },
      { src: "/projetos/observabilidade/02.svg", alt: "Logs e alertas conceituais da plataforma de observabilidade" },
      { src: "/projetos/observabilidade/03.svg", alt: "Traces e dependências conceituais da plataforma de observabilidade" },
    ],
  },
];
