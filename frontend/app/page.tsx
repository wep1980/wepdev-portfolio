import { SecaoContato } from "@/componentes/contato/SecaoContato";
import { SecaoHero } from "@/componentes/home/SecaoHero";
import { SecaoSobre } from "@/componentes/home/SecaoSobre";
import { VisaoArquitetura } from "@/componentes/arquitetura/VisaoArquitetura";
import { LinhaDoTempoExperiencia } from "@/componentes/experiencia/LinhaDoTempoExperiencia";
import { SecaoPrincipiosEngenharia } from "@/componentes/principios/SecaoPrincipiosEngenharia";
import { SecaoProjetos } from "@/componentes/projetos/SecaoProjetos";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";
import { experienciasProfissionais } from "@/constantes/experiencias";

export default function PaginaInicial() {
  return (
    <main className="flex-1 overflow-hidden">
      <SecaoHero />

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
