"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { ImagemProjetoV3 } from "@/constantes/projetosV3";

type PropriedadesProjectGalleryV3 = {
  projeto: string;
  imagens: readonly ImagemProjetoV3[];
  ampla?: boolean;
  mostrarAmpliar?: boolean;
};

export function ProjectGalleryV3({
  projeto,
  imagens,
  ampla = false,
  mostrarAmpliar = true,
}: PropriedadesProjectGalleryV3) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const botaoAmpliarRef = useRef<HTMLButtonElement>(null);
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

  function abrirLightbox() {
    setLightboxAberto(true);
  }

  function fecharLightbox() {
    setLightboxAberto(false);
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

  function lidarComTecladoDoLightbox(evento: KeyboardEvent<HTMLDialogElement>) {
    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      evento.stopPropagation();
      avancar();
    }

    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      evento.stopPropagation();
      voltar();
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (lightboxAberto) {
      if (!dialog.open) {
        dialog.showModal();
      }
      requestAnimationFrame(() => dialog.querySelector<HTMLButtonElement>("[data-lightbox-close]")?.focus());
      return;
    }

    if (dialog.open) {
      dialog.close();
      botaoAmpliarRef.current?.focus();
    }
  }, [lightboxAberto]);

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
      <div className="relative">
        <button
          type="button"
          className={["group relative block w-full cursor-pointer overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset", ampla ? "aspect-[16/9]" : "aspect-[5/3]"].join(" ")}
          onClick={avancar}
          aria-label={`Avançar para a próxima imagem do projeto ${projeto}`}
        >
          <Image
            key={imagemAtual.src}
            src={imagemAtual.src}
            alt={imagemAtual.alt}
            width={1200}
            height={720}
            sizes={ampla ? "(min-width: 1024px) 75vw, 100vw" : "(min-width: 1024px) 55vw, 100vw"}
            className="h-full w-full object-cover transition-opacity duration-200 motion-reduce:transition-none"
          />
          <span className="pointer-events-none absolute bottom-3 left-3 border border-white/20 bg-black/60 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/80">
            Interface conceitual
          </span>
        </button>
        {mostrarAmpliar ? (
          <button
            ref={botaoAmpliarRef}
            type="button"
            onClick={abrirLightbox}
            className="absolute right-3 top-3 z-10 inline-flex min-h-11 items-center rounded-sm border border-white/30 bg-black/65 px-3 text-xs font-semibold text-white outline-none transition duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
            aria-label={`Ampliar imagem do projeto ${projeto}`}
          >
            Ampliar imagem
          </button>
        ) : null}
      </div>

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

      {mostrarAmpliar ? <dialog
        ref={dialogRef}
        aria-label={`Imagens ampliadas do projeto ${projeto}`}
        onCancel={(evento) => {
          evento.preventDefault();
          fecharLightbox();
        }}
        onClose={fecharLightbox}
        onClick={(evento) => {
          if (evento.target === evento.currentTarget) {
            fecharLightbox();
          }
        }}
        onKeyDown={lidarComTecladoDoLightbox}
        className="m-auto max-h-[calc(100vh-1rem)] w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] border border-border bg-background p-3 text-foreground backdrop:bg-black/85 sm:max-h-[88vh] sm:w-[82vw] sm:max-w-[82vw] sm:p-5"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">Imagem {indiceAtual + 1} de {quantidade}</p>
          <button
            data-lightbox-close
            type="button"
            onClick={fecharLightbox}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-lg text-muted outline-none hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Fechar imagem ampliada"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <figure className="mt-3">
          <Image
            key={`lightbox-${imagemAtual.src}`}
            src={imagemAtual.src}
            alt={imagemAtual.alt}
            width={1200}
            height={720}
            sizes="94vw"
            className="max-h-[calc(100vh-9rem)] w-auto max-w-full object-contain sm:max-h-[calc(88vh-9rem)]"
          />
          <figcaption className="mt-3 text-sm leading-6 text-muted">{imagemAtual.alt}</figcaption>
        </figure>
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={voltar}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-lg text-muted outline-none hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Imagem anterior do projeto ${projeto}`}
          >
            <span aria-hidden="true">←</span>
          </button>
          <span className="font-mono text-xs text-subtle">Navegue pelas imagens do conceito</span>
          <button
            type="button"
            onClick={avancar}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-lg text-muted outline-none hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Próxima imagem do projeto ${projeto}`}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </dialog> : null}
    </div>
  );
}
