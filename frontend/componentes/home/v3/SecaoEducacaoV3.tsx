import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { CartaoEscuro } from "@/componentes/ui/CartaoEscuro";
import { formacaoAcademica } from "@/constantes/educacao";

export function SecaoEducacaoV3() {
  return (
    <section id="educacao" aria-labelledby="titulo-educacao-v3" className="scroll-mt-28">
      <SectionHeader label="Educação" titulo="Formação acadêmica" headingId="titulo-educacao-v3" />
      <ul className="mt-7 flex flex-col gap-4">
        {formacaoAcademica.map((formacao) => {
          const logo = formacao.logoSrc ? (
            <span
              style={
                formacao.logoCorFundo ? { backgroundColor: formacao.logoCorFundo } : undefined
              }
              className={[
                "relative mt-0.5 block size-11 shrink-0 overflow-hidden rounded-full",
                formacao.logoCorFundo ? "" : "bg-white",
                formacao.url ? "transition duration-200 hover:-translate-y-0.5" : "",
              ].join(" ")}
            >
              <Image
                src={formacao.logoSrc}
                alt=""
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </span>
          ) : (
            <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-card-dark-tag text-[#ffb877]">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
          );

          return (
          <li key={formacao.id}>
            <CartaoEscuro className="flex items-start gap-4">
              {formacao.logoSrc && formacao.url ? (
                <a
                  href={formacao.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Site de ${formacao.instituicao}`}
                  className="shrink-0 rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {logo}
                </a>
              ) : (
                logo
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <p className="text-base font-bold text-card-dark-foreground">
                    {formacao.instituicao}
                  </p>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-card-dark-muted">
                    {formacao.periodo}
                  </p>
                </div>
                <p className="mt-1 text-sm text-card-dark-foreground/90">{formacao.curso}</p>
                {formacao.situacao ? (
                  <p className="mt-1 text-xs text-card-dark-muted">{formacao.situacao}</p>
                ) : null}
              </div>
            </CartaoEscuro>
          </li>
          );
        })}
      </ul>
    </section>
  );
}
