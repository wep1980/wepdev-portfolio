import { nomeProfissional, localizacaoPublica } from "@/constantes/contatos";
import { urlSiteOficial } from "@/constantes/site";

// Dados estruturados (schema.org/Person) para buscadores. Só informações já públicas no site.
export const dadosEstruturadosPessoa = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: nomeProfissional,
  jobTitle: "Engenheiro de Software Sênior (Java)",
  url: urlSiteOficial,
  image: `${urlSiteOficial}/waldir.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: localizacaoPublica.split(",")[0],
    addressCountry: "BR",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Centro Universitário UniCarioca" },
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Quarkus",
    "Microsserviços",
    "Apache Kafka",
    "Kubernetes",
    "AWS",
    "Inteligência Artificial aplicada ao desenvolvimento",
  ],
  sameAs: ["https://www.linkedin.com/in/wepdev/", "https://github.com/wep1980"],
} as const;
