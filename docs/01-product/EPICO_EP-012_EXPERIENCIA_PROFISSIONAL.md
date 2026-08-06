# EP-012 — Experiência Profissional

## 1. Identificação

- Código: EP-012
- Nome: Experiência Profissional
- Produto: WEPDEV Portfolio
- Sprint: 9 — Trajetória e Impacto Profissional
- Prioridade: Alta
- Estado: Pronto para refinamento
- Responsável: Waldir Escouto Pereira

## 2. Visão do Produto

A seção Experiência Profissional é responsável por apresentar a trajetória de Waldir Escouto Pereira como uma história de evolução técnica, responsabilidade e impacto em diferentes contextos de engenharia de software.

Ela não deve ser uma cópia visual do currículo nem uma lista de empregos. O visitante precisa entender como a atuação evoluiu de sustentação e desenvolvimento de aplicações corporativas para backend enterprise, sistemas distribuídos, microsserviços, segurança, qualidade, cloud, DevOps e arquitetura.

**A seção deve contar uma história de evolução profissional.**

O foco da seção está no impacto e nas entregas, não na quantidade de tecnologias. Tecnologias aparecem como evidências do contexto de cada experiência, nunca como substituto da narrativa profissional.

## 3. Objetivos

### 3.1 Objetivo principal

Comunicar uma trajetória profissional progressiva, tecnicamente consistente e baseada em responsabilidades reais, mantendo leitura rápida para recrutadores e possibilidade de aprofundamento para perfis técnicos.

### 3.2 Objetivos específicos

- apresentar cargo, empresa e período antes dos detalhes;
- explicar a contribuição principal de cada experiência;
- evidenciar evolução de sistemas corporativos para arquiteturas distribuídas;
- mostrar a ampliação de responsabilidade em qualidade, segurança, cloud e operação;
- distinguir experiências atuais, anteriores e mais antigas sem julgamento visual artificial;
- reduzir a densidade da primeira leitura;
- manter detalhes técnicos acessíveis sob demanda;
- preservar os fatos públicos já cadastrados;
- conectar Experiência com Projetos e Stack Tecnológica;
- apoiar avaliação de senioridade sem usar escalas ou percentuais;
- funcionar bem para recrutadores com pouco tempo;
- oferecer profundidade para tech leads, arquitetos e desenvolvedores.

## 4. Problemas da Versão Atual

A implementação atual apresenta as experiências em uma timeline com cards densos. Cada card reúne resumo, lista completa de tecnologias, competências, atividades e detalhes expansíveis. Essa composição cria alguns problemas:

- a quantidade de conteúdo torna a leitura longa e repetitiva;
- tecnologias ocupam espaço semelhante ao impacto da experiência;
- a experiência destacada pode abrir detalhes demais antes de o visitante escolher aprofundar;
- o visitante precisa interpretar muitos itens para entender a evolução;
- experiências recentes e antigas possuem peso visual muito parecido;
- a timeline pode ficar estreita em desktop e cansativa no mobile;
- competências repetem a seção Stack Tecnológica;
- atividades detalhadas competem com cargo, empresa e período;
- a narrativa de progressão entre contextos fica implícita;
- a seção pode parecer um histórico operacional em vez de uma trajetória;
- cards repetidos dão aparência de inventário;
- não existe uma separação forte entre resumo inicial e aprofundamento técnico.

O EP-012 não deve apenas trocar cores ou espaçamentos. A organização editorial precisa mudar para priorizar narrativa, escaneabilidade e contexto.

## 5. Personas

### 5.1 Recrutador técnico

Precisa identificar rapidamente cargo, empresa, período, área de atuação e tipo de contribuição. Quer avaliar aderência sem ler todas as atividades.

### 5.2 Tech lead ou arquiteto

Deseja compreender a evolução de backend, microsserviços, integrações, segurança, observabilidade, cloud e qualidade. Pode aprofundar os detalhes de uma ou mais experiências.

### 5.3 Gestor de engenharia

