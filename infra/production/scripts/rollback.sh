#!/usr/bin/env bash
set -Eeuo pipefail

if [[ $# -ne 1 ]]; then
  echo "Uso: ./scripts/rollback.sh <commit-ou-tag>" >&2
  exit 1
fi

TARGET_REF="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
REPOSITORY_DIR="$(cd "${COMPOSE_DIR}/../.." && pwd)"

cd "${REPOSITORY_DIR}"

echo "==> Validando repositório Git"
git rev-parse --is-inside-work-tree >/dev/null

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Erro: working tree não está limpa. Rollback não prossegue com alterações locais." >&2
  exit 1
fi

if ! git rev-parse --verify --quiet "${TARGET_REF}^{commit}" >/dev/null; then
  echo "Erro: referência não encontrada: ${TARGET_REF}" >&2
  exit 1
fi

echo "==> Entrando em checkout destacável na referência ${TARGET_REF}"
git checkout --detach "${TARGET_REF}"

cd "${COMPOSE_DIR}"

echo "==> Reconstruindo imagem Docker"
docker compose build --pull

echo "==> Subindo serviço"
docker compose up -d

echo "==> Aguardando healthcheck"
for attempt in {1..30}; do
  health_status="$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}unknown{{end}}' wepdev-portfolio 2>/dev/null || true)"

  if [[ "${health_status}" == "healthy" ]]; then
    echo "Rollback aplicado e serviço saudável."
    docker compose ps
    echo "Para voltar ao fluxo normal depois, execute: git switch main && git pull --ff-only origin main"
    exit 0
  fi

  echo "Tentativa ${attempt}/30: estado atual = ${health_status}"
  sleep 3
done

echo "Erro: container não ficou saudável após rollback." >&2
docker compose ps
docker compose logs --tail=80 portfolio
exit 1
