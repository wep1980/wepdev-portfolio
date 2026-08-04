import type { ReactNode } from "react";

type PropriedadesSecao = {
  children: ReactNode;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
};

export function Secao({
  children,
  id,
  className,
  "aria-labelledby": ariaLabelledBy,
}: PropriedadesSecao) {
  const classes = ["scroll-mt-28 py-14 sm:py-18 lg:py-24", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={classes}>
      {children}
    </section>
  );
}
