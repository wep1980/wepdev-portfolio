import type { CanalProfissional } from "@/dominio/contato/CanalProfissional";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
  canaisAnalytics,
  locaisAnalytics,
} from "@/constantes/analytics";

type PropriedadesCanalProfissionalCard = {
  canal: CanalProfissional;
};

const rotulosTipo: Record<CanalProfissional["tipo"], string> = {
  linkedin: "Canal principal",
  github: "Código público",
  email: "Contato direto",
  curriculo: "PDF público",
};

function obterAtributosLink(canal: CanalProfissional) {
  const atributosAnalytics =
    canal.tipo === "curriculo"
      ? atributosCurriculoAnalytics(locaisAnalytics.contato)
      : atributosCanalProfissionalAnalytics(
          canaisAnalytics[canal.tipo],
          locaisAnalytics.contato,
        );

  return {
    ...(canal.externo
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {}),
    ...(canal.download ? { download: canal.download } : {}),
    ...atributosAnalytics,
  };
}

export function CanalProfissionalCard({
  canal,
}: PropriedadesCanalProfissionalCard) {
  const classes = [
    "group flex min-h-32 flex-col justify-between rounded-lg border p-5 outline-none transition duration-200 focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgb(56_189_248_/_20%)] hover:-translate-y-0.5 sm:p-6",
    canal.principal
      ? "border-primary/55 bg-primary/12 shadow-[0_18px_60px_rgb(56_189_248_/_12%)]"
      : "border-border bg-surface/72 shadow-[0_16px_52px_rgb(0_0_0_/_16%)]",
  ].join(" ");

  return (
    <article className={classes}>
      <div>
        <p className="font-mono text-[0.68rem] font-semibold uppercase text-subtle">
          {rotulosTipo[canal.tipo]}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          <a
            href={canal.href}
            {...obterAtributosLink(canal)}
            className="rounded-sm outline-none transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {canal.nome}
          </a>
        </h3>
        <p className="mt-3 break-words text-sm leading-6 text-muted">
          {canal.descricao}
        </p>
      </div>

      {canal.tipo === "curriculo" ? (
        <p className="mt-5 font-mono text-xs text-subtle">
          Arquivo PDF em nova aba
        </p>
      ) : null}
    </article>
  );
}
