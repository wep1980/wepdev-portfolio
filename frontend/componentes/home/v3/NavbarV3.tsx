import { LogoWEPDev } from "@/componentes/marca/LogoWEPDev";
import { Container } from "@/componentes/ui/Container";
import { IconeWhatsApp } from "@/componentes/ui/IconeWhatsApp";
import {
  atributosNavegacaoAnalytics,
  eventosAnalytics,
  locaisAnalytics,
  secoesAnalytics,
} from "@/constantes/analytics";
import { obterCanalProfissional } from "@/constantes/contatos";

const linksNavegacaoV3 = [
  { href: "#inicio", rotulo: "Início", secao: secoesAnalytics.inicio },
  { href: "#experiencia", rotulo: "Experiência", secao: secoesAnalytics.experiencia },
  { href: "#projetos", rotulo: "Projetos", secao: secoesAnalytics.projetos },
  { href: "#tecnologias", rotulo: "Tecnologias", secao: secoesAnalytics.tecnologias },
  { href: "#contato", rotulo: "Contato", secao: secoesAnalytics.contato },
] as const;

const atributosWhatsappHeader = {
  "data-umami-event": eventosAnalytics.whatsapp,
  "data-umami-event-location": locaisAnalytics.cabecalho,
} as const;

function LinkNavegacaoV3({
  href,
  rotulo,
  secao,
}: Omit<(typeof linksNavegacaoV3)[number], "href"> & { href: string }) {
  return (
    <a
      href={href}
      {...atributosNavegacaoAnalytics(secao, locaisAnalytics.cabecalho)}
      className="relative inline-flex min-h-11 items-center rounded-sm px-0.5 text-sm font-semibold text-muted outline-none transition duration-200 active:translate-y-px hover:text-foreground after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary focus-visible:after:scale-x-100"
    >
      {rotulo}
    </a>
  );
}

export function NavbarV3({ basePath = "" }: { basePath?: string }) {
  const whatsapp = obterCanalProfissional("whatsapp");
  const links = linksNavegacaoV3.map((link) => ({
    ...link,
    href: `${basePath}${link.href}`,
  }));

  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a
          href={`${basePath}#inicio`}
          aria-label="WEPDev — Ir para o início"
          className="inline-flex min-h-12 shrink-0 items-center rounded-md font-mono text-[1.2rem] font-semibold leading-none tracking-[-0.01em] text-foreground outline-none transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-[1.4rem]"
        >
          <LogoWEPDev />
        </a>

        <nav aria-label="Navegação da Home V3" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => <li key={link.href}><LinkNavegacaoV3 {...link} /></li>)}
          </ul>
        </nav>

        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar Waldir no WhatsApp"
          {...atributosWhatsappHeader}
          className="hidden min-h-12 shrink-0 items-center gap-3 rounded-full border border-border bg-surface/80 py-1.5 pl-2 pr-5 text-sm font-bold text-foreground outline-none transition duration-200 active:translate-y-px hover:-translate-y-0.5 hover:border-accent-verde/50 hover:bg-surface-hover hover:shadow-glow-subtle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:inline-flex"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-accent-verde/15 text-accent-verde">
            <IconeWhatsApp className="size-4" />
          </span>
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-12 cursor-pointer list-none items-center gap-3 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="size-2 rotate-45 border-b-2 border-r-2 border-primary transition group-open:[transform:rotate(-135deg)]" />
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2.5rem))] overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-md">
            <nav aria-label="Navegação da Home V3 mobile">
              <ul className="p-2.5">
                {links.map((link) => (
                  <li key={link.href}><LinkNavegacaoV3 {...link} /></li>
                ))}
                <li className="mt-2 border-t border-border/80 pt-2">
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chamar Waldir no WhatsApp"
                    {...atributosWhatsappHeader}
                    className="flex min-h-12 items-center gap-3 rounded-full border border-border bg-surface/80 py-1.5 pl-2 pr-4 text-sm font-bold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-accent-verde/50 hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-accent-verde/15 text-accent-verde">
                      <IconeWhatsApp className="size-4" />
                    </span>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
