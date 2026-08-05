# EP-010 — SEO, Performance, Acessibilidade e Preparação para Divulgação

## 1. Identificação

- Código: EP-010
- Nome: SEO, Performance, Acessibilidade e Preparação para Divulgação
- Produto: WEPDEV Portfolio
- Sprint: 7 — Qualidade e Divulgação
- Prioridade: Alta
- Estado: Pronto para refinamento
- Responsável: Waldir Escouto Pereira

## 2. Objetivo

Preparar a WEPDEV Portfolio para indexação, compartilhamento profissional, auditoria técnica e divulgação pública em processos seletivos, LinkedIn, GitHub e currículo.

Este épico deve melhorar:

- indexação em mecanismos de busca;
- compartilhamento profissional;
- experiência em desktop e mobile;
- navegação acessível;
- carregamento eficiente;
- apresentação consistente em LinkedIn, WhatsApp, Discord e Microsoft Teams;
- divulgação em currículo, GitHub e processos seletivos;
- auditorias técnicas reproduzíveis.

O objetivo não é alterar o posicionamento profissional, reescrever experiências, redesenhar o site inteiro ou ampliar canais profissionais. O foco é tornar a versão já publicada mais encontrável, validável, acessível e pronta para divulgação.

## 3. Resultados Esperados

Ao final do épico, o projeto deverá possuir:

- título e descrição profissionais;
- URL canônica;
- `metadataBase`;
- Open Graph;
- Twitter Card;
- imagem social;
- `robots.txt`;
- `sitemap.xml`;
- favicon e ícones consistentes;
- manifest, caso faça sentido para o produto;
- dados estruturados JSON-LD;
- página 404;
- links válidos;
- acessibilidade revisada;
- responsividade validada;
- Lighthouse executado;
- documentação de validação;
- site pronto para divulgação.

Esses resultados devem preservar a integração atual do Umami Analytics, os eventos e Goals já configurados no EP-009.

## 4. Inventário Atual

Inventário realizado a partir dos arquivos atuais do frontend, documentação de produto e documentação de infraestrutura.

