import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { urlSiteOficial } from "@/constantes/site";
import "./globals.css";

const fontePrincipal = IBM_Plex_Sans({
  variable: "--fonte-principal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fonteCodigo = JetBrains_Mono({
  variable: "--fonte-codigo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(urlSiteOficial),
  applicationName: "WEPDEV Portfolio",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "WEPDEV",
    statusBarStyle: "black-translucent",
  },
  title: {
    default: "Waldir Escouto Pereira | Desenvolvedor Java Full Stack Sênior",
    template: "%s | WEPDEV Portfolio",
  },
  description:
    "Portfólio profissional de Waldir Escouto Pereira, desenvolvedor Java Full Stack sênior com experiência em backend, microsserviços, integrações, arquitetura, DevOps e Inteligência Artificial aplicada à Engenharia de Software.",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${urlSiteOficial}/`,
    siteName: "WEPDEV Portfolio",
    title: "Waldir Escouto Pereira | Desenvolvedor Java Full Stack Sênior",
    description:
      "Portfólio profissional de Waldir Escouto Pereira, desenvolvedor Java Full Stack sênior com experiência em backend, microsserviços, integrações, arquitetura, DevOps e Inteligência Artificial aplicada à Engenharia de Software.",
  },
  twitter: {
    card: "summary",
    title: "Waldir Escouto Pereira | Desenvolvedor Java Full Stack Sênior",
    description:
      "Portfólio profissional de Waldir Escouto Pereira, desenvolvedor Java Full Stack sênior com experiência em backend, microsserviços, integrações, arquitetura, DevOps e Inteligência Artificial aplicada à Engenharia de Software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f1",
  colorScheme: "light",
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
        {children}
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
