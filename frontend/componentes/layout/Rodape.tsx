import { Container } from "@/componentes/ui/Container";

const linksProfissionais = [
  { href: "https://github.com/wep1980", rotulo: "GitHub" },
  {
    href: "https://www.linkedin.com/in/waldir-escouto-pereira",
    rotulo: "LinkedIn",
  },
];

export function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background-secondary/92 py-10 text-sm text-muted">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">Waldir Escouto Pereira</p>
          <p className="mt-2 text-subtle">Desenvolvedor Java Sênior</p>
          <p className="mt-2 font-mono text-xs text-subtle">
            {anoAtual} - Construído com Next.js e TypeScript.
          </p>
        </div>

        <nav aria-label="Links profissionais">
          <ul className="flex flex-wrap gap-5">
            {linksProfissionais.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground outline-none transition hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
