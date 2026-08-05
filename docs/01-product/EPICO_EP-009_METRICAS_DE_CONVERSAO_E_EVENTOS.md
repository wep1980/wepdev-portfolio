# EP-009 — Métricas de Conversão e Eventos do Portfólio

## 1. Identificação

- Código: EP-009
- Nome: Métricas de Conversão e Eventos do Portfólio
- Produto: WEPDEV Portfolio
- Sprint: 6 — Conversão e Observabilidade de Produto
- Prioridade: Alta
- Estado: Pronto para refinamento
- Responsável: Waldir Escouto Pereira

## 2. Contexto Confirmado

- Site público: `https://wepdev.com.br`
- Analytics: Umami self-hosted 3.2.0
- Painel atual: `https://analytics.wepdev.com.br`
- Script integrado ao frontend: `https://analytics.wepdev.com.br/script.js`
- Website ID integrado ao frontend: `79867cd5-31c2-4a41-8c7f-f69507a2e9af`
- Rastreamento básico funcionando em produção.
- Core Web Vitals habilitados por `data-performance="true"`.
- Eventos `data-umami-event` já existem em parte do frontend.

Este épico parte do pressuposto de que a integração global do Umami já existe no layout da aplicação e que a próxima evolução será padronizar e expandir eventos de conversão sem alterar a experiência visual.

## 3. Objetivo

Transformar o analytics básico em observabilidade de produto, permitindo entender:

- quantas pessoas visitam o portfólio;
- quais chamadas para ação despertam interesse;
- quantas pessoas abrem ou baixam o currículo;
- quais canais profissionais são mais utilizados;
- quais projetos geram mais interesse;
- quais seções são acessadas pelo menu;
- quais dispositivos e origens geram conversões;
- quais métricas de desempenho podem afetar a experiência.

O objetivo não é vigiar pessoas individualmente. O objetivo é analisar comportamento agregado para melhorar o portfólio como produto, priorizar ajustes de conteúdo, identificar gargalos de conversão e preservar privacidade por padrão.

## 4. Princípios

- Privacidade por padrão.
- Dados mínimos.
- Nomes de eventos consistentes.
- Propriedades sem dados pessoais.
- Nenhuma informação sensível.
- Nenhum evento duplicado.
- Nenhuma instrumentação sem finalidade.
- Eventos centralizados e documentados.
- Compatibilidade com Server Components.
- JavaScript imperativo somente quando realmente necessário.
- Preferência por atributos `data-umami-event`.
- Não prejudicar acessibilidade.
- Não alterar navegação ou comportamento visual.

## 5. Inventário Atual

### 5.1 Script Global

| Item | Arquivo | Local | Valor atual | Situação |
| --- | --- | --- | --- | --- |
| Script Umami | `frontend/app/layout.tsx` | Layout global | `https://analytics.wepdev.com.br/script.js` | Manter único |
| Website ID | `frontend/app/layout.tsx` | Layout global | `79867cd5-31c2-4a41-8c7f-f69507a2e9af` | Manter sem duplicar |
| Performance | `frontend/app/layout.tsx` | Layout global | `data-performance="true"` | Manter habilitado |

### 5.2 Eventos Existentes

