# EP-006 — Projetos em Destaque

## 1. Identificação

- Código: EP-006
- Nome: Projetos em Destaque
- Produto: WEPDEV Portfolio
- Sprint: 3 — Projetos em Destaque
- Prioridade: Alta
- Estado: Pronto para refinamento
- Responsável: Waldir Escouto Pereira

## 2. Objetivo

Apresentar projetos profissionais e estudos de caso que demonstrem, de forma concreta, os conhecimentos técnicos de Waldir Escouto Pereira em desenvolvimento Java, backend, microsserviços, arquitetura de software, integrações, DevOps e Inteligência Artificial aplicada à Engenharia de Software.

A seção não deverá funcionar apenas como uma galeria de repositórios. Cada projeto deverá comunicar:

- qual problema foi abordado;
- qual solução foi proposta;
- quais tecnologias foram utilizadas;
- quais decisões arquiteturais foram tomadas;
- quais práticas de qualidade foram aplicadas;
- qual é o estado atual do projeto;
- onde consultar o código ou a documentação pública.

## 3. Valor para o visitante

Como recrutador, gestor ou líder técnico,

quero visualizar projetos relevantes e entender como o profissional trabalha,

para avaliar sua experiência, capacidade de resolução de problemas, conhecimento arquitetural e qualidade de engenharia.

## 4. Escopo da primeira entrega

A primeira entrega do EP-006 deverá contemplar:

- seção de projetos na página inicial;
- título e introdução da seção;
- lista de projetos em destaque;
- cards reutilizáveis;
- tecnologias associadas a cada projeto;
- indicação do estado de cada projeto;
- links públicos quando existirem;
- tratamento para projetos ainda em construção;
- conteúdo local e tipado;
- responsividade;
- acessibilidade;
- integração com a identidade visual existente.

## 5. Fora do escopo inicial

Não fazem parte da primeira entrega:

- backend para gerenciamento dos projetos;
- banco de dados;
- painel administrativo;
- cadastro de projetos pela interface;
- autenticação;
- comentários;
- avaliações;
- métricas de visualização;
- integração automática com GitHub;
- leitura automática do README dos repositórios;
- páginas detalhadas para todos os projetos;
- animações complexas;
- filtros interativos;
- busca;
- paginação.

Esses recursos poderão ser avaliados em etapas futuras.

## 6. Projetos mínimos do MVP

O MVP deverá apresentar pelo menos três projetos públicos ou estudos de caso.

Os projetos definitivos serão selecionados posteriormente, respeitando as seguintes regras:

- não publicar código corporativo;
- não publicar nomes de clientes sem autorização;
- não publicar URLs internas;
- não publicar credenciais;
- não publicar diagramas ou documentos confidenciais;
- não reproduzir código proprietário;
- não apresentar como público um projeto que não possa ser consultado;
- deixar claramente indicado quando se tratar de estudo de caso, laboratório ou projeto em construção.

O projeto WEPDEV Portfolio poderá ser apresentado como um dos estudos de caso.

## 7. História US-006.1 — Visualizar projetos em destaque

### Descrição

Como visitante,

quero visualizar os principais projetos do profissional,

para compreender rapidamente sua experiência técnica e suas áreas de atuação.

### Critérios de aceite

- a seção deve possuir `id="projetos"`;
- deve utilizar HTML semântico;
- deve apresentar título e texto introdutório;
- deve exibir pelo menos três projetos quando os dados definitivos forem cadastrados;
- deve funcionar em telas móveis e desktop;
- deve preservar a identidade visual atual;
- não deve apresentar dados fictícios como fatos;
- não deve depender de JavaScript para renderizar o conteúdo inicial.

## 8. História US-006.2 — Card de projeto reutilizável

### Descrição

Como desenvolvedor,

quero um componente reutilizável para representar projetos,

para manter consistência visual e evitar duplicação.

### Informações do card

Cada card poderá apresentar:

- nome;
- categoria;
- descrição curta;
- problema ou objetivo;
- tecnologias principais;
- estado;
- tipo do projeto;
- link para detalhes;
- link para repositório, quando público;
- indicação de estudo de caso;
- imagem ou composição visual opcional.

