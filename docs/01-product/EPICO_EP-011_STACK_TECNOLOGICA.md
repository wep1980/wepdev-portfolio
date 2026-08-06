# EP-011 — Stack Tecnológica

## 1. Identificação

- Código: EP-011
- Nome: Stack Tecnológica
- Produto: WEPDEV Portfolio
- Sprint: 8 — Comunicação Técnica e Posicionamento
- Prioridade: Alta
- Estado: Pronto para refinamento
- Responsável: Waldir Escouto Pereira

## 2. Visão do Produto

O WEPDEV Portfolio é uma presença profissional pública de Waldir Escouto Pereira, Desenvolvedor Java Sênior, orientada a demonstrar capacidade de engenharia de software, backend enterprise, arquitetura, cloud, qualidade e Inteligência Artificial aplicada.

A seção de Stack Tecnológica será uma parte da Home V2 dedicada a explicar o repertório técnico de forma compreensível, contextualizada e visualmente escaneável. Ela deve ajudar recrutadores, lideranças técnicas e pares de engenharia a entenderem em quais contextos as tecnologias aparecem e quais problemas ajudam a resolver.

A seção existe para comunicar competências de engenharia e capacidade técnica, e não apenas listar tecnologias.

Tecnologias devem ser apresentadas como meios para construir, operar, testar e evoluir software. A identidade principal continua sendo Engenharia de Software, com ênfase em backend Java, sistemas empresariais, arquitetura e IA aplicada.

## 3. Objetivos

### 3.1 Objetivo principal

Organizar a stack pública em categorias semânticas que permitam uma leitura rápida, profissional e tecnicamente honesta.

### 3.2 Objetivos específicos

- comunicar a base principal em Java e frameworks;
- explicar o repertório de arquitetura e integrações;
- apresentar mensageria, persistência e dados;
- demonstrar familiaridade com containers, cloud e entrega;
- relacionar testes, qualidade e DevOps à evolução segura;
- apresentar IA como aplicação técnica, não como efeito de moda;
- reduzir a necessidade de interpretar dezenas de itens isolados;
- apoiar a avaliação de aderência técnica em processos seletivos;
- manter coerência com os projetos, experiências e estudos públicos do portfólio;
- preservar uma leitura boa em desktop, tablet e mobile.

## 4. Problema Atual

Uma lista extensa de tecnologias, sem contexto, produz baixo valor informacional. Ela pode parecer uma coleção de palavras-chave, dificultar a comparação entre áreas e sugerir níveis de domínio que não foram medidos.

Os principais problemas a resolver são:

- tecnologias apresentadas como itens isolados;
- repetição entre Hero, Projetos, Tecnologias e Experiência;
- excesso de badges pequenos;
- ausência de relação entre ferramenta e finalidade;
- mistura de tecnologias utilizadas, previstas e exploratórias;
- leitura difícil para pessoas não especialistas em toda a stack;
- risco de transformar a seção em um dashboard;
- risco de comunicar proficiência por aparência, e não por evidência;
- excesso de conteúdo acima da dobra;
- ausência de uma hierarquia clara entre fundamentos, práticas e ferramentas.

O EP-011 deve resolver a comunicação e a arquitetura de informação. Não deve transformar a seção em um inventário exaustivo nem criar alegações de senioridade por tecnologia.

## 5. Personas

### 5.1 Recrutador técnico

Precisa identificar rapidamente a aderência do perfil a vagas de desenvolvimento Java, backend, arquitetura ou engenharia de software. Valoriza agrupamento claro, termos reconhecíveis e links para evidências.

### 5.2 Tech lead ou arquiteto

Quer compreender a amplitude do repertório e o contexto em que tecnologias de integração, mensageria, testes, containers e observabilidade aparecem. Valoriza coerência arquitetural mais do que quantidade de ferramentas.

### 5.3 Gestor de engenharia

Busca sinais de maturidade, capacidade de evolução, segurança, qualidade e comunicação técnica. Não precisa de uma lista aprofundada de dependências, mas precisa entender áreas de contribuição.

### 5.4 Desenvolvedor ou par técnico

