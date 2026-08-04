# Frontend — WEPDEV Portfolio

Aplicação web responsável pela interface pública da WEPDEV Portfolio.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Turbopack

## Executar localmente

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Validação

Execute a análise estática:

```bash
npm run lint
```

Gere a compilação de produção:

```bash
npm run build
```

## Estrutura inicial

```text
app/
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx
```

- `layout.tsx`: estrutura global e metadados da aplicação.
- `page.tsx`: página inicial.
- `globals.css`: estilos globais e configuração do Tailwind CSS.
- `favicon.ico`: ícone exibido na aba do navegador.

## Idioma

A interface, os nomes de domínio, os componentes e as funções próprias do projeto serão escritos em português.

Arquivos e convenções obrigatórias do Next.js permanecerão com os nomes definidos pelo framework.