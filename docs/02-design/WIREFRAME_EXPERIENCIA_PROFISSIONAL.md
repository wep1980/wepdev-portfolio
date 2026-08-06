# Wireframe — Experiência Profissional

## 1. Objetivo

Definir a experiência de uso da seção **Experiência Profissional** do WEPDEV Portfolio antes da implementação.

A seção deve contar uma história de evolução profissional em engenharia de software. O foco está no impacto, no contexto e nas entregas, não na quantidade de tecnologias listadas. A leitura precisa ser rápida para recrutadores e aprofundável para perfis técnicos.

Este documento descreve conteúdo, hierarquia e comportamento responsivo. Não define JSX, CSS, Tailwind ou detalhes de implementação.

## 2. Narrativa da Seção

A narrativa parte da atuação mais recente e percorre a evolução profissional em ordem cronológica reversa:

1. apresentar o momento profissional atual;
2. explicar brevemente a contribuição e o contexto de cada etapa;
3. permitir aprofundamento sob demanda;
4. evidenciar a progressão de responsabilidade, escopo e maturidade técnica;
5. encerrar com uma visão coerente da trajetória.

O visitante deve entender primeiro **onde Waldir atua hoje**, depois **como chegou até esse ponto**. A seção não deve parecer uma lista de cargos isolados nem um inventário de ferramentas.

## 3. Fluxo de Leitura

O fluxo recomendado é:

1. **Abertura editorial:** label, título e uma frase curta sobre evolução profissional.
2. **Experiência atual:** Grupo Casas Bahia, com maior prioridade visual.
3. **Experiências anteriores:** Matera, 200DEV, CBYK Consultoria, Atos, BlendIt e Plennus TI.
4. **Resumo de cada etapa:** cargo, empresa, período e contribuição principal.
5. **Aprofundamento opcional:** detalhes de atuação acessíveis por expansão.

O leitor deve conseguir identificar empresa, cargo e período em uma varredura rápida. A expansão é uma segunda camada de leitura, destinada a quem deseja compreender responsabilidades e contexto técnico.

## 4. Wireframe Desktop — 1440px

Composição editorial ampla, sem timeline estreita e sem um card pesado para cada experiência. A linha vertical, se utilizada, deve ser apenas um apoio discreto à sequência cronológica.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ EXPERIÊNCIA                                                                  │
│ Evolução profissional em engenharia de software                             │
│ Uma trajetória construída em diferentes contextos de backend e sistemas.    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ 01  Grupo Casas Bahia                                      jan 2026 — atual │
│     Engenheiro de Software Sênior                                           │
│     Resumo curto da atuação e do impacto profissional.                       │
│     Contexto ou contribuição principal em uma frase.                         │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 02  Matera                                             fev 2025 — jan 2026  │
│     Desenvolvedor Full Stack                                                 │
│     Resumo curto da atuação e do impacto profissional.                       │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 03  200DEV                                             abr 2024 — jan 2025  │
│     Desenvolvedor Web/Java                                                    │
│     Resumo curto da atuação e do impacto profissional.                       │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 04  CBYK Consultoria                                   jan 2024 — abr 2024  │
│     Desenvolvedor Web/Java                                                    │
│     Resumo curto da atuação e do impacto profissional.                       │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 05  Atos                                               jul 2022 — jan 2024  │
│     Desenvolvedor Web/Java                                                    │
│     Resumo curto da atuação e do impacto profissional.                       │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 06  BlendIt                                            fev 2022 — jul 2022  │
│     Desenvolvedor Full Stack                                                  │
│     Resumo curto da atuação e do impacto profissional.                       │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ 07  Plennus TI                                         jan 2019 — fev 2022  │
│     Desenvolvedor Full Stack                                                  │
│     Resumo curto da atuação e do impacto profissional.                       │
│     [ Ver detalhes da atuação ▾ ]                                            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Comportamento desktop