Pode explorar o portfólio e os repositórios para verificar decisões, práticas e tecnologias utilizadas. Valoriza precisão, transparência sobre o que está planejado e acesso a contexto técnico.

### 5.5 Visitante vindo do currículo ou LinkedIn

Tem pouco tempo disponível e precisa encontrar rapidamente uma visão geral da stack sem atravessar uma parede de texto ou uma grade de badges.

## 6. Jornada de Leitura

A seção deve seguir uma leitura do geral para o específico:

```text
Engenharia de Software
        ↓
Áreas de atuação técnica
        ↓
Categorias da stack
        ↓
Tecnologias e práticas relacionadas
        ↓
Projetos e experiências que dão contexto
```

O visitante deve entender primeiro a função da stack e só depois encontrar os nomes das tecnologias. A jornada não deve começar por uma nuvem de ferramentas.

### Ordem recomendada

1. Introdução curta sobre a orientação da stack.
2. Seis categorias de tecnologia.
3. Descrição de finalidade para cada categoria.
4. Itens técnicos reais em quantidade controlada.
5. Relação com Projetos e Experiência por navegação natural.

## 7. Princípios de UX

- contexto antes da enumeração;
- agrupamento por problema e responsabilidade;
- leitura por escaneamento;
- uma hierarquia visual clara;
- menor quantidade de elementos concorrentes;
- nomes consistentes com o domínio técnico;
- separação entre utilizado, planejado e exploratório;
- transparência sobre o que ainda não foi implementado;
- nenhuma escala visual que simule proficiência;
- nenhuma dependência de cor para transmitir significado;
- tecnologias como evidências, não como identidade completa;
- progressão natural para Projetos e Experiência;
- conteúdo útil mesmo sem JavaScript;
- HTML semântico e Server Components preservados;
- interação somente quando adicionar valor real.

## 8. Arquitetura da Informação

### 8.1 Nível da página

A seção deve aparecer depois de Projetos e antes de Sobre, conforme a arquitetura da Home V2. O visitante chega à stack depois de conhecer a identidade profissional e ver evidências concretas de trabalho.

### 8.2 Nível da seção

Estrutura proposta:

- `Tecnologias e ferramentas` como label ou identificação curta;
- título orientado a engenharia;
- introdução de uma ou duas frases;
- grupos de tecnologias;
- descrição de finalidade por grupo;
- itens técnicos reais;
- indicação contextual quando um item for planejado ou associado a estudo futuro.

### 8.3 Nível do grupo

Cada grupo deve possuir:

- título compreensível;
- descrição curta da responsabilidade técnica;
- conjunto controlado de itens;
- ordem que comece pelos fundamentos e vá para ferramentas complementares.

O grupo não deve parecer um produto independente. A unidade principal é a categoria editorial, não o badge individual.

### 8.4 Relação com outras seções

- Hero comunica posicionamento e especialidades principais.
- Projetos demonstram aplicação concreta.
- Tecnologias organiza o repertório.
- Sobre explica visão profissional.
- Experiência fornece contexto de trajetória.
- Como gero valor traduz tecnologia em contribuição.
- Princípios explicam critérios de decisão.

A seção não deve repetir todas as tecnologias em cada seção. Repetições pontuais são aceitáveis quando ajudam a contextualizar um projeto ou experiência.

## 9. Categorias da Stack

As categorias devem partir da fonte de dados existente em `frontend/constantes/tecnologias.ts`.

### 9.1 Java e frameworks

Finalidade: base principal para construção e evolução de aplicações backend.

Itens públicos atuais:

- Java
- Java 21
- Spring Boot
- Quarkus
- Jakarta EE

### 9.2 Arquitetura e integrações

Finalidade: contratos, serviços distribuídos e comunicação entre sistemas corporativos.

Itens públicos atuais:

- APIs REST
- Microsserviços
- OpenAPI
- Arquitetura Hexagonal

### 9.3 Mensageria e dados

Finalidade: processamento assíncrono, persistência e integração com bases relacionais e NoSQL.

Itens públicos atuais:

- Apache Kafka
- RabbitMQ
- PostgreSQL
- MongoDB
- Redis

### 9.4 Containers e cloud

Finalidade: empacotamento, entrega e execução de aplicações em ambientes modernos.

