# Wireframe — Stack Tecnológica WEPDEV

## 1. Objetivo

Este documento define a experiência de uso da seção Stack Tecnológica da Home V2 do WEPDEV Portfolio.

A seção deve organizar o repertório técnico de Waldir Escouto Pereira de forma rápida, honesta e compreensível para recrutadores, lideranças técnicas, arquitetos, desenvolvedores e visitantes que chegam pelo currículo, LinkedIn ou GitHub.

O objetivo não é criar um inventário visual de ferramentas. A seção deve explicar como o repertório se organiza em torno de Engenharia de Software, backend Java, arquitetura, integrações, qualidade, cloud e Inteligência Artificial aplicada.

**A seção deve parecer documentação técnica de engenharia, e não um dashboard.**

## 2. Problema Atual

Uma lista extensa de tecnologias sem contexto pode parecer uma coleção de palavras-chave. Também pode sugerir níveis de domínio que não foram medidos, misturar tecnologias utilizadas e planejadas e obrigar o visitante a interpretar muitos elementos pequenos.

O wireframe resolve os seguintes problemas:

- falta de hierarquia entre áreas técnicas;
- repetição de tecnologias em diferentes regiões da Home;
- excesso de badges e elementos visualmente equivalentes;
- ausência de relação entre tecnologia e finalidade;
- confusão entre stack do produto, experiência profissional e estudos futuros;
- dificuldade de leitura para quem não conhece toda a stack;
- aparência de dashboard ou painel de métricas;
- excesso de informação acima da dobra;
- dependência de cor ou decoração para comunicar significado.

## 3. Princípio Central

A seção existe para comunicar competências de engenharia e capacidade técnica, e não apenas listar tecnologias.

Cada categoria deve responder:

1. Qual responsabilidade técnica ela representa?
2. Quais tecnologias ou práticas fazem parte dela?
3. Onde essa competência pode ser contextualizada no portfólio?

Tecnologias são meios para construir, testar, entregar e evoluir software. A marca WEPDEV não deve ser reduzida a Java, Spring, Docker, Kubernetes ou IA isoladamente.

## 4. Fluxo de Leitura

A seção deve seguir o fluxo abaixo:

```text
Orientação de engenharia
          ↓
Categorias de responsabilidade
          ↓
Finalidade de cada categoria
          ↓
Tecnologias e práticas reais
          ↓
Projetos e experiências relacionados
```

### 4.1 Entrada

O visitante chega à seção depois de visualizar os Projetos em destaque. Portanto, já conhece o posicionamento profissional e viu pelo menos uma evidência concreta de trabalho.

### 4.2 Compreensão

O título e a introdução devem explicar que a stack é orientada a backend enterprise, arquitetura e IA aplicada.

### 4.3 Exploração

As categorias devem permitir uma leitura em varredura. O visitante pode identificar primeiro Java, arquitetura, dados, cloud, qualidade ou IA e aprofundar somente o grupo relevante.

### 4.4 Continuidade

Ao final da seção, a página deve conduzir naturalmente para Sobre e Experiência. Não é necessário criar um CTA novo nem instrumentar itens informativos.

## 5. Posição na Home V2

A seção deve permanecer nesta posição:

```text
Navbar
Hero
Projetos em destaque
Stack Tecnológica ← esta seção
Sobre
Experiência
Como gero valor
Princípios de engenharia
Contato
Rodapé
```

O posicionamento é intencional: primeiro a identidade profissional, depois evidências de execução e, em seguida, o repertório usado para construir e evoluir essas evidências.

