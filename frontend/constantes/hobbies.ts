export type FotoHobby = {
  readonly src: string;
  readonly legenda: string;
  readonly w: number;
  readonly h: number;
};

export type CategoriaHobby = {
  readonly id: string;
  readonly titulo: string;
  readonly thumbnail: string;
  readonly descricao: string;
  readonly fotos: readonly FotoHobby[];
};

export const categoriasHobbies: readonly CategoriaHobby[] = [
  {
    id: "ciclismo",
    titulo: "Ciclismo",
    thumbnail: "/hobbies/bike/foto-principal.jpg",
    descricao:
      "Pedalar é o hobby que mais me tira da tela: uso o ciclismo para desconectar, manter a disciplina física e recarregar a energia que levo de volta para o trabalho de engenharia no dia seguinte.",
    fotos: [
      { src: "/hobbies/bike/foto-principal.jpg", legenda: "Chegada da prova IronBiker", w: 1151, h: 1154 },
      { src: "/hobbies/bike/iron-biker2.jpg", legenda: "Prova IronBiker", w: 1400, h: 933 },
      { src: "/hobbies/bike/altos-pedais1.jpg", legenda: "Grupo Altos Pedais no Cristo Redentor", w: 1152, h: 1152 },
      { src: "/hobbies/bike/altos-pedais2.jpg", legenda: "Pedal em grupo", w: 853, h: 1066 },
      { src: "/hobbies/bike/caminho-da-fe.jpg", legenda: "Caminho da Fé", w: 1400, h: 1867 },
      { src: "/hobbies/bike/prova-desafio-rural-sp1.jpg", legenda: "Desafio Rural SP", w: 1400, h: 2100 },
      { src: "/hobbies/bike/prova-desafio-rural-sp2.jpg", legenda: "Desafio Rural SP", w: 1400, h: 2100 },
      { src: "/hobbies/bike/sp2.jpg", legenda: "Treino em São Paulo", w: 973, h: 1218 },
    ],
  },
  {
    id: "lado-nerd",
    titulo: "Meu lado nerd",
    thumbnail: "/hobbies/nerd/foto-principal2.jpg",
    descricao:
      "Cultura pop, cinema e super-heróis também fazem parte da minha rotina: um bom motivo para sair da tela do código e visitar exposições assim.",
    fotos: [
      { src: "/hobbies/nerd/foto-principal2.jpg", legenda: "Exposição 85 anos do Batman", w: 1400, h: 788 },
      { src: "/hobbies/nerd/foto-principal3.jpg", legenda: "Bat-computador", w: 1400, h: 788 },
      { src: "/hobbies/nerd/foto-principal.jpg", legenda: "Traje da Robin", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto2.jpg", legenda: "Arsenal do Batman", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto3.jpg", legenda: "Bat-moto", w: 1400, h: 788 },
      { src: "/hobbies/nerd/foto4.jpg", legenda: "Traje do Batman", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto5.jpg", legenda: "Traje do Batman", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto6.jpg", legenda: "Traje do Superman", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto7.jpg", legenda: "Traje do Aquaman", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto8.jpg", legenda: "Traje do Ciborgue", w: 1400, h: 2487 },
      { src: "/hobbies/nerd/foto9.jpg", legenda: "Traje do Flash", w: 1400, h: 2487 },
    ],
  },
  {
    id: "meu-time",
    titulo: "Meu time do coração",
    thumbnail: "/hobbies/meu-time-do-coracao/foto-principal.jpg",
    descricao:
      "Botafogo é paixão de família: vai ao Maracanã quem quer, mas em casa ninguém escapa do jogo.",
    fotos: [
      { src: "/hobbies/meu-time-do-coracao/foto-principal.jpg", legenda: "Dia de jogo no Maracanã", w: 1400, h: 2489 },
      { src: "/hobbies/meu-time-do-coracao/botafogo2.jpg", legenda: "Torcendo pelo Glorioso", w: 971, h: 1220 },
      { src: "/hobbies/meu-time-do-coracao/botafogo3.jpg", legenda: "Show de fogos no Nilton Santos", w: 795, h: 448 },
    ],
  },
] as const;
