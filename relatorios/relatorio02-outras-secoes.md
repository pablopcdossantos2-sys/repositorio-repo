# Revisão das seções fora do anteprojeto

Base: repositório extraído do zip. Todos os itens foram conferidos nos arquivos. Quando um número vem de script, o script está em `scratchpad/tools/links.py`.

## ALTA

### A1. Links quebrados: 139 de 294 links relativos em .md
Na contagem, `protótipo` foi mapeado para a pasta `prot#U00f3tipo`, que é como o zip a gravou. O padrão se repete em vários arquivos, então o diagnóstico abaixo é de causa, não de acaso.

- **`README.md` (raiz): 46 links quebrados.** Quase todos usam `../docs/...` (ex.: linha 11 `../docs/gestao/estado-atual-e-diretrizes-para-ias.md`). Da raiz, `../` sai do repositório. Já os links `docs/README.md` e `produto/index.html` do mesmo arquivo estão corretos, então o prefixo `../` é resíduo. Correção: remover `../` dos 46 links (substituição simples).
- **Links entre pastas escritos como se os arquivos estivessem na mesma pasta.** Provável resíduo da reorganização por fases. O mesmo script aponta o problema em `docs/gestao/tarefas-pessoais-e-proximos-passos.md` (16), `docs/gestao/roadmap-historico-resumido.md` (14), `docs/protótipo/matriz-evidencias-requisitos.md` (8), `docs/avaliacao/roteiro-auditoria-tecnica-sem-participantes.md` (8), `docs/protótipo/mapa-objetivos-educativos-e-tarefas.md` (6), além de ~20 arquivos com 1 a 3 links cada. Exemplos: `estado-atual-e-diretrizes-para-ias.md` referenciado de dentro de `docs/protótipo/` e `docs/avaliacao/` sem `../gestao/`; `benchmark-recursos-existentes.md` referenciado de dentro de `docs/protótipo/` sem `../fundamentacao/`.
- **`docs/gestao/estado-atual-e-diretrizes-para-ias.md`**: link para `../apresentacao/defesa-oral-atualizada.odp` quebrado (de `docs/gestao/`, o correto é `../../apresentacao/...`).
- **`docs/anteprojeto/selecao/analise-edital-turma-2027-e-lacunas.md`**: link para `levantamento-bibliografico-exploratorio-2026-10-24.md` sem `../../fundamentacao/`.
- **`apresentacao/guia-defesa-oral-atualizado.md` linha 62**: cita `docs/segunda-revisao-estatica-2026-10-20.md`, mas o arquivo está em `docs/avaliacao/registros/`.
- **Nome da pasta com acento (`docs/protótipo`)**: o próprio README.md raiz e vários arquivos usam o acento literal. Funciona no GitHub, mas é frágil em Windows/zip (o zip recebido gravou `prot#U00f3tipo`). Sugestão: renomear para `docs/prototipo` e ajustar os links ao mesmo tempo que a correção acima.

### A2. Prazo e documentos de apoio divergem do PDF do edital
- O PDF do edital (`docs/processo-seletivo-arquivos/Mestrado_Telessaude_Edital_2026.pdf`, texto na linha 197 da extração) diz: "Período de inscrição: 1/10/2026 até às 12:00h do dia 30/10/2026" (cronograma: 01/10/2026 a 30/10/2026).
- Quatro arquivos do repositório registram 29/10/2026 às 12h: `docs/anteprojeto/selecao/analise-edital-turma-2027-e-lacunas.md` (linhas 20, 113, 131), `.../conferencia-modelo-e-edital-2027-2026-10-24.md` (linhas 49, 78) e `docs/gestao/tutorial-execucao-pendencias.md` (linha 252).
- Nenhum deles foi atualizado depois que o PDF foi anexado. O edital (Disposições gerais, item 11) permite à comissão alterar calendário e prorrogar prazos; a página oficial pode ter sido atualizada depois do PDF. É preciso confirmar qual prazo vale na fonte oficial; eu não consigo verificar isso daqui.

### A3. Guia e slides da defesa oral estão desatualizados e fracos nos critérios pontuados
Arquivos: `apresentacao/guia-defesa-oral-atualizado.md` e `apresentacao/defesa-oral-atualizada.odp` (15 slides; texto extraído de `content.xml`).

