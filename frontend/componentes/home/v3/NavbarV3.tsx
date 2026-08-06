import { Container } from "@/componentes/ui/Container";
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

function IconeConversaV3() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-primary">
      <path d="M6.8 18.2 4 20l.8-3.2A8 8 0 1 1 12 20a8.7 8.7 0 0 1-5.2-1.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M9.2 8.9c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.5.9 1.2 1.6 2.2 2.1l.5-.5c.2-.2.5-.2.7-.1l1.3.6c.3.1.4.3.4.6v.6c0 .3-.2.6-.5.7-.5.2-1 .3-1.5.2-2.9-.4-5.2-2.6-5.7-5.5-.1-.5 0-.9.2-1.3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function LinkNavegacaoV3({
  href,
  rotulo,
  secao,
}: (typeof linksNavegacaoV3)[number]) {
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

export function NavbarV3() {
  const whatsapp = obterCanalProfissional("whatsapp");

  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          aria-label="WEPDev — Ir para o início"
          className="inline-flex min-h-12 shrink-0 items-center rounded-md font-mono text-[1.2rem] font-black leading-none tracking-[0.05em] text-foreground outline-none transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-[1.4rem]"
        >
          <span aria-hidden="true" className="text-muted">&lt;</span>
          <span aria-hidden="true">WEP</span>
          <span aria-hidden="true" className="text-primary">Dev</span>
          <span aria-hidden="true" className="text-muted">/&gt;</span>
        </a>

        <nav aria-label="Navegação da Home V3" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {linksNavegacaoV3.map((link) => <li key={link.href}><LinkNavegacaoV3 {...link} /></li>)}
          </ul>
        </nav>

        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar Waldir no WhatsApp"
          {...atributosWhatsappHeader}
          className="hidden min-h-12 shrink-0 items-center justify-center gap-3 rounded-md border border-border bg-surface px-5 text-sm font-bold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:inline-flex"
        >
          <IconeConversaV3 />
          <span className="whitespace-nowrap">Chamar no WhatsApp</span>
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-12 cursor-pointer list-none items-center gap-3 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="size-2 rotate-45 border-b-2 border-r-2 border-primary transition group-open:[transform:rotate(-135deg)]" />
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2.5rem))] overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-md">
            <nav aria-label="Navegação da Home V3 mobile">
              <ul className="p-2.5">
                {linksNavegacaoV3.map((link) => (
                  <li key={link.href}><LinkNavegacaoV3 {...link} /></li>
                ))}
                <li className="mt-2 border-t border-border/80 pt-2">
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chamar Waldir no WhatsApp"
                    {...atributosWhatsappHeader}
                    className="flex min-h-12 items-center justify-center gap-3 rounded-md border border-border bg-surface px-4 text-sm font-bold text-foreground outline-none transition duration-200 active:translate-y-px hover:border-primary hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <IconeConversaV3 />
                    Chamar no WhatsApp
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
