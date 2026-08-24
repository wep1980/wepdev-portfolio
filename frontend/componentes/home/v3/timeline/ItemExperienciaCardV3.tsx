import Image from "next/image";
import { Link2 } from "lucide-react";
import type { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { CartaoEscuro, TagEscura } from "@/componentes/ui/CartaoEscuro";
import type { ExperienciaProfissional } from "@/dominio/experiencia/ExperienciaProfissional";

type PropriedadesItemExperienciaCardV3 = {
  experiencia: ExperienciaProfissional;
};

const TAMANHO_LOGO_PRINCIPAL = "size-11";
const TAMANHO_LOGO_CLIENTE = "size-9";

function LinkExternoCard({
  href,
  rotulo,
  children,
}: {
  href: string;
  rotulo: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotulo}
      title={rotulo}
      className="inline-flex size-7 shrink-0 items-center justify-center rounded-full text-card-dark-muted outline-none transition duration-200 hover:bg-card-dark-tag hover:text-card-dark-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
    </a>
  );
}

export function ItemExperienciaCardV3({ experiencia }: PropriedadesItemExperienciaCardV3) {
  return (
    <CartaoEscuro>
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div className="flex min-w-0 items-center gap-3">
          {experiencia.logoSrc ? (
            <span
              style={
                experiencia.logoCorFundo ? { backgroundColor: experiencia.logoCorFundo } : undefined
              }
              className={[
                "relative",
                TAMANHO_LOGO_PRINCIPAL,
                "shrink-0 overflow-hidden rounded-full",
                experiencia.logoCorFundo ? "" : "bg-white",
                experiencia.logoBordaClara ? "ring-1 ring-white/70" : "",
              ].join(" ")}
            >
              <Image
                src={experiencia.logoSrc}
                alt=""
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </span>
          ) : null}
          <h3 className="text-lg font-bold leading-tight text-card-dark-foreground sm:text-xl">
            {experiencia.empresa}
          </h3>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <p className="mr-1 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-card-dark-muted">
            {experiencia.periodo}
          </p>
          {experiencia.siteUrl ? (
            <LinkExternoCard href={experiencia.siteUrl} rotulo={`Site de ${experiencia.empresa}`}>
              <Link2 className="size-3.5" aria-hidden="true" />
            </LinkExternoCard>
          ) : null}
          {experiencia.linkedinUrl ? (
            <LinkExternoCard href={experiencia.linkedinUrl} rotulo={`LinkedIn de ${experiencia.empresa}`}>
              <FaLinkedin className="size-3.5" aria-hidden="true" />
            </LinkExternoCard>
          ) : null}
        </div>
      </div>

      <p className="mt-1 text-sm font-semibold text-card-dark-foreground/90">
        {experiencia.cargo}
      </p>
      {experiencia.cliente ? (
        <p className="mt-0.5 text-xs text-card-dark-muted">Cliente: {experiencia.cliente}</p>
      ) : null}
      {experiencia.clientes && experiencia.clientes.length > 0 ? (
        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-card-dark-muted">
            Clientes atendidos
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {experiencia.clientes.map((cliente) => {
              if (!cliente.logoSrc) {
                return (
                  <li
                    key={cliente.nome}
                    className="text-[0.68rem] font-medium text-card-dark-muted"
                  >
                    {cliente.nome}
                  </li>
                );
              }

              const logo = (
                <span
                  title={cliente.nome}
                  style={cliente.corFundo ? { backgroundColor: cliente.corFundo } : undefined}
                  className={[
                    "relative block",
                    TAMANHO_LOGO_CLIENTE,
                    "shrink-0 overflow-hidden rounded-full",
                    cliente.bordaClara ? "ring-1 ring-white/70" : "",
                  ].join(" ")}
                >
                  <Image
                    src={cliente.logoSrc}
                    alt={cliente.nome}
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </span>
              );

              return (
                <li key={cliente.nome}>
                  {cliente.url ? (
                    <a
                      href={cliente.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Site de ${cliente.nome}`}
                      className="block rounded-md outline-none transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <p className="mt-3 max-w-2xl text-sm leading-6 text-card-dark-muted">
        {experiencia.resumo}
      </p>

      <details className="group mt-4">
        <summary className="inline-flex min-h-9 cursor-pointer list-none items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-[#ffb877] outline-none hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <span aria-hidden="true" className="transition-transform duration-200 group-open:rotate-45">
            +
          </span>
          Ver detalhes da atuação
        </summary>

        <div className="mt-4 grid gap-6 border-t border-card-dark-border pt-4 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#ffb877]">
              Principais atividades
            </p>
            <ul className="mt-2.5 space-y-2 text-sm leading-6 text-card-dark-foreground/85">
              {experiencia.atividades.map((atividade) => (
                <li key={atividade}>{atividade}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#ffb877]">
              Competências
            </p>
            <ul className="mt-2.5 space-y-2 text-sm leading-6 text-card-dark-foreground/85">
              {experiencia.competencias.map((competencia) => (
                <li key={competencia}>{competencia}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      <p className="mt-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-card-dark-muted">
        Skills
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2" aria-label="Tecnologias principais">
        {experiencia.tecnologias.slice(0, 6).map((tecnologia) => (
          <TagEscura key={tecnologia}>{tecnologia}</TagEscura>
        ))}
      </div>
    </CartaoEscuro>
  );
}
