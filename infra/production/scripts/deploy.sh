#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
REPOSITORY_DIR="$(cd "${COMPOSE_DIR}/../.." && pwd)"

cd "${REPOSITORY_DIR}"

echo "==> Validando repositório Git"
git rev-parse --is-inside-work-tree >/dev/null

BRANCH="$(git branch --show-current)"
if [[ "${BRANCH}" != "main" ]]; then
  echo "Erro: deploy deve ser executado na branch main. Branch atual: ${BRANCH}" >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Erro: working tree não está limpa. Faça commit, stash ou resolva as alterações antes do deploy." >&2
  exit 1
fi

echo "==> Atualizando main com fast-forward"
git fetch origin
git pull --ff-only origin main

cd "${COMPOSE_DIR}"

echo "==> Construindo imagem Docker"
docker compose build --pull

echo "==> Subindo serviço"
docker compose up -d

echo "==> Aguardando healthcheck"
for attempt in {1..30}; do
  health_status="$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}unknown{{end}}' wepdev-portfolio 2>/dev/null || true)"

  if [[ "${health_status}" == "healthy" ]]; then
    echo "Serviço saudável."
    docker compose ps
    echo "Logs: docker compose logs -f portfolio"
    exit 0
  fi

  echo "Tentativa ${attempt}/30: estado atual = ${health_status}"
  sleep 3
done

echo "Erro: container não ficou saudável dentro do tempo esperado." >&2
docker compose ps
docker compose logs --tail=80 portfolio
exit 1
