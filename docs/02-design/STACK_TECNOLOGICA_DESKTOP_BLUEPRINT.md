# Stack Tecnológica — Desktop Blueprint

## 1. Propósito do Blueprint

Este documento é a planta visual e editorial definitiva da seção Stack Tecnológica da Home V2 do WEPDEV Portfolio.

Ele transforma os requisitos do EP-011 e do wireframe aprovado em regras de composição que podem orientar a implementação futura sem inventar conteúdo, alterar a identidade da marca ou transformar a seção em um inventário visual de ferramentas.

**A seção deve parecer documentação técnica de engenharia e não um dashboard.**

**As tecnologias representam evidências de competência técnica e não elementos de interação.**

Isso significa que os nomes da stack devem ser apresentados como informação contextualizada. Eles não devem assumir aparência de botões, controles, rankings, indicadores de proficiência ou itens que exigem clique.

## 2. Objetivos

### 2.1 Objetivo de comunicação

Explicar como o repertório técnico de Waldir Escouto Pereira se organiza em torno de backend Java, arquitetura, integrações, mensageria, dados, containers, cloud, qualidade, DevOps e IA aplicada.

### 2.2 Objetivo de experiência

Permitir que o visitante compreenda a stack em uma leitura rápida, encontre categorias relevantes para sua avaliação e siga para Projetos ou Experiência quando precisar de evidências adicionais.

### 2.3 Objetivo de posicionamento

Reforçar que a WEPDEV representa Engenharia de Software. Java, Spring Boot, Quarkus, Docker, Kubernetes e IA aparecem como meios para construir, testar, operar e evoluir soluções.

### 2.4 Objetivo de confiança

Distinguir tecnologias reais, tecnologias associadas a estudos planejados e a stack de execução do próprio portfólio. Nenhum nível de conhecimento será inferido por tamanho, cor, percentual ou decoração.

## 3. Contexto na Home V2

A seção aparece depois de Projetos em destaque e antes de Sobre:

```text
Hero
  ↓
Projetos em destaque — evidência de execução
  ↓
Stack Tecnológica — repertório organizado
  ↓
Sobre — visão profissional
```

Essa posição evita que o visitante receba uma lista de tecnologias antes de entender quem é o profissional e o que ele constrói.

## 4. Público e Cenários de Uso

| Público | Necessidade principal | Resposta da seção |
| --- | --- | --- |
| Recrutador técnico | Identificar aderência rapidamente | Categorias claras e termos reconhecíveis |
| Tech lead ou arquiteto | Avaliar coerência de repertório | Finalidade técnica por grupo |
| Gestor de engenharia | Entender áreas de contribuição | Linguagem de responsabilidade e evolução |
| Desenvolvedor | Verificar precisão e contexto | Itens reais conectados a evidências |
| Visitante de currículo ou LinkedIn | Ler em pouco tempo | Hierarquia forte e baixa densidade visual |

## 5. Narrativa da Seção

A narrativa deve conduzir da intenção para a evidência:

```text
Tecnologias e ferramentas
        ↓
Stack orientada a backend enterprise, arquitetura e IA aplicada
        ↓
Responsabilidades técnicas
        ↓
Tecnologias relacionadas
        ↓
Projetos e experiências como contexto
```

O visitante não precisa ler todos os itens para entender a proposta. O título de cada categoria e sua descrição devem ser suficientes para uma primeira leitura.

## 6. Hierarquia Visual

### Nível 1 — Identidade da seção

Label curta:

`TECNOLOGIAS E FERRAMENTAS`

Função: localizar a seção e criar uma entrada editorial discreta.

### Nível 2 — Título

Título recomendado:

`Stack orientada a backend enterprise, arquitetura e IA aplicada.`

Função: explicar o posicionamento antes da enumeração.

### Nível 3 — Introdução

Texto recomendado:

`Agrupamento das tecnologias reais presentes nos projetos, experiências e estudos planejados do portfólio.`

Função: reduzir ambiguidade e preparar a leitura dos grupos.

