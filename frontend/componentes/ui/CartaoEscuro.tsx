import type { ReactNode } from "react";

type PropriedadesCartaoEscuro = {
  children: ReactNode;
  className?: string;
};

export function CartaoEscuro({ children, className }: PropriedadesCartaoEscuro) {
  const classes = [
    "rounded-2xl border border-card-dark-border bg-card-dark p-6 text-card-dark-foreground sm:p-7",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

export function TagEscura({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-card-dark-tag px-3 py-1 text-xs font-medium text-card-dark-foreground/90">
      {children}
    </span>
  );
}
