# EP-008 — Deploy, Cloudflare e Analytics

## 1. Identificação

- Código: EP-008
- Nome: Deploy, Cloudflare e Analytics
- Produto: WEPDEV Portfolio
- Sprint: 5 — Publicação e Observabilidade
- Prioridade: Alta
- Estado: Pronto para implementação
- Responsável: Waldir Escouto Pereira

## 2. Objetivo

Publicar a WEPDEV Portfolio em ambiente próprio utilizando Docker e Cloudflare Tunnel, com domínio público, HTTPS, processo de atualização reproduzível e preparação para métricas de acesso com Umami Analytics.

## 3. Domínio oficial

O domínio público definitivo será:

```text
https://wepdev.com.br
```

Não utilizar:

- DuckDNS;
- `wepdevportfolio.duckdns.org`;
- WordPress;
- DS Catalog;
- Certbot para o domínio principal;
- K3s;
- Traefik.

## 4. Arquitetura alvo

```text
Internet
    ↓
Cloudflare
    ↓
Cloudflare Tunnel
    ↓
127.0.0.1:3000
    ↓
WEPDEV Portfolio em Docker
```

Na primeira entrega, o Cloudflare Tunnel poderá encaminhar diretamente para o container Next.js publicado somente em `127.0.0.1:3000`.

O Nginx não será obrigatório nesta fase.

## 5. Estado atual do servidor

- Sistema: Ubuntu Server 24.04.4 LTS;
- Docker: instalado e ativo;
- Docker Compose: instalado;
- Cloudflared: instalado como serviço systemd;
- domínio `wepdev.com.br`: configurado no túnel;
- PostgreSQL: ativo;
- pgAdmin: ativo;
- Portainer: ativo;
- Watchtower: ativo;
- portas 80, 443, 3000, 8080 e 8081: disponíveis;
- WordPress: removido;
- DS Catalog: removido;
- K3s: removido;
- DuckDNS: removido da arquitetura;
- certificado antigo do DuckDNS: removido.

## 6. Escopo da primeira entrega

A primeira entrega deverá contemplar:

- configuração do Next.js para produção em modo standalone;
- Dockerfile multi-stage;
- `.dockerignore`;
- Docker Compose do portfólio;
- container executando como usuário não root;
- exposição somente em `127.0.0.1:3000`;
- healthcheck;
- política de reinício;
- validação local;
- atualização do Cloudflare Tunnel para a porta 3000;
- validação pública do domínio;
- documentação operacional;
- script de deploy manual;
- preparação para deploy automatizado futuro.

## 7. Fora do escopo desta primeira entrega

Não fazem parte desta etapa inicial:

- Umami ativo;
- banco do Umami;
- painel de analytics;
- GitHub Actions;
- webhook;
- deploy automático;
- Nginx como proxy reverso;
- load balancer;
- múltiplas réplicas;
- Kubernetes;
- renovação com Certbot;
- backend Java;
- monitoramento externo;
- alertas.

O Umami será implementado na segunda parte do EP-008, após a publicação estável do portfólio.

## 8. Dockerfile

O Dockerfile deverá:

- utilizar Node.js LTS compatível com Next.js 16;
- utilizar build multi-stage;
- instalar dependências com `npm ci`;
- executar `npm run build`;
- utilizar a saída standalone;
- copiar somente arquivos necessários para runtime;
- copiar `.next/static`;
- copiar `public`;
- executar como usuário não root;
- configurar `NODE_ENV=production`;
- configurar `HOSTNAME=0.0.0.0`;
- configurar porta 3000;
- iniciar por `node server.js`;
- não conter segredos;
- não instalar dependências globais desnecessárias.

## 9. Configuração do Next.js

Adicionar no `frontend/next.config.ts`:

```typescript
output: "standalone"
```

Preservar as demais configurações existentes.

## 10. Docker Compose

Criar um Compose específico para produção.

Estrutura sugerida:

```text
infra/
└── production/
    ├── compose.yaml
    ├── .env.example
    └── scripts/
        ├── deploy.sh
        ├── status.sh
        └── rollback.sh
```

O Compose deverá:

- possuir serviço `portfolio`;
- utilizar build do frontend;
- publicar somente:
  - `127.0.0.1:3000:3000`;
- usar `restart: unless-stopped`;
- configurar healthcheck;
- definir nome claro para o container;
- não utilizar modo privilegiado;
- não montar o Docker socket;
- não armazenar segredo no repositório;
- não depender de PostgreSQL;
- não depender de Nginx;
- não criar porta pública no firewall.

## 11. Healthcheck

O container deverá disponibilizar ou responder adequadamente à rota principal.

O healthcheck poderá utilizar:

```text
http://127.0.0.1:3000/
```

O resultado esperado é HTTP 200.

## 12. Cloudflare Tunnel

Após a aplicação estar saudável localmente, alterar:

```yaml
service: http://localhost:80
```

para:

```yaml
service: http://localhost:3000
```

Manter:

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

## 13. Segurança

Garantir:

- container não root;
- porta 3000 vinculada somente ao loopback;
- nenhum segredo na imagem;
- nenhum `.env` versionado;
- nenhuma credencial do Cloudflare no repositório;
- nenhuma porta adicional no UFW;
- nenhuma exposição direta do PostgreSQL;
- dependências instaladas com lockfile;
- imagem enxuta;
- execução em produção;
- sem acesso ao Docker socket.

