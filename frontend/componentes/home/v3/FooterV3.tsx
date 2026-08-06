import { SectionDivider } from "@/componentes/shared/SectionDivider";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
} from "@/constantes/analytics";
import { obterCanalProfissional } from "@/constantes/contatos";

export function FooterV3() {
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const curriculo = obterCanalProfissional("curriculo");

  return (
    <footer aria-label="Rodapé WEPDEV" className="space-y-6 pb-8">
      <SectionDivider />
      <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-lg font-semibold text-foreground">
            &lt;WEPDev/&gt;
          </p>
          <p className="mt-3 text-sm text-muted">Waldir Escouto Pereira</p>
          <p className="mt-1 text-sm font-medium text-primary-hover">
            Desenvolvedor Java Sênior | Full Stack
          </p>
          <p className="mt-2 text-sm text-subtle">
            Código inteligente. Soluções reais.
          </p>
        </div>
        <nav aria-label="Navegação da Home V3" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted">
          <a href="#inicio" className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Início</a>
          <a href="#experiencia" className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Experiência</a>
          <a href="#projetos" className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Projetos</a>
          <a href="#tecnologias" className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Tecnologias</a>
          <a href="#contato" className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Contato</a>
        </nav>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-subtle">
        <a href={linkedin.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("linkedin", "footer")} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">LinkedIn</a>
        <a href={github.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("github", "footer")} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">GitHub</a>
        <a href={curriculo.href} target="_blank" rel="noopener noreferrer" {...atributosCurriculoAnalytics("footer")} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Currículo</a>
        <span>© {new Date().getFullYear()} WEPDEV</span>
      </div>
    </footer>
  );
}
