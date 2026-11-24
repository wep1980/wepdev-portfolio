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
    id: "achei",
    slug: "achei",
    titulo: "Achei",
    resumo:
      "Plataforma em produção para gerar e gerir leads B2B: o usuário diz o segmento e a região, e o sistema devolve empresas com nota de prioridade e um funil para acompanhar cada conversa.",
    descricao:
      "O Achei ajuda pequenos negócios a encontrar clientes sem montar planilhas. O usuário informa o que procura (por exemplo, salões de beleza em um bairro) e o sistema lista empresas com o perfil, atribui uma nota de prioridade por regras explícitas e leva o lead para um funil de acompanhamento. Está em produção desde 18/09/2026, com autenticação, planos, limites de uso e monitoramento.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend", "IA"],
    tecnologias: ["Java 21", "Quarkus", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Keycloak", "Docker", "Kubernetes"],
    status: "Em produção",
    destaquesTecnicos: [
      "Monolito modular em Java 21 com Quarkus, com a decisão registrada em um ADR e fronteiras claras entre os módulos",
      "Frontend em React, Vite, TypeScript e Tailwind CSS, com telas de busca, base de leads, funil e conversas",
      "Autenticação e perfis de acesso com Keycloak, incluindo contas com vários usuários e limites por plano",
      "Qualificação dos leads por regras explícitas e auditáveis, sem depender de IA para decidir a nota",
      "PostgreSQL com migrações versionadas, aplicadas de forma controlada a cada entrega",
      "Serviço compartilhado interno para e-mail, consulta de empresas e tarefas de IA, consumido por vários sistemas",
      "Controles de cota e de custo: toda integração com franquia gratuita tem um validador que impede ultrapassar o limite",
      "Envio de mensagens preparado para a API oficial do WhatsApp, com limites e orçamento mensal configuráveis",
      "Implantação por GitOps (ArgoCD) em cluster Kubernetes próprio, com backup externo",
      "Observabilidade com Prometheus e alertas no celular para os pontos críticos",
    ],
    problemasResolvidos: [
      "Encontrar empresas de um segmento e de uma região sem montar planilhas à mão",
      "Separar quem tem chance real de resposta de quem não tem, com uma nota fácil de entender",
      "Acompanhar cada contato em um funil único, em vez de espalhar conversas em vários lugares",
      "Manter o custo sob controle, com cotas e limites por plano",
      "Evoluir o banco de dados em produção sem interromper o serviço",
    ],
    tags: ["Full Stack", "Java", "Quarkus", "React"],
    notaFinal:
      "Projeto real, em produção. As imagens mostram a página pública do produto; as telas internas contêm dados de usuários e não são exibidas.",
    imagens: [
      { src: "/projetos/achei/01.png", alt: "Início da página pública do Achei, com a busca de salões de beleza em um bairro devolvendo leads com nota quente e morno" },
      { src: "/projetos/achei/02.jpg", alt: "Página pública do Achei explicando o fluxo do segmento ao WhatsApp, em quatro passos" },
      { src: "/projetos/achei/03.png", alt: "Segmentos atendidos pelo Achei, como oficina, salão, clínica, restaurante e escritório de advocacia" },
      { src: "/projetos/achei/04.png", alt: "Diferenciais do Achei: preço público, Pix, busca, nota e funil no mesmo lugar e planos que crescem com a equipe" },
    ],
  },
  {
    id: "aprazar",
    slug: "aprazar",
    titulo: "Aprazar",
    resumo:
      "Sistema de prazos para advogados: captura as intimações no Diário de Justiça Eletrônico pela OAB, conta o prazo com o calendário do tribunal e envia para a agenda.",
    descricao:
      "O Aprazar reduz o risco de perder um prazo processual. Todo dia ele confere o Diário de Justiça Eletrônico para as OABs cadastradas, traz as intimações, calcula o prazo em dias úteis com os feriados do tribunal, mostra a conta passo a passo para o advogado conferir e espelha o resultado no Google Agenda ou no Outlook. Está em fase piloto com um escritório de advocacia.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend"],
    tecnologias: ["Java 21", "Quarkus", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Keycloak", "Docker"],
    status: "Em piloto",
    destaquesTecnicos: [
      "Backend em Java 21 com Quarkus e frontend em React com TypeScript, com suítes de testes automatizados nos dois",
      "Um banco de dados por escritório, validado em uma prova de conceito antes de adotar, para isolar os dados de cada cliente",
      "Captura diária das intimações pelos cadernos do Diário de Justiça Eletrônico, com histórico dos últimos 90 dias ao cadastrar uma OAB",
      "Calendário central de dias úteis por tribunal, com feriados e atos oficiais, e cobertura visível como completa ou parcial",
      "Prazo com memória de cálculo: o sistema mostra cada passo da conta e permite ajuste manual",
      "Triagem da intimação, que vira prazo apenas depois da confirmação do advogado",
      "Espelhamento dos prazos no Google Agenda ou no Outlook, em um calendário separado",
      "Equipe com convite, em que cada pessoa vê os próprios prazos",
      "Contrato da API descrito em OpenAPI e decisões de arquitetura registradas em ADRs",
      "Trabalho conduzido por especificações (SPECs), com cada fatia entregue e conferida no navegador",
    ],
    problemasResolvidos: [
      "Perder prazo por não ver a intimação a tempo",
      "Errar a contagem em dias úteis por causa de feriados e recessos do tribunal",
      "Conferir a conta: o advogado vê como o prazo foi calculado e pode corrigir",
      "Manter a agenda do advogado atualizada sem digitar o prazo duas vezes",
      "Separar com segurança os dados de escritórios diferentes",
    ],
    tags: ["Full Stack", "Java", "Quarkus", "React"],
    notaFinal:
      "Projeto real, em fase piloto. As imagens são a página de demonstração, com dados fictícios.",
    imagens: [
      { src: "/projetos/aprazar/01.jpg", alt: "Página de demonstração do Aprazar, com o caminho de uma intimação e uma prévia do aplicativo com dados fictícios" },
      { src: "/projetos/aprazar/02.png", alt: "Tela Novidades do Aprazar, com as intimações novas trazidas do Diário de Justiça Eletrônico, em dados fictícios" },
      { src: "/projetos/aprazar/03.png", alt: "Tela Agenda do Aprazar, com reunião, prazo de réplica em dias úteis e audiência, em dados fictícios" },
      { src: "/projetos/aprazar/04.png", alt: "Tela Processo do Aprazar, com a linha do tempo de andamentos de um processo, em dados fictícios" },
      { src: "/projetos/aprazar/05.png", alt: "Tela Minha agenda do Aprazar, com a sincronização dos prazos no Google Agenda e a conexão com o Outlook, em dados fictícios" },
    ],
  },
  {
    id: "ventarte",
    slug: "ventarte",
    titulo: "Ventarte",
    resumo:
      "Sistema de gestão para empresas de ar-condicionado e refrigeração: fila de pedidos, orçamento, agenda com vários técnicos e ordem de serviço em campo, no computador e no celular.",
    descricao:
      "O Ventarte organiza o dia a dia de uma pequena empresa de climatização: pedidos que entram, orçamentos, agendamento de ordens de serviço com vários técnicos, regiões atendidas, checklists e financeiro. Ao agendar, o sistema destaca os dias em que já há serviço na mesma região, para reduzir o deslocamento. Tem versão web e aplicativo Android. Está no ar, em validação com uma empresa real.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend", "Mobile"],
    tecnologias: ["Java", "Spring Boot", "React", "TypeScript", "Tailwind CSS", "React Native", "Expo", "PostgreSQL", "Keycloak", "Docker"],
    status: "No ar, em validação",
    destaquesTecnicos: [
      "Backend em Java com Spring Boot, multiempresa, com isolamento dos dados de cada empresa",
      "Web em React com TypeScript, Vite e Tailwind CSS, com telas de fila de pedidos, orçamentos, ordens de serviço, agenda e financeiro",
      "Aplicativo Android em React Native com Expo, para o técnico em campo, com sincronização",
      "Agenda por técnico em visões de dia, semana e mês, com sugestão de dias que reduzem o deslocamento",
      "Fila de pedidos com ordenação manual por arrastar ou pelos botões Subir e Descer",
      "Autenticação com Keycloak e perfis de acesso por papel na equipe",
      "Uso dos serviços internos da plataforma: e-mails transacionais e geração e guarda de PDFs dos orçamentos",
      "Testes ponta a ponta da web contra a pilha real, rodados em ambiente local antes de cada entrega",
      "Instalador Android assinado e organização do trabalho por especificações (SPECs) e decisões registradas",
    ],
    problemasResolvidos: [
      "Controlar pedidos, orçamentos e ordens de serviço em um só lugar, no lugar de papel e mensagens soltas",
      "Distribuir o trabalho entre vários técnicos sem sobrepor horários",
      "Reduzir o deslocamento agrupando serviços da mesma região no mesmo dia",
      "Dar ao técnico em campo uma ferramenta simples no celular",
      "Emitir o orçamento em PDF sem sair do sistema",
    ],
    tags: ["Full Stack", "Java", "Spring Boot", "React", "Mobile"],
    notaFinal:
      "Projeto real, no ar e em validação. As imagens mostram o ambiente com dados fictícios.",
    imagens: [
      { src: "/projetos/ventarte/01.png", alt: "Fila de pedidos do Ventarte, com filtros, ordenação manual e agenda da semana ao lado" },
      { src: "/projetos/ventarte/02.png", alt: "Agenda semanal do Ventarte, com a carga de ordens de serviço de cada técnico por região" },
      { src: "/projetos/ventarte/03.png", alt: "Tela de agendar ordem de serviço do Ventarte, destacando dias com serviço na mesma região" },
      { src: "/projetos/ventarte/04.jpg", alt: "Página inicial pública do Ventarte" },
    ],
  },
  {
    id: "pilatesdesk",
    slug: "pilatesdesk",
    titulo: "PilatesDesk",
    resumo:
      "Sistema para a operação de studios de Pilates: alunos, horários semanais com capacidade, agenda em visões de semana, dia e mês e chamada por aula.",
    descricao:
      "O PilatesDesk organiza a rotina de um studio: cadastro de alunos, grade de horários com duração e capacidade, inscrição e remarcação de alunos pela agenda e controle de presença por aula. A agenda tem visões de semana, dia e mês, e a tela de Hoje mostra o que exige atenção. Está em homologação local.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend"],
    tecnologias: ["Java 21", "Quarkus", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    status: "Em homologação",
    destaquesTecnicos: [
      "Backend em Java 21 com Quarkus e frontend em React com TypeScript, Vite e Tailwind CSS",
      "Grade de horários recorrente, com dia da semana, duração e capacidade, e vagas recalculadas a cada inscrição",
      "Agenda com visões de semana, dia e mês, com inscrição e remarcação no próprio contexto",
      "Entrada de chamada por aula e aula criada por data específica",
      "Sistema visual próprio, com tokens de design e navegação acessível",
      "Páginas de prévia interativa com dados fictícios, que não enviam nada à API",
      "Dados de teste sintéticos, coerentes e determinísticos, sem dados pessoais reais",
      "Roteiro de homologação com evidências e plano mestre de retomada",
    ],
    problemasResolvidos: [
      "Saber quantas vagas restam em cada horário sem contar à mão",
      "Remarcar um aluno sem desmontar a grade da semana",
      "Registrar presença por aula",
      "Ter uma visão do mês para planejar o studio",
    ],
    tags: ["Full Stack", "Java", "Quarkus", "React"],
    notaFinal:
      "Projeto real, em homologação local. As imagens são páginas de prévia, com dados fictícios.",
    imagens: [
      { src: "/projetos/pilatesdesk/01.png", alt: "Página pública do PilatesDesk, com a prévia do sistema" },
      { src: "/projetos/pilatesdesk/02.png", alt: "Agenda do PilatesDesk, com a semana de aulas, inscrições e vagas livres por horário" },
      { src: "/projetos/pilatesdesk/03.png", alt: "Horários semanais do PilatesDesk, com capacidade por horário e formulário de novo horário" },
    ],
  },
  {
    id: "site-wepone",
    slug: "site-wepone",
    titulo: "Site da WepOne",
    resumo:
      "Site institucional da WepOne, com catálogo de soluções, páginas por segmento, blog e formulário de contato com backend próprio.",
    descricao:
      "O site da WepOne apresenta a empresa, o catálogo de soluções para pequenos negócios, as páginas por segmento e o blog. Foi construído com atenção a desempenho e a busca: imagens otimizadas, redirecionamento entre as versões do endereço, dados estruturados dos produtos e sitemap. Está no ar e acompanhado pelas ferramentas de busca.",
    categoria: "Frontend",
    categorias: ["Frontend", "Backend"],
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    status: "No ar",
    destaquesTecnicos: [
      "Next.js com React e Tailwind CSS, publicado no Cloudflare Pages",
      "Backend próprio para o formulário de contato, testado de ponta a ponta",
      "Otimização de imagens e de desempenho, com auditoria de SEO e correções aplicadas",
      "Redirecionamento entre o endereço com e sem www",
      "Dados estruturados dos produtos e sitemap enviado às ferramentas de busca",
      "Identidade visual com tokens de marca documentados",
    ],
    problemasResolvidos: [
      "Apresentar um catálogo amplo de soluções de forma simples para quem não é da área técnica",
      "Aparecer nas buscas, com dados estruturados e sitemap",
      "Receber contatos de clientes pelo próprio site",
    ],
    tags: ["Frontend", "Next.js", "React", "SEO"],
    notaFinal:
      "Projeto real, no ar. As imagens mostram páginas do site publicado.",
    imagens: [
      { src: "/projetos/site-wepone/01.jpg", alt: "Página inicial do site da WepOne, com a chamada principal e uma demonstração visual do sistema" },
      { src: "/projetos/site-wepone/02.png", alt: "Seção do site da WepOne que organiza as soluções em atendimento e vendas, gestão do negócio e sistema sob medida" },
      { src: "/projetos/site-wepone/03.png", alt: "Seção do site da WepOne com as soluções por segmento, como salões, comércio e serviços em campo" },
      { src: "/projetos/site-wepone/04.png", alt: "Página de sistemas sob medida do site da WepOne, com o projeto organizado em quatro etapas" },
      { src: "/projetos/site-wepone/05.png", alt: "Página da solução de relacionamento pelo WhatsApp do site da WepOne" },
    ],
  },
];
