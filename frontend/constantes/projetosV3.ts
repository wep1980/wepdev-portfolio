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
  /** Legenda curta, exibida sobre a imagem. Sem ela, a galeria usa o rótulo padrão. */
  readonly legenda?: string;
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

// Os destaques de cada projeto seguem a ordem das imagens: primeiro o que as telas mostram,
// depois a parte técnica que não aparece nas imagens.
export const projetosV3: readonly ProjetoV3[] = [
  {
    id: "achei",
    slug: "achei",
    titulo: "Achei",
    resumo:
      "Plataforma em produção para gerar e gerir leads B2B: o usuário diz o segmento e a região, como salões de beleza em um bairro, e recebe empresas com nota de prioridade e um funil para acompanhar cada conversa.",
    descricao:
      "O Achei ajuda pequenos negócios a encontrar clientes sem montar planilhas. A página pública mostra o fluxo em quatro passos: o usuário diz o que procura; o sistema busca sozinho e devolve as empresas com o perfil; cada lead sai com uma nota (quente, morno ou frio); e a mensagem sai dali, pelo WhatsApp do próprio usuário. O produto atende 20 segmentos, com critério de qualificação próprio para cada um, e a página apresenta preço aberto, pagamento por Pix em destaque e planos com 1 a 5 usuários por conta. Está em produção desde 18/09/2026.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend", "IA"],
    tecnologias: ["Java 21", "Quarkus", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Keycloak", "Docker", "Kubernetes"],
    status: "Em produção",
    destaquesTecnicos: [
      "Busca por segmento e região: o usuário escreve, por exemplo, \"salão de beleza em Tijuca, RJ\" e recebe a lista de empresas com endereço e telefone",
      "Nota quente, morno ou frio em cada lead, calculada por regras explícitas e auditáveis, sem depender de IA para decidir",
      "Do lead ao WhatsApp em um clique, com mensagem pronta, e funil para acompanhar cada conversa",
      "Critério de qualificação próprio para cada um dos 20 segmentos atendidos, de oficina e salão a clínica e escritório de advocacia",
      "Planos com 1 a 5 usuários por conta, limites de uso por plano e pacotes extras de leads",
      "Preço público e pagamento por Pix apresentados em destaque, sem o \"fale com vendas\"",
      "Monolito modular em Java 21 com Quarkus, com a decisão registrada em um ADR e fronteiras claras entre os módulos",
      "Frontend em React, Vite, TypeScript e Tailwind CSS, com telas de busca, base de leads, funil e conversas",
      "Autenticação e perfis de acesso com Keycloak, incluindo contas com vários usuários",
      "PostgreSQL com migrações versionadas, aplicadas de forma controlada a cada entrega",
      "Serviço compartilhado interno para e-mail, consulta de empresas e tarefas de IA, consumido por vários sistemas",
      "Controles de cota e de custo: toda integração com franquia gratuita tem um validador que impede ultrapassar o limite",
      "Envio de mensagens preparado para a API oficial do WhatsApp, com limites e orçamento mensal configuráveis",
      "Implantação por GitOps (ArgoCD) em cluster Kubernetes próprio, com backup externo, e observabilidade com Prometheus e alertas no celular",
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
      {
        src: "/projetos/achei/01.png",
        legenda: "Busca por segmento e região",
        alt: "Início da página pública do Achei, com a busca de salões de beleza em um bairro devolvendo leads com nota quente e morno",
      },
      {
        src: "/projetos/achei/02.jpg",
        legenda: "Do segmento ao WhatsApp",
        alt: "Página pública do Achei explicando o fluxo do segmento ao WhatsApp, em quatro passos",
      },
      {
        src: "/projetos/achei/03.png",
        legenda: "Segmentos atendidos",
        alt: "Segmentos atendidos pelo Achei, como oficina, salão, clínica, restaurante e escritório de advocacia",
      },
      {
        src: "/projetos/achei/04.png",
        legenda: "Preço público, Pix e equipe",
        alt: "Diferenciais do Achei: preço público, Pix, busca, nota e funil no mesmo lugar e planos que crescem com a equipe",
      },
    ],
  },
  {
    id: "aprazar",
    slug: "aprazar",
    titulo: "Aprazar",
    resumo:
      "Sistema de prazos para advogados: captura as intimações no Diário de Justiça Eletrônico pela OAB, conta o prazo com o calendário do tribunal e envia para a agenda.",
    descricao:
      "O Aprazar reduz o risco de perder um prazo processual. A página de demonstração percorre o caminho de uma intimação em quatro passos: ela chega sozinha, porque o Diário de Justiça Eletrônico é conferido de madrugada para as OABs cadastradas; o prazo vem com a conta, em dias úteis, com os feriados do tribunal e cada passo à mostra; o advogado confirma, pois nenhum prazo é criado sem ele; e o prazo aparece na agenda que ele já usa. As telas mostram o Início, as Novidades, a Agenda, o Processo com a linha do tempo e a Minha agenda, com a sincronização. Está em fase piloto com um escritório de advocacia.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend"],
    tecnologias: ["Java 21", "Quarkus", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Keycloak", "Docker"],
    status: "Em piloto",
    destaquesTecnicos: [
      "Início com o que precisa de atenção, as intimações novas e o painel \"o que verificamos hoje\", que mostra a conferência de cada fonte (DJEN do TJRJ e do TRT1) e deixa uma falha à vista, em vermelho",
      "Novidades: captura diária das intimações pelos cadernos do Diário de Justiça Eletrônico, com o histórico dos últimos 90 dias ao cadastrar uma OAB",
      "Triagem da intimação: ela vira prazo apenas depois da confirmação do advogado, que pode ajustar a data à mão",
      "Agenda de prazos, audiências e reuniões, com os vencimentos em destaque e a contagem de dias úteis que faltam",
      "Prazo com memória de cálculo, que mostra cada passo da conta, sobre um calendário central de dias úteis por tribunal (TJRJ, TRT1 e TRF2), com a cobertura visível como completa ou parcial",
      "Processo: linha do tempo com os andamentos, lançados à mão ou, em teste, vindos dos avisos que o tribunal manda por e-mail; nenhum andamento vira prazo sem o advogado",
      "Minha agenda: espelhamento dos prazos no Google Agenda, em um calendário separado \"Aprazar — Prazos\", com a escolha entre todos os prazos ou só os do próprio usuário, e conexão com o Outlook",
      "Equipe com convite, em que cada pessoa vê os próprios prazos",
      "Um banco de dados por escritório, validado em uma prova de conceito antes de adotar, para isolar os dados de cada cliente",
      "Backend em Java 21 com Quarkus e frontend em React com TypeScript, com suítes de testes automatizados nos dois",
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
      "Projeto real, em fase piloto. As imagens são a página de demonstração e as telas do aplicativo de exemplo, com dados fictícios. Os avisos de andamento por e-mail do tribunal ainda estão em teste.",
    imagens: [
      {
        src: "/projetos/aprazar/01.jpg",
        legenda: "Início e caminho da intimação",
        alt: "Página de demonstração do Aprazar, com o caminho de uma intimação e a tela Início do aplicativo, com dados fictícios",
      },
      {
        src: "/projetos/aprazar/02.png",
        legenda: "Novidades: intimações do Diário",
        alt: "Tela Novidades do Aprazar, com as intimações novas trazidas do Diário de Justiça Eletrônico, em dados fictícios",
      },
      {
        src: "/projetos/aprazar/03.png",
        legenda: "Agenda: reunião, prazo e audiência",
        alt: "Tela Agenda do Aprazar, com reunião, prazo de réplica em dias úteis e audiência, em dados fictícios",
      },
      {
        src: "/projetos/aprazar/04.png",
        legenda: "Processo: linha do tempo",
        alt: "Tela Processo do Aprazar, com a linha do tempo de andamentos de um processo, em dados fictícios",
      },
      {
        src: "/projetos/aprazar/05.png",
        legenda: "Minha agenda: Google e Outlook",
        alt: "Tela Minha agenda do Aprazar, com a sincronização dos prazos no Google Agenda e a conexão com o Outlook, em dados fictícios",
      },
    ],
  },
  {
    id: "ventarte",
    slug: "ventarte",
    titulo: "Ventarte",
    resumo:
      "Sistema de gestão para empresas de ar-condicionado e refrigeração: fila de pedidos, orçamento, agenda com vários técnicos e ordem de serviço em campo, no computador e no celular.",
    descricao:
      "O Ventarte tira a empresa de climatização do caderno e do WhatsApp. O pedido entra na fila, que o dono ordena à mão e filtra por região, etapa, urgência e tipo de serviço; dali sai o orçamento e, aprovado, a ordem de serviço. A agenda mostra cada técnico por dia, com a região atendida, em visões de dia, semana e mês, e permite confirmar os serviços do dia seguinte. Ao agendar uma ordem de serviço, o sistema marca os dias em que já há serviço na mesma região, para reduzir o deslocamento. Abre no navegador do computador e do celular, sem instalar nada, e tem também aplicativo Android. Está no ar, em validação com uma empresa real.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend", "Mobile"],
    tecnologias: ["Java", "Spring Boot", "React", "TypeScript", "Tailwind CSS", "React Native", "Expo", "PostgreSQL", "Keycloak", "Docker"],
    status: "No ar, em validação",
    destaquesTecnicos: [
      "Fila de pedidos com filtros por região, etapa, urgência e tipo de serviço, e ordenação manual por arrastar ou pelos botões Subir e Descer",
      "Orçamento a partir do pedido, com os PDFs gerados e guardados pelo serviço interno de arquivos",
      "Agenda por técnico em visões de dia, semana e mês, com filtros por técnico e região, visão em lista e confirmação dos serviços de amanhã",
      "Agendar ordem de serviço com a duração padrão de cada tipo de serviço e os dias que já têm serviço na mesma região marcados com estrela",
      "Módulos de clientes, recall, financeiro e consultas, e configurações de empresa, catálogo, checklists, regiões, horários e durações, equipe e exportação de dados",
      "Página pública que apresenta o produto para o dono e para o técnico, com cadastro próprio de empresa",
      "Backend em Java com Spring Boot, multiempresa, com isolamento dos dados de cada empresa",
      "Web em React com TypeScript, Vite e Tailwind CSS",
      "Aplicativo Android em React Native com Expo, para o técnico em campo, com sincronização, e instalador assinado",
      "Autenticação com Keycloak e perfis de acesso por papel na equipe",
      "E-mails transacionais pelo serviço interno da plataforma",
      "Testes ponta a ponta da web contra a pilha real, rodados em ambiente local antes de cada entrega",
    ],
    problemasResolvidos: [
      "Controlar pedidos, orçamentos e ordens de serviço em um só lugar, no lugar de caderno e mensagens soltas",
      "Distribuir o trabalho entre vários técnicos sem sobrepor horários",
      "Reduzir o deslocamento agrupando serviços da mesma região no mesmo dia",
      "Dar ao técnico em campo uma ferramenta simples no celular",
      "Emitir o orçamento em PDF sem sair do sistema",
    ],
    tags: ["Full Stack", "Java", "Spring Boot", "React", "Mobile"],
    notaFinal:
      "Projeto real, no ar e em validação. As telas internas mostram o ambiente com dados fictícios; a quarta imagem é a página pública do produto.",
    imagens: [
      {
        src: "/projetos/ventarte/01.png",
        legenda: "Fila de pedidos",
        alt: "Fila de pedidos do Ventarte, com filtros, ordenação manual e a agenda da semana ao lado",
      },
      {
        src: "/projetos/ventarte/02.png",
        legenda: "Agenda por técnico e região",
        alt: "Agenda semanal do Ventarte, com a carga de ordens de serviço de cada técnico por região",
      },
      {
        src: "/projetos/ventarte/03.png",
        legenda: "Agendar ordem de serviço",
        alt: "Tela de agendar ordem de serviço do Ventarte, destacando com estrela os dias com serviço na mesma região",
      },
      {
        src: "/projetos/ventarte/04.jpg",
        legenda: "Página pública do produto",
        alt: "Página inicial pública do Ventarte, com a chamada para parar de controlar a empresa pelo caderno e pelo WhatsApp",
      },
    ],
  },
  {
    id: "pilatesdesk",
    slug: "pilatesdesk",
    titulo: "PilatesDesk",
    resumo:
      "Sistema para a operação de studios de Pilates: alunos, horários semanais com capacidade, agenda em visões de semana, dia e mês e chamada por aula.",
    descricao:
      "O PilatesDesk organiza a rotina de um studio. A página pública apresenta uma prévia do produto, com dados fictícios, e deixa claro que a contratação ainda não está disponível. Na Agenda, a semana de aulas mostra as inscrições e as vagas livres de cada horário, com visões de semana, dia e mês e o botão Agendar aluno. Em Horários semanais, o studio define a grade recorrente, com dia da semana, hora de início, duração e capacidade, e vê o total de horários ativos e a capacidade semanal. Está em homologação local.",
    categoria: "Full Stack",
    categorias: ["Backend", "Frontend"],
    tecnologias: ["Java 21", "Quarkus", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    status: "Em homologação",
    destaquesTecnicos: [
      "Página pública com a prévia do produto, a lista do que o sistema já faz e a indicação de que a contratação ainda não está disponível",
      "Agenda com visões de semana, dia e mês, com inscrições e vagas livres por horário e inscrição ou remarcação de aluno no próprio contexto",
      "Prévia interativa com dados fictícios, que não envia nada à API",
      "Grade de horários recorrente, com dia da semana, hora de início, duração e capacidade, e vagas recalculadas a cada inscrição",
      "Resumo de horários ativos e de capacidade semanal, com os horários separados por dia e ações de inscrever aluno, editar e inativar",
      "Entrada de chamada por aula e aula criada por data específica",
      "Backend em Java 21 com Quarkus e frontend em React com TypeScript, Vite e Tailwind CSS",
      "Sistema visual próprio, com tokens de design e navegação acessível",
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
      "Projeto real, em homologação local. As imagens são páginas de prévia, com dados fictícios; a chamada por aula não aparece nelas.",
    imagens: [
      {
        src: "/projetos/pilatesdesk/01.png",
        legenda: "Página pública e prévia",
        alt: "Página pública do PilatesDesk, com a prévia do sistema e o aviso de que a contratação ainda não está disponível",
      },
      {
        src: "/projetos/pilatesdesk/02.png",
        legenda: "Agenda: vagas por horário",
        alt: "Agenda do PilatesDesk, com a semana de aulas, inscrições e vagas livres por horário",
      },
      {
        src: "/projetos/pilatesdesk/03.png",
        legenda: "Horários semanais e capacidade",
        alt: "Horários semanais do PilatesDesk, com capacidade por horário e formulário de novo horário",
      },
    ],
  },
  {
    id: "site-wepone",
    slug: "site-wepone",
    titulo: "Site da WepOne",
    resumo:
      "Site institucional da WepOne, com catálogo de soluções por área e por segmento, página de sistemas sob medida, blog e formulário de contato com backend próprio.",
    descricao:
      "O site da WepOne apresenta a empresa e o catálogo de soluções para pequenos negócios. A página inicial reúne as soluções em três áreas (atendimento e vendas, gestão do negócio e sistema sob medida), cada uma com uma demonstração visual; as soluções também aparecem por segmento, como salões e barbearias, comércio e serviços em campo. Há páginas de produto, como a de atendimento pelo WhatsApp, e uma página de sistemas sob medida que mostra o projeto em quatro etapas: entender, planejar, desenvolver e acompanhar. Foi construído com atenção a desempenho e a busca, com um aviso de cookies que deixa o visitante escolher. Está no ar e acompanhado pelas ferramentas de busca.",
    categoria: "Frontend",
    categorias: ["Frontend", "Backend"],
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    status: "No ar",
    destaquesTecnicos: [
      "Página inicial com a chamada principal, o menu de produtos e segmentos e o botão para falar pelo WhatsApp",
      "Soluções em abas (atendimento e vendas, gestão do negócio, sistema sob medida), cada uma com sua demonstração visual",
      "Soluções por segmento, como salões e barbearias, comércio e serviços em campo, cada uma levando a uma página dedicada",
      "Página de sistemas sob medida que mostra o projeto em quatro etapas visíveis para o cliente",
      "Páginas de produto, como a solução de relacionamento pelo WhatsApp, e um blog de conteúdo",
      "Aviso de cookies que usa só o necessário por padrão e deixa o visitante personalizar, e assistente virtual no canto da página",
      "Next.js com React e Tailwind CSS, publicado no Cloudflare Pages",
      "Backend próprio para o formulário de contato, testado de ponta a ponta",
      "Otimização de imagens e de desempenho, com auditoria de SEO e correções aplicadas",
      "Redirecionamento entre o endereço com e sem www, dados estruturados dos produtos e sitemap enviado às ferramentas de busca",
      "Identidade visual com tokens de marca documentados",
    ],
    problemasResolvidos: [
      "Apresentar um catálogo amplo de soluções de forma simples para quem não é da área técnica",
      "Aparecer nas buscas, com dados estruturados e sitemap",
      "Receber contatos de clientes pelo próprio site",
    ],
    tags: ["Frontend", "Next.js", "React", "SEO"],
    notaFinal:
      "Projeto real, no ar. As imagens mostram páginas do site publicado, com o aviso de cookies já respondido na captura.",
    imagens: [
      {
        src: "/projetos/site-wepone/01.jpg",
        legenda: "Página inicial",
        alt: "Página inicial do site da WepOne, com a chamada principal e uma demonstração visual do sistema",
      },
      {
        src: "/projetos/site-wepone/02.png",
        legenda: "Soluções por área",
        alt: "Seção do site da WepOne que organiza as soluções em atendimento e vendas, gestão do negócio e sistema sob medida",
      },
      {
        src: "/projetos/site-wepone/03.png",
        legenda: "Soluções por segmento",
        alt: "Seção do site da WepOne com as soluções por segmento, como salões, comércio e serviços em campo",
      },
      {
        src: "/projetos/site-wepone/04.png",
        legenda: "Sistema sob medida, por etapas",
        alt: "Página de sistemas sob medida do site da WepOne, com o projeto organizado em quatro etapas",
      },
      {
        src: "/projetos/site-wepone/05.png",
        legenda: "Solução de WhatsApp",
        alt: "Página da solução de relacionamento pelo WhatsApp do site da WepOne",
      },
    ],
  },
];
