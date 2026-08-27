"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { atributosHobbyAnalytics } from "@/constantes/analytics";
import { categoriasHobbies, type CategoriaHobby } from "@/constantes/hobbies";

export function SecaoHobbiesV3() {
  const [categoriaId, setCategoriaId] = useState(categoriasHobbies[0]!.id);
  const categoria = categoriasHobbies.find((item) => item.id === categoriaId) ?? categoriasHobbies[0]!;

  return (
    <section id="hobbies" aria-labelledby="titulo-hobbies-v3" className="scroll-mt-28">
      <SectionHeader
        label="Hobbies"
        titulo="Fora do teclado"
        descricao="Um pouco do que me move quando o notebook está fechado."
        headingId="titulo-hobbies-v3"
      />

      <div className="mt-8 grid grid-cols-3 gap-3">
        {categoriasHobbies.map((item) => {
          const ativa = item.id === categoriaId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategoriaId(item.id)}
              aria-pressed={ativa}
              {...atributosHobbyAnalytics(item.titulo)}
              className={[
                "group flex flex-col items-center gap-2 rounded-2xl p-2 text-center outline-none transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                ativa
                  ? "z-10 scale-[1.04] shadow-lg shadow-black/10 ring-2 ring-primary"
                  : "hover:-translate-y-0.5 hover:scale-[1.02]",
              ].join(" ")}
            >
              <span className="relative block aspect-square w-full overflow-hidden rounded-xl bg-card-dark">
                <Image
                  src={item.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 25vw, 45vw"
                  className={[
                    "object-cover transition-transform duration-500",
                    ativa ? "scale-105" : "group-hover:scale-105",
                  ].join(" ")}
                />
              </span>
              <span className="flex flex-col items-center gap-1">
                <span
                  className={[
                    "text-xs font-bold sm:text-sm",
                    ativa ? "text-foreground" : "text-muted",
                  ].join(" ")}
                >
                  {item.titulo}
                </span>
                <span
                  aria-hidden="true"
                  className={[
                    "h-0.5 rounded-full transition-all duration-300",
                    ativa ? "w-6 bg-primary" : "w-4 bg-foreground/20 group-hover:bg-foreground/40",
                  ].join(" ")}
                />
              </span>
            </button>
          );
        })}
      </div>

      <CarrosselHobbyV3 key={categoria.id} categoria={categoria} />
    </section>
  );
}

function CarrosselHobbyV3({ categoria }: { categoria: CategoriaHobby }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });
  const [indice, setIndice] = useState(0);
  const quantidade = categoria.fotos.length;
  const fotoAtual = categoria.fotos[indice] ?? categoria.fotos[0]!;

  const sincronizarIndice = useCallback(() => {
    if (emblaApi) {
      setIndice(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.on("select", sincronizarIndice);
    emblaApi.on("reInit", sincronizarIndice);

    return () => {
      emblaApi.off("select", sincronizarIndice);
      emblaApi.off("reInit", sincronizarIndice);
    };
  }, [emblaApi, sincronizarIndice]);

  return (
    <div className="mt-8 min-w-0">
      <div className="relative md:mx-auto md:max-w-[42rem]">
        <div className="hobby-carousel-mask -mx-4 overflow-hidden md:mx-0" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {categoria.fotos.map((foto) => (
              <figure key={foto.src} className="shrink-0 grow-0 basis-auto pl-4 first:pl-4 md:pl-6 md:first:pl-6">
                <div
                  className="relative h-[22rem] w-auto overflow-hidden rounded-2xl bg-card-dark sm:h-[28rem] md:h-[32rem]"
                  style={{ aspectRatio: `${foto.w} / ${foto.h}` }}
                >
                  <Image
                    src={foto.src}
                    alt={foto.legenda}
                    fill
                    sizes="(min-width: 768px) 42rem, 88vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        {quantidade > 1 ? (
          <>
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-1 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white outline-none transition duration-200 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Foto anterior de ${categoria.titulo}`}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-1 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white outline-none transition duration-200 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Próxima foto de ${categoria.titulo}`}
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm italic text-subtle">{fotoAtual.legenda}</p>

        {quantidade > 1 ? (
          <div className="mt-2 flex items-center justify-center gap-2.5">
            <div className="flex items-center gap-1.5" role="group" aria-label={`Foto ${indice + 1} de ${quantidade}`}>
              {categoria.fotos.map((foto, posicao) => (
                <button
                  key={foto.src}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(posicao)}
                  className="inline-flex min-h-6 min-w-6 items-center justify-center outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Mostrar foto ${posicao + 1} de ${quantidade}`}
                  aria-current={posicao === indice ? "true" : undefined}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "block h-1.5 rounded-full transition-all duration-300",
                      posicao === indice ? "w-5 bg-primary" : "w-1.5 bg-foreground/20",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div>
            <span className="font-mono text-[0.65rem] text-subtle">
              {String(indice + 1).padStart(2, "0")}/{String(quantidade).padStart(2, "0")}
            </span>
          </div>
        ) : null}
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-muted">{categoria.descricao}</p>
    </div>
  );
}