| Item | Estado atual | Arquivo | Situação | Ação recomendada |
| --- | --- | --- | --- | --- |
| Framework | Next.js `16.3.0`, React `19.2.8`, TypeScript | `frontend/package.json` | Adequado | Manter sem instalar dependências novas |
| Build de produção | `output: "standalone"` | `frontend/next.config.ts` | Adequado para Docker | Manter |
| Idioma | `pt-BR` no elemento `<html>` | `frontend/app/layout.tsx` | Adequado | Manter |
| Fontes | Geist e Geist Mono via `next/font/google` | `frontend/app/layout.tsx` | Adequado | Preservar |
| Title atual | `Waldir Escouto Pereira | Desenvolvedor Java Sênior` | `frontend/app/layout.tsx` | Bom ponto de partida | Manter ou ajustar pontualmente |
| Template atual | `%s | WEPDEV Portfolio` | `frontend/app/layout.tsx` | Adequado | Manter |
| Description atual | Descrição profissional com Java, backend enterprise, Spring Boot, Quarkus, microsserviços, arquitetura e IA | `frontend/app/layout.tsx` | Adequada, mas pode ser refinada para divulgação | Revisar para clareza e evitar excesso |
| Authors | `Waldir Escouto Pereira` | `frontend/app/layout.tsx` | Adequado | Manter |
| Creator | `Waldir Escouto Pereira` | `frontend/app/layout.tsx` | Adequado | Manter |
| Publisher | Não definido | `frontend/app/layout.tsx` | Lacuna | Definir `Waldir Escouto Pereira` ou `WEPDEV Portfolio` |
| Keywords | Lista com nome, Java, Spring Boot, Quarkus, microsserviços, arquitetura, Kafka, Docker, Kubernetes, IA | `frontend/app/layout.tsx` | Adequada, mas pode ser enxugada | Revisar sem keyword stuffing |
| Category | Não definida | `frontend/app/layout.tsx` | Lacuna | Avaliar `technology` ou equivalente suportado pelo Next.js |
| `metadataBase` | Não definido | `frontend/app/layout.tsx` | Lacuna agora que o domínio oficial existe | Definir `https://wepdev.com.br` |
| Canonical | Não definido | `frontend/app/layout.tsx` | Lacuna | Definir canonical para `/` |
| Open Graph | Não definido | `frontend/app/layout.tsx` | Lacuna | Implementar com URL absoluta e imagem social |
| Twitter Card | Não definido | `frontend/app/layout.tsx` | Lacuna | Implementar `summary_large_image`; não inventar usuário |
| Robots metadata | Não definido | `frontend/app/layout.tsx` | Lacuna | Definir indexação da home e seguir links |
| Referrer policy | Não identificada | `frontend/app/layout.tsx` | Lacuna opcional | Avaliar `strict-origin-when-cross-origin` |
| Script Umami | Integrado uma vez via `next/script` | `frontend/app/layout.tsx` | Adequado | Preservar sem alterar analytics |
| Website ID Umami | `79867cd5-31c2-4a41-8c7f-f69507a2e9af` | `frontend/app/layout.tsx` | Configurado | Não alterar |
| Core Web Vitals | `data-performance="true"` | `frontend/app/layout.tsx` | Habilitado | Manter |
| Eventos Umami | `navigation-click`, `primary-cta-click`, `linkedin-click`, `github-click`, `email-click`, `curriculum-click`, `project-repository-click` | `frontend/constantes/analytics.ts` e consumidores | Concluído no EP-009 | Não alterar neste épico |
| `robots.txt` | Não encontrado | `frontend/app` / `frontend/public` | Lacuna | Criar `frontend/app/robots.ts` |
| `sitemap.xml` | Não encontrado | `frontend/app` / `frontend/public` | Lacuna | Criar `frontend/app/sitemap.ts` |
| Manifest | Não encontrado | `frontend/app` / `frontend/public` | Lacuna opcional | Criar somente se agregar como site instalável simples |
| Favicon | Existe `favicon.ico` | `frontend/app/favicon.ico` | Presente | Validar coerência visual e renderização |
| Ícones adicionais | Não encontrados `icon.*` ou `apple-icon.*` no app/public | `frontend/app`, `frontend/public` | Lacuna | Criar ícones consistentes se necessário |
| Imagens públicas | Apenas currículo PDF em `public` | `frontend/public/waldir_escouto_pereira_cv.pdf` | Sem imagem social pública | Criar imagem social 1200x630 |
| Currículo PDF | Existe em `frontend/public/waldir_escouto_pereira_cv.pdf` | `frontend/public` | Adequado | Manter sem alterar conteúdo |
| Página 404 | Não encontrada `not-found.tsx` | `frontend/app` | Lacuna | Criar `frontend/app/not-found.tsx` |
| JSON-LD | Não encontrado | `frontend/app` / componentes | Lacuna | Implementar Person, WebSite e WebPage/ProfilePage |
| Landmarks | `header`, `main`, `footer`, `nav` presentes | `frontend/componentes/layout`, `frontend/app/page.tsx` | Bom ponto de partida | Auditar com leitor de tela |
| Seções semânticas | `section` com `aria-labelledby` via componente `Secao` | `frontend/componentes/ui/Secao.tsx` | Adequado | Manter e validar ids |
| Hierarquia de headings | Um `h1` no Hero; demais seções com `h2`; cards com `h3` | `frontend/app/page.tsx`, `frontend/componentes` | Adequada em inspeção estática | Validar no DOM renderizado |
| Skip link | Não identificado | `frontend/app/layout.tsx` / `frontend/componentes/layout` | Lacuna de acessibilidade | Adicionar link para o conteúdo principal |
| `aria-current` | Não identificado | `frontend/componentes/layout/Cabecalho.tsx` | Não aplicável sem estado de seção ativo | Avaliar sem transformar em Client Component |
| `aria-label` | Usado em navs, listas técnicas, Hero e links externos | `frontend/componentes` | Bom ponto de partida | Revisar excesso e consistência |
| Textos alternativos | Não há `<img>` ou `next/image` identificados | `frontend/app`, `frontend/componentes` | Sem imagens que exijam alt atualmente | Exigir alt para futuras imagens sociais se renderizadas em página |
| SVGs decorativos | SVGs usam `aria-hidden="true"` quando decorativos | `frontend/app/page.tsx`, componentes | Adequado | Manter |
| Foco visível | Classes `focus-visible` recorrentes | `frontend/componentes` | Adequado | Validar por teclado e contraste |
| Responsividade | Classes Tailwind com breakpoints e grids responsivos | `frontend/app`, `frontend/componentes` | Implementada | Validar em 390px, 768px e desktop |
| Links externos | LinkedIn, GitHub e repositório com `target="_blank"` e `rel="noopener noreferrer"` | `frontend/app/page.tsx`, componentes | Adequado | Validar HTTP e nomes acessíveis |
| E-mail | `mailto:wepcienciadacomputacao@gmail.com` | `frontend/constantes/contatos.ts` | Adequado | Manter |
| Currículo | `/waldir_escouto_pereira_cv.pdf` | `frontend/constantes/contatos.ts` | Adequado | Validar HTTP 200 e `application/pdf` |
| Links internos | Âncoras `#inicio`, `#sobre`, `#experiencia`, `#projetos`, `#contato` | `Cabecalho`, `Rodape`, Hero | Adequados | Validar que todos os ids existem |
| Página 404 no build | Rota `_not-found` gerada pelo Next.js padrão | Build anterior do Next.js | Funcional, mas genérica | Criar página 404 personalizada |
| Problemas conhecidos | Ausência de canonical, OG, Twitter Card, robots, sitemap, JSON-LD, imagem social, skip link e página 404 customizada | Diversos | Lacunas do EP-010 | Priorizar implementação incremental |

