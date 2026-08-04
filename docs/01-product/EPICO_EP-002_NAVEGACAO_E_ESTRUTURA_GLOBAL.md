# EP-002 — Navegação e Estrutura Global

## 1. Identificação

- Código: EP-002
- Nome: Navegação e estrutura global
- Produto: WEPDEV Portfolio
- Sprint: 2.1 — Fundação do Frontend
- Prioridade: Alta
- Estado: Pronto para implementação

## 2. Objetivo

Criar a estrutura global reutilizável do frontend, composta por cabeçalho, navegação, conteúdo principal, rodapé, container, seções e botões padronizados.

Essa entrega deve estabelecer a base visual e estrutural para todas as áreas do portfólio.

## 3. Valor para o usuário

Como visitante do portfólio,

quero navegar pelas principais seções de forma simples e previsível,

para encontrar rapidamente as informações profissionais que procuro.

## 4. Escopo

Fazem parte deste épico:

- componente `Container`;
- componente `Secao`;
- componente `Botao`;
- componente `Cabecalho`;
- componente `Rodape`;
- integração dos componentes ao layout raiz;
- adaptação da página inicial para usar os componentes;
- navegação por âncoras;
- responsividade básica;
- acessibilidade básica.

## 5. Fora do escopo

Não fazem parte desta entrega:

- menu hambúrguer;
- animações;
- tema claro;
- troca de idioma;
- autenticação;
- integração com backend;
- bibliotecas de ícones;
- testes automatizados;
- navegação entre páginas adicionais;
- persistência de preferências;
- estado global.

## 6. Estrutura esperada

```text
frontend/
├── app/
│   ├── layout.tsx
│   └── page.tsx
└── componentes/
    ├── layout/
    │   ├── Cabecalho.tsx
    │   └── Rodape.tsx
    └── ui/
        ├── Botao.tsx
        ├── Container.tsx
        └── Secao.tsx
```

## 7. História US-002.1 — Container reutilizável

### Descrição

Como desenvolvedor,

quero um componente de container reutilizável,

para manter largura máxima e espaçamento lateral consistentes em toda a aplicação.

### Critérios de aceite

- deve aceitar `children`;
- deve aceitar `className` opcional;
- deve ocupar toda a largura disponível;
- deve centralizar o conteúdo;
- deve possuir largura máxima consistente;
- deve possuir espaçamento lateral responsivo;
- não deve conter regras específicas de uma página;
- deve ser implementado como Server Component;
- deve possuir tipagem explícita.

## 8. História US-002.2 — Seção reutilizável

### Descrição

Como desenvolvedor,

quero um componente de seção reutilizável,

para padronizar espaçamento vertical, semântica e navegação por âncoras.

### Critérios de aceite

- deve renderizar o elemento semântico `section`;
- deve aceitar `children`;
- deve aceitar `id` opcional;
- deve aceitar `className` opcional;
- deve aceitar `aria-labelledby` opcional;
- deve possuir espaçamento vertical responsivo;
- deve permitir composição com `Container`;
- deve ser um Server Component;
- deve possuir tipagem explícita.

## 9. História US-002.3 — Botão reutilizável

### Descrição

Como visitante,

quero identificar claramente as principais ações da página,

para acessar projetos, GitHub, LinkedIn, currículo e contato.

### Variantes

- `primario`;
- `secundario`;
- `texto`.

### Tamanhos

- `medio`;
- `grande`.

### Critérios de aceite

- deve renderizar `a` quando receber `href`;
- deve renderizar `button` quando não receber `href`;
- deve aceitar `children`;
- deve aceitar `className`;
- deve aceitar variante e tamanho;
- deve aceitar propriedades nativas compatíveis;
- deve possuir foco visível;
- deve possuir estados de hover e foco;
- deve possuir área de interação adequada;
- deve usar os tokens do Design System;
- não deve usar bibliotecas externas;
- não deve utilizar `any`;
- deve permanecer como Server Component quando usado como link ou botão sem lógica interativa.

## 10. História US-002.4 — Cabeçalho global

### Descrição

Como visitante,

quero acessar as principais seções pelo cabeçalho,

para navegar pelo portfólio sem dificuldade.

### Conteúdo

- marca textual `WEPDEV`;
- link `Início`;
- link `Sobre`;
- link `Experiência`;
- link `Projetos`;
- link `Contato`.

### Critérios de aceite

