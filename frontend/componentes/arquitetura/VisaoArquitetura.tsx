const fluxoPrincipal = [
  "Cliente",
  "API Gateway",
  "Serviços Java",
  "Mensageria",
  "Banco de Dados",
  "Observabilidade",
  "Inteligência Artificial",
];

export function VisaoArquitetura() {
  return (
    <div className="rounded-lg border border-border bg-surface/70 p-5 shadow-[0_18px_60px_rgb(0_0_0_/_18%)] sm:p-7">
      <p className="font-mono text-xs font-medium text-subtle">
        Visão conceitual, ajustável ao contexto de cada produto.
      </p>

      <ol
        aria-label="Fluxo conceitual de arquitetura"
        className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]"
      >
        {fluxoPrincipal.map((item, indice) => (
          <li
            key={item}
            className="contents"
            aria-label={
              indice < fluxoPrincipal.length - 1
                ? `${item}, seguido por ${fluxoPrincipal[indice + 1]}`
                : item
            }
          >
            <div className="rounded-md border border-primary/18 bg-background-secondary/78 px-4 py-4 text-center">
              <span className="font-mono text-sm font-semibold text-foreground">
                {item}
              </span>
            </div>

            {indice < fluxoPrincipal.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-primary md:px-1"
              >
                <span className="h-8 w-px bg-primary/35 md:h-px md:w-full md:min-w-5" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
