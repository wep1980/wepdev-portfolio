# Wireframe Home V2 — WEPDEV Portfolio

## 1. Identificação

- Documento: Wireframe Home V2
- Produto: WEPDEV Portfolio
- Etapa: UX-001 — Wireframe da Home V2
- Responsável: Waldir Escouto Pereira
- Estado: Pronto para refinamento
- Objetivo: orientar a próxima implementação visual da página inicial sem alterar código nesta etapa

## 2. Contexto

O portfólio atual está funcional e já possui conteúdo profissional, projetos, canais de contato, eventos de analytics, SEO técnico inicial e deploy público. A Home V2 deve avançar além da estrutura visual anterior, com uma composição mais editorial, leitura mais rápida e maior destaque para evidências de trabalho.

A referência de organização editorial é `https://cristophermartins.com/`, usada apenas como inspiração de hierarquia, ritmo, espaço, destaque antecipado dos projetos e jornada de leitura. Não deve haver cópia de código, textos, imagens, marca, animações, identidade visual ou componentes proprietários.

Paleta aprovada para a Home V2:

| Papel | Cor |
| --- | --- |
| Preto | `#000000` |
| Azul-marinho | `#14213D` |
| Laranja | `#FCA311` |
| Cinza-claro | `#E5E5E5` |
| Branco | `#FFFFFF` |

O laranja deve funcionar como acento de ação, foco, marcadores e pequenos detalhes. A base visual deve continuar escura, com preto e navy dominando superfícies e fundo.

## 3. Objetivo do Documento

Definir o wireframe completo da Home V2 antes da implementação.

Este documento especifica:

- ordem das seções;
- estrutura de cada seção;
- hierarquia de conteúdo;
- composição desktop;
- composição tablet;
- composição mobile;
- CTAs;
- comportamento esperado;
- eventos analíticos;
- acessibilidade;
- itens removidos da versão atual;
- conteúdo reaproveitado;
- critérios de aceite visual;
- plano de implementação em fases pequenas.

Este documento não produz código e não autoriza alteração de frontend, CSS, Tailwind, componentes React, imagens ou infraestrutura durante a etapa UX-001.

## 4. Inventário Atual

### 4.1 Ordem Atual da Home

A composição atual em `frontend/app/page.tsx` renderiza:

1. Hero;
2. Projetos;
3. Tecnologias;
4. Sobre;
5. Experiência;
6. Especialidades;
7. Princípios de engenharia;
8. Contato.

O cabeçalho e o rodapé são renderizados globalmente por `frontend/app/layout.tsx`.

### 4.2 IDs e Âncoras

| Seção | ID atual | Situação para Home V2 |
| --- | --- | --- |
| Hero | `inicio` | Manter |
| Projetos | `projetos` | Manter |
| Tecnologias | `tecnologias` | Manter |
| Sobre | `sobre` | Manter |
| Experiência | `experiencia` | Manter |
| Como gero valor | `especialidades` | Manter ou avaliar se a navegação deve apontar indiretamente |
| Princípios | sem `id` próprio | Pode permanecer sem link no menu |
| Contato | `contato` | Manter |

### 4.3 Navegação Atual

Menu atual:

- Início: `#inicio`;
- Projetos: `#projetos`;
- Tecnologias: `#tecnologias`;
- Sobre: `#sobre`;
- Experiência: `#experiencia`;
- Contato: `#contato`.

O menu já segue a ordem esperada para a Home V2.

### 4.4 Informações Profissionais Válidas

| Item | Valor |
| --- | --- |
| Nome | Waldir Escouto Pereira |
| Cargo | Desenvolvedor Java Sênior |
| Localização pública | Rio de Janeiro, Brasil |
| Disponibilidade | Disponível para novas oportunidades profissionais |
| E-mail | `wepcienciadacomputacao@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/wepdev/` |
| GitHub | `https://github.com/wep1980` |
| WhatsApp | `https://wa.me/5521990561880` com mensagem inicial codificada |
| Currículo | `/waldir_escouto_pereira_cv.pdf` |

### 4.5 Projetos Reais

| Projeto | ID | Estado | Tipo | Repositório |
| --- | --- | --- | --- | --- |
| WEPDEV Portfolio | `wepdev-portfolio` | `em-evolucao` | Produto | `https://github.com/wep1980/wepdev-portfolio` |
| Laboratório Java com IA | `laboratorio-java-ia` | `planejado` | Laboratório | Não possui link público cadastrado |
| Plataforma Java de Microsserviços | `plataforma-java-microsservicos` | `planejado` | Estudo de caso | Não possui link público cadastrado |

### 4.6 Experiências Reais

| ID | Empresa | Cargo | Período |
| --- | --- | --- | --- |
| `grupo-casas-bahia-2026-atual` | Grupo Casas Bahia | Engenheiro de Software Sênior | janeiro de 2026 — atual |
| `matera-2025-2026` | Matera | Desenvolvedor Full Stack | fevereiro de 2025 — janeiro de 2026 |
| `200dev-2024-2025` | 200DEV | Desenvolvedor Web/Java | abril de 2024 — janeiro de 2025 |
| `cbyk-consultoria-2024` | CBYK Consultoria | Desenvolvedor Web/Java | janeiro de 2024 — abril de 2024 |
| `atos-2022-2024` | Atos | Desenvolvedor Web/Java | julho de 2022 — janeiro de 2024 |
| `blendit-2022` | BlendIt | Desenvolvedor Full Stack | fevereiro de 2022 — julho de 2022 |
| `plennus-ti-2019-2022` | Plennus TI | Desenvolvedor Full Stack | janeiro de 2019 — fevereiro de 2022 |

### 4.7 Tecnologias e Ferramentas Reais

Grupos existentes:

- Java e frameworks;
- arquitetura e integrações;
- mensageria e dados;
- containers e cloud;
- qualidade e DevOps;
- IA aplicada.

Tecnologias inventariadas:

- Java;
- Java 17;
- Java 21;
- Spring;
- Spring Framework;
- Spring Boot;
- Spring AI;
- Quarkus;
- Jakarta EE;
- Java EE;
- JSF;
- JSP;
- PrimeFaces;
- RichFaces;
- APIs REST;
- OpenAPI;
- Swagger/OpenAPI;
- Microsserviços;
- Arquitetura Hexagonal;
- Apache Kafka;
- Kafka;
- RabbitMQ;
- PostgreSQL;
- SQL Server;
- MySQL;
- MongoDB;
- Redis;
- Docker;
- Kubernetes;
- OpenShift;
- AWS;
- Azure;
- Helm;
- Maven;
- Git;
- GitHub;
- GitHub Actions;
- CI/CD;
- Jenkins;
- Keycloak;
- OpenTelemetry;
- JUnit;
- Mockito;
- Testcontainers;
- SonarQube;
- JaCoCo;
- Angular;
- AngularJS;
- React;
- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS 4;
- App Router;
- Server Components;
- OpenAI;
- Ollama;
- RAG.

### 4.8 Canais de Contato

| Canal | Texto atual | Destino | Local atual |
| --- | --- | --- | --- |
| LinkedIn | Acessar LinkedIn | `https://www.linkedin.com/in/wepdev/` | Hero, Contato, Rodapé |
| GitHub | Acessar GitHub | `https://github.com/wep1980` | Hero, Contato, Rodapé |
| E-mail | Enviar e-mail | `mailto:wepcienciadacomputacao@gmail.com` | Contato, Rodapé |
| WhatsApp | Iniciar conversa | `https://wa.me/5521990561880?...` | Contato |
| Currículo | Acessar currículo / Currículo PDF | `/waldir_escouto_pereira_cv.pdf` | Hero, Contato, Rodapé |

### 4.9 Eventos Umami Existentes

| Evento | Uso atual | Propriedades |
| --- | --- | --- |
| `navigation-click` | Navegação por cabeçalho e rodapé | `section`, `location` |
| `primary-cta-click` | CTA principal “Ver projetos” no Hero | `action=view-projects`, `location=hero` |
| `curriculum-click` | Links para currículo | `action=open`, `location` |
| `project-repository-click` | Link de repositório de projeto | `project`, `project-status`, `location=projects` |
| `linkedin-click` | Links para LinkedIn | `location` |
| `github-click` | Links para GitHub | `location` |
| `email-click` | Links de e-mail | `location` |
| `whatsapp-click` | Link de WhatsApp | `location=contact` |

### 4.10 Elementos Rejeitados ou Indesejados

No estado atual inspecionado, não há renderização ativa de `PainelTecnicoHero`, `MarcaWepdev`, IDE, terminal ou slogan no Hero. Mesmo assim, a Home V2 deve registrar explicitamente que esses padrões não devem retornar:

- IDE simulada;
- terminal;
- código decorativo;
- monogramas rejeitados;
- logo gráfica provisória;
- faixa WEPDEV com slogan;
- painéis laterais sem valor;
- glows em excesso.

## 5. Ordem Final da Home V2

A Home V2 deve seguir:

1. Navbar;
2. Hero;
3. Projetos em destaque;
4. Tecnologias e ferramentas;
5. Sobre;
6. Experiência resumida;
7. Como gero valor;
8. Princípios de engenharia;
9. Contato;
10. Rodapé.

Essa ordem prioriza leitura rápida para recrutadores e antecipa evidências concretas de trabalho logo após a identificação profissional.

## 6. Navbar

### 6.1 Objetivo

Permitir navegação direta pelas seções principais sem competir visualmente com o Hero.

### 6.2 Desktop

Estrutura:

- assinatura tipográfica WEPDEV à esquerda;
- menu central;
- CTA à direita, preferencialmente Contato ou Currículo;
- sticky;
- fundo escuro translúcido;
- borda inferior discreta;
- sem logo gráfica.

Assinatura:

- texto `WEPDEV`;
- `WEP` em branco;
- `DEV` em laranja;
- subtítulo `Portfolio` opcional, apenas se não aumentar densidade.

Menu:

- Início;
- Projetos;
- Tecnologias;
- Sobre;
- Experiência;
- Contato.

CTA recomendado:

- manter `Contato` como CTA de baixa fricção;
- avaliar `Currículo` somente se o Hero já tiver Contato/WhatsApp como ação forte.

### 6.3 Tablet

Estrutura:

- assinatura à esquerda;
- CTA à direita;
- menu pode permanecer oculto se não houver espaço;
- evitar quebra em duas linhas.

### 6.4 Mobile

Estrutura:

- assinatura `WEPDEV`;
- CTA compacto ou menu compacto;
- sem biblioteca externa;
- sem overflow horizontal;
- área de toque mínima adequada.

### 6.5 Analytics

| Elemento | Evento | Propriedades |
| --- | --- | --- |
| Links do menu | `navigation-click` | `section=<home/projects/technologies/about/experience/contact>`, `location=header` |
| CTA Contato | `navigation-click` | `section=contact`, `location=header` |
| Assinatura WEPDEV | Sem evento recomendado | Evitar evento de baixa intenção |

## 7. Hero

### 7.1 Objetivo

Apresentar rapidamente quem é Waldir, sua especialidade e as ações principais.

### 7.2 Conteúdo Obrigatório

- Waldir Escouto Pereira;
- Desenvolvedor Java Sênior;
- proposta de valor;
- CTA Ver projetos;
- CTA Currículo;
- LinkedIn;
- GitHub;
- WhatsApp;
- pequena lista de tecnologias principais.

### 7.3 Conteúdo Reaproveitado

Textos e conceitos válidos já existentes:

- `Waldir Escouto Pereira`;
- `Desenvolvedor Java Sênior`;
- `Backend Enterprise, Microsserviços e Inteligência Artificial aplicada à Engenharia de Software.`;
- `Desenvolvo APIs, microsserviços e integrações utilizando Java, Spring Boot, Quarkus, arquitetura de software, mensageria, containers e práticas modernas de Engenharia de Software.`;
- `Disponível para novas oportunidades`;
- tecnologias principais: Java, Spring Boot, Quarkus, Kafka, Docker, Kubernetes, IA.

### 7.4 O Que Não Usar

- IDE;
- terminal;
- código decorativo;
- monograma;
- logo gráfica;
- painel técnico complexo;
- janela simulada;
- faixa WEPDEV com slogan;
- slogan no Hero.

### 7.5 Alternativa A — Hero Editorial em Uma Coluna Ampla

Estrutura:

- coluna única com largura máxima editorial;
- headline forte com nome;
- cargo logo abaixo;
- proposta curta;
- CTAs em linha no desktop e empilhados no mobile;
- canais profissionais como links secundários;
- tecnologias como lista discreta.

Vantagens:

- leitura mais rápida;
- menor densidade visual;
- reduz risco de novo painel rejeitado;
- funciona melhor no mobile;
- coloca projetos mais cedo na dobra seguinte.

Desvantagens:

- menor presença visual no desktop amplo;
- exige bom uso de espaçamento e tipografia para não parecer simples demais.

Impacto mobile:

- melhor opção para 390px;
- reduz rolagem antes dos projetos;
- CTAs ficam acessíveis sem reorganização complexa.

### 7.6 Alternativa B — Hero em Duas Colunas com Painel Abstrato Simples

Estrutura:

- conteúdo principal à esquerda;
- painel abstrato simples à direita;
- painel sem código, sem IDE, sem terminal;
- composição com linhas, blocos, rótulos curtos e áreas técnicas abstratas;
- painel decorativo com `aria-hidden` se não transmitir conteúdo novo.

Vantagens:

- aproveita melhor desktop 1440px;
- cria identidade visual mais marcante;
- permite ritmo editorial com um contraponto visual.

Desvantagens:

- maior risco de densidade;
- risco de virar novo painel técnico rejeitado;
- exige redução ou ocultação parcial no mobile.

Impacto mobile:

- painel deve ir abaixo do texto ou ser simplificado;
- não pode atrasar o acesso aos projetos;
- se ocupar muito espaço, deve ser removido no mobile.

### 7.7 Recomendação Final

Recomenda-se a Alternativa A como base da Home V2. Ela atende melhor ao objetivo de Hero curto, leitura rápida e projetos mais cedo. A Alternativa B pode ser mantida como evolução visual futura apenas se o painel abstrato for realmente simples, não parecer IDE e não competir com os projetos.

## 8. Projetos em Destaque

### 8.1 Objetivo

Exibir evidências concretas imediatamente após o Hero.

### 8.2 Conteúdo

Cada projeto deve apresentar:

- nome;
- categoria;
- descrição curta;
- status;
- tipo;
- tecnologias principais;
- link de repositório quando existir;
- detalhes progressivos;
- placeholder conceitual opcional: `[ÁREA VISUAL DO PROJETO]`.

Não inventar screenshots, métricas, clientes, resultados ou links.

### 8.3 Composição Recomendada

Desktop:

- bloco principal para `WEPDEV Portfolio`;
- área visual editorial à esquerda ou no topo do card principal;
- descrição curta aberta;
- tecnologias limitadas na primeira leitura;
- detalhes progressivos para problema, solução e conceitos;
- projetos secundários em duas colunas.

Tablet:

- projeto principal em largura total;
- secundários em uma ou duas colunas conforme espaço;
- chips com quebra controlada.

Mobile:

- todos os projetos empilhados;
- projeto principal primeiro;
- detalhes fechados por padrão;
- CTA de repositório visível sem depender de expandir.

### 8.4 Hierarquia Visual

1. Título da seção;
2. Projeto principal;
3. Status e tipo;
4. Descrição curta;
5. Tecnologias principais;
6. CTA do repositório;
7. Detalhes progressivos;
8. Projetos planejados.

### 8.5 CTA

- Para `WEPDEV Portfolio`: `Ver repositório`.
- Para projetos sem repositório: manter texto de estado, sem botão falso.

### 8.6 Analytics

| Elemento | Evento | Propriedades |
| --- | --- | --- |
| CTA `Ver repositório` do WEPDEV Portfolio | `project-repository-click` | `project=wepdev-portfolio`, `project-status=em-evolucao`, `location=projects` |
| Projetos sem repositório | Sem evento | Não há ação real |
| Details de projeto | Sem evento nesta fase | Evitar JavaScript imperativo |

## 9. Tecnologias e Ferramentas

### 9.1 Objetivo

Permitir que recrutadores e líderes técnicos identifiquem rapidamente aderência técnica.

### 9.2 Grupos

- Java e frameworks;
- arquitetura e integrações;
- mensageria e dados;
- containers e cloud;
- IA aplicada;
- ferramentas de engenharia.

O grupo atual `qualidade e DevOps` pode ser apresentado como `ferramentas de engenharia` se o conteúdo permanecer real: JUnit, Mockito, Testcontainers, SonarQube, JaCoCo e CI/CD.

### 9.3 Formatos Avaliados

| Formato | Vantagens | Desvantagens |
| --- | --- | --- |
| Grid de cards por categoria | Fácil de escanear, reutiliza estrutura atual | Pode parecer repetitivo se todos os cards tiverem mesmo peso |
| Lista editorial em colunas | Menos visual de dashboard, mais leve | Pode perder separação clara entre grupos |
| Colunas compactas sem cards pesados | Reduz densidade e peso visual | Exige cuidado com alinhamento em tablet |

### 9.4 Recomendação Final

Usar colunas editoriais compactas por categoria, com divisores sutis e listas de tecnologias em texto ou badges discretos. Elementos não interativos não devem parecer botões.

## 10. Sobre

### 10.1 Objetivo

