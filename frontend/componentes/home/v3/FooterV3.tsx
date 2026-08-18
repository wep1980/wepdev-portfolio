import { LogoWEPDev } from "@/componentes/marca/LogoWEPDev";
import { Container } from "@/componentes/ui/Container";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
} from "@/constantes/analytics";
import { localizacaoPublica, obterCanalProfissional } from "@/constantes/contatos";

const classeLinkRodape =
  "inline-flex items-center py-0.5 transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function FooterV3({ basePath = "" }: { basePath?: string }) {
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const curriculo = obterCanalProfissional("curriculo");
  const whatsapp = obterCanalProfissional("whatsapp");

  return (
    <footer aria-label="Rodapé WepDev" className="mt-6 pb-10">
      <Container>
        <div className="rounded-lg border border-border bg-surface/60 p-6 sm:p-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div className="max-w-xs">
              <p aria-label="WepDev" className="font-mono text-lg font-semibold leading-none tracking-[-0.01em] text-foreground">
                <LogoWEPDev />
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">Waldir Escouto Pereira</p>
              <p className="mt-1 text-sm font-medium text-primary-hover">
                Desenvolvedor Java Sênior | Full Stack
              </p>
              <p className="mt-2 text-sm leading-6 text-subtle">
                Código inteligente. Soluções reais.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-14">
              <nav aria-label="Navegação do rodapé">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Navegação
                </p>
                <ul className="mt-3 flex flex-col items-start gap-1.5 text-sm text-muted">
                  <li><a href={`${basePath}#inicio`} className={classeLinkRodape}>Início</a></li>
                  <li><a href={`${basePath}#experiencia`} className={classeLinkRodape}>Experiência</a></li>
                  <li><a href={`${basePath}#projetos`} className={classeLinkRodape}>Projetos</a></li>
                  <li><a href={`${basePath}#tecnologias`} className={classeLinkRodape}>Tecnologias</a></li>
                  <li><a href={`${basePath}#contato`} className={classeLinkRodape}>Contato</a></li>
                </ul>
              </nav>

              <div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Canais
                </p>
                <ul className="mt-3 flex flex-col items-start gap-1.5 text-sm text-muted">
                  <li><a href={whatsapp.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("whatsapp", "footer")} className={classeLinkRodape}>WhatsApp</a></li>
                  <li><a href={linkedin.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("linkedin", "footer")} className={classeLinkRodape}>LinkedIn</a></li>
                  <li><a href={github.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("github", "footer")} className={classeLinkRodape}>GitHub</a></li>
                  <li><a href={curriculo.href} target="_blank" rel="noopener noreferrer" {...atributosCurriculoAnalytics("footer")} className={classeLinkRodape}>Currículo</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-1.5 border-t border-border/80 pt-4 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} WepDev</span>
            <span>{localizacaoPublica}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
