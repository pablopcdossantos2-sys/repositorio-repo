# Registro da auditoria estática do protótipo — 20/10/2026

**Projeto:** Treino de Teleconsulta  
**Branch consultada:** `main`  
**Escopo desta rodada:** inspeção estática dos arquivos atuais de HTML, JavaScript e CSS, sem executar o protótipo em navegador e sem participantes.  
**Status:** inspeção estática parcial concluída; **auditoria manual e validação integral continuam pendentes**.

## 1. Versão inspecionada

| Arquivo | SHA do conteúdo (blob) | Observação |
|---|---|---|
| `produto/index.html` | `acd0dec08d541ef8212ad9f7208262e01ff348cd` | Conteúdo, controles e referências a recursos |
| `produto/app.js` | `9b899bcb402d9341b4ce6ea11c48e9f9c6fced10` | Lógica de navegação, escolhas, feedback e reinício |
| `produto/styles.css` | `4d35c1b802ea26311a09ecd5a43da64bd1634269` | Regras de apresentação e estados de foco |

Esses SHAs identificam o conteúdo dos arquivos consultados; não são, por si, o SHA do commit da branch.

## 2. Procedimentos realizados

- Leitura dos arquivos HTML, JavaScript e CSS atuais na branch `main`.
- Busca estática de referências `src`/`href` externas no HTML.
- Busca por IDs duplicados e conferência da estrutura dos controles de escolha.
- Inventário de campos `input`, formulários e `iframe`.
- Busca no JavaScript por APIs comuns de rede e persistência: `fetch`, `XMLHttpRequest`, `localStorage`, `sessionStorage`, cookies, `WebSocket`, `sendBeacon` e `indexedDB`.
- Revisão da lógica que mostra/oculta painéis, seleciona cenários, fornece feedback e reinicia a demonstração.
- Conferência textual dos avisos de caráter fictício e limites do produto.

## 3. Resultados estáticos

| ID relacionado | Resultado da inspeção | Estado nesta rodada | Limite |
|---|---|---|---|
| AUD-01 — identidade/escopo | Título, rodapé e seção de limites identificam o produto como protótipo/demonstração; afirmam que não há consulta real, integração assistencial ou aconselhamento clínico individual. | **Passou na inspeção textual** | Não comprova que toda pessoa interpretará a mensagem corretamente; não foi teste com pessoas. |
| AUD-02 — dados solicitados | Foram encontrados apenas campos de checklist (`checkbox`) e escolhas de cenário (`radio`); não foram encontrados campos para nome, contato, credenciais ou dados clínicos. | **Passou na inspeção estática dos campos atuais** | Não verifica comportamento de uma versão hospedada nem scripts que venham a ser adicionados depois. |
| AUD-03 — rede/armazenamento | O HTML não contém referências externas em `src`/`href`; não foram encontrados IDs duplicados; os quatro checkboxes do checklist estão inseridos em rótulos e os rádios estão agrupados por cenário com legenda. O JavaScript não contém as APIs de rede/persistência pesquisadas. Os recursos do protótipo são referenciados localmente. | **Parcial — código inspecionado** | Não houve inspeção de Network/Application em navegador; esta busca de padrões não exclui toda forma possível de comunicação nem substitui teste de execução. |
| AUD-04 — checklist | O JavaScript atual atualiza a mensagem de quantidade marcada e o botão de reinício do checklist desmarca os itens. | **Parcial — lógica lida** | A interação não foi executada nesta rodada. |
| AUD-05 — navegação/foco | A lógica alterna a classe de ocultação e `aria-hidden`, atualiza o indicador da etapa, foca o título do painel e rola até o painel. | **Parcial — lógica lida** | A experiência real de foco, teclado e painel oculto precisa de teste em navegador. |
| AUD-06 — link/entrada | O feedback estático orienta conferir conexão e canal/link oficial e não compartilhar credenciais por links suspeitos; a mensagem da simulação informa que nenhuma conexão real foi aberta. | **Passou na revisão textual do conteúdo** | Os botões e todas as opções não foram acionados nesta rodada. |
| AUD-07 — áudio | O código contém apenas mensagens textuais de simulação; não foram encontradas APIs de mídia, rede ou pedido de permissão no JavaScript inspecionado. | **Parcial — lógica lida** | Não é teste dinâmico; confirmar comportamento no navegador e rever o código se houver alterações. |
| AUD-08 — esclarecimento | O feedback para a opção segura recomenda pedir repetição/explicação e não adivinhar orientação. | **Passou na revisão textual do conteúdo** | Não foram acionadas todas as opções no navegador. |
| AUD-09 — encerramento/reinício | O código de reinício limpa checklist, rádios, mensagens, estados de avaliação e retorna à etapa inicial. | **Parcial — lógica lida** | Não foi executado manualmente; verificar se o foco e o estado visual retornam como esperado. |
| AUD-10 — linguagem | As mensagens lidas são curtas e orientadas a ações seguras, mas não foi realizada revisão integral de legibilidade por um protocolo formal. | **Parcial** | Revisão editorial completa permanece pendente; nenhuma inferência sobre compreensão do público. |
| AUD-11 — semântica/feedback | Foram identificados rótulos associados a controles, grupos de escolha e regiões de feedback `aria-live`; a lógica aplica `aria-hidden` aos painéis e `aria-pressed` aos botões de cenário/nota. | **Parcial — inspeção estática** | Não comprova anúncio correto por leitor de tela nem conformidade WCAG integral. |
| AUD-12 — teclado/foco | Há estilos `:focus-visible` para botões, campos e links, além de estilo de foco para título do painel. | **Parcial — CSS lido** | Navegação por Tab, Shift+Tab, Enter e Espaço não foi executada. |
| AUD-13 — zoom/reflow | Há regras responsivas e media queries para larguras menores. | **Parcial — CSS lido** | Não foram medidos viewports, zoom de 200% ou reflow real. |
| AUD-14 — movimento reduzido | O JavaScript consulta `prefers-reduced-motion`; o CSS remove transições quando a preferência está ativa. | **Parcial — código lido** | A preferência não foi alternada no sistema/navegador nesta rodada. |
| AUD-15 — contraste | O CSS contém cores explícitas para texto, bordas, foco e estados; cálculos anteriores cobriram apenas algumas combinações. | **Não concluído** | Requer medir combinações reais de texto, controles, foco e estados, com critérios WCAG aplicáveis. |
| AUD-16 — conteúdo fictício | O aviso de limites declara que nomes, links e cenários são fictícios. | **Parcial** | Não foi concluída uma busca semântica exaustiva por todas as marcas/nomes/URLs; conferir todos os textos antes da publicação. |
| AUD-17 — coerência pedagógica | O código tem três cenários com escolhas e feedback e uma etapa final com exemplos textuais. | **Parcial** | Revisão completa objetivo–tarefa–feedback–critério segue pendente; o texto estático final não equivale a uma tarefa de desempenho. |
| AUD-18 — benchmark | O benchmark exploratório existe e descreve recursos comparáveis. | **Não reavaliado integralmente nesta rodada** | A comparação não é exaustiva; não sustenta alegação de originalidade comprovada. |
| AUD-19 — distribuição | O HTML referencia `app.js` localmente e não foram encontradas referências externas em `src`/`href`. | **Parcial — inspeção estática** | Não foi aberto o pacote distribuído nem verificado o carregamento na forma final de hospedagem. |
| AUD-20 — integridade dos testes | Há registro histórico de CI em documentação do projeto. | **Pendente de conferência da execução mais recente** | Não foi consultado nesta rodada o estado atual do workflow para o commit exato inspecionado. |