## 6. Wireframe Desktop — 1440px

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                        1440px │
│  TECNOLOGIAS E FERRAMENTAS                                                                    │
│                                                                                              │
│  Stack orientada a backend enterprise, arquitetura e IA aplicada.                            │
│  Agrupamentos que explicam responsabilidades técnicas e ferramentas relacionadas.             │
│                                                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐  ┌──────────────────────┐ │
│  │ JAVA E FRAMEWORKS            │  │ ARQUITETURA E INTEGRAÇÕES   │  │ MENSAGERIA E DADOS   │ │
│  │ Base para aplicações         │  │ Contratos e serviços        │  │ Processamento        │ │
│  │ backend.                     │  │ distribuídos.               │  │ assíncrono e dados.  │ │
│  │                              │  │                              │  │                      │ │
│  │ Java · Java 21               │  │ APIs REST · Microsserviços  │  │ Apache Kafka         │ │
│  │ Spring Boot · Quarkus       │  │ OpenAPI · Arq. Hexagonal    │  │ RabbitMQ             │ │
│  │ Jakarta EE                   │  │                              │  │ PostgreSQL · MongoDB │ │
│  │                              │  │                              │  │ Redis                │ │
│  └──────────────────────────────┘  └──────────────────────────────┘  └──────────────────────┘ │
│                                                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐  ┌──────────────────────┐ │
│  │ CONTAINERS E CLOUD           │  │ QUALIDADE E DEVOPS            │  │ IA APLICADA          │ │
│  │ Entrega e execução em        │  │ Confiabilidade e evolução     │  │ IA como apoio        │ │
│  │ ambientes modernos.          │  │ segura.                       │  │ técnico.             │ │
│  │                              │  │                              │  │                      │ │
│  │ Docker · Kubernetes          │  │ JUnit · Mockito               │  │ OpenAI · Ollama      │ │
│  │ OpenShift · AWS              │  │ Testcontainers · SonarQube   │  │ Spring AI · RAG      │ │
│  │ Azure · Helm                 │  │ JaCoCo · CI/CD                │  │                      │ │
│  └──────────────────────────────┘  └──────────────────────────────┘  └──────────────────────┘ │
│                                                                                              │
│  A stack é apresentada por responsabilidade. Projetos e experiências dão o contexto.         │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.1 Composição desktop

- label pequena em caixa alta, sem moldura;
- título de seção com maior peso tipográfico;
- introdução limitada a uma largura confortável;
- seis categorias distribuídas em duas linhas de três colunas quando houver espaço;
- cada categoria com título, descrição e lista textual curta;
- divisores ou superfícies discretas, nunca uma coleção de painéis fechados;
- espaço vertical suficiente entre a introdução e os grupos;
- nenhuma barra, indicador ou escala de conhecimento;
- itens técnicos sem aparência de botão.

### 6.2 Prioridade visual desktop

1. título e orientação da stack;
2. títulos das categorias;
3. descrições de finalidade;
4. itens tecnológicos;
5. relação implícita com Projetos e Experiência.

## 7. Wireframe Tablet — 768px

```text
┌──────────────────────────────────────────────────────────────┐
│                                                          768px│
│  TECNOLOGIAS E FERRAMENTAS                                   │
│                                                              │
│  Stack orientada a backend enterprise, arquitetura e IA      │
│  aplicada.                                                  │
│                                                              │
│  ┌─────────────────────────────┐  ┌────────────────────────┐ │
│  │ JAVA E FRAMEWORKS           │  │ ARQUITETURA E          │ │
│  │ Base para aplicações        │  │ INTEGRAÇÕES            │ │
│  │ backend.                    │  │ Contratos e serviços.  │ │
│  │ Java · Java 21              │  │ APIs REST               │ │
│  │ Spring Boot · Quarkus      │  │ Microsserviços          │ │
│  │ Jakarta EE                  │  │ OpenAPI · Hexagonal     │ │
│  └─────────────────────────────┘  └────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────┐  ┌────────────────────────┐ │
│  │ MENSAGERIA E DADOS          │  │ CONTAINERS E CLOUD      │ │
│  │ Kafka · RabbitMQ             │  │ Docker · Kubernetes     │ │
│  │ PostgreSQL · MongoDB         │  │ OpenShift · AWS · Azure │ │
│  │ Redis                        │  │ Helm                    │ │
│  └─────────────────────────────┘  └────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────┐  ┌────────────────────────┐ │
│  │ QUALIDADE E DEVOPS           │  │ IA APLICADA             │ │
│  │ JUnit · Mockito               │  │ OpenAI · Ollama         │ │
│  │ Testcontainers · SonarQube   │  │ Spring AI · RAG         │ │
│  │ JaCoCo · CI/CD               │  │                         │ │
│  └─────────────────────────────┘  └────────────────────────┘ │
│                                                              │
│  Tecnologias são meios para construir e evoluir software.   │
└──────────────────────────────────────────────────────────────┘
```