| Evento atual | Arquivo / componente | Elemento rastreado | Destino | Clareza do nome | Risco de duplicidade | Propriedades faltantes | Decisão recomendada |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Contato - LinkedIn` | `frontend/constantes/contatos.ts`; renderizado por `frontend/app/page.tsx`, `frontend/componentes/contato/CanalProfissionalCard.tsx` e `frontend/componentes/layout/Rodape.tsx` | Links para LinkedIn no Hero, Contato e Rodapé | `https://www.linkedin.com/in/wepdev/` | Parcialmente claro, mas fora da taxonomia proposta | Não duplica no mesmo clique, mas agrega locais diferentes sem distinguir origem | `channel`, `location` | Renomear para `professional-channel-click` com `channel=linkedin` e `location=hero/contact/footer` |
| `Contato - Email` | `frontend/constantes/contatos.ts`; renderizado por `frontend/componentes/contato/CanalProfissionalCard.tsx` e `frontend/componentes/layout/Rodape.tsx` | Links de e-mail em Contato e Rodapé | `mailto:wepcienciadacomputacao@gmail.com` | Parcialmente claro, mas fora da taxonomia proposta | Não duplica no mesmo clique, mas agrega locais diferentes sem distinguir origem | `channel`, `location` | Renomear para `professional-channel-click` com `channel=email` e `location=contact/footer` |
| `Contato - GitHub` | `frontend/constantes/contatos.ts`; renderizado por `frontend/app/page.tsx`, `frontend/componentes/contato/CanalProfissionalCard.tsx` e `frontend/componentes/layout/Rodape.tsx` | Links para GitHub no Hero, Contato e Rodapé | `https://github.com/wep1980` | Parcialmente claro, mas fora da taxonomia proposta | Não duplica no mesmo clique, mas agrega locais diferentes sem distinguir origem | `channel`, `location` | Renomear para `professional-channel-click` com `channel=github` e `location=hero/contact/footer` |
| `Contato - Curriculo` | `frontend/constantes/contatos.ts`; renderizado por `frontend/app/page.tsx`, `frontend/componentes/contato/CanalProfissionalCard.tsx` e `frontend/componentes/layout/Rodape.tsx` | Links para currículo no Hero, Contato e Rodapé | `/waldir_escouto_pereira_cv.pdf` | Parcialmente claro, mas fora da taxonomia proposta | Não duplica no mesmo clique, mas agrega locais diferentes sem distinguir origem | `location`, `action` | Renomear para `curriculum-click` com `action=open` e `location=hero/contact/footer` |
| `Projeto - WEPDEV Portfolio` | `frontend/componentes/projetos/CardProjeto.tsx` | Link do repositório do projeto WEPDEV Portfolio | `https://github.com/wep1980/wepdev-portfolio` | Claro para o projeto específico, mas fora da taxonomia proposta | Baixo; aplicado somente ao projeto `wepdev-portfolio` quando há `repositorioUrl` | `project`, `project-status`, `location` | Renomear para `project-repository-click` com `project=wepdev-portfolio`, `project-status=em-evolucao`, `location=projects` |

### 5.3 Links Sem Evento Atualmente

| Arquivo / componente | Elemento | Destino | Observação |
| --- | --- | --- | --- |
| `frontend/componentes/layout/Cabecalho.tsx` | Logo WEPDEV | `#inicio` | Candidato a `navigation-click` com `section=inicio`, `location=header` |
| `frontend/componentes/layout/Cabecalho.tsx` | Navegação principal | `#inicio`, `#sobre`, `#experiencia`, `#projetos`, `#contato` | Candidato a `navigation-click` com `location=header` |
| `frontend/componentes/layout/Cabecalho.tsx` | Botão Contato | `#contato` | Candidato a `navigation-click`; cuidado para não duplicar com link de navegação para a mesma seção |
| `frontend/app/page.tsx` | CTA "Ver projetos" | `#projetos` | Candidato a `primary-cta-click` ou `navigation-click`; escolher apenas um para evitar redundância |
| `frontend/componentes/layout/Rodape.tsx` | Navegação do rodapé | `#inicio`, `#sobre`, `#experiencia`, `#projetos`, `#contato` | Candidato a `navigation-click` com `location=footer` |
| `frontend/componentes/projetos/CardProjeto.tsx` | Toggle de conceitos | `<details>` | Candidato a `project-details-toggle` somente se houver rastreamento confiável de abrir/fechar sem complexidade excessiva |

## 6. Taxonomia dos Eventos

### 6.1 Convenção Geral

Usar nomes em inglês técnico, `kebab-case`, sem acentos e com propriedades controladas.

Regras:

- evento descreve a ação;
- propriedades descrevem contexto;
- não incluir valores livres quando houver vocabulário controlado;
- não enviar dados pessoais;
- não enviar texto digitado;
- não usar nomes visuais como chave quando existir `id` ou `slug` estável.

### 6.2 Eventos Mínimos

#### `navigation-click`

Uso: rastrear navegação entre seções por cabeçalho, rodapé e CTAs de navegação, quando não for uma conversão mais específica.

Propriedades:

- `section`
- `location`

Valores esperados para `section`:

- `inicio`
- `sobre`
- `experiencia`
- `projetos`
- `contato`

#### `professional-channel-click`

Uso: rastrear cliques em canais profissionais.

Propriedades:

- `channel`
- `location`

Canais possíveis:

- `linkedin`
- `github`
- `email`

O currículo não deve usar este evento, pois possui taxonomia própria.

#### `curriculum-click`