Busca sinais de responsabilidade, evolução, confiabilidade e capacidade de atuar em ambientes corporativos complexos. Valoriza impacto descrito com precisão, sem métricas inventadas.

### 5.4 Desenvolvedor ou par técnico

Pode investigar tecnologias, práticas e desafios para entender o repertório aplicado. Precisa de detalhes reais, mas não de uma lista completa aberta por padrão.

### 5.5 Visitante vindo do currículo

Já conhece parte da trajetória e usa o portfólio para validar contexto, projetos e maturidade técnica. Deve localizar rapidamente as experiências mais relevantes.

## 6. Jornada de Leitura

A experiência deve seguir uma leitura do resumo para a evidência:

```text
Onde Waldir atua hoje
        ↓
Quais responsabilidades assume
        ↓
Como sua atuação evoluiu
        ↓
Quais desafios técnicos aparecem na trajetória
        ↓
Quais detalhes podem ser aprofundados
```

### 6.1 Entrada

O visitante encontra uma introdução curta que explica a trajetória pública em desenvolvimento Java, backend e evolução de aplicações corporativas.

### 6.2 Experiência atual

A experiência mais recente deve aparecer primeiro, com maior clareza editorial, sem transformar a seção em um ranking. Ela representa o ponto atual da trajetória.

### 6.3 Evolução

As experiências anteriores devem mostrar mudanças de contexto e ampliação de responsabilidades: sustentação, desenvolvimento de APIs, microsserviços, integrações, segurança, qualidade, cloud, observabilidade e arquitetura.

### 6.4 Aprofundamento

Cada experiência deve apresentar inicialmente apenas um resumo curto, com detalhes acessíveis sob demanda. O visitante escolhe quando abrir atividades, tecnologias ou competências específicas.

### 6.5 Continuidade

Depois da seção, a Home deve conduzir naturalmente para Como gero valor, Princípios de Engenharia ou Contato, conforme a ordem da Home V2.

**A leitura deve ser rápida para recrutadores e aprofundável para perfis técnicos.**

## 7. Arquitetura da Informação

### 7.1 Nível da página

A seção permanece depois de Sobre e antes de Como gero valor, de acordo com a jornada da Home V2:

```text
Projetos
  ↓
Stack Tecnológica
  ↓
Sobre
  ↓
Experiência Profissional
  ↓
Como gero valor
```

### 7.2 Nível da seção

A seção deve conter:

- label curta;
- título principal;
- introdução breve;
- sequência cronológica reversa;
- experiências individuais;
- detalhes progressivos;
- transição para a próxima seção.

### 7.3 Nível da experiência

Cada experiência deve conter inicialmente:

1. empresa;
2. cargo;
3. período;
4. resumo curto;
5. indicação compacta de área ou contribuição;
6. controle de aprofundamento, quando houver detalhes relevantes.

Atividades, tecnologias e competências não devem competir com esses elementos iniciais.

### 7.4 Fonte de verdade

Os dados devem continuar vindo de `frontend/constantes/experiencias.ts` e do domínio tipado de experiência. O redesign não autoriza escrever fatos profissionais diretamente no JSX nem criar uma segunda fonte de dados.

## 8. Estrutura Editorial da Seção

### 8.1 Cabeçalho

Label recomendada:

`EXPERIÊNCIA`

Título recomendado:

`Evolução profissional em engenharia de software.`

Descrição recomendada:

`Resumo público da atuação em desenvolvimento Java, backend e evolução de aplicações corporativas.`

O título deve comunicar trajetória, não simplesmente repetir “Experiência profissional”.

### 8.2 Linha de evolução

A sequência visual deve criar continuidade entre as experiências sem usar uma linha do tempo pesada ou excessivamente estreita. Um marcador discreto ou divisor pode indicar passagem temporal, mas o texto deve carregar o significado.

### 8.3 Experiência em destaque

