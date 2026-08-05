# Infraestrutura — Visão Geral

## Arquitetura Atual

A arquitetura de publicação da WEPDEV Portfolio será baseada em Docker e Cloudflare Tunnel:

```text
Internet
  -> Cloudflare
  -> Cloudflare Tunnel
  -> 127.0.0.1:3000
  -> WEPDEV Portfolio em Docker
```

O frontend Next.js é empacotado com `output: "standalone"` e executado em container próprio.

## Domínio Oficial

O domínio oficial da WEPDEV Portfolio é:

```text
https://wepdev.com.br
```

Não fazem parte da arquitetura atual DuckDNS, WordPress, DS Catalog, K3s ou Traefik.

## Servidor Ubuntu

O ambiente alvo é um servidor Ubuntu com Docker, Docker Compose e Cloudflared já instalados.

Esta primeira parte do EP-008 não altera o servidor remoto, firewall, DNS, Cloudflare ou serviços externos.

## Docker

O Dockerfile de produção fica em `frontend/Dockerfile` e usa:

- build multi-stage;
- `npm ci`;
- `npm run build`;
- saída `.next/standalone`;
- runtime com `node server.js`;
- execução como usuário não root.

O Compose de produção fica em `infra/production/compose.yaml`.

## Cloudflare Tunnel

O Cloudflare Tunnel deve encaminhar o domínio `wepdev.com.br` para o serviço local:

```text
http://localhost:3000
```

A mudança do túnel é operacional e não é executada por esta entrega.

## Serviços Preservados

Devem ser preservados:

- PostgreSQL;
- pgAdmin;
- Portainer;
- Watchtower;
- Cloudflared;
- firewall existente;
- DNS e configurações de domínio.

## Serviços Removidos da Arquitetura

Não compõem a arquitetura do portfólio:

- WordPress;
- DS Catalog;
- DuckDNS;
- K3s;
- Traefik;
- Certbot para o domínio principal.

## Decisões Técnicas

- Next.js standalone reduz o runtime da imagem.
- O Compose publica a aplicação somente em `127.0.0.1:3000`.
- O healthcheck usa Node.js nativo para evitar pacotes extras no runtime.
- O deploy manual precede qualquer automação.
- O Nginx não é obrigatório nesta fase.

## Segurança

- Nenhum segredo é versionado.
- Nenhum arquivo `.env` real deve ser commitado.
- O container não executa como root.
- O Docker socket não é montado.
- O serviço não usa modo privilegiado.
- O PostgreSQL não é exposto pelo Compose do portfólio.
- A porta pública é provida pelo Cloudflare, não pelo container diretamente.

## Evolução Futura com Umami

O Umami Analytics será tratado na segunda parte do EP-008. Os atributos `data-umami-event` já existentes no frontend devem ser reaproveitados para medir eventos como LinkedIn, GitHub, e-mail, currículo e repositório do portfólio.

Esta etapa não instala Umami, não altera PostgreSQL e não adiciona script de analytics ao frontend.