Comunicar trajetória e posicionamento de forma humana, curta e confiável.

### 10.2 Estrutura

- título;
- texto em dois ou três blocos;
- visão profissional;
- foco técnico;
- frase de destaque;
- espaço opcional para foto futura.

### 10.3 Conteúdo Reaproveitado

Usar o conteúdo atual sem alterar significado:

- atuação centrada em desenvolvimento Java para ambientes corporativos;
- backend enterprise, APIs, integrações, microsserviços e arquitetura;
- trabalho com sistemas legados e aplicações modernas;
- evolução em Inteligência Artificial aplicada à Engenharia de Software.

### 10.4 Recomendações

- evitar parede de texto;
- evitar repetir a lista de tecnologias recém-apresentada;
- manter frase central em superfície de destaque;
- não exigir foto nesta fase;
- se houver espaço de foto futura, marcar como reservado e não renderizar imagem fictícia.

## 11. Experiência Resumida

### 11.1 Objetivo

Mostrar senioridade e contexto profissional sem sobrecarregar a página.

### 11.2 Conteúdo Inicial por Experiência

- cargo;
- empresa;
- período;
- resumo curto;
- tecnologias principais.

Detalhes podem ser expandidos com `<details>`.

### 11.3 Alternativas

| Alternativa | Vantagens | Desvantagens |
| --- | --- | --- |
| Timeline vertical | Comunica evolução temporal com clareza | Pode ficar estreita e longa com 7 experiências |
| Cards empilhados | Boa leitura mobile e preserva detalhes | Pode criar bloco muito pesado |
| Lista editorial | Menos densa, mais escaneável, melhor para muitas experiências | Exige hierarquia clara para não parecer simples demais |

### 11.4 Recomendação Final

Usar lista editorial com marcador temporal discreto, não uma timeline estreita. A experiência em destaque pode ter maior presença, e as demais devem aparecer como linhas/cards compactos com detalhes progressivos.

## 12. Como Gero Valor

### 12.1 Objetivo

Traduzir o repertório técnico em áreas de contribuição sem linguagem comercial agressiva.

### 12.2 Blocos

1. Backend e APIs;
2. Arquitetura e integrações;
3. Cloud, DevOps e IA aplicada.

### 12.3 Conteúdo

Usar os dados reais de `frontend/constantes/especialidades.ts`:

- Backend e APIs: Java, Spring Boot, Quarkus, OpenAPI;
- Arquitetura e integrações: Microsserviços, Kafka, RabbitMQ, Arquitetura Hexagonal;
- Cloud, DevOps e IA aplicada: Docker, Kubernetes, OpenTelemetry, OpenAI e Ollama.

### 12.4 Composição Responsiva

Desktop:

- três blocos horizontais com peso igual;
- título curto;
- descrição objetiva;
- itens em lista textual.

Tablet:

- um bloco em destaque e dois abaixo, ou três blocos empilhados se o espaço ficar apertado.

Mobile:

- uma coluna;
- evitar cards grandes;
- manter leitura curta.

## 13. Princípios de Engenharia

### 13.1 Objetivo

Mostrar forma de pensar e critérios técnicos sem repetir Sobre ou Tecnologias.

### 13.2 Conteúdo

Preservar os oito princípios:

1. Simplicidade antes da complexidade;
2. Evolução incremental;
3. Segurança por padrão;
4. Observabilidade desde o início;
5. APIs claras e documentadas;
6. Testes como parte da entrega;
7. Separação de responsabilidades;
8. IA com julgamento técnico.

### 13.3 Wireframe Recomendado

- lista em duas colunas no desktop;
- uma coluna no mobile;
- numeração discreta;
- títulos fortes;
- descrições curtas;
- divisores sutis;
- poucos chips ou nenhum chip;
- fundo levemente diferente para quebrar ritmo.

## 14. Contato

### 14.1 Objetivo

Encerrar a jornada com uma ação clara e canais profissionais reais.

### 14.2 Conteúdo

- headline objetiva;
- texto curto;
- localização geral;
- disponibilidade profissional;
- LinkedIn;
- e-mail;
- GitHub;
- WhatsApp;
- currículo.

### 14.3 Hierarquia Recomendada

1. Headline;
2. texto curto;
3. CTA principal;
4. canais secundários;
5. localização e disponibilidade.

CTA principal recomendado:

- LinkedIn continua sendo canal preferencial profissional;
- WhatsApp pode aparecer como ação direta secundária;
- currículo permanece como conversão de alta intenção.

### 14.4 WhatsApp

Requisitos:

- abrir conversa pelo link já configurado;
- não exibir obrigatoriamente o número;
- evento `whatsapp-click`;
- `location=contact`;
- não afirmar que houve envio de mensagem.

### 14.5 Mobile

- cards/canais em uma coluna;
- área de toque adequada;
- e-mail com quebra controlada;
- currículo acessível;
- WhatsApp visível sem dominar a seção.

## 15. Rodapé

### 15.1 Objetivo

Fechar a página de forma profissional sem repetir a seção Contato.

### 15.2 Estrutura

- WEPDEV tipográfico;
- nome;
- cargo ou frase curta;
- navegação essencial;
- canais profissionais;
- copyright;
- localização;
- tecnologia usada na construção.

### 15.3 Regras

- sem logo gráfica;
- sem slogan obrigatório;
- sem formulário;
- sem repetição da headline de Contato;
- manter links seguros;
- manter eventos existentes.

## 16. Wireframes ASCII

