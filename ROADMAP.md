# ROADMAP — Telessaúde Guaraí / Conversa Clara

**Atualizado em:** 19/10/2026  
**Branch de referência:** `main`  
**Status geral:** protótipo demonstrativo implementado; validação técnica, definição metodológica e etapas institucionais continuam em andamento.

Este documento consolida as pendências técnicas, acadêmicas e de pesquisa. Os estados refletem o que está documentado no repositório; uma tarefa não é considerada concluída apenas porque foi planejada.

## Como interpretar os estados

- [x] Concluído e documentado ou implementado no repositório.
- [ ] Pendente, precisa de execução ou evidência de conclusão.
- **Bloqueado por aprovação:** não executar até que a orientação e as instâncias institucionais/éticas confirmem os requisitos aplicáveis.
- **Não verificável por inspeção estática:** requer teste em navegador/dispositivo, medição ou evidência externa.

## Resumo de prioridades

| Prioridade | Frente | Resultado esperado |
|---|---|---|
| P0 | Pesquisa e método | Pergunta, revisão bibliográfica, protocolo e critérios de análise definidos e revisados. |
| P0 | Ética e articulação institucional | Viabilidade do cenário e autorizações aplicáveis esclarecidas antes de qualquer atividade com participantes. |
| P1 | Qualidade do protótipo | Contraste corrigido e comportamento verificado em navegador, telas menores, teclado e tecnologia assistiva. |
| P1 | Requisitos e avaliação | Requisitos rastreáveis e coerência entre escopo, funcionalidades e método de avaliação. |
| P2 | Engenharia e entrega | Testes automatizados proporcionais ao projeto, documentação final e estratégia de publicação decidida. |

## Acompanhamento das pendências no GitHub