### 7.1 Composição tablet

- duas colunas como padrão, desde que descrições e listas permaneçam legíveis;
- nenhum item deve ser reduzido a uma única letra ou truncado;
- descrições podem ocupar duas ou três linhas;
- listas podem quebrar em linhas naturais;
- espaçamento entre grupos permanece visível;
- a seção não deve assumir três colunas estreitas.

## 8. Wireframe Mobile — 390px

```text
┌──────────────────────────────────────┐
│                                  390px│
│  TECNOLOGIAS E FERRAMENTAS            │
│                                      │
│  Stack orientada a backend            │
│  enterprise, arquitetura e IA        │
│  aplicada.                            │
│                                      │
│  JAVA E FRAMEWORKS                    │
│  Base para aplicações backend.       │
│                                      │
│  Java · Java 21                       │
│  Spring Boot · Quarkus               │
│  Jakarta EE                           │
│                                      │
│  ─────────────────────────────────── │
│                                      │
│  ARQUITETURA E INTEGRAÇÕES           │
│  Contratos e serviços distribuídos.  │
│                                      │
│  APIs REST · Microsserviços           │
│  OpenAPI · Arquitetura Hexagonal     │
│                                      │
│  ─────────────────────────────────── │
│                                      │
│  MENSAGERIA E DADOS                   │
│  Processamento assíncrono e dados.   │
│                                      │
│  Apache Kafka · RabbitMQ              │
│  PostgreSQL · MongoDB · Redis         │
│                                      │
│  ─────────────────────────────────── │
│                                      │
│  CONTAINERS E CLOUD                   │
│  Docker · Kubernetes · OpenShift      │
│  AWS · Azure · Helm                   │
│                                      │
│  ─────────────────────────────────── │
│                                      │
│  QUALIDADE E DEVOPS                   │
│  JUnit · Mockito · Testcontainers     │
│  SonarQube · JaCoCo · CI/CD           │
│                                      │
│  ─────────────────────────────────── │
│                                      │
│  IA APLICADA                          │
│  OpenAI · Ollama · Spring AI · RAG    │
│                                      │
│  A stack é organizada por             │
│  responsabilidade técnica.           │
└──────────────────────────────────────┘
```

### 8.1 Composição mobile

- uma única coluna;
- introdução antes de qualquer categoria;
- cada grupo como bloco editorial vertical;
- divisor horizontal discreto entre grupos;
- título e descrição antes da lista;
- tecnologias com quebra natural;
- nenhuma largura fixa para itens;
- sem textos minúsculos;
- sem grids de badges que criem ruído;
- o final da seção deve conduzir visualmente para Sobre.

## 9. Arquitetura da Informação

### 9.1 Estrutura da seção

```text
Seção Stack Tecnológica
├── Label: Tecnologias e ferramentas
├── Título orientado a engenharia
├── Introdução curta
├── Grupo: Java e frameworks
│   ├── Finalidade
│   └── Itens reais
├── Grupo: Arquitetura e integrações
│   ├── Finalidade
│   └── Itens reais
├── Grupo: Mensageria e dados
│   ├── Finalidade
│   └── Itens reais
├── Grupo: Containers e cloud
│   ├── Finalidade
│   └── Itens reais
├── Grupo: Qualidade e DevOps
│   ├── Finalidade
│   └── Itens reais
└── Grupo: IA aplicada
    ├── Finalidade
    └── Itens reais ou contextualizados
```

### 9.2 Unidade editorial

A unidade principal é o grupo de responsabilidade. A tecnologia individual é uma evidência secundária dentro desse grupo.

