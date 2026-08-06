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

export type ArquiteturaProjetoV3 = {
  readonly resumo: string;
  readonly componentes: readonly string[];
};

export type FaseRoadmapProjetoV3 = {
  readonly fase: string;
  readonly titulo: string;
  readonly itens: readonly string[];
};

export type DetalhesProjetoV3 = {
  readonly problema: string;
  readonly proposta: string;
  readonly publicoAlvo: readonly string[];
  readonly funcionalidadesPrevistas: readonly string[];
  readonly arquitetura: ArquiteturaProjetoV3;
  readonly decisoesTecnicas: readonly string[];
  readonly segurancaPrevista: readonly string[];
  readonly observabilidadePrevista: readonly string[];
  readonly desafiosEsperados: readonly string[];
  readonly roadmap: readonly FaseRoadmapProjetoV3[];
  readonly avisoConceitual: string;
};

export type ProjetoV3 = {
  readonly id: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly categoria: string;
  readonly categorias: readonly string[];
  readonly resumo: string;
  readonly slug: string;
  readonly tecnologias: readonly string[];
  readonly status: typeof statusProjetoV3;
  readonly varianteVisual: VarianteProjetoV3;
  readonly imagens: readonly ImagemProjetoV3[];
} & DetalhesProjetoV3;

const avisoConceitual =
  "Este projeto representa uma solução planejada. A implementação, o repositório e a demonstração pública serão adicionados conforme o desenvolvimento avançar.";

