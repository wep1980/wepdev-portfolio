type PropriedadesSectionHeader = {
  label: string;
  titulo: string;
  descricao?: string;
  headingId?: string;
};

export function SectionHeader({
  label,
  titulo,
  descricao,
  headingId,
}: PropriedadesSectionHeader) {
  return (
    <header>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:tracking-[0.16em]">
        {label}
      </p>
      <h2 id={headingId} className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {titulo}
      </h2>
      {descricao ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          {descricao}
        </p>
      ) : null}
    </header>
  );
}
