import { SectionHeader } from "@/componentes/shared/SectionHeader";
import { Container } from "@/componentes/ui/Container";
import { IconeWhatsApp } from "@/componentes/ui/IconeWhatsApp";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
} from "@/constantes/analytics";
import { obterCanalProfissional } from "@/constantes/contatos";

export function ContactV3() {
  const whatsapp = obterCanalProfissional("whatsapp");
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const curriculo = obterCanalProfissional("curriculo");

  return (
    <section id="contato" aria-labelledby="titulo-contato-v3">
      <Container>
        <SectionHeader
          label="Contato"
          titulo="Vamos conversar sobre tecnologia e oportunidades?"
          descricao="Estou disponível para conversar sobre backend Java, arquitetura, sistemas distribuídos e Inteligência Artificial aplicada à Engenharia de Software."
          headingId="titulo-contato-v3"
        />
        <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          {...atributosCanalProfissionalAnalytics("whatsapp", "contact")}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground outline-none transition duration-200 active:translate-y-px hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <IconeWhatsApp className="size-5" />
          WhatsApp
        </a>
        <a
          href={linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          {...atributosCanalProfissionalAnalytics("linkedin", "contact")}
          className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          LinkedIn
        </a>
        <a
          href={github.href}
          target="_blank"
          rel="noopener noreferrer"
          {...atributosCanalProfissionalAnalytics("github", "contact")}
          className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          GitHub
        </a>
        <a
          href={curriculo.href}
          target="_blank"
          rel="noopener noreferrer"
          {...atributosCurriculoAnalytics("contact")}
          className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Currículo
        </a>
        </div>
      </Container>
    </section>
  );
}
