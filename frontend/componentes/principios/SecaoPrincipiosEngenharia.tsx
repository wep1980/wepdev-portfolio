import { PrincipioEngenhariaCard } from "@/componentes/principios/PrincipioEngenhariaCard";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";
import { principiosEngenharia } from "@/constantes/principiosEngenharia";

export function SecaoPrincipiosEngenharia() {
  return (
    <Secao
      aria-labelledby="titulo-principios"
      className="bg-background-secondary/45 py-12 sm:py-16"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent-light">
              Engenharia
            </p>
            <h2
              id="titulo-principios"
              className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Princípios de Engenharia
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Princípios que orientam minhas decisões técnicas, desde o
              entendimento do problema até a evolução segura da solução.
            </p>
          </div>

          <ol className="grid gap-x-8 lg:grid-cols-2">
            {principiosEngenharia.map((principio, indice) => (
              <PrincipioEngenhariaCard
                key={principio.id}
                principio={principio}
                indice={indice}
              />
            ))}
          </ol>
        </div>
      </Container>
    </Secao>
  );
}