- O número e o período funcionam como âncoras visuais de escaneamento.
- Empresa e cargo formam o núcleo de cada registro.
- O resumo ocupa poucas linhas e não compete com a identificação.
- Tecnologias podem aparecer em uma linha textual compacta, somente quando ajudarem a explicar a atuação.
- Os detalhes permanecem fechados inicialmente.
- A experiência atual pode receber maior respiro ou uma marca editorial sutil, sem transformar a seção em um painel.

## 5. Wireframe Tablet — 768px

No tablet, a estrutura continua em uma coluna larga. O período permanece próximo do cabeçalho da experiência, mas pode passar para uma linha própria para preservar legibilidade.

```text
┌──────────────────────────────────────────────┐
│ EXPERIÊNCIA                                  │
│ Evolução profissional em engenharia          │
│ de software                                  │
│ Resumo curto da trajetória.                  │
├──────────────────────────────────────────────┤
│ 01                                             │
│ Grupo Casas Bahia                              │
│ Engenheiro de Software Sênior                 │
│ jan 2026 — atual                               │
│ Resumo da atuação e contribuição principal.   │
│ [ Ver detalhes da atuação ▾ ]                 │
├──────────────────────────────────────────────┤
│ 02                                             │
│ Matera                                         │
│ Desenvolvedor Full Stack                       │
│ fev 2025 — jan 2026                            │
│ Resumo da atuação e contribuição principal.   │
│ [ Ver detalhes da atuação ▾ ]                 │
├──────────────────────────────────────────────┤
│ 03  200DEV                                     │
│     Desenvolvedor Web/Java                     │
│     abr 2024 — jan 2025                        │
│     Resumo curto.                              │
│     [ Ver detalhes da atuação ▾ ]             │
├──────────────────────────────────────────────┤
│ 04  CBYK Consultoria                            │
│     Desenvolvedor Web/Java                     │
│     jan 2024 — abr 2024                        │
│     Resumo curto.                              │
│     [ Ver detalhes da atuação ▾ ]             │
├──────────────────────────────────────────────┤
│ 05  Atos                                       │
│     Desenvolvedor Web/Java                     │
│     jul 2022 — jan 2024                        │
│     Resumo curto.                              │
│     [ Ver detalhes da atuação ▾ ]             │
├──────────────────────────────────────────────┤
│ 06  BlendIt                                    │
│     Desenvolvedor Full Stack                   │
│     fev 2022 — jul 2022                        │
│     Resumo curto.                              │
│     [ Ver detalhes da atuação ▾ ]             │
├──────────────────────────────────────────────┤
│ 07  Plennus TI                                 │
│     Desenvolvedor Full Stack                   │
│     jan 2019 — fev 2022                        │
│     Resumo curto.                              │
│     [ Ver detalhes da atuação ▾ ]             │
└──────────────────────────────────────────────┘
```

### Comportamento tablet

- Reduzir o espaço lateral, mantendo um container confortável para leitura.
- Evitar duas colunas estreitas para os registros.
- Permitir que o período ocupe uma linha própria sem perder a associação com empresa e cargo.
- Manter separadores discretos e áreas de respiro entre as experiências.

## 6. Wireframe Mobile — 390px

No mobile, cada experiência deve ser lida como uma sequência vertical simples. O número permanece visível, mas não deve criar uma coluna estreita que comprima o conteúdo.

