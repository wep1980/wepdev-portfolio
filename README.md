# WEPDEV Portfolio

Portfólio profissional de Waldir Escouto Pereira, Engenheiro de Software Sênior (Java): https://wepdev.com.br

## Objetivo

Apresentar experiência profissional, competências técnicas, projetos e estudos de caso de forma pública e organizada, apoiando a recolocação profissional para vagas de desenvolvimento com Java (backend, full stack e engenharia de software).

## Como é construído hoje

Site de página única, gerado de forma estática, com o conteúdo (experiências, projetos, tecnologias) mantido como dados no código do frontend. **Não há backend nem banco de dados em produção.**

| Camada | Tecnologia |
|---|---|
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Empacotamento | Docker (build `standalone`) |
| Infraestrutura | Docker Compose em servidor Ubuntu próprio, exposto por Cloudflare Tunnel (`infra/production`) |
| Métricas | Umami Analytics próprio (script em `analytics.wepdev.com.br`) |

Um backend (Java 21, Spring Boot, PostgreSQL) foi cogitado no início do projeto, mas **não foi implementado**; só entrará quando houver uma necessidade real (por exemplo, formulário de contato com persistência).

## Estrutura do repositório

- `frontend/`: aplicação Next.js (código do site, conteúdo em `frontend/constantes/`).
- `docs/`: documentação do produto, design, frontend e infraestrutura.
- `infra/production/`: composição e scripts de produção.

## Desenvolvimento local

```bash
cd frontend
npm ci
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Atualizando o conteúdo

Experiências, projetos e tecnologias ficam em `frontend/constantes/`. O currículo em PDF fica em `frontend/public/` e deve ser atualizado junto com o LinkedIn para que os três canais contem a mesma história.

## Licença

Distribuído sob a licença MIT.
