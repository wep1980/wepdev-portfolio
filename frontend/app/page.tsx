import { SecaoContato } from "@/componentes/contato/SecaoContato";
import { PainelTecnicoHero } from "@/componentes/home/PainelTecnicoHero";
import { SecaoSobre } from "@/componentes/home/SecaoSobre";
import { VisaoArquitetura } from "@/componentes/arquitetura/VisaoArquitetura";
import { LinhaDoTempoExperiencia } from "@/componentes/experiencia/LinhaDoTempoExperiencia";
import { SecaoPrincipiosEngenharia } from "@/componentes/principios/SecaoPrincipiosEngenharia";
import { SecaoProjetos } from "@/componentes/projetos/SecaoProjetos";
import { Botao } from "@/componentes/ui/Botao";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";
import { obterCanalProfissional } from "@/constantes/contatos";
import { experienciasProfissionais } from "@/constantes/experiencias";

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

export default function PaginaInicial() {
  return (
    <main className="flex-1 overflow-hidden">
      <Secao
        id="inicio"
        aria-labelledby="titulo-inicio"
        className="relative min-h-[calc(100vh-5rem)] overflow-hidden pb-10 pt-14 sm:pt-18 lg:pt-22"
      >
        <div className="absolute left-[12%] top-20 -z-10 h-80 w-80 rounded-full bg-primary/14 blur-3xl" />
        <div className="absolute right-[8%] top-40 -z-10 h-96 w-96 rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute bottom-12 left-1/3 -z-10 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(22rem,0.95fr)] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full border border-status/30 bg-status/8 px-4 py-2 font-mono text-[0.72rem] font-medium text-foreground shadow-[0_0_28px_rgb(34_197_94_/_10%)]">
                <span className="size-2 rounded-full bg-status shadow-[0_0_16px_rgb(34_197_94_/_60%)]" />
                Disponível para novas oportunidades
              </p>

              <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Backend Enterprise / Arquitetura / IA aplicada
              </p>

              <h1
                id="titulo-inicio"
                className="mt-4 max-w-[37rem] text-4xl font-semibold leading-[1.04] text-foreground sm:text-[2.6rem] lg:text-[3rem]"
              >
                Waldir Escouto Pereira
              </h1>

              <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                Desenvolvedor{" "}
                <span className="font-bold text-primary-hover">
                  Java Sênior
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-foreground sm:text-xl">
                Backend Enterprise, Microsserviços e Inteligência Artificial
                aplicada à Engenharia de Software.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Desenvolvo APIs, microsserviços e integrações utilizando Java,
                Spring Boot, Quarkus, arquitetura de software, mensageria,
                containers e práticas modernas de Engenharia de Software.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Botao href="#projetos" tamanho="grande">
                  Ver projetos
                </Botao>

                <Botao
                  href={canalLinkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={canalLinkedIn.eventoAnalitico}
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
                  data-umami-event={canalGitHub.eventoAnalitico}
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
                  data-umami-event={canalCurriculo.eventoAnalitico}
                  variante="secundario"
                  tamanho="grande"
                  className="min-w-36"
                  aria-label="Acessar currículo de Waldir Escouto Pereira em PDF"
                >
                  Currículo PDF
                </Botao>
              </div>

              <ul
                className="mt-9 flex flex-wrap gap-2.5"
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

            <PainelTecnicoHero />
          </div>

          <div className="mt-14 overflow-hidden rounded-lg border border-border bg-surface/65 shadow-[0_18px_60px_rgb(0_0_0_/_22%)]">
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

      <SecaoSobre />

      <Secao
        id="experiencia"
        aria-labelledby="titulo-experiencia"
        className="py-12 sm:py-16"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Experiência
              </p>
              <h2
                id="titulo-experiencia"
                className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
              >
                Linha do tempo profissional resumida.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Resumo público da atuação em desenvolvimento Java, backend e
                evolução de aplicações corporativas.
              </p>
            </div>

            <LinhaDoTempoExperiencia experiencias={experienciasProfissionais} />
          </div>
        </Container>
      </Secao>

      <Secao
        id="arquitetura"
        aria-labelledby="titulo-arquitetura"
        className="py-12 sm:py-16"
      >
        <Container>
          <div className="mb-7 max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Arquitetura
            </p>
            <h2
              id="titulo-arquitetura"
              className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Como eu penso uma arquitetura
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Uma boa arquitetura precisa equilibrar simplicidade, evolução,
              segurança, observabilidade e necessidades reais do negócio.
            </p>
          </div>

          <VisaoArquitetura />
        </Container>
      </Secao>

      <SecaoProjetos />

      <SecaoPrincipiosEngenharia />

      <SecaoContato />
    </main>
  );
}
