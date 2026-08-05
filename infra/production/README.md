# Produção — WEPDEV Portfolio

## Objetivo

Este diretório prepara a WEPDEV Portfolio para execução em produção com Docker Compose, Next.js standalone e exposição local para Cloudflare Tunnel.

Esta etapa não instala Umami, não altera Cloudflare, não altera DNS e não modifica serviços externos.

## Arquitetura

```text
Internet
  -> Cloudflare
  -> Cloudflare Tunnel
  -> http://127.0.0.1:3000
  -> Container wepdev-portfolio
```

O container publica a porta `3000` somente no loopback do servidor.

## Pré-requisitos

- Ubuntu Server com Docker ativo.
- Docker Compose disponível pelo comando `docker compose`.
- Repositório clonado no servidor.
- Cloudflared instalado e configurado previamente.
- Branch `main` limpa para deploy.

## Estrutura

```text
infra/production/
├── compose.yaml
├── .env.example
├── README.md
└── scripts/
    ├── deploy.sh
    ├── status.sh
    └── rollback.sh
```

Diretório esperado no servidor:

```text
/home/wepdev/apps/wepdev-portfolio/repository/infra/production
```

## Primeiro Deploy

No servidor, a partir de `infra/production`:

```bash
./scripts/deploy.sh
```

O script valida o repositório, exige branch `main`, exige working tree limpa, atualiza com `git pull --ff-only origin main`, reconstrói a imagem e sobe o serviço.

## Atualização Manual

Use o mesmo script de deploy:

```bash
./scripts/deploy.sh
```

O script não executa `git reset --hard`, `git clean`, `docker system prune`, remoção de volumes ou alteração de firewall.

## Status

```bash
./scripts/status.sh
```

O script mostra:

- `docker compose ps`;
- estado de saúde do container;
- teste HTTP local em `http://127.0.0.1:3000/`;
- últimas linhas de log.

## Logs

```bash
docker compose logs -f portfolio
```

O Compose usa rotação do driver `json-file` com `max-size=10m` e `max-file=3`.

## Rollback

Para voltar temporariamente para uma tag ou commit:

```bash
./scripts/rollback.sh <commit-ou-tag>
```

O rollback exige working tree limpa, valida a referência e faz `git checkout --detach` no commit ou tag solicitado. Essa estratégia não apaga histórico e não faz push.

Para voltar ao fluxo normal depois:

```bash
git switch main
git pull --ff-only origin main
./scripts/deploy.sh
```

## Porta Local

O serviço publica somente:

```text
127.0.0.1:3000:3000
```

Não expor `0.0.0.0:3000` em produção.

## Healthcheck

O healthcheck usa Node.js dentro do container para testar:

```text
http://127.0.0.1:3000/
```

Isso evita instalar `curl` ou `wget` na imagem final.

## Cloudflare Tunnel

Após o container estar saudável, a alteração operacional prevista no arquivo do Cloudflare é trocar:

```yaml
service: http://localhost:80
```

para:

```yaml
service: http://localhost:3000
```

Preservar:

```yaml
- hostname: wepdev.com.br
```

E a regra final:

```yaml
- service: http_status:404
```

Validar a configuração antes de reiniciar:

```bash
cloudflared --config /etc/cloudflared/config.yml tunnel ingress validate
```

Reiniciar o serviço somente depois da validação:

```bash
systemctl restart cloudflared
systemctl status cloudflared
```

Este repositório não versiona credenciais nem conteúdo do `credentials-file`.

## Teste Local

```bash
curl -I http://127.0.0.1:3000/
```

Resultado esperado: `HTTP/1.1 200 OK`.

## Teste Público

Após a alteração do túnel:

```bash
curl -I https://wepdev.com.br
```

Validar também no navegador:

- página inicial;
- assets;
- links de LinkedIn e GitHub;
- currículo PDF.

## Currículo PDF

Validar o arquivo público:

```bash
curl -I http://127.0.0.1:3000/waldir_escouto_pereira_cv.pdf
```

Resultado esperado:

```text
HTTP 200
Content-Type: application/pdf
```

## Usuário Não Root

Validar o usuário efetivo do container:

```bash
docker compose exec portfolio id
```

O resultado deve indicar usuário `nextjs`, não `root`.

## Segurança

- Container executa como usuário não root.
- Porta publicada somente em `127.0.0.1`.
- Sem Docker socket montado.
- Sem modo `privileged`.
- Sem PostgreSQL, Nginx, Cloudflare ou firewall acoplados ao Compose.
- Sem `.env` real versionado.
- Sem tokens, senhas ou credenciais no repositório.
- Dependências instaladas por `npm ci` com lockfile.

## Analytics

O Umami será a segunda parte do EP-008. Os atributos `data-umami-event` já existentes no frontend devem ser preservados, mas nenhum script do Umami é instalado nesta etapa.

## Troubleshooting

Ver containers:

```bash
docker compose ps
```

Ver logs:

```bash
docker compose logs --tail=120 portfolio
```

Recriar o serviço:

```bash
docker compose up -d --build
```

Testar porta local:

```bash
curl -I http://127.0.0.1:3000/
```

Validar Cloudflare Tunnel:

```bash
cloudflared --config /etc/cloudflared/config.yml tunnel ingress validate
```
