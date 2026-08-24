export type EstudoContinuo = {
  readonly id: string;
  readonly titulo: string;
  readonly instituicao: string;
  readonly ano: string;
  readonly logoSrc?: string;
  readonly logoCorFundo?: string;
  readonly url?: string;
};

const logosPorInstituicao: Record<string, { logoSrc: string; logoCorFundo: string; url: string }> = {
  "Full Cycle": {
    logoSrc: "/logos/full-cycle.jpg",
    logoCorFundo: "#050C12",
    url: "https://fullcycle.com.br/",
  },
  AlgaWorks: {
    logoSrc: "/logos/algaworks.jpg",
    logoCorFundo: "#011C39",
    url: "https://www.algaworks.com/",
  },
  DevSuperior: {
    logoSrc: "/logos/devsuperior.jpg",
    logoCorFundo: "#000000",
    url: "https://devsuperior.com.br/",
  },
};

function comLogo(estudo: Omit<EstudoContinuo, "logoSrc" | "logoCorFundo" | "url">): EstudoContinuo {
  const dados = logosPorInstituicao[estudo.instituicao];

  return dados ? { ...estudo, ...dados } : estudo;
}

export const estudosContinuos: readonly EstudoContinuo[] = [
  comLogo({ id: "fullcycle-4", titulo: "FullCycle 4.0", instituicao: "Full Cycle", ano: "2025" }),
  comLogo({
    id: "especialista-microsservicos",
    titulo: "Especialista em Microsserviços",
    instituicao: "AlgaWorks",
    ano: "2025",
  }),
  comLogo({
    id: "java-spring-expert",
    titulo: "Java Spring Expert",
    instituicao: "DevSuperior",
    ano: "2023",
  }),
  comLogo({ id: "fullcycle-3", titulo: "FullCycle 3.0", instituicao: "Full Cycle", ano: "2023" }),
  comLogo({
    id: "especialista-jpa",
    titulo: "Especialista JPA",
    instituicao: "AlgaWorks",
    ano: "2022",
  }),
  comLogo({
    id: "especialista-spring-rest",
    titulo: "Especialista Spring REST",
    instituicao: "AlgaWorks",
    ano: "2022",
  }),
  comLogo({
    id: "trilhas-spring-react",
    titulo: "Trilhas Spring React",
    instituicao: "DevSuperior",
    ano: "2021",
  }),
];