A experiência atual, Grupo Casas Bahia, pode receber maior prioridade editorial por ser o contexto profissional mais recente e estar marcada como destaque nos dados atuais. Essa prioridade deve ser moderada:

- resumo visível;
- maior clareza de hierarquia;
- detalhes fechados inicialmente;
- sem indicadores artificiais de senioridade;
- sem afirmar impacto quantitativo que não esteja cadastrado.

### 8.4 Experiências anteriores

Matera, 200DEV, CBYK Consultoria, Atos, BlendIt e Plennus TI devem permanecer acessíveis e em ordem cronológica reversa. Experiências antigas não devem ser apagadas para simplificar a primeira leitura; seus detalhes devem apenas ser progressivos.

## 9. Organização Cronológica

A ordem oficial é da experiência mais recente para a mais antiga:

| Ordem | Empresa | Cargo | Período |
| ---: | --- | --- | --- |
| 1 | Grupo Casas Bahia | Engenheiro de Software Sênior | janeiro de 2026 — atual |
| 2 | Matera | Desenvolvedor Full Stack | fevereiro de 2025 — janeiro de 2026 |
| 3 | 200DEV | Desenvolvedor Web/Java | abril de 2024 — janeiro de 2025 |
| 4 | CBYK Consultoria | Desenvolvedor Web/Java | janeiro de 2024 — abril de 2024 |
| 5 | Atos | Desenvolvedor Web/Java | julho de 2022 — janeiro de 2024 |
| 6 | BlendIt | Desenvolvedor Full Stack | fevereiro de 2022 — julho de 2022 |
| 7 | Plennus TI | Desenvolvedor Full Stack | janeiro de 2019 — fevereiro de 2022 |

Regras:

- não inverter a ordem para destacar tecnologias específicas;
- não agrupar empresas por stack;
- não esconder o período;
- não usar uma escala visual para indicar valor;
- manter o período como texto legível;
- preservar os nomes públicos já cadastrados.

## 10. Conteúdo Obrigatório

Cada experiência deve apresentar inicialmente:

- empresa;
- cargo;
- período;
- resumo curto;
- área de contribuição ou competência principal, quando derivada dos dados;
- acesso a detalhes, quando houver informações adicionais relevantes.

Os detalhes podem conter:

- atividades;
- tecnologias;
- competências desenvolvidas;
- contexto de segurança;
- integração, mensageria, dados ou cloud;
- práticas de qualidade;
- observabilidade;
- modernização de aplicações;
- evolução de sistemas legados;
- colaboração técnica;
- processos de entrega.

Todo conteúdo deve ser derivado da fonte pública atual. Os resumos existentes são a base preferencial para a primeira leitura.

## 11. Conteúdo Proibido

Não incluir:

- métricas de impacto que não estejam cadastradas;
- percentuais de melhoria não comprovados;
- números de usuários, transações ou economia não confirmados;
- nomes de clientes sem autorização;
- sistemas internos, URLs privadas ou detalhes confidenciais;
- código proprietário;
- credenciais, tokens ou dados de produção;
- tecnologias que não estejam na experiência correspondente;
- cargos diferentes dos dados oficiais;
- datas alteradas para criar uma narrativa artificial;
- afirmações de liderança ou gestão não registradas;
- promessas de resultado;
- estrelas, notas ou rankings de experiência;
- barras de senioridade;
- quantidade de tecnologias como prova de impacto;
- excesso de badges;
- cards independentes para cada tecnologia;
- filtros ou busca sem necessidade aprovada;
- uma experiência apresentada como mais valiosa apenas por cor;
- detalhes abertos automaticamente sem necessidade.

## 12. Critérios de UX

