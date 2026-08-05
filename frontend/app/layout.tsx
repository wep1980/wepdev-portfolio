import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cabecalho } from "@/componentes/layout/Cabecalho";
import { Rodape } from "@/componentes/layout/Rodape";
import "./globals.css";

const fontePrincipal = Geist({
  variable: "--fonte-principal",
  subsets: ["latin"],
});

const fonteCodigo = Geist_Mono({
  variable: "--fonte-codigo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Waldir Escouto Pereira | Desenvolvedor Java Sênior",
    template: "%s | WEPDEV Portfolio",
  },
  description:
    "Portfólio profissional de Waldir Escouto Pereira, Desenvolvedor Java Sênior com experiência em backend enterprise, Spring Boot, Quarkus, microsserviços, arquitetura de software e Inteligência Artificial aplicada à Engenharia de Software.",
  authors: [
    {
      name: "Waldir Escouto Pereira",
    },
  ],
  creator: "Waldir Escouto Pereira",
  keywords: [
    "Waldir Escouto Pereira",
    "Desenvolvedor Java Sênior",
    "Java Backend",
    "Spring Boot",
    "Quarkus",
    "Microsserviços",
    "Arquitetura de Software",
    "Sistemas Distribuídos",
    "Apache Kafka",
    "Docker",
    "Kubernetes",
    "Inteligência Artificial",
    "Engenharia de Software",
  ],
};

export default function LayoutRaiz({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fontePrincipal.variable} ${fonteCodigo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
