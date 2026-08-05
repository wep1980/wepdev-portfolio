const camadasArquitetura = [
  "APIs",
  "Microsserviços",
  "Mensageria",
  "Cloud",
];

const tecnologiasPainel = ["Java 21", "Spring Boot", "Quarkus", "Kafka"];

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
      aria-label="Composição técnica da marca WEPDEV"
      className="relative mx-auto w-full max-w-[34rem] rounded-xl border border-primary/20 bg-[var(--gradient-surface)] p-1 shadow-lg lg:mx-0"
    >
      <div
        aria-hidden="true"
        className="absolute -left-8 top-10 -z-10 h-36 w-36 rounded-full bg-primary/14 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 bottom-8 -z-10 h-40 w-40 rounded-full bg-accent/14 blur-3xl"
      />

      <div className="overflow-hidden rounded-lg border border-border bg-background-secondary/96">
        <div className="relative overflow-hidden border-b border-border bg-surface-elevated/70 px-5 py-5">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/3 w-1/3 bg-primary/8"
          />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-subtle">
                WEPDEV
              </p>
              <p className="mt-2 max-w-56 text-lg font-semibold leading-6 text-foreground">
                Backend Enterprise, Microsserviços e IA aplicada.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="flex size-20 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 font-mono text-3xl font-bold text-primary shadow-glow-subtle"
            >
              W
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-border/70 p-px sm:grid-cols-2">
          {camadasArquitetura.map((camada, indice) => (
            <div
              key={camada}
              className="relative overflow-hidden bg-surface/78 px-4 py-4"
            >
              <span className="font-mono text-[0.68rem] font-semibold text-subtle">
                0{indice + 1}
              </span>
              <p className="mt-2 font-mono text-sm font-semibold text-foreground">
                {camada}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-4 top-1/2 h-px w-10 bg-primary/30"
              />
            </div>
          ))}
        </div>

        <div className="grid border-b border-border bg-background/82 text-[0.68rem] md:grid-cols-[8rem_1fr]">
          <div className="hidden border-r border-border bg-surface/45 p-4 font-mono leading-6 text-subtle md:block">
            <p className="text-foreground">portfolio</p>
            <p className="pl-3">backend</p>
            <p className="pl-5 text-primary">services</p>
            <p className="pl-7">ai</p>
            <p className="truncate pl-7 text-foreground">architecture</p>
          </div>

          <div className="p-4 font-mono leading-6 text-muted">
            <code className="block">
              {linhasCodigo.map((linha) => (
                <span
                  key={linha.numero}
                  className="block whitespace-pre-wrap break-words"
                >
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

        <div className="grid gap-px border-t border-border bg-border/70 p-px sm:grid-cols-[1fr_auto]">
          <p className="bg-background-secondary/80 px-4 py-3 font-mono text-[0.7rem] text-subtle">
            IA aplicada: OpenAI e Ollama no fluxo de engenharia.
          </p>
          <p className="bg-background-secondary/80 px-4 py-3 font-mono text-[0.7rem] font-semibold text-accent-gold">
            Cloud Native
          </p>
        </div>
      </div>
    </aside>
  );
}
