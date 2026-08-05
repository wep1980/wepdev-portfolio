import { CanalProfissionalCard } from "@/componentes/contato/CanalProfissionalCard";
import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";
import {
  canaisProfissionais,
  localizacaoPublica,
} from "@/constantes/contatos";

export function SecaoContato() {
  return (
    <Secao
      id="contato"
      aria-labelledby="titulo-contato"
      className="py-12 sm:py-16"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Contato
            </p>
            <h2
              id="titulo-contato"
              className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Vamos conversar sobre tecnologia e oportunidades
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Estou disponível para conversar sobre oportunidades em
              desenvolvimento Java Backend, sistemas empresariais,
              microsserviços, arquitetura de software e Inteligência Artificial
              aplicada à Engenharia de Software.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              O LinkedIn é o canal preferencial para contatos profissionais.
              Você também pode consultar meus projetos e minha evolução técnica
              no GitHub ou acessar meu currículo em PDF.
            </p>

            <dl className="mt-7 grid gap-4 rounded-lg border border-border bg-background-secondary/68 p-5">
              <div>
                <dt className="font-mono text-[0.68rem] font-semibold uppercase text-subtle">
                  Localização
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {localizacaoPublica}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] font-semibold uppercase text-subtle">
                  Disponibilidade
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  Disponível para novas oportunidades profissionais
                </dd>
              </div>
            </dl>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2"
            aria-label="Canais profissionais"
          >
            {canaisProfissionais.map((canal) => (
              <CanalProfissionalCard key={canal.id} canal={canal} />
            ))}
          </div>
        </div>
      </Container>
    </Secao>
  );
}
