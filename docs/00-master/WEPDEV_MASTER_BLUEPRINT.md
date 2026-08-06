# WEPDEV Master Blueprint

## 1. Identificação e Governança

- **Produto:** WEPDEV Portfolio
- **Marca:** WEPDEV
- **Responsável:** Waldir Escouto Pereira
- **Documento:** Blueprint mestre da plataforma
- **Escopo:** produto, conteúdo, experiência, identidade e evolução técnica
- **Estado:** referência oficial para decisões futuras

Este documento governa a evolução do WEPDEV Portfolio. Ele consolida as decisões estáveis dos épicos de produto, dos blueprints de Home e das diretrizes de marca. Toda alteração relevante deve ser avaliada contra este documento antes de ser implementada.

Quando houver conflito entre uma decisão local e este blueprint, a decisão local deve ser justificada, documentada e, se alterar a direção da plataforma, refletida em uma revisão deste documento.

## 2. Propósito da Plataforma

O WEPDEV Portfolio é uma plataforma pública para apresentar Waldir Escouto Pereira como Desenvolvedor Java Sênior e tornar visível sua forma de construir software.

A plataforma reúne:

- posicionamento profissional;
- evidências de projetos reais e autorais;
- stack tecnológica contextualizada;
- trajetória e evolução profissional;
- princípios de engenharia;
- canais profissionais de contato;
- documentação técnica e decisões de produto;
- preparação para divulgação em processos seletivos e redes profissionais.

O portfólio não deve ser tratado como uma página estática de currículo. Ele é um produto de engenharia que demonstra organização, julgamento técnico, capacidade de execução, cuidado com a experiência e evolução incremental.

## 3. Missão

Demonstrar competência em Engenharia de Software por meio de projetos, documentação, arquitetura e código de qualidade, conectando experiência prática em backend enterprise com tecnologias modernas, cloud e Inteligência Artificial aplicada.

A missão é tornar compreensível:

- quem é Waldir;
- o que ele constrói;
- como toma decisões técnicas;
- onde aplicou essa experiência;
- como pode ser contatado profissionalmente.

## 4. Visão

Ser reconhecida como uma presença profissional pública associada a backend robusto, arquitetura clara, sistemas distribuídos, cloud, DevOps e uso responsável de Inteligência Artificial.

No longo prazo, a WEPDEV deve evoluir para um ecossistema coerente de:

- portfólio;
- projetos autorais;
- estudos de caso;
- laboratórios técnicos;
- documentação de decisões;
- materiais de divulgação profissional.

Essa expansão deve ocorrer sem transformar a plataforma em um catálogo de tecnologias, um dashboard ou um conjunto de experiências visuais desconectadas.

## 5. Valores

1. **Engenharia antes da aparência:** estética apoia a percepção de qualidade, mas não substitui evidência.
2. **Clareza:** informação importante deve ser encontrada e compreendida rapidamente.
3. **Simplicidade com intenção:** cada elemento deve ter uma finalidade identificável.
4. **Confiabilidade:** conteúdo, links, deploy e comportamento devem ser previsíveis.
5. **Evolução incremental:** mudanças devem ser pequenas, verificáveis e reversíveis.
6. **Impacto antes do inventário:** projetos e entregas são mais importantes que listas extensas de ferramentas.
7. **Privacidade por padrão:** não expor dados sensíveis nem coletar dados pessoais desnecessários.
8. **Acessibilidade:** a plataforma deve funcionar para diferentes pessoas, dispositivos e formas de navegação.
9. **Performance:** a experiência deve ser leve, responsiva e tecnicamente saudável.
10. **Julgamento técnico:** IA, cloud e frameworks são meios; decisões críticas continuam sob responsabilidade humana.
11. **Consistência:** produto, documentação e presença profissional devem parecer partes da mesma marca.

## 6. Público-alvo

### Recrutadores técnicos

Precisam entender rapidamente nome, cargo, especialidade, experiência, projetos e canais de contato.