## 5. SEO Técnico

Requisitos:

- manter título principal profissional e direto;
- manter template de título para futuras páginas;
- revisar descrição com foco em clareza, sem excesso de palavras-chave;
- definir `applicationName` como `WEPDEV Portfolio`;
- manter `authors` com `Waldir Escouto Pereira`;
- manter `creator` com `Waldir Escouto Pereira`;
- definir `publisher` como `Waldir Escouto Pereira` ou `WEPDEV Portfolio`;
- revisar `keywords` para tecnologias reais já presentes no portfólio ou currículo;
- definir `category` de forma compatível com o uso do Next.js;
- definir `metadataBase` com `https://wepdev.com.br`;
- definir `alternates.canonical` para `/`;
- definir metadata de robots permitindo indexação da página pública;
- avaliar política de referrer sem quebrar navegação ou analytics;
- usar URLs absolutas nos metadados sociais;
- preservar `lang="pt-BR"`;
- usar o domínio oficial `wepdev.com.br`.

Não prometer ranqueamento em mecanismos de busca. SEO técnico melhora elegibilidade, clareza e compartilhamento, mas não garante posição.

## 6. Conteúdo dos Metadados

Conteúdo recomendado:

Título:

```text
Waldir Escouto Pereira | Desenvolvedor Java Sênior
```

Template:

```text
%s | WEPDEV Portfolio
```

Descrição:

```text
Portfólio profissional de Waldir Escouto Pereira, desenvolvedor Java sênior com experiência em backend, microsserviços, integrações, arquitetura, DevOps e Inteligência Artificial aplicada à Engenharia de Software.
```

Palavras-chave possíveis:

- Waldir Escouto Pereira;
- desenvolvedor Java;
- Java sênior;
- backend;
- Spring Boot;
- Quarkus;
- microsserviços;
- Kafka;
- Docker;
- Kubernetes;
- arquitetura de software;
- inteligência artificial;
- OpenAI;
- Ollama.

Regras:

- não exagerar a quantidade de palavras-chave;
- não incluir tecnologias que não aparecem no portfólio ou currículo;
- não incluir nomes de empresas vedados no conteúdo público;
- não incluir dados sensíveis;
- não inventar redes sociais ou canais profissionais.

## 7. Open Graph

Requisitos:

- `type`: `website`;
- `locale`: `pt_BR`;
- `url`: `https://wepdev.com.br`;
- `siteName`: `WEPDEV Portfolio`;
- `title`: alinhado ao título principal;
- `description`: alinhada à descrição profissional;
- imagem social pública em 1200x630;
- `width`: `1200`;
- `height`: `630`;
- `alt`: texto descritivo da imagem;
- URL absoluta para a imagem.

A imagem social deve:

- refletir a identidade visual atual;
- mostrar `WEPDEV`;
- mostrar `Waldir Escouto Pereira`;
- indicar `Desenvolvedor Java Sênior`;
- usar a paleta azul-marinho, ciano e violeta;
- possuir bom contraste;
- ser legível em miniatura;
- não conter excesso de texto;
- não usar fotografia sem autorização;
- não inventar logos de empresas.