### 9.3 Fonte de verdade

Os grupos e itens devem ser derivados de `frontend/constantes/tecnologias.ts` durante a implementação. O wireframe não autoriza a criação de uma segunda fonte de dados nem a duplicação manual de tecnologias em componentes.

### 9.4 Contexto futuro

Quando uma tecnologia estiver relacionada a projeto planejado ou estudo futuro, a comunicação deve usar termos como:

- planejado;
- previsto;
- em estudo;
- aprofundamento futuro.

A informação não deve ser escondida apenas por cor ou por um símbolo sem legenda.

## 10. Categorias e Conteúdo

### 10.1 Java e frameworks

Finalidade: base principal para construção e evolução de aplicações backend.

Conteúdo permitido:

- Java;
- Java 21;
- Spring Boot;
- Quarkus;
- Jakarta EE.

### 10.2 Arquitetura e integrações

Finalidade: contratos, serviços distribuídos e comunicação entre sistemas corporativos.

Conteúdo permitido:

- APIs REST;
- Microsserviços;
- OpenAPI;
- Arquitetura Hexagonal.

### 10.3 Mensageria e dados

Finalidade: processamento assíncrono, persistência e integração com bases relacionais e NoSQL.

Conteúdo permitido:

- Apache Kafka;
- RabbitMQ;
- PostgreSQL;
- MongoDB;
- Redis.

### 10.4 Containers e cloud

Finalidade: empacotamento, entrega e execução de aplicações em ambientes modernos.

Conteúdo permitido:

- Docker;
- Kubernetes;
- OpenShift;
- AWS;
- Azure;
- Helm.

### 10.5 Qualidade e DevOps

Finalidade: reduzir regressões, aumentar confiabilidade e apoiar evolução segura.

Conteúdo permitido:

- JUnit;
- Mockito;
- Testcontainers;
- SonarQube;
- JaCoCo;
- CI/CD.

### 10.6 IA aplicada

Finalidade: usar Inteligência Artificial como apoio técnico para pesquisa, documentação e desenvolvimento.

Conteúdo permitido:

- OpenAI;
- Ollama;
- Spring AI;
- RAG.

### 10.7 Stack do produto WEPDEV

Next.js, React, TypeScript, Tailwind CSS, App Router, Server Components, Docker, Cloudflare Tunnel e Umami podem aparecer quando o objetivo for explicar o próprio produto. Essa informação deve permanecer contextualizada e não dominar a apresentação da stack profissional.

## 11. Conteúdo Permitido

- títulos de categorias;
- descrições de responsabilidade técnica;
- nomes reais das tecnologias;
- agrupamento por problema ou finalidade;
- indicação textual de tecnologia planejada ou em estudo;
- associação a Projetos e Experiência por navegação existente;
- uma introdução curta sobre backend, arquitetura, cloud e IA;
- listas curtas e legíveis;
- divisores editoriais;
- texto técnico em português claro;
- termos oficiais como Java, Spring Boot, Apache Kafka e Kubernetes.

## 12. Conteúdo Proibido

Não incluir:

- barras de progresso;
- estrelas;
- porcentagens;
- níveis de conhecimento;
- ranking de tecnologias;
- badges excessivos;
- dashboards;
- excesso de cards;
- métricas inventadas;
- anos de experiência não confirmados;
- logos remotos sem finalidade real;
- ícones que substituam o nome do item;
- links sem destino real;
- filtros ou busca sem necessidade comprovada;
- animações contínuas;
- cores usadas para simular proficiência;
- tecnologias não presentes na fonte de dados sem refinamento;
- clientes, projetos privados ou dados corporativos;
- conteúdo que apresente planejamento como entrega concluída.

## 13. Ritmo Visual

O ritmo deve alternar três níveis de informação:

1. orientação da seção;
2. responsabilidade de cada categoria;
3. lista técnica controlada.

### 13.1 Respiro