## 14. Diretório no servidor

A aplicação deverá ser instalada em:

```text
/home/wepdev/apps/wepdev-portfolio
```

Estrutura esperada:

```text
/home/wepdev/apps/wepdev-portfolio/
├── repository/
├── compose.yaml
├── .env
├── scripts/
└── logs/
```

A estrutura final poderá ser refinada, desde que permaneça simples e documentada.

## 15. Estratégia inicial de deploy

O primeiro deploy será manual e reproduzível:

```text
git clone
    ↓
docker compose build
    ↓
docker compose up -d
    ↓
healthcheck local
    ↓
Cloudflare Tunnel
    ↓
validação pública
```

Não configurar automação antes de o deploy manual estar validado.

## 16. Script de deploy

Criar script idempotente que:

- acesse o diretório correto;
- execute `git fetch`;
- atualize a branch `main` com segurança;
- execute build;
- suba o serviço;
- aguarde healthcheck;
- mostre status;
- encerre com erro quando alguma etapa falhar.

O script não deverá:

- usar `git reset --hard` sem necessidade;
- apagar arquivos não rastreados;
- executar prune global;
- remover volumes;
- conter token;
- alterar firewall;
- modificar Cloudflare automaticamente na primeira versão.

## 17. Rollback

A primeira versão deverá documentar rollback manual por commit ou tag.

Não criar mecanismo complexo antes de existir uma primeira versão estável.

## 18. Logs

Os logs deverão ser consultados por:

```bash
docker compose logs -f portfolio
```

Não armazenar logs indefinidamente em arquivos locais nesta primeira entrega.

Configurar rotação do driver padrão quando aplicável.

## 19. Analytics

O Umami será implementado após o deploy principal.

A arquitetura prevista será:

```text
WEPDEV Portfolio
    ↓
Umami Analytics
    ↓
PostgreSQL
```

Métricas obrigatórias:

- visitantes únicos;
- visualizações;
- páginas acessadas;
- origem do tráfego;
- países aproximados;
- navegadores;
- dispositivos;
- cliques no LinkedIn;
- cliques no GitHub;
- cliques no e-mail;
- acessos ao currículo;
- cliques no repositório do portfólio.

Os atributos `data-umami-event` já presentes no frontend deverão ser reaproveitados.

## 20. Domínio do Analytics

Domínio planejado:

```text
analytics.wepdev.com.br
```

O painel não deverá ser exposto sem autenticação.

A decisão sobre Cloudflare Access será realizada na etapa do Umami.

## 21. PostgreSQL do Umami

Antes da instalação será decidido se:

- o Umami utilizará o PostgreSQL já existente; ou
- possuirá PostgreSQL isolado no próprio Compose.

A decisão deverá considerar:

- isolamento;
- backup;
- atualização;
- simplicidade;
- risco de conflito;
- segurança.

Nenhuma alteração no PostgreSQL atual deverá ocorrer durante a primeira entrega.

## 22. Documentação de infraestrutura

Criar posteriormente:

```text
docs/03-infrastructure/
├── 01-visao-geral.md
├── 02-servidor-ubuntu.md
├── 03-docker.md
├── 04-cloudflare-tunnel.md
├── 05-deploy-portfolio.md
├── 06-analytics-umami.md
└── 07-backup-e-recuperacao.md
```

## 23. Validação local obrigatória

Validar:

- `npm run lint`;
- `npm run build`;
- build da imagem Docker;
- inicialização do Compose;
- container saudável;
- HTTP 200 em `http://127.0.0.1:3000`;
- currículo PDF acessível;
- nenhuma porta pública nova;
- container executando como usuário não root;
- logs sem erro crítico.

## 24. Validação pública obrigatória

Após alterar o túnel:

- `https://wepdev.com.br` deve responder HTTP 200;
- certificado HTTPS deve ser fornecido pela Cloudflare;
- página inicial deve carregar;
- assets devem carregar;
- currículo deve abrir;
- GitHub deve abrir;
- LinkedIn deve abrir;
- não deve existir redirecionamento para DuckDNS;
- não deve existir conteúdo do WordPress;
- não deve existir página padrão do Nginx.

## 25. Não alterar

Não alterar nesta entrega:

- conteúdo visual do portfólio;
- experiências;
- projetos;
- contatos;
- currículo;
- package-lock.json, exceto se tecnicamente inevitável e justificado;
- dependências;
- PostgreSQL;
- pgAdmin;
- Portainer;
- Watchtower;
- firewall;
- DNS do domínio;
- Cloudflare antes do container estar saudável.

## 26. Definição de pronto

A primeira parte do EP-008 será considerada concluída quando:

- o projeto possuir Dockerfile de produção;
- a imagem utilizar standalone output;
- o Compose iniciar o portfólio;
- o container estiver saudável;
- a porta estiver vinculada somente ao loopback;
- o domínio público responder corretamente;
- HTTPS estiver ativo pelo Cloudflare;
- o processo estiver documentado;
- não houver referência ao DuckDNS;
- não houver dependência do K3s;
- lint e build passarem;
- a entrega estiver pronta para versionamento.
