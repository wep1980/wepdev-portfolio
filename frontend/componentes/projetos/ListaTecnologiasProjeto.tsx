type PropriedadesListaTecnologiasProjeto = {
  tecnologias: readonly string[];
  rotulo: string;
};

export function ListaTecnologiasProjeto({
  tecnologias,
  rotulo,
}: PropriedadesListaTecnologiasProjeto) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle">
        {rotulo}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2" aria-label={rotulo}>
        {tecnologias.map((tecnologia) => (
          <li
            key={tecnologia}
            className="rounded-full border border-border/80 bg-background-secondary/70 px-3 py-1.5 font-mono text-[0.7rem] font-medium text-muted shadow-[inset_0_1px_0_rgb(255_255_255_/_4%)]"
          >
            {tecnologia}
          </li>
        ))}
      </ul>
    </div>
  );
}
