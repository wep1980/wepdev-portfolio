import { FooterV3 } from "@/componentes/home/v3/FooterV3";
import { HeroV3 } from "@/componentes/home/v3/HeroV3";
import { ProjectsV3 } from "@/componentes/home/v3/ProjectsV3";
import { SecaoCurriculoV3 } from "@/componentes/home/v3/SecaoCurriculoV3";
import { SecaoEducacaoV3 } from "@/componentes/home/v3/SecaoEducacaoV3";
import { SecaoEstudosContinuosV3 } from "@/componentes/home/v3/SecaoEstudosContinuosV3";
import { SecaoHobbiesV3 } from "@/componentes/home/v3/SecaoHobbiesV3";
import { SecaoSobreV3 } from "@/componentes/home/v3/SecaoSobreV3";
import { StackV3 } from "@/componentes/home/v3/StackV3";
import { TimelineV3 } from "@/componentes/home/v3/TimelineV3";
import { Container } from "@/componentes/ui/Container";

export function HomeV3() {
  return (
    <>
      <Container className="pt-8 sm:pt-10">
        <div className="rounded-3xl border border-border bg-surface/60 p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[21rem_minmax(0,1fr)]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <HeroV3 />
            </div>

            <div className="flex flex-col gap-16 sm:gap-20">
              <SecaoSobreV3 />
              <TimelineV3 />
              <ProjectsV3 />
              <SecaoCurriculoV3 />
              <SecaoEducacaoV3 />
              <StackV3 />
              <SecaoEstudosContinuosV3 />
              <SecaoHobbiesV3 />
            </div>
          </div>
        </div>
      </Container>
      <FooterV3 />
    </>
  );
}
