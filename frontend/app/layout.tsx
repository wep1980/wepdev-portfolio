import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Cabecalho } from "@/componentes/layout/Cabecalho";
import { Rodape } from "@/componentes/layout/Rodape";
import { urlSiteOficial } from "@/constantes/site";
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
  metadataBase: new URL(urlSiteOficial),
  applicationName: "WEPDEV Portfolio",
  title: {
    default: "Waldir Escouto Pereira | Desenvolvedor Java Sênior",
    template: "%s | WEPDEV Portfolio",
  },
  description:
    "Portfólio profissional de Waldir Escouto Pereira, desenvolvedor Java sênior com experiência em backend, microsserviços, integrações, arquitetura, DevOps e Inteligência Artificial aplicada à Engenharia de Software.",
  authors: [
    {
      name: "Waldir Escouto Pereira",
      url: urlSiteOficial,
    },
  ],
  creator: "Waldir Escouto Pereira",
  publisher: "Waldir Escouto Pereira",
  category: "technology",
  keywords: [
    "Waldir Escouto Pereira",
    "desenvolvedor Java",
    "Java sênior",
    "backend",
    "Spring Boot",
    "Quarkus",
    "microsserviços",
    "Kafka",
    "Docker",
    "Kubernetes",
    "arquitetura de software",
    "inteligência artificial",
    "OpenAI",
    "Ollama",
  ],
  alternates: {
    canonical: `${urlSiteOficial}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Script
          src="https://analytics.wepdev.com.br/script.js"
          data-website-id="79867cd5-31c2-4a41-8c7f-f69507a2e9af"
          data-performance="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
