export default function PaginaInicial() {
  return (
    <main className="flex min-h-screen items-center bg-zinc-950 px-6 py-24 text-zinc-100">
      <section className="mx-auto w-full max-w-6xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          WEPDEV Portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Olá, sou Waldir Escouto Pereira.
        </h1>

        <h2 className="mt-4 max-w-4xl text-2xl font-semibold text-zinc-300 sm:text-4xl">
          Desenvolvedor Java Sênior especializado em aplicações empresariais.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Desenvolvo APIs, microsserviços e integrações utilizando Java,
          Spring Boot, Quarkus, arquitetura de software, mensageria,
          containers e práticas modernas de Engenharia de Software.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projetos"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-400 px-6 font-semibold text-zinc-950 transition hover:bg-emerald-300"
          >
            Conhecer meus projetos
          </a>

          <a
            href="https://github.com/wep1980"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-700 px-6 font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Acessar meu GitHub
          </a>
        </div>

        <div
          id="projetos"
          className="mt-24 border-t border-zinc-800 pt-12"
        >
          <h2 className="text-3xl font-bold">Projetos em construção</h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Esta plataforma está sendo desenvolvida publicamente para
            demonstrar arquitetura, qualidade de código, testes,
            documentação e entrega contínua.
          </p>
        </div>
      </section>
    </main>
  );
}
