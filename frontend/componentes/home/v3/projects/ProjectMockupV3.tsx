import type { VarianteProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectMockupV3 = {
  variante: VarianteProjetoV3;
};

function BarraProduto({
  nome,
  indicador = "Produto conceitual",
}: {
  nome: string;
  indicador?: string;
}) {
  return (
    <div className="flex h-11 shrink-0 items-center gap-2 border-b border-white/10 px-4">
      <span className="size-2 rounded-full bg-white/35" />
      <span className="size-2 rounded-full bg-primary/80" />
      <span className="size-2 rounded-full bg-white/20" />
      <span className="ml-3 truncate font-mono text-[0.58rem] text-muted/80">
        {nome}
      </span>
      <span className="ml-auto hidden font-mono text-[0.54rem] uppercase tracking-[0.12em] text-subtle sm:block">
        {indicador}
      </span>
    </div>
  );
}

function NavegacaoProduto({ itens }: { itens: readonly string[] }) {
  return (
    <aside className="hidden w-24 shrink-0 border-r border-white/10 p-3 sm:block">
      <span className="mb-4 block h-2 w-10 rounded bg-primary/70" />
      <div className="space-y-3">
        {itens.map((item, indice) => (
          <div key={item} className="flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${indice === 0 ? "bg-primary" : "bg-white/25"}`} />
            <span className={`truncate font-mono text-[0.54rem] ${indice === 0 ? "text-foreground" : "text-subtle"}`}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function MetricTile({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-3">
      <p className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-subtle">{label}</p>
      <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
      <p className="mt-1 font-mono text-[0.52rem] text-muted/70">{detail}</p>
    </div>
  );
}

function MockupIA() {
  return (
    <div className="flex min-h-56 flex-1 flex-col bg-gradient-surface">
      <BarraProduto nome="workspace / agente-financeiro" />
      <div className="flex flex-1">
        <NavegacaoProduto itens={["Conversas", "Agentes", "Fontes", "Configuração"]} />
        <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_6rem]">
          <div className="flex min-w-0 flex-col p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[0.54rem] uppercase tracking-[0.14em] text-primary">Agente Financeiro</p>
                <p className="mt-1 text-xs font-medium text-foreground">Resumo de contratos</p>
              </div>
              <span className="rounded border border-primary/40 px-2 py-1 font-mono text-[0.5rem] text-primary">Ollama</span>
            </div>
            <div className="mt-5 max-w-[88%] border border-white/10 bg-white/[0.04] p-3">
              <p className="font-mono text-[0.54rem] text-subtle">Base de conhecimento · 24 fontes</p>
              <p className="mt-2 text-[0.65rem] leading-5 text-muted">Analise cláusulas, compare versões e encontre respostas com contexto.</p>
            </div>
            <div className="mt-3 ml-auto max-w-[76%] border border-primary/35 bg-primary/10 p-3">
              <p className="font-mono text-[0.54rem] text-primary">Pergunta enviada</p>
              <p className="mt-2 text-[0.62rem] text-foreground">Quais contratos precisam de revisão?</p>
            </div>
          </div>
          <div className="border-l border-white/10 p-3">
            <p className="font-mono text-[0.52rem] uppercase tracking-[0.12em] text-subtle">Contexto</p>
            <div className="mt-4 space-y-3">
              {["Contratos", "Políticas", "Resumo"].map((item, indice) => (
                <div key={item} className="border-b border-white/10 pb-2">
                  <span className="block text-[0.56rem] text-muted">{item}</span>
                  <span className="mt-1 block h-1.5 rounded bg-white/15" style={{ width: `${72 - indice * 14}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupMicrosservicos() {
  const servicos = [
    ["API Gateway", "edge"],
    ["Pedidos", "java"],
    ["Pagamento", "java"],
    ["Clientes", "service"],
  ];

  return (
    <div className="flex min-h-56 flex-1 flex-col bg-gradient-surface">
      <BarraProduto nome="platform / service-map" indicador="Topology" />
      <div className="relative flex flex-1 items-center p-5">
        <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-primary/35" />
        <div className="relative grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {servicos.map(([titulo, detalhe], indice) => (
            <div key={titulo} className={`relative border border-white/15 bg-white/[0.04] p-3 ${indice === 0 ? "border-primary/45" : ""}`}>
              <span className="mb-3 block size-2 rounded-full bg-primary" />
              <p className="truncate text-[0.62rem] font-medium text-foreground">{titulo}</p>
              <p className="mt-1 font-mono text-[0.52rem] text-subtle">{detalhe}</p>
              {indice < servicos.length - 1 ? <span aria-hidden="true" className="absolute -right-3 top-1/2 h-px w-3 bg-primary/45" /> : null}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[0.52rem] text-subtle">
          <span>Kafka · events</span>
          <span className="text-primary">Observabilidade conectada</span>
        </div>
      </div>
    </div>
  );
}

function MockupReact() {
  return (
    <div className="flex min-h-56 flex-1 flex-col bg-gradient-surface">
      <BarraProduto nome="admin / overview" indicador="React + API" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          <MetricTile label="Receita" value="R$ 84,2k" detail="+12,4% no período" />
          <MetricTile label="Pedidos" value="1.284" detail="processados" />
          <MetricTile label="Clientes" value="642" detail="base ativa" />
        </div>
        <div className="grid min-h-20 flex-1 grid-cols-[1.4fr_0.8fr] gap-3">
          <div className="border border-white/10 bg-white/[0.04] p-3">
            <p className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-subtle">Receita no período</p>
            <svg viewBox="0 0 260 72" className="mt-3 h-auto w-full" aria-hidden="true">
              <path d="M0 58 26 52 49 56 77 35 101 43 127 24 154 34 180 18 208 25 234 10 260 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <path d="M0 64h260" stroke="currentColor" strokeOpacity=".18" />
            </svg>
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-3">
            <p className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-subtle">Pedidos recentes</p>
            <div className="mt-3 space-y-2">
              {["#1042", "#1041", "#1040"].map((pedido, indice) => (
                <div key={pedido} className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[0.54rem] text-muted">
                  <span>{pedido}</span><span className={indice === 1 ? "text-primary" : "text-subtle"}>{indice === 1 ? "análise" : "ok"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupAngular() {
  return (
    <div className="flex min-h-56 flex-1 flex-col bg-gradient-surface">
      <BarraProduto nome="corporate / requests" indicador="Portal" />
      <div className="flex flex-1">
        <NavegacaoProduto itens={["Solicitações", "Aprovações", "Pendências", "Acesso"]} />
        <div className="min-w-0 flex-1 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[0.54rem] uppercase tracking-[0.14em] text-primary">Solicitações</p>
              <p className="mt-1 text-xs font-medium text-foreground">Fluxo de aprovação</p>
            </div>
            <span className="border border-white/15 px-2 py-1 font-mono text-[0.5rem] text-subtle">Filtros</span>
          </div>
          <div className="mt-4 overflow-hidden border border-white/10 bg-white/[0.04]">
            <div className="grid grid-cols-[1fr_0.7fr_0.6fr] border-b border-white/10 px-3 py-2 font-mono text-[0.5rem] uppercase text-subtle">
              <span>Solicitação</span><span>Fluxo</span><span>Status</span>
            </div>
            {["Acesso ao sistema", "Novo fornecedor", "Revisão de perfil"].map((item, indice) => (
              <div key={item} className="grid grid-cols-[1fr_0.7fr_0.6fr] items-center border-b border-white/10 px-3 py-2 last:border-0">
                <span className="truncate text-[0.56rem] text-muted">{item}</span>
                <span className="text-[0.52rem] text-subtle">{indice === 1 ? "financeiro" : "corporativo"}</span>
                <span className={`text-[0.52rem] ${indice === 0 ? "text-primary" : "text-subtle"}`}>{indice === 0 ? "análise" : "pendente"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupMobile() {
  return (
    <div className="flex min-h-56 flex-1 flex-col bg-gradient-surface">
      <BarraProduto nome="mobile / account" indicador="React Native" />
      <div className="flex flex-1 items-center justify-center gap-4 p-4 sm:gap-6">
        {["Home", "Detalhes"].map((tela, indice) => (
          <div key={tela} className="aspect-[0.62] w-[24%] max-w-24 rounded-[0.9rem] border border-white/20 bg-background-secondary p-1.5 shadow-sm">
            <div className="flex h-full flex-col rounded-[0.65rem] border border-white/10 p-2">
              <div className="flex items-center justify-between">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="h-1 w-5 rounded bg-white/20" />
              </div>
              <span className="mt-4 block h-2 w-2/3 rounded bg-white/35" />
              <span className="mt-2 block h-8 rounded bg-white/[0.08]" />
              <span className="mt-3 block h-2 w-4/5 rounded bg-white/20" />
              <span className={`mt-2 block h-2 rounded ${indice === 0 ? "bg-primary/55" : "bg-white/20"}`} />
              <div className="mt-auto flex justify-between border-t border-white/10 pt-2">
                {["home", "perfil", "mais"].map((item, itemIndice) => <span key={item} className={`size-1.5 rounded-full ${itemIndice === indice ? "bg-primary" : "bg-white/25"}`} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupObservabilidade() {
  return (
    <div className="flex min-h-56 flex-1 flex-col bg-gradient-surface">
      <BarraProduto nome="observability / signals" indicador="Live signals" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="grid grid-cols-4 gap-2">
          <MetricTile label="CPU" value="42%" detail="normal" />
          <MetricTile label="Memory" value="68%" detail="stable" />
          <MetricTile label="Latency" value="124ms" detail="p95" />
          <MetricTile label="Errors" value="0.8%" detail="last hour" />
        </div>
        <div className="grid min-h-20 flex-1 grid-cols-[1.4fr_0.8fr] gap-3">
          <div className="border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-subtle">Traces</p>
              <span className="font-mono text-[0.5rem] text-primary">healthy</span>
            </div>
            <svg viewBox="0 0 260 70" className="mt-3 h-auto w-full" aria-hidden="true">
              <path d="M0 48 22 44 42 48 66 30 91 38 116 22 138 34 164 20 189 30 214 14 238 25 260 17" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <path d="M0 58h260" stroke="currentColor" strokeOpacity=".18" />
            </svg>
          </div>
          <div className="space-y-2 border border-white/10 bg-white/[0.04] p-3">
            <p className="font-mono text-[0.54rem] uppercase tracking-[0.12em] text-subtle">Signals</p>
            {[["Logs", "indexed"], ["Metrics", "streaming"], ["Alerts", "2 open"]].map(([nome, status], indice) => (
              <div key={nome} className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[0.54rem]">
                <span className="text-muted">{nome}</span><span className={indice === 2 ? "text-primary" : "text-subtle"}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectMockupV3({ variante }: PropriedadesProjectMockupV3) {
  const conteudo = {
    ia: <MockupIA />,
    microsservicos: <MockupMicrosservicos />,
    react: <MockupReact />,
    angular: <MockupAngular />,
    mobile: <MockupMobile />,
    observabilidade: <MockupObservabilidade />,
  }[variante];

  return <div aria-hidden="true">{conteudo}</div>;
}
