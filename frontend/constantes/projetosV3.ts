export const categoriasProjetosV3 = [
  "Todos",
  "Backend",
  "Frontend",
  "Mobile",
  "IA",
  "Microsserviços",
] as const;

export const statusProjetoRealV3 = "Projeto real" as const;

export type ImagemProjetoV3 = {
  readonly src: string;
  readonly alt: string;
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
  readonly status: string;
  readonly destaquesTecnicos: readonly string[];
  readonly problemasResolvidos: readonly string[];
  readonly tags: readonly string[];
  readonly notaFinal: string;
  readonly imagens: readonly ImagemProjetoV3[];
  readonly repositorioUrl?: string;
};

export const projetosV3: readonly ProjetoV3[] = [
  {
    id: "economix",
    slug: "economix",
    titulo: "Economix",
    resumo:
      "Plataforma real para comparar preços entre mercados, montar listas de compras e processar encartes com OCR.",
    descricao:
      "Economix é uma plataforma full stack real para ajudar consumidores a economizar nas compras: compara preços entre mercados, monta listas de compras, calcula o custo estimado por loja e processa encartes públicos com OCR para transformar ofertas em dados estruturados e revisáveis.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend", "Mobile", "IA"],
    tecnologias: ["Java", "Spring Boot", "Angular", "React Native", "PostgreSQL", "Docker", "Ollama", "Playwright"],
    status: statusProjetoRealV3,
    destaquesTecnicos: [
      "Arquitetura full stack moderna, com Java/Spring Boot no backend, Angular no web e React Native no mobile",
      "Arquitetura em camadas, separando controllers, services, repositories, entidades, DTOs, segurança e integrações",
      "Catálogo normalizado de produtos, permitindo comparar o mesmo produto entre diferentes lojas",
      "Coleta automatizada de encartes, com fallback headless usando Playwright quando a coleta padrão falha",
      "OCR de imagens, utilizando Tesseract para extrair produtos, preços e validade dos encartes",
      "Revisão humana controlada, permitindo aprovar ou rejeitar candidatos OCR antes de gerar ofertas",
      "Integração com Ollama, preparada para normalização e interpretação local dos dados",
      "Comparação multi-loja, calculando menor preço, cobertura de ofertas e custo estimado",
      "Otimização de compras, distribuindo itens entre lojas para reduzir o custo total",
      "Histórico de preços, permitindo acompanhar variações ao longo do tempo",
      "Segurança com JWT e API Keys, incluindo autorização por perfil e proteção de endpoints",
      "PostgreSQL com Flyway, garantindo persistência estruturada e versionamento das migrações",
      "Armazenamento de imagens com MinIO, incluindo retenção, auditoria e URLs de visualização protegidas",
      "Frontend responsivo, com estados de carregamento, fallback demonstrativo e integração REST",
      "Aplicativo mobile com Expo, compartilhando os mesmos contratos da API",
      "Containerização com Docker, usando Nginx para servir o Angular e fazer proxy para o backend",
      "Testes automatizados, com JUnit, Mockito, Testcontainers, Jasmine, Karma e Chrome Headless",
      "Deploy operacional, com containers separados, rede Docker interna, health checks e infraestrutura Linux",
    ],
    problemasResolvidos: [
      "Backend Java implementado e validado com 225 testes",
      "Coleta padrão e fallback headless dos encartes implementados",
      "OCR, revisão e geração de ofertas funcionando",
      "Frontend Angular integrado à API",
      "Mobile React Native com navegação e cliente REST",
      "Frontend publicado em container no servidor",
      "Comunicação frontend → backend validada",
      "Configuração de domínio público para o frontend",
      "Teste do mobile em um dispositivo físico via Expo Go",
    ],
    tags: ["Full Stack", "Java", "Angular", "React Native"],
    repositorioUrl: "https://github.com/wep1980/wep-economix",
    notaFinal:
      "Projeto real, com backend validado por 225 testes automatizados e frontend web publicado em container. As imagens acima mostram um ambiente de demonstração com dados fictícios; o aplicativo mobile ainda está em teste local via Expo.",
    imagens: [
      { src: "/projetos/economix/01.png", alt: "Visão geral do Economix, com economia encontrada, ofertas ativas e atividade recente" },
      { src: "/projetos/economix/02.png", alt: "Tela de ofertas do Economix, com filtros por produto, loja e preço máximo" },
      { src: "/projetos/economix/03.png", alt: "Catálogo de produtos do Economix, com menor preço e ofertas ativas por item" },
      { src: "/projetos/economix/04.png", alt: "Lojas e redes monitoradas pelo Economix, com cobertura de ofertas por região" },
      { src: "/projetos/economix/05.png", alt: "Painel de coleta e encartes do Economix, acompanhando OCR e campanhas processadas" },
    ],
  },
  {
    id: "financas",
    slug: "financas",
    titulo: "Finanças",
    resumo:
      "Sistema real de finanças pessoais multi-usuário, com leitura automática de faturas e chat com IA sobre a própria situação financeira.",
    descricao:
      "Finanças é um sistema real de finanças pessoais multi-usuário construído em microsserviços: lê faturas de cartão em PDF e transforma em transações estruturadas automaticamente, e permite conversar em português com uma IA sobre a própria situação financeira, sempre com resposta rastreável a dado real, nunca inventada.",
    categoria: "Microsserviços",
    categorias: ["Microsserviços", "Backend", "IA", "Frontend"],
    tecnologias: [
      "Java",
      "Quarkus",
      "Next.js",
      "Apache Kafka",
      "MySQL",
      "MongoDB",
      "Qdrant",
      "Keycloak",
      "Docker",
      "Ollama",
      "OpenAI",
      "GitHub Actions",
    ],
    status: statusProjetoRealV3,
    destaquesTecnicos: [
      "7 microsserviços em Java 21 e Quarkus, com banco de dados próprio por serviço (MySQL, MongoDB e Qdrant) e contrato OpenAPI escrito antes do código para cada um",
      "Comunicação síncrona (REST) e assíncrona (Kafka) de forma deliberada: síncrono onde precisa de efeito imediato (débito de saldo), Kafka para propagar eventos de domínio, como a indexação para RAG",
      "IA tratada como porta, não como dependência de SDK: um LlmProvider abstrai OpenAI e Ollama, permitindo rodar 100% local sem dado saindo da própria infraestrutura",
      "RAG real, com embeddings de transações indexados no Qdrant via evento Kafka e busca semântica para perguntas livres; a resposta final é sempre montada por template determinístico, nunca inventada pelo LLM",
      "Confirmação obrigatória em toda ação que mexe em dinheiro, tanto na importação de documentos quanto em comandos da IA, seguindo o mesmo princípio documentado em ADR",
      "Multi-tenancy real: todo dado particionado por usuário, com Keycloak (OIDC) em todas as camadas e nenhum endpoint serviço-a-serviço exposto ao frontend",
      "Frontend web em Next.js assumindo o papel de BFF, agregando os 7 serviços via Server Components, com identidade visual e design system próprios",
      "63 ADRs registrando decisões de arquitetura com contexto e consequências",
      "Especificação spec-driven em todo endpoint, com testes obrigatórios em toda classe de serviço e domínio (cerca de 500 testes no total entre os serviços)",
      "Pipeline de CI com gate de segurança (OWASP Dependency-Check e Trivy), bloqueando CVEs HIGH/CRITICAL sem exceção documentada",
      "Documentação viva, com roadmap por fatia vertical, histórico cronológico de decisões e PRD separado da arquitetura",
    ],
    problemasResolvidos: [
      "CRUD completo de receitas e despesas, avulsas ou recorrentes (mensal, com ou sem prazo definido, como salário indefinido ou financiamento em 48x)",
      "Cartão de crédito com fatura e parcelamento automático, com o sistema decidindo em qual fatura cada parcela cai",
      "Upload de fatura em PDF com extração automática via LLM local, seguida de revisão e confirmação do usuário antes de virar compra no cartão",
      "Orçamento por categoria e cálculo de 'disponível pra gastar', cruzando saldo, fatura em aberto, despesas recorrentes e reserva",
      "Chat com IA que responde perguntas e executa ações (ex: 'adicione uma despesa recorrente de R$ 50'), sempre pedindo confirmação explícita antes de mexer em dinheiro real",
      "Dashboard com gráfico de gastos por categoria, comparando o mês atual com o anterior",
    ],
    tags: ["Microsserviços", "Java", "Quarkus", "IA"],
    repositorioUrl: "https://github.com/wep1980/wep-financas",
    notaFinal:
      "Projeto real, com arquitetura de 7 microsserviços documentada em 63 ADRs e cerca de 500 testes automatizados entre os serviços. As imagens acima mostram o ambiente de demonstração da interface web, com dados fictícios.",
    imagens: [
      { src: "/projetos/financas/01.jpg", alt: "Dashboard do Finanças, com disponível pra gastar, reserva, cotação do dólar e gastos por categoria" },
      { src: "/projetos/financas/02.jpg", alt: "Tela de Receitas/Despesas do Finanças, com lançamentos recorrentes e status de pagamento" },
      { src: "/projetos/financas/03.jpg", alt: "Tela de Cartões do Finanças, com limite, fechamento e vencimento de cada cartão" },
      { src: "/projetos/financas/04.jpg", alt: "Tela de Documentos do Finanças, com importação de fatura em PDF e status de confirmação" },
      { src: "/projetos/financas/05.jpg", alt: "Chat com IA do Finanças, respondendo perguntas sobre a situação financeira do usuário" },
    ],
  },
  {
    id: "waef",
    slug: "waef",
    titulo: "WAEF Web",
    resumo:
      "Console real em Angular para o WEP AI Engineering Framework, guiando a criação de projetos orientados por especificações.",
    descricao:
      "WAEF Web é uma interface de engenharia real que centraliza o uso do WEP AI Engineering Framework: permite configurar projetos, validar manifestos, visualizar a resolução tecnológica, analisar o plano de composição, acompanhar a geração da estrutura e consultar os resultados do Quality Gate.",
    categoria: "Frontend",
    categorias: ["Frontend", "IA"],
    tecnologias: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "RxJS",
    ],
    status: statusProjetoRealV3,
    destaquesTecnicos: [
      "Desenvolvido com Angular 22, TypeScript 6 e Tailwind CSS 4",
      "Arquitetura baseada em componentes standalone, dispensando NgModules",
      "Navegação com Angular Router e carregamento sob demanda das páginas",
      "Gerenciamento de estado local com Signals e valores derivados com computed()",
      "Uso do novo controle de fluxo do Angular: @if, @for e @switch",
      "Aplicação zoneless, reduzindo dependência de detecção global de mudanças",
      "Componentes reutilizáveis para métricas, status, tabelas, visualização de código e planos de composição",
      "Modelos TypeScript para manifestos, configurações, stacks, capacidades, provedores, especificações e Quality Gate",
      "Interface responsiva, otimizada para apresentações e screenshots em 1440×900 e 1920×1080",
      "Fluxo completo e navegável: criação do projeto, validação do manifesto, composição, geração e análise de qualidade",
      "Validação técnica concluída com lint, typecheck e build sem erros",
      "Bundle de produção otimizado, com aproximadamente 293 KB no carregamento inicial",
    ],
    problemasResolvidos: [
      "Simplificação da configuração de projetos por meio de um fluxo visual guiado",
      "Redução de erros com validação clara do manifesto antes da geração",
      "Visualização antecipada das dependências, propriedades e arquivos que serão produzidos",
      "Transparência na resolução de stacks, capacidades e provedores",
      "Centralização de especificações, ADRs e informações técnicas do framework",
      "Consolidação dos testes e critérios de qualidade em um único Quality Gate",
      "Maior rastreabilidade da origem de cada item do plano de composição",
      "Validação da UX/UI antes da integração definitiva com o WAEF Core",
    ],
    tags: ["Frontend", "Angular", "IA"],
    notaFinal:
      "Projeto real, com validação técnica concluída (lint, typecheck e build sem erros) e bundle de produção de aproximadamente 293 KB. As imagens acima mostram o fluxo completo do console: visão geral, construção de projeto, validação de manifesto, plano de composição e Quality Gate.",
    imagens: [
      { src: "/projetos/waef/01.jpg", alt: "Visão geral do WAEF, com saúde do framework, Quality Gate e stacks suportadas" },
      { src: "/projetos/waef/02.jpg", alt: "Validação de manifesto do WAEF, com configuração resolvida e status válido" },
      { src: "/projetos/waef/03.jpg", alt: "Construtor de projeto do WAEF, com stack, capacidades e pré-visualização do manifesto" },
      { src: "/projetos/waef/04.jpg", alt: "Plano de composição do WAEF, com dependências, propriedades e arquivos resolvidos" },
      { src: "/projetos/waef/05.jpg", alt: "Quality Gate do WAEF, com matriz de aceitação e verificações de governança" },
    ],
  },
];
