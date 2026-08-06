import Link from "next/link";
import { Container } from "@/componentes/ui/Container";

export default function ProjetoNaoEncontrado() {
  return (
    <main>
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Projeto não encontrado</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">Este projeto não está disponível.</h1>
        <Link href="/#projetos" className="mt-8 inline-flex min-h-11 items-center border-b border-primary py-1 text-sm font-semibold text-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Voltar para os projetos</Link>
      </Container>
    </main>
  );
}
