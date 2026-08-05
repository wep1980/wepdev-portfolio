# Design Tokens WEPDEV

## 1. Objetivo

Este documento define a especificacao tecnica dos tokens do Design System da marca WEPDEV.

Os tokens descritos aqui traduzem a identidade visual definida em `BRAND_GUIDELINES_WEPDEV.md` para uma linguagem operacional, reutilizavel e consistente, servindo como referencia para futuras implementacoes em site, Open Graph, LinkedIn, GitHub, README, curriculo, apresentacoes e documentacao.

Este documento nao implementa CSS, Tailwind, componentes React ou qualquer alteracao visual. Ele especifica quais decisoes devem orientar proximas sprints de design system.

## 2. Relacao com o Brand Guidelines

O `BRAND_GUIDELINES_WEPDEV.md` e a fonte estrategica da identidade visual da marca WEPDEV.

Este documento complementa essa referencia ao organizar os elementos visuais em tokens tecnicos:

- cores oficiais;
- familias tipograficas;
- escala de tamanhos;
- espacamentos;
- raios;
- sombras;
- gradientes;
- movimento;
- breakpoints;
- mapeamento por componente;
- mapeamento por area da pagina.

Nenhum token deve contradizer o Brand Guidelines. Qualquer cor, fonte, comportamento visual ou regra de composicao nao prevista neste documento deve ser tratada como proposta futura, nao como decisao aprovada.

## 3. Principios do Design System

O Design System WEPDEV deve seguir os seguintes principios:

- **Consistencia:** elementos semelhantes devem usar os mesmos tokens em todos os contextos.
- **Clareza tecnica:** a interface deve transmitir engenharia, arquitetura, backend enterprise, cloud e Inteligencia Artificial sem excesso decorativo.
- **Simplicidade visual:** superficies, contrastes e hierarquia devem facilitar leitura e decisao.
- **Performance:** tokens devem favorecer composicoes leves, sem dependencia de efeitos pesados.
- **Acessibilidade:** cores, foco, tamanhos e estados devem preservar contraste, navegacao por teclado e legibilidade.
- **Responsividade:** tokens devem funcionar em mobile, tablet, desktop e telas largas.
- **Evolucao incremental:** a aplicacao dos tokens deve ocorrer por fases, sem redesenho brusco.
- **Semantica antes de estetica:** o nome do token deve representar finalidade, nao apenas cor ou efeito.
- **Reuso controlado:** tokens devem reduzir duplicidade sem criar abstracoes prematuras.

## 4. Color Tokens

A paleta oficial utiliza Midnight Blue, Navy, Electric Blue, Sky Blue, branco, cinzas, violeta e dourado apenas para detalhes pequenos. Os tokens abaixo nao introduzem novas cores fora da identidade definida.

| Token | Valor hexadecimal | Finalidade | Exemplos de uso |
|---|---:|---|---|
| `color.background.primary` | `#060816` | Fundo principal da experiencia digital. | `body`, fundo do Hero, paginas escuras, areas de maior profundidade. |
| `color.background.secondary` | `#0B1120` | Fundo secundario para separar regioes sem criar contraste excessivo. | Secoes alternadas, rodape, blocos institucionais. |
| `color.surface` | `#111827` | Superficie padrao de componentes. | Cards, paineis, areas de conteudo tecnico, caixas informativas. |
| `color.surface.hover` | `#172033` | Superficie elevada ou em estado de interacao. | Hover de cards, menus, itens clicaveis, blocos ativos. |
| `color.brand.primary` | `#38BDF8` | Destaque principal da marca. | CTAs, links importantes, foco, indicadores, linhas de destaque. |
| `color.brand.primary.hover` | `#7DD3FC` | Destaque principal em estado de hover ou enfase leve. | Hover de links, bordas ativas, realces de navegacao. |
| `color.brand.secondary` | `#8B5CF6` | Destaque complementar da marca. | Detalhes de IA, arquitetura, acentos secundarios, gradientes moderados. |
| `color.brand.secondary.soft` | `#A78BFA` | Violeta suavizado para detalhes de baixa intensidade. | Marcadores discretos, linhas auxiliares, pequenos elementos editoriais. |
| `color.text.primary` | `#F8FAFC` | Texto principal em fundos escuros. | Titulos, conteudo essencial, labels prioritarios. |
| `color.text.secondary` | `#94A3B8` | Texto secundario. | Descricoes, subtitulos, textos de apoio, metadados. |
| `color.text.muted` | `#64748B` | Texto de menor enfase. | Legendas, observacoes, informacoes auxiliares, datas. |
| `color.border` | `#243047` | Bordas discretas e divisores. | Separadores, contornos de cards, linhas de timeline, divisorias do rodape. |
| `color.success` | `#22C55E` | Estado positivo ou disponibilidade. | Indicacao de disponibilidade profissional, validacao positiva, status saudavel. |
| `color.warning` | `#D6B25E` | Alerta moderado e detalhe premium com uso restrito. | Avisos nao destrutivos, chamadas de atencao, detalhes institucionais pequenos. |
| `color.error` | `#8B5CF6` | Estado critico temporario dentro da paleta aprovada, sempre acompanhado de texto claro. | Indicacao de erro em documentacao visual futura; nao substituir mensagens textuais. |

