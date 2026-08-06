import { PainelFocoTecnicoV3 } from "@/componentes/home/v3/hero/PainelFocoTecnicoV3";
import { Botao } from "@/componentes/ui/Botao";
import { Container } from "@/componentes/ui/Container";
import {
  atributosCanalProfissionalAnalytics,
  atributosCtaPrimarioAnalytics,
  atributosCurriculoAnalytics,
  locaisAnalytics,
} from "@/constantes/analytics";
import {
  nomeProfissional,
  obterCanalProfissional,
} from "@/constantes/contatos";

export function HeroV3() {
  const curriculo = obterCanalProfissional("curriculo");
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const whatsapp = obterCanalProfissional("whatsapp");

  return (
    <section
      id="inicio"
      aria-labelledby="titulo-hero-v3"
      className="relative isolate flex min-h-[calc(92vh-4.5rem)] items-center overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_28%,rgb(20_33_61_/_58%),transparent_32rem)]" />
      <div aria-hidden="true" className="absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,1fr)] lg:gap-20">
          <div className="max-w-4xl">
            <p className="inline-flex min-h-9 items-center gap-3 rounded-md border border-success/30 bg-success/5 px-3 py-2 font-mono text-xs text-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-success" />
              Disponível para novas oportunidades
            </p>

            <p className="mt-7 max-w-2xl font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary sm:tracking-[0.16em]">
              Backend Enterprise · Full Stack · Arquitetura · IA aplicada
            </p>

            <h1 id="titulo-hero-v3" className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-[4.25rem] lg:text-[5.25rem]">
              {nomeProfissional}
            </h1>

            <p className="mt-6 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Desenvolvedor Java Sênior | Full Stack
            </p>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-foreground sm:mt-6 sm:text-xl">
              Construo soluções completas para ambientes corporativos, unindo
              backend Java, APIs, microsserviços, interfaces React e Angular,
              cloud e Inteligência Artificial aplicada à Engenharia de Software.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Botao
                href={curriculo.href}
                target="_blank"
                rel="noopener noreferrer"
                {...atributosCurriculoAnalytics(locaisAnalytics.hero)}
                tamanho="grande"
                className="shadow-none active:translate-y-px"
                aria-label="Acessar currículo de Waldir Escouto Pereira em PDF"
              >
                Acessar currículo
              </Botao>
              <Botao
                href="#projetos"
                {...atributosCtaPrimarioAnalytics()}
                variante="secundario"
                tamanho="grande"
                className="active:translate-y-px"
                aria-label="Ver projetos da Home V3"
              >
                Ver projetos
              </Botao>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted">
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("linkedin", locaisAnalytics.hero)} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">LinkedIn</a>
              <a href={github.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("github", locaisAnalytics.hero)} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">GitHub</a>
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("whatsapp", locaisAnalytics.hero)} className="inline-flex min-h-11 items-center transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">WhatsApp</a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/80 pt-6" aria-label="Indicadores profissionais">
              {[
                "Java Backend",
                "Sistemas Enterprise",
                "Microsserviços",
                "Cloud e DevOps",
                "IA aplicada",
              ].map((indicador) => (
                <li key={indicador} className="font-mono text-xs text-subtle">
                  {indicador}
                </li>
              ))}
            </ul>
          </div>

          <PainelFocoTecnicoV3 />
        </div>
      </Container>
    </section>
  );
}
