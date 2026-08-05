# EP-007 — Contato, Branding e Presença Profissional

## 1. Identificação

- Código: EP-007
- Nome: Contato, Branding e Presença Profissional
- Produto: WEPDEV Portfolio
- Sprint: 4 — Presença Profissional
- Prioridade: Alta
- Estado: Pronto para refinamento
- Responsável: Waldir Escouto Pereira

## 2. Objetivo

Consolidar a presença profissional da WEPDEV Portfolio, facilitando o contato com recrutadores, gestores e profissionais de tecnologia.

A entrega deve evoluir:

- seção Contato;
- rodapé;
- identidade da marca WEPDEV;
- chamadas para ação;
- canais profissionais;
- currículo;
- disponibilidade;
- SEO básico relacionado à identidade profissional.

## 3. Valor para o visitante

Como recrutador, gestor ou parceiro técnico,

quero encontrar rapidamente os canais profissionais e entender a disponibilidade do profissional,

para iniciar uma conversa sobre oportunidades, projetos ou colaboração técnica.

## 4. Escopo da primeira entrega

A primeira entrega deverá contemplar:

- seção Contato completa;
- LinkedIn real;
- GitHub real;
- e-mail profissional público;
- currículo para download, quando houver arquivo público;
- indicação de localização geral;
- disponibilidade profissional;
- chamada clara para recrutadores;
- rodapé profissional;
- revisão dos links globais;
- metadados básicos;
- responsividade;
- acessibilidade;
- segurança de conteúdo público.

## 5. Fora do escopo

Não fazem parte desta entrega:

- formulário com backend;
- envio de e-mail pelo servidor;
- banco de dados;
- autenticação;
- agenda integrada;
- WhatsApp;
- chatbot;
- rastreamento de visitantes;
- newsletter;
- analytics;
- CRM;
- automações externas;
- download de arquivo inexistente;
- publicação em produção.

## 6. Fonte de verdade dos contatos

Os canais públicos inicialmente definidos são:

- LinkedIn: `https://www.linkedin.com/in/wepdev/`
- GitHub: `https://github.com/wep1980`

O e-mail público deverá ser confirmado antes da implementação definitiva.

Nenhuma URL fictícia poderá ser criada.

## 7. História US-007.1 — Visualizar canais profissionais

### Descrição

Como visitante,

quero encontrar LinkedIn, GitHub e e-mail em uma seção clara,

para entrar em contato pelo canal mais adequado.

### Critérios de aceite

- a seção deve possuir `id="contato"`;
- deve utilizar HTML semântico;
- deve apresentar LinkedIn;
- deve apresentar GitHub;
- deve apresentar e-mail somente quando confirmado;
- links externos devem abrir com segurança;
- os textos dos links devem ser descritivos;
- deve funcionar sem JavaScript;
- deve manter foco visível;
- não deve depender apenas de ícones.

## 8. História US-007.2 — Chamada para recrutadores

### Descrição

Como recrutador ou gestor,

quero entender rapidamente a disponibilidade e o perfil profissional,

para decidir se devo iniciar uma conversa.

### Conteúdo esperado

A seção deverá comunicar:

- disponibilidade para novas oportunidades;
- foco em Java Backend;
- experiência com sistemas empresariais;
- interesse em arquitetura, microsserviços e IA aplicada;
- preferência por contato via LinkedIn ou e-mail.

### Critérios de aceite

- linguagem profissional;
- sem tom excessivamente comercial;
- sem promessas vagas;
- sem informações pessoais desnecessárias;
- sem disponibilidade fictícia;
- conteúdo responsivo e legível.

## 9. História US-007.3 — Currículo público

### Descrição

Como recrutador,

quero acessar uma versão pública do currículo,

para consultar a trajetória profissional em formato tradicional.

### Critérios de aceite

- exibir botão somente se houver arquivo real;
- utilizar nome de arquivo profissional;
- abrir em nova aba ou iniciar download de forma clara;
- possuir texto acessível;
- não usar URL fictícia;
- não expor dados que não deveriam ser públicos;
- permitir substituição futura sem alterar componentes visuais.

## 10. História US-007.4 — Rodapé profissional

### Descrição

Como visitante,

