const tecnologiasPainel = [
  "Java 21",
  "Spring Boot",
  "Quarkus",
  "Kafka",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "Ollama",
];

const linhasCodigo = [
  {
    numero: "01",
    conteudo: (
      <>
        <span className="text-subtle">
          {"// Java 21 + Spring Boot + Quarkus"}
        </span>
      </>
    ),
  },
  {
    numero: "02",
    conteudo: (
      <>
        <span className="text-accent-light">@Service</span>
      </>
    ),
  },
  {
    numero: "03",
    conteudo: (
      <>
        <span className="text-accent-light">class</span>{" "}
        <span className="text-primary">BackendEngineer</span> {"{"}
      </>
    ),
  },
  {
    numero: "04",
    conteudo: (
      <>
        {"  "}
        <span className="text-accent-light">void</span>{" "}
        construirPortfolio() {"{"}
      </>
    ),
  },
  {
    numero: "05",
    conteudo: (
      <>
        {"    "}
        usar(<span className="text-status">&quot;Kafka&quot;</span>,{" "}
        <span className="text-status">&quot;Docker&quot;</span>);
      </>
    ),
  },
  {
    numero: "06",
    conteudo: (
      <>
        {"    "}
        publicarEm(<span className="text-status">&quot;Kubernetes&quot;</span>);
      </>
    ),
  },
  {
    numero: "07",
    conteudo: (
      <>
        {"    "}
        integrarIA(
        <span className="text-status">&quot;OpenAI&quot;</span>,{" "}
        <span className="text-status">&quot;Ollama&quot;</span>);
      </>
    ),
  },
  {
    numero: "08",
    conteudo: (
      <>
        {"  "}
        {"}"}
      </>
    ),
  },
  {
    numero: "09",
    conteudo: <>{"}"}</>,
  },
];

export function PainelTecnicoHero() {
  return (
    <aside
      aria-label="Painel técnico do hero"
      className="relative rounded-lg border border-primary/20 bg-surface/92 p-1 shadow-[0_28px_90px_rgb(0_0_0_/_38%),0_0_70px_rgb(56_189_248_/_12%)]"
    >
      <div className="absolute -left-8 top-10 -z-10 h-36 w-36 rounded-full bg-primary/14 blur-3xl" />
      <div className="absolute -right-8 bottom-8 -z-10 h-40 w-40 rounded-full bg-accent/16 blur-3xl" />

      <div className="overflow-hidden rounded-md border border-white/6 bg-background-secondary/96">
        <div className="flex items-center justify-between border-b border-border bg-surface-elevated/70 px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-subtle" />
            <span className="size-2.5 rounded-full bg-accent-light" />
            <span className="size-2.5 rounded-full bg-primary" />
          </div>

          <p className="font-mono text-xs text-subtle">
            src/main/java/PortfolioBackend.java
          </p>
        </div>

        <div className="grid border-b border-border bg-background/82 text-[0.72rem] sm:grid-cols-[8.25rem_1fr]">
          <div className="hidden border-r border-border bg-surface/45 p-3 font-mono leading-6 text-subtle sm:block">
            <p className="text-foreground">portfolio</p>
            <p className="pl-3">src</p>
            <p className="pl-6">main</p>
            <p className="pl-9 text-primary">java</p>
            <p className="truncate pl-10 text-foreground">
              PortfolioBackend.java
            </p>
          </div>

          <pre className="overflow-hidden p-4 font-mono leading-6 text-muted">
            <code>
              {linhasCodigo.map((linha) => (
                <span key={linha.numero} className="block">
                  <span className="mr-4 select-none text-subtle">
                    {linha.numero}
                  </span>
                  {linha.conteudo}
                </span>
              ))}
            </code>
          </pre>
        </div>

        <div className="grid gap-px bg-border/70 p-px sm:grid-cols-2">
          {tecnologiasPainel.map((tecnologia) => (
            <div
              key={tecnologia}
              className="bg-surface-elevated/90 px-4 py-3"
            >
              <p className="font-mono text-xs font-semibold text-foreground">
                {tecnologia}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