A criação visual da imagem social poderá exigir uma entrega separada, especialmente se houver validação manual de legibilidade em LinkedIn, WhatsApp, Discord e Teams.

## 8. Twitter Card

Requisitos:

- `card`: `summary_large_image`;
- `title`: alinhado ao Open Graph;
- `description`: alinhada ao Open Graph;
- `images`: usar a mesma imagem social quando adequada;
- `creator`: definir somente se existir conta real confirmada.

Não inventar usuário do X/Twitter.

## 9. Robots e Sitemap

Criar:

- `frontend/app/robots.ts`;
- `frontend/app/sitemap.ts`.

Requisitos para robots:

- usar host oficial `https://wepdev.com.br`;
- indicar sitemap oficial `https://wepdev.com.br/sitemap.xml`;
- permitir indexação da página inicial;
- não bloquear assets necessários;
- bloquear apenas caminhos administrativos inexistentes ou desnecessários se houver justificativa;
- não incluir `analytics.wepdev.com.br` no sitemap.

Requisitos para sitemap:

- incluir a página inicial `https://wepdev.com.br/`;
- não incluir o PDF como página principal do sitemap;
- não incluir painel Umami, Portainer, servidor ou caminhos administrativos;
- usar data de modificação coerente;
- usar prioridade sem exagero;
- manter estrutura simples enquanto o site tiver uma única página pública.

## 10. Favicon, Ícones e Manifest

Inventário atual:

- existe `frontend/app/favicon.ico`;
- não foram encontrados `icon.png`, `icon.svg`, `apple-icon.*` ou manifest próprios;
- `frontend/public` contém apenas `waldir_escouto_pereira_cv.pdf`.

Requisitos:

- validar se `favicon.ico` reflete a identidade WEPDEV;
- criar `icon.png` ou `icon.svg` se houver ganho real de consistência;
- criar `apple-touch-icon` em tamanho adequado se a divulgação mobile justificar;
- criar manifest somente se fizer sentido para o produto;
- usar nome curto como `WEPDEV`;
- usar nome completo como `WEPDEV Portfolio`;
- definir cores coerentes com a aplicação;
- usar `display: standalone` somente se o comportamento instalado for desejado;
- não criar PWA completa sem necessidade;
- não adicionar service worker.

## 11. Dados Estruturados

Definir JSON-LD para:

1. `Person`;
2. `WebSite`;
3. `ProfilePage` ou `WebPage`, conforme o modelo final da home.

Para `Person`, usar apenas dados públicos confirmados:

- `name`: `Waldir Escouto Pereira`;
- `url`: `https://wepdev.com.br`;
- `jobTitle`: `Desenvolvedor Java Sênior`;
- `sameAs`:
  - `https://www.linkedin.com/in/wepdev/`;
  - `https://github.com/wep1980`;
- `knowsAbout` com tecnologias reais do portfólio, como Java, Spring Boot, Quarkus, microsserviços, Kafka, Docker, Kubernetes, arquitetura de software, DevOps, OpenAI, Ollama e Inteligência Artificial aplicada à Engenharia de Software.

O e-mail só deve entrar no JSON-LD se houver decisão explícita de expor esse dado também em dados estruturados. Embora o e-mail já esteja visível no site, a exposição em JSON-LD pode aumentar coleta automatizada.

Não incluir:

- CPF;
- endereço residencial;
- telefone;
- data de nascimento;
- empresa atual;
- clientes;
- dados sensíveis;
- dados não públicos;
- URLs privadas;
- IP do servidor;
- credenciais.

Avaliar `SoftwareSourceCode` somente em páginas próprias de projetos futuros. Na home, evitar inserir esse tipo de forma artificial apenas para enriquecer schema.

## 12. Acessibilidade

Auditar:

- skip link para o conteúdo principal;
- landmarks `header`, `nav`, `main`, `section` e `footer`;
- associação de seções com `aria-labelledby`;
- ordem dos headings;
- existência de um único `h1`;
- links descritivos;
- uso de `aria-label`;
- necessidade real de `aria-current`;
- foco visível;
- navegação por teclado;
- contraste;
- tamanho de toque;
- comportamento de `details` e `summary`;
- SVGs decorativos com `aria-hidden`;
- leitura com leitor de tela;
- `prefers-reduced-motion`;
- zoom de 200%;
- responsividade em aproximadamente 390 px.

