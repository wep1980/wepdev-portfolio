import { Container } from "@/componentes/ui/Container";
import { Botao } from "@/componentes/ui/Botao";
import {
  atributosNavegacaoAnalytics,
  locaisAnalytics,
  secoesAnalytics,
  type SecaoAnalytics,
} from "@/constantes/analytics";

const linksNavegacao = [
  { href: "#inicio", rotulo: "Início", secao: secoesAnalytics.inicio },
  { href: "#sobre", rotulo: "Sobre", secao: secoesAnalytics.sobre },
  {
    href: "#experiencia",
    rotulo: "Experiência",
    secao: secoesAnalytics.experiencia,
  },
  { href: "#projetos", rotulo: "Projetos", secao: secoesAnalytics.projetos },
  { href: "#contato", rotulo: "Contato", secao: secoesAnalytics.contato },
];

function obterAtributosNavegacao(secao: SecaoAnalytics) {
  return atributosNavegacaoAnalytics(secao, locaisAnalytics.cabecalho);
}

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/82 shadow-md backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <Container className="grid min-h-[4.5rem] grid-cols-[1fr_auto] items-center gap-4 sm:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <a
          href="#inicio"
          className="group inline-flex min-h-11 w-fit items-center gap-3 rounded-md pr-2 text-sm font-bold text-foreground outline-none transition duration-200 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-lg border border-primary/35 bg-surface/80 font-mono text-sm text-primary shadow-glow-subtle transition duration-200 group-hover:border-primary/60 group-hover:bg-surface-elevated">
            <span
              aria-hidden="true"
              className="absolute inset-x-1 bottom-1 h-px bg-[var(--gradient-brand)] opacity-70"
            />
            W
          </span>
          <span className="flex flex-col leading-none">
            <span className="tracking-[0.18em]">WEPDEV</span>
            <span className="mt-1 hidden font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-subtle sm:block">
              Portfolio
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden justify-self-center lg:block"
        >
          <ul className="flex items-center rounded-full border border-border/80 bg-surface/45 p-1 text-sm font-medium text-muted shadow-sm">
            {linksNavegacao.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...obterAtributosNavegacao(link.secao)}
                  className="inline-flex min-h-9 items-center rounded-full px-3.5 outline-none transition duration-200 hover:bg-surface-elevated hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Botao
          href="#contato"
          {...obterAtributosNavegacao(secoesAnalytics.contato)}
          variante="secundario"
          className="hidden border-primary/35 bg-surface/78 shadow-glow-subtle hover:border-primary/60 hover:bg-surface-elevated sm:inline-flex lg:justify-self-end"
        >
          Contato
        </Botao>
      </Container>
    </header>
  );
}
