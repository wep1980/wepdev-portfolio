import { PainelTecnicoHero } from "@/componentes/home/PainelTecnicoHero";
import { Botao } from "@/componentes/ui/Botao";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";

const tecnologiasHero = [
  "Java",
  "Spring Boot",
  "Quarkus",
  "APIs REST",
  "Microsserviços",
  "Kafka",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "Ollama",
  "IA aplicada",
];

const indicadoresProfissionais = [
  { valor: "8+", rotulo: "anos em desenvolvimento" },
  { valor: "Java", rotulo: "Backend" },
  { valor: "Enterprise", rotulo: "Sistemas" },
  { valor: "Micro", rotulo: "serviços" },
  { valor: "Cloud", rotulo: "Native" },
];

const secoesEmConstrucao = [
  {
    id: "sobre",
    titulo: "Sobre",
    rotulo: "Fundação narrativa",
    detalheVisual: "border-primary/24 bg-primary/7",
    descricao:
      "Resumo profissional em preparação, mantendo o foco em trajetória Java, backend enterprise, arquitetura e IA aplicada.",
  },
  {
    id: "experiencia",
    titulo: "Experiência",
    rotulo: "Linha do tempo",
    detalheVisual: "border-accent/24 bg-accent/8",
    descricao:
      "Linha do tempo profissional será estruturada sem expor dados internos, clientes confidenciais ou detalhes sensíveis.",
  },
  {
    id: "projetos",
    titulo: "Projetos em construção",
    rotulo: "Evidências técnicas",
    detalheVisual: "border-primary/24 bg-surface-elevated/70",
    descricao:
      "Esta plataforma está sendo desenvolvida publicamente para demonstrar arquitetura, qualidade de código, testes, documentação e entrega contínua.",
  },
  {
    id: "contato",
    titulo: "Contato",
    rotulo: "Canais profissionais",
    detalheVisual: "border-status/22 bg-status/7",
    descricao:
      "Canais profissionais serão consolidados para facilitar conversas sobre oportunidades, projetos e colaboração técnica.",
  },
];

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
                className="mt-4 max-w-[46rem] text-4xl font-semibold leading-[1.04] text-foreground sm:text-[2.875rem] lg:text-[3.45rem]"
              >
                Waldir Escouto Pereira
              </h1>

              <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                Desenvolvedor{" "}
                <span className="rounded-md border border-primary/20 bg-primary/8 px-2 py-1 text-primary-hover">
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
                  href="https://www.linkedin.com/in/waldir-escouto-pereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  variante="secundario"
                  tamanho="grande"
                  aria-label="Acessar LinkedIn de Waldir Escouto Pereira"
                >
                  <IconeLinkedIn />
                  LinkedIn
                </Botao>

                <Botao
                  href="https://github.com/wep1980"
                  target="_blank"
                  rel="noopener noreferrer"
                  variante="texto"
                  tamanho="grande"
                  aria-label="Acessar GitHub de Waldir Escouto Pereira"
                >
                  <IconeGitHub />
                  GitHub
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
                  key={`${indicador.valor}-${indicador.rotulo}`}
                  className="border-b border-border/70 px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:border-r"
                >
                  <dt className="font-mono text-xl font-semibold text-foreground">
                    {indicador.valor}
                  </dt>
                  <dd className="mt-1 text-sm text-muted">{indicador.rotulo}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Secao>

      {secoesEmConstrucao.map((secao) => (
        <Secao
          key={secao.id}
          id={secao.id}
          aria-labelledby={`titulo-${secao.id}`}
          className="py-10 sm:py-12"
        >
          <Container>
            <div
              className={`rounded-lg border ${secao.detalheVisual} p-6 shadow-[0_18px_60px_rgb(0_0_0_/_18%)] sm:p-8`}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
                {secao.rotulo}
              </p>
              <h2
                id={`titulo-${secao.id}`}
                className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl"
              >
                {secao.titulo}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
                {secao.descricao}
              </p>
            </div>
          </Container>
        </Secao>
      ))}
    </main>
  );
}
