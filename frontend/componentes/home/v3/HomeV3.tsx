import { ContactV3 } from "@/componentes/home/v3/ContactV3";
import { FooterV3 } from "@/componentes/home/v3/FooterV3";
import { HeroV3 } from "@/componentes/home/v3/HeroV3";
import { ProjectsV3 } from "@/componentes/home/v3/ProjectsV3";
import { StackV3 } from "@/componentes/home/v3/StackV3";
import { TimelineV3 } from "@/componentes/home/v3/TimelineV3";

export function HomeV3() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <HeroV3 />
      <TimelineV3 />
      <ProjectsV3 />
      <StackV3 />
      <ContactV3 />
      <FooterV3 />
    </div>
  );
}