### Tech leads e arquitetos

Buscam evidências de decisões arquiteturais, integração, qualidade, segurança, observabilidade e evolução de sistemas.

### Gestores de engenharia

Avaliam maturidade, confiabilidade, capacidade de entrega e adequação a ambientes corporativos complexos.

### Desenvolvedores e pares técnicos

Querem aprofundar projetos, tecnologias, práticas de engenharia e decisões documentadas.

### Visitantes vindos de canais profissionais

Chegam pelo LinkedIn, GitHub, currículo ou compartilhamento direto e precisam validar rapidamente a consistência do posicionamento apresentado.

## 7. Jornada dos Visitantes

A jornada principal deve seguir:

```text
Quem sou eu
        ↓
O que construo
        ↓
Que competências aplico
        ↓
Como evoluí profissionalmente
        ↓
Como penso engenharia
        ↓
Como entrar em contato
```

### Entrada

O Hero deve comunicar nome, cargo, proposta de valor e caminhos imediatos para projetos, currículo e canais profissionais.

### Evidência

Projetos aparecem cedo. O visitante deve encontrar trabalho realizado antes de percorrer blocos extensos de contexto.

### Contexto técnico

Stack Tecnológica, Sobre e Como gero valor explicam repertório e capacidade aplicada sem repetir listas indiscriminadas.

### Validação profissional

Experiência Profissional e Princípios de Engenharia demonstram trajetória, maturidade e critérios de decisão.

### Conversão

Contato e Rodapé encerram a jornada com canais reais, acessíveis e sem formulário fictício.

## 8. Arquitetura Global do Site

### Camadas da plataforma

1. **Apresentação:** Navbar, Hero e identidade profissional.
2. **Evidência:** Projetos em destaque e futuros estudos de caso.
3. **Competência:** Stack Tecnológica e Como gero valor.
4. **Trajetória:** Sobre e Experiência Profissional.
5. **Julgamento:** Princípios de Engenharia.
6. **Conversão:** Contato e Rodapé.
7. **Operação:** metadata, acessibilidade, performance, deploy e analytics.

### Rotas públicas

A Home é a experiência principal. Rotas técnicas devem ser criadas somente quando houver conteúdo próprio suficiente para justificar uma página independente.

Não criar rotas para:

- âncoras da Home;
- cada tecnologia;
- cada empresa;
- PDF de currículo como página editorial;
- ferramentas administrativas;
- conteúdo sem profundidade própria.

### Fonte de verdade

Conteúdo profissional, projetos, contatos, tecnologias e princípios devem permanecer em fontes de dados tipadas e centralizadas. Componentes não devem duplicar URLs, fatos ou textos profissionais sem necessidade.

## 9. Estrutura Definitiva da Home

A ordem oficial da Home é:

1. **Navbar** — orientação e acesso rápido.
2. **Hero** — identidade, cargo, proposta de valor e CTAs.
3. **Projetos em destaque** — evidências concretas de construção.
4. **Stack Tecnológica** — competências organizadas por contexto.
5. **Sobre** — visão profissional e foco técnico.
6. **Experiência Profissional** — evolução, impacto e contexto.
7. **Como gero valor** — tradução do repertório em contribuição.
8. **Princípios de Engenharia** — critérios de decisão.
9. **Contato** — canais profissionais e disponibilidade.
10. **Rodapé** — continuidade, navegação e autoria.

Esta ordem deve reduzir o tempo até a evidência principal sem eliminar contexto. A Home deve ser uma narrativa progressiva, não uma sequência arbitrária de componentes.

### Regra central da narrativa

**A Home desperta interesse; os projetos comprovam competência; os estudos de caso demonstram profundidade técnica.**

Projetos e estudos de caso devem permanecer diferentes: o projeto apresenta evidência e contexto rápido; o estudo de caso, quando existir, explica problema, decisões, trade-offs, implementação e aprendizados.

## 10. Filosofia de UX

O design deve transmitir confiança, clareza e maturidade técnica.

