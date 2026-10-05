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
];