- impacto e responsabilidade antes da lista de ferramentas;
- experiência atual primeiro;
- ordem cronológica reversa preservada;
- resumo inicial curto;
- aprofundamento sob demanda;
- leitura rápida para recrutadores;
- leitura aprofundável para perfis técnicos;
- cargo, empresa e período visualmente localizáveis;
- tecnologias como evidência contextual;
- nenhuma escala artificial de conhecimento;
- nenhum detalhe essencial escondido sem indicação;
- controles de expansão com texto claro;
- progressão visual entre experiências;
- fatos preservados mesmo quando a apresentação for compactada;
- repetição reduzida em relação à Stack Tecnológica;
- ausência de painel ou dashboard;
- continuidade natural para Como gero valor e Princípios.

## 13. Critérios de UI

### 13.1 Composição

A preferência é por uma lista editorial ampla, com cada experiência ocupando uma linha ou bloco horizontal em desktop. A empresa e o cargo devem formar o eixo principal; período e resumo devem funcionar como metadados e narrativa.

### 13.2 Superfícies

- reduzir o uso de cards repetidos;
- preferir divisores horizontais e espaços de respiro;
- usar surface somente quando necessário para destacar a experiência atual;
- não criar cards dentro de cards;
- não usar uma caixa independente para cada tecnologia.

### 13.3 Marcadores

Um marcador temporal, linha ou pequeno indicador pode ser usado como elemento editorial. Ele deve ser decorativo ou estrutural, não uma escala de senioridade.

### 13.4 Status temporal

`Atual` ou `atual` deve aparecer no período da experiência corrente. O status não deve depender apenas de cor.

### 13.5 Detalhes

O controle recomendado é um `details/summary` semântico, com título como:

`Ver principais atividades`

ou:

`Ver detalhes da atuação`

O texto do controle deve indicar claramente que existe conteúdo adicional. Não usar um ícone isolado como único significado.

## 14. Acessibilidade

### 14.1 Headings

- um `h2` para a seção;
- um `h3` por experiência;
- não usar o cargo como heading se isso quebrar a hierarquia;
- não criar headings para cada tecnologia.

### 14.2 Leitura assistiva

A ordem deve ser:

1. empresa;
2. cargo;
3. período;
4. resumo;
5. contexto curto;
6. controle de detalhes;
7. conteúdo expandido.

### 14.3 Teclado

- `summary` deve ser acessível por teclado;
- foco deve ser visível;
- abrir e fechar detalhes deve funcionar sem JavaScript imperativo;
- a ordem de tabulação deve seguir a ordem visual;
- links futuros devem ter nomes descritivos.

### 14.4 Contraste

- títulos em branco sobre preto ou navy;
- texto secundário em cinza-claro com contraste suficiente;
- laranja somente em labels e marcadores pontuais;
- período e status temporal sempre em texto;
- nenhum significado deve depender somente de cor.

### 14.5 Zoom e movimento

- validar zoom de 200%;
- não cortar período, cargo ou empresa;
- respeitar `prefers-reduced-motion`;
- nenhuma animação deve ser necessária para descobrir conteúdo.

## 15. Responsividade

### 15.1 Desktop — 1440px

- lista editorial em largura ampla;
- empresa e cargo em uma coluna principal;
- período alinhado como metadado;
- resumo com largura confortável;
- detalhes expandidos ocupam a largura disponível sem criar coluna estreita;
- experiência atual pode ter maior presença, sem dominar a página.

### 15.2 Tablet — 768px

- reduzir o espaço entre metadados e resumo;
- manter empresa, cargo e período distinguíveis;
- permitir que o período passe para uma linha própria;
- evitar timeline estreita;
- manter detalhes fechados inicialmente;
- preservar áreas de toque.

### 15.3 Mobile — 390px

- uma coluna;
- período antes ou logo abaixo da empresa;
- cargo em posição de destaque secundário;
- resumo com largura total;
- tecnologias e competências em listas curtas quando abertas;
- details/summary ocupando largura confortável;
- sem card horizontal que exija rolagem;
- sem corte de empresa, cargo ou período;
- sem overflow horizontal.

## 16. Analytics Preservados

O EP-012 não cria novos eventos.

Devem permanecer intactos:

- `navigation-click` do item Experiência;
- `primary-cta-click` do Hero;
- `curriculum-click` nos links de currículo;
- `project-repository-click` nos projetos;
- `linkedin-click`;
- `github-click`;
- `email-click`;
- `whatsapp-click`.

A abertura de `details/summary` não deve receber instrumentação nesta etapa. O EP-009 deixou `project-details-toggle` fora da implementação atual, e a experiência profissional não deve introduzir um evento equivalente sem especificação própria.

Não alterar:

- script global do Umami;
- Website ID;
- `data-performance="true"`;
- taxonomia de eventos;
- propriedades existentes;
- comportamento de links.

## 17. SEO Preservado

O EP-012 não altera SEO.

Devem permanecer:

- `metadataBase`;
- title e description;
- canonical;
- idioma `pt-BR`;
- `robots.ts`;
- `sitemap.ts`;
- favicon e ícones atuais;
- um único `h1` na Home.

A seção deve usar texto real para empresa, cargo, período e resumo. Não criar páginas individuais para experiências nem URLs novas como parte deste épico.

Não repetir palavras-chave artificialmente. O objetivo é comunicar trajetória, não otimizar uma lista de cargos para mecanismos de busca.

## 18. Performance

Requisitos:

- preferir Server Components;
- manter o conteúdo inicial renderizado no servidor;
- não instalar bibliotecas para timeline, accordions ou animações;
- usar HTML semântico para expansão progressiva;
- não carregar imagens remotas;
- evitar ícones ou ilustrações sem finalidade;
- não criar JavaScript imperativo para abrir detalhes;
- preservar o build standalone;
- evitar layout shift;
- manter a seção leve mesmo com sete experiências;
- limitar detalhes abertos inicialmente;
- validar impacto em Lighthouse quando implementada.

Não remover conteúdo real para obter performance. A estratégia é reduzir o custo visual e interativo da primeira leitura, mantendo os detalhes no documento renderizado ou em expansão sem dependência desnecessária de cliente.

## 19. Segurança, Privacidade e Veracidade

- publicar somente informações já autorizadas e presentes na fonte pública;
- não acrescentar nomes de clientes ou sistemas protegidos;
- não expor detalhes de infraestrutura corporativa;
- não publicar dados pessoais de terceiros;
- não incluir código proprietário;
- não incluir URLs internas;
- não incluir métricas não confirmadas;
- não transformar tecnologias em afirmações de domínio absoluto;
- manter linguagem objetiva e verificável;
- revisar a experiência atual antes da publicação caso o período mude;
- não enviar informações profissionais para analytics além dos eventos existentes.

## 20. Histórias de Usuário

### US-012.1 — Compreender a trajetória

**Descrição:**

Como recrutador, quero entender a evolução profissional de Waldir rapidamente, para avaliar aderência a uma oportunidade.

**Valor:** reduz o tempo até a compreensão do perfil.

**Critérios de aceite:**

- experiência atual aparece primeiro;
- empresa, cargo e período são identificáveis;
- cada item possui resumo curto;
- a primeira leitura não exige abrir detalhes.

**Dependências:** dados atuais de experiências.

**Fora de escopo:** alterar fatos profissionais ou currículo PDF.

### US-012.2 — Aprofundar uma experiência

**Descrição:**

Como tech lead, quero abrir detalhes de uma experiência específica, para compreender atividades, tecnologias e competências relacionadas.

**Valor:** oferece profundidade sem sobrecarregar o visitante inicial.

**Critérios de aceite:**

- detalhes ficam fechados por padrão, salvo decisão justificada;
- o controle possui texto claro;
- atividades são lidas em ordem coerente;
- o conteúdo expandido não depende de JavaScript imperativo.

**Dependências:** domínio tipado de experiência.

**Fora de escopo:** analytics de abertura de detalhes.

### US-012.3 — Identificar impacto sem métricas inventadas

**Descrição:**

Como gestor de engenharia, quero conhecer a natureza das contribuições, para avaliar impacto profissional sem depender de números não comprovados.