- **Contradição com o estado do produto.** Linhas 14 e 15 do guia, e slide 5, dizem que o conteúdo de OE-05 é estático e que só existe a escala 1–5. Mas `docs/gestao/roadmap.md` linha 120 e `README.md` linha 25 registram, desde 21/10/2026, um exercício interativo de escolha única no encerramento. Quem defende o projeto vai ser contradito pelo próprio protótipo.
- **Contagem de testes desatualizada.** Guia (linhas 16 e 57) e slides 6 e 15: 22 testes no commit `11d5bee`. O README.md linha 26 registra 29 testes (CI de 24/10/2026).
- **Campos em branco.** Slide 1 ("Candidato(a): [preencher nome completo]") e slide 12 ("Por que este mestrado?") têm colchetes. O edital pontua explicitamente "a explicitação dos motivos que o levam a desejar cursar o Mestrado Profissional".
- **Os sete critérios pontuados quase não aparecem.** O guia não trata de ODS, SUS Digital, equidade e diversidade, escalabilidade/viabilidade em 24 meses nem de fundamentação teórica (a defesa pontua "conhecimento acerca da fundamentação teórica"). As "perguntas prováveis" (linhas 27–42) são todas sobre limites do protótipo e nenhuma sobre esses critérios. Os slides 7, 9 e 10 (contraste, auditoria, limites) ocupam espaço desproporcional em relação ao que a banca pontua.
- **Postura.** "Rigor técnico antes de ampliar escopo" (slide 13) é honesto, mas o guia nunca diz qual é a contribuição afirmada. Sugestão: reordenar para problema → lacuna → proposta de valor → método/viabilidade (cronograma de 24 meses) → impacto/equidade/ODS/SUS Digital → limites, e levar o detalhe de contraste e CI para anexos.
- Uma coisa que o guia faz bem e deve ser mantida: a ressalva de que a escala 1–5 não mede aprendizagem (nota de 20/10/2026, linha 62).

## MÉDIA

### M1. Contagens de testes e datas inconsistentes entre documentos
Valores diferentes para o "último CI": 15/16/17/22/26/27/29 testes aparecem em `README.md`, `docs/avaliacao/relatorio-revisao-tecnica.md` (linhas 92, 119, 121), `docs/avaliacao/registros/registro-auditoria-estatica-2026-10-20.md` (51), `docs/avaliacao/registros/revisao-acessibilidade-visual-e-controles-2026-10-21.md` (46), `docs/gestao/roadmap.md` (71, 76, 77, 120, 169, 379), `docs/gestao/roadmap-historico-resumido.md` (56, 58, 140), `docs/gestao/estado-atual-e-diretrizes-para-ias.md` (71, 153, 497). Parte é histórico legítimo, mas há frases "último CI documentado" apontando para valores antigos (ex.: `roadmap.md` linha 169: 22 testes). Sugestão: manter um único lugar com o "último CI" (README raiz) e, nos demais, só o registro datado.

### M2. `docs/gestao/roadmap.md` (43 KB) contém itens contraditórios
Linha 240 ("Decidir ... se o encerramento precisa de uma tarefa interativa mínima para OE-05") e linhas 249 e 287 ("RF-07 pendente"; "OE-05 como conteúdo estático") coexistem com a linha 120 (já implementado). O arquivo acumula versões antigas ("Atualização — ... 20/10/2026") sem fechar as anteriores. Sugestão: reduzir para o que está aberto agora e mover o resto para `roadmap-historico-resumido.md` (que já existe, 15 KB).

### M3. Excesso e redundância de documentação de gestão
- `docs/gestao/` tem 5 documentos grandes (`estado-atual-e-diretrizes-para-ias.md` 54 KB, `roadmap.md` 43 KB, `tarefas-pessoais...` 37 KB, `tutorial-execucao-pendencias.md` 28 KB, `roadmap-historico-resumido.md` 15 KB) que repetem o mesmo estado do projeto. É onde nascem as inconsistências de M1 e M2.
- Redundâncias específicas: `ROADMAP.md` (raiz, 431 bytes) é só atalho, o que é aceitável; `docs/anteprojeto/selecao/criterios-edital-e-cinco-temas.md` (435 bytes) é um redirecionamento com nome desatualizado ("cinco") para o arquivo `...-seis-temas.md` (39 KB, histórico de temas descartados); `anteprojeto-base.md` e `anteprojeto-modelo-uerj.md` coexistem (divergência já apontada no relatório do anteprojeto).
- Sugestão: arquivar em `docs/_arquivo/` o que é histórico (`criterios-edital-e-seis-temas.md`, roadmap histórico, `anteprojeto-base.md`) e manter na raiz de `docs/` só o que orienta o trabalho de agora. Reduzir `estado-atual-e-diretrizes-para-ias.md` a 1–2 páginas com decisões vigentes.
- O arquivo "diretrizes para IAs" sugere à banca (ou a quem ler o repositório público) que o texto foi produzido com apoio de IA; ver o relatório do anteprojeto sobre transparência e a regra de plágio do edital (item 8).

### M4. Auditoria manual AUD-MAN-2026-10-21-01: inconclusiva, e o README raiz diz isso
Conferido em `docs/avaliacao/auditorias/manual/2026-10-21/README.md` e no JSON: 59 casos marcados C, todas as 59 evidências vazias, só o perfil "Mouse/trackpad", `viewport` vazio no JSON, zoom 100%, leitor de tela vazio, commit do formulário (`872b28c`) diferente do commit da CI citada (`03578a9`), SO "Windows (versão técnica reportada: 19.0.0)". Falta executar: teclado, leitor de tela, 200%/400%, dispositivos móveis. Isso está corretamente documentado, mas a defesa e o anteprojeto não devem citar a auditoria como concluída. Para a defesa: o que se pode afirmar é "auditoria automatizada + rodada manual inicial inconclusiva; reteste planejado".

