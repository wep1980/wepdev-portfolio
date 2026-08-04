import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type VarianteBotao = "primario" | "secundario" | "texto";
type TamanhoBotao = "medio" | "grande";

type PropriedadesBaseBotao = {
  children: ReactNode;
  className?: string;
  variante?: VarianteBotao;
  tamanho?: TamanhoBotao;
};

type PropriedadesBotaoComoLink = PropriedadesBaseBotao &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PropriedadesBotaoComoBotao = PropriedadesBaseBotao &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PropriedadesBotao = PropriedadesBotaoComoLink | PropriedadesBotaoComoBotao;

const classesPorVariante: Record<VarianteBotao, string> = {
  primario:
    "border border-primary/70 bg-primary text-primary-foreground shadow-[0_0_34px_rgb(56_189_248_/_20%)] hover:-translate-y-0.5 hover:border-primary-hover hover:bg-primary-hover hover:shadow-[0_0_42px_rgb(56_189_248_/_28%)] focus-visible:outline-primary",
  secundario:
    "border border-border bg-surface/70 text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_5%)] hover:-translate-y-0.5 hover:border-primary/55 hover:bg-surface-elevated hover:text-primary-hover focus-visible:outline-primary",
  texto:
    "text-primary hover:-translate-y-0.5 hover:text-primary-hover focus-visible:outline-primary",
};

const classesPorTamanho: Record<TamanhoBotao, string> = {
  medio: "min-h-11 px-5 text-sm",
  grande: "min-h-12 px-5 text-sm sm:px-6",
};

function combinarClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Botao(props: PropriedadesBotao) {
  const {
    children,
    className,
    variante = "primario",
    tamanho = "medio",
    ...propriedadesNativas
  } = props;

  const classes = combinarClasses(
    "inline-flex items-center justify-center gap-2.5 rounded-md font-semibold tracking-normal transition duration-200 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:translate-y-px",
    classesPorVariante[variante],
    classesPorTamanho[tamanho],
    variante === "texto" ? "px-0" : undefined,
    className,
  );

  if ("href" in propriedadesNativas && typeof propriedadesNativas.href === "string") {
    const { href, ...propriedadesLink } = propriedadesNativas;

    return (
      <a href={href} {...propriedadesLink} className={classes}>
        {children}
      </a>
    );
  }

  const { type = "button", ...propriedadesBotao } = propriedadesNativas;

  return (
    <button type={type} {...propriedadesBotao} className={classes}>
      {children}
    </button>
  );
}
