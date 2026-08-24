import { SectionHeader } from "@/componentes/shared/SectionHeader";

export function SecaoSobreV3() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre-v3" className="scroll-mt-28">
      <SectionHeader label="Sobre" titulo="Quem sou eu" headingId="titulo-sobre-v3" />
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
        <p>
          Sou{" "}
          <strong className="font-semibold text-foreground">
            Engenheiro de Software com foco em Inteligência Artificial aplicada ao
            desenvolvimento de software
          </strong>
          , com mais de 8 anos de experiência como{" "}
          <strong className="font-semibold text-foreground">Desenvolvedor Java Full Stack</strong>,
          atuando na construção e evolução de aplicações, APIs REST, microsserviços e sistemas
          distribuídos.
        </p>
        <p>
          Atualmente, integro Inteligência Artificial ao ciclo de desenvolvimento utilizando
          uma abordagem <strong className="font-semibold text-foreground">spec-driven</strong>,
          na qual requisitos, regras de negócio, arquitetura e critérios de qualidade são
          estruturados antes da implementação. Utilizo IA como apoio na análise de requisitos,
          arquitetura, desenvolvimento e evolução de código, criação de testes, refatoração,
          documentação e investigação de problemas, aumentando significativamente minha
          produtividade e velocidade de entrega.
        </p>
        <p>
          Minha experiência com{" "}
          <strong className="font-semibold text-foreground">
            Java, Spring Boot, Quarkus, microsserviços, mensageria, bancos de dados, cloud e
            DevOps
          </strong>{" "}
          é a base para revisar e validar tecnicamente tudo o que é produzido com auxílio de IA.
          Aplico práticas como{" "}
          <strong className="font-semibold text-foreground">
            Clean Code, SOLID e padrões de projeto
          </strong>
          , além de avaliar arquitetura, segurança, performance, testabilidade e aderência às
          regras de negócio.
        </p>
        <p>
          Também utilizo ferramentas de qualidade como{" "}
          <strong className="font-semibold text-foreground">SonarQube</strong> para complementar
          esse processo. Enxergo a IA como uma ferramenta de engenharia capaz de potencializar
          o desenvolvedor, mantendo as{" "}
          <strong className="font-semibold text-foreground">
            decisões arquiteturais, revisão técnica e responsabilidade pela qualidade do
            software sob supervisão humana
          </strong>
          .
        </p>
      </div>
    </section>
  );
}