Itens públicos atuais:

- Docker
- Kubernetes
- OpenShift
- AWS
- Azure
- Helm

### 9.5 Qualidade e DevOps

Finalidade: reduzir regressões, aumentar confiabilidade e apoiar evolução segura.

Itens públicos atuais:

- JUnit
- Mockito
- Testcontainers
- SonarQube
- JaCoCo
- CI/CD

### 9.6 IA aplicada

Finalidade: uso de Inteligência Artificial como apoio técnico para pesquisa, documentação e desenvolvimento, incluindo estudos e integrações futuras.

Itens públicos atuais:

- OpenAI
- Ollama
- Spring AI
- RAG

### 9.7 Stack de execução do próprio portfólio

Quando necessário para contextualizar o produto WEPDEV Portfolio, podem ser citados, sem duplicação excessiva:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- App Router
- Server Components
- Docker
- Cloudflare Tunnel
- Umami self-hosted

Essa lista deve permanecer associada ao contexto do produto e não substituir as categorias profissionais de backend e arquitetura.

## 10. Conteúdo Obrigatório

A implementação futura deve conter:

- título da seção;
- introdução curta e verdadeira;
- categorias com nomes semânticos;
- descrição da finalidade de cada categoria;
- tecnologias presentes na fonte de dados oficial;
- distinção explícita entre tecnologia utilizada e planejada quando necessário;
- relação com projetos, experiências ou estudos sem inventar evidências;
- leitura compatível com recrutadores e avaliação técnica;
- textos em português claro;
- nomes técnicos oficiais preservados;
- status ou contexto em texto quando um item ainda for futuro;
- acessibilidade semântica;
- suporte a navegação por teclado;
- preservação da paleta e dos tokens existentes.

## 11. Conteúdo Proibido

São proibidos:

- barras de progresso;
- estrelas;
- porcentagens;
- níveis de conhecimento;
- badges excessivos;
- dashboards;
- excesso de cards;
- números de anos não confirmados;
- afirmações de domínio absoluto sem evidência;
- ranking entre tecnologias;
- métricas inventadas;
- certificações não cadastradas;
- logos remotos de tecnologias sem necessidade;
- ícones que substituam o nome da tecnologia;
- tecnologias não presentes na fonte oficial sem refinamento explícito;
- promessas de resultado profissional;
- clientes, empresas ou projetos não públicos;
- conteúdo confidencial;
- dependências externas apenas para apresentação visual;
- filtros ou busca sem necessidade comprovada;
- animações contínuas ou chamativas;
- cores diferentes para sugerir nível de proficiência;
- links falsos;
- texto que apresente projeto planejado como concluído.

## 12. Direção Visual e Conteúdo

A seção deve seguir a identidade WEPDEV:

- preto e azul-marinho como bases;
- branco para títulos e itens prioritários;
- cinza-claro para descrições;
- laranja como acento pontual;
- bordas discretas;
- pouco uso de superfícies fechadas;
- bastante respiro entre categorias;
- tipografia como elemento principal;
- itens técnicos com aparência informativa, não de botão;
- composição editorial coerente com a Home V2.

O formato recomendado é uma grade editorial de categorias, com duas colunas em desktop quando houver espaço e uma coluna no mobile. A implementação deve evitar transformar os seis grupos em seis cards pesados e idênticos. Divisores, títulos e listas curtas podem substituir superfícies repetidas.

## 13. Modelo de Conteúdo

Cada categoria deve responder a três perguntas:

1. Qual responsabilidade técnica ela representa?
2. Quais tecnologias ou práticas pertencem a ela?
3. Em quais projetos, experiências ou estudos essa competência pode ser contextualizada?

O conteúdo deve distinguir quatro situações:

| Situação | Comunicação recomendada |
| --- | --- |
| Presente em projeto público | Associar ao projeto ou repositório quando fizer sentido |
| Presente na experiência profissional pública | Relacionar à experiência sem expor conteúdo confidencial |
| Presente em estudo planejado | Usar linguagem de planejamento ou tecnologia prevista |
| Presente como tema de evolução | Indicar que está em investigação ou aprofundamento |

