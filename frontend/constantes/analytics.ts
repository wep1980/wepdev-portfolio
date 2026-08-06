import type { TipoCanalProfissional } from "@/dominio/contato/CanalProfissional";

export const eventosAnalytics = {
  navegacao: "navigation-click",
  linkedin: "linkedin-click",
  github: "github-click",
  email: "email-click",
  whatsapp: "whatsapp-click",
  curriculo: "curriculum-click",
  repositorioProjeto: "project-repository-click",
  ctaPrimario: "primary-cta-click",
} as const;

export const locaisAnalytics = {
  cabecalho: "header",
  hero: "hero",
  contato: "contact",
  rodape: "footer",
  projetos: "projects",
} as const;

export const secoesAnalytics = {
  inicio: "home",
  tecnologias: "technologies",
  sobre: "about",
  experiencia: "experience",
  projetos: "projects",
  contato: "contact",
} as const;

export const acoesAnalytics = {
  abrir: "open",
  verProjetos: "view-projects",
} as const;

type TipoCanalProfissionalComEvento = Exclude<
  TipoCanalProfissional,
  "curriculo"
>;

const eventosPorCanalProfissional: Readonly<
  Record<TipoCanalProfissionalComEvento, EventoAnalytics>
> = {
  linkedin: eventosAnalytics.linkedin,
  github: eventosAnalytics.github,
  email: eventosAnalytics.email,
  whatsapp: eventosAnalytics.whatsapp,
} as const;

export type EventoAnalytics =
  (typeof eventosAnalytics)[keyof typeof eventosAnalytics];

export type LocalAnalytics =
  (typeof locaisAnalytics)[keyof typeof locaisAnalytics];

export type SecaoAnalytics =
  (typeof secoesAnalytics)[keyof typeof secoesAnalytics];

export type AcaoAnalytics =
  (typeof acoesAnalytics)[keyof typeof acoesAnalytics];

export function atributosNavegacaoAnalytics(
  section: SecaoAnalytics,
  location: Extract<LocalAnalytics, "header" | "hero" | "footer">,
) {
  return {
    "data-umami-event": eventosAnalytics.navegacao,
    "data-umami-event-section": section,
    "data-umami-event-location": location,
  } as const;
}

export function atributosCanalProfissionalAnalytics(
  tipo: TipoCanalProfissionalComEvento,
  location: Extract<LocalAnalytics, "hero" | "contact" | "footer">,
) {
  return {
    "data-umami-event": eventosPorCanalProfissional[tipo],
    "data-umami-event-location": location,
  } as const;
}

export function atributosCurriculoAnalytics(
  location: Extract<LocalAnalytics, "hero" | "contact" | "footer">,
) {
  return {
    "data-umami-event": eventosAnalytics.curriculo,
    "data-umami-event-action": acoesAnalytics.abrir,
    "data-umami-event-location": location,
  } as const;
}

export function atributosRepositorioProjetoAnalytics(
  project: string,
  projectStatus: string,
) {
  return {
    "data-umami-event": eventosAnalytics.repositorioProjeto,
    "data-umami-event-project": project,
    "data-umami-event-project-status": projectStatus,
    "data-umami-event-location": locaisAnalytics.projetos,
  } as const;
}

export function atributosCtaPrimarioAnalytics() {
  return {
    "data-umami-event": eventosAnalytics.ctaPrimario,
    "data-umami-event-action": acoesAnalytics.verProjetos,
    "data-umami-event-location": locaisAnalytics.hero,
  } as const;
}
