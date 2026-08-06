import type { CanalProfissional } from "@/dominio/contato/CanalProfissional";

export const nomeProfissional = "Waldir Escouto Pereira";
export const cargoProfissional = "Desenvolvedor Java Sênior";
export const emailProfissional = "wepcienciadacomputacao@gmail.com";
export const localizacaoPublica = "Rio de Janeiro, Brasil";
export const urlCurriculo = "/waldir_escouto_pereira_cv.pdf";
export const telefoneWhatsapp = "5521990561880";
export const mensagemInicialWhatsapp =
  "Olá, Waldir! Conheci seu trabalho pelo portfólio WEPDEV e gostaria de conversar sobre uma oportunidade profissional.";
export const urlWhatsapp = `https://wa.me/${telefoneWhatsapp}?text=${encodeURIComponent(
  mensagemInicialWhatsapp,
)}`;

export const canaisProfissionais: readonly CanalProfissional[] = [
  {
    id: "linkedin",
    nome: "Acessar LinkedIn",
    descricao: "Canal preferencial para contatos profissionais",
    href: "https://www.linkedin.com/in/wepdev/",
    externo: true,
    principal: true,
    tipo: "linkedin",
  },
  {
    id: "email",
    nome: "Enviar e-mail",
    descricao: emailProfissional,
    href: `mailto:${emailProfissional}`,
    externo: false,
    tipo: "email",
  },
  {
    id: "whatsapp",
    nome: "WhatsApp",
    acao: "Iniciar conversa",
    descricao: "Fale comigo diretamente pelo WhatsApp.",
    href: urlWhatsapp,
    externo: true,
    tipo: "whatsapp",
    exibirNoRodape: false,
  },
  {
    id: "github",
    nome: "Acessar GitHub",
    descricao: "Projetos, código e evolução técnica",
    href: "https://github.com/wep1980",
    externo: true,
    tipo: "github",
  },
  {
    id: "curriculo",
    nome: "Acessar currículo",
    descricao: "Currículo profissional em PDF",
    href: urlCurriculo,
    externo: true,
    tipo: "curriculo",
  },
];

export const canaisProfissionaisRodape: readonly CanalProfissional[] =
  canaisProfissionais.filter((canal) => canal.exibirNoRodape !== false);

export function obterCanalProfissional(
  tipo: CanalProfissional["tipo"],
): CanalProfissional {
  const canal = canaisProfissionais.find((item) => item.tipo === tipo);

  if (!canal) {
    throw new Error(`Canal profissional não cadastrado: ${tipo}`);
  }

  return canal;
}