### 16.1 Desktop — 1440px

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR 1440                                                                                  │
│ [WEPDEV]                    Início Projetos Tecnologias Sobre Experiência Contato   [Contato] │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ HERO                                                                                         │
│                                                                                              │
│ Disponível para novas oportunidades                                                          │
│ Backend Enterprise / Arquitetura / IA aplicada                                                │
│                                                                                              │
│ Waldir Escouto Pereira                                                                       │
│ Desenvolvedor Java Sênior                                                                    │
│ Backend Enterprise, Microsserviços e IA aplicada à Engenharia de Software.                    │
│ Texto curto de apoio com Java, APIs, integrações, arquitetura e containers.                   │
│                                                                                              │
│ [Ver projetos] [Currículo PDF] [LinkedIn] [GitHub] [WhatsApp]                                │
│                                                                                              │
│ Java  Spring Boot  Quarkus  Kafka  Docker  Kubernetes  IA                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PROJETOS EM DESTAQUE                                                                         │
│ Evidências técnicas + introdução curta                                                       │
│                                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ PROJETO PRINCIPAL: WEPDEV Portfolio                                                       │ │
│ │ [ÁREA VISUAL DO PROJETO]    Nome / categoria / status                                    │ │
│ │                             Descrição curta                                               │ │
│ │                             Tecnologias principais                                       │ │
│ │                             [Ver repositório]                                             │ │
│ │                             [Ver contexto técnico]                                        │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────┐ ┌────────────────────────────────────────────┐ │
│ │ Laboratório Java com IA                    │ │ Plataforma Java de Microsserviços          │ │
│ │ Status planejado + descrição curta         │ │ Status planejado + descrição curta         │ │
│ │ Tecnologias planejadas                     │ │ Tecnologias planejadas                     │ │
│ │ [Contexto técnico]                         │ │ [Contexto técnico]                         │ │
│ └────────────────────────────────────────────┘ └────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TECNOLOGIAS E FERRAMENTAS                                                                    │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐  │
│ │ Java/framework│ │ Arquitetura   │ │ Mensageria    │ │ Containers    │ │ IA aplicada   │  │
│ │ Lista curta   │ │ Lista curta   │ │ Lista curta   │ │ Lista curta   │ │ Lista curta   │  │
│ └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘  │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ Ferramentas de engenharia: testes, qualidade, CI/CD e observabilidade                    │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOBRE                                                                                        │
│ ┌──────────────────────────────┐ ┌───────────────────────────────────────────────────────┐   │
│ │ Título editorial              │ │ Frase de destaque                                     │   │
│ │ Visão profissional            │ │ Bloco 1: backend enterprise                           │   │
│ │ Foco técnico                  │ │ Bloco 2: legados, cloud e IA aplicada                 │   │
│ └──────────────────────────────┘ └───────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPERIÊNCIA RESUMIDA                                                                         │
│ Título + introdução curta                                                                    │
│ ┌──────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 2026-atual  Grupo Casas Bahia  Engenheiro de Software Sênior  Resumo  Tecnologias      │ │
│ │            [Ver principais atividades]                                                   │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 2025-2026  Matera             Desenvolvedor Full Stack        Resumo  Tecnologias       │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ demais experiências em lista editorial compacta                                          │ │
│ └──────────────────────────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMO GERO VALOR                                                                              │
│ ┌────────────────────────┐ ┌────────────────────────┐ ┌────────────────────────┐            │
│ │ Backend e APIs         │ │ Arquitetura e integrações│ │ Cloud, DevOps e IA     │            │
│ │ descrição curta        │ │ descrição curta          │ │ descrição curta        │            │
│ │ itens reais            │ │ itens reais              │ │ itens reais            │            │
│ └────────────────────────┘ └────────────────────────┘ └────────────────────────┘            │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINCÍPIOS DE ENGENHARIA                                                                     │
│ ┌──────────────────────────────────────┐ ┌──────────────────────────────────────┐            │
│ │ 01 Simplicidade antes da complexidade│ │ 02 Evolução incremental              │            │
│ │ 03 Segurança por padrão              │ │ 04 Observabilidade desde o início    │            │
│ │ 05 APIs claras e documentadas        │ │ 06 Testes como parte da entrega      │            │
│ │ 07 Separação de responsabilidades    │ │ 08 IA com julgamento técnico         │            │
│ └──────────────────────────────────────┘ └──────────────────────────────────────┘            │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONTATO                                                                                      │
│ ┌──────────────────────────────┐ ┌───────────────────────────────────────────────────────┐   │
│ │ Headline objetiva             │ │ [LinkedIn principal] [E-mail]                         │   │
│ │ texto curto                   │ │ [WhatsApp] [GitHub]                                   │   │
│ │ localização + disponibilidade │ │ [Currículo PDF]                                       │   │
│ └──────────────────────────────┘ └───────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ RODAPÉ                                                                                       │
│ WEPDEV tipográfico | Waldir | Navegação | Canais | ano | Next.js + TypeScript | Rio de Janeiro│
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 16.2 Tablet — 768px

