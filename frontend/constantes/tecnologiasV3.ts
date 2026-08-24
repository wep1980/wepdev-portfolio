import type { GrupoTecnologias } from "@/constantes/tecnologias";

export const gruposTecnologiasV3: readonly GrupoTecnologias[] = [
  {
    id: "linguagens",
    label: "Linguagens de Programação",
    titulo: "Linguagens",
    itens: ["Java", "JavaScript", "TypeScript"],
  },
  {
    id: "backend-frameworks",
    label: "Backend & Frameworks",
    titulo: "Backend & Frameworks",
    itens: ["Spring Boot", "Quarkus", "Jakarta EE"],
    destaques: ["Spring Boot", "Quarkus"],
  },
  {
    id: "frontend",
    label: "Frontend",
    titulo: "Frontend",
    itens: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    titulo: "Mobile",
    itens: ["React Native"],
  },
  {
    id: "databases",
    label: "Databases",
    titulo: "Databases",
    itens: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "MySQL", "Oracle", "SQL Server"],
  },
  {
    id: "mensageria",
    label: "Mensageria",
    titulo: "Mensageria",
    itens: ["RabbitMQ", "Apache Kafka"],
  },
  {
    id: "devops-cloud",
    label: "DevOps & Cloud",
    titulo: "DevOps & Cloud",
    itens: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Helm",
      "Jenkins",
      "SonarQube",
    ],
  },
  {
    id: "ia-aplicada",
    label: "IA Aplicada",
    titulo: "IA Aplicada",
    itens: ["OpenAI", "Ollama", "Spring AI", "RAG"],
  },
  {
    id: "qualidade-testes",
    label: "Qualidade & Testes",
    titulo: "Qualidade & Testes",
    itens: ["JUnit", "Mockito", "Testcontainers", "JaCoCo", "Playwright"],
  },
];
