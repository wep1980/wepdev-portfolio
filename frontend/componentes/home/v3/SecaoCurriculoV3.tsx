import { obterCanalProfissional } from "@/constantes/contatos";

export function SecaoCurriculoV3() {
  const curriculo = obterCanalProfissional("curriculo");

  return (
    <section id="curriculo" aria-labelledby="titulo-curriculo-v3" className="scroll-mt-28">
      <h2 id="titulo-curriculo-v3" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        Currículo
      </h2>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <iframe
          src={curriculo.href}
          title="Currículo de Waldir Escouto Pereira"
          className="h-[32rem] w-full sm:h-[38rem]"
        />
      </div>
    </section>
  );
}
