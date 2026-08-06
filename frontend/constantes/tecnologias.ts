export type GrupoTecnologias = {
  readonly id: string;
  readonly label: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly itens: readonly string[];
};

export const gruposTecnologias: readonly GrupoTecnologias[] = [
  {
    id: "backend-enterprise",
    label: "01 / FUNDAMENTOS DE BACKEND",
    titulo: "Backend Enterprise",
    descricao:
      "Construção e evolução de aplicações Java para contextos corporativos.",
    itens: ["Java", "Java 21", "Spring Boot", "Quarkus", "Jakarta EE"],
  },
  {
    id: "arquitetura",
    label: "02 / DESIGN DE SISTEMAS",
    titulo: "Arquitetura",
    descricao:
      "Contratos claros e decisões estruturais para sistemas que precisam evoluir.",
    itens: ["APIs REST", "OpenAPI", "Arquitetura Hexagonal"],
  },
  {
    id: "microsservicos",
    label: "03 / SISTEMAS DISTRIBUÍDOS",
    titulo: "Microsserviços",
    descricao:
      "Serviços independentes, comunicação assíncrona e dados distribuídos.",
    itens: [
      "Microsserviços",
      "Apache Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "devops",
    label: "04 / QUALIDADE E ENTREGA",
    titulo: "DevOps",
    descricao:
      "Práticas para testar, automatizar e sustentar uma evolução segura.",
    itens: ["JUnit", "Mockito", "Testcontainers", "SonarQube", "JaCoCo", "CI/CD"],
  },
  {
    id: "cloud",
    label: "05 / EXECUÇÃO E OPERAÇÃO",
    titulo: "Cloud",
    descricao:
      "Empacotamento, entrega e operação de aplicações em ambientes modernos.",
    itens: ["Docker", "Kubernetes", "OpenShift", "AWS", "Azure", "Helm"],
  },
  {
    id: "inteligencia-artificial",
    label: "06 / PESQUISA E EVOLUÇÃO",
    titulo: "Inteligência Artificial",
    descricao:
      "IA aplicada à pesquisa, documentação e desenvolvimento com julgamento técnico.",
    itens: ["OpenAI", "Ollama", "Spring AI", "RAG"],
  },
];