Regras:

- não adicionar ARIA redundante quando HTML semântico for suficiente;
- não criar componentes Client apenas para acessibilidade cosmética;
- não quebrar navegação por âncoras;
- não depender somente de cor;
- manter textos de links compreensíveis fora de contexto.

## 13. Performance

Auditar:

- bundle gerado pelo Next.js;
- JavaScript enviado ao cliente;
- preservação de Server Components;
- fontes e carregamento de `next/font`;
- preload quando aplicável;
- CSS e classes Tailwind;
- imagens e assets públicos;
- SVGs inline;
- script do Umami;
- cache de assets;
- Core Web Vitals;
- TTFB;
- LCP;
- CLS;
- INP;
- compressão;
- standalone output;
- Docker.

Regras:

- não remover o Umami apenas para melhorar pontuação;
- não otimizar sem evidência;
- não instalar dependências sem necessidade comprovada;
- priorizar medições em produção, pois Cloudflare, cache, compressão e túnel afetam os resultados reais.

## 14. Lighthouse

Executar Lighthouse:

- em desktop;
- em mobile;
- no ambiente de produção;
- na página inicial;
- em janela anônima;
- pelo menos três execuções quando possível.

Metas de referência:

- Performance: 90 ou superior;
- Accessibility: 95 ou superior;
- Best Practices: 95 ou superior;
- SEO: 95 ou superior.

Essas metas são referências de qualidade, não garantias absolutas. Resultados podem variar por rede, dispositivo, carga do servidor, cache, extensão do navegador e estado do Cloudflare.

Registrar:

- data;
- ambiente;
- URL;
- versão do navegador;
- resultados;
- principais oportunidades;
- correções realizadas;
- limitações da medição.

## 15. Links e Navegação

Auditar:

- links internos;
- âncoras;
- GitHub;
- LinkedIn;
- e-mail;
- currículo;
- repositórios;
- `target`;
- `rel`;
- protocolo;
- respostas HTTP;
- links quebrados;
- redirecionamentos;
- nomes acessíveis.

Links atuais identificados:

- `#inicio`;
- `#sobre`;
- `#experiencia`;
- `#projetos`;
- `#contato`;
- `https://www.linkedin.com/in/wepdev/`;
- `https://github.com/wep1980`;
- `mailto:wepcienciadacomputacao@gmail.com`;
- `/waldir_escouto_pereira_cv.pdf`;
- `https://github.com/wep1980/wepdev-portfolio`.

Não remover eventos do Umami durante a revisão de links.

## 16. Página 404

Criar:

```text
frontend/app/not-found.tsx
```

Requisitos:

- mensagem clara;
- identidade visual do portfólio;
- link para retornar à página inicial;
- acessibilidade;
- ausência de conteúdo fictício;
- Server Component;
- sem dependências;
- manter título adequado quando tecnicamente viável;
- não criar rotas adicionais sem necessidade.

## 17. Segurança e Privacidade

Requisitos:

- nenhuma credencial entra em metadata;
- nenhum `APP_SECRET` é exposto;
- Website ID do Umami permanece como identificador público;
- nenhum dado pessoal novo é coletado;
- analytics permanece sem cookies de publicidade;
- links externos usam `rel="noopener noreferrer"`;
- JSON-LD contém somente dados públicos;
- não expor caminhos internos;
- não expor infraestrutura;
- não expor IP do servidor;
- não documentar credenciais;
- não incluir dados de Cloudflare, Portainer, PostgreSQL ou Umami administrativo no frontend.

## 18. Divulgação

Validar compartilhamento em:

- LinkedIn;
- WhatsApp;
- Discord;
- Microsoft Teams;
- GitHub README;
- currículo PDF.

Preparar conteúdo sugerido para divulgação, sem publicar automaticamente:

- URL oficial: `https://wepdev.com.br`;
- título: `Waldir Escouto Pereira | Desenvolvedor Java Sênior`;
- descrição curta: `Portfólio profissional de Waldir Escouto Pereira, Desenvolvedor Java Sênior.`;
- descrição média: `Portfólio profissional com experiência em Java Backend, microsserviços, arquitetura de software, DevOps e Inteligência Artificial aplicada à Engenharia de Software.`;
- texto para LinkedIn, a ser aprovado antes de publicação;
- imagem social;
- chamada para ação, como `Acesse o portfólio` ou `Conheça meus projetos`.

