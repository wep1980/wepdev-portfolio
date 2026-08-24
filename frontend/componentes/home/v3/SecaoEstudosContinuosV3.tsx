import Image from "next/image";
import { BookOpen } from "lucide-react";
import { CartaoEscuro } from "@/componentes/ui/CartaoEscuro";
import { estudosContinuos } from "@/constantes/estudosContinuos";

export function SecaoEstudosContinuosV3() {
  return (
    <section id="estudos" aria-labelledby="titulo-estudos-v3" className="scroll-mt-28">
      <div className="flex items-start gap-4">
        <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
          <BookOpen className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:tracking-[0.16em]">
            Estudos Contínuos
          </p>
          <h2
            id="titulo-estudos-v3"
            className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          >
            Aprendizado além da formação acadêmica e pós-graduação
          </h2>
        </div>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {estudosContinuos.map((estudo) => {
          const logo = estudo.logoSrc ? (
            <span
              style={estudo.logoCorFundo ? { backgroundColor: estudo.logoCorFundo } : undefined}
              className={[
                "relative block size-9 shrink-0 overflow-hidden rounded-full",
                estudo.logoCorFundo ? "" : "bg-white",
                estudo.url ? "transition duration-200 hover:-translate-y-0.5" : "",
              ].join(" ")}
            >
              <Image src={estudo.logoSrc} alt="" fill sizes="36px" className="object-contain p-1" />
            </span>
          ) : null;

          return (
            <li key={estudo.id}>
              <CartaoEscuro className="flex h-full flex-col justify-between">
                <div className="flex items-start gap-3">
                  {logo ? (
                    estudo.url ? (
                      <a
                        href={estudo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Site de ${estudo.instituicao}`}
                        className="shrink-0 rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )
                  ) : null}
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-card-dark-foreground">{estudo.titulo}</p>
                    <p className="mt-1 text-xs text-card-dark-muted">{estudo.instituicao}</p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs font-semibold text-[#ffb877]">{estudo.ano}</p>
              </CartaoEscuro>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
