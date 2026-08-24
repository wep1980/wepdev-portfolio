"use client";

import { useEffect, useState } from "react";

export function useSecaoAtiva(ids: readonly string[]) {
  const [ativa, setAtiva] = useState<string | null>(null);

  useEffect(() => {
    const elementos = ids
      .map((id) => document.getElementById(id))
      .filter((elemento): elemento is HTMLElement => elemento !== null);

    if (elementos.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visivel) {
          setAtiva(visivel.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const elemento of elementos) {
      observer.observe(elemento);
    }

    return () => observer.disconnect();
  }, [ids]);

  return ativa;
}
