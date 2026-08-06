const focosTecnicos = [
  "Backend Enterprise",
  "Frontend Moderno · React · Angular",
  "Arquitetura de Software",
  "Microsserviços e integrações",
  "Cloud, DevOps e IA",
] as const;

export function PainelFocoTecnicoV3() {
  return (
    <aside
      aria-label="Foco técnico"
      className="relative isolate overflow-hidden rounded-lg border border-border bg-surface/60 p-6 sm:p-8"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 420 520"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-primary/20"
        fill="none"
      >
        <path d="M40 430C120 330 130 170 260 80S390 32 410 20" stroke="currentColor" />
        <path d="M-20 480C100 400 190 420 250 300s70-220 190-260" stroke="currentColor" strokeOpacity=".45" />
        <circle cx="285" cy="116" r="72" stroke="currentColor" strokeDasharray="3 10" />
        <circle cx="285" cy="116" r="5" fill="currentColor" stroke="none" />
      </svg>

      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:tracking-[0.16em]">
        Foco técnico
      </p>
      <div className="mt-8 divide-y divide-border/80">
        {focosTecnicos.map((foco, indice) => (
          <div key={foco} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-5 first:pt-0 last:pb-0">
            <span className="font-mono text-xs font-semibold text-primary">
              0{indice + 1}
            </span>
            <p className="text-base font-semibold leading-6 text-foreground">
              {foco}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
