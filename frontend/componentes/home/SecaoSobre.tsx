import { Container } from "@/componentes/ui/Container";
import { Secao } from "@/componentes/ui/Secao";

export function SecaoSobre() {
  return (
    <Secao id="sobre" aria-labelledby="titulo-sobre" className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Sobre
            </p>
            <h2
              id="titulo-sobre"
              className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Engenharia backend para produtos que precisam evoluir com
              consistência.
            </h2>
          </div>

          <div className="rounded-lg border border-primary/18 bg-surface/70 p-6 shadow-[0_18px_60px_rgb(0_0_0_/_18%)] sm:p-8">
            <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Minha atuação é centrada no desenvolvimento Java para ambientes
                corporativos, conectando backend enterprise, APIs, integrações,
                microsserviços e decisões de arquitetura que sustentam a
                evolução de sistemas no longo prazo.
              </p>

              <p>
                Trabalho tanto com sistemas legados quanto com aplicações
                modernas, usando Java, Spring Boot, Quarkus, APIs REST,
                mensageria, bancos de dados, containers e Kubernetes para
                construir soluções mais previsíveis, observáveis e preparadas
                para mudança.
              </p>

              <p>
                Também venho direcionando minha evolução técnica para
                Inteligência Artificial aplicada à Engenharia de Software,
                explorando integração de aplicações Java com modelos
                generativos, OpenAI, Ollama, RAG e automação de processos de
                desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Secao>
  );
}