### Regras de Uso das Cores

- `color.background.primary` deve dominar fundos principais.
- `color.background.secondary` deve separar secoes longas ou rodapes.
- `color.surface` e `color.surface.hover` devem evitar que a interface vire uma colecao de cards pesados.
- `color.brand.primary` e o destaque principal; deve ser usado com moderacao para preservar hierarquia.
- `color.brand.secondary` deve complementar o ciano, especialmente em temas ligados a IA, arquitetura e sistemas distribuidos.
- `color.warning` usa o dourado oficial apenas como detalhe pequeno.
- `color.error` nao deve depender somente de cor; enquanto nao houver uma cor semantica adicional aprovada, mensagens criticas devem usar texto claro, borda, icone textual ou estrutura semantica.

## 5. Typography Tokens

### Familias

| Token | Fonte | Finalidade | Exemplos de uso |
|---|---|---|---|
| `font.family.heading` | `Space Grotesk` | Titulos, chamadas e hierarquia editorial. | Hero, titulos de secao, nomes de projetos. |
| `font.family.body` | `Inter` | Conteudo de leitura continua e interface. | Paragrafos, navegacao, botoes, descricoes. |
| `font.family.code` | `JetBrains Mono` | Conteudo tecnico e dados estruturados. | Slugs, snippets, tags tecnicas, metricas, versoes. |

### Escala Tipografica

| Token | Fonte | Peso | Tamanho | Line-height | Utilizacao |
|---|---|---:|---:|---:|---|
| `typography.display` | `Space Grotesk` | 700 | `48px` | `56px` | Titulo principal do Hero e pecas institucionais de maior destaque. |
| `typography.h1` | `Space Grotesk` | 700 | `40px` | `48px` | H1 da pagina quando nao houver display separado. |
| `typography.h2` | `Space Grotesk` | 700 | `32px` | `40px` | Titulos de secoes principais. |
| `typography.h3` | `Space Grotesk` | 600 | `24px` | `32px` | Titulos de blocos, projetos e grupos de conteudo. |
| `typography.h4` | `Space Grotesk` | 600 | `20px` | `28px` | Subtitulos, cabecalhos de cards e chamadas compactas. |
| `typography.body` | `Inter` | 400 | `16px` | `28px` | Texto base de leitura. |
| `typography.small` | `Inter` | 400 | `14px` | `22px` | Textos auxiliares, descricoes curtas, itens de navegacao. |
| `typography.caption` | `Inter` | 500 | `12px` | `18px` | Legendas, metadados, rotulos curtos. |
| `typography.code` | `JetBrains Mono` | 500 | `13px` | `22px` | Trechos tecnicos, tags, identificadores e exemplos de codigo. |

### Regras Tipograficas

