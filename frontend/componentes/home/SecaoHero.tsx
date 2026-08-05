import { PainelTecnicoHero } from "@/componentes/home/PainelTecnicoHero";
import { Botao } from "@/componentes/ui/Botao";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";
import {
  atributosCanalProfissionalAnalytics,
  atributosCtaPrimarioAnalytics,
  atributosCurriculoAnalytics,
  locaisAnalytics,
} from "@/constantes/analytics";
import { obterCanalProfissional } from "@/constantes/contatos";

const tecnologiasHero = [
  "Java",
  "Spring Boot",
  "Quarkus",
  "Kafka",
  "Docker",
  "Kubernetes",
  "IA",
];

const indicadoresProfissionais = [
  "8+ anos em desenvolvimento",
  "Java Backend",
  "Sistemas Enterprise",
  "Microsserviços",
  "Cloud Native",
];

const canalLinkedIn = obterCanalProfissional("linkedin");
const canalGitHub = obterCanalProfissional("github");
const canalCurriculo = obterCanalProfissional("curriculo");

function IconeGitHub() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M7 7.5h7.5a3.5 3.5 0 0 1 0 7H10" />
      <path d="M7 4.5v6" />
      <path d="M7 13.5v6" />
      <path d="M10 17.5h6.5" />
      <path d="M5 4.5h4" />
      <path d="M5 19.5h4" />
    </svg>
  );
}

function IconeLinkedIn() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 10.5v6" />
      <path d="M8 7.8v.1" />
      <path d="M12 16.5v-3.4a2.6 2.6 0 0 1 5.2 0v3.4" />
      <path d="M12 10.5v6" />
    </svg>
  );
}

export function SecaoHero() {
  return (
    <Secao
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="relative isolate min-h-[calc(100vh-4.5rem)] overflow-hidden pb-10 pt-12 sm:pt-16 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-64 bg-[var(--gradient-glow)] opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-28 -z-10 h-px w-[min(72rem,calc(100%-2.5rem))] -translate-x-1/2 bg-[var(--gradient-brand)] opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-[10%] -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)] lg:gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-surface/72 px-3 py-2 shadow-glow-subtle">
              <span
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-md border border-primary/35 bg-primary/10 font-mono text-[0.68rem] font-bold text-primary"
              >
                W
              </span>
              <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                WEPDEV
              </span>
              <span
                aria-hidden="true"
                className="h-4 w-px bg-border"
              />
              <span className="font-mono text-[0.7rem] font-medium text-subtle">
                Código inteligente. Soluções reais.
              </span>
            </div>

            <p className="mt-7 inline-flex items-center gap-3 rounded-full border border-success/30 bg-success/8 px-4 py-2 font-mono text-[0.72rem] font-medium text-foreground shadow-[0_0_28px_rgb(34_197_94_/_10%)]">
              <span className="size-2 rounded-full bg-success shadow-[0_0_16px_rgb(34_197_94_/_60%)]" />
              Disponível para novas oportunidades
            </p>

            <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Backend Enterprise / Arquitetura / IA aplicada
            </p>

            <h1
              id="titulo-inicio"
              className="mt-4 max-w-[44rem] text-4xl font-semibold leading-[1.02] text-foreground sm:text-[3.2rem] lg:text-[4.25rem]"
            >
              Waldir Escouto Pereira
            </h1>

            <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-foreground sm:text-[2rem]">
              Desenvolvedor{" "}
              <span className="text-primary-hover">Java Sênior</span>
            </h2>

            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-foreground sm:text-xl">
              Backend Enterprise, Microsserviços e Inteligência Artificial
              aplicada à Engenharia de Software.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Desenvolvo APIs, microsserviços e integrações utilizando Java,
              Spring Boot, Quarkus, arquitetura de software, mensageria,
              containers e práticas modernas de Engenharia de Software.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Botao
                href="#projetos"
                {...atributosCtaPrimarioAnalytics()}
                tamanho="grande"
                className="shadow-glow"
              >
                Ver projetos
              </Botao>

              <Botao
                href={canalLinkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                {...atributosCanalProfissionalAnalytics(
                  "linkedin",
                  locaisAnalytics.hero,
                )}
                variante="secundario"
                tamanho="grande"
                className="min-w-36"
                aria-label="Acessar LinkedIn de Waldir Escouto Pereira"
              >
                <IconeLinkedIn />
                LinkedIn
              </Botao>

              <Botao
                href={canalGitHub.href}
                target="_blank"
                rel="noopener noreferrer"
                {...atributosCanalProfissionalAnalytics(
                  "github",
                  locaisAnalytics.hero,
                )}
                variante="secundario"
                tamanho="grande"
                className="min-w-36"
                aria-label="Acessar GitHub de Waldir Escouto Pereira"
              >
                <IconeGitHub />
                GitHub
              </Botao>

              <Botao
                href={canalCurriculo.href}
                target="_blank"
                rel="noopener noreferrer"
                {...atributosCurriculoAnalytics(locaisAnalytics.hero)}
                variante="secundario"
                tamanho="grande"
                className="min-w-36"
                aria-label="Acessar currículo de Waldir Escouto Pereira em PDF"
              >
                Currículo PDF
              </Botao>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <ul
                className="flex flex-wrap gap-2.5"
                aria-label="Tecnologias principais"
              >
                {tecnologiasHero.map((tecnologia) => (
                  <li
                    key={tecnologia}
                    className="rounded-full border border-border/80 bg-surface/78 px-3.5 py-2 font-mono text-[0.72rem] font-medium text-muted shadow-[inset_0_1px_0_rgb(255_255_255_/_4%)]"
                  >
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PainelTecnicoHero />
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface/65 shadow-md">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-5">
            {indicadoresProfissionais.map((indicador) => (
              <div
                key={indicador}
                className="border-b border-border/70 px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:border-r"
              >
                <dt className="sr-only">Indicador profissional</dt>
                <dd className="font-mono text-sm font-semibold text-foreground">
                  {indicador}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Secao>
  );
}
