import Image from "next/image";
import Link from "next/link";
import { Container } from "@/componentes/ui/Container";

export function NavbarV3({ basePath = "" }: { basePath?: string }) {
  return (
    <header className="mt-3 sm:mt-5">
      <Container>
        <div className="flex min-h-16 transform items-center rounded-full bg-header px-3 py-1.5 text-header-foreground shadow-[5px_23px_91px_39px_rgba(27,25,30,0.19)] transition-transform duration-300 hover:scale-105 sm:min-h-[4.25rem] sm:px-4">
          <Link
            href={`${basePath}#inicio`}
            aria-label="Waldir Escouto Pereira — ir para o início"
            className="inline-flex min-w-0 items-center gap-2.5 rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="relative size-10 shrink-0 transform overflow-hidden rounded-full ring-1 ring-white/15 transition-transform duration-300 hover:scale-110 sm:size-11">
              <Image
                src="/eu-pixelado.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </span>
            <span
              className="efeito-maquina-escrever text-sm font-semibold text-white/90 sm:text-base"
            >
              Bem-vindo(a) ao portfólio de Waldir Escouto Pereira 😄
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