const detalhesProjetosV3: Record<VarianteProjetoV3, DetalhesProjetoV3> = {
  ia: {
    problema: "Conhecimento corporativo disperso, documentação difícil de localizar, repetição de perguntas e baixa rastreabilidade de fontes.",
    proposta: "Um assistente Full Stack conceitual com backend Java, RAG, integração com Ollama, OpenAI opcional, interface moderna, histórico e respostas fundamentadas.",
    publicoAlvo: ["Equipes corporativas", "Áreas de operação", "Times que consultam documentação interna"],
    funcionalidadesPrevistas: ["Perguntas em linguagem natural", "Respostas com fontes consultadas", "Histórico de conversas", "Avaliação de respostas"],
    arquitetura: {
      resumo: "A solução seria organizada em camadas para separar interface, recuperação de conhecimento, provedores de IA e persistência.",
      componentes: ["Frontend", "API Java", "Autenticação", "Chat e documentos", "Recuperação vetorial", "Provedor de IA", "Banco relacional", "Observabilidade"],
    },
    decisoesTecnicas: ["Manter o backend Java como núcleo de integração", "Usar RAG para relacionar respostas às fontes", "Permitir provedor local ou externo de IA", "Separar ingestão, recuperação e geração"],
    segurancaPrevista: ["Autenticação e autorização por contexto", "Proteção de documentos por permissão", "Registro de acesso às fontes", "Cuidados com dados enviados a provedores externos"],
    observabilidadePrevista: ["Logs de consultas e falhas", "Métricas de ingestão", "Traces entre API, recuperação e provedor", "Alertas para indisponibilidade"],
    desafiosEsperados: ["Qualidade e atualização da base", "Rastreabilidade das respostas", "Controle de custo e privacidade", "Avaliação de respostas geradas"],
    roadmap: [
      { fase: "Fase 1", titulo: "Base conversacional", itens: ["Contrato da API", "Fluxo inicial de conversa", "Modelo de autenticação"] },
      { fase: "Fase 2", titulo: "Conhecimento fundamentado", itens: ["Ingestão de documentos", "Recuperação vetorial", "Citações de fontes"] },
      { fase: "Fase 3", titulo: "Operação assistida", itens: ["Histórico", "Avaliação", "Observabilidade e controles"] },
    ],
    avisoConceitual,
  },
  microsservicos: {
    problema: "Aplicações distribuídas precisam evoluir serviços independentes sem perder rastreabilidade, resiliência e clareza de responsabilidades.",
    proposta: "Uma plataforma Full Stack conceitual com API Gateway, autenticação, serviços Java independentes, mensageria Kafka, persistência separada e observabilidade.",
    publicoAlvo: ["Times de engenharia", "Produtos corporativos", "Sistemas com domínios desacoplados"],
    funcionalidadesPrevistas: ["Entrada por API Gateway", "Serviços de pedidos, pagamentos e clientes", "Eventos assíncronos", "Acompanhamento de saúde dos serviços"],
    arquitetura: {
      resumo: "A arquitetura combina comunicação síncrona para consultas e eventos assíncronos para desacoplar fluxos de negócio.",
      componentes: ["API Gateway", "Autenticação", "Serviços Java", "Kafka", "Persistência por serviço", "Containers", "Observabilidade"],
    },
    decisoesTecnicas: ["Separar responsabilidades por domínio", "Usar eventos quando o desacoplamento for relevante", "Manter contratos explícitos entre serviços", "Preparar execução em containers"],
    segurancaPrevista: ["Autenticação no gateway", "Autorização por serviço", "Segredos fora do código", "Validação de contratos e entradas"],
    observabilidadePrevista: ["Correlation ID", "Métricas de latência", "Logs estruturados", "Traces distribuídos e health checks"],
    desafiosEsperados: ["Consistência entre serviços", "Falhas parciais", "Evolução de contratos", "Operação local e em cluster"],
    roadmap: [
      { fase: "Fase 1", titulo: "Base da plataforma", itens: ["Estrutura dos serviços", "Contratos iniciais", "Ambiente local"] },
      { fase: "Fase 2", titulo: "Fluxos distribuídos", itens: ["Autenticação", "Eventos", "Persistência separada"] },
      { fase: "Fase 3", titulo: "Operação", itens: ["Observabilidade", "Containers", "Kubernetes futuramente"] },
    ],
    avisoConceitual,
  },
  react: {
    problema: "Equipes precisam consultar dados operacionais em interfaces claras, responsivas e conectadas a APIs de negócio.",
    proposta: "Um dashboard React conceitual integrado a APIs Java, com indicadores, filtros, tabelas e relatórios sem apresentar os dados ilustrativos como resultados reais.",
    publicoAlvo: ["Times operacionais", "Gestores de produto", "Usuários de sistemas administrativos"],
    funcionalidadesPrevistas: ["Indicadores resumidos", "Filtros de período", "Tabelas de pedidos", "Relatórios conceituais", "Controle de acesso"],
    arquitetura: {
      resumo: "A interface consumiria APIs Java por contratos definidos, mantendo estado de tela separado das regras de negócio do backend.",
      componentes: ["Aplicação React", "TypeScript", "Estado de filtros", "APIs REST Java", "Autenticação", "Camada de apresentação"],
    },
    decisoesTecnicas: ["Priorizar composição responsiva", "Manter dados e regras no backend", "Tratar estados de carregamento e erro", "Usar componentes acessíveis"],
    segurancaPrevista: ["Sessão protegida", "Permissões por recurso", "Validação de entradas", "Não expor dados no cliente além do necessário"],
    observabilidadePrevista: ["Erros de integração", "Métricas de carregamento", "Logs de falhas de API", "Acompanhamento de indisponibilidade"],
    desafiosEsperados: ["Densidade de dados no mobile", "Estados de carregamento", "Paginação", "Consistência entre filtros e API"],
    roadmap: [
      { fase: "Fase 1", titulo: "Estrutura da interface", itens: ["Layout responsivo", "Navegação", "Estados de tela"] },
      { fase: "Fase 2", titulo: "Dados e filtros", itens: ["Integração com API", "Filtros", "Tabelas"] },
      { fase: "Fase 3", titulo: "Relatórios", itens: ["Visualizações", "Acessibilidade", "Testes de integração"] },
    ],
    avisoConceitual,
  },
  angular: {
    problema: "Fluxos corporativos com solicitações e aprovações precisam de rastreabilidade, permissões claras e uma experiência consistente.",
    proposta: "Um portal Angular conceitual integrado a microsserviços Java para organizar solicitações, aprovações, controle de acesso e auditoria de workflows.",
    publicoAlvo: ["Colaboradores", "Aprovadores", "Áreas administrativas"],
    funcionalidadesPrevistas: ["Abertura de solicitações", "Fluxo de aprovação", "Filtros e prioridades", "Controle de permissões", "Histórico de auditoria"],
    arquitetura: {
      resumo: "O portal seria uma camada de experiência sobre APIs e serviços de workflow, com regras de autorização mantidas no backend.",
      componentes: ["Aplicação Angular", "TypeScript", "APIs REST", "Serviços Java", "Workflow", "Auditoria", "Controle de acesso"],
    },
    decisoesTecnicas: ["Separar apresentação e workflow", "Modelar estados explícitos da solicitação", "Tratar permissões no servidor", "Cobrir fluxos críticos com testes"],
    segurancaPrevista: ["Autenticação", "Autorização por perfil", "Auditoria de transições", "Validação de dados recebidos"],
    observabilidadePrevista: ["Logs de transição", "Métricas de erros de API", "Health checks", "Rastreabilidade de solicitações"],
    desafiosEsperados: ["Regras de aprovação variáveis", "Permissões por contexto", "Histórico confiável", "Acessibilidade em tabelas e fluxos"],
    roadmap: [
      { fase: "Fase 1", titulo: "Portal base", itens: ["Navegação", "Autenticação", "Solicitações iniciais"] },
      { fase: "Fase 2", titulo: "Workflow", itens: ["Aprovações", "Permissões", "Auditoria"] },
      { fase: "Fase 3", titulo: "Qualidade", itens: ["Testes", "Acessibilidade", "Observabilidade"] },
    ],
    avisoConceitual,
  },
  mobile: {
    problema: "Usuários precisam acessar fluxos e informações essenciais em uma experiência mobile consistente e conectada ao backend.",
    proposta: "Um aplicativo React Native conceitual conectado a APIs REST Java, com autenticação, navegação, notificações e evolução futura para uso offline.",
    publicoAlvo: ["Usuários em mobilidade", "Equipes de campo", "Colaboradores que acompanham solicitações"],
    funcionalidadesPrevistas: ["Acesso autenticado", "Resumo de atividades", "Detalhes de solicitações", "Notificações", "Histórico"],
    arquitetura: {
      resumo: "O aplicativo consumiria APIs Java e manteria uma camada local mínima para sessão, navegação e eventual suporte offline.",
      componentes: ["React Native", "TypeScript", "Navegação", "APIs REST Java", "Autenticação", "Notificações", "Armazenamento seguro"],
    },
    decisoesTecnicas: ["Compartilhar contratos com o backend", "Priorizar navegação simples", "Tratar conectividade instável", "Preparar testes em dispositivos"],
    segurancaPrevista: ["Armazenamento seguro de sessão", "Expiração de credenciais", "Comunicação protegida", "Validação de notificações"],
    observabilidadePrevista: ["Erros de rede", "Falhas de autenticação", "Health checks da API", "Registro de falhas não sensíveis"],
    desafiosEsperados: ["Diferenças entre plataformas", "Conectividade", "Acessibilidade mobile", "Publicação futura e manutenção"],
    roadmap: [
      { fase: "Fase 1", titulo: "Experiência inicial", itens: ["Acesso", "Navegação", "Resumo"] },
      { fase: "Fase 2", titulo: "Integração", itens: ["APIs Java", "Detalhes", "Notificações"] },
      { fase: "Fase 3", titulo: "Evolução", itens: ["Offline futuro", "Testes", "Publicação futura"] },
    ],
    avisoConceitual,
  },
  observabilidade: {
    problema: "Sistemas distribuídos precisam relacionar métricas, logs e traces para investigar falhas e compreender o comportamento das aplicações.",
    proposta: "Uma plataforma conceitual para reunir sinais de observabilidade com OpenTelemetry, Prometheus e Grafana como tecnologia prevista para evolução.",
    publicoAlvo: ["Times de plataforma", "Engenharia backend", "Equipes responsáveis por operação"],
    funcionalidadesPrevistas: ["Métricas temporais", "Consulta de logs", "Traces distribuídos", "Alertas", "Mapa conceitual de dependências"],
    arquitetura: {
      resumo: "A plataforma conectaria instrumentação, coleta e visualização em uma camada dedicada à operação de aplicações distribuídas.",
      componentes: ["OpenTelemetry", "Coletores", "Prometheus", "Grafana futuramente", "Logs", "Traces", "Alertas"],
    },
    decisoesTecnicas: ["Padronizar sinais com OpenTelemetry", "Correlacionar logs e traces", "Separar coleta e visualização", "Evoluir para SLI/SLO futuramente"],
    segurancaPrevista: ["Remoção de dados sensíveis dos sinais", "Acesso controlado às consultas", "Retenção definida por tipo de dado", "Proteção dos endpoints de coleta"],
    observabilidadePrevista: ["A própria plataforma terá health checks", "Métricas de coleta", "Alertas de indisponibilidade", "Rastreamento de falhas de pipeline"],
    desafiosEsperados: ["Volume de sinais", "Cardinalidade", "Correlação entre fontes", "Definição de alertas úteis"],
    roadmap: [
      { fase: "Fase 1", titulo: "Sinais básicos", itens: ["Instrumentação", "Métricas", "Health checks"] },
      { fase: "Fase 2", titulo: "Investigação", itens: ["Logs", "Traces", "Correlação"] },
      { fase: "Fase 3", titulo: "Operação madura", itens: ["Alertas", "SLO futuro", "Painéis de evolução"] },
    ],
    avisoConceitual,
  },
};

