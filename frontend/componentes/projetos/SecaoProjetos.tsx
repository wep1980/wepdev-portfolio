import { CardProjeto } from "@/componentes/projetos/CardProjeto";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";
import { projetosEmDestaque } from "@/constantes/projetos";

export function SecaoProjetos() {
  const [projetoPrincipal, ...projetosSecundarios] = projetosEmDestaque;

  return (
    <Secao
      id="projetos"
      aria-labelledby="titulo-projetos"
      className="py-12 sm:py-16"
    >
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Evidências técnicas
          </p>
          <h2
            id="titulo-projetos"
            className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          >
            Projetos em destaque
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Produtos, laboratórios e estudos de caso que demonstram como aplico
            arquitetura, desenvolvimento backend, qualidade de software e
            Inteligência Artificial.
          </p>
        </div>

        <div className="grid gap-5">
          {projetoPrincipal ? (
            <CardProjeto projeto={projetoPrincipal} prioritario />
          ) : null}

          <div className="grid gap-5 lg:grid-cols-2">
            {projetosSecundarios.map((projeto) => (
              <CardProjeto key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </Container>
    </Secao>
  );
}
