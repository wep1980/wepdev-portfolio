"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import type { ImagemProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectGalleryV3 = {
  projeto: string;
  imagens: readonly ImagemProjetoV3[];
};

export function ProjectGalleryV3({
  projeto,
  imagens,
}: PropriedadesProjectGalleryV3) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const quantidade = imagens.length;
  const imagemAtual = imagens[indiceAtual];

  function avancar() {
    setIndiceAtual((indice) => (indice + 1) % quantidade);
  }

  function voltar() {
    setIndiceAtual((indice) => (indice - 1 + quantidade) % quantidade);
  }

  function selecionar(indice: number) {
    setIndiceAtual(indice);
  }

  function lidarComTeclado(evento: KeyboardEvent<HTMLDivElement>) {
    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      avancar();
    }

    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      voltar();
    }
  }

  if (!imagemAtual || quantidade === 0) {
    return null;
  }

  return (
    <div
      role="group"
      className="min-w-0 bg-background-secondary"
      onKeyDown={lidarComTeclado}
      tabIndex={0}
      aria-label={`Galeria conceitual do projeto ${projeto}`}
    >
      <button
        type="button"
        className="group relative block aspect-[5/3] w-full cursor-pointer overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        onClick={avancar}
        aria-label={`Avançar para a próxima imagem do projeto ${projeto}`}
      >
        <Image
          key={imagemAtual.src}
          src={imagemAtual.src}
          alt={imagemAtual.alt}
          width={1200}
          height={720}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-full w-full object-cover transition-opacity duration-200 motion-reduce:transition-none"
        />
        <span className="pointer-events-none absolute bottom-3 left-3 border border-white/20 bg-black/60 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/80">
          Interface conceitual
        </span>
      </button>

      <div className="flex items-center justify-between gap-3 border-t border-border/80 px-4 py-3">
        <button
          type="button"
          onClick={voltar}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-lg text-muted outline-none transition duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`Imagem anterior do projeto ${projeto}`}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div
          className="flex items-center gap-2"
          role="group"
          aria-label={`Imagem ${indiceAtual + 1} de ${quantidade}`}
        >
          {imagens.map((imagem, indice) => (
            <button
              key={imagem.src}
              type="button"
              onClick={() => selecionar(indice)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Mostrar imagem ${indice + 1} de ${quantidade} do projeto ${projeto}`}
              aria-current={indice === indiceAtual ? "true" : undefined}
            >
              <span
                aria-hidden="true"
                className={[
                  "block size-2 rounded-full border border-primary transition-colors duration-200 motion-reduce:transition-none",
                  indice === indiceAtual ? "bg-primary" : "bg-transparent",
                ].join(" ")}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={avancar}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-lg text-muted outline-none transition duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`Próxima imagem do projeto ${projeto}`}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
