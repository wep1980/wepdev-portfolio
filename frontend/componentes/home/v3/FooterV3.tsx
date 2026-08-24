import Image from "next/image";
import { Container } from "@/componentes/ui/Container";
import {
  atributosCanalProfissionalAnalytics,
  atributosCurriculoAnalytics,
  locaisAnalytics,
} from "@/constantes/analytics";
import {
  cargoProfissional,
  localizacaoPublica,
  nomeProfissional,
  obterCanalProfissional,
} from "@/constantes/contatos";

const classeLinkRodape =
  "inline-flex items-center py-0.5 transition duration-200 active:translate-y-px hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const linksNavegacaoRodape = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#experiencia", rotulo: "Experiência" },
  { href: "#projetos", rotulo: "Projetos" },
  { href: "#curriculo", rotulo: "Currículo" },
  { href: "#educacao", rotulo: "Educação" },
  { href: "#tecnologias", rotulo: "Tecnologias" },
  { href: "#estudos", rotulo: "Estudos" },
  { href: "#hobbies", rotulo: "Hobbies" },
] as const;

export function FooterV3({ basePath = "" }: { basePath?: string }) {
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const curriculo = obterCanalProfissional("curriculo");
  const whatsapp = obterCanalProfissional("whatsapp");

  return (
    <footer aria-label="Rodapé" className="mt-6 pb-10">
      <Container>
        <div className="rounded-xl bg-header px-6 py-5 text-header-foreground sm:px-8 sm:py-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="flex items-center gap-3">
              <span className="relative block size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image src="/eu-pixelado.png" alt="" fill sizes="44px" className="object-cover" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{nomeProfissional}</p>
                <p className="text-xs text-white/60">{cargoProfissional}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-5 sm:gap-x-14">
              <nav aria-label="Navegação do rodapé">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#ffb877]">
                  Navegação
                </p>
                <ul className="mt-2.5 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-white/70">
                  {linksNavegacaoRodape.map((link) => (
                    <li key={link.href}>
                      <a href={`${basePath}${link.href}`} className={classeLinkRodape}>
                        {link.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#ffb877]">
                  Canais
                </p>
                <ul className="mt-2.5 flex flex-col items-start gap-1.5 text-sm text-white/70">
                  <li><a href={whatsapp.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("whatsapp", "footer")} className={classeLinkRodape}>WhatsApp</a></li>
                  <li><a href={linkedin.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("linkedin", "footer")} className={classeLinkRodape}>LinkedIn</a></li>
                  <li><a href={github.href} target="_blank" rel="noopener noreferrer" {...atributosCanalProfissionalAnalytics("github", "footer")} className={classeLinkRodape}>GitHub</a></li>
                  <li><a href={curriculo.href} download {...atributosCurriculoAnalytics(locaisAnalytics.rodape)} className={classeLinkRodape}>Currículo</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1.5 border-t border-white/10 pt-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {nomeProfissional}</span>
            <span>{localizacaoPublica}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