## 4. Observações e riscos remanescentes

1. A nota de facilidade de 1 a 5 no painel final é uma interação local da demonstração. O código inspecionado não contém mecanismo de envio ou persistência dessa nota. Não tratar cliques ou notas eventuais como dados de pesquisa nem reportá-los como avaliação de usuários.
2. A ausência das APIs comuns pesquisadas no JavaScript é evidência limitada de inspeção estática, não prova universal de ausência de comunicação ou armazenamento.
3. As cores da interface devem ser avaliadas por combinação real de texto/fundo/estado; a cor da borda não é um requisito uniforme para cada elemento decorativo, mas pode ser importante quando identifica controles ou estados.
4. A lógica de foco precisa de verificação real. Mudar o foco programaticamente para um título pode ser útil, mas não garante por si só uma experiência correta com todas as tecnologias assistivas.
5. O conteúdo da etapa “Encerrar” apresenta recomendações em cartões de exemplo, não uma escolha interativa de conclusão. Não adicionar uma nova interação automaticamente; primeiro revisar o mapa de objetivos e justificar a alteração.
6. Não foram feitas alterações no código durante esta auditoria. Por isso, não foi executada uma nova suíte automatizada.

## 5. Próxima execução manual — ainda pendente

Executar os casos AUD-03 a AUD-20 conforme [roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md), priorizando:

1. abrir a versão atual no navegador e registrar commit, navegador, versão, sistema e viewport;
2. verificar painel Network/Application e confirmar que nenhuma resposta é enviada ou persistida;
3. testar todas as opções, mensagens, navegação, reinício e foco por teclado;
4. verificar zoom de 200%, larguras de 320/360/390/768/1280 CSS px, preferência de movimento reduzido e tecnologia assistiva disponível;
5. medir combinações de contraste aplicáveis e registrar problemas/retestes;
6. conferir a execução de CI correspondente ao commit exato antes de declarar testes automatizados aprovados.

**Conclusão:** a leitura estática não encontrou solicitações de dados pessoais/clínicos nem chamadas comuns de rede/persistência no JavaScript atual. É um resultado preliminar útil, mas não substitui os testes dinâmicos e manuais ainda pendentes. Nenhuma avaliação com participantes foi realizada ou planejada nesta rodada.
