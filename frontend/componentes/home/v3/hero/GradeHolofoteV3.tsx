"use client";

import { useEffect, useRef } from "react";

const ANEL = [
  "#e9587f",
  "#e46f4e",
  "#c98f4f",
  "#ae9c4e",
  "#81a34d",
  "#52a878",
  "#54a89f",
  "#52a5ba",
  "#4e96d5",
  "#6368e7",
  "#9d5ad3",
  "#cd56b2",
];

const CELULA = 24;
const VAO = 10;
const PASSO = CELULA + VAO;
const RAIO = 6;

function comoRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

export function GradeHolofoteV3() {
  const gradeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grade = gradeRef.current;
    const faixa = grade?.parentElement;
    if (!grade || !faixa) return;

    if (
      !window.matchMedia("(hover: hover)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cols = 0;
    let rows = 0;
    let cores: [number, number, number][] = [];
    let celulas: HTMLElement[] = [];
    let anterior: number[] = [];
    let guiaH: HTMLElement;
    let guiaV: HTMLElement;
    let alvo: HTMLElement;

    const sonda = { c: -99, l: -99, alvoC: -99, alvoL: -99, forca: 0, dentro: false };

    function montar() {
      const caixa = grade!.getBoundingClientRect();
      const novoC = Math.max(1, Math.ceil((caixa.width + VAO) / PASSO));
      const novoL = Math.max(1, Math.ceil((caixa.height + VAO) / PASSO));
      if (novoC === cols && novoL === rows) return;
      cols = novoC;
      rows = novoL;

      cores = Array.from({ length: cols }, (_, c) =>
        comoRgb(ANEL[Math.round((c / Math.max(1, cols - 1)) * (ANEL.length - 1))]),
      );

      const fragmento = document.createDocumentFragment();
      celulas = new Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) {
        const no = document.createElement("i");
        no.className = "holofote__celula";
        no.style.cssText =
          `left:${(i % cols) * PASSO}px;top:${Math.floor(i / cols) * PASSO}px;` +
          `width:${CELULA}px;height:${CELULA}px;opacity:.07`;
        celulas[i] = no;
        fragmento.appendChild(no);
      }

      guiaH = document.createElement("i");
      guiaH.className = "holofote__guia holofote__guia--h";
      guiaV = document.createElement("i");
      guiaV.className = "holofote__guia holofote__guia--v";
      alvo = document.createElement("i");
      alvo.className = "holofote__alvo";
      fragmento.append(guiaH, guiaV, alvo);

      grade!.replaceChildren(fragmento);
      anterior = new Array(cols * rows).fill(-1);
    }

    function mover(evento: PointerEvent) {
      const caixa = grade!.getBoundingClientRect();
      sonda.alvoC = (evento.clientX - caixa.left) / PASSO - 0.5;
      sonda.alvoL = (evento.clientY - caixa.top) / PASSO - 0.5;
      sonda.dentro = true;
    }

    function sair() {
      sonda.dentro = false;
    }

    let quadro: number;
    function laco() {
      if (sonda.alvoC > -50) {
        sonda.c = sonda.c < -50 ? sonda.alvoC : sonda.c + (sonda.alvoC - sonda.c) * 0.22;
        sonda.l = sonda.l < -50 ? sonda.alvoL : sonda.l + (sonda.alvoL - sonda.l) * 0.22;
      }
      const destino = sonda.dentro ? 1 : 0;
      sonda.forca += (destino - sonda.forca) * (destino ? 0.16 : 0.08);
      if (sonda.forca < 0.004) sonda.forca = 0;

      let melhorC = 0;
      let melhorL = 0;
      let melhor = -1;

      for (let l = 0; l < rows; l++) {
        for (let c = 0; c < cols; c++) {
          let t = 0;
          if (sonda.forca > 0) {
            const d = Math.hypot(c - sonda.c, l - sonda.l) / RAIO;
            if (d < 1) t = Math.pow(1 - d, 1.5) * sonda.forca;
          }
          if (t > melhor) {
            melhor = t;
            melhorC = c;
            melhorL = l;
          }
          const i = l * cols + c;
          const v = Math.round(t * 200) / 200;
          if (anterior[i] === v) continue;
          anterior[i] = v;

          const no = celulas[i];
          if (!no) continue;
          const [r, g, b] = cores[c];
          no.style.opacity = (0.06 + 0.94 * v).toFixed(3);
          no.style.backgroundColor = `rgb(${r},${g},${b})`;
          no.style.transform = `translateY(${(-10 * v).toFixed(2)}px) scale(${(0.8 + 0.5 * v).toFixed(3)})`;
          no.style.boxShadow =
            v > 0.4
              ? `0 0 ${(8 + 18 * v).toFixed(0)}px 0 rgba(${r},${g},${b},${(0.28 + 0.4 * v).toFixed(2)}), 0 8px 18px -8px rgba(0,0,0,.85)`
              : "none";
        }
      }

      if (guiaH && guiaV && alvo) {
        const x = melhorC * PASSO + CELULA / 2;
        const y = melhorL * PASSO + CELULA / 2;
        guiaH.style.transform = `translateY(${y}px)`;
        guiaV.style.transform = `translateX(${x}px)`;
        alvo.style.transform = `translate(${x - 11}px,${y - 11}px)`;
        const op = sonda.forca.toFixed(2);
        guiaH.style.opacity = guiaV.style.opacity = alvo.style.opacity = op;
      }

      quadro = requestAnimationFrame(laco);
    }

    montar();
    const observador = new ResizeObserver(montar);
    observador.observe(grade);
    faixa.addEventListener("pointermove", mover);
    faixa.addEventListener("pointerleave", sair);
    quadro = requestAnimationFrame(laco);

    return () => {
      cancelAnimationFrame(quadro);
      observador.disconnect();
      faixa.removeEventListener("pointermove", mover);
      faixa.removeEventListener("pointerleave", sair);
    };
  }, []);

  return (
    <div
      ref={gradeRef}
      aria-hidden="true"
      className="holofote__grade absolute inset-0 -z-10 overflow-hidden"
    />
  );
}
