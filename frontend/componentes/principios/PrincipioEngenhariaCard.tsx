import type { PrincipioEngenharia } from "@/constantes/principiosEngenharia";

type PropriedadesPrincipioEngenhariaCard = {
  principio: PrincipioEngenharia;
  indice: number;
};

export function PrincipioEngenhariaCard({
  principio,
  indice,
}: PropriedadesPrincipioEngenhariaCard) {
  return (
    <li className="grid gap-4 border-t border-border/70 py-5 sm:grid-cols-[4.5rem_1fr] sm:py-6">
      <span className="font-mono text-sm font-semibold text-primary">
        {String(indice + 1).padStart(2, "0")}
      </span>
      <article>
        <h3 className="text-lg font-semibold leading-tight text-foreground">
          {principio.titulo}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          {principio.descricao}
        </p>
      </article>
    </li>
  );
}
