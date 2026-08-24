import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import {
  SiAngular,
  SiApachekafka,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiHelm,
  SiJavascript,
  SiJenkins,
  SiJunit5,
  SiKeycloak,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOllama,
  SiPostgresql,
  SiQdrant,
  SiQuarkus,
  SiRabbitmq,
  SiReact,
  SiRedhatopenshift,
  SiRedis,
  SiSonarqubeserver,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAzure, TbBrandOpenai } from "react-icons/tb";

const iconesPorTecnologia: Record<string, IconType> = {
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Spring Boot": SiSpringboot,
  Quarkus: SiQuarkus,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Qdrant: SiQdrant,
  MySQL: SiMysql,
  "SQL Server": DiMsqlServer,
  RabbitMQ: SiRabbitmq,
  "Apache Kafka": SiApachekafka,
  AWS: FaAws,
  Azure: TbBrandAzure,
  GCP: SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  OpenShift: SiRedhatopenshift,
  Helm: SiHelm,
  Jenkins: SiJenkins,
  SonarQube: SiSonarqubeserver,
  OpenAI: TbBrandOpenai,
  Ollama: SiOllama,
  "Spring AI": SiSpring,
  JUnit: SiJunit5,
  Keycloak: SiKeycloak,
  "GitHub Actions": SiGithubactions,
};

// Cores oficiais de marca (fonte: simple-icons, ou brand guideline oficial quando a tecnologia não consta lá).
const coresPorTecnologia: Record<string, string> = {
  Java: "#F89820",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "Spring Boot": "#6DB33F",
  Quarkus: "#4695EB",
  React: "#61DAFB",
  "React Native": "#61DAFB",
  "Next.js": "#000000",
  Angular: "#0F0F11",
  "Tailwind CSS": "#06B6D4",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Redis: "#FF4438",
  Qdrant: "#DC244C",
  MySQL: "#4479A1",
  "SQL Server": "#CC2927",
  RabbitMQ: "#FF6600",
  "Apache Kafka": "#231F20",
  AWS: "#FF9900",
  Azure: "#0078D4",
  GCP: "#4285F4",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  OpenShift: "#EE0000",
  Helm: "#0F1689",
  Jenkins: "#D24939",
  SonarQube: "#126ED3",
  OpenAI: "#412991",
  Ollama: "#000000",
  "Spring AI": "#6DB33F",
  JUnit: "#25A162",
  Keycloak: "#4D4D4D",
  "GitHub Actions": "#2088FF",
};

export function IconeTecnologia({
  tecnologia,
  className = "size-5",
}: {
  tecnologia: string;
  className?: string;
}) {
  const Icone = iconesPorTecnologia[tecnologia];
  const cor = coresPorTecnologia[tecnologia];

  if (Icone) {
    return <Icone aria-hidden="true" className={className} style={cor ? { color: cor } : undefined} />;
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-sm border border-border bg-surface font-mono text-[0.6rem] font-semibold text-subtle ${className}`}
    >
      {tecnologia.slice(0, 2).toUpperCase()}
    </span>
  );
}
