import type { GrupoTecnologias } from "@/constantes/tecnologias";

export const gruposTecnologiasV3: readonly GrupoTecnologias[] = [
  {
    id: "backend-enterprise",
    label: "01 / BACKEND",
    titulo: "Backend Enterprise",
    descricao:
      "Construção e evolução de aplicações Java, APIs e serviços para contextos corporativos.",
    itens: ["Java", "Java 21", "Spring Boot", "Quarkus", "Jakarta EE"],
  },
  {
    id: "frontend-moderno",
    label: "02 / FRONTEND",
    titulo: "Frontend Moderno",
    descricao:
      "Interfaces web responsivas que conectam experiências de produto a serviços backend robustos.",
    itens: ["React", "Next.js", "Angular", "TypeScript", "Tailwind"],
  },
  {
    id: "cloud",
    label: "03 / CLOUD",
    titulo: "Cloud",
    descricao:
      "Execução e operação de aplicações em ambientes containerizados e plataformas cloud.",
    itens: ["Docker", "Kubernetes", "OpenShift", "AWS", "Azure", "Helm"],
  },
  {
    id: "arquitetura",
    label: "04 / ARQUITETURA",
    titulo: "Arquitetura",
    descricao:
      "Decisões estruturais, contratos e integrações para sistemas que precisam evoluir com clareza.",
    itens: ["APIs REST", "OpenAPI", "Arquitetura Hexagonal"],
  },
  {
    id: "inteligencia-artificial",
    label: "05 / IA APLICADA",
    titulo: "Inteligência Artificial",
    descricao:
      "Aplicação de IA à pesquisa, documentação e desenvolvimento com julgamento técnico.",
    itens: ["OpenAI", "Ollama", "Spring AI", "RAG"],
  },
  {
    id: "devops",
    label: "06 / DEVOPS",
    titulo: "DevOps",
    descricao:
      "Práticas de qualidade, automação e entrega para sustentar uma evolução segura.",
    itens: ["JUnit", "Mockito", "Testcontainers", "SonarQube", "JaCoCo", "CI/CD"],
  },
];
