import type { EstadoProjeto } from "@/dominio/projeto/EstadoProjeto";
import type { TipoProjeto } from "@/dominio/projeto/TipoProjeto";

export type Projeto = {
  id: string;
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  problema?: string;
  solucao?: string;
  tecnologias: readonly string[];
  conceitos: readonly string[];
  estado: EstadoProjeto;
  tipo: TipoProjeto;
  repositorioUrl?: string;
  detalhesUrl?: string;
  destaque: boolean;
  chamadaPrincipal: string;
  chamadaSecundaria?: string;
  tecnologiasPlanejadas?: boolean;
  conceitosPlanejados?: boolean;
};
