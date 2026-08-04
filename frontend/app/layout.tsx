import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "WEPDEV Portfolio | Waldir Escouto Pereira",
    template: "%s | WEPDEV Portfolio",
  },
  description:
    "Portfólio profissional de Waldir Escouto Pereira, Desenvolvedor Java Sênior especializado em Java, Spring Boot, Quarkus, microsserviços e arquitetura de software.",
  authors: [
    {
      name: "Waldir Escouto Pereira",
    },
  ],
  creator: "Waldir Escouto Pereira",
  keywords: [
    "Waldir Escouto Pereira",
    "Desenvolvedor Java Sênior",
    "Java",
    "Spring Boot",
    "Quarkus",
    "Microsserviços",
    "Arquitetura de Software",
    "Backend",
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
