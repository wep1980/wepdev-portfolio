import type { CanalProfissional } from "@/dominio/contato/CanalProfissional";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
  locaisAnalytics,
} from "@/constantes/analytics";

type PropriedadesCanalProfissionalCard = {
  canal: CanalProfissional;
};

const rotulosTipo: Record<CanalProfissional["tipo"], string> = {
  linkedin: "Canal principal",
  github: "Código público",
  email: "Contato direto",
  whatsapp: "Conversa direta",
  curriculo: "PDF público",
};

function obterAtributosLink(canal: CanalProfissional) {
  const atributosAnalytics =
    canal.tipo === "curriculo"
      ? atributosCurriculoAnalytics(locaisAnalytics.contato)
      : atributosCanalProfissionalAnalytics(
          canal.tipo,
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

function obterNomeAcessivel(canal: CanalProfissional) {
  if (canal.tipo === "whatsapp") {
    return "Iniciar conversa com Waldir pelo WhatsApp";
  }

  return undefined;
}

export function CanalProfissionalCard({
  canal,
}: PropriedadesCanalProfissionalCard) {
  const textoLink = canal.acao ?? canal.nome;

  const classes = [
    "group flex min-h-32 flex-col justify-between rounded-lg border p-5 outline-none transition duration-200 focus-within:border-primary focus-within:shadow-glow-subtle hover:-translate-y-0.5 sm:p-6",
    canal.principal
      ? "border-primary/55 bg-primary/12 shadow-glow-subtle"
      : "border-border bg-surface/72 shadow-[0_16px_52px_rgb(0_0_0_/_16%)]",
  ].join(" ");

  return (
    <article className={classes}>
      <div>
        <p className="font-mono text-[0.68rem] font-semibold uppercase text-subtle">
          {rotulosTipo[canal.tipo]}
        </p>
        {canal.acao ? (
          <h3 className="mt-3 text-xl font-semibold text-foreground">
            {canal.nome}
          </h3>
        ) : (
          <h3 className="mt-3 text-xl font-semibold text-foreground">
            <a
              href={canal.href}
              {...obterAtributosLink(canal)}
              className="rounded-sm outline-none transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {canal.nome}
            </a>
          </h3>
        )}
        <p className="mt-3 break-words text-sm leading-6 text-muted">
          {canal.descricao}
        </p>
        {canal.acao ? (
          <p className="mt-5">
            <a
              href={canal.href}
              {...obterAtributosLink(canal)}
              aria-label={obterNomeAcessivel(canal)}
              className="rounded-sm outline-none transition hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {textoLink}
            </a>
          </p>
        ) : null}
      </div>

      {canal.tipo === "curriculo" ? (
        <p className="mt-5 font-mono text-xs text-subtle">
          Arquivo PDF em nova aba
        </p>
      ) : null}
    </article>
  );
}
