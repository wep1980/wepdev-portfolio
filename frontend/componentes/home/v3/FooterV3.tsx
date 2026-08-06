import { SectionDivider } from "@/componentes/shared/SectionDivider";
import { Container } from "@/componentes/ui/Container";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
} from "@/constantes/analytics";
import { localizacaoPublica, obterCanalProfissional } from "@/constantes/contatos";

export function FooterV3({ basePath = "" }: { basePath?: string }) {
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const curriculo = obterCanalProfissional("curriculo");

  return (
    <footer aria-label="Rodapé WEPDEV" className="space-y-6 pb-8">
      <Container>
        <SectionDivider />
        <div className="grid gap-10 pt-8 sm:grid-cols-[minmax(0,2fr)_minmax(9rem,1fr)_minmax(9rem,1fr)] sm:gap-8 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p
              aria-label="WEPDev"
              className="font-mono text-xl font-black leading-none tracking-[0.05em] text-foreground"
            >
              <span aria-hidden="true" className="text-muted">&lt;</span>
              <span aria-hidden="true">WEP</span>
              <span aria-hidden="true" className="text-primary">Dev</span>
              <span aria-hidden="true" className="text-muted">/&gt;</span>
            </p>
            <p className="mt-4 text-sm font-medium text-foreground">Waldir Escouto Pereira</p>
            <p className="mt-1 text-sm font-medium text-primary-hover">
              Desenvolvedor Java Sênior | Full Stack
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-subtle">
              Código inteligente. Soluções reais.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
              Navegação
            </p>
            <ul className="mt-3 flex flex-col items-start gap-1 text-sm text-muted">
              <li><a href={`${basePath}#inicio`} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Início</a></li>
              <li><a href={`${basePath}#experiencia`} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Experiência</a></li>
              <li><a href={`${basePath}#projetos`} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Projetos</a></li>
              <li><a href={`${basePath}#tecnologias`} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Tecnologias</a></li>
              <li><a href={`${basePath}#contato`} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Contato</a></li>
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
              Canais
            </p>
            <ul className="mt-3 flex flex-col items-start gap-1 text-sm text-muted">
              <li><a href={linkedin.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("linkedin", "footer")} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">LinkedIn</a></li>
              <li><a href={github.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("github", "footer")} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">GitHub</a></li>
              <li><a href={curriculo.href} target="_blank" rel="noopener noreferrer" {...atributosCurriculoAnalytics("footer")} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Currículo</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/80 pt-5 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} WEPDEV</span>
          <span>{localizacaoPublica}</span>
        </div>
      </Container>
    </footer>
  );
}