- usar área livre entre o cabeçalho e os grupos;
- manter espaço evidente entre categorias;
- evitar que todos os grupos tenham o mesmo peso visual absoluto;
- permitir que o texto de finalidade tenha espaço para respirar;
- não preencher todos os vazios com badges, ícones ou linhas decorativas.

### 13.2 Densidade

- desktop: três grupos por linha quando houver largura suficiente;
- tablet: duas colunas;
- mobile: uma coluna;
- itens devem quebrar naturalmente;
- descrições devem permanecer curtas;
- a quantidade não deve ser reduzida a ponto de omitir contexto essencial.

### 13.3 Hierarquia

Prioridade tipográfica:

1. título da seção;
2. título do grupo;
3. descrição de finalidade;
4. nomes de tecnologias;
5. contexto complementar.

O laranja deve destacar label, foco ou pequenos marcadores. Não deve transformar todas as tecnologias em elementos ativos.

## 14. Espaçamentos

Os espaçamentos devem seguir os tokens definidos no Design Tokens WEPDEV e a escala de múltiplos de 4px.

| Relação | Direção recomendada |
| --- | --- |
| Label → título | curta, suficiente para separar níveis |
| Título → introdução | moderada, com leitura imediata |
| Introdução → categorias | ampla, marcando início do conteúdo |
| Título do grupo → descrição | curta |
| Descrição → lista | curta a moderada |
| Item → item | compacta, sem aparência de grade densa |
| Categoria → categoria | ampla, com divisores ou espaço de seção |
| Seção → próxima seção | respiro suficiente para fechar a leitura |

### 14.1 Desktop

Priorizar `space.8`, `space.12`, `space.16` e `space.20` para separar níveis principais.

### 14.2 Tablet

Reduzir gaps entre colunas sem reduzir a legibilidade das descrições.

### 14.3 Mobile

Usar uma coluna e divisores discretos. A redução deve ocorrer no espaço externo, não no tamanho do texto a ponto de prejudicar a leitura.

## 15. Princípios de UX

- contexto antes da enumeração;
- responsabilidade antes da ferramenta;
- escaneabilidade antes da decoração;
- evidência antes da promessa;
- transparência entre realizado e planejado;
- agrupamento semântico;
- repetição somente quando criar contexto;
- itens informativos não devem parecer controles;
- a seção deve funcionar sem interação;
- nenhum dado essencial depende de hover;
- nenhum significado depende exclusivamente de cor;
- a stack não deve competir com Projetos;
- o visitante deve compreender a seção sem dominar toda a terminologia.

## 16. Acessibilidade

### 16.1 Semântica

- usar um único `h2` para a seção;
- usar `h3` para cada categoria;
- usar listas HTML para as tecnologias;
- manter a seção associada ao título por `aria-labelledby` quando implementada;
- não adicionar ARIA redundante;
- manter landmarks da Home.

### 16.2 Teclado e foco

- links existentes continuam acessíveis;
- qualquer elemento interativo futuro deve ter foco visível;
- não criar tecnologia como botão se não houver ação;
- a ordem de tabulação deve seguir a ordem visual e de leitura.

### 16.3 Contraste e percepção

- branco e cinza-claro em fundos preto e navy;
- laranja apenas em detalhes com contraste adequado;
- status de planejamento acompanhado de texto;
- nenhum grupo depende de uma cor para ser entendido;
- texto não deve ficar sobre gradientes de baixo contraste.

### 16.4 Zoom e leitura assistiva

- validar zoom de 200%;
- validar aproximadamente 390px de largura;
- garantir que listas sejam lidas como listas;
- remover elementos decorativos da árvore de acessibilidade;
- não esconder contexto essencial em tooltips.

## 17. Responsividade

### Desktop

Usar a composição de três colunas somente quando cada grupo mantiver título, descrição e itens sem compressão excessiva. Em telas largas, aumentar o respiro, não a quantidade de conteúdo.

### Tablet

Adotar duas colunas. Se o conteúdo ficar estreito, preferir aumentar a altura da categoria em vez de reduzir a tipografia.

### Mobile