**Valor:** mantém credibilidade e transparência.

**Critérios de aceite:**

- resumos usam verbos de contribuição e evolução;
- nenhum percentual é inventado;
- atividades descrevem contexto real;
- tecnologias não substituem impacto.

**Dependências:** revisão do conteúdo profissional.

**Fora de escopo:** criar métricas retrospectivas.

### US-012.4 — Relacionar experiência e stack

**Descrição:**

Como avaliador técnico, quero reconhecer tecnologias no contexto de experiências, para relacionar repertório a aplicações reais.

**Valor:** conecta a seção Experiência à Stack Tecnológica.

**Critérios de aceite:**

- tecnologias vêm dos dados da experiência;
- listas completas ficam sob demanda quando necessário;
- nenhuma tecnologia é associada a experiência incorreta;
- a seção não repete toda a Stack em primeiro nível.

**Dependências:** EP-011 e fonte de experiências.

**Fora de escopo:** criar taxonomia nova de tecnologias.

### US-012.5 — Navegar em dispositivos móveis

**Descrição:**

Como visitante mobile, quero ler a trajetória sem rolagem horizontal ou blocos comprimidos, para avaliar o perfil pelo celular.

**Valor:** preserva a experiência de recrutamento e divulgação.

**Critérios de aceite:**

- validação em 390x844;
- uma coluna no mobile;
- empresa, cargo, período e resumo não são cortados;
- detalhes podem ser abertos por teclado e toque.

**Dependências:** implementação da Home V2.

**Fora de escopo:** redesenho global responsivo.

### US-012.6 — Preservar dados profissionais

**Descrição:**

Como responsável pelo portfólio, quero manter os dados públicos separados da apresentação visual, para alterar a forma sem alterar os fatos.

**Valor:** reduz risco de inconsistência profissional.

**Critérios de aceite:**

- dados continuam em constantes tipadas;
- componentes recebem experiência por propriedade;
- nenhum fato é duplicado diretamente na página;
- ordem e estados são verificáveis.

**Dependências:** domínio atual.

**Fora de escopo:** backend ou CMS de experiências.

## 21. Roadmap das Próximas Sprints

### Sprint EP-012.1 — Inventário e revisão editorial

Escopo:

- revisar os sete registros atuais;
- confirmar períodos, cargos e resumos;
- identificar repetições;
- definir quais atividades ficam sob demanda;
- validar linguagem de impacto sem métricas inventadas.

Critérios de aceite:

- fonte de dados aprovada;
- nenhuma informação confidencial;
- resumo curto definido para cada experiência.

Riscos:

- redução excessiva apagar contexto relevante;
- linguagem de impacto extrapolar os fatos.

### Sprint EP-012.2 — Nova composição editorial

Escopo:

- substituir cards densos por lista editorial;
- destacar a experiência atual com moderação;
- preservar ordem cronológica reversa;
- reduzir a repetição visual de tecnologias.

Critérios de aceite:

- evolução profissional é perceptível;
- empresa, cargo, período e resumo são priorizados;
- detalhes ficam acessíveis sob demanda.

Riscos:

- timeline ficar abstrata demais;
- experiência atual dominar as anteriores.

### Sprint EP-012.3 — Expansão progressiva e acessibilidade

Escopo:

- validar `details/summary`;
- revisar foco e teclado;
- validar headings, listas e contraste;
- garantir leitura assistiva.

Critérios de aceite:

- detalhes funcionam sem JavaScript imperativo;
- foco é visível;
- conteúdo expandido possui ordem coerente.

Riscos:

- excesso de conteúdo em detalhes;
- controles pouco claros.

### Sprint EP-012.4 — Responsividade e performance

Escopo:

- validar 390x844, 768x1024 e 1440x900;
- remover overflow;
- testar altura e densidade;
- confirmar Server Components e build standalone.

Critérios de aceite:

- mobile em uma coluna;
- tablet sem timeline estreita;
- desktop com leitura ampla;
- lint, build e diff check aprovados.

