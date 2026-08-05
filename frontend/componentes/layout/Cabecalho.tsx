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
    <header className="sticky top-0 z-20 border-b border-border/75 bg-background/72 shadow-[0_1px_0_rgb(255_255_255_/_4%),0_18px_45px_rgb(0_0_0_/_18%)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/62">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-6">
        <a
          href="#inicio"
          className="group inline-flex items-center gap-3 text-sm font-bold text-foreground outline-none transition hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="flex size-9 items-center justify-center rounded-md border border-primary/35 bg-primary/10 font-mono text-xs text-primary shadow-[0_0_24px_rgb(56_189_248_/_16%)] transition group-hover:border-primary/60 group-hover:bg-primary/14">
            W
          </span>
          <span className="tracking-[0.18em]">WEPDEV</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {linksNavegacao.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...obterAtributosNavegacao(link.secao)}
                  className="rounded-md px-1 py-2 outline-none transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
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
          className="hidden sm:inline-flex"
        >
          Contato
        </Botao>
      </Container>
    </header>
  );
}