### M5. Buscas bibliográficas: nada formal executado
`docs/fundamentacao/registros/registro-busca-estruturada-2026-10-20.md` diz no cabeçalho "execução formal nas interfaces oficiais ainda não concluída. Não existem contagens válidas". O levantamento de 24/10/2026 (`levantamento-bibliografico-exploratorio-2026-10-24.md`, linhas 13–15) marca PubMed/MEDLINE, BVS/LILACS e SciELO como "Pendente / Nenhuma gerada". Há strings prontas (PM-1 a PM-4, BVS-1 a BVS-3, SC-1 a SC-2) e um script `scripts/buscar-pubmed.mjs` (E-utilities). Isso afeta o anteprojeto: qualquer afirmação de lacuna ("não foi encontrado simulador...") precisa se limitar à "busca exploratória", como o texto já faz.

## BAIXA

### B1. Protótipo, testes e CI (apenas o que foi possível ver sem instalar dependências)
- `node --check` passou em `produto/app.js`, `scripts/check-prototype.mjs` e `scripts/buscar-pubmed.mjs`.
- `produto/app.js` e `produto/index.html` não contêm `fetch(`, `XMLHttpRequest`, `localStorage`, `sessionStorage` nem URLs `http` (busca por grep), o que é coerente com a alegação "sem coleta nem persistência". Os testes são o lugar certo para provar isso (o anteprojeto fala em "ausência de chamadas de rede").
- `package.json`: `check:syntax` verifica `produto/app.js`, `scripts/buscar-pubmed.mjs` e `tests/buscar-pubmed.test.js`, mas não `scripts/check-prototype.mjs` nem `tests/prototype.spec.js` (este é exercitado pelo Playwright). Menor.
- `engines.node >= 24.8.0` e `.nvmrc` com `24`: exigente para um colaborador; o tutorial (`docs/avaliacao/tutorial-instalar-e-testar-prototipo.md`, linhas 51–56) já explica isso. Não verifiquei online se as versões das actions do workflow (`actions/checkout@v7`, `actions/setup-node@v7`) e as dependências fixadas existem; vale conferir antes de depender do CI.
- O workflow só dispara com mudanças em `produto/**`, `scripts/**`, `tests/**` e configs. Alterações em docs não geram CI, o que é adequado, mas o "último CI" citado no README fica fixo no último commit de código.
- `.htmlvalidate.json` usa só `html-validate:recommended`, sem regras próprias. Aceitável.

### B2. Pasta `relatorios/`
`relatorios/relatorio01.md` (481 linhas) já é uma análise detalhada do anteprojeto. O novo relatório deve dizer o que confirma, corrige ou acrescenta em relação a ele, em vez de repetir (ver relatório principal).

## O que NÃO foi feito
- Não rodei `npm ci` nem os testes Playwright; não confirmei a contagem real de testes (29 segundo o README). Não abri o ODP no LibreOffice (só extraí o texto). Não verifiquei online nenhuma fonte, norma, versão de action ou prazo oficial. Não li integralmente `estado-atual-e-diretrizes-para-ias.md`, `roadmap.md`, `tarefas-pessoais...` e `tutorial-execucao-pendencias.md`; usei grep e trechos, então a lista de inconsistências em M1 e M2 não é exaustiva.


---

## Atualização após a reorganização — 30/10/2026

As recomendações deste arquivo foram convertidas nas seguintes mudanças no repositório:

- O README da raiz foi substituído por um índice de projeto com caminhos válidos a partir da raiz; os links de documentos foram revisados após movimentação de arquivos.
- docs/protótipo foi renomeado para docs/prototipo para evitar acento em caminhos e fragilidade em extrações ZIP/Windows.
- docs/processo-seletivo-arquivos foi movido para docs/anteprojeto/selecao/fontes-oficiais; apresentacao foi movido para docs/defesa.
- Versões antigas do estado, roadmap e lista de tarefas foram preservadas em docs/_arquivo/gestao; anteprojeto-base e comparação dos temas foram preservados em docs/_arquivo/anteprojeto.
- docs/gestao agora mantém documentos curtos de estado, roadmap e próximas ações. Os tutoriais operacionais continuam separados porque descrevem procedimentos, não o status do projeto.
- O guia de defesa foi refeito em Markdown; o ODP antigo foi mantido como histórico e explicitamente marcado como não pronto para apresentação.
- O rascunho de anteprojeto passou a usar um título único, pergunta de pesquisa alinhada entre Resumo/Abstract/Justificativa e palavras-chave logo após os resumos. A validação dos descritores no DeCS/MeSH continua pendente.

A contagem de 139 links quebrados em 294 citada acima pertence ao ZIP e ao momento da análise. **Verificação posterior na árvore atual do GitHub (30/10/2026):** foram inspecionados 74 arquivos Markdown/HTML e 281 links relativos Markdown/HTML; não foram encontrados destinos locais quebrados. Essa conferência não verifica a disponibilidade de URLs externas nem caminhos citados apenas em blocos de código. A renomeação de pastas e a correção de links não executam os testes Playwright nem alteram o comportamento do produto.
