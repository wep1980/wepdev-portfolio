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

export type ProjetoV3 = {
  readonly id: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly categoria: string;
  readonly tecnologias: readonly string[];
  readonly status: typeof statusProjetoV3;
  readonly varianteVisual: VarianteProjetoV3;
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
  },
];
