"use client";

import { useSecaoAtiva } from "@/componentes/home/v3/hooks/useSecaoAtiva";
import { atributosNavegacaoAnalytics, locaisAnalytics, secoesAnalytics } from "@/constantes/analytics";

const colunaEsquerda = [
  { href: "#sobre", id: "sobre", rotulo: "Sobre", secao: secoesAnalytics.sobre },
  { href: "#experiencia", id: "experiencia", rotulo: "Experiência", secao: secoesAnalytics.experiencia },
  { href: "#projetos", id: "projetos", rotulo: "Projetos", secao: secoesAnalytics.projetos },
  { href: "#curriculo", id: "curriculo", rotulo: "Currículo", secao: secoesAnalytics.curriculo },
] as const;

const colunaDireita = [
  { href: "#educacao", id: "educacao", rotulo: "Educação", secao: secoesAnalytics.educacao },
  { href: "#tecnologias", id: "tecnologias", rotulo: "Tecnologias", secao: secoesAnalytics.tecnologias },
  { href: "#estudos", id: "estudos", rotulo: "Estudos", secao: secoesAnalytics.estudos },
  { href: "#hobbies", id: "hobbies", rotulo: "Hobbies", secao: secoesAnalytics.hobbies },
] as const;

const todosOsLinks = [...colunaEsquerda, ...colunaDireita];

function ListaLinks({ links, secaoAtiva }: { links: typeof colunaEsquerda | typeof colunaDireita; secaoAtiva: string | null }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => {
        const ativo = secaoAtiva === link.id;

        return (
          <li key={link.id}>
            <a
              href={link.href}
              aria-current={ativo ? "true" : undefined}
              {...atributosNavegacaoAnalytics(link.secao, locaisAnalytics.hero)}
              className={[
                "group inline-flex min-h-8 items-center gap-3 text-sm outline-none focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                ativo ? "font-semibold text-foreground" : "font-medium text-muted hover:text-foreground",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className={[
                  "h-0.5 rounded-full transition-all",
                  ativo ? "w-12 bg-primary" : "w-5 bg-subtle group-hover:w-12 group-hover:bg-foreground",
                ].join(" ")}
              />
              {link.rotulo}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function NavegacaoLateralV3() {
  const secaoAtiva = useSecaoAtiva(todosOsLinks.map((link) => link.id));

  return (
    <nav aria-label="Navegação principal" className="mt-6 grid grid-cols-2 gap-x-6">
      <ListaLinks links={colunaEsquerda} secaoAtiva={secaoAtiva} />
      <ListaLinks links={colunaDireita} secaoAtiva={secaoAtiva} />
    </nav>
  );
}