- deve renderizar o elemento `header`;
- deve utilizar `Container`;
- deve possuir `nav` com rótulo acessível;
- a marca deve apontar para `#inicio`;
- os links devem apontar para as âncoras correspondentes;
- deve manter contraste adequado;
- deve ser responsivo;
- em telas pequenas, a navegação pode ser ocultada;
- não deve implementar menu móvel com JavaScript nesta entrega;
- deve permanecer como Server Component.

## 11. História US-002.5 — Rodapé global

### Descrição

Como visitante,

quero encontrar identificação profissional e links principais no final da página,

para acessar os canais profissionais de Waldir.

### Conteúdo

- Waldir Escouto Pereira;
- Desenvolvedor Java Sênior;
- GitHub;
- LinkedIn;
- ano atual;
- mensagem sobre Next.js e TypeScript.

### Critérios de aceite

- deve renderizar o elemento `footer`;
- deve utilizar `Container`;
- deve possuir contraste adequado;
- links externos devem utilizar `target="_blank"`;
- links externos devem utilizar `rel="noopener noreferrer"`;
- o ano atual deve ser calculado no servidor;
- não deve exigir `use client`;
- deve ser responsivo.

## 12. História US-002.6 — Integração ao layout raiz

### Descrição

Como visitante,

quero visualizar cabeçalho, conteúdo e rodapé de forma consistente,

para ter uma experiência uniforme em toda a aplicação.

### Critérios de aceite

O arquivo `frontend/app/layout.tsx` deve:

- preservar os metadados existentes;
- preservar as fontes existentes;
- renderizar `Cabecalho`;
- renderizar `children`;
- renderizar `Rodape`;
- manter `lang="pt-BR"`;
- manter a estrutura como Server Component;
- não duplicar estilos globais.

## 13. História US-002.7 — Adaptação da página inicial

### Descrição

Como desenvolvedor,

quero que a página inicial utilize os componentes da fundação,

para eliminar duplicação e validar a arquitetura criada.

### Critérios de aceite

O arquivo `frontend/app/page.tsx` deve:

- utilizar `Container`;
- utilizar `Secao`;
- utilizar `Botao`;
- preservar o conteúdo profissional atual;
- possuir `id="inicio"` na seção principal;
- possuir seções ou marcadores para:
  - `sobre`;
  - `experiencia`;
  - `projetos`;
  - `contato`;
- não criar conteúdo fictício detalhado para as seções futuras;
- manter a página como Server Component;
- não utilizar estilos inline;
- não instalar dependências.

## 14. Regras técnicas

- utilizar TypeScript estrito;
- utilizar nomes próprios do projeto em português;
- manter nomes obrigatórios do Next.js;
- não utilizar `any`;
- não utilizar `use client` sem necessidade;
- não criar arquivos de índice apenas por conveniência;
- não criar abstrações sem uso real;
- não modificar arquivos fora do escopo sem justificativa;
- utilizar o alias `@/*`;
- utilizar os tokens de `frontend/app/globals.css`;
- preservar a compatibilidade com Next.js 16;
- consultar `frontend/AGENTS.md` antes da implementação.

## 15. Acessibilidade

A implementação deve:

- usar elementos semânticos;
- manter foco visível;
- permitir navegação por teclado;
- possuir rótulo acessível na navegação;
- manter contraste adequado;
- evitar elementos clicáveis sem semântica;
- não depender apenas de cor para indicar ação.

## 16. Responsividade

A implementação deve funcionar em:

- dispositivos móveis;
- tablets;
- notebooks;
- monitores maiores.

Nesta entrega, não é obrigatório implementar menu móvel interativo.

## 17. Validação obrigatória

Antes de considerar a entrega concluída, executar:

```bash
npm run lint
npm run build
```

Os dois comandos devem terminar sem erros.

## 18. Evidências esperadas

A entrega deve apresentar:

- lista dos arquivos criados;
- lista dos arquivos modificados;
- resumo das decisões adotadas;
- resultado do lint;
- resultado do build;
- confirmação de que nenhuma dependência foi instalada.

## 19. Definição de pronto

O épico será considerado concluído quando:

- os cinco componentes estiverem implementados;
- o layout raiz estiver integrado;
- a página inicial utilizar os componentes;
- a navegação por âncoras funcionar;
- a página estiver responsiva;
- a acessibilidade básica estiver preservada;
- o lint passar;
- o build passar;
- não houver novas dependências;
- a implementação estiver pronta para revisão.