- [#1 — Busca bibliográfica reproduzível nas bases oficiais](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/1)
- [#2 — Testes manuais de acessibilidade](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/2)
- [#3 — Protocolo de avaliação e autorizações aplicáveis](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/3)
- [#4 — Viabilidade do cenário com a Secretaria de Saúde de Guaraí](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/4)

---


## Fase 0 — Base já estabelecida

- [x] Delimitar a primeira versão como protótipo web simples, sem integração com prontuários, IA, diagnóstico ou prescrição.
- [x] Implementar as três etapas demonstrativas: preparar, entender orientações e próximos passos.
- [x] Usar conteúdo fictício e informar que o produto não se destina ao uso assistencial.
- [x] Implementar interações locais, mensagens de feedback e reinicialização da sessão.
- [x] Registrar uma revisão estática do HTML, CSS e JavaScript.
- [x] Documentar a estratégia de parceria, o protocolo preliminar, a matriz de evidências e as limitações.
- [x] Consolidar as tarefas remanescentes neste roadmap.
- [x] Registrar a busca web exploratória complementar e seus limites em `docs/registro-busca-exploratoria-2026-10-19.md`; buscas diretas nas interfaces oficiais ainda pendentes.
- [x] Elaborar revisão rápida focalizada de evidências e recomendações para o produto em `docs/revisao-rapida-evidencias-e-recomendacoes.md` (19/10/2026); a busca bibliográfica formal nas bases planejadas continua pendente.
- [x] Corrigir a cor do indicador de foco no CSS para uma opção de maior contraste; contraste calculado para `#005fcc`: 5,98:1 sobre branco e 5,57:1 sobre o fundo `#f4f7fb`. A medição sistemática dos demais elementos e a validação prática continuam pendentes.

## Fase 1 — Revisão bibliográfica e alinhamento acadêmico (P0)

- [ ] Executar as estratégias diretamente nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO.
- [ ] Registrar, para cada base, a data, a estratégia efetivamente executada, os filtros, o total recuperado e o arquivo exportado.
- [ ] Deduplicar os resultados e registrar decisões de inclusão/exclusão com motivo.
- [ ] Examinar os textos integrais pertinentes e avaliar criticamente as evidências de acordo com o tipo de estudo.
- [ ] Atualizar `docs/busca-bibliografica-estruturada.md` e `docs/matriz-evidencias-requisitos.md` com resultados reproduzíveis.
- [ ] Conferir referências bibliográficas, DOI, metadados e adequação das afirmações aos estudos.
- [ ] Discutir com a orientação a pergunta, os objetivos, a linha de pesquisa, os instrumentos e a viabilidade dentro do prazo.
- [ ] Conferir o edital e o modelo oficial vigentes da UERJ, incluindo extensão, formato e campos que ainda são rascunho.

**Critério de saída:** buscas e decisões de seleção documentadas de forma reprodutível; anteprojeto coerente com o método aprovado pela orientação. Não chamar a revisão de sistemática concluída antes de executar e registrar o processo previsto.

## Fase 2 — Cenário, parceria e requisitos éticos (P0)

- [ ] Fazer contato exploratório com a Secretaria Municipal de Saúde de Guaraí.
- [ ] Confirmar se há fluxo/unidade de telessaúde adequado e quais atores participam.
- [ ] Avaliar viabilidade de recrutamento, recursos, conectividade, tempo das equipes e uso de dispositivos.
- [ ] Documentar responsabilidades, autorizações e eventuais acordos institucionais necessários.
- [ ] Definir com a orientação e a instituição quais aprovações éticas e procedimentos são aplicáveis ao desenho final.
- [ ] Preparar, quando aplicável, roteiro de entrevista, convite, consentimento, critérios de elegibilidade e plano de gerenciamento de dados.
- [ ] Se o serviço real não for viável, propor formalmente o plano alternativo com tarefas simuladas e conteúdo fictício; explicitar os limites da inferência.
- [ ] Não realizar recrutamento, entrevistas, testes de pesquisa ou coleta com participantes antes das aprovações aplicáveis.

**Critério de saída:** cenário e alternativa metodológica documentados, responsabilidades claras e aprovações pertinentes verificadas. Aprovação institucional e aprovação ética, quando aplicáveis, não devem ser tratadas como equivalentes.

## Fase 3 — Correções técnicas e acessibilidade (P1)

- [x] Corrigir a cor de foco padrão de âmbar claro para azul mais escuro em `produto/styles.css`.
- [x] Executar a suíte Playwright e axe-core no GitHub Actions: 15 testes passaram no run [39355695848](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39355695848), incluindo os três estados da interface, fluxos principais, movimento reduzido e cinco larguras de viewport.
- [x] Corrigir rótulos acessíveis da escala após o axe-core detectar divergência entre o nome dos botões 1/5 e seu texto visível; resultado registrado em `docs/relatorio-revisao-tecnica.md`.
- [ ] Medir e registrar contraste dos textos, controles, bordas relevantes, feedbacks e foco com ferramenta apropriada.
- [ ] Percorrer todos os controles com Tab e Shift+Tab; ativar botões com Enter e Espaço; registrar ordem e visibilidade do foco.
- [ ] Confirmar que a troca de etapa move o foco ao título correto e que o feedback `aria-live` é percebido.
- [ ] Testar com pelo menos uma combinação real de navegador e leitor de tela disponível (por exemplo, Firefox/NVDA ou Android/TalkBack).
- [ ] Verificar em 320, 360, 390, 768 e 1280 pixels CSS e zoom de 200%, registrando corte, sobreposição e rolagem horizontal inesperada.
- [ ] Repetir os fluxos com preferência de movimento reduzido ativada.
- [ ] Validar a reinicialização completa: checklist, rádio, mensagens, nota, atributos `aria-pressed`, painel ativo e foco.
- [ ] Inspecionar a aba de rede e o armazenamento do navegador para confirmar que a demonstração não transmite respostas nem grava dados persistentes.
- [ ] Executar uma verificação automatizada de acessibilidade como apoio à avaliação manual.
- [ ] Atualizar `docs/relatorio-revisao-tecnica.md` com ambiente, resultado e evidência de cada teste. Manter itens pendentes até serem realmente executados.

**Critério de saída:** testes reais registrados, falhas corrigidas ou justificadas e nenhuma alegação genérica de conformidade WCAG sem avaliação suficiente.

## Fase 4 — Coerência dos requisitos e avaliação do protótipo (P1)

- [ ] Decidir se a escala de facilidade atual é apenas um exemplo de interface ou parte do instrumento de pesquisa.
- [ ] Alinhar `docs/produto-minimo.md`, `docs/protocolo-preliminar-avaliacao.md` e o produto para que a funcionalidade prometida corresponda à implementada.
- [ ] Se fizer parte da pesquisa, definir previamente as perguntas de clareza/utilidade/dificuldade, como serão registradas e como serão analisadas. Não coletar respostas reais até que isso esteja previsto e autorizado.
- [ ] Definir tarefas padronizadas, critérios de conclusão, erros relevantes, necessidade de ajuda e perguntas de compreensão.
- [ ] Definir os instrumentos finais com justificativa metodológica; não escolher escala apenas por conveniência.
- [ ] Registrar a rastreabilidade requisito → justificativa/evidência → implementação → teste → resultado.
- [ ] Confirmar que todos os cenários continuam identificados como fictícios ou possuem conteúdo formalmente validado/autorizado.
- [ ] Não apresentar uma pergunta de múltipla escolha isolada como prova de compreensão em situações clínicas reais.
- [ ] Preservar a distinção entre usabilidade/compreensão em tarefas simuladas e eficácia clínica ou continuidade real do cuidado.

**Critério de saída:** requisitos e protocolo consistentes entre si, com evidências verificáveis e sem ampliar o escopo sem justificativa.

## Fase 5 — Automação e fluxo de desenvolvimento (P2)

- [x] Adicionar verificações estáticas reproduzíveis em `scripts/check-prototype.mjs` (14 verificações passaram no GitHub Actions, run 39355380708).
- [x] Adicionar testes automatizados em navegador com Playwright e varreduras axe-core nos três estados principais; 15 testes passaram no run [39355695848](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39355695848).
- [ ] Adicionar validador formal de HTML e manter testes manuais com leitores de tela/dispositivos, que não são substituídos pelo CI.
- [x] Criar workflow de GitHub Actions para executar verificações estáticas no push/PR; a primeira execução terminou com sucesso.
- [ ] Registrar como abrir o protótipo localmente e como reproduzir os testes.
- [ ] Avaliar proteção de branch/revisão por pull request se houver colaboração ou risco de regressões.
- [ ] Escolher a estratégia de publicação da demonstração. GitHub Pages é opcional; não é pré-requisito para a avaliação local.
- [ ] Confirmar que a publicação, se habilitada, não expõe dados, credenciais ou conteúdo inadequado.

**Critério de saída:** verificações repetíveis e instruções claras para que outra pessoa consiga executar o protótipo e os testes.

## Fase 6 — Avaliação autorizada, aperfeiçoamento e entrega (P0/P1)

- [ ] Realizar atividades com participantes somente após definição do protocolo e cumprimento das aprovações aplicáveis.
- [ ] Guardar dados de pesquisa somente em local aprovado, com controle de acesso, retenção e descarte definidos; nunca no repositório público.
- [ ] Analisar resultados quantitativos e qualitativos conforme o plano definido.
- [ ] Registrar problemas de usabilidade, compreensão, acessibilidade e adequação ao contexto.
- [ ] Corrigir os problemas priorizados e repetir os testes afetados.
- [ ] Identificar a versão exata do protótipo avaliada.
- [ ] Documentar limitações, decisões, requisitos não atendidos e recomendações para evolução.
- [ ] Consolidar resultados, documentação do produto, dissertação e materiais de apresentação.

**Critério de saída:** versão avaliada identificada, resultados rastreáveis, limitações explicitadas e documentação final coerente com o que de fato foi realizado.

---

## Pendências que não podem ser resolvidas apenas por edição do repositório

As seguintes atividades dependem de execução externa ou decisão de terceiros e permanecem abertas: conversa com a Secretaria, orientação acadêmica, confirmação de fluxo/unidade, buscas nas interfaces oficiais, autorização institucional, apreciação ética aplicável e testes empíricos em navegador/leitor de tela. Este roadmap não presume que nenhuma dessas atividades já ocorreu.

## Regra de atualização

Ao concluir uma tarefa, atualizar este arquivo e o documento relacionado com a evidência correspondente (por exemplo: data e base consultada, ambiente de teste, resultado ou referência de autorização). Não marcar uma tarefa como concluída apenas por ter sido planejada ou por inspeção estática.
