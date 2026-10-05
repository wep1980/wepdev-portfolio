# Deploy do Portfólio

## Build

O frontend é preparado para produção com Next.js standalone:

```bash
cd frontend
npm run build
```

A imagem Docker deve ser construída usando a pasta `frontend` como contexto:

```bash
docker build -t wepdev-portfolio:local frontend
```

## Deploy

No servidor, a partir de:

```text
/home/wepdev/projetos/wepdev-portfolio/infra/production
```

executar:

```bash
./scripts/deploy.sh
```

O script valida Git, branch `main`, working tree limpa, atualiza com fast-forward, reconstrói a imagem e sobe o serviço.

### Ajustes locais do servidor (`compose.override.yaml`)

No servidor existe o arquivo `infra/production/compose.override.yaml`, que **não é versionado** (está no `.gitignore`). Ele é carregado automaticamente pelo `docker compose` e hoje define o limite de memória do container (`mem_limit` e `memswap_limit` de `512m`). Não apague esse arquivo ao atualizar o servidor. Como está ignorado pelo Git, ele não deixa a working tree "suja" e não impede o `deploy.sh`.

## Atualização

Para atualizar manualmente:

```bash
./scripts/deploy.sh
```

Não usar `git reset --hard`, `git clean`, `docker system prune` ou remoção de volumes como parte do fluxo normal.

## Healthcheck

O container deve ficar saudável via:

```text
http://127.0.0.1:3000/
```

Verificar:

```bash
docker compose ps
docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{end}}' wepdev-portfolio
```

## Logs

```bash
docker compose logs -f portfolio
```

Para inspeção rápida:

```bash
docker compose logs --tail=120 portfolio
```

## Rollback

Para voltar para uma tag ou commit:

```bash
./scripts/rollback.sh <commit-ou-tag>
```

O rollback usa checkout destacável, não apaga histórico e não faz push.

Para retornar à branch principal:

```bash
git switch main
git pull --ff-only origin main
./scripts/deploy.sh
```

## Cloudflare

Após o container estar saudável, ajustar operacionalmente o túnel de:

```yaml
service: http://localhost:80
```

para:

```yaml
service: http://localhost:3000
```

Validar:

```bash
cloudflared --config /etc/cloudflared/config.yml tunnel ingress validate
```

Reiniciar:

```bash
systemctl restart cloudflared
systemctl status cloudflared
```

Não versionar credenciais, tokens ou conteúdo do `credentials-file`.

## Validação Pública

Depois da alteração do túnel:

```bash
curl -I https://wepdev.com.br
```

Validar:

- resposta HTTP 200;
- HTTPS fornecido pela Cloudflare;
- carregamento da página inicial;
- carregamento dos assets;
- currículo PDF acessível;
- ausência de conteúdo antigo como WordPress ou página padrão.

## Currículo PDF

Validação local:

```bash
curl -I http://127.0.0.1:3000/waldir_escouto_pereira_cv.pdf
```

Resultado esperado:

```text
HTTP 200
Content-Type: application/pdf
```

## Recuperação Básica

Verificar status:

```bash
./scripts/status.sh
```

Reiniciar container:

```bash
docker compose up -d
```

Reconstruir imagem:

```bash
docker compose build --pull
docker compose up -d
```

Inspecionar usuário do container:

```bash
docker compose exec portfolio id
```

O usuário não deve ser `root`.

## Analytics

O Umami Analytics será implementado em etapa posterior. Esta entrega apenas preserva os atributos `data-umami-event` existentes no frontend e documenta a arquitetura futura.

## Rollback

Opção 1, pelo Git: `./scripts/rollback.sh <commit-ou-tag>` faz o checkout destacado do commit informado e reconstrói a imagem a partir dele. Depois, para voltar a atualizar normalmente, execute `git checkout main`, pois o `deploy.sh` exige a branch `main`.

Opção 2, mais rápida, pela imagem Docker: antes de um deploy importante, guarde a imagem atual com uma etiqueta de data:

```bash
docker tag wepdev-portfolio-production-portfolio:latest wepdev-portfolio-production-portfolio:antes-AAAA-MM-DD
```

Para voltar, reaponte a etiqueta `latest` para a imagem guardada e rode `docker compose up -d` em `infra/production`:

```bash
docker tag wepdev-portfolio-production-portfolio:antes-AAAA-MM-DD wepdev-portfolio-production-portfolio:latest
docker compose up -d
```