### Nível 4 — Categoria

Cada categoria recebe um título semântico, uma finalidade e uma lista controlada.

### Nível 5 — Item técnico

Os nomes das tecnologias são informação de apoio. Devem ser legíveis, mas não competir com o título ou com a finalidade do grupo.

## 7. Grid Desktop

### 7.1 Grade principal

Em 1440px, a seção deve usar um container alinhado ao restante da Home, com largura máxima controlada e respiro lateral consistente.

```text
┌────────────────────────────────────────────────────────────────────────────────┐
│ container alinhado com Hero, Projetos, Sobre e Contato                         │
│                                                                                │
│ TECNOLOGIAS E FERRAMENTAS                                                     │
│ Stack orientada a backend enterprise, arquitetura e IA aplicada.              │
│ Introdução curta                                                               │
│                                                                                │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐ │
│  │ Java e frameworks    │  │ Arquitetura e        │  │ Mensageria e dados   │ │
│  │ finalidade           │  │ integrações          │  │ finalidade           │ │
│  │ itens               │  │ finalidade           │  │ itens               │ │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────────┘ │
│                                                                                │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐ │
│  │ Containers e cloud   │  │ Qualidade e DevOps   │  │ IA aplicada          │ │
│  │ finalidade           │  │ finalidade           │  │ finalidade           │ │
│  │ itens               │  │ itens               │  │ itens               │ │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Regra de colunas

- três colunas são preferenciais em telas largas quando nenhuma descrição ficar comprimida;
- as colunas devem possuir largura equivalente ou uma diferença pequena;
- as duas linhas devem manter ritmo vertical, mas não precisam ter altura idêntica;
- uma categoria não deve receber uma coluna maior apenas para acomodar mais badges;
- se o conteúdo não couber com conforto, a grade deve cair para duas colunas.

### 7.3 Relação entre grupos

Os grupos não devem parecer seis produtos independentes. A leitura precisa ser de um sistema de competências organizado. Para isso:

- bordas são opcionais e discretas;
- divisores podem substituir contornos completos;
- superfícies devem ser usadas com moderação;
- nenhum grupo recebe cor própria;
- o laranja aparece em label, foco ou pequenos marcadores.

## 8. Grid Tablet

Em 768px, o layout deve usar duas colunas:

```text
┌──────────────────────────────────────────────┐
│ TECNOLOGIAS E FERRAMENTAS                   │
│ Título e introdução                         │
│                                              │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ Java e frameworks  │ │ Arquitetura       │ │
│ │ finalidade         │ │ e integrações     │ │
│ │ itens              │ │ finalidade/itens  │ │
│ └────────────────────┘ └───────────────────┘ │
│                                              │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ Mensageria e dados │ │ Containers/cloud  │ │
│ └────────────────────┘ └───────────────────┘ │
│                                              │
│ ┌────────────────────┐ ┌───────────────────┐ │
│ │ Qualidade/DevOps   │ │ IA aplicada       │ │
│ └────────────────────┘ └───────────────────┘ │
└──────────────────────────────────────────────┘
```

Regras:

- manter duas colunas enquanto título, descrição e itens forem confortáveis;
- reduzir a quantidade de itens por linha, nunca reduzir a tipografia a ponto de dificultar leitura;
- permitir que uma categoria cresça verticalmente;
- evitar três colunas estreitas;
- preservar alinhamento e espaço entre os grupos.

## 9. Grid Mobile

Em 390px, todos os grupos devem se tornar uma sequência editorial vertical:

```text
┌──────────────────────────────────────┐
│ TECNOLOGIAS E FERRAMENTAS            │
│ Stack orientada a backend...         │
│ Introdução                           │
│                                      │
│ JAVA E FRAMEWORKS                    │
│ finalidade curta                     │
│ Java · Java 21                       │
│ Spring Boot · Quarkus               │
│ Jakarta EE                           │
│ ──────────────────────────────────── │
│ ARQUITETURA E INTEGRAÇÕES            │
│ finalidade curta                     │
│ APIs REST · Microsserviços           │
│ OpenAPI · Arquitetura Hexagonal     │
│ ──────────────────────────────────── │
│ MENSAGERIA E DADOS                   │
│ finalidade curta                     │
│ Kafka · RabbitMQ                     │
│ PostgreSQL · MongoDB · Redis         │
│ ──────────────────────────────────── │
│ CONTAINERS E CLOUD                   │
│ finalidade curta                     │
│ Docker · Kubernetes · OpenShift      │
│ AWS · Azure · Helm                   │
│ ──────────────────────────────────── │
│ QUALIDADE E DEVOPS                   │
│ finalidade curta                     │
│ JUnit · Mockito · Testcontainers     │
│ SonarQube · JaCoCo · CI/CD           │
│ ──────────────────────────────────── │
│ IA APLICADA                          │
│ finalidade curta                     │
│ OpenAI · Ollama · Spring AI · RAG    │
└──────────────────────────────────────┘
```

Não usar uma grade de duas colunas no mobile. A prioridade é preservar a ordem e a leitura, não economizar altura.

## 10. Categorias da Stack

As seis categorias abaixo são a estrutura oficial da seção e devem partir da fonte real de dados do produto.

### 10.1 Java e frameworks

**Finalidade:** base para construção e evolução de aplicações backend.

**Itens:** Java, Java 21, Spring Boot, Quarkus e Jakarta EE.

**Emoção desejada:** confiança e solidez. O visitante deve perceber uma base consistente, sem sensação de lista genérica.

**Prioridade:** máxima entre as categorias, por representar a base principal do posicionamento profissional.

### 10.2 Arquitetura e integrações

**Finalidade:** contratos, serviços distribuídos e comunicação entre sistemas corporativos.

**Itens:** APIs REST, Microsserviços, OpenAPI e Arquitetura Hexagonal.

**Emoção desejada:** clareza e maturidade. O visitante deve perceber capacidade de pensar além da implementação isolada.

**Prioridade:** alta, pois aproxima a stack dos problemas de arquitetura.

### 10.3 Mensageria e dados

**Finalidade:** processamento assíncrono, persistência e integração com bases relacionais e NoSQL.

**Itens:** Apache Kafka, RabbitMQ, PostgreSQL, MongoDB e Redis.

**Emoção desejada:** robustez e capacidade de integração. A categoria deve sugerir sistemas que processam informação com responsabilidade.

**Prioridade:** alta, sem usar gráficos ou indicadores de volume.

### 10.4 Containers e cloud

**Finalidade:** empacotamento, entrega e execução de aplicações em ambientes modernos.

**Itens:** Docker, Kubernetes, OpenShift, AWS, Azure e Helm.

**Emoção desejada:** prontidão operacional. O visitante deve relacionar desenvolvimento a entrega e execução.

**Prioridade:** média-alta, com descrição objetiva e sem aparência de console de infraestrutura.

### 10.5 Qualidade e DevOps

**Finalidade:** reduzir regressões, aumentar confiabilidade e apoiar evolução segura.

**Itens:** JUnit, Mockito, Testcontainers, SonarQube, JaCoCo e CI/CD.

**Emoção desejada:** responsabilidade e disciplina. Esta categoria deve equilibrar o destaque dado a frameworks e cloud.

**Prioridade:** média-alta, pois comunica práticas que sustentam a entrega.

### 10.6 IA aplicada

**Finalidade:** uso de Inteligência Artificial como apoio técnico para pesquisa, documentação e desenvolvimento.

**Itens:** OpenAI, Ollama, Spring AI e RAG.

**Emoção desejada:** curiosidade com julgamento técnico. IA deve aparecer como aplicação orientada por engenharia, não como promessa abstrata.

**Prioridade:** média, com acento visual controlado e contexto textual suficiente.

## 11. Arquitetura da Informação

### 11.1 Cabeçalho da seção

O cabeçalho não deve estar dentro de card, painel ou superfície fechada.

Conteúdo:

- label: `Tecnologias e ferramentas`;
- título: stack orientada a backend enterprise, arquitetura e IA aplicada;
- descrição: agrupamento das tecnologias reais presentes nos projetos, experiências e estudos planejados.

### 11.2 Grupo de categoria

Cada categoria possui a seguinte ordem:

1. título;
2. finalidade;
3. itens técnicos;
4. contexto futuro, somente quando necessário.

### 11.3 Tecnologias do próprio produto

Next.js, React, TypeScript, Tailwind CSS, App Router, Server Components, Docker, Cloudflare Tunnel e Umami podem ser mencionados em contexto específico do WEPDEV Portfolio. Não devem duplicar ou substituir os seis grupos profissionais.

### 11.4 Relacionamento com evidências

A seção não precisa conter links em cada tecnologia. A navegação para Projetos e Experiência já oferece o caminho para evidências. Um link futuro só deve existir quando houver destino real e especificação própria.

## 12. Tipografia

O blueprint segue os tokens de tipografia definidos para a marca.

| Elemento | Família | Função | Diretriz |
| --- | --- | --- | --- |
| Label da seção | JetBrains Mono ou equivalente técnico | Localização e contexto | Pequena, uppercase, laranja pontual |
| Título da seção | Space Grotesk | Hierarquia editorial | Maior elemento textual da seção |
| Descrição da seção | Inter | Explicação de contexto | Leitura contínua, largura controlada |
| Título de categoria | Space Grotesk | Identificação de responsabilidade | Forte, mas menor que o título da seção |
| Finalidade | Inter | Explicar o papel do grupo | Cinza-claro, curta e legível |
| Tecnologia | Inter ou JetBrains Mono | Item técnico | Legível, sem aparência de código executável |
| Contexto auxiliar | Inter | Planejamento ou observação | Menor destaque, nunca ilegível |

### 12.1 Regras tipográficas

- não usar escala de Hero nos grupos;
- não reduzir tecnologia a caption ilegível;
- evitar letter spacing negativo;
- não usar tamanho de fonte dependente diretamente da viewport;
- manter títulos de categoria distinguíveis em zoom de 200%;
- não usar peso ou tamanho como indicador de proficiência.

## 13. Espaçamento e Ritmo

### 13.1 Tokens de referência

Usar a escala de múltiplos de 4px do Design Tokens WEPDEV:

- `space.4` para relações compactas;
- `space.6` para respiro interno;
- `space.8` para separação entre elementos do grupo;
- `space.12` para separação entre cabeçalho e grade;
- `space.16` e `space.20` para respiro de seção em telas maiores.

### 13.2 Ritmo desktop

O desktop deve alternar:

```text
orientação ampla
      ↓
