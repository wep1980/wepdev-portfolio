# Frontend — Visão Geral

## Objetivo

O frontend da WEPDEV Portfolio é responsável por apresentar a experiência profissional, projetos, conhecimentos técnicos e conteúdos produzidos por Waldir Escouto Pereira de forma moderna, responsiva e acessível.

O projeto foi concebido para demonstrar conhecimentos de Engenharia de Software, desenvolvimento Frontend moderno e integração com um backend Java utilizando boas práticas de arquitetura.

---

# Tecnologias

O frontend utiliza as seguintes tecnologias:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- App Router
- Server Components

---

# Objetivos do projeto

Este frontend possui os seguintes objetivos:

- apresentar um portfólio profissional;
- demonstrar qualidade de código;
- demonstrar arquitetura moderna;
- servir como laboratório para estudos de IA;
- consumir APIs desenvolvidas em Java Spring Boot.

---

# Organização

O projeto utiliza uma arquitetura baseada em responsabilidades.

Cada diretório possui um objetivo específico.

```text
frontend
│
├── app
├── componentes
├── constantes
├── dominio
├── estilos
├── public
├── recursos
├── servicos
├── tipos
└── utilitarios
```

---

# Responsabilidade das pastas

## app

Responsável pelo roteamento da aplicação utilizando o App Router do Next.js.

Não deve conter regras de negócio nem componentes reutilizáveis.

---

## componentes

Contém todos os componentes reutilizáveis da aplicação.

Exemplos:

- Botão
- Cabeçalho
- Rodapé
- Cards
- Hero
- Timeline

---

## dominio

Representa o domínio da aplicação.

Conterá as entidades utilizadas pelo frontend.

Exemplos:

- Projeto
- Experiência
- Certificação
- Artigo

---

## servicos

Camada responsável pela comunicação com APIs externas.

Nenhuma chamada HTTP deverá ser realizada diretamente dentro dos componentes.

---

## tipos

Centraliza interfaces e tipos TypeScript compartilhados.

---

## constantes

Armazena valores fixos utilizados pela aplicação.

Exemplos:

- rotas
- links
- tecnologias
- configurações

---

## estilos

Contém estilos compartilhados e tokens visuais.

---

## recursos

Armazena arquivos públicos utilizados pela aplicação.

Exemplos:

- imagens
- currículos
- logotipos
- ícones

---

## utilitarios

Funções reutilizáveis sem estado.

Exemplos:

- formatadores
- validadores
- conversores

---

# Princípios arquiteturais

Este projeto adota os seguintes princípios:

- simplicidade;
- baixo acoplamento;
- alta coesão;
- reutilização;
- acessibilidade;
- responsividade;
- código limpo;
- documentação contínua.

---

# Convenções

Sempre que possível:

- utilizar Server Components;
- evitar dependências desnecessárias;
- evitar duplicação de código;
- utilizar nomes em português para componentes próprios;
- manter nomes obrigatórios do Next.js em inglês.

---

# Integração futura

O frontend será integrado a uma API desenvolvida em Java Spring Boot.

Toda comunicação ocorrerá por meio da camada `servicos`.

---

# Critérios de qualidade

Toda implementação deverá:

- compilar sem erros;
- passar pelo ESLint;
- gerar build de produção;
- seguir a arquitetura definida nesta documentação.

---

# Próximos documentos

Após este documento serão elaborados:

1. Design System
2. Componentes Base
3. Layout
4. Home
5. Projetos
6. Blog
7. SEO
8. Integração com Backend