quero encontrar identificação e links relevantes no final da página,

para continuar a navegação ou acessar os canais profissionais.

### Conteúdo

- marca WEPDEV;
- Waldir Escouto Pereira;
- Desenvolvedor Java Sênior;
- LinkedIn;
- GitHub;
- e-mail, quando confirmado;
- localização geral;
- ano atual;
- tecnologia usada na construção.

### Critérios de aceite

- renderizar `footer`;
- utilizar `Container`;
- calcular o ano no servidor;
- manter Server Component;
- links externos seguros;
- responsividade;
- boa hierarquia;
- contraste adequado;
- não parecer um rodapé provisório.

## 11. História US-007.5 — Branding WEPDEV

### Descrição

Como visitante,

quero reconhecer uma identidade consistente,

para associar o conteúdo à marca profissional WEPDEV.

### Elementos

- marca textual WEPDEV;
- símbolo existente;
- tom visual técnico e corporativo;
- consistência entre cabeçalho, Hero, Contato e rodapé;
- uso controlado de ciano, violeta e verde.

### Critérios de aceite

- não criar nova identidade desconectada;
- preservar a marca atual;
- evitar excesso de efeitos;
- manter tipografia Geist;
- usar Geist Mono somente quando fizer sentido;
- não instalar bibliotecas de branding ou ícones.

## 12. História US-007.6 — Princípios de engenharia

### Descrição

Como líder técnico,

quero conhecer os princípios que orientam o trabalho do profissional,

para avaliar sua forma de pensar além das tecnologias.

### Princípios iniciais

- simplicidade antes da complexidade;
- evolução incremental;
- segurança por padrão;
- observabilidade desde o início;
- APIs claras e documentadas;
- testes como parte da entrega;
- separação de responsabilidades;
- IA como apoio, não substituição do julgamento técnico.

### Critérios de aceite

- criar seção própria ou composição curta;
- textos objetivos;
- não transformar a seção em manifesto longo;
- utilizar linguagem prática;
- manter identidade visual do projeto;
- não repetir o diagrama de arquitetura;
- funcionar como Server Component.

## 13. História US-007.7 — SEO básico de identidade

### Descrição

Como visitante vindo de mecanismos de busca,

quero encontrar informações coerentes sobre o profissional,

para compreender o conteúdo antes mesmo de abrir a página.

### Critérios de aceite

Revisar metadata para incluir:

- nome completo;
- cargo;
- Java Backend;
- Spring Boot;
- Quarkus;
- microsserviços;
- arquitetura de software;
- IA aplicada à Engenharia de Software;
- LinkedIn;
- GitHub, quando tecnicamente apropriado.

Também avaliar:

- Open Graph;
- título;
- descrição;
- creator;
- authors;
- keywords;
- metadataBase somente quando houver domínio definitivo.

Não inventar domínio público definitivo.

## 14. Estrutura sugerida

```text
frontend/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── componentes/
│   ├── contato/
│   │   ├── SecaoContato.tsx
│   │   └── CanalProfissional.tsx
│   ├── principios/
│   │   └── SecaoPrincipiosEngenharia.tsx
│   └── layout/
│       └── Rodape.tsx
├── constantes/
│   ├── contatos.ts
│   └── principiosEngenharia.ts
└── dominio/
    └── contato/
        └── CanalProfissional.ts
```

A estrutura poderá ser simplificada quando algum arquivo não justificar existência própria.

## 15. Modelo de canal profissional

Estrutura conceitual:

```typescript
type CanalProfissional = {
  id: string;
  nome: string;
  descricao: string;
  href: string;
  externo: boolean;
  principal?: boolean;
};
```

Regras:

- não utilizar `any`;
- usar imutabilidade quando aplicável;
- manter dados fora do JSX;
- não criar serviço HTTP;
- não criar abstrações sem uso.

## 16. Conteúdo sugerido para Contato

### Título

`Vamos conversar sobre tecnologia e oportunidades`

### Texto

`Estou disponível para conversar sobre oportunidades em desenvolvimento Java Backend, sistemas empresariais, microsserviços, arquitetura de software e Inteligência Artificial aplicada à Engenharia de Software.`

### Complemento