- Headings devem usar `Space Grotesk` para transmitir precisao, modernidade e presenca tecnica.
- Texto de corpo deve usar `Inter` para legibilidade prolongada.
- Codigo, slugs, versoes e termos tecnicos de leitura rapida devem usar `JetBrains Mono`.
- Tamanhos de fonte nao devem escalar diretamente com largura de viewport.
- Letter spacing deve permanecer neutro, sem valores negativos.
- Titulos compactos dentro de cards nao devem usar escala de Hero.

## 6. Spacing Tokens

A escala de espacamento e baseada em multiplos de `4px`.

| Token | Valor | Utilizacao |
|---|---:|---|
| `space.0` | `0px` | Remocao explicita de espacamento. |
| `space.1` | `4px` | Ajustes finos, separacao entre icone e texto pequeno. |
| `space.2` | `8px` | Espacamento minimo entre itens relacionados. |
| `space.3` | `12px` | Respiro interno compacto em chips e labels. |
| `space.4` | `16px` | Padding padrao compacto, gaps de listas curtas. |
| `space.5` | `20px` | Ajuste intermediario para composicoes densas. |
| `space.6` | `24px` | Padding padrao de cards e blocos de conteudo. |
| `space.8` | `32px` | Separacao entre grupos dentro da mesma secao. |
| `space.10` | `40px` | Separacao vertical moderada em layouts responsivos. |
| `space.12` | `48px` | Separacao entre blocos principais. |
| `space.16` | `64px` | Espacamento vertical de secao em telas medias. |
| `space.20` | `80px` | Espacamento vertical de secao em desktop. |
| `space.24` | `96px` | Respiro institucional em Hero e secoes de maior impacto. |

### Regras de Espacamento

- Usar `space.4`, `space.6` e `space.8` como base de componentes.
- Usar `space.16` ou `space.20` para separacao entre secoes em desktop.
- Reduzir espacamentos em mobile sem quebrar a escala de multiplos de `4px`.
- Evitar espacamentos arbitrarios que dificultem consistencia futura.

## 7. Radius Tokens

| Token | Valor | Utilizacao |
|---|---:|---|
| `radius.small` | `8px` | Cards compactos, botoes, badges e campos futuros. |
| `radius.medium` | `12px` | Paineis e superficies de destaque moderado. |
| `radius.large` | `16px` | Blocos institucionais maiores, sem exagero visual. |
| `radius.pill` | `9999px` | Chips, badges e botoes em formato de pilula. |
| `radius.circle` | `50%` | Avatares, indicadores circulares e pontos de status. |

### Regras de Bordas Arredondadas

- Componentes funcionais devem priorizar `radius.small`.
- `radius.medium` e `radius.large` devem ser usados com moderacao.
- Evitar aparencia excessivamente arredondada em superficies tecnicas.

## 8. Shadow Tokens

| Token | Valor de referencia | Utilizacao |
|---|---|---|
| `shadow.sm` | `0 4px 12px rgba(0, 0, 0, 0.18)` | Elevacao sutil em cards e botoes sobre fundos escuros. |
| `shadow.md` | `0 12px 28px rgba(0, 0, 0, 0.24)` | Paineis de maior importancia e elementos em destaque moderado. |
| `shadow.lg` | `0 20px 48px rgba(0, 0, 0, 0.32)` | Uso raro em modais futuros ou superficies institucionais. |
| `shadow.glow` | `0 0 32px rgba(56, 189, 248, 0.22)` | Realce controlado com Electric Blue em elementos primarios. |

### Regras de Sombras

- Sombras devem criar hierarquia, nao decoracao excessiva.
- `shadow.glow` deve ser usado pontualmente em CTAs ou estados de foco visual.
- Evitar glow repetido em todos os cards.
- Sombras devem preservar contraste e nao comprometer legibilidade.

## 9. Gradient Tokens

Os gradientes oficiais devem derivar exclusivamente das cores da paleta WEPDEV, usando opacidade quando necessario.