```text
┌──────────────────────────────────────────────┐
│ NAVBAR 768                                   │
│ [WEPDEV]                              [CTA]  │
├──────────────────────────────────────────────┤
│ HERO                                         │
│ Disponível para novas oportunidades          │
│ Waldir Escouto Pereira                       │
│ Desenvolvedor Java Sênior                    │
│ Proposta de valor curta                      │
│ [Ver projetos] [Currículo PDF]               │
│ [LinkedIn] [GitHub] [WhatsApp]               │
│ Java Spring Boot Quarkus Kafka Docker IA     │
├──────────────────────────────────────────────┤
│ PROJETOS EM DESTAQUE                         │
│ ┌──────────────────────────────────────────┐ │
│ │ WEPDEV Portfolio                         │ │
│ │ [ÁREA VISUAL DO PROJETO]                 │ │
│ │ descrição + tecnologias + status         │ │
│ │ [Ver repositório] [Contexto técnico]     │ │
│ └──────────────────────────────────────────┘ │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ Laboratório IA     │ │ Microsserviços    │ │
│ │ descrição curta    │ │ descrição curta   │ │
│ └────────────────────┘ └───────────────────┘ │
├──────────────────────────────────────────────┤
│ TECNOLOGIAS                                  │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ Java/frameworks    │ │ Arquitetura       │ │
│ └────────────────────┘ └───────────────────┘ │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ Mensageria/dados   │ │ Containers/cloud  │ │
│ └────────────────────┘ └───────────────────┘ │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ IA aplicada        │ │ Ferramentas       │ │
│ └────────────────────┘ └───────────────────┘ │
├──────────────────────────────────────────────┤
│ SOBRE                                        │
│ Título                                       │
│ Frase destaque                               │
│ Bloco 1                                      │
│ Bloco 2                                      │
├──────────────────────────────────────────────┤
│ EXPERIÊNCIA                                  │
│ Lista editorial compacta                     │
│ ┌──────────────────────────────────────────┐ │
│ │ período | empresa | cargo                │ │
│ │ resumo | tecnologias | detalhes          │ │
│ └──────────────────────────────────────────┘ │
│ demais experiências empilhadas               │
├──────────────────────────────────────────────┤
│ COMO GERO VALOR                              │
│ ┌──────────────────────────────────────────┐ │
│ │ Backend e APIs                           │ │
│ └──────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────┐ │
│ │ Arquitetura e integrações                │ │
│ └──────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────┐ │
│ │ Cloud, DevOps e IA aplicada              │ │
│ └──────────────────────────────────────────┘ │
├──────────────────────────────────────────────┤
│ PRINCÍPIOS                                   │
│ duas colunas se houver espaço, senão uma     │
├──────────────────────────────────────────────┤
│ CONTATO                                      │
│ Headline + texto curto                       │
│ [LinkedIn] [WhatsApp]                        │
│ [E-mail] [GitHub]                            │
│ [Currículo PDF]                              │
├──────────────────────────────────────────────┤
│ RODAPÉ                                       │
│ WEPDEV | navegação | canais | metadados      │
└──────────────────────────────────────────────┘
```

### 16.3 Mobile — 390px

```text
┌──────────────────────────────┐
│ NAVBAR 390                   │
│ [WEPDEV]              [CTA]  │
├──────────────────────────────┤
│ HERO                         │
│ Disponível                   │
│ Waldir Escouto Pereira       │
│ Desenvolvedor Java Sênior    │
│ Proposta de valor curta      │
│                              │
│ [Ver projetos]               │
│ [Currículo PDF]              │
│ [LinkedIn]                   │
│ [GitHub]                     │
│ [WhatsApp]                   │
│                              │
│ Java / Spring Boot / Quarkus │
│ Kafka / Docker / Kubernetes  │
├──────────────────────────────┤
│ PROJETOS                     │
│ ┌──────────────────────────┐ │
│ │ WEPDEV Portfolio         │ │
│ │ [ÁREA VISUAL DO PROJETO] │ │
│ │ descrição curta          │ │
│ │ status + tecnologias     │ │
│ │ [Ver repositório]        │ │
│ │ [Ver contexto técnico]   │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ Laboratório Java com IA  │ │
│ │ planejado                │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ Plataforma Microsserviços│ │
│ │ planejado                │ │
│ └──────────────────────────┘ │
├──────────────────────────────┤
│ TECNOLOGIAS                  │
│ Java e frameworks            │
│ Arquitetura e integrações    │
│ Mensageria e dados           │
│ Containers e cloud           │
│ IA aplicada                  │
│ Ferramentas de engenharia    │
├──────────────────────────────┤
│ SOBRE                        │
│ título                       │
│ frase destaque               │
│ parágrafo 1                  │
│ parágrafo 2                  │
├──────────────────────────────┤
│ EXPERIÊNCIA                  │
│ Grupo Casas Bahia            │
│ Engenheiro Software Sênior   │
│ período + resumo             │
│ [Ver atividades]             │
│ Matera                       │
│ 200DEV                       │
│ CBYK                         │
│ Atos                         │
│ BlendIt                      │
│ Plennus TI                   │
├──────────────────────────────┤
│ COMO GERO VALOR              │
│ Backend e APIs               │
│ Arquitetura e integrações    │
│ Cloud, DevOps e IA aplicada  │
├──────────────────────────────┤
│ PRINCÍPIOS                   │
│ 01 Simplicidade              │
│ 02 Evolução incremental      │
│ 03 Segurança                 │
│ 04 Observabilidade           │
│ 05 APIs claras               │
│ 06 Testes                    │
│ 07 Responsabilidades         │
│ 08 IA com julgamento         │
├──────────────────────────────┤
│ CONTATO                      │
│ Vamos conversar              │
│ [LinkedIn]                   │
│ [WhatsApp]                   │
│ [E-mail]                     │
│ [GitHub]                     │
│ [Currículo PDF]              │
│ Rio de Janeiro, Brasil       │
├──────────────────────────────┤
│ RODAPÉ                       │
│ WEPDEV                       │
│ Waldir Escouto Pereira       │
│ links essenciais             │
│ ano + Next.js + TypeScript   │
└──────────────────────────────┘
```

## 17. Analytics

Não criar novos eventos na Home V2. Preservar a taxonomia atual.

| Evento | Elemento | Seção | Location | Preservação ou alteração necessária |
| --- | --- | --- | --- | --- |
| `navigation-click` | Menu principal | Navbar | `header` | Preservar; atualizar apenas se âncoras mudarem |
| `navigation-click` | Navegação do rodapé | Rodapé | `footer` | Preservar |
| `primary-cta-click` | CTA `Ver projetos` | Hero | `hero` | Preservar; não duplicar com `navigation-click` |
| `curriculum-click` | CTA Currículo | Hero, Contato, Rodapé | `hero`, `contact`, `footer` | Preservar `action=open` |
| `project-repository-click` | CTA `Ver repositório` | Projetos | `projects` | Preservar `project` e `project-status` derivados dos dados |
| `linkedin-click` | LinkedIn | Hero, Contato, Rodapé | `hero`, `contact`, `footer` | Preservar |
| `github-click` | GitHub | Hero, Contato, Rodapé | `hero`, `contact`, `footer` | Preservar |
| `email-click` | E-mail | Contato, Rodapé | `contact`, `footer` | Preservar |
| `whatsapp-click` | WhatsApp | Contato | `contact` | Preservar; se entrar no Hero em implementação futura, usar `location=hero` somente após atualizar taxonomia |