Não criar publicação automática, automação de rede social, posts via API ou integração com plataformas externas.

## 19. Documentação

Planejar atualização ou criação de:

- `docs/04-quality/01-seo.md`;
- `docs/04-quality/02-accessibility.md`;
- `docs/04-quality/03-performance.md`;
- `docs/04-quality/04-lighthouse.md`;
- `docs/04-quality/05-sharing.md`.

A estrutura poderá ser refinada conforme o padrão real do repositório. No momento da especificação, não foram encontrados arquivos em `docs/04-quality`.

## 20. Histórias de Usuário

### US-010.1 — Inventariar SEO Atual

Descrição: como mantenedor, quero conhecer o estado atual de SEO, metadata, assets e rotas técnicas para planejar correções sem retrabalho.

Valor: evita criar metadados duplicados, assets desnecessários ou documentação inconsistente.

Critérios de aceite:

- metadata atual inventariada;
- assets públicos inventariados;
- ausência ou presença de robots, sitemap, manifest, 404 e JSON-LD registrada;
- lacunas documentadas;
- nenhuma alteração visual realizada.

Dependências:

- acesso ao código atual do frontend;
- domínio oficial confirmado.

Fora de escopo:

- implementar correções;
- executar publicação.

### US-010.2 — Implementar Metadata Técnica

Descrição: como visitante vindo de mecanismos de busca, quero encontrar título e descrição claros para entender o conteúdo do portfólio antes de abrir a página.

Valor: melhora descoberta, clareza e consistência de apresentação.

Critérios de aceite:

- título principal definido;
- template preservado;
- descrição profissional revisada;
- `metadataBase` definido com `https://wepdev.com.br`;
- canonical configurado para `/`;
- authors, creator e publisher definidos;
- keywords revisadas sem exagero;
- metadata não contém dados sensíveis.

Dependências:

- domínio oficial ativo;
- conteúdo profissional validado.

Fora de escopo:

- prometer ranqueamento;
- criar novas páginas de conteúdo.

### US-010.3 — Implementar Open Graph

Descrição: como usuário que recebe o link em redes e mensageria, quero ver um preview profissional e confiável.

Valor: aumenta clareza e credibilidade no compartilhamento.

Critérios de aceite:

- Open Graph `website` configurado;
- URL absoluta definida;
- title e description coerentes;
- imagem 1200x630 pública;
- alt da imagem definido;
- preview validado em ferramentas ou ambientes reais quando possível.

Dependências:

- imagem social aprovada;
- `metadataBase` definido.

Fora de escopo:

- publicar automaticamente em redes sociais;
- usar logos de empresas sem autorização.

### US-010.4 — Criar Imagem Social

Descrição: como recrutador ou contato profissional, quero reconhecer rapidamente a marca WEPDEV e o perfil Java Sênior ao receber o link.

Valor: melhora a apresentação do portfólio em cards sociais.

Critérios de aceite:

- imagem 1200x630 criada;
- texto legível em miniatura;
- contém WEPDEV, nome e cargo;
- segue paleta atual;
- não usa fotografia sem autorização;
- não inventa logos de empresas;
- arquivo público versionado.

Dependências:

- aprovação visual;
- definição de caminho público da imagem.

Fora de escopo:

- redesign completo;
- nova identidade visual.

### US-010.5 — Criar Robots e Sitemap

Descrição: como mecanismo de busca, quero acessar instruções claras de rastreamento e mapa da página pública.

Valor: melhora indexação técnica e previsibilidade.

Critérios de aceite:

- `robots.txt` acessível;
- `sitemap.xml` acessível;
- host oficial informado;
- home incluída;
- PDF não incluído como página principal;
- analytics e caminhos administrativos não incluídos;
- assets necessários não bloqueados.

Dependências:

- domínio oficial confirmado.

Fora de escopo:

- SEO para páginas futuras inexistentes.

### US-010.6 — Implementar JSON-LD

Descrição: como mecanismo de busca, quero dados estruturados básicos para compreender pessoa, site e página.

Valor: melhora legibilidade semântica do conteúdo público.

Critérios de aceite:

- `Person` válido;
- `WebSite` válido;
- `WebPage` ou `ProfilePage` válido;
- apenas dados públicos confirmados;
- `sameAs` contém LinkedIn e GitHub;
- nenhum dado sensível incluído.

Dependências:

- URLs públicas confirmadas;
- decisão sobre exposição de e-mail em JSON-LD.

Fora de escopo:

- schema artificial para projetos sem página própria;
- dados de empresa atual ou clientes.

### US-010.7 — Revisar Favicon e Ícones

Descrição: como visitante, quero ver uma identidade consistente na aba do navegador e em atalhos mobile.

Valor: reforça profissionalismo e reconhecimento visual.

Critérios de aceite:

- favicon validado;
- ícones adicionais criados se necessário;
- apple-touch-icon avaliado;
- cores consistentes;
- manifest criado apenas se fizer sentido;
- nenhum service worker criado.

Dependências:

- identidade visual atual;
- decisão sobre manifest.

Fora de escopo:

- PWA completa.

### US-010.8 — Criar Página 404

Descrição: como visitante que acessa uma URL inexistente, quero receber uma orientação clara para voltar ao portfólio.

Valor: melhora experiência e reduz abandono em links incorretos.

Critérios de aceite:

- `frontend/app/not-found.tsx` criado;
- mensagem clara;
- link para home;
- Server Component;
- sem dependências;
- acessibilidade preservada.

Dependências:

- componentes de layout existentes.

Fora de escopo:

- busca interna;
- páginas dinâmicas.

### US-010.9 — Auditar Acessibilidade

Descrição: como visitante que usa teclado ou tecnologia assistiva, quero navegar pelo portfólio sem bloqueios.

Valor: torna o site mais inclusivo e tecnicamente confiável.

Critérios de aceite:

- skip link avaliado ou implementado;
- landmarks validados;
- um único `h1`;
- headings em ordem coerente;
- foco visível;
- links descritivos;
- contraste adequado;
- navegação por teclado validada;
- zoom de 200% validado.

Dependências:

- site renderizado local e em produção.

Fora de escopo:

- criar Client Components apenas para rastrear foco;
- adicionar ARIA redundante.

### US-010.10 — Auditar Performance

Descrição: como visitante mobile ou em rede variável, quero acessar o portfólio rapidamente.

Valor: melhora experiência e reduz perda de visitantes.

Critérios de aceite:

- bundle analisado;
- Core Web Vitals avaliados;
- LCP, CLS e INP registrados;
- script do Umami preservado;
- fontes avaliadas;
- assets avaliados;
- Docker standalone preservado.

Dependências:

- build de produção;
- ambiente público acessível.

Fora de escopo:

- remover analytics para inflar score;
- instalar biblioteca de otimização sem evidência.

### US-010.11 — Validar Links

Descrição: como visitante, quero que todos os links públicos funcionem e tenham nomes claros.

Valor: evita fricção em conversões profissionais.

Critérios de aceite:

- links internos funcionam;
- LinkedIn funciona;
- GitHub funciona;
- e-mail usa `mailto:`;
- currículo responde;
- repositório público responde;
- links externos seguros;
- eventos Umami preservados.

Dependências:

- acesso à internet para validar links externos;
- deploy público para validar PDF e home.

Fora de escopo:

- criar novos canais.

### US-010.12 — Executar Lighthouse

Descrição: como mantenedor, quero medições reproduzíveis para orientar melhorias técnicas.

Valor: cria baseline objetivo de qualidade.

Critérios de aceite:

- execução desktop registrada;
- execução mobile registrada;
- produção usada como referência;
- pelo menos três execuções quando possível;
- resultados documentados;
- oportunidades priorizadas.

Dependências:

- site público saudável;
- navegador compatível.

Fora de escopo:

- prometer score fixo permanente.

### US-010.13 — Validar Compartilhamento

Descrição: como profissional divulgando o portfólio, quero que o link gere previews corretos em canais comuns.

Valor: melhora apresentação em processos seletivos e redes profissionais.

Critérios de aceite:

- preview validado no LinkedIn;
- preview validado no WhatsApp quando possível;
- preview validado no Discord;
- preview validado no Teams quando possível;
- imagem, título e descrição aparecem corretamente;
- cache de previews documentado.

Dependências:

- Open Graph publicado;
- imagem social pública.

Fora de escopo:

- publicação automática.