| Token | Composicao | Utilizacao |
|---|---|---|
| `gradient.background.global` | `linear-gradient(180deg, #060816 0%, #0B1120 100%)` | Fundo geral de paginas e secoes amplas. |
| `gradient.hero.depth` | `radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18), transparent 32%), radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.16), transparent 30%), linear-gradient(180deg, #060816 0%, #0B1120 100%)` | Hero e banners institucionais. |
| `gradient.surface.subtle` | `linear-gradient(145deg, #111827 0%, #172033 100%)` | Superficies elevadas discretas. |
| `gradient.brand.line` | `linear-gradient(90deg, #38BDF8 0%, #8B5CF6 100%)` | Linhas de destaque, divisores ativos e pequenos indicadores. |
| `gradient.gold.detail` | `linear-gradient(90deg, #D6B25E 0%, #38BDF8 100%)` | Detalhe institucional raro, quando houver necessidade de destaque premium. |

### Regras de Gradientes

- Gradientes devem apoiar profundidade e identidade, sem dominar a composicao.
- Ciano e violeta devem ser usados com moderacao.
- Dourado deve aparecer apenas em detalhes pequenos.
- Evitar gradientes muito saturados, artificiais ou com muitas cores.

## 10. Motion Tokens

| Token | Valor | Utilizacao |
|---|---:|---|
| `motion.duration.fast` | `120ms` | Hover simples, foco, microinteracoes discretas. |
| `motion.duration.normal` | `200ms` | Transicoes de cards, botoes, menus e estados comuns. |
| `motion.duration.slow` | `320ms` | Entradas suaves e transicoes de maior area visual. |

| Token | Valor | Utilizacao |
|---|---|---|
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` | Transicoes de interface em geral. |
| `motion.easing.emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Destaques e mudancas perceptiveis de estado. |
| `motion.easing.entrance` | `cubic-bezier(0.22, 1, 0.36, 1)` | Aparicoes suaves em secoes ou elementos futuros. |

### Regras de Movimento

- Animacoes devem ser discretas, rapidas e funcionais.
- Estados de foco e hover devem responder sem atraso perceptivel.
- Respeitar `prefers-reduced-motion` em qualquer implementacao futura.
- Nao usar movimento para transmitir informacao essencial.

## 11. Breakpoints

| Token | Faixa de referencia | Utilizacao |
|---|---:|---|
| `breakpoint.mobile` | ate `480px` | Celulares e composicoes em coluna unica. |
| `breakpoint.tablet` | a partir de `768px` | Tablets e layouts com duas colunas controladas. |
| `breakpoint.desktop` | a partir de `1024px` | Layouts completos de desktop. |
| `breakpoint.wide` | a partir de `1440px` | Telas largas com largura maxima controlada. |

### Regras de Responsividade

- Mobile deve priorizar leitura, toque e ausencia de overflow horizontal.
- Tablet deve reorganizar conteudo sem depender de grids densos.
- Desktop deve usar composicoes mais ricas, mantendo hierarquia clara.
- Wide deve aumentar respiro, nao apenas esticar conteudo.

## 12. Component Mapping

