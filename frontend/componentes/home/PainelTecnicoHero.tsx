const tecnologiasPainel = [
  "Java 21",
  "Spring Boot",
  "Quarkus",
  "Kafka",
  "Docker",
  "Kubernetes",
];

const linhasCodigo = [
  {
    numero: "01",
    conteudo: (
      <>
        <span className="text-accent-light">@Service</span>
      </>
    ),
  },
  {
    numero: "02",
    conteudo: (
      <>
        <span className="text-accent-light">public class</span>{" "}
        <span className="text-primary">BackendEngineer</span> {"{"}
      </>
    ),
  },
  {
    numero: "03",
    conteudo: (
      <>
        {"  "}
        <span className="text-accent-light">private final</span>{" "}
        <span className="text-foreground">Stack</span> stack;
      </>
    ),
  },
  {
    numero: "04",
    conteudo: (
      <>
        {"  "}
        <span className="text-accent-light">private final</span>{" "}
        <span className="text-foreground">LaboratorioIA</span> ia;
      </>
    ),
  },
  {
    numero: "05",
    conteudo: (
      <>
        {"  "}
        <span className="text-accent-light">private final</span>{" "}
        <span className="text-foreground">Arquitetura</span> arquitetura;
      </>
    ),
  },
  {
    numero: "06",
    conteudo: (
      <>
        {"  "}
        <span className="text-subtle">{"// Java 21, Spring Boot, Quarkus"}</span>
      </>
    ),
  },
  {
    numero: "07",
    conteudo: (
      <>
        {"  "}
        <span className="text-subtle">{"// Kafka, Docker, Kubernetes"}</span>
      </>
    ),
  },
  {
    numero: "08",
    conteudo: (
      <>
        {"  "}
        <span className="text-subtle">{"// IA aplicada: OpenAI + Ollama"}</span>
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

          <p className="font-mono text-[0.7rem] text-subtle">
            PortfolioBackend.java
          </p>
        </div>

        <div className="grid border-b border-border bg-background/82 text-[0.68rem] sm:grid-cols-[7.5rem_1fr]">
          <div className="hidden border-r border-border bg-surface/45 p-3 font-mono leading-5 text-subtle sm:block">
            <p className="text-foreground">portfolio</p>
            <p className="pl-3">src</p>
            <p className="pl-5">main</p>
            <p className="pl-7 text-primary">java</p>
            <p className="truncate pl-8 text-foreground">
              PortfolioBackend.java
            </p>
          </div>

          <div className="p-4 font-mono leading-6 text-muted">
            <code className="block">
              {linhasCodigo.map((linha) => (
                <span key={linha.numero} className="block whitespace-pre-wrap break-words">
                  <span className="mr-3 select-none text-subtle">
                    {linha.numero}
                  </span>
                  {linha.conteudo}
                </span>
              ))}
            </code>
          </div>
        </div>

        <div className="grid gap-px bg-border/70 p-px sm:grid-cols-2">
          {tecnologiasPainel.map((tecnologia) => (
            <div
              key={tecnologia}
              className="flex items-center gap-2 bg-surface-elevated/90 px-4 py-3"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-3.5 shrink-0 text-primary"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
              <p className="font-mono text-xs font-semibold text-foreground">
                {tecnologia}
              </p>
            </div>
          ))}
        </div>

        <p className="border-t border-border bg-background-secondary/80 px-4 py-3 font-mono text-[0.7rem] text-subtle">
          Laboratório de IA: OpenAI e Ollama aplicados ao desenvolvimento.
        </p>
      </div>
    </aside>
  );
}