Não é obrigatório exibir essa classificação em todos os itens. Ela deve aparecer quando a ausência de contexto puder induzir o visitante ao erro.

## 14. Acessibilidade

Critérios obrigatórios:

- um único `h2` para a seção;
- `h3` para cada categoria;
- introdução associada semanticamente ao título;
- listas HTML para conjuntos de tecnologias;
- nomes das tecnologias disponíveis como texto real;
- nenhuma informação comunicada somente por cor;
- foco visível em links e elementos interativos;
- navegação por teclado sem ordem inesperada;
- contraste adequado entre texto e fundo;
- áreas de toque adequadas para qualquer interação futura;
- ausência de controles sem função;
- não usar ARIA redundante quando o HTML semântico for suficiente;
- elementos decorativos com `aria-hidden="true"`;
- leitura coerente por leitor de tela;
- zoom de 200% sem perda de conteúdo;
- ausência de overflow horizontal em aproximadamente 390px;
- listas longas com quebra natural de linha.

Não transformar cada tecnologia em link se não existir uma página ou destino real. Itens informativos devem continuar sendo texto ou elementos de lista.

## 15. Responsividade

### 15.1 Desktop — 1440px

- duas ou três colunas somente quando a largura preservar leitura;
- títulos de categoria visíveis sem competição;
- listas com quebra controlada;
- introdução limitada a uma largura confortável;
- separação clara entre grupos;
- nenhum grupo deve dominar a seção sem justificativa.

### 15.2 Tablet — 768px

- preferir duas colunas se os textos couberem;
- reduzir a densidade de itens por linha;
- manter títulos, descrições e tecnologias completos;
- evitar que badges ou listas empurrem a página horizontalmente;
- preservar espaçamento entre grupos.

### 15.3 Mobile — 390px

- uma coluna;
- ordem de leitura vertical;
- títulos e descrições antes das listas;
- tecnologias quebrando em múltiplas linhas sem corte;
- grupos separados por espaço ou divisor discreto;
- nenhum item com largura fixa que cause overflow;
- evitar texto minúsculo;
- manter o caminho natural para Sobre e Experiência.

## 16. Analytics Preservados

O EP-011 não cria novos eventos de analytics.

Devem permanecer intactos:

- `navigation-click` para o item Tecnologias do menu;
- `primary-cta-click` quando aplicável ao CTA do Hero;
- `project-repository-click` nos repositórios reais;
- `linkedin-click`;
- `github-click`;
- `email-click`;
- `whatsapp-click`;
- `curriculum-click`.

A seção de Stack Tecnológica, por padrão, não deve instrumentar o clique em itens informativos porque eles não são ações. Caso uma futura entrega adicione um link real para documentação própria ou projeto, o evento deverá ser especificado separadamente antes da implementação.

Não alterar:

- script global do Umami;
- Website ID;
- `data-performance="true"`;
- taxonomia concluída no EP-009;
- comportamento de navegação;
- elementos Server Component para criar instrumentação imperativa.

## 17. SEO Preservado

O EP-011 não modifica SEO. Devem permanecer:

- `metadataBase` oficial;
- title e description existentes;
- canonical;
- idioma `pt-BR`;
- `robots.ts`;
- `sitemap.ts`;
- favicon e convenções atuais;
- um único `h1` na Home.

A seção deve usar conteúdo textual compreensível, mas não deve repetir palavras-chave artificialmente. Os nomes das tecnologias devem aparecer apenas quando contribuírem para a compreensão do repertório real.

Não criar páginas, URLs canônicas, JSON-LD, Open Graph ou novas rotas como parte deste épico.

## 18. Performance

Requisitos:

- preferir Server Components;
- não instalar bibliotecas para renderizar tecnologias;
- não carregar logos remotos por padrão;
- não adicionar scripts de terceiros;
- evitar imagens quando texto e composição editorial resolverem o objetivo;
- manter o conteúdo inicial renderizável no servidor;
- não criar animações contínuas;
- não usar canvas, WebGL ou visualizações pesadas;
- não aumentar significativamente o JavaScript do cliente;
- preservar o carregamento do Umami sem duplicação;
- evitar layout shift com dimensões estáveis;
- manter compatibilidade com o build standalone;
- validar impacto no Lighthouse quando a implementação for realizada.

