import type { CanalProfissional } from "@/dominio/contato/CanalProfissional";

export const nomeProfissional = "Waldir Escouto Pereira";
export const cargoProfissional = "Desenvolvedor Java Sênior";
export const emailProfissional = "wepcienciadacomputacao@gmail.com";
export const localizacaoPublica = "Rio de Janeiro, Brasil";
export const urlCurriculo = "/waldir_escouto_pereira_cv.pdf";

export const canaisProfissionais: readonly CanalProfissional[] = [
  {
    id: "linkedin",
    nome: "Acessar LinkedIn",
    descricao: "Canal preferencial para contatos profissionais",
    href: "https://www.linkedin.com/in/wepdev/",
    externo: true,
    principal: true,
    tipo: "linkedin",
    eventoAnalitico: "Contato - LinkedIn",
  },
  {
    id: "email",
    nome: "Enviar e-mail",
    descricao: emailProfissional,
    href: `mailto:${emailProfissional}`,
    externo: false,
    tipo: "email",
    eventoAnalitico: "Contato - Email",
  },
  {
    id: "github",
    nome: "Acessar GitHub",
    descricao: "Projetos, código e evolução técnica",
    href: "https://github.com/wep1980",
    externo: true,
    tipo: "github",
    eventoAnalitico: "Contato - GitHub",
  },
  {
    id: "curriculo",
    nome: "Acessar currículo",
    descricao: "Currículo profissional em PDF",
    href: urlCurriculo,
    externo: true,
    tipo: "curriculo",
    eventoAnalitico: "Contato - Curriculo",
  },
];

export function obterCanalProfissional(
  tipo: CanalProfissional["tipo"],
): CanalProfissional {
  const canal = canaisProfissionais.find((item) => item.tipo === tipo);

  if (!canal) {
    throw new Error(`Canal profissional não cadastrado: ${tipo}`);
  }

  return canal;
}
