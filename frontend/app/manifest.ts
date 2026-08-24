import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEPDEV Portfolio",
    short_name: "WEPDEV",
    description:
      "Portfólio profissional de Waldir Escouto Pereira, Desenvolvedor Java Full Stack Sênior.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f5f1",
    theme_color: "#f7f5f1",
    lang: "pt-BR",
    icons: [
      {
        src: "/icons/wepdev-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/wepdev-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/wepdev-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