Uso: rastrear acesso ao currículo.

Propriedades:

- `location`
- `action`

Ações possíveis:

- `open`
- `download`

Não afirmar "download concluído" quando o comportamento configurado apenas abre o PDF ou entrega o arquivo ao navegador. Quando o link abre o PDF em nova aba, a ação deve ser `open`.

#### `project-repository-click`

Uso: rastrear cliques em repositórios públicos de projetos.

Propriedades:

- `project`
- `project-status`
- `location`

O valor de `project` deve vir de `id` ou `slug` estável da fonte `frontend/constantes/projetos.ts`.

#### `project-details-toggle`

Uso: rastrear abertura e fechamento de detalhes de projetos.

Propriedades:

- `project`
- `state`
- `location`

Estados possíveis:

- `open`
- `close`

Este evento só deve ser adotado se for possível rastrear corretamente o estado real do `<details>` sem complexidade desnecessária e sem transformar componentes estáticos em Client Components apenas para métricas de baixa prioridade.

#### `primary-cta-click`

Uso: rastrear chamadas primárias de alta visibilidade quando representarem uma intenção diferente de navegação comum.

Propriedades:

- `action`
- `location`

Exemplo:

- `action=view-projects`
- `location=hero`

Avaliação: o CTA "Ver projetos" pode ser rastreado como `navigation-click` com `section=projetos` e `location=hero`. Manter `primary-cta-click` somente se houver necessidade analítica de separar CTA primário de navegação comum. Não criar os dois eventos no mesmo clique.

## 7. Locais de Origem

Valores padronizados de `location`:

- `header`
- `hero`
- `projects`
- `contact`
- `footer`

Não usar textos longos, nomes visuais ou valores livres em `location`.

## 8. Projetos

Usar identificadores estáveis derivados da fonte `frontend/constantes/projetos.ts`.

Projetos existentes:

| Projeto | ID estável | Slug | Estado atual |
| --- | --- | --- | --- |
| WEPDEV Portfolio | `wepdev-portfolio` | `wepdev-portfolio` | `em-evolucao` |
| Laboratório Java com IA | `laboratorio-java-ia` | `laboratorio-java-ia` | `planejado` |
| Plataforma Java de Microsserviços | `plataforma-java-microsservicos` | `plataforma-java-microsservicos` | `planejado` |

Não usar o título visual como chave analítica se `id` ou `slug` existir.

## 9. Conversões

### 9.1 Conversões de Alta Intenção

- `curriculum-click`
- `professional-channel-click` com `channel=email`
- `professional-channel-click` com `channel=linkedin`
- `professional-channel-click` com `channel=github`
- `project-repository-click`

### 9.2 Conversões de Navegação

- `navigation-click`
- `primary-cta-click`, somente se mantido como evento separado.

Visitantes e pageviews não são conversões por si só. Eles representam volume de tráfego e contexto para calcular taxas de conversão.

## 10. Metas no Umami

As metas abaixo são sugestões para configuração manual no painel do Umami depois que os eventos padronizados estiverem em produção.

| Meta | Evento | Filtro por propriedade | Significado | Limitação |
| --- | --- | --- | --- | --- |
| Currículo acessado | `curriculum-click` | `action=open` ou `action=download` | Visitante demonstrou interesse em consultar o currículo | Não confirma leitura completa nem download concluído |
| LinkedIn acessado | `professional-channel-click` | `channel=linkedin` | Visitante abriu o canal preferencial de contato profissional | Não confirma envio de mensagem no LinkedIn |
| GitHub acessado | `professional-channel-click` | `channel=github` | Visitante demonstrou interesse em projetos e código público | Não confirma visita efetiva após sair do site |
| E-mail iniciado | `professional-channel-click` | `channel=email` | Visitante iniciou contato por cliente de e-mail | Não confirma envio da mensagem |
| Repositório de projeto acessado | `project-repository-click` | opcionalmente `project=<id>` | Visitante abriu repositório público de projeto | Não confirma leitura do repositório nem ação no GitHub |

Não configurar diretamente o painel nesta etapa de especificação.

## 11. Funis

Os funis devem ser criados somente depois que houver volume suficiente de eventos para análise útil.

### Funil 1 — Interesse Profissional

1. Pageview `/`
2. `navigation-click` para `section=projetos` ou `primary-cta-click` com `action=view-projects`
3. `project-repository-click`
4. `curriculum-click` ou `professional-channel-click`