export const projetosV3: readonly ProjetoV3[] = [
  {
    id: "assistente-corporativo-ia",
    slug: "assistente-corporativo-ia",
    titulo: "Assistente Corporativo com IA",
    resumo: "Assistente Full Stack conceitual para consultar conhecimento corporativo com respostas fundamentadas.",
    descricao:
      "Aplicação Full Stack conceitual com backend Java, frontend moderno e IA generativa para trabalhar com informações corporativas.",
    categoria: "IA",
    categorias: ["IA", "Backend", "Frontend"],
    tecnologias: ["OpenAI", "Ollama", "RAG", "Agentes", "Java"],
    status: statusProjetoV3,
    varianteVisual: "ia",
    ...detalhesProjetosV3.ia,
    imagens: [
      { src: "/projetos/assistente-ia/01.svg", alt: "Visão geral conceitual do assistente corporativo com IA" },
      { src: "/projetos/assistente-ia/02.svg", alt: "Conversa conceitual com resposta fundamentada e fontes" },
      { src: "/projetos/assistente-ia/03.svg", alt: "Painel conceitual de administração da base de conhecimento" },
    ],
  },
  {
    id: "plataforma-microsservicos-v3",
    slug: "plataforma-microsservicos",
    titulo: "Plataforma de Microsserviços",
    resumo: "Plataforma backend Java conceitual para serviços distribuídos, eventos e observabilidade.",
    descricao:
      "Arquitetura backend Java conceitual para aplicações Full Stack escaláveis, com mensageria, orquestração e observabilidade integrada.",
    categoria: "Microsserviços",
    categorias: ["Microsserviços", "Backend", "DevOps"],
    tecnologias: ["Java", "Spring Boot", "Kafka", "Kubernetes", "OpenTelemetry"],
    status: statusProjetoV3,
    varianteVisual: "microsservicos",
    ...detalhesProjetosV3.microsservicos,
    imagens: [
      { src: "/projetos/microsservicos/01.svg", alt: "Arquitetura conceitual da plataforma de microsserviços" },
      { src: "/projetos/microsservicos/02.svg", alt: "Fluxo conceitual de requisição entre serviços" },
      { src: "/projetos/microsservicos/03.svg", alt: "Estado conceitual dos serviços distribuídos" },
    ],
  },
  {
    id: "dashboard-administrativo-react",
    slug: "dashboard-administrativo-react",
    titulo: "Dashboard Administrativo React",
    resumo: "Dashboard React conceitual para explorar dados operacionais por meio de APIs Java.",
    descricao:
      "Frontend React conceitual para visualização de métricas e gestão de dados integrado a APIs Java.",
    categoria: "Frontend",
    categorias: ["Frontend"],
    tecnologias: ["React", "TypeScript", "APIs REST", "Java"],
    status: statusProjetoV3,
    varianteVisual: "react",
    ...detalhesProjetosV3.react,
    imagens: [
      { src: "/projetos/dashboard-react/01.svg", alt: "Visão executiva conceitual do dashboard React" },
      { src: "/projetos/dashboard-react/02.svg", alt: "Tabela conceitual de pedidos do dashboard React" },
      { src: "/projetos/dashboard-react/03.svg", alt: "Relatórios conceituais do dashboard React" },
    ],
  },
  {
    id: "portal-corporativo-angular",
    slug: "portal-corporativo-angular",
    titulo: "Portal Corporativo Angular",
    resumo: "Portal Angular conceitual para solicitações, aprovações e controle de acesso.",
    descricao:
      "Interface Angular conceitual para solicitações, aprovações e controle de acesso integrada a microsserviços Java.",
    categoria: "Frontend",
    categorias: ["Frontend"],
    tecnologias: ["Angular", "TypeScript", "APIs REST", "Controle de acesso"],
    status: statusProjetoV3,
    varianteVisual: "angular",
    ...detalhesProjetosV3.angular,
    imagens: [
      { src: "/projetos/portal-angular/01.svg", alt: "Portal inicial conceitual em Angular" },
      { src: "/projetos/portal-angular/02.svg", alt: "Fluxo conceitual de aprovação do portal Angular" },
      { src: "/projetos/portal-angular/03.svg", alt: "Gestão conceitual de solicitações no portal Angular" },
    ],
  },
  {
    id: "aplicativo-mobile-react-native",
    slug: "aplicativo-mobile-react-native",
    titulo: "Aplicativo Mobile React Native",
    resumo: "Aplicativo mobile conceitual conectado a APIs Java para acompanhar fluxos e informações.",
    descricao:
      "Aplicativo mobile conceitual conectado a APIs REST Java, com autenticação, navegação e experiência consistente.",
    categoria: "Mobile",
    categorias: ["Mobile"],
    tecnologias: ["React Native", "TypeScript", "Autenticação", "Backend"],
    status: statusProjetoV3,
    varianteVisual: "mobile",
    ...detalhesProjetosV3.mobile,
    imagens: [
      { src: "/projetos/aplicativo-mobile/01.svg", alt: "Tela conceitual de acesso do aplicativo mobile" },
      { src: "/projetos/aplicativo-mobile/02.svg", alt: "Home conceitual do aplicativo mobile" },
      { src: "/projetos/aplicativo-mobile/03.svg", alt: "Telas conceituais de detalhes e perfil do aplicativo mobile" },
    ],
  },
  {
    id: "plataforma-observabilidade",
    slug: "plataforma-observabilidade",
    titulo: "Plataforma de Observabilidade",
    resumo: "Plataforma conceitual para correlacionar métricas, logs, traces e alertas.",
    descricao:
      "Monitoramento conceitual de aplicações Full Stack com logs, métricas, traces e alertas para sistemas distribuídos.",
    categoria: "DevOps",
    categorias: ["DevOps", "Backend", "Microsserviços"],
    tecnologias: ["OpenTelemetry", "Prometheus", "Grafana", "Logs", "Traces"],
    status: statusProjetoV3,
    varianteVisual: "observabilidade",
    ...detalhesProjetosV3.observabilidade,
    imagens: [
      { src: "/projetos/observabilidade/01.svg", alt: "Métricas conceituais da plataforma de observabilidade" },
      { src: "/projetos/observabilidade/02.svg", alt: "Logs e alertas conceituais da plataforma de observabilidade" },
      { src: "/projetos/observabilidade/03.svg", alt: "Traces e dependências conceituais da plataforma de observabilidade" },
    ],
  },
];
