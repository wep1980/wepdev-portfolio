import Image from "next/image";
import { FileDown, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavegacaoLateralV3 } from "@/componentes/home/v3/NavegacaoLateralV3";
import { IconeWhatsApp } from "@/componentes/ui/IconeWhatsApp";
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

const iconePorCanal = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: Mail,
  whatsapp: IconeWhatsApp,
} as const;

function IconeSocial({
  tipo,
  rotulo,
  href,
}: {
  tipo: keyof typeof iconePorCanal;
  rotulo: string;
  href: string;
}) {
  const Icone = iconePorCanal[tipo];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotulo}
      title={rotulo}
      {...atributosCanalProfissionalAnalytics(tipo, locaisAnalytics.hero)}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground outline-none transition duration-200 active:translate-y-px hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Icone className="size-[1.05rem]" aria-hidden="true" />
    </a>
  );
}

export function HeroV3() {
  const curriculo = obterCanalProfissional("curriculo");
  const linkedin = obterCanalProfissional("linkedin");
  const github = obterCanalProfissional("github");
  const email = obterCanalProfissional("email");
  const whatsapp = obterCanalProfissional("whatsapp");

  return (
    <div id="inicio" className="scroll-mt-28">
      <span className="relative block size-48 shrink-0 transform overflow-hidden rounded-full transition-transform duration-300 lg:size-56 lg:hover:scale-105">
        <Image
          src="/waldir.jpg"
          alt={`Foto de ${nomeProfissional}`}
          fill
          sizes="(min-width: 1024px) 224px, 192px"
          priority
          className="object-cover object-[center_25%]"
        />
      </span>

      <h1 className="mt-6 text-2xl font-bold leading-tight text-foreground sm:text-[1.75rem]">
        {nomeProfissional}
      </h1>
      <p className="mt-1 text-base font-medium text-muted">{cargoProfissional}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <IconeSocial tipo="linkedin" rotulo="LinkedIn" href={linkedin.href} />
        <IconeSocial tipo="github" rotulo="GitHub" href={github.href} />
        <IconeSocial tipo="email" rotulo="E-mail" href={email.href} />
        <IconeSocial tipo="whatsapp" rotulo="WhatsApp" href={whatsapp.href} />

        <a
          href={curriculo.href}
          download
          aria-label="Baixar currículo de Waldir Escouto Pereira em PDF"
          title="Baixar currículo (PDF)"
          {...atributosCurriculoAnalytics(locaisAnalytics.hero)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary outline-none transition duration-200 active:translate-y-px hover:-translate-y-0.5 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <FileDown className="size-[1.05rem]" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
        <MapPin className="size-4 text-accent-verde" aria-hidden="true" />
        {localizacaoPublica}
      </p>

      <NavegacaoLateralV3 />
    </div>
  );
}