Riscos:

- detalhes abertos aumentarem excessivamente a altura;
- espaçamento insuficiente em mobile.

### Sprint EP-012.5 — Integração e revisão final

Escopo:

- integrar na Home V2;
- preservar analytics e SEO;
- revisar navegação e transição para próximas seções;
- validar conteúdo profissional final.

Critérios de aceite:

- nenhuma seção fora do escopo foi alterada;
- eventos existentes permanecem;
- revisão visual e técnica aprovada.

Riscos:

- alteração acidental de outras seções;
- divergência entre documento, domínio e interface.

## 22. Critérios de Aceite Gerais

- a seção conta uma história de evolução profissional;
- o foco está no impacto e nas entregas, não na quantidade de tecnologias;
- experiência atual aparece primeiro;
- as sete experiências públicas permanecem acessíveis;
- a organização é cronológica reversa;
- cada experiência apresenta inicialmente empresa, cargo, período e resumo curto;
- detalhes adicionais são acessíveis sob demanda;
- recrutadores conseguem compreender a seção rapidamente;
- perfis técnicos conseguem aprofundar atividades, tecnologias e competências;
- a seção não parece uma cópia literal do currículo;
- tecnologias aparecem como evidências contextuais;
- não há métricas, percentuais ou níveis inventados;
- não há excesso de cards ou badges;
- não há painel administrativo ou dashboard;
- a hierarquia de headings é correta;
- foco e teclado funcionam;
- contraste é adequado;
- status temporal não depende somente de cor;
- layout funciona em 390x844, 768x1024 e 1440x900;
- não existe overflow horizontal;
- analytics existentes são preservados;
- SEO existente é preservado;
- Umami não é alterado;
- não há dependências novas;
- `package.json` e `package-lock.json` não são alterados;
- `npm run lint` passa;
- `npm run build` passa;
- Docker e output standalone continuam compatíveis;
- nenhum fato profissional é inventado;
- nenhuma informação confidencial é publicada.

## 23. Definition of Done

O EP-012 estará pronto quando:

- a seção Experiência Profissional estiver implementada conforme esta especificação;
- a narrativa de evolução estiver evidente na primeira leitura;
- empresa, cargo, período e resumo forem encontrados sem esforço;
- detalhes técnicos estiverem disponíveis sob demanda;
- os sete registros atuais estiverem preservados e corretamente ordenados;
- o conteúdo inicial for curto o suficiente para recrutadores;
- o conteúdo expandido for útil para tech leads e perfis técnicos;
- impacto e entregas forem comunicados sem métricas inventadas;
- a seção estiver visualmente distinta da Stack Tecnológica e de Projetos;
- acessibilidade, foco, teclado, contraste e zoom forem validados;
- desktop, tablet e mobile estiverem validados;
- analytics, SEO, Docker e infraestrutura permanecerem intactos;
- lint, build e `git diff --check` passarem;
- nenhuma dependência for instalada;
- `package.json` e `package-lock.json` permanecerem inalterados;
- a revisão de conteúdo profissional for aprovada;
- não houver commit ou push sem solicitação explícita.

## 24. Fora de Escopo

Não fazem parte deste épico:

- alterar o conteúdo factual das experiências sem revisão aprovada;
- criar novas experiências;
- incluir clientes ou resultados não públicos;
- alterar o currículo PDF;
- criar formulário de contato;
- criar backend ou CMS;
- integrar LinkedIn ou GitHub automaticamente;
- criar métricas de impacto retroativas;
- adicionar analytics para abertura de detalhes;
- alterar o Website ID ou script do Umami;
- alterar SEO, metadata, robots ou sitemap;
- alterar Navbar, Hero, Projetos, Tecnologias, Sobre, Contato ou Rodapé fora da integração prevista;
- alterar Docker, Compose ou Cloudflare;
- instalar dependências;
- alterar `package.json` ou `package-lock.json`;
- commit;
- push.