O objetivo é melhorar a compreensão sem pagar um custo de carregamento desnecessário. Uma melhoria visual que aumente significativamente JavaScript, imagens ou dependências deve ser rejeitada ou especificada separadamente.

## 19. Segurança, Privacidade e Veracidade

- não publicar credenciais, tokens ou chaves;
- não expor configurações privadas de infraestrutura;
- não revelar endpoints internos;
- não associar tecnologias a clientes sem autorização;
- não publicar código corporativo;
- não enviar dados pessoais por analytics;
- não usar propriedades analíticas para registrar interação com itens informativos;
- não afirmar que uma tecnologia foi usada em produção quando isso não estiver confirmado;
- usar `Planejado`, `previsto` ou linguagem equivalente quando o item estiver associado a estudos futuros;
- revisar itens antes da publicação caso a fonte de dados mude.

## 20. Histórias de Usuário

### US-011.1 — Compreender a orientação técnica

**Descrição:**

Como recrutador ou liderança técnica, quero entender a orientação geral da stack, para avaliar o posicionamento profissional antes de ler a lista de tecnologias.

**Valor:** reduz interpretação e comunica a identidade de engenharia.

**Critérios de aceite:**

- a seção começa com contexto, não com uma nuvem de badges;
- a orientação para backend, arquitetura, cloud e IA é compreensível;
- não há promessa de proficiência não medida.

**Dependências:** blueprint da Home V2 e dados profissionais atuais.

**Fora de escopo:** alterar o posicionamento profissional ou o conteúdo do Hero.

### US-011.2 — Navegar pelas categorias da stack

**Descrição:**

Como visitante, quero encontrar tecnologias agrupadas por responsabilidade, para localizar rapidamente as áreas que me interessam.

**Valor:** melhora escaneabilidade e reduz carga cognitiva.

**Critérios de aceite:**

- os seis grupos oficiais aparecem com títulos claros;
- cada grupo possui descrição curta;
- a ordem é consistente;
- não há duplicação desnecessária.

**Dependências:** `frontend/constantes/tecnologias.ts`.

**Fora de escopo:** filtros, busca e ordenação interativa.

### US-011.3 — Relacionar tecnologia e finalidade

**Descrição:**

Como avaliador técnico, quero entender para que cada categoria serve, para avaliar repertório além da memorização de nomes.

**Valor:** comunica julgamento técnico e capacidade de aplicação.

**Critérios de aceite:**

- descrições usam linguagem profissional e curta;
- tecnologias aparecem como meios para construir ou operar software;
- nenhum texto inventa resultado ou contexto confidencial.

**Dependências:** inventário de projetos, experiências e estudos.

**Fora de escopo:** estudos de caso completos dentro da seção.

### US-011.4 — Distinguir stack real de stack planejada

**Descrição:**

Como visitante, quero saber quando uma tecnologia está associada a projeto planejado, para não confundir intenção futura com entrega concluída.

**Valor:** aumenta transparência e confiança.

**Critérios de aceite:**

- tecnologias de projetos planejados usam contexto adequado;
- nenhum projeto planejado é apresentado como concluído;
- a distinção não depende apenas de cor.

**Dependências:** estados do domínio de projetos.

**Fora de escopo:** criar novos estados de projeto.

### US-011.5 — Ler a seção em dispositivos diferentes

**Descrição:**

Como visitante mobile ou tablet, quero acessar a stack sem overflow ou texto cortado, para avaliar o perfil em qualquer dispositivo.

**Valor:** preserva a experiência de divulgação e processos seletivos.

**Critérios de aceite:**

- validação em 390x844, 768x1024 e 1440x900;
- uma coluna no mobile;
- contraste e foco preservados;
- itens quebram naturalmente.

**Dependências:** implementação da Home V2.

**Fora de escopo:** redesign global responsivo.

### US-011.6 — Acessar evidências relacionadas

**Descrição:**

Como avaliador, quero seguir para projetos e experiências, para verificar onde a stack é contextualizada.

**Valor:** conecta declaração técnica a evidência pública.