Observação: o pedido da Home V2 inclui WhatsApp no Hero. A taxonomia atual permite `whatsapp-click` com `location=contact` e, na implementação, o helper aceita `hero`, `contact` e `footer` para canais profissionais. Antes de instrumentar WhatsApp no Hero, a documentação de analytics deve confirmar `location=hero` para `whatsapp-click` ou a implementação deve manter WhatsApp somente em Contato.

## 18. Acessibilidade

Requisitos para a Home V2:

- manter um único `h1`, no Hero, com `Waldir Escouto Pereira`;
- usar `h2` para títulos de seções;
- usar `h3` para projetos, experiências, especialidades e princípios;
- manter landmarks `header`, `main`, `section`, `nav` e `footer`;
- associar seções com `aria-labelledby`;
- usar links com textos claros;
- preservar foco visível;
- garantir contraste entre `#FFFFFF`/`#E5E5E5` e fundos `#000000`/`#14213D`;
- evitar laranja como texto pequeno sobre branco;
- garantir navegação por teclado;
- manter áreas de toque adequadas em CTAs e links;
- ocultar elementos decorativos de leitores de tela com `aria-hidden`;
- não depender apenas de cor para status;
- validar zoom em 200%;
- evitar overflow horizontal em 390px;
- não adicionar ARIA redundante quando HTML semântico for suficiente.

## 19. Elementos a Remover ou Evitar

A Home V2 não deve conter:

- IDE simulada;
- terminal;
- código decorativo;
- monogramas rejeitados;
- logo gráfica provisória;
- faixa WEPDEV com slogan;
- painéis laterais sem valor;
- repetição excessiva de tecnologias;
- cards com excesso de conteúdo aberto;
- timeline excessivamente estreita;
- glows em excesso;
- grandes áreas laranja;
- elementos não interativos com aparência de botão;
- imagens fictícias de projetos;
- claims, métricas, clientes ou resultados não cadastrados nos dados reais.

## 20. Conteúdo Reaproveitado

### 20.1 Manter

- nome profissional;
- cargo;
- proposta de valor backend enterprise, microsserviços e IA aplicada;
- CTA `Ver projetos`;
- currículo PDF;
- LinkedIn;
- GitHub;
- WhatsApp;
- e-mail;
- localização pública;
- disponibilidade;
- três projetos cadastrados;
- sete experiências cadastradas;
- seis grupos de tecnologias;
- três especialidades;
- oito princípios de engenharia;
- eventos Umami existentes;
- URLs reais existentes.

### 20.2 Reduzir na Primeira Leitura

- detalhes de problema e solução dos projetos;
- listas longas de tecnologias;
- listas de atividades profissionais;
- conceitos de projetos planejados;
- competências de experiências antigas.

### 20.3 Manter Acessível por Expansão

- contexto técnico dos projetos;
- principais atividades das experiências;
- conceitos e tecnologias planejadas quando relevantes.

## 21. Plano de Implementação

### Home V2.1 — Navbar e Hero

Escopo:

- simplificar Hero;
- usar assinatura tipográfica WEPDEV;
- remover qualquer retorno de logo gráfica provisória;
- incluir WhatsApp no Hero somente se a taxonomia de analytics aceitar `location=hero`;
- preservar CTAs e links reais.

Arquivos prováveis:

- `frontend/componentes/layout/Cabecalho.tsx`;
- `frontend/componentes/home/SecaoHero.tsx`;
- `frontend/constantes/analytics.ts`, apenas se WhatsApp no Hero exigir ajuste documental/tipado.

Dependências:

- aprovação da alternativa A ou B do Hero;
- decisão sobre WhatsApp no Hero.

Critérios de aceite:

- um único `h1`;
- Hero curto;
- projetos visíveis logo depois;
- sem IDE, terminal, código decorativo ou monograma;
- eventos preservados.

Riscos:

- Hero simples demais em desktop;
- duplicidade de CTAs;
- WhatsApp no Hero sem taxonomia documentada.

### Home V2.2 — Projetos

Escopo:

- reforçar projeto principal;
- reduzir texto aberto;
- preservar details progressivos;
- manter projetos reais.

Arquivos prováveis:

- `frontend/componentes/projetos/SecaoProjetos.tsx`;
- `frontend/componentes/projetos/CardProjeto.tsx`;
- `frontend/componentes/projetos/ListaTecnologiasProjeto.tsx`.

Dependências:

- conteúdo atual de `frontend/constantes/projetos.ts`.

Critérios de aceite:

- WEPDEV Portfolio em destaque;
- projetos planejados claramente identificados;
- repositório real preservado;
- sem imagens inventadas.

Riscos:

- card principal ficar pesado;
- detalhes progressivos escondidos demais.

### Home V2.3 — Tecnologias

Escopo:

- transformar lista de tecnologias em leitura editorial;
- reduzir aparência de botões;
- agrupar sem repetição desnecessária.

Arquivos prováveis:

- `frontend/componentes/tecnologias/SecaoTecnologias.tsx`;
- `frontend/constantes/tecnologias.ts`, somente se rótulos precisarem ajuste sem alterar fatos.

Dependências:

- inventário de tecnologias reais.

Critérios de aceite:

- seis grupos claros;
- itens não parecem clicáveis;
- boa leitura mobile.

Riscos:

- excesso de badges;
- repetição com Hero, Projetos e Experiência.

### Home V2.4 — Sobre e Experiência

Escopo:

- tornar Sobre mais curto;
- reorganizar experiência em lista editorial compacta;
- manter detalhes por expansão.

Arquivos prováveis:

- `frontend/componentes/home/SecaoSobre.tsx`;
- `frontend/componentes/experiencia/LinhaDoTempoExperiencia.tsx`;
- `frontend/componentes/experiencia/ItemExperiencia.tsx`;
- `frontend/app/page.tsx`, se composição da seção mudar.

Dependências:

- dados reais de `frontend/constantes/experiencias.ts`.

Critérios de aceite:

- não alterar fatos profissionais;
- reduzir densidade;
- manter tecnologias principais;
- leitura mobile sem timeline estreita.

Riscos:

- remover detalhes demais;
- tornar histórico profissional raso.

### Home V2.5 — Como Gero Valor e Princípios

Escopo:

- preservar três blocos de especialidades;
- tornar princípios mais leves;
- reduzir repetição com Sobre e Tecnologias.

Arquivos prováveis:

- `frontend/componentes/especialidades/SecaoEspecialidades.tsx`;
- `frontend/componentes/principios/SecaoPrincipiosEngenharia.tsx`;
- `frontend/componentes/principios/PrincipioEngenhariaCard.tsx`.

Dependências:

- dados de `frontend/constantes/especialidades.ts`;
- dados de `frontend/constantes/principiosEngenharia.ts`.

Critérios de aceite:

- três blocos de valor;
- oito princípios preservados;
- seção leve em mobile.

Riscos:

- repetição conceitual;
- excesso de cards similares.

### Home V2.6 — Contato e Rodapé

Escopo:

- simplificar encerramento;
- destacar CTA principal;
- preservar canais reais;
- manter rodapé enxuto.

Arquivos prováveis:

- `frontend/componentes/contato/SecaoContato.tsx`;
- `frontend/componentes/contato/CanalProfissionalCard.tsx`;
- `frontend/componentes/layout/Rodape.tsx`.

Dependências:

- `frontend/constantes/contatos.ts`;
- taxonomia do EP-009.

Critérios de aceite:

- WhatsApp visível em Contato;
- LinkedIn preferencial;
- currículo claro como PDF;
- rodapé não vira segunda seção Contato.

Riscos:

- excesso de canais com mesmo peso;
- duplicar WhatsApp no rodapé sem decisão.

### Home V2.7 — Responsividade e Acessibilidade

Escopo:

- validar 390px, 768px e 1440px;
- validar teclado;
- validar foco e contraste;
- validar ausência de overflow.

Arquivos prováveis:

- componentes alterados nas fases anteriores;
- `frontend/app/globals.css`, somente se houver correção de foco/contraste.

Dependências:

- implementação das fases V2.1 a V2.6.

Critérios de aceite:

- sem overflow horizontal;
- toque adequado;
- headings corretos;
- foco visível;
- sem informação apenas por cor.

Riscos:

- cards largos demais;
- CTAs quebrando em mobile;
- detalhes expansíveis pouco claros.

### Home V2.8 — Polimento Visual

Escopo:

- ajustar ritmo entre seções;
- reduzir glows;
- equilibrar laranja;
- refinar superfícies e divisores.

Arquivos prováveis:

- componentes visuais das seções;
- `frontend/app/globals.css`, apenas para tokens ou ajustes globais aprovados.

Dependências:

- validação visual da Home V2 em dispositivos principais.

Critérios de aceite:

- aparência claramente diferente da versão anterior;
- identidade WEPDEV mais própria;
- sem excesso de neon;
- sem densidade visual.

Riscos:

- redesenho se expandir além do escopo;
- alteração involuntária de conteúdo ou analytics.

## 22. Critérios de Aceite Visual

A Home V2 será aceita quando:

- a Home completa estiver representada;
- desktop, tablet e mobile estiverem definidos;
- projetos aparecerem logo após o Hero;
- nenhum conteúdo inventado existir;
- todos os canais forem considerados;
- analytics estiver mapeado;
- acessibilidade estiver prevista;
- logo gráfica não estiver definida;
- IDE e código decorativo forem eliminados;
- Hero estiver curto e direto;
- tecnologias não parecerem botões;
- experiência estiver resumida e legível;
- contato estiver claro;
- rodapé estiver enxuto;
- o plano de implementação estiver dividido em fases pequenas.

## 23. Decisões Pendentes

- Confirmar se WhatsApp deve aparecer no Hero já na V2.1 ou permanecer apenas em Contato.
- Confirmar se o CTA da Navbar deve ser `Contato` ou `Currículo`.
- Confirmar se o Hero deve seguir a Alternativa A imediatamente ou se a Alternativa B terá um painel abstrato simples.
- Confirmar se `Princípios de engenharia` deve ganhar `id` próprio ou permanecer sem item no menu.
- Confirmar se o grupo `Qualidade e DevOps` será renomeado visualmente para `Ferramentas de engenharia`.
- Confirmar se detalhes da primeira experiência devem vir abertos ou fechados por padrão.

## 24. Fora de Escopo

Não fazem parte da etapa UX-001:

- alterar frontend;
- alterar CSS;
- alterar Tailwind;
- alterar componentes React;
- alterar imagens;
- alterar infraestrutura;
- criar logo gráfica;
- criar favicon;
- criar Open Graph image;
- criar novas páginas;
- criar backend;
- criar novas métricas;
- criar novos eventos Umami;
- alterar package.json;
- alterar package-lock.json;
- instalar dependências;
- publicar em produção;
- commit;
- push.

## 25. Definição de Pronto

Este documento estará pronto quando:

- a ordem final da Home V2 estiver definida;
- Navbar, Hero, Projetos, Tecnologias, Sobre, Experiência, Como gero valor, Princípios, Contato e Rodapé estiverem especificados;
- houver wireframes ASCII para 1440px, 768px e 390px;
- o conteúdo real estiver inventariado;
- eventos Umami estiverem mapeados;
- acessibilidade estiver prevista;
- elementos rejeitados estiverem listados;
- plano de implementação estiver dividido em fases;
- nenhuma alteração de código tiver sido realizada.