Princípios:

- priorizar informação essencial na primeira leitura;
- apresentar projetos antes de blocos densos de carreira;
- usar progressão de resumo para detalhe;
- favorecer leitura editorial em vez de grades de cards;
- manter CTAs reais e descritivos;
- não transformar conteúdo informativo em falsa interação;
- preservar funcionamento sem JavaScript quando possível;
- evitar competição entre nome, marca, cargo e efeitos visuais;
- respeitar o tempo do recrutador sem empobrecer a leitura técnica;
- separar fato confirmado, plano futuro e hipótese;
- evitar repetição entre Stack, Experiência e Como gero valor;
- não usar gamificação para representar senioridade ou competência.

### Densidade

Cada bloco deve ter uma ideia dominante. Listas completas, detalhes técnicos e atividades devem aparecer sob demanda ou em páginas próprias quando a profundidade justificar.

### Conversão

Os CTAs devem acompanhar a intenção do visitante:

- projetos para quem quer evidência;
- currículo para quem quer visão compacta;
- GitHub para quem quer código;
- LinkedIn para contato profissional;
- WhatsApp e e-mail para iniciar conversa.

## 11. Filosofia de UI

A interface deve parecer um produto de engenharia profissional, não um dashboard ou uma demonstração de efeitos.

Diretrizes:

- tipografia protagonista;
- fundos preto e navy;
- branco para conteúdo principal;
- cinza para contexto e metadados;
- laranja como acento intencional;
- poucas bordas e superfícies;
- sombras discretas;
- glow raro e funcional;
- grids simples e previsíveis;
- radius moderado;
- estados de foco claros;
- ausência de cards dentro de cards;
- ausência de elementos decorativos sem função.

**A plataforma deve evoluir sem perder consistência visual.** Novos componentes devem reutilizar tokens e padrões já aprovados antes de introduzir novas soluções.

## 12. Diretrizes de Conteúdo

### Conteúdo obrigatório

- nome: Waldir Escouto Pereira;
- cargo: Desenvolvedor Java Sênior;
- foco em Java Backend, backend enterprise, arquitetura, microsserviços, cloud e IA aplicada;
- projetos reais e seus status verdadeiros;
- experiências profissionais públicas;
- tecnologias existentes na fonte de dados;
- canais profissionais confirmados;
- currículo público;
- princípios de engenharia;
- localização pública: Rio de Janeiro, Brasil.

### Conteúdo permitido

- resumos objetivos;
- descrições de problemas e decisões quando confirmadas;
- tecnologias como evidências contextuais;
- planos futuros identificados como planejados;
- estudos de caso derivados de projetos reais;
- frases de posicionamento sem promessas quantitativas.

### Conteúdo proibido

- métricas inventadas;
- clientes não autorizados;
- informações confidenciais;
- URLs privadas;
- credenciais, tokens ou IPs;
- cargos, datas ou certificações não confirmados;
- redes sociais inexistentes;
- depoimentos fictícios;
- porcentagens de conhecimento;
- promessas de resultado;
- projetos planejados apresentados como concluídos.

### Tom de voz

Profissional, direto, técnico e acessível. A marca deve explicar decisões com segurança sem usar marketing agressivo, jargão vazio ou falsa modéstia.

## 13. Diretrizes de Identidade Visual

A identidade oficial deve comunicar:

- Engenharia de Software;
- Backend Enterprise;
- Arquitetura;
- Cloud;
- Inteligência Artificial;
- elegância;
- simplicidade;
- performance;
- tecnologia moderna.

### Paleta de referência atual

- preto: `#000000`;
- navy: `#14213D`;
- laranja: `#FCA311`;
- cinza-claro: `#E5E5E5`;
- branco: `#FFFFFF`.

O laranja deve aparecer como acento em CTAs, marcadores, foco e detalhes pequenos. Não deve dominar superfícies inteiras nem ser aplicado a todos os elementos.

### Tipografia

