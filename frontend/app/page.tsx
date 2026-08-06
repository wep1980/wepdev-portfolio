import { HomeV3 } from "@/componentes/home/v3/HomeV3";
import { NavbarV3 } from "@/componentes/home/v3/NavbarV3";

export default function PaginaInicial() {
  return (
    <>
      <NavbarV3 />
      <main className="flex-1" aria-label="Home WEPDEV">
        <HomeV3 />
      </main>
    </>
  );
}