### Funil 2 — Conversão Direta

1. Pageview `/`
2. `curriculum-click`

### Funil 3 — Contato

1. Pageview `/`
2. `navigation-click` para `section=contato`
3. `professional-channel-click`

## 12. Dashboard

Quadro futuro sugerido no Umami:

- visitantes;
- visitas;
- visualizações;
- duração;
- taxa de rejeição;
- acessos ao currículo;
- cliques por canal profissional;
- cliques por projeto;
- conversões por origem;
- conversões por dispositivo;
- Core Web Vitals;
- eventos ao longo do tempo.

Não prometer métricas que o Umami não disponibilize no ambiente instalado. Caso alguma métrica dependa de versão, plano, configuração ou granularidade não disponível, ela deve ser tratada como evolução.

## 13. Privacidade

É proibido enviar propriedades com:

- nome;
- e-mail do visitante;
- telefone;
- IP;
- currículo do visitante;
- empresa;
- cargo;
- conteúdo digitado;
- identificador pessoal;
- token;
- credencial;
- URL privada;
- dados de autenticação.

Não adicionar eventos em:

- painel administrativo do Umami;
- Portainer;
- servidor;
- links internos de administração;
- ações privadas.

Não usar Google Analytics. Não adicionar cookies de marketing. Não coletar dados pessoais. Não rastrear ações administrativas do Umami.

## 14. Segurança do Painel

Evolução recomendada:

- manter `analytics.wepdev.com.br` disponível para `script.js` e coleta pública;
- estudar hostname administrativo separado, por exemplo `stats.wepdev.com.br`;
- proteger o hostname administrativo com Cloudflare Access;
- evitar bloquear `script.js` ou o endpoint público de coleta;
- não implementar Cloudflare Access neste épico sem especificação própria.

## 15. Histórias de Usuário

### US-009.1 — Inventariar Eventos Existentes

Descrição: como responsável pelo produto, quero conhecer todos os eventos já instrumentados para evitar duplicidade e padronizar a evolução.

Valor: reduz retrabalho e melhora confiabilidade das métricas.

Critérios de aceite:

- todos os `data-umami-event` existentes estão listados;
- cada evento possui arquivo, componente, destino e decisão recomendada;
- eventos herdados em português estão identificados;
- riscos de agregação ou duplicidade estão documentados.

Dependências:

- frontend atual publicado;
- script Umami global ativo.

Fora de escopo:

- alterar componentes;
- configurar metas no painel.

### US-009.2 — Padronizar Taxonomia

Descrição: como mantenedor, quero uma taxonomia única de eventos e propriedades para comparar métricas ao longo do tempo.

Valor: permite análise consistente por canal, seção, projeto e origem.

Critérios de aceite:

- nomes de eventos usam `kebab-case`;
- propriedades usam valores controlados;
- não há acentos ou textos longos em chaves analíticas;
- nomes legados têm mapeamento para nomes novos.

Dependências:

- inventário concluído.

Fora de escopo:

- criar camada complexa de analytics sem necessidade;
- instalar bibliotecas.

### US-009.3 — Instrumentar Navegação

Descrição: como responsável pelo produto, quero medir quais seções são acessadas pelo menu para entender interesse do visitante.

Valor: identifica se visitantes procuram projetos, experiência, contato ou outras seções.

Critérios de aceite:

- navegação do header usa `navigation-click`;
- navegação do footer usa `navigation-click`;
- CTA de contato no header não duplica evento equivalente;
- propriedades `section` e `location` usam valores controlados;
- links continuam funcionando sem JavaScript.

Dependências:

- taxonomia aprovada.

Fora de escopo:

- rastrear scroll automático;
- alterar layout do menu.

### US-009.4 — Instrumentar Canais Profissionais

Descrição: como recrutador ou gestor, ao clicar em LinkedIn, GitHub ou e-mail, essa intenção deve ser registrada de forma agregada.

Valor: mostra quais canais geram maior interesse profissional.

Critérios de aceite:

- LinkedIn usa `professional-channel-click` com `channel=linkedin`;
- GitHub usa `professional-channel-click` com `channel=github`;
- e-mail usa `professional-channel-click` com `channel=email`;
- `location` diferencia `hero`, `contact` e `footer`;
- nenhum dado pessoal do visitante é enviado.

Dependências:

- fonte única de contatos existente.