```text
┌──────────────────────────────┐
│ EXPERIÊNCIA                  │
│ Evolução profissional em     │
│ engenharia de software      │
│ Resumo curto da trajetória.  │
├──────────────────────────────┤
│ 01                           │
│ Grupo Casas Bahia            │
│ Engenheiro de Software       │
│ Sênior                       │
│ jan 2026 — atual             │
│ Resumo curto da atuação.     │
│ [Ver detalhes da atuação ▾]  │
├──────────────────────────────┤
│ 02                           │
│ Matera                       │
│ Desenvolvedor Full Stack     │
│ fev 2025 — jan 2026          │
│ Resumo curto da atuação.     │
│ [Ver detalhes da atuação ▾]  │
├──────────────────────────────┤
│ 03                           │
│ 200DEV                       │
│ Desenvolvedor Web/Java       │
│ abr 2024 — jan 2025          │
│ Resumo curto da atuação.     │
│ [Ver detalhes da atuação ▾]  │
├──────────────────────────────┤
│ 04  CBYK Consultoria         │
│     Desenvolvedor Web/Java   │
│     jan 2024 — abr 2024      │
│     Resumo curto.            │
│     [Ver detalhes ▾]         │
├──────────────────────────────┤
│ 05  Atos                    │
│     Desenvolvedor Web/Java   │
│     jul 2022 — jan 2024      │
│     Resumo curto.            │
│     [Ver detalhes ▾]         │
├──────────────────────────────┤
│ 06  BlendIt                 │
│     Desenvolvedor Full Stack │
│     fev 2022 — jul 2022      │
│     Resumo curto.            │
│     [Ver detalhes ▾]         │
├──────────────────────────────┤
│ 07  Plennus TI              │
│     Desenvolvedor Full Stack │
│     jan 2019 — fev 2022      │
│     Resumo curto.            │
│     [Ver detalhes ▾]         │
└──────────────────────────────┘
```

### Comportamento mobile

- O conteúdo textual vem antes de qualquer detalhe secundário.
- Empresa, cargo e período devem ser identificáveis sem abrir a expansão.
- O resumo deve ser curto o suficiente para não criar uma parede de texto.
- A expansão deve ocupar a largura disponível e não deslocar lateralmente o conteúdo.
- O espaçamento vertical deve separar as experiências sem criar cartões pesados.
- Não ocultar experiências anteriores; elas são parte da narrativa completa.

## 7. Organização Cronológica

Usar ordem cronológica reversa, da experiência atual para a mais antiga:

| Ordem | Empresa | Cargo | Período |
| --- | --- | --- | --- |
| 01 | Grupo Casas Bahia | Engenheiro de Software Sênior | janeiro de 2026 — atual |
| 02 | Matera | Desenvolvedor Full Stack | fevereiro de 2025 — janeiro de 2026 |
| 03 | 200DEV | Desenvolvedor Web/Java | abril de 2024 — janeiro de 2025 |
| 04 | CBYK Consultoria | Desenvolvedor Web/Java | janeiro de 2024 — abril de 2024 |
| 05 | Atos | Desenvolvedor Web/Java | julho de 2022 — janeiro de 2024 |
| 06 | BlendIt | Desenvolvedor Full Stack | fevereiro de 2022 — julho de 2022 |
| 07 | Plennus TI | Desenvolvedor Full Stack | janeiro de 2019 — fevereiro de 2022 |

O período atual deve ser identificado por texto explícito como “atual”. Não depender apenas de cor, posição ou um marcador visual.

## 8. Hierarquia Visual

1. **Título da seção:** introduz a trajetória e orienta a leitura.
2. **Empresa:** principal identificador de cada etapa.
3. **Cargo:** esclarece a responsabilidade exercida.
4. **Período:** permite entender a sequência temporal.
5. **Resumo:** comunica impacto e contexto em poucas linhas.
6. **Detalhes:** camada opcional para aprofundamento técnico.
7. **Tecnologias:** evidências auxiliares, nunca o foco dominante.

Usar a tipografia e os tokens semânticos definidos no Design System. O laranja deve ser reservado para pequenos acentos, foco ou indicação editorial; não deve colorir blocos inteiros nem ser o único meio de comunicar a experiência atual.

## 9. Expansão dos Detalhes

Cada experiência deve iniciar com um resumo curto. Os detalhes devem ser acessíveis sob demanda por um controle semântico equivalente a `details/summary`, fechado por padrão.