**Critérios de aceite:**

- navegação global permanece funcional;
- links existentes não são alterados;
- a seção não cria destinos falsos;
- analytics existente permanece intacto.

**Dependências:** EP-006, EP-009 e Home V2.

**Fora de escopo:** criar páginas individuais de tecnologias.

### US-011.7 — Validar o inventário técnico

**Descrição:**

Como responsável pelo portfólio, quero revisar a fonte de dados antes da publicação, para evitar tecnologia obsoleta, duplicada ou sem contexto.

**Valor:** mantém a comunicação profissional confiável.

**Critérios de aceite:**

- fonte de dados revisada;
- itens sem correspondência são removidos ou marcados para decisão;
- nenhuma informação confidencial é adicionada;
- a documentação da implementação registra divergências.

**Dependências:** confirmação do conteúdo profissional.

**Fora de escopo:** integração automática com GitHub ou currículo.

## 21. Roadmap

### Fase 1 — Inventário e decisão de conteúdo

Escopo:

- revisar os seis grupos atuais;
- classificar itens por contexto;
- identificar repetições;
- confirmar tecnologias públicas e planejadas;
- revisar descrições.

Critérios de aceite:

- toda tecnologia exibida tem fonte identificável;
- itens ambíguos ficam documentados;
- não há tecnologia adicionada por suposição.

Riscos:

- inventário maior que a capacidade de leitura;
- mistura entre stack do produto e stack profissional.

### Fase 2 — Arquitetura editorial

Escopo:

- implementar a hierarquia da seção;
- definir a ordem dos grupos;
- reduzir a quantidade inicial de itens quando necessário;
- conectar categorias aos projetos e experiências.

Critérios de aceite:

- a leitura começa pelo contexto;
- categorias são facilmente escaneáveis;
- nenhum grupo parece um dashboard.

Riscos:

- excesso de texto;
- repetição com Projetos e Como gero valor.

### Fase 3 — Responsividade e acessibilidade

Escopo:

- validar desktop, tablet e mobile;
- revisar headings, listas, contraste e foco;
- testar zoom de 200% e teclado;
- confirmar ausência de overflow.

Critérios de aceite:

- todos os grupos permanecem legíveis;
- tecnologias quebram sem cortes;
- não há informação transmitida somente por cor.

Riscos:

- listas longas aumentarem a altura da página;
- redução excessiva comprometer contexto.

### Fase 4 — Performance e integração

Escopo:

- confirmar Server Components;
- confirmar ausência de novas dependências;
- validar build, lint e impacto no bundle;
- verificar que Umami, SEO e links continuam intactos.

Critérios de aceite:

- lint e build passam;
- não há script ou imagem desnecessária;
- navegação e analytics preservados.

Riscos:

- introdução acidental de componente Client;
- duplicação de tecnologia em múltiplas fontes.

### Fase 5 — Revisão de conteúdo e publicação

Escopo:

- revisão final de precisão;
- validação de divulgação;
- documentação da decisão visual;
- aprovação para publicação.

Critérios de aceite:

- conteúdo aprovado pelo responsável;
- projetos planejados claramente identificados;
- seção pronta para revisão visual da Home V2.

Riscos:

- atualização da stack sem atualização dos projetos;
- interpretação de item planejado como experiência concluída.

## 22. Critérios de Aceite Gerais

- a seção explica a orientação da stack antes de listar itens;
- o texto comunica engenharia de software e capacidade técnica;
- os seis grupos oficiais são preservados ou qualquer alteração é justificada;
- os itens são derivados de fontes reais do projeto;
- tecnologias utilizadas e planejadas não são confundidas;
- não existem barras de progresso;
- não existem estrelas;
- não existem porcentagens;
- não existem níveis de conhecimento;
- não existem badges excessivos;
- não existe aparência de dashboard;
- não existe excesso de cards;
- não há informação inventada;
- não há clientes, dados confidenciais ou credenciais;
- os itens não interativos não parecem botões;
- a seção é legível por teclado e leitor de tela;
- headings e listas são semânticos;
- foco e contraste são visíveis;
- não há overflow em 390x844, 768x1024 ou 1440x900;
- links globais e âncoras permanecem funcionando;
- analytics do EP-009 permanecem intactos;
- SEO do EP-010 permanece intacto;
- não há novos eventos para itens informativos;
- o script do Umami continua único;
- não há dependências instaladas;
- `package.json` e `package-lock.json` não são alterados;
- `npm run lint` passa;
- `npm run build` passa;
- Docker e output standalone continuam compatíveis;
- documentação da implementação é atualizada quando necessário.

