# Segunda revisão estática do protótipo — 20/10/2026

**Escopo:** leitura dos arquivos correntes de HTML, JavaScript, CSS e testes automatizados no GitHub. Não houve execução do navegador nesta rodada, não houve instalação/execução de testes e não houve participação de pessoas. Os resultados abaixo são verificações estáticas reproduzíveis, não uma auditoria de conformidade completa.

## 1. Versão inspecionada

| Arquivo | SHA do conteúdo |
|---|---|
| `produto/index.html` | `acd0dec08d541ef8212ad9f7208262e01ff348cd` |
| `produto/app.js` | `9b899bcb402d9341b4ce6ea11c48e9f9c6fced10` |
| `produto/styles.css` | `4d35c1b802ea26311a09ecd5a43da64bd1634269` |
| `tests/prototype.spec.js` | `7763593caa61db2272d623357643cb476e95a955` |

## 2. Verificações estáticas realizadas

| Verificação | Resultado observado | Interpretação / limite |
|---|---|---|
| IDs HTML | 24 IDs encontrados; nenhum duplicado na varredura | Resultado estático por expressão de busca; não substitui parser/validador HTML |
| Referências `href`/`src` | `styles.css`, `#main`, `app.js`; nenhuma URL HTTP(S) externa encontrada | Indica dependências declaradas locais; não prova, sozinho, comportamento de rede em tempo de execução |
| Referências JS a `getElementById` | 9 referências únicas; todas correspondem a IDs encontrados no HTML | Nenhuma referência ausente nessa categoria |
| `aria-controls` | Os três destinos existem: `view-prepare`, `view-guidance`, `view-next` | Confere os alvos declarados, não a experiência completa em leitor de tela |
| Grupos de rádio | `entry-choice`, `understanding`, `clarify-choice` | Os controles estão agrupados por nome e associados a rótulos envolventes no HTML |
| APIs comuns de rede/persistência | A varredura do JS não encontrou `fetch`, `XMLHttpRequest`, `localStorage`, `sessionStorage`, `document.cookie`, `WebSocket`, `sendBeacon` ou `indexedDB` | Busca lexical limitada; não é prova universal de ausência de toda forma de rede ou persistência |
| Adaptação visual | CSS inclui regras para larguras pequenas (360, 420 e 560 px) e regra para movimento reduzido | A existência das regras não confirma renderização correta em dispositivos reais |
| Foco visível / alvos | Há regra `:focus-visible`, foco aplicado aos títulos de painéis e altura mínima de 44 px em controles selecionados | A ordem, visibilidade e persistência do foco ainda exigem execução manual |
| Avaliação local de facilidade | O encerramento tem escala interativa de 1 a 5 com `aria-pressed` e mensagem local | O código informa que a resposta não é enviada nem armazenada; o controle não mede aprendizagem nem valida o objetivo OE-05 |

## 3. Precisão pedagógica: conteúdo de encerramento versus avaliação de facilidade

A leitura do HTML e do JavaScript confirma duas coisas distintas:

1. O conteúdo educativo de encerramento apresenta exemplos estáticos sobre pedir repetição, confirmar o próximo passo e procurar o canal oficial.
2. A tela também inclui uma escala interativa “Como foi este treino?”, de 1 a 5, cujo estado é mantido apenas na interface durante a sessão e limpo ao reiniciar.

Portanto, OE-05 continua **sem uma tarefa interativa de aprendizagem com feedback próprio**. A escala de facilidade é um elemento de interface exploratório; não deve ser descrita como avaliação de compreensão, resultado de aprendizagem, coleta de pesquisa ou validação com usuários. Não foi feita alteração no produto nesta rodada.

## 4. Cobertura aparente dos testes existentes

A leitura de `tests/prototype.spec.js` mostra casos para navegação, estados ocultos, teclado e foco de etapas, checklist, controles fictícios, feedback dos cenários, reinício, escala de facilidade, larguras de viewport, verificações axe-core nas etapas/cenários e ausência de exceções JavaScript/solicitações externas durante um fluxo automatizado.

Esse conteúdo descreve a cobertura escrita no arquivo de testes. **Não significa que a suíte tenha sido executada nesta rodada.** O último resultado de CI previamente documentado permanece associado ao commit de código já registrado; nenhuma nova execução foi realizada para esta revisão documental.

## 5. Próximas ações priorizadas

1. Executar a suíte automatizada em CI após qualquer alteração de código; conferir o SHA testado.
2. Fazer a auditoria manual no navegador, começando por teclado/foco, zoom 200%, larguras pequenas, estados ativos, leitor de tela disponível e painel Network/Application.
3. Manter OE-05 como conteúdo estático até haver justificativa pedagógica explícita para uma tarefa de prática; não transformar a escala de facilidade em métrica de aprendizagem.
4. Concluir as buscas bibliográficas oficiais com consultas, datas, contagens e exportações reais; não inferir contagens a partir de busca exploratória.
5. Atualizar o roteiro de auditoria com evidência por ID, sem marcar como executados os testes que ainda não foram feitos.

## 6. Conclusão

A leitura estática não encontrou IDs duplicados, destinos de `aria-controls` inexistentes, referências JS `getElementById` ausentes, URLs HTTP(S) em `href`/`src` nem chamadas às APIs comuns de rede/persistência pesquisadas. Esses achados são limitados à inspeção textual dos arquivos e não substituem execução em navegador, auditoria de acessibilidade manual, validação pedagógica ou avaliação com participantes.

**Status da rodada:** inspeção estática documental concluída para os itens listados; testes dinâmicos/manuais não executados; nenhum arquivo de produto foi alterado.