### US-010.14 — Documentar Resultados

Descrição: como mantenedor, quero registrar validações, decisões e limitações para futuras evoluções.

Valor: facilita manutenção e auditoria.

Critérios de aceite:

- documentação de SEO criada;
- documentação de acessibilidade criada;
- documentação de performance criada;
- documentação de Lighthouse criada;
- documentação de compartilhamento criada;
- resultados e limitações registrados.

Dependências:

- auditorias executadas.

Fora de escopo:

- documentação jurídica completa de privacidade.

### US-010.15 — Preparar Divulgação

Descrição: como Waldir, quero ter textos e assets prontos para divulgar o portfólio de forma consistente.

Valor: reduz atrito para divulgação em LinkedIn, currículo, GitHub e processos seletivos.

Critérios de aceite:

- URL oficial registrada;
- título curto definido;
- descrição curta definida;
- descrição média definida;
- texto para LinkedIn preparado;
- chamada para ação definida;
- nenhuma publicação automática realizada.

Dependências:

- preview social validado;
- site público saudável.

Fora de escopo:

- automação de publicação;
- contratação de ferramentas externas.

## 21. Fases de Implementação

### Fase 1 — SEO Técnico Inicial

- inventário;
- metadata;
- canonical;
- robots;
- sitemap.

### Fase 2 — Compartilhamento e Identidade

- Open Graph;
- Twitter Card;
- imagem social;
- favicon;
- ícones.

### Fase 3 — Semântica, Schema e Links

- JSON-LD;
- página 404;
- links.

### Fase 4 — Acessibilidade e Responsividade

- acessibilidade;
- responsividade;
- teclado;
- contraste.

### Fase 5 — Performance e Medição

- performance;
- Lighthouse;
- Core Web Vitals.

### Fase 6 — Divulgação e Documentação

- validação de compartilhamento;
- documentação;
- preparação para divulgação.

## 22. Critérios de Aceite Gerais

- metadata correta;
- `metadataBase` definida;
- canonical correto;
- Open Graph completo;
- Twitter Card completa;
- imagem social pública;
- `robots.txt` acessível;
- `sitemap.xml` acessível;
- JSON-LD válido;
- favicon funcionando;
- página 404 funcionando;
- links públicos funcionando;
- um único `h1`;
- navegação por teclado;
- foco visível;
- ausência de overflow horizontal;
- Lighthouse executado;
- metas registradas;
- `npm run lint` passa;
- `npm run build` passa;
- Docker build passa;
- container saudável;
- site responde HTTP 200;
- currículo continua acessível;
- Umami continua funcionando;
- eventos continuam funcionando;
- `package.json` e `package-lock.json` não são alterados sem justificativa;
- nenhuma dependência instalada sem necessidade;
- nenhuma informação fictícia adicionada;
- documentação atualizada.

## 23. Fora de Escopo

- redesign completo;
- nova identidade visual;
- backend;
- formulário de contato;
- blog;
- CMS;
- internacionalização;
- PWA completa;
- service worker;
- autenticação;
- Google Analytics;
- novos eventos do Umami;
- novos Goals;
- Funnels;
- Heatmaps;
- Session Replay;
- testes A/B;
- anúncios;
- automação de publicação;
- compra de serviços externos;
- alteração do currículo PDF;
- alteração de experiências profissionais.

## 24. Definição de Pronto

O épico estará pronto quando:

- SEO técnico estiver implementado;
- compartilhamento apresentar preview profissional;
- dados estruturados forem válidos;
- robots e sitemap estiverem publicados;
- acessibilidade essencial estiver validada;
- performance estiver medida;
- página 404 estiver disponível;
- links estiverem funcionando;
- site estiver validado em desktop e mobile;
- Lighthouse estiver documentado;
- produção estiver saudável;
- analytics permanecer funcionando;
- documentação estiver concluída;
- site estiver pronto para divulgação.

## 25. Não Alterar

Não alterar nesta especificação:

- frontend;
- código;
- `package.json`;
- `package-lock.json`;
- dependências;
- Docker;
- Compose;
- Cloudflare;
- Umami;
- Goals;
- PostgreSQL;
- currículo PDF;
- conteúdo das experiências;
- projetos;
- contatos;
- design.

Durante a implementação futura do épico, qualquer alteração fora das fases aprovadas deve ser justificada e revisada antes da execução.
