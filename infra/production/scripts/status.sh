#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${COMPOSE_DIR}"

echo "==> Status do Compose"
docker compose ps

echo
echo "==> Healthcheck do container"
docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}healthcheck indisponível{{end}}' wepdev-portfolio 2>/dev/null || true

echo
echo "==> Teste HTTP local"
node -e "fetch('http://127.0.0.1:3000/').then(async (response) => { console.log('HTTP ' + response.status); process.exit(response.ok ? 0 : 1); }).catch((error) => { console.error(error.message); process.exit(1); });"

echo
echo "==> Últimas linhas de log"
docker compose logs --tail=80 portfolio