### Critérios de aceite

- deve possuir tipagem explícita;
- não deve utilizar `any`;
- deve apresentar título semântico;
- deve suportar tecnologias em formato de chips;
- deve indicar claramente o estado do projeto;
- deve tratar a ausência de repositório público;
- links externos devem abrir com segurança;
- não deve conter regras específicas de apenas um projeto;
- deve manter contraste e foco visível;
- deve funcionar como Server Component.

## 9. História US-006.3 — Estado do projeto

### Descrição

Como visitante,

quero saber o estado atual de cada projeto,

para diferenciar projetos concluídos, ativos, em evolução ou planejados.

### Estados permitidos

- `concluido`;
- `em-evolucao`;
- `em-construcao`;
- `estudo-de-caso`;
- `planejado`.

### Critérios de aceite

- o estado deve ser legível em texto;
- o estado não pode ser indicado apenas por cor;
- os valores devem ser centralizados em tipo ou domínio compartilhado;
- a interface deve utilizar uma descrição amigável em português;
- estados não previstos não devem ser aceitos silenciosamente.

## 10. História US-006.4 — Tecnologias do projeto

### Descrição

Como visitante,

quero identificar rapidamente as tecnologias aplicadas,

para avaliar a aderência do projeto ao perfil técnico procurado.

### Critérios de aceite

- as tecnologias devem ser exibidas como chips;
- a quantidade visível deve preservar a legibilidade;
- não utilizar uma cor diferente para cada tecnologia;
- manter tipografia consistente com o Design System;
- tecnologias devem vir dos dados do projeto;
- não duplicar listas diretamente no componente visual.

## 11. História US-006.5 — Links e chamadas para ação

### Descrição

Como visitante,

quero acessar o repositório ou os detalhes de um projeto,

para analisar sua implementação e documentação.

### Critérios de aceite

- exibir link do GitHub somente quando existir repositório público;
- nunca criar URL fictícia;
- links externos devem utilizar:
  - `target="_blank"`;
  - `rel="noopener noreferrer"`;
- projetos sem repositório público devem apresentar explicação adequada;
- não exibir botões desabilitados sem contexto;
- chamadas para ação devem possuir texto claro.

## 12. História US-006.6 — Conteúdo local e tipado

### Descrição

Como desenvolvedor,

quero manter inicialmente os dados dos projetos no frontend,

para publicar o MVP rapidamente sem depender do backend.

### Critérios de aceite

- os dados não devem ficar escritos diretamente dentro do JSX da página;
- os projetos devem possuir modelo tipado;
- os dados devem ficar em arquivo próprio;
- o componente deve receber os dados por propriedades;
- a estrutura deve permitir futura substituição por uma API;
- não criar uma camada de serviço HTTP antes de existir integração real.

## 13. Estrutura inicial proposta

```text
frontend/
├── app/
│   └── page.tsx
├── componentes/
│   └── projetos/
│       ├── CardProjeto.tsx
│       └── SecaoProjetos.tsx
├── dominio/
│   └── projeto/
│       ├── Projeto.ts
│       └── EstadoProjeto.ts
└── constantes/
    └── projetos.ts
```

A estrutura poderá ser ajustada durante a implementação quando houver justificativa técnica clara.

## 14. Modelo de projeto

O domínio deverá representar, inicialmente, informações semelhantes a:

```typescript
type Projeto = {
  id: string;
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  problema?: string;
  tecnologias: readonly string[];
  estado: EstadoProjeto;
  tipo: "produto" | "laboratorio" | "estudo-de-caso";
  repositorioUrl?: string;
  detalhesUrl?: string;
  destaque: boolean;
};
```

O modelo apresentado é uma referência. O Codex deverá avaliar a nomenclatura e a melhor forma de representar imutabilidade e estados sem introduzir complexidade desnecessária.

## 15. Conteúdo e segurança

Todo conteúdo deverá respeitar:

- confidencialidade profissional;
- contratos anteriores;
- propriedade intelectual;
- privacidade;
- segurança da informação.

É proibido publicar:

- credenciais;
- tokens;
- chaves;
- endereços internos;
- nomes de servidores corporativos;
- dados pessoais de terceiros;
- dados de produção;
- código proprietário;
- logs com informações sensíveis;
- imagens de sistemas internos;
- nomes de clientes ou projetos protegidos.

Quando necessário, experiências reais deverão ser apresentadas de forma anonimizada e conceitual.

## 16. Design e identidade visual

A seção deverá:

- utilizar a paleta existente;
- manter fundos azul-marinho e superfícies em slate;
- utilizar ciano e violeta com moderação;
- manter tipografia Geist;
- utilizar Geist Mono para tecnologias, estados ou pequenos rótulos;
- evitar cards genéricos semelhantes a templates;
- apresentar hierarquia clara;
- manter bordas discretas;
- evitar excesso de glow;
- criar contraste visual entre os projetos;
- preservar aparência corporativa e técnica.

## 17. Acessibilidade

A implementação deverá:

- utilizar títulos em ordem semântica;
- manter foco visível;
- permitir navegação por teclado;
- fornecer textos claros para links;
- não depender apenas de cor;
- manter contraste adequado;
- evitar elementos clicáveis sem semântica;
- não transformar todo o card em link quando isso prejudicar a navegação ou acessibilidade.

## 18. Responsividade

A seção deverá funcionar em:

- dispositivos móveis;
- tablets;
- notebooks;
- monitores maiores.

Comportamento esperado:

- uma coluna em telas pequenas;
- duas ou três colunas somente quando houver espaço adequado;
- textos sem cortes indevidos;
- chips com quebra controlada;
- botões acessíveis ao toque;
- ausência de rolagem horizontal.

## 19. SEO

Cada projeto deverá possuir conteúdo textual compreensível por mecanismos de busca.

Nesta primeira etapa:

- títulos devem ser descritivos;
- descrições não devem depender de imagens;
- links devem possuir textos claros;
- não é necessário criar páginas dinâmicas ainda;
- dados estruturados poderão ser avaliados posteriormente.

## 20. Regras técnicas

- utilizar Next.js 16;
- utilizar TypeScript estrito;
- priorizar Server Components;
- não utilizar `any`;
- utilizar o alias `@/*`;
- utilizar nomes próprios em português;
- manter nomes obrigatórios do framework;
- não instalar dependências;
- não criar abstrações sem uso;
- não criar serviço HTTP sem API;
- utilizar os tokens existentes no Design System;
- não modificar backend;
- não modificar arquivos fora do escopo sem justificativa.

## 21. Validação obrigatória

A implementação deverá passar por:

```bash
npm run lint
npm run build
```

Também deverá ser verificado:

- ausência de alterações em `package.json`;
- ausência de alterações em `package-lock.json`;
- ausência de dados confidenciais;
- funcionamento dos links públicos;
- responsividade;
- ausência de rolagem horizontal.

## 22. Evidências esperadas

Ao final da implementação, deverão ser apresentados:

- arquivos criados;
- arquivos modificados;
- estrutura do domínio criada;
- projetos cadastrados;
- decisões arquiteturais;
- decisões de UI/UX;
- resultado do lint;
- resultado do build;
- confirmação de que nenhuma dependência foi instalada;
- print desktop;
- print mobile.

## 23. Definição de pronto

O EP-006 será considerado concluído na primeira entrega quando:

- a seção Projetos estiver integrada à página inicial;
- o placeholder atual tiver sido removido;
- os componentes forem reutilizáveis;
- os dados estiverem separados do JSX;
- o modelo estiver tipado;
- pelo menos três projetos públicos ou estudos de caso estiverem cadastrados;
- nenhum conteúdo confidencial estiver exposto;
- a seção estiver responsiva;
- a acessibilidade básica estiver preservada;
- o lint passar;
- o build passar;
- a entrega estiver pronta para revisão visual e técnica.

## 24. Evoluções futuras

Posteriormente poderão ser adicionados:

- página individual por projeto;
- rotas por `slug`;
- diagramas de arquitetura;
- galeria de imagens;
- decisões arquiteturais;
- desafios e aprendizados;
- testes e cobertura;
- integração com GitHub;
- dados vindos do backend;
- filtros;
- busca;
- Laboratório de IA;
- estudos de caso mais completos.