- headings: Space Grotesk, conforme adoção futura dos tokens;
- body: Inter, conforme adoção futura dos tokens;
- código e rótulos técnicos: JetBrains Mono;
- implementação atual pode preservar fontes existentes até uma migração validada.

### Marca

Usar a assinatura tipográfica aprovada e variantes documentadas no Brand Guidelines. Não criar monogramas ou símbolos provisórios para resolver lacunas de layout.

## 14. Componentes Oficiais

Componentes oficiais devem ter responsabilidade clara, sem abstrações genéricas prematuras.

### Estrutura e layout

- Navbar;
- Container;
- Section;
- Rodapé;
- links de navegação.

### Conteúdo principal

- Hero;
- ProjetoDestaque;
- ProjetoPlanejado;
- SecaoProjetos;
- SecaoTecnologias;
- SecaoSobre;
- SecaoExperiencia;
- ItemExperiencia;
- SecaoEspecialidades;
- ItemEspecialidade;
- SecaoPrincipiosEngenharia;
- SecaoContato;
- CanalProfissionalCard.

### Interface

- Botao;
- links com estados de foco;
- `details/summary` para progressão de conteúdo;
- listas editoriais;
- indicadores textuais de status.

Regras:

- componentes de conteúdo devem ser Server Components quando não houver necessidade real de cliente;
- ícones não devem substituir textos de ação;
- componentes não devem duplicar fontes de dados;
- qualquer componente novo deve ter finalidade documentada;
- componentes removidos devem deixar de possuir imports e estilos órfãos.

## 15. Motion

Motion deve ser discreto, funcional e opcional.

Permitido:

- transição curta de cor, borda e superfície;
- elevação sutil em elementos interativos;
- abertura natural de detalhes nativos;
- mudança de estado claramente perceptível.

Evitar:

- parallax;
- partículas;
- rotação constante;
- tilt 3D;
- cursor personalizado;
- animação contínua intensa;
- movimento como única forma de comunicar informação.

Toda implementação deve respeitar `prefers-reduced-motion` e não pode prejudicar leitura, foco ou performance.

## 16. Acessibilidade

Requisitos permanentes:

- um único `h1` na Home;
- headings em ordem lógica;
- landmarks semânticos: header, nav, main, section e footer;
- links com nomes claros;
- foco visível;
- navegação completa por teclado;
- contraste adequado;
- áreas de toque confortáveis;
- status e disponibilidade informados por texto;
- SVGs decorativos com `aria-hidden`;
- alt adequado em imagens informativas;
- `details/summary` acessível;
- suporte a zoom de 200%;
- ausência de overflow horizontal;
- suporte a `prefers-reduced-motion`.

Não adicionar ARIA redundante quando HTML semântico já resolver o problema. Nenhuma informação crítica pode depender somente de cor, tamanho, posição ou animação.

## 17. Responsividade

### Mobile — aproximadamente 390px

- leitura em coluna única;
- Hero direto;
- projetos visíveis cedo;
- menu e CTAs com área de toque adequada;
- textos sem corte;
- detalhes progressivos sem deslocamento lateral;
- nenhuma barra horizontal.

### Tablet — aproximadamente 768px

- reorganização das colunas sem compressão excessiva;
- espaçamento reduzido com preservação de hierarquia;
- projetos e experiências ainda fáceis de comparar;
- menus e CTAs completos;
- listas longas com largura confortável.

### Desktop — aproximadamente 1440px

- largura máxima controlada;
- respiro entre blocos;
- composições editoriais mais amplas;
- projetos e experiências com hierarquia clara;
- navegação completa;
- nenhuma seção esticada sem necessidade.

### Regra de adaptação

Em telas menores, reduzir decoração e colunas antes de reduzir legibilidade. A ordem da informação e a capacidade de executar ações têm prioridade sobre a composição decorativa.

## 18. SEO

SEO deve permanecer técnico, verdadeiro e alinhado ao conteúdo público.

Requisitos:

- título profissional consistente;
- descrição objetiva;
- `metadataBase` e canonical oficiais quando confirmados;
- idioma `pt-BR`;
- `robots.txt` acessível;
- `sitemap.xml` contendo somente rotas públicas reais;
- headings semânticos;
- links públicos funcionando;
- dados estruturados somente quando houver dados públicos suficientes;
- nenhuma keyword stuffing;
- nenhuma promessa de posicionamento.

Não criar URLs para conteúdo inexistente. PDF, analytics e âncoras internas não devem ser tratados como páginas editoriais no sitemap sem decisão específica.

## 19. Analytics

O analytics deve observar comportamento agregado para melhorar o produto, não vigiar pessoas individualmente.

### Preservar

- script global do Umami carregado uma única vez;
- Website ID existente;
- `data-performance="true"`;
- eventos declarativos existentes;
- funcionamento de links sem JavaScript.

### Eventos oficiais atuais

- `navigation-click`;
- `primary-cta-click`;
- `curriculum-click`;
- `project-repository-click`;
- `linkedin-click`;
- `github-click`;
- `email-click`;
- `whatsapp-click`.

### Regras

- não adicionar eventos sem finalidade documentada;
- não duplicar eventos equivalentes;
- não enviar nome, e-mail, telefone, texto digitado, IP manual, token ou credencial;
- não instrumentar ações administrativas;
- não usar `window.umami` ou handlers imperativos sem especificação própria;
- manter propriedades controladas e em idioma consistente;
- metas e funis devem ser documentados antes de configuração.

## 20. Performance e Operação

### Frontend

- preferir Server Components;
- manter JavaScript mínimo;
- usar imagens locais otimizadas quando existirem;
- definir dimensões de imagens;
- evitar dependências para comportamentos simples;
- preservar Core Web Vitals;
- respeitar `prefers-reduced-motion`;
- evitar layout shift;
- validar lint e build.

### Deploy

- manter Next.js standalone;
- manter Docker multi-stage;
- executar runtime como usuário não root;
- expor produção somente conforme configuração aprovada;
- preservar healthcheck;
- não incluir segredos em imagem ou documentação;
- manter rollback possível;
- não alterar Cloudflare, DNS ou firewall sem épico próprio.

### Observabilidade

Erros de build, saúde do container, resposta HTTP, eventos e Core Web Vitals devem ser verificáveis sem expor dados pessoais ou infraestrutura privada.

## 21. Roadmap V3, V4 e V5

### V3 — Evidência e profundidade

Objetivo: transformar projetos em evidências mais completas de engenharia.

Prioridades:

- estudos de caso para projetos com profundidade suficiente;
- documentação de arquitetura e decisões;
- imagens sociais profissionais;
- refinamento de Stack, Experiência e Como gero valor;
- validação sistemática de acessibilidade, performance e compartilhamento;
- revisão de conteúdo com base em comportamento agregado.

Critério de direção: cada nova página deve explicar uma decisão ou evidência real, não apenas adicionar volume ao site.

### V4 — Laboratórios e publicação técnica

Objetivo: expandir o portfólio com experimentos e conteúdo técnico autoral.

Prioridades:

- Laboratório Java com IA, quando houver implementação pública suficiente;
- experimentos com OpenAI e Ollama documentados com limites e contexto;
- estudos de microsserviços e sistemas distribuídos;
- artigos ou notas técnicas somente com fluxo editorial sustentável;
- melhoria de navegação entre projeto, estudo de caso e documentação.

Fora de escopo automático: blog, CMS e publicação contínua sem especificação própria.

### V5 — Plataforma de presença profissional

Objetivo: consolidar a WEPDEV como uma plataforma profissional multiplataforma.

Prioridades:

- biblioteca de estudos de caso;
- materiais consistentes para GitHub, LinkedIn, currículo e apresentações;
- dashboards internos de produto somente quando necessários e protegidos;
- governança de conteúdo e assets;
- eventual internacionalização apenas com decisão de produto;
- evolução da identidade sem romper padrões visuais.