| Componente | Tokens utilizados |
|---|---|
| Navbar | `color.background.primary`, `color.text.primary`, `color.text.secondary`, `color.brand.primary`, `color.border`, `typography.small`, `space.4`, `space.6`, `radius.small`, `motion.duration.fast`, `motion.easing.standard` |
| Hero | `color.background.primary`, `gradient.hero.depth`, `color.text.primary`, `color.text.secondary`, `color.brand.primary`, `color.brand.secondary`, `typography.display`, `typography.body`, `space.8`, `space.12`, `space.20`, `space.24`, `shadow.glow` |
| Footer | `color.background.secondary`, `color.text.primary`, `color.text.secondary`, `color.text.muted`, `color.border`, `color.brand.primary`, `typography.small`, `typography.caption`, `space.6`, `space.8`, `space.12` |
| Project Card | `color.surface`, `color.surface.hover`, `color.border`, `color.text.primary`, `color.text.secondary`, `color.brand.primary`, `color.brand.secondary`, `typography.h3`, `typography.body`, `typography.caption`, `space.4`, `space.6`, `radius.medium`, `shadow.sm`, `motion.duration.normal` |
| Contact Card | `color.surface`, `color.surface.hover`, `color.border`, `color.text.primary`, `color.text.secondary`, `color.brand.primary`, `typography.h4`, `typography.small`, `space.4`, `space.6`, `radius.medium`, `shadow.sm` |
| Buttons | `color.brand.primary`, `color.brand.primary.hover`, `color.background.primary`, `color.text.primary`, `color.border`, `typography.small`, `space.3`, `space.4`, `radius.small`, `shadow.glow`, `motion.duration.fast`, `motion.easing.standard` |
| Timeline | `color.border`, `color.brand.primary`, `color.brand.secondary`, `color.text.primary`, `color.text.secondary`, `color.surface`, `typography.h3`, `typography.small`, `space.4`, `space.6`, `space.8` |
| Skills | `color.surface`, `color.surface.hover`, `color.border`, `color.text.primary`, `color.text.secondary`, `color.brand.primary`, `typography.small`, `space.2`, `space.3`, `space.4`, `radius.pill` |
| Badges | `color.surface.hover`, `color.border`, `color.brand.primary`, `color.text.primary`, `typography.caption`, `space.2`, `space.3`, `radius.pill` |
| Section Titles | `color.text.primary`, `color.text.secondary`, `color.brand.primary`, `gradient.brand.line`, `typography.h2`, `typography.body`, `space.4`, `space.8`, `space.12` |

## 13. Pagina por Pagina

### Home

#### Hero

Tokens recomendados:

- fundo: `color.background.primary`, `gradient.hero.depth`;
- titulo: `typography.display`, `font.family.heading`, `color.text.primary`;
- texto de apoio: `typography.body`, `color.text.secondary`;
- CTA principal: `color.brand.primary`, `color.brand.primary.hover`, `radius.small`, `shadow.glow`;
- CTA secundario: `color.border`, `color.text.primary`, `color.surface.hover`;
- espacamento: `space.8`, `space.12`, `space.20`, `space.24`;
- movimento: `motion.duration.fast`, `motion.easing.standard`.

#### Sobre

Tokens recomendados:

- fundo: `color.background.secondary`;
- superficie: `color.surface`;
- titulo: `typography.h2`, `color.text.primary`;
- texto: `typography.body`, `color.text.secondary`;
- destaques: `color.brand.primary`, `color.brand.secondary`;
- divisores: `color.border`;
- espacamento: `space.8`, `space.12`, `space.16`;
- raio: `radius.medium`.

#### Projetos

Tokens recomendados:

- fundo: `color.background.primary`;
- cards: `color.surface`, `color.surface.hover`, `color.border`;
- titulos de projeto: `typography.h3`, `color.text.primary`;
- descricoes: `typography.body`, `color.text.secondary`;
- tags e status: `typography.caption`, `color.brand.primary`, `color.brand.secondary`, `color.success`;
- links de repositorio: `color.brand.primary`, `color.brand.primary.hover`;
- espacamento: `space.6`, `space.8`, `space.12`, `space.16`;
- raio: `radius.medium`;
- sombra: `shadow.sm`.

#### Tecnologias

Tokens recomendados:

- fundo: `color.background.secondary`;
- grupos: `color.surface`;
- badges: `color.surface.hover`, `color.border`, `radius.pill`;
- texto: `typography.small`, `color.text.primary`, `color.text.secondary`;
- codigo ou termos tecnicos: `typography.code`, `font.family.code`;
- detalhes: `color.brand.primary`, `color.brand.secondary`;
- espacamento: `space.3`, `space.4`, `space.6`, `space.8`.

#### Contato

Tokens recomendados:

- fundo: `color.background.primary`;
- superficie: `color.surface`;
- hover: `color.surface.hover`;
- destaque principal: `color.brand.primary`;
- disponibilidade: `color.success`;
- textos: `color.text.primary`, `color.text.secondary`, `color.text.muted`;
- links: `color.brand.primary`, `color.brand.primary.hover`;
- cards: `radius.medium`, `shadow.sm`;
- espacamento: `space.4`, `space.6`, `space.8`, `space.12`.

