import { EstadoProjetoBadge } from "@/componentes/projetos/EstadoProjetoBadge";
import { ListaTecnologiasProjeto } from "@/componentes/projetos/ListaTecnologiasProjeto";
import { Botao } from "@/componentes/ui/Botao";
import type { Projeto } from "@/dominio/projeto/Projeto";
import { rotulosTipoProjeto } from "@/dominio/projeto/TipoProjeto";

type PropriedadesCardProjeto = {
  projeto: Projeto;
  prioritario?: boolean;
};

function IconeLinkExterno() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M6.5 4.5h5v5" />
      <path d="m11.5 4.5-7 7" />
      <path d="M7 2.8H3.8a1 1 0 0 0-1 1v8.4a1 1 0 0 0 1 1h8.4a1 1 0 0 0 1-1V9" />
    </svg>
  );
}

function ListaConceitosProjeto({ projeto }: PropriedadesCardProjeto) {
  const rotulo = projeto.conceitosPlanejados
    ? "Conceitos planejados"
    : "Conceitos aplicados";

  return (
    <details className="group rounded-md border border-border/80 bg-background-secondary/55">
      <summary className="cursor-pointer list-none px-4 py-3 font-mono text-xs font-semibold text-foreground outline-none transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="text-primary">
            +
          </span>
          {rotulo}
        </span>
      </summary>

      <ul className="grid gap-2 border-t border-border/70 px-4 pb-4 pt-3 text-sm leading-6 text-muted sm:grid-cols-2">
        {projeto.conceitos.map((conceito) => (
          <li key={conceito}>{conceito}</li>
        ))}
      </ul>
    </details>
  );
}

export function CardProjeto({
  projeto,
  prioritario = false,
}: PropriedadesCardProjeto) {
  const artigoClasses = [
    "relative flex h-full flex-col overflow-hidden rounded-lg border p-5 shadow-[0_18px_60px_rgb(0_0_0_/_18%)] sm:p-6",
    prioritario
      ? "border-primary/24 bg-surface/76 lg:p-8"
      : "border-border bg-surface/68",
  ].join(" ");

  return (
    <article className={artigoClasses}>
      {prioritario ? (
        <div className="absolute right-6 top-6 -z-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {projeto.categoria}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
            {projeto.nome}
          </h3>
          <p className="mt-2 font-mono text-xs font-medium text-subtle">
            {rotulosTipoProjeto[projeto.tipo]}
          </p>
        </div>

        <EstadoProjetoBadge estado={projeto.estado} />
      </div>

      <p className="mt-5 text-base leading-7 text-muted">
        {projeto.descricao}
      </p>

      <div className="mt-6 grid gap-4 text-sm leading-6 text-muted lg:grid-cols-2">
        {projeto.problema ? (
          <div className="rounded-md border border-border/80 bg-background-secondary/55 p-4">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle">
              Problema
            </p>
            <p className="mt-3">{projeto.problema}</p>
          </div>
        ) : null}

        {projeto.solucao ? (
          <div className="rounded-md border border-border/80 bg-background-secondary/55 p-4">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle">
              Solução
            </p>
            <p className="mt-3">{projeto.solucao}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-6">
        <ListaTecnologiasProjeto
          tecnologias={projeto.tecnologias}
          rotulo={
            projeto.tecnologiasPlanejadas
              ? "Tecnologias planejadas"
              : "Tecnologias principais"
          }
        />
      </div>

      <div className="mt-6">
        <ListaConceitosProjeto projeto={projeto} />
      </div>

      <div className="mt-auto pt-6">
        {projeto.repositorioUrl ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Botao
              href={projeto.repositorioUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event={
                projeto.id === "wepdev-portfolio"
                  ? "Projeto - WEPDEV Portfolio"
                  : undefined
              }
              variante="secundario"
              aria-label={`Abrir repositório do projeto ${projeto.nome} no GitHub`}
            >
              <IconeLinkExterno />
              {projeto.chamadaPrincipal}
            </Botao>
            {projeto.chamadaSecundaria ? (
              <p className="font-mono text-xs text-subtle">
                {projeto.chamadaSecundaria}
              </p>
            ) : null}
          </div>
        ) : (
          <p className="rounded-md border border-border/80 bg-background-secondary/55 px-4 py-3 font-mono text-xs font-semibold text-muted">
            {projeto.chamadaPrincipal}
            {projeto.chamadaSecundaria ? (
              <span className="mt-1 block font-normal text-subtle">
                {projeto.chamadaSecundaria}
              </span>
            ) : null}
          </p>
        )}
      </div>
    </article>
  );
}