grade de categorias
      ↓
linha de fechamento e continuidade
```

Não preencher o espaço entre as duas linhas da grade com elementos decorativos. O vazio é parte do ritmo editorial.

### 13.3 Ritmo mobile

No mobile, cada categoria deve formar um bloco de leitura completo. O divisor indica mudança de assunto, não separação de cards independentes.

### 13.4 Áreas de respiro

- cabeçalho da seção deve respirar antes da primeira categoria;
- título de grupo deve respirar antes da finalidade;
- finalidade deve respirar antes dos itens;
- último grupo deve terminar com espaço suficiente antes de Sobre;
- nenhuma categoria deve ser espremida para caber na primeira viewport.

## 14. Cores e Superfícies

### 14.1 Base

- fundo principal: preto ou background primário;
- fundo secundário: navy ou background secondary;
- superfícies: navy/surface de baixa intensidade;
- títulos: branco;
- descrições: cinza-claro;
- itens técnicos: branco ou cinza conforme prioridade;
- bordas e divisores: border discreta;
- acento: laranja pontual conforme a paleta aprovada.

### 14.2 Uso intencional

O laranja pode ser usado em:

- label da seção;
- marcador pequeno;
- foco;
- divisor ativo;
- detalhe de hover.

O laranja não deve preencher todas as categorias nem indicar um suposto nível de domínio.

### 14.3 Proibições visuais

- não usar uma cor diferente por tecnologia;
- não usar gradiente intenso em cada grupo;
- não aplicar glow em todas as categorias;
- não transformar cada grupo em superfície elevada pesada;
- não usar verde, vermelho ou cores semânticas para classificar conhecimento.

## 15. Princípios de UX, Motion, Hover e Focus

### 15.1 Princípios de UX

- contexto antes da enumeração;
- responsabilidade antes da ferramenta;
- evidência antes da promessa;
- leitura por escaneamento;
- agrupamento semântico;
- separação explícita entre utilizado e planejado;
- nenhuma escala visual de proficiência;
- nenhum significado dependente apenas de cor;
- itens informativos não devem parecer controles;
- interação somente quando adicionar valor real;
- progressão natural para Projetos e Experiência;
- composição editorial antes da decoração.

### 15.2 Motion

A seção é predominantemente informativa. Movimento deve ser mínimo:

- duração rápida para foco e alterações de estado;
- duração normal para hover discreto em elementos realmente interativos;
- nenhum movimento automático;
- nenhum carregamento progressivo que esconda conteúdo essencial;
- respeito a `prefers-reduced-motion`.

### 15.3 Hover

Como as tecnologias representam informação e não elementos de interação, elas não devem receber hover de botão.

Se a implementação tiver um link real para uma evidência relacionada:

- alterar discretamente a cor do texto;
- usar underline ou borda curta;
- evitar escala;
- evitar glow;
- não deslocar o layout.

### 15.4 Focus

Todo link ou controle futuro deve possuir:

- foco visível;
- contraste suficiente;
- área de foco sem corte;
- ordem coerente com a leitura;
- compatibilidade com teclado.

Itens informativos sem ação não devem receber foco artificial.

## 16. Conteúdo Permitido

- seis categorias oficiais;
- títulos semânticos;
- descrições de finalidade;
- tecnologias presentes em `frontend/constantes/tecnologias.ts`;
- contexto textual de projeto, experiência ou estudo;
- indicação de planejado, previsto ou em aprofundamento;
- itens da stack de execução do portfólio quando isso esclarecer o produto;
- listas curtas e legíveis;
- divisores editoriais;
- referências aos Projetos e à Experiência por navegação existente.

## 17. Conteúdo Proibido

Não utilizar:

- barras de progresso;
- estrelas;
- porcentagens;
- níveis de conhecimento;
- rankings;
- badges excessivos;
- dashboards;
- excesso de cards;
- métricas inventadas;
- anos de experiência não confirmados;
- afirmações de domínio absoluto;
- logos remotos sem finalidade real;
- ícones que substituam nomes;
- links falsos;
- filtros ou busca não especificados;
- animações contínuas;
- clientes ou conteúdo confidencial;
- tecnologias ausentes da fonte oficial sem decisão registrada;
- linguagem que apresente planejamento como entrega concluída.

## 18. Acessibilidade e Inclusão

### 18.1 Estrutura semântica

- um `h2` para a seção;
- um `h3` por categoria;
- listas semânticas para itens;
- descrições associadas visualmente ao respectivo título;
- landmarks da Home preservados;
- nenhum texto essencial em imagem.

### 18.2 Percepção

- significado não pode depender somente de cor;
- status de planejamento deve ser textual;
- contraste deve funcionar em preto e navy;
- o tamanho não pode transformar itens em microtexto;
- divisores devem ser sutis, mas não substituir headings.

### 18.3 Operação

- teclado deve percorrer somente elementos acionáveis;
- foco deve ser visível;
- zoom de 200% deve preservar conteúdo;
- mobile não deve ter overflow horizontal;
- nenhum tooltip deve conter informação exclusiva.

## 19. Comportamento por Dispositivo

### 19.1 Desktop

- grade de três colunas em 1440px quando houver espaço;
- duas linhas com ritmo consistente;
- conteúdo alinhado ao container global;
- maior respiro horizontal;
- categoria continua informativa sem parecer card de produto.

### 19.2 Tablet

- grade de duas colunas;
- descrições podem aumentar em altura;
- itens quebram naturalmente;
- evitar três colunas estreitas;
- manter a ordem da leitura da esquerda para a direita e de cima para baixo.

### 19.3 Mobile

- uma coluna;
- categorias em sequência vertical;
- divisor entre assuntos;
- título e descrição sempre antes dos itens;
- nenhuma categoria com largura fixa;
- texto completo sem corte;
- espaçamento reduzido com preservação da escala.

## 20. Analytics, SEO e Performance

### 20.1 Analytics

A seção não deve criar eventos para o simples aparecimento ou leitura de tecnologias. Os eventos existentes permanecem:

- `navigation-click`;
- `primary-cta-click`;
- `curriculum-click`;
- `project-repository-click`;
- `linkedin-click`;
- `github-click`;
- `email-click`;
- `whatsapp-click`.

O script global, Website ID e `data-performance="true"` não fazem parte de alterações deste blueprint.

### 20.2 SEO

Preservar metadata, canonical, `robots.ts`, `sitemap.ts`, idioma `pt-BR` e o único `h1` da página. Não criar páginas individuais nem URLs para categorias.

### 20.3 Performance

- priorizar Server Components;
- não adicionar dependências;
- não carregar imagens ou logos remotos para representar tecnologias;
- não usar canvas, WebGL ou dashboards;
- não criar JavaScript imperativo;
- preservar o build standalone;
- evitar layout shift;
- manter conteúdo inicial renderizado no servidor.

## 21. Critérios de Aceite

- o Blueprint define a hierarquia visual completa;
- o grid desktop está especificado;
- tablet e mobile possuem comportamento próprio;
- as seis categorias estão descritas;
- cada categoria possui finalidade, itens e emoção desejada;
- tipografia e espaçamentos estão definidos por função;
- ritmo de leitura está documentado;
- cores seguem a identidade WEPDEV;
- hover e focus estão definidos sem criar interação artificial;
- tecnologias são apresentadas como informação, não como controles;
- a seção parece documentação técnica de engenharia e não um dashboard;
- conteúdo permitido e proibido está explícito;
- acessibilidade e responsividade estão especificadas;
- analytics, SEO e performance estão preservados;
- não há alteração de frontend, React, Tailwind ou CSS nesta entrega;
- não há dependências, imagens remotas ou infraestrutura nova;
- a implementação futura poderá ser validada em 390x844, 768x1024 e 1440x900.

## 22. Definition of Done

O Blueprint estará pronto quando:

- o documento for a referência visual principal da seção Stack Tecnológica;
- a implementação puder ser feita sem inventar categorias ou tecnologias;
- a composição desktop estiver clara em nível de container, grid e hierarquia;
- tablet e mobile estiverem definidos como reorganizações de leitura, não apenas reduções de tamanho;
- cada categoria comunicar responsabilidade e emoção adequada;
- tipografia, espaçamento, cores, motion, hover e focus estiverem documentados;
- as proibições de dashboard e escala artificial de conhecimento estiverem explícitas;
- acessibilidade, analytics, SEO e performance estiverem protegidos;
- os critérios de aceite puderem ser verificados durante a implementação;
- nenhum código ou configuração tiver sido alterado.

## 23. Fora de Escopo

Esta entrega não inclui:

- alteração de frontend;
- alteração de React;
- alteração de Tailwind;
- alteração de CSS;
- alteração de componentes;
- alteração de dados da stack;
- criação de logos ou ícones;
- criação de imagens;
- alteração de analytics;
- criação de novos eventos;
- alteração de SEO;
- alteração de metadata, robots ou sitemap;
- alteração de Docker ou Compose;
- alteração de Cloudflare;
- alteração de `package.json`;
- alteração de `package-lock.json`;
- instalação de dependências;
- criação de dashboard;
- criação de filtros ou busca;
- criação de páginas individuais de tecnologia;
- commit;
- push.