#### Rodape

Tokens recomendados:

- fundo: `color.background.secondary`;
- divisores: `color.border`;
- marca: `typography.h4`, `color.text.primary`;
- textos auxiliares: `typography.small`, `color.text.secondary`;
- metadados: `typography.caption`, `color.text.muted`;
- links: `color.text.secondary`, `color.brand.primary`;
- espacamento: `space.6`, `space.8`, `space.12`;
- gradiente opcional de linha superior: `gradient.brand.line`.

## 14. Roadmap de Implementacao

### BD-003 — Auditoria e Normalizacao Inicial

Objetivo:

- comparar estilos atuais com os tokens definidos;
- mapear divergencias de cor, tipografia, espacamento e raio;
- criar plano de migracao sem alterar a identidade visual percebida;
- priorizar ajustes de baixo risco.

Entregas esperadas:

- inventario tecnico de estilos atuais;
- lista de tokens ja representados no frontend;
- lista de lacunas;
- recomendacao de estrategia para aplicacao gradual.

### BD-004 — Aplicacao Controlada dos Tokens

Objetivo:

- aplicar tokens em componentes principais;
- reduzir valores visuais duplicados;
- preservar layout, conteudo, acessibilidade e responsividade;
- evitar redesenho completo.

Entregas esperadas:

- componentes principais alinhados aos tokens;
- validacao visual em mobile, tablet e desktop;
- ausencia de regressao de acessibilidade;
- documentacao das decisoes adotadas.

### BD-005 — Expansao para Ativos de Marca

Objetivo:

- preparar tokens para Open Graph, GitHub, LinkedIn, curriculo e apresentacoes;
- orientar criacao futura de imagens sociais e banners;
- consolidar consistencia entre canais.

Entregas esperadas:

- especificacao de ativos por canal;
- recomendacoes de uso de logo, slogan e paleta;
- criterios para imagens sociais;
- checklist de publicacao visual.

## 15. Criterios de Aceite

- O documento de tokens referencia a identidade oficial WEPDEV.
- Nenhuma cor fora da paleta oficial e introduzida como token aprovado.
- Tokens de cor possuem nome, valor hexadecimal, finalidade e exemplos de uso.
- Tokens de tipografia incluem familias, pesos, tamanhos, line-height e utilizacao.
- Espacamentos seguem escala baseada em multiplos de `4px`.
- Radius, sombras, gradientes, movimento e breakpoints estao documentados.
- Componentes principais possuem mapeamento de tokens.
- A pagina Home possui mapeamento por area.
- Roadmap BD-003, BD-004 e BD-005 esta definido.
- O documento nao inclui codigo CSS, Tailwind ou React.
- O documento nao solicita instalacao de dependencias.
- O documento nao altera conteudo visual existente.
- O documento complementa, sem substituir, o Brand Guidelines.

## 16. Definicao de Pronto

Esta especificacao estara pronta quando:

- `docs/02-design/DESIGN_TOKENS_WEPDEV.md` existir;
- todas as secoes obrigatorias estiverem preenchidas;
- os tokens estiverem alinhados ao `BRAND_GUIDELINES_WEPDEV.md`;
- a paleta oficial estiver preservada;
- nao houver alteracao em frontend, CSS, Tailwind, componentes React, imagens ou infraestrutura;
- nao houver commit;
- nao houver push;
- a proxima fase de implementacao puder usar este documento como referencia tecnica.

## 17. Fora de Escopo

Esta entrega nao inclui:

- alteracao de frontend;
- alteracao de CSS;
- alteracao de Tailwind;
- alteracao de componentes React;
- alteracao de imagens;
- criacao de SVG;
- criacao de logos;
- criacao de Open Graph image;
- alteracao de infraestrutura;
- alteracao de Docker;
- alteracao de Cloudflare;
- alteracao de Umami;
- instalacao de dependencias;
- criacao de codigo;
- refatoracao visual;
- redesenho completo;
- publicacao em redes sociais;
- commit;
- push.