### Estado fechado

- exibe empresa, cargo, período e resumo;
- mostra um rótulo claro, como “Ver detalhes da atuação”;
- não apresenta uma lista extensa de atividades;
- não altera a navegação da página.

### Estado aberto

- revela atividades, responsabilidades e contexto já confirmados no domínio;
- mantém a associação visual com a experiência correspondente;
- permite fechar novamente pelo mesmo controle;
- não deve exigir JavaScript imperativo nem criar um evento analítico novo.

Os detalhes não devem conter métricas inventadas, informações confidenciais, nomes de clientes não públicos, credenciais, código proprietário ou tecnologias não confirmadas.

## 10. Princípios de UX

- **Narrativa antes do inventário:** a sequência deve explicar evolução profissional.
- **Escaneabilidade:** recrutadores identificam rapidamente empresa, cargo e período.
- **Profundidade progressiva:** o resumo atende a leitura rápida; a expansão atende ao perfil técnico.
- **Impacto antes da tecnologia:** entregas e responsabilidades vêm antes da lista de ferramentas.
- **Uma coluna de leitura:** evitar timeline estreita e cards aninhados.
- **Comparação simples:** manter estrutura semelhante entre experiências sem torná-las visualmente pesadas.
- **Veracidade:** usar somente dados profissionais existentes e públicos.
- **Acessibilidade nativa:** priorizar HTML semântico e funcionamento sem JavaScript.
- **Ritmo editorial:** usar separadores e respiro, não excesso de bordas, chips ou efeitos.
- **Sem gamificação:** não usar barras de progresso, estrelas, porcentagens, níveis ou rankings.

## 11. Conteúdo e Comportamento Preservados

- Os sete registros profissionais existentes devem permanecer disponíveis.
- Textos e fatos devem ser derivados do domínio atual, sem novas afirmações.
- O conteúdo profissional da seção Sobre não deve ser duplicado integralmente.
- A navegação existente para a âncora da seção deve continuar funcionando.
- Os eventos analíticos já existentes devem ser preservados; não criar evento para abrir ou fechar detalhes.
- SEO, metadata e estrutura global permanecem fora deste wireframe.

## 12. Critérios de Aceite

- A seção comunica uma evolução profissional, não apenas uma lista de empregos.
- Grupo Casas Bahia aparece primeiro como experiência atual.
- As sete experiências reais aparecem na ordem cronológica reversa correta.
- Cada registro mostra inicialmente empresa, cargo, período e resumo curto.
- Os detalhes ficam fechados e podem ser expandidos por teclado e toque.
- Impacto e contexto recebem mais destaque que a quantidade de tecnologias.
- Desktop, tablet e mobile possuem os três wireframes definidos neste documento.
- A composição evita timeline estreita, excesso de cards e cards dentro de cards.
- O status “atual” é textual e não depende somente de cor.
- Não há conteúdo inventado, métricas não confirmadas ou links fictícios.
- Contraste, foco visível, ordem de headings e leitura por teclado são preservados.
- Não são criados novos eventos analíticos nem alterações de SEO.

## 13. Definition of Done

A seção estará pronta quando:

- a estrutura implementada corresponder ao fluxo deste wireframe;
- as sete experiências forem renderizadas em ordem cronológica reversa;
- a experiência atual tiver prioridade visual sem apagar as anteriores;
- resumos curtos estiverem disponíveis antes de qualquer expansão;
- detalhes estiverem acessíveis sob demanda e fechados por padrão;
- a leitura for validada em 390px, 768px e 1440px sem overflow horizontal;
- a navegação por teclado e o foco visível forem verificados;
- o conteúdo for conferido contra o domínio profissional existente;
- eventos, SEO e demais seções permanecerem inalterados;
- lint, build e validações do projeto passarem na sprint de implementação;
- a documentação da seção permanecer atualizada junto com a entrega.