## 23. Fora de Escopo

Não fazem parte do EP-011:

- alterar o frontend antes da implementação aprovada;
- alterar a Navbar, Hero ou Projetos fora da integração prevista;
- redesign global da Home;
- barras, estrelas, porcentagens ou níveis de conhecimento;
- dashboard de tecnologias;
- filtros, busca ou ordenação interativa;
- página individual para cada tecnologia;
- blog técnico;
- CMS;
- backend para cadastro de stack;
- integração automática com GitHub;
- sincronização automática com currículo;
- logos remotos de tecnologias;
- novas dependências sem justificativa;
- novos eventos do Umami;
- alteração do Website ID;
- alteração do script de analytics;
- alteração de SEO, robots ou sitemap;
- alteração de Docker, Compose ou Cloudflare;
- alteração de experiências profissionais;
- alteração do currículo PDF;
- publicação automática em redes sociais;
- commit ou push.

## 24. Não Alterar Durante Este Épico

Durante a implementação do EP-011 não alterar sem especificação própria:

- `frontend/app/layout.tsx`, exceto correção diretamente necessária e aprovada;
- `frontend/app/page.tsx` além da composição estritamente necessária da seção;
- eventos e taxonomia do Umami;
- Website ID e script global;
- metadata, canonical, robots e sitemap;
- Dockerfile, Compose e scripts de produção;
- infraestrutura Cloudflare;
- `package.json`;
- `package-lock.json`;
- dependências;
- conteúdo profissional de Sobre e Experiência;
- projetos e seus estados;
- currículo PDF;
- informações pessoais além das já públicas.

## 25. Definition of Done

O EP-011 estará pronto quando:

- a seção de Stack Tecnológica estiver especificada e implementada conforme esta documentação;
- a seção deixar claro que tecnologias são meios para engenharia de software;
- os seis grupos de tecnologias tiverem contexto e fonte real;
- a distinção entre utilizado, planejado e exploratório estiver correta;
- não houver barras de progresso, estrelas, porcentagens ou níveis de conhecimento;
- não houver badges excessivos, dashboards ou excesso de cards;
- o conteúdo for compreensível para recrutadores e avaliadores técnicos;
- a leitura for adequada em desktop, tablet e mobile;
- headings, listas, foco, contraste e teclado forem validados;
- não houver overflow horizontal em 390px;
- Projetos e Experiência continuarem disponíveis como evidência contextual;
- eventos existentes do Umami permanecerem funcionando sem duplicação;
- SEO, robots, sitemap e metadata permanecerem intactos;
- o script do Umami permanecer único e com `data-performance="true"`;
- o frontend continuar em Server Components quando não houver necessidade de interatividade;
- `npm run lint` passar;
- `npm run build` passar;
- Docker build e container permanecerem saudáveis;
- nenhum pacote for instalado sem justificativa aprovada;
- `package.json` e `package-lock.json` permanecerem inalterados;
- nenhuma informação fictícia ou confidencial for publicada;
- a documentação operacional e de produto estiver atualizada;
- a revisão visual final for aprovada pelo responsável pelo produto;
- nenhuma alteração for feita em Cloudflare, servidor remoto ou analytics sem escopo próprio.

## 26. Resumo da Decisão

O EP-011 define uma seção de Stack Tecnológica orientada por contexto, categorias e evidências. A proposta não é provar conhecimento por quantidade de itens, e sim comunicar como o repertório técnico se organiza em torno de backend enterprise, arquitetura, qualidade, cloud e IA aplicada.

A seção deve ser simples, honesta e escaneável. O visitante deve sair sabendo quais problemas de engenharia fazem parte do repertório público de Waldir, sem receber uma promessa artificial de proficiência ou uma interface de dashboard.