Fora de escopo:

- confirmar mensagem enviada;
- integrar CRM;
- adicionar WhatsApp.

### US-009.5 — Instrumentar Currículo

Descrição: como responsável pelo produto, quero medir acessos ao currículo para avaliar conversão de alta intenção.

Valor: currículo acessado é um dos principais indicadores de interesse profissional.

Critérios de aceite:

- currículo usa `curriculum-click`;
- `location` diferencia origem do clique;
- `action=open` é usado quando o comportamento é abrir PDF;
- `action=download` só é usado quando houver atributo `download` ou comportamento real de download;
- PDF continua acessível.

Dependências:

- rota pública do PDF funcionando.

Fora de escopo:

- rastrear leitura completa do PDF;
- rastrear download concluído pelo navegador.

### US-009.6 — Instrumentar Projetos

Descrição: como visitante técnico, quando abro um repositório de projeto, essa intenção deve ser registrada com o projeto correto.

Valor: identifica quais projetos geram mais interesse técnico.

Critérios de aceite:

- repositórios usam `project-repository-click`;
- `project` usa `id` ou `slug` estável;
- `project-status` usa o estado do domínio de projetos;
- `location=projects`;
- projetos sem `repositorioUrl` não criam link falso.

Dependências:

- fonte `frontend/constantes/projetos.ts`.

Fora de escopo:

- criar novas páginas de projeto;
- alterar conteúdo dos projetos;
- rastrear visitas dentro do GitHub.

### US-009.7 — Validar Eventos em Produção

Descrição: como responsável pela operação, quero validar que os eventos aparecem corretamente no Umami após deploy.

Valor: garante que a instrumentação realmente funciona em ambiente público.

Critérios de aceite:

- script global permanece único;
- Website ID não é duplicado;
- eventos aparecem no painel Umami;
- propriedades aparecem com valores esperados;
- Core Web Vitals continuam ativos;
- não há erros críticos no console relacionados ao analytics.

Dependências:

- deploy em `https://wepdev.com.br`;
- painel Umami acessível.

Fora de escopo:

- alterar Cloudflare Access;
- migrar banco do Umami.

### US-009.8 — Configurar Metas

Descrição: como responsável pelo produto, quero configurar metas para conversões principais.

Valor: permite acompanhar rapidamente sinais de interesse profissional.

Critérios de aceite:

- meta de currículo acessado configurada;
- meta de LinkedIn acessado configurada;
- meta de GitHub acessado configurada;
- meta de e-mail iniciado configurada;
- meta de repositório de projeto acessado configurada;
- limitações de cada meta estão documentadas.

Dependências:

- eventos padronizados em produção;
- volume mínimo inicial para validação.

Fora de escopo:

- criar metas para dados pessoais;
- configurar Google Analytics.

### US-009.9 — Configurar Funis

Descrição: como responsável pelo produto, quero acompanhar caminhos de navegação até conversões.

Valor: ajuda a entender se a página conduz visitantes para projetos, currículo e contato.

Critérios de aceite:

- funil de interesse profissional configurado ou documentado;
- funil de conversão direta configurado ou documentado;
- funil de contato configurado ou documentado;
- funis só são usados para análise após volume suficiente de eventos.

Dependências:

- metas e eventos padronizados.

Fora de escopo:

- análise individual de visitantes;
- session replay;
- heatmaps.

### US-009.10 — Criar Quadro de Conversão

Descrição: como responsável pelo produto, quero um quadro com métricas essenciais para acompanhar evolução do portfólio.

Valor: transforma dados de acesso em leitura de produto.

Critérios de aceite:

- dashboard lista visitantes, visitas e pageviews;
- dashboard lista conversões principais;
- dashboard inclui eventos por canal e projeto;
- dashboard inclui origem, dispositivo e Core Web Vitals quando disponíveis;
- dashboard não promete métricas inexistentes.

Dependências:

- eventos e metas em produção.

Fora de escopo:

- construir dashboard fora do Umami;
- exportar dados para BI.

### US-009.11 — Documentar Operação e Privacidade

Descrição: como mantenedor, quero documentação clara de operação e privacidade para evoluir analytics com segurança.

Valor: reduz risco de coleta indevida e facilita manutenção futura.

Critérios de aceite:

- documentação lista eventos, propriedades e valores permitidos;
- documentação proíbe dados pessoais e sensíveis;
- documentação explica validação em produção;
- documentação registra rollback e critérios de saúde do site;
- documentação orienta proteção futura do painel administrativo.

Dependências:

- taxonomia aprovada.

Fora de escopo:

- implementar política jurídica completa;
- configurar Cloudflare Access sem especificação própria.

## 16. Critérios de Aceite Gerais

- Script do Umami permanece único.
- Website ID não é duplicado.
- `data-performance` permanece habilitado.
- Todos os eventos seguem a taxonomia.
- Propriedades usam valores controlados.
- Nenhum dado pessoal é enviado.
- Nenhum clique gera dois eventos equivalentes.
- Links continuam funcionando sem JavaScript.
- Acessibilidade é preservada.
- `npm run lint` passa.
- `npm run build` passa.
- Docker build passa.
- Site continua saudável.
- Eventos aparecem no Umami em produção.
- PDF continua acessível.
- Nenhum pacote é instalado.
- `package.json` e `package-lock.json` não são alterados.
- Documentação é atualizada.
- Rollback continua possível.

## 17. Fora de Escopo

- Google Analytics.
- Meta Pixel.
- Cookies de publicidade.
- Banners de consentimento sem necessidade comprovada.
- Identificação individual de visitantes.
- Heatmaps nesta entrega.
- Session replay nesta entrega.
- Coleta de formulários.
- CRM.
- Automação de e-mail.
- WhatsApp, caso não exista no produto.
- Alterações visuais.
- Criação de novas páginas de projeto.
- Backend.
- Banco de dados do portfólio.
- Rastreamento de ações administrativas do Umami.
- Eventos em Portainer, servidor ou links internos de administração.

## 18. Plano de Implementação

### Fase 1 — Inventário e Taxonomia

- Revisar eventos existentes.
- Aprovar taxonomia.
- Mapear nomes legados para novos eventos.
- Definir vocabulários controlados para `location`, `channel`, `section`, `action`, `project` e `project-status`.
- Corrigir eventos existentes sem alterar comportamento visual.

### Fase 2 — Instrumentação Principal

- Instrumentar canais profissionais.
- Instrumentar currículo.
- Instrumentar navegação.
- Instrumentar projetos.
- Avaliar se `project-details-toggle` justifica Client Component ou se deve permanecer fora da primeira implementação.

### Fase 3 — Validação Técnica

- Validar localmente quando possível.
- Executar `npm run lint`.
- Executar `npm run build`.
- Executar Docker build.
- Fazer deploy.
- Validar eventos no Umami em produção.
- Confirmar que `https://wepdev.com.br` permanece saudável.

### Fase 4 — Produto e Operação

- Configurar metas.
- Configurar funis.
- Criar quadro de conversão.
- Atualizar documentação operacional.
- Registrar limitações conhecidas das métricas.

## 19. Definição de Pronto

O épico só estará pronto quando:

- eventos críticos estiverem instrumentados;
- eventos forem confirmados no Umami;
- propriedades estiverem corretas;
- não houver duplicidade;
- conversões puderem ser filtradas;
- metas principais estiverem configuradas;
- ao menos um funil estiver preparado;
- painel de conversão estiver documentado;
- privacidade estiver preservada;
- frontend e container estiverem saudáveis;
- documentação estiver atualizada.

## 20. Não Alterar Durante Este Épico Sem Nova Especificação

- Conteúdo visual.
- Conteúdo profissional.
- Currículo PDF.
- Backend.
- Banco de dados do portfólio.
- Banco de dados do Umami.
- Cloudflare Access.
- DNS.
- Firewall.
- `package.json`.
- `package-lock.json`.
- Dependências.
- Painel administrativo do Umami.
- Portainer.
- Serviços privados do servidor.

## 21. Observações de Implementação

- A implementação deve preservar Server Components sempre que possível.
- Links rastreados por atributos devem continuar navegando normalmente sem JavaScript.
- Se for necessário adicionar propriedades customizadas do Umami, a implementação deve validar o formato suportado pela versão self-hosted 3.2.0 antes de alterar o frontend.
- Eventos em `<details>` devem ser tratados com cautela, pois rastrear abertura e fechamento corretamente pode exigir JavaScript imperativo. Esse evento é secundário e não deve prejudicar simplicidade ou acessibilidade.
- Nomes legados atuais em português devem ser tratados como dívida de padronização, não como erro crítico de produção.
