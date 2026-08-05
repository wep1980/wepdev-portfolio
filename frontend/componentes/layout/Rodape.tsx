import { Container } from "@/componentes/ui/Container";
import {
  canaisProfissionais,
  cargoProfissional,
  localizacaoPublica,
  nomeProfissional,
} from "@/constantes/contatos";

const linksNavegacao = [
  { href: "#inicio", rotulo: "Início" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#experiencia", rotulo: "Experiência" },
  { href: "#projetos", rotulo: "Projetos" },
  { href: "#contato", rotulo: "Contato" },
];

function obterAtributosLink(
  externo: boolean,
  eventoAnalitico?: string,
) {
  return {
    ...(externo
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {}),
    ...(eventoAnalitico ? { "data-umami-event": eventoAnalitico } : {}),
  };
}

function obterRotuloCanalRodape(canal: (typeof canaisProfissionais)[number]) {
  if (canal.tipo === "curriculo") {
    return "Currículo";
  }

  return canal.nome
    .replace("Acessar ", "")
    .replace("Enviar ", "");
}

export function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background-secondary/92 py-10 text-sm text-muted">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:gap-10">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              WEPDEV
            </p>
            <p className="mt-4 text-lg font-semibold text-foreground">
              {nomeProfissional}
            </p>
            <p className="mt-2 font-medium text-primary-hover">
              {cargoProfissional}
            </p>
            <p className="mt-4 max-w-md leading-6 text-subtle">
              Backend enterprise, arquitetura de software e Inteligência
              Artificial aplicada à Engenharia de Software.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle">
              Navegação
            </p>
            <ul className="mt-4 grid gap-3">
              {linksNavegacao.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-7 items-center rounded-sm font-medium text-foreground outline-none transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {link.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Canais profissionais no rodapé">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-subtle">
              Canais
            </p>
            <ul className="mt-4 grid gap-3">
              {canaisProfissionais.map((canal) => (
                <li key={canal.id}>
                  <a
                    href={canal.href}
                    {...obterAtributosLink(
                      canal.externo,
                      canal.eventoAnalitico,
                    )}
                    className="inline-flex min-h-7 items-center rounded-sm font-medium text-foreground outline-none transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {obterRotuloCanalRodape(canal)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-border/70 pt-5 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>{anoAtual} - Desenvolvido com Next.js e TypeScript</p>
          <p>{localizacaoPublica}</p>
        </div>
      </Container>
    </footer>
  );
}