Converter toda a seção para uma coluna vertical. A ordem deve ser Java, arquitetura, mensageria, containers, qualidade e IA, salvo decisão posterior baseada em evidência de uso.

### Estados que não devem existir

- overflow horizontal;
- item truncado sem acesso ao texto completo;
- categoria com altura fixa que corte conteúdo;
- quebra de título em composição ilegível;
- listas que pareçam botões por causa de bordas ou preenchimento.

## 18. Analytics, SEO e Performance Preservados

### Analytics

Não criar eventos para o simples fato de uma tecnologia aparecer na tela. Preservar os eventos existentes:

- `navigation-click`;
- `primary-cta-click`;
- `curriculum-click`;
- `project-repository-click`;
- `linkedin-click`;
- `github-click`;
- `email-click`;
- `whatsapp-click`.

Não alterar o script global do Umami, o Website ID ou `data-performance="true"`.

### SEO

Preservar metadata, canonical, `robots.ts`, `sitemap.ts`, idioma `pt-BR` e o único `h1` da página. Não criar novas páginas ou URLs para tecnologias.

### Performance

- preferir conteúdo renderizado no servidor;
- não adicionar biblioteca de ícones ou UI;
- não carregar imagens ou logos remotos por padrão;
- não usar canvas, WebGL ou visualização pesada;
- não adicionar JavaScript imperativo;
- não criar animações contínuas;
- preservar o build standalone;
- evitar layout shift e excesso de CSS específico.

## 19. Critérios de Aceite

- o wireframe representa a seção completa;
- existem wireframes para desktop, tablet e mobile;
- o fluxo de leitura começa por contexto e termina em evidência;
- as seis categorias oficiais estão representadas;
- os itens reais da fonte de dados estão preservados;
- tecnologias planejadas podem ser contextualizadas sem parecer concluídas;
- a seção parece documentação técnica de engenharia, e não um dashboard;
- não há barras de progresso;
- não há estrelas;
- não há porcentagens;
- não há níveis de conhecimento;
- não há badges excessivos;
- não há excesso de cards;
- a hierarquia visual está definida;
- os espaçamentos estão descritos;
- o comportamento em 390px, 768px e 1440px está definido;
- headings, listas, foco, contraste e teclado estão previstos;
- nenhum item informativo exige JavaScript;
- eventos Umami existentes são preservados;
- SEO existente é preservado;
- performance e Server Components são considerados;
- não há alteração de frontend nesta entrega;
- o documento não contém JSX, CSS ou Tailwind.

## 20. Definition of Done

O wireframe estará pronto quando:

- a experiência da seção estiver definida do primeiro contato ao fim da leitura;
- desktop, tablet e mobile estiverem representados em wireframes completos;
- a arquitetura da informação estiver documentada;
- as seis categorias possuírem finalidade e conteúdo previsto;
- conteúdos permitidos e proibidos estiverem explícitos;
- ritmo visual e espaçamentos estiverem descritos;
- acessibilidade e responsividade estiverem especificadas;
- analytics, SEO e performance estiverem protegidos contra alterações indevidas;
- a seção não parecer um dashboard;
- não houver escalas artificiais de conhecimento;
- a próxima implementação puder seguir o documento sem inventar conteúdo;
- nenhum código, componente, estilo, analytics ou infraestrutura tiver sido alterado.

## 21. Fora de Escopo

Esta entrega não inclui:

- implementação React;
- alteração de `page.tsx`;
- alteração de componentes;
- alteração de CSS ou Tailwind;
- criação de tokens;
- instalação de dependências;
- criação de ícones ou logos;
- alteração de imagens;
- alteração de analytics;
- criação de eventos ou Goals;
- alteração de metadata ou SEO;
- alteração de Docker, Compose ou Cloudflare;
- criação de páginas individuais para tecnologias;
- filtros, busca ou ordenação;
- barras, estrelas, porcentagens ou níveis de conhecimento;
- publicação em redes sociais;
- alteração de `package.json` ou `package-lock.json`;
- commit;
- push.