`O LinkedIn é o canal preferencial para contatos profissionais. Você também pode consultar meus projetos e minha evolução técnica no GitHub.`

O conteúdo poderá ser refinado sem mudar o sentido.

## 17. Conteúdo sugerido para Princípios de Engenharia

### Simplicidade antes da complexidade

Escolher a solução mais simples que atenda ao problema atual e permita evolução.

### Evolução incremental

Entregar em pequenas etapas, validar resultados e reduzir o risco de grandes mudanças.

### Segurança por padrão

Tratar segurança como requisito de arquitetura e desenvolvimento, não como correção posterior.

### Observabilidade desde o início

Projetar logs, métricas e rastreabilidade como parte do comportamento do sistema.

### APIs claras e documentadas

Criar contratos previsíveis, compreensíveis e fáceis de integrar.

### Testes como parte da entrega

Usar testes para apoiar evolução, reduzir regressões e documentar comportamentos.

### Separação de responsabilidades

Manter componentes e camadas com papéis claros, evitando acoplamento desnecessário.

### IA com julgamento técnico

Utilizar IA para acelerar pesquisa, documentação e desenvolvimento sem delegar decisões críticas.

## 18. Design e UI/UX

A entrega deverá:

- manter a paleta atual;
- criar uma seção Contato mais útil do que o placeholder;
- evoluir o rodapé;
- diferenciar visualmente Princípios de Engenharia;
- evitar cards excessivamente repetitivos;
- reduzir chips quando não agregarem;
- preservar boa quantidade de espaço;
- manter aparência técnica e corporativa;
- evitar animações complexas;
- evitar excesso de glow.

## 19. Acessibilidade

Garantir:

- títulos em ordem semântica;
- links com textos descritivos;
- foco visível;
- ícones acompanhados de texto;
- contraste adequado;
- navegação por teclado;
- ausência de botões fictícios;
- currículo acessível somente quando existir;
- e-mail legível e acionável quando confirmado.

## 20. Responsividade

Validar em:

- 390x844;
- 768x1024;
- 1440x900.

Garantir:

- canais empilhados no mobile;
- rodapé adaptado;
- princípios em uma ou duas colunas conforme o espaço;
- ausência de overflow horizontal;
- links com área de toque adequada;
- textos sem cortes.

## 21. Segurança e privacidade

Não publicar:

- telefone pessoal;
- endereço residencial;
- documentos pessoais;
- dados de terceiros;
- informações corporativas privadas;
- URLs internas;
- tokens;
- credenciais;
- e-mail não confirmado;
- currículo com dados inadequados à exposição pública.

## 22. Regras técnicas

- Next.js 16;
- TypeScript estrito;
- Server Components;
- alias `@/*`;
- sem `any`;
- sem dependências novas;
- sem `use client` sem necessidade;
- sem serviço HTTP;
- sem backend;
- sem formulário funcional;
- sem commit;
- sem push durante a implementação.

## 23. Validação obrigatória

Executar:

```bash
npm run lint
npm run build
```

Também validar:

- links do LinkedIn e GitHub;
- ausência de URLs fictícias;
- ausência de dados pessoais indevidos;
- currículo apenas quando existir;
- responsividade;
- ausência de overflow horizontal;
- metadata coerente;
- package.json e package-lock.json sem alterações.

## 24. Evidências esperadas

Ao final, apresentar:

- arquivos criados;
- arquivos modificados;
- conteúdo de Contato;
- princípios cadastrados;
- links cadastrados;
- alterações no rodapé;
- alterações de metadata;
- decisões arquiteturais;
- decisões de UI/UX;
- resultado do lint;
- resultado do build;
- print desktop;
- print mobile;
- confirmação de ausência de dependências.

## 25. Definição de pronto

O EP-007 será considerado concluído quando:

- a seção Contato não for mais um placeholder;
- LinkedIn e GitHub estiverem corretos;
- o e-mail público estiver confirmado ou omitido;
- currículo real for exibido ou omitido;
- o rodapé estiver profissional;
- a seção Princípios de Engenharia estiver implementada;
- metadata estiver revisada;
- acessibilidade estiver preservada;
- responsividade estiver validada;
- lint e build passarem;
- não houver links fictícios;
- a entrega estiver pronta para revisão.