Qualquer expansão deve preservar o propósito central: demonstrar Engenharia de Software por evidências públicas e confiáveis.

## 22. Regras Que Nunca Poderão Ser Quebradas

1. Não publicar informação profissional inventada.
2. Não expor dados confidenciais, credenciais, tokens, IPs ou URLs privadas.
3. Não alterar fatos, cargos, datas ou status para melhorar aparência.
4. Não apresentar projeto planejado como concluído.
5. Não criar links fictícios, canais inexistentes ou números não confirmados.
6. Não transformar a Home em dashboard, catálogo de badges ou currículo visual denso.
7. Não usar barras, estrelas, porcentagens ou níveis para representar competência.
8. Não depender somente de cor para comunicar significado.
9. Não quebrar navegação por teclado, foco visível ou suporte a zoom.
10. Não introduzir dependência ou tecnologia sem necessidade comprovada.
11. Não duplicar fontes de dados, eventos, URLs ou scripts globais.
12. Não alterar analytics para coletar dados pessoais.
13. Não bloquear assets necessários com SEO, robots ou deploy.
14. Não remover evidências reais apenas para reduzir densidade sem preservar acesso ao conteúdo.
15. Não alterar a paleta ou a tipografia global sem avaliar impacto de marca e acessibilidade.
16. Não usar movimento, glow ou efeitos como substitutos de hierarquia.
17. Não misturar marca WEPDEV com logos de terceiros sem autorização.
18. Não fazer mudanças estruturais amplas sem validação de lint, build e responsividade.
19. Não fazer deploy sem healthcheck e possibilidade de rollback.
20. Não fazer commit ou push automaticamente durante tarefas de implementação.

## 23. Critérios de Governança

Uma nova entrega está alinhada ao blueprint quando:

- reforça o posicionamento de Desenvolvedor Java Sênior;
- melhora a compreensão da jornada sem criar ruído;
- usa dados públicos e fontes centralizadas;
- preserva analytics, SEO, acessibilidade e performance;
- reutiliza tokens, componentes e padrões existentes;
- possui comportamento responsivo definido;
- não cria duplicidade de conteúdo ou eventos;
- permite rollback ou remoção clara;
- atualiza a documentação correspondente quando muda uma decisão de produto;
- mantém a coerência visual entre Home, projetos, estudos de caso e materiais externos.

## 24. Definition of Done da Plataforma

Uma evolução da plataforma só pode ser considerada pronta quando:

- o objetivo da entrega estiver documentado;
- o escopo e o fora de escopo estiverem claros;
- os dados usados forem confirmados;
- a experiência estiver coerente com a jornada da Home;
- desktop, tablet e mobile forem considerados;
- acessibilidade essencial for verificada;
- links, âncoras e CTAs funcionarem;
- analytics permanecer correto e sem dados pessoais;
- SEO não sofrer regressão;
- lint e build passarem quando houver código;
- Docker e healthcheck passarem quando houver impacto de deploy;
- nenhum segredo for exposto;
- documentação e fonte de verdade estiverem atualizadas;
- a alteração puder ser revertida com segurança;
- a consistência visual da WEPDEV permanecer preservada.

## 25. Fora de Escopo Permanente sem Épico Próprio

Não implementar como consequência automática deste blueprint:

- blog ou CMS;
- autenticação pública;
- painel administrativo;
- formulário com backend;
- CRM;
- chatbot;
- RAG público;
- Google Analytics, Meta Pixel ou cookies de marketing;
- heatmaps, session replay ou identificação individual;
- PWA completa ou service worker;
- internacionalização;
- anúncios;
- automação de publicações;
- compra de serviços externos;
- alterações em Cloudflare, DNS, firewall ou banco de dados;
- novos canais profissionais sem confirmação explícita.

Toda exceção exige especificação própria, avaliação de segurança e atualização deste blueprint quando alterar a direção da plataforma.
