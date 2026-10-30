# Relatório 03 — Plano de edição do repositório e do anteprojeto (para execução por outras IAs)

**Projeto:** Treino de Teleconsulta (Mestrado Profissional em Telessaúde e Saúde Digital, UERJ)
**Data:** 30/10/2026
**Escopo:** o projeto escrito (anteprojeto) e os documentos que o sustentam. Fora de escopo: `produto/`, `tests/`, `scripts/`, `.github/`.
**Destino sugerido deste arquivo:** `relatorios/relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md` (e uma linha em `relatorios/README.md`).
**Quem escreveu:** análise feita sem acesso de escrita ao repositório; este documento descreve as edições para que outra IA (ou pessoa) as execute.

> **Resumo em cinco linhas**
> 1. Os relatórios 01 e 02 e a reorganização de 30/10 já acertaram o diagnóstico e a arrumação das pastas. **O que falta é o texto**: o anteprojeto continua na estrutura errada (16 itens de página web) e nada foi migrado para a estrutura real do DOCX oficial.
> 2. Este plano entrega o que os relatórios anteriores só sugeriram: um **texto-base completo, seção por seção, na estrutura do DOCX** (Apêndice A), com dados e normas brasileiras **conferidos nesta rodada** (Apêndice B).
> 3. Achados novos: documentos da seleção ainda dizem que o DOCX e o edital 2027 "não foram inspecionados" (ambos estão no repositório); há quatro redações diferentes da pergunta de pesquisa; o instrumento de governo digital vigente tem outro nome; o edital só vale para a turma de março de 2027.
> 4. Ambos os prazos de inscrição (29/10 e 30/10, 12h) já passaram. O plano funciona nos dois cenários (candidato inscrito ou não) — ver seção 1.3.
> 5. Há decisões que só o candidato pode tomar (seção 2). A IA executora **não** deve decidi-las; deve usar os valores padrão indicados e deixá-las marcadas.

---

## 0. Regras para quem for executar (leia antes de editar)

1. **Não invente.** Todo dado, número, norma ou referência sem verificação fica marcado `[CONFIRMAR]`. Nenhuma marca `[CONFIRMAR]` pode sobrar em texto destinado ao PDF final.
2. **Não edite** `docs/anteprojeto/selecao/fontes-oficiais/` (arquivos oficiais; o README da pasta já diz isso). Trabalhe em cópias.
3. **Não toque** em `produto/`, `tests/`, `scripts/`, `.github/`, nem nos arquivos de `docs/_arquivo/` (histórico). Não edite `relatorios/relatorio01.md` e `relatorio02*.md` (registros históricos).
4. **Não preencha dados pessoais** do candidato (nome, formação, motivação, trajetória). Deixe `[PREENCHER PELO CANDIDATO]`.
5. **Não escreva resultados.** O anteprojeto é proposta. Nada de "demonstrou", "comprovou", "aprendizagem", "eficácia".
6. **Não declare dispensa de CEP** nem presuma parceria com Guaraí-TO. Mantenha o que já está nos documentos: parceria inexistente, campo não autorizado.
7. **Não marque como concluído** o que não tiver evidência (CI, auditoria manual, buscas formais, candidatura).
8. **Estilo do texto do anteprojeto:** afirmativo. O que o projeto entrega vem primeiro; as ressalvas ficam concentradas na seção de Limitações e em frases curtas onde forem essenciais à precisão. Não reintroduza blocos de "não presume / dependerá de" em todas as seções.
9. **Idioma:** português do Brasil; abstract em inglês americano.
10. **Um commit por pacote de trabalho (WP)**, mensagem em português no formato `docs(anteprojeto): <o que mudou>`.
11. Ao terminar cada WP, rode as verificações da seção 4.

---

## 1. Situação verificada

### 1.1 O que já está bom (não refazer)

- Arrumação das pastas (`docs/anteprojeto`, `fundamentacao`, `prototipo`, `avaliacao`, `defesa`, `gestao`, `_arquivo`), README raiz com links relativos corretos e `ROADMAP.md` como atalho.
- **0 links relativos quebrados** nos `.md` (verificado por script nesta rodada).
- `estado-atual-do-projeto.md`, `roadmap.md` e `tarefas-pessoais-e-proximos-passos.md` curtos e coerentes quanto a limites do produto, ausência de participantes e cautela com a candidatura.
- Resumo e abstract do rascunho já trazem a pergunta de pesquisa; o contraditório sobre o encerramento (OE-05) já foi corrigido no texto do rascunho.

### 1.2 O que continua errado ou pendente

Gravidade: **C** crítico, **A** alto, **M** médio, **B** baixo. "Novo" = não estava nos relatórios 01/02.

| # | Grav. | Achado | Evidência | WP |
|---|---|---|---|---|
| F1 | C | O anteprojeto vigente segue a lista de 16 itens da página web, não o DOCX oficial. Faltam, como seções formais: Proposta de valor (9 subitens), Tipo de estudo, Governança de dados, Método de análise, Cronograma em tabela, Infraestrutura/parcerias/viabilidade, Tipo de produto planejado. | `docs/anteprojeto/rascunhos/anteprojeto-modelo-uerj.md` (cabeçalho, linha 3) × DOCX em `fontes-oficiais/` | WP1, WP2, WP8 |
| F2 | A, Novo | Documentos da seleção ainda afirmam que o DOCX e o PDF do edital 2027 **não foram inspecionados/recuperados**. Os dois estão em `fontes-oficiais/` e foram lidos por inteiro nesta rodada. | `conferencia-modelo-e-edital-2027-2026-10-24.md` §2 ("DOCX... não foram inspecionados"), §3 ("PDF integral não recuperado"), §4 (tabela); `analise-edital-turma-2027-e-lacunas.md` cabeçalho "Status" e §1 "Limite de verificação" | WP3 |
| F3 | A, Novo | `analise-edital...` §8 e §11 dizem que o rascunho foi "reorganizado" na "ordem publicada" e com "exatamente 16 títulos", como se isso o alinhasse ao modelo oficial. O modelo oficial (DOCX) é outro. A frase induz o leitor a achar o rascunho conforme. | `analise-edital...md` linhas ~105 e ~124 | WP3 |
| F4 | A, Novo | **Quatro redações diferentes** da pergunta de pesquisa. | `anteprojeto-modelo-uerj.md:49` ("Como desenvolver e avaliar, por análise documental...") e a pergunta do Resumo/Justificativa ("em que medida o protótipo atende..."); `decisoes-metodologicas.md:113`; `analise-edital...md:41`; `avaliacao/planejamento/protocolo-preliminar-avaliacao.md:11` | WP4 |
| F5 | M, Novo | O edital limita a validade do processo à turma de março/2027 (item X.7, p. 11) e prevê desclassificação por **plágio ou autoplágio** a qualquer momento (item X.8, p. 11). Qualquer uso futuro do texto exige conferir o edital seguinte; e o texto-base gerado por IA precisa ser revisado e reescrito na voz do candidato. | PDF do edital, item X | WP1, WP9 |
| F6 | M, Novo | O DOCX pede "Estratégia **Nacional** de Governo Digital". O instrumento em vigor é a **Estratégia Federal de Governo Digital 2024–2027** (Decreto nº 12.198/2024). O texto deve citar o instrumento correto sob o título do modelo. | DOCX; Decreto 12.198/2024 (Apêndice B2) | WP1 |
| F7 | M, Novo | A dúvida do relatório 02 sobre o ODS 4.4 se resolve: o indicador oficial **4.4.1** mede a "proporção de jovens e adultos com habilidades em TIC". O encaixe com letramento digital é direto. | resultados de busca sobre o indicador 4.4.1 (UNESCO/UIS; metadados nacionais) | WP1 |
| F8 | M, Novo | Há dados brasileiros recentes e utilizáveis (TIC Domicílios 2025; TIC Saúde 2025) e a base normativa verificável (Programa SUS Digital, Lei 14.510/2022). Nenhum entra hoje no texto. | Apêndice B2 | WP1, WP5 |
| F9 | B, Novo | Descritor DeCS/MeSH verificado para "teleconsulta": **Consulta Remota / Remote Consultation** (DeCS 32630; MeSH D019114). O rascunho usa só "Telemedicina". | `decs.bvsalud.org/en/ths/resource/?id=32630` | WP1 |
| F10 | B | Resíduos de rascunho no texto: bloco "Status" (l. 3), `[Preencher conforme...]` (l. 15), "Critérios de relevância a explicitar:" (l. 23), frase "A bibliografia abaixo é inicial..." (l. 145) e links para arquivos do repositório (Fase 2, l. 105, e Bibliografia, l. 155). Anexos e apêndices não são avaliados (FAQ citado no repo). | `anteprojeto-modelo-uerj.md` | WP1, WP2 |
| F11 | B, Novo | Pequenas inconsistências: `text.txt` em `fontes-oficiais/` tem 1 byte (vazio); `criterios-edital-e-cinco-temas.md` aponta para um arquivo arquivado chamado "seis-temas"; o PDF do corpo docente tem cabeçalho "EDITAL 2026". | arquivos citados | WP12 |
| F12 | M, Novo | A escolha dos três docentes indicados (etapa **eliminatória** "Apto/Não apto") continua sem registro. O PDF do corpo docente só traz nomes e categoria (10 permanentes, 12 colaboradores), sem linhas de pesquisa. | `tarefas-pessoais...md` Prioridade 1; PDF do corpo docente | WP11 |
| F13 | M | O guia de defesa é bom, mas genérico. A defesa vale 3,0 pontos e inclui a "fundamentação teórica" (1,0) e os motivos para cursar o mestrado. Faltam respostas-base ancoradas no texto. | `docs/defesa/guia-defesa-oral.md` | WP10 |
| F14 | M, Novo | A carta diz que "a definição operacional do público, a pergunta de pesquisa, o método e as tarefas de avaliação **ainda serão refinados**". O texto-base do Apêndice A afirma essas escolhas. É preciso harmonizar a carta com o texto antes de qualquer uso. A minuta da declaração cita a "Deliberação 13/2023"; o edital (item IV.3, nº 15) não informa o número. Confirmar qual Deliberação está vigente. | `submissao/carta-exposicao-de-motivos.md`; `declaracao-conhecimento-deliberacao-13-2023.md`; edital p. 5 | WP9 |

### 1.3 Dois cenários para a candidatura (o repositório não permite saber qual vale)

O edital (p. 4) fixa o fim das inscrições em **12h de 30/10/2026**; a página consultada antes indicava 29/10. Os dois já passaram. O item X.11 (p. 11–12) permite à comissão prorrogar prazos. O repositório não contém comprovante de inscrição.

- **Cenário A — inscrição concluída.** O PDF que foi enviado é o que vale. **Não substituir.** O texto-base serve para: (i) preparar a defesa oral de 16/11/2026 (3,0 pontos) sem contradizer o PDF enviado; (ii) servir de base da dissertação. Antes de usar frases novas na defesa, comparar com o PDF enviado e não afirmar o que ele não diz.
- **Cenário B — sem inscrição, ou prazo reaberto/prorrogado.** Confirmar por e-mail com `mestrado@telessaude.uerj.br` (canal exclusivo de comunicação, edital p. 10, item VIII.5). Se houver prorrogação, o texto-base vira a versão a migrar para o DOCX. Se não houver, ele serve a um próximo edital — que **deve ser relido integralmente** (item X.7).

A IA executora registra o cenário em `estado-atual-do-projeto.md` (WP9) apenas quando o candidato informar. Até lá, escreve "status não confirmado".

---

## 2. Decisões do candidato (a IA não decide; usa o padrão e mantém marcado)

| ID | Decisão | Padrão usado no texto-base | Onde aparece |
|---|---|---|---|
| D1 | Cenário A ou B (seção 1.3) | não confirmado | WP9 |
| D2 | Incluir no texto a etapa condicional com pessoas (validação por juízes especialistas ou teste de usabilidade com poucas pessoas), com janela no cronograma, condicionada ao CEP e à orientação | **incluída como condicional** (Etapa 4 do método; meses 14–19) | Resumo, Método, Cronograma, Limitações |
| D3 | Arcabouço metodológico: Design Science Research (Peffers et al., 2007; Hevner et al., 2004) ou outro (p. ex., ADDIE). O guia de defesa já pede validar com a orientação. | **DSR** | Resumo, Método, Tipo de estudo, Objetivos (nomes das fases) |
| D4 | Tipo de produto: artigo, produto técnico ou **produto tecnológico**; estrato T1/T2 | **Produto tecnológico**; estrato `[CONFIRMAR no documento norteador CAPES]` | Tipo de produto |
| D5 | Três docentes a indicar | nenhum | WP11 |
| D6 | Licença aberta do simulador e do conteúdo | "licença aberta `[DEFINIR]`" | Escalabilidade, Tipo de produto |
| D7 | Declarar ou não o apoio de ferramentas de IA na redação | não declarar nada no texto; **decisão do candidato** | WP9 |
| D8 | Nome completo, formação, trajetória, motivação | `[PREENCHER PELO CANDIDATO]` | Capa, carta, defesa |
| D9 | Manter ou remover do PDF final os parágrafos "📌 Orientações de preenchimento" e a seção "Checklist de formatação" do modelo | remover as orientações e **manter** o título do checklist apenas se o Programa confirmar; ver WP8 | WP8 |

---

## 3. Pacotes de trabalho

Ordem recomendada: WP1 → WP2 → WP4 → WP3 → WP5 → WP6 → WP7 → WP8 → WP9 → WP10 → WP11 → WP12 → WP13.

### WP1 — Criar o texto-base na estrutura do DOCX (a edição mais importante)

- **Criar** `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`.
- **Conteúdo:** copiar **literalmente** o bloco entre `<!-- INÍCIO: anteprojeto-docx-oficial.md -->` e `<!-- FIM: anteprojeto-docx-oficial.md -->` do Apêndice A.
- **Não alterar** títulos de seção (reproduzem o DOCX), nem remover `[CONFIRMAR]`/`[PREENCHER...]`.
- **Critério de aceite:** (a) as seções aparecem na ordem do DOCX (Apêndice B1); (b) Resumo e Abstract ≤ 500 palavras cada (rodar o script da seção 4); (c) toda citação do texto tem entrada em Referências e vice-versa (Apêndice B3); (d) nenhum link para arquivos do repositório no corpo.

### WP2 — Aposentar o rascunho de 16 itens e corrigir os links de entrada

1. `git mv docs/anteprojeto/rascunhos/anteprojeto-modelo-uerj.md docs/_arquivo/anteprojeto/anteprojeto-modelo-16-itens-2026-10-30.md`.
2. Inserir no topo do arquivo movido:
   > **Arquivo histórico — versão não vigente.** Segue uma lista de 16 itens de página web, não a estrutura do DOCX oficial. A versão vigente do texto é `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`.
3. Corrigir os links relativos **dentro** do arquivo movido (ele aponta para `../../prototipo/...` e `../../fundamentacao/...`; agora precisa de `../../`+ caminho a partir de `docs/_arquivo/anteprojeto/`).
4. Atualizar os links de entrada (somente nestes arquivos):
   - `docs/anteprojeto/README.md` linha 7 → apontar para `rascunhos/anteprojeto-docx-oficial.md` e reescrever a descrição: "texto-base na estrutura do DOCX oficial; ainda não é o DOCX final; revisão do candidato e da orientação pendente."
   - `docs/gestao/tutorial-execucao-pendencias.md` linhas ~289 e ~294 → novo arquivo e ajustar a instrução ("comparar o DOCX com o texto-base" em vez de "com o rascunho de 16 itens").
   - `docs/anteprojeto/selecao/analise-edital-turma-2027-e-lacunas.md` §8 e §11 (ver WP3).
5. **Não** editar `relatorios/relatorio01.md`, `relatorio02*.md` nem `docs/_arquivo/` (exceto o cabeçalho do arquivo movido).
- **Aceite:** script de links (seção 4) com 0 quebrados.

### WP3 — Corrigir os documentos da seleção que ficaram desatualizados

**3a. `docs/anteprojeto/selecao/conferencia-modelo-e-edital-2027-2026-10-24.md`**
- Inserir logo abaixo do título: `> **Superado em 30/10/2026.** O DOCX oficial e o PDF do edital da Turma 2027 estão em fontes-oficiais/ e foram lidos por inteiro. Ver conferencia-docx-e-edital-2027-2026-10-30.md. As afirmações abaixo sobre "DOCX não inspecionado" e "PDF integral não recuperado" não valem mais.`
- Não reescrever o corpo (é registro histórico).

**3b. Criar `docs/anteprojeto/selecao/conferencia-docx-e-edital-2027-2026-10-30.md`** com o conteúdo do **Apêndice B1** (tabelas), mais o cabeçalho: fontes, SHA-256 (ver 3d), data da conferência e a frase "Conferência de conteúdo; não equivale à validação do arquivo final em Word/PDF nem à confirmação de status da candidatura."

**3c. `docs/anteprojeto/selecao/analise-edital-turma-2027-e-lacunas.md`**
- No cabeçalho, acrescentar nota: "**Atualização 30/10/2026:** o DOCX e o PDF do edital da Turma 2027 foram conferidos; ver conferencia-docx-e-edital-2027-2026-10-30.md. Os itens de 'limite de verificação' abaixo estão superados."
- §1 "Limite de verificação": acrescentar "(superado em 30/10/2026)".
- §8 e §11: acrescentar logo no início de cada seção: "**Correção (30/10/2026):** a ordem de 16 títulos vem da página web do modelo e **não corresponde** ao DOCX oficial. O texto vigente foi migrado para `rascunhos/anteprojeto-docx-oficial.md`."
- §3: onde diz "Pergunta provisória:", substituir o texto da pergunta por "ver `formulacao-vigente.md`" (WP4).

**3d. `docs/anteprojeto/selecao/fontes-oficiais/README.md`** — **acrescentar** (sem renomear nem editar os arquivos) a tabela:

| Arquivo | O que é (verificado em 30/10/2026) | SHA-256 |
|---|---|---|
| `Mestrado_Telessaude_Edital_2026.pdf` | Edital da **Turma 2027** (início em março/2027), inscrições 01/10 a 30/10/2026, 12h; aprovado pelo DEPPG/PR-2 em 17/09/2026; 14 páginas. O nome do arquivo diz 2026; o conteúdo é 2027. | `f709dad4db049cc8ab8d1fb014bd081e897702d6e391eb34967299e128d8cf2c` |
| `Modelo_Anteprojeto_Mestrado-Telessaude-Saude-Digital_Uerj.docx` | Modelo editável: capa, sumário, Resumo, Abstract, Introdução, Justificativa, Objetivos, Proposta de valor, Material e Método, Cronograma, Infraestrutura, Tipo de produto, Referências, Checklist de formatação. Rodapé da capa: "2026". | `aae3bd4c74fe221e9e005407175e4799fd0998cc2e3c70eaed2957b31e7a3c89` |
| `Corpo_Docente_Programa_De_Pos_Graduacao_Telessaude_e_Saude_Digital.pdf` | Lista de docentes: 10 permanentes e 12 colaboradores, sem linhas de pesquisa. Cabeçalho do PDF: "EDITAL 2026". | `82b85d641c85fceeadbfd38dc2f8a09d4974e1cbbadf663bc766a80f0ad0bf5c` |
| `text.txt` | Arquivo de 1 byte, sem conteúdo útil. Não excluir sem autorização do candidato (ver WP12). | — |

### WP4 — Uma única formulação vigente (título, linha, tipo, pergunta, objetivos, palavras-chave)

1. **Criar** `docs/anteprojeto/formulacao-vigente.md` com o conteúdo do bloco "Formulação vigente" (final do Apêndice A, depois do FIM do texto-base). É a fonte única; os demais documentos **apontam** para ela.
2. Substituir a pergunta por um ponteiro ("Pergunta vigente: ver `formulacao-vigente.md`") em:
   - `docs/anteprojeto/decisoes-metodologicas.md` §7 (a pergunta principal provisória, l. ~113) — manter a "pergunta complementar" condicional, que é outra coisa;
   - `docs/avaliacao/planejamento/protocolo-preliminar-avaliacao.md` (l. ~11);
   - `docs/anteprojeto/selecao/analise-edital...md` §3 (WP3).
3. Em `docs/anteprojeto/decisoes-metodologicas.md` §12 (pendências), acrescentar: "Texto-base propõe: Camada 0 (sem participantes) como base; Camada 1 condicional (juízes ou usabilidade) com gatilho (orientação + CEP) e janela nos meses 14–19. **Decisão D2 do candidato pendente.**"
- **Aceite:** `grep -rn "Como desenvolver" docs --include=*.md` fora de `_arquivo/` devolve só textos que **não** são a pergunta principal (p. ex. a tabela comparativa de desenhos).

### WP5 — Registrar os dados e normas brasileiras a conferir

- **Criar** `docs/fundamentacao/dados-e-normas-brasileiras-2026-10-30.md` com o **Apêndice B2** (tabela), mantendo a coluna **Status**.
- A IA executora com acesso à web **abre cada fonte**, confere o número, a página e a redação, e muda o Status para `Conferido em <data>` ou `Divergente: <o que difere>`. Dados `A conferir` **não entram no PDF final**.
- Atualizar o `[CONFIRMAR]` correspondente no texto-base à medida que cada item for conferido.

### WP6 — Consolidar as referências

- Em `docs/fundamentacao/referencias-e-busca-bibliografica.md`, acrescentar a seção "Lista consolidada do anteprojeto (v1)" com a tabela do **Apêndice B3** (citação no texto → referência ABNT → situação da verificação).
- Para as 3 fontes brasileiras do levantamento de 24/10 (RLAE, Ciência & Saúde Coletiva, Revista Bioética), **obter os metadados completos** abrindo cada artigo (autores, ano, volume, DOI) antes de sequer citar no texto. Se não for possível, mantê-las fora da lista final.
- Não incluir nenhuma referência que o texto não cite.

### WP7 — Cronograma

- **Criar** `docs/anteprojeto/planejamento/cronograma-24-meses.md` com a tabela do Apêndice A (seção "Cronograma de execução") e as quatro notas que a acompanham.
- Conferir, na Deliberação vigente do curso, se há **exame de qualificação**, prazos de disciplinas e o Simpósio Inaugural; se houver, registrar como nota (o modelo tem linhas fixas, e não é para acrescentar linhas).

### WP8 — Montar o DOCX de trabalho (somente quando o candidato confirmar que quer migrar)

Pré-condições: D1, D2, D3, D4 definidas; nome do candidato fornecido.

1. Copiar o modelo: `cp docs/anteprojeto/selecao/fontes-oficiais/Modelo_*.docx docs/anteprojeto/submissao/rascunho-docx/Anteprojeto_Treino-de-Teleconsulta_v1.docx` (criar a pasta). **Não** colocar nada em `documentos-finais/` (reservado a arquivos conferidos).
2. Preencher **na cópia**, preservando estilos de título (para o sumário automático), com `python-docx` ou com a skill de DOCX da própria IA:
   - Capa: nome do projeto; nome do candidato (`[PREENCHER]`); linha: `2 – Tecnologias para Educação em Saúde`; tipo: usar a **redação literal do edital**: `5) Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde` (a capa do DOCX numera dois itens como "4" e escreve diferente).
   - Substituir cada parágrafo `[Desenvolva ...]`/`[Inserir ...]` pelo texto da seção correspondente do Apêndice A. Manter os títulos exatamente como estão no modelo.
   - Remover os parágrafos "📌 Orientações de preenchimento" e os modelos de referência ABNT da seção Referências (D9). Manter o parágrafo institucional sobre ausência de recursos orçamentários e bolsas (é texto do Programa).
   - Cronograma: marcar `X` nas células da tabela de 24 meses conforme o Apêndice A.
   - Tipo de produto: trocar `( )` por `(X)` somente na opção decidida em D4 e preencher "Justificativa da escolha".
   - Referências: lista em ordem alfabética, ABNT NBR 6023:2018; citações no texto ABNT NBR 10520:2023, sistema autor-data.
3. Sumário: a IA não consegue atualizar o campo. Ativar `w:updateFields` em `settings.xml` **e** avisar o candidato para abrir no Word, atualizar o índice inteiro e salvar.
4. Conferir o checklist de formatação do modelo (Arial 12; margens sup./esq. 3 cm e inf./dir. 2 cm; justificado; espaçamento 1,5; recuo 1,25 cm; resumo/abstract ≤ 500 palavras; 3 a 5 palavras-chave).
5. Exportar para PDF (LibreOffice) e verificar: abre sem erro; **≤ 8 MB** (edital, item 13, p. 5); ordem das seções; nenhuma marca `[...]`; nº de páginas registrado (o edital não fixa limite).
6. **Não** declarar o arquivo "final". Só o candidato, após revisão própria e da orientação, move o PDF para `documentos-finais/`.

### WP9 — Gestão: refletir o estado real

- `docs/gestao/estado-atual-do-projeto.md`:
  - §1 linha "Anteprojeto e seleção": substituir por: "Texto-base completo na estrutura do DOCX oficial em `anteprojeto/rascunhos/anteprojeto-docx-oficial.md` (v1, 30/10/2026), pendente de revisão do candidato e da orientação. DOCX/PDF preenchido ainda não existe no repositório. Status da candidatura: não confirmado (D1)."
  - §4: acrescentar "O PDF do edital 2027 e o DOCX do modelo estão em `fontes-oficiais/` e foram conferidos em 30/10/2026 (ver conferência). O edital vale só para a turma de março/2027 (item X.7)."
- `docs/gestao/roadmap.md` Fase 1: marcar `[x]` em "Completar Proposta de valor, SUS Digital, Governo Digital, equidade..., governança de dados, tipo de estudo, método de análise, cronograma, infraestrutura e tipo de produto" **com a ressalva** "(texto-base v1; dados a conferir no WP5)"; manter `[ ]` nos itens de orientação, migração para DOCX e carta.
- `docs/gestao/tarefas-pessoais-e-proximos-passos.md`: acrescentar em "Prioridade 1": D1–D9 (seção 2 deste relatório) como lista de decisões do candidato; acrescentar "Ler e reescrever o texto-base com suas palavras (edital X.8: plágio/autoplágio)".
- `README.md` (raiz), bullet "Candidatura": acrescentar "texto-base na estrutura do DOCX em `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`".
- `docs/anteprojeto/submissao/carta-exposicao-de-motivos.md`: **só** inserir, abaixo do aviso inicial, a linha `> Harmonizar com o texto-base: o anteprojeto afirma público, pergunta, método e tarefas; a carta ainda diz que serão refinados. Rever após D2/D3.` Não preencher campos pessoais.
- `docs/anteprojeto/submissao/declaracao-conhecimento-deliberacao-13-2023.md`: inserir `> Confirmar no site do Programa qual Deliberação está vigente; o edital (IV.3, nº 15) não informa o número.`

### WP10 — Defesa oral

- Em `docs/defesa/guia-defesa-oral.md`, acrescentar a seção "Respostas-base ancoradas no texto" com o **Apêndice C** e uma tabela "critério do edital → slide(s)" (sete critérios pontuados × slides 2–9 do guia). Não alterar o ODP histórico.
- Nos slides 11 (motivação) e 1 (nome), manter `[PREENCHER PELO CANDIDATO]`.
- No Cenário A, cada resposta-base deve ser **conferida com o PDF efetivamente enviado** antes de ser usada.

### WP11 — Docentes e aderência (tarefa de pesquisa)

- **Criar** `docs/anteprojeto/planejamento/docentes-e-aderencia.md` com o modelo do **Apêndice D**.
- Preencher, para os 10 docentes **permanentes** (o FAQ citado no repo trata de permanentes; confirmar), apenas com fontes abertas: página do Programa e **Lattes** (últimos 5 anos): linhas de pesquisa, palavras-chave, orientações concluídas, projetos em educação em saúde, telessaúde, acessibilidade, simulação, letramento.
- **Não recomendar nomes.** Apresentar evidência por docente e deixar a escolha ao candidato (D5). Marcar o que não pôde ser verificado.

### WP12 — Arrumação menor (pedir confirmação antes de apagar)

- `text.txt`: **não apagar**; propor ao candidato (1 byte, sem uso).
- `docs/anteprojeto/selecao/criterios-edital-e-cinco-temas.md`: renomear para `historico-escolha-do-tema.md` e corrigir os links de entrada (`docs/anteprojeto/README.md` linha 16); corrigir no corpo a referência a "seis-temas" para o nome real do arquivo arquivado (`criterios-edital-e-seis-temas-2026-10-30.md`).

### WP13 — Fechamento

1. Salvar este relatório em `relatorios/relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md`; acrescentar em `relatorios/README.md`: `- [Relatório 03](relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md) — plano de edição e texto-base do anteprojeto na estrutura do DOCX.`
2. Registrar no fim do relatório (seção "Acompanhamento") o que foi executado, o que ficou pendente e por quê.
3. Rodar todas as verificações (seção 4).

---

## 4. Verificações

**Links relativos quebrados** (rodar na raiz do repositório):

```bash
python3 -I - <<'EOF'
import re, os
bad = []
for root, _, fs in os.walk('.'):
    if 'node_modules' in root or '.git' in root.split(os.sep):
        continue
    for f in fs:
        if f.endswith('.md'):
            p = os.path.join(root, f)
            t = open(p, encoding='utf8').read()
            for m in re.finditer(r'\]\(([^)#\s]+)(#[^)]*)?\)', t):
                u = m.group(1)
                if u.startswith(('http', 'mailto')):
                    continue
                if not os.path.exists(os.path.normpath(os.path.join(root, u))):
                    bad.append((p, u))
print(len(bad), 'quebrados'); [print(b) for b in bad]
EOF
```

**Contagem de palavras do Resumo e do Abstract** (limite 500; a conta abaixo exclui rótulos de seção):

```bash
python3 -I - <<'EOF'
import re
t = open('docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md', encoding='utf8').read()
def bloco(a, b):
    i = t.index(a); j = t.index(b, i); return t[i:j]
for nome, (a, b) in {'Resumo': ('## RESUMO', '## ABSTRACT'), 'Abstract': ('## ABSTRACT', '## INTRODUÇÃO')}.items():
    s = bloco(a, b); s = re.sub(r'\*\*Palavras-chave:.*|\*\*Keywords:.*', '', s)
    print(nome, len(re.findall(r'\w+', s)), 'palavras')
EOF
```

**Marcas pendentes:** `grep -n "\[CONFIRMAR\|\[PREENCHER\|\[DEFINIR" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md | wc -l` — o número deve cair a zero **antes** do PDF final, não antes do texto-base.

**Resíduos proibidos no corpo do anteprojeto:** `grep -n "OE-0\|RF-0\|rascunho\|(\.\./\|](docs/" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` deve devolver vazio (o texto-base usa descrições, não códigos internos).

**Datas vigentes:** `grep -rn "29/10" docs README.md | grep -v _arquivo` — cada ocorrência deve estar numa nota histórica ("já passou").

---

## Apêndice A — Texto-base do anteprojeto na estrutura do DOCX oficial

> Instruções: copiar o que está entre as marcas. O texto é **proposta de redação** para o candidato revisar e reescrever com suas palavras (edital, item X.8). Colchetes = pendência.
> Dados do produto vêm de `docs/prototipo/produto-minimo.md` e `mapa-objetivos-educativos-e-tarefas.md`; dados externos estão no Apêndice B2.

<!-- INÍCIO: anteprojeto-docx-oficial.md -->
# Anteprojeto — texto-base na estrutura do modelo oficial (Turma 2027)

> **Status:** texto-base v1 (30/10/2026), escrito na ordem e com os títulos do DOCX oficial. Não é o arquivo de candidatura: precisa ser migrado para uma cópia do DOCX, revisado pelo candidato e pela orientação, e ter todas as marcas entre colchetes resolvidas. Apagar este bloco ao migrar.

## CAPA

- **Nome do projeto:** Treino de Teleconsulta: desenvolvimento e avaliação de um simulador educativo web para adultos com baixa familiaridade digital
- **Nome do candidato:** [PREENCHER PELO CANDIDATO]
- **Linha de pesquisa:** 2 – Tecnologias para Educação em Saúde
- **Tipo de projeto:** 5) Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde

## RESUMO

**Contexto e problema.** Participar de uma teleconsulta exige do usuário ações digitais distintas da conversa clínica: preparar o aparelho e o ambiente, acessar a sala virtual, conferir o áudio e pedir esclarecimentos quando algo falha. A evidência sobre como preparar usuários para essas ações é limitada e de resultados mistos, e os recursos de prática guiada em português brasileiro identificados até aqui são escassos [CONFIRMAR após a busca formal].

**Pergunta de pesquisa.** Em que medida um simulador educativo web, que permite a adultos praticar em cenários fictícios as ações digitais básicas de uma teleconsulta, atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura e de recursos existentes, segundo inspeção técnica, pedagógica e de acessibilidade?

**Objetivo.** Desenvolver e avaliar, por inspeção técnica, pedagógica e de acessibilidade, um simulador educativo web em português brasileiro para a prática de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.

**Método.** Pesquisa tecnológica aplicada, conduzida segundo o arcabouço Design Science Research. Inclui busca bibliográfica reproduzível (PubMed/MEDLINE, BVS/LILACS e SciELO) e comparação de recursos existentes; derivação de requisitos rastreáveis; desenvolvimento iterativo; e avaliação por inspeção, com critérios definidos previamente: conformidade com a WCAG 2.2 nível AA, avaliação heurística, percurso cognitivo, rubrica pedagógica e legibilidade dos textos, com inspetores independentes. Uma etapa condicional, com validação de conteúdo por especialistas ou teste de usabilidade com poucas pessoas, só ocorrerá após indicação da orientação e apreciação do Comitê de Ética em Pesquisa.

**Produto.** Simulador web responsivo, gratuito, sem cadastro e sem coleta de dados, com três momentos: preparação do aparelho e do ambiente; prática de três situações fictícias (o link não abre, não se consegue ouvir, uma informação não ficou clara), com escolhas e feedback explicativo; e encerramento, com a confirmação dos próximos passos. Todo o conteúdo é fictício. Não realiza consulta, não usa áudio ou vídeo ao vivo e não se conecta a serviços ou prontuários.

**Resultados esperados.** Matriz de evidências e comparação de recursos existentes; simulador aberto e documentado, com matriz de rastreabilidade entre fonte, requisito, objetivo educativo, tarefa e verificação; relatório de inspeção com defeitos, correções e limitações; e recomendações de adaptação e de futura avaliação com usuários. O estudo não pretende demonstrar aprendizagem duradoura nem efeitos clínicos.

**Palavras-chave:** Consulta Remota; Telemedicina; Letramento em Saúde; Treinamento por Simulação; Educação em Saúde. [CONFIRMAR cada descritor no DeCS/MeSH; "Consulta Remota" está confirmado.]

## ABSTRACT

**Background and problem.** Taking part in a teleconsultation requires users to carry out digital actions that are separate from the clinical conversation: preparing the device and the room, joining the virtual room, checking the audio, and asking for clarification when something fails. Evidence on how to prepare users for these actions is limited and mixed, and the guided-practice resources in Brazilian Portuguese identified so far are scarce [CONFIRM after the formal search].

**Research question.** To what extent does a web-based educational simulator, which lets adults practice in fictional scenarios the basic digital actions of a teleconsultation, meet the content, language, privacy and accessibility requirements derived from the literature and from existing resources, as judged by technical, pedagogical and accessibility inspection?

**Objective.** To develop and evaluate, through technical, pedagogical and accessibility inspection, a web-based educational simulator in Brazilian Portuguese for practicing the basic digital actions of taking part in a teleconsultation, aimed at adults with low digital familiarity.

**Methods.** Applied technological research following the Design Science Research framework. It includes a reproducible literature search (PubMed/MEDLINE, BVS/LILACS and SciELO) and a comparison of existing resources; derivation of traceable requirements; iterative development; and evaluation by inspection against predefined criteria: conformance with WCAG 2.2 level AA, heuristic evaluation, cognitive walkthrough, a pedagogical rubric and text readability, with independent inspectors. A conditional stage, with content validation by experts or a usability test with a few people, will take place only if the academic supervisor requests it and a research ethics committee reviews it.

**Product.** A responsive web simulator, free of charge, with no sign-up and no data collection, with three moments: preparing the device and the room; practicing three fictional situations (the link does not open, the user cannot hear, a piece of information was unclear) with choices and explanatory feedback; and closing, with confirmation of the next steps. All content is fictional. It does not conduct a consultation, use live audio or video, or connect to services or health records.

**Expected results.** An evidence matrix and a comparison of existing resources; an open, documented simulator with a traceability matrix linking source, requirement, learning objective, task and verification; an inspection report with defects, fixes and limitations; and recommendations for adaptation and for a future evaluation with users. The study does not aim to demonstrate lasting learning or clinical effects.

**Keywords:** Remote Consultation; Telemedicine; Health Literacy; Simulation Training; Health Education. [CONFIRM each descriptor in DeCS/MeSH.]

## INTRODUÇÃO

A transformação digital da saúde no Brasil avança por política e por norma. O Programa SUS Digital, instituído em 2024, tem como objetivo geral ampliar o acesso da população às ações e aos serviços do SUS e inclui, entre seus objetivos específicos, fomentar o letramento digital e a cultura da saúde digital (BRASIL, 2024a). A Lei nº 14.510/2022 consolidou a telessaúde no país (BRASIL, 2022). Na ponta dos serviços, a teleconsulta é ofertada por 28% dos estabelecimentos de saúde pesquisados e a interação online com a equipe de saúde passou de 16% em 2023 para 35% em 2025 (CGI.BR, 2026a) [CONFIRMAR os dois números e a base de cada indicador no relatório original].

Participar de uma teleconsulta exige ações digitais que não fazem parte da conversa clínica: preparar o aparelho e a conexão, acessar um link, reconhecer os controles, perceber se há áudio, pedir ajuda quando a comunicação falha e localizar as informações de encerramento. Essas ações correspondem a componentes do letramento em saúde digital, entendido como o conjunto de habilidades para buscar, encontrar, compreender, avaliar e aplicar informação eletrônica em saúde (NORMAN; SKINNER, 2006). A acessibilidade é condição transversal: o padrão global da OMS e da UIT para a acessibilidade de serviços de telessaúde e o guia de implementação de 2024 tratam de pessoas com deficiência e de outros grupos que enfrentam barreiras de uso (WHO; ITU, 2022; WHO; ITU, 2024).

A literatura sobre preparo de usuários é limitada. Uma revisão de escopo identificou 13 estudos de treinamento de usuários para consultas síncronas de telessaúde entre 8.087 registros únicos; predominaram chamadas preparatórias individuais e instruções escritas, e a evidência de melhora da competência foi limitada e mista (GALVIN et al., 2024). Outra revisão, sobre estratégias para elevar o letramento em saúde digital de adultos mais velhos, incluiu 24 estudos e apontou a necessidade de melhorar o desenho dos estudos e a adequação dos instrumentos (YANG et al., 2024). O contexto brasileiro acrescenta barreiras de dispositivo e de conexão: segundo a pesquisa TIC Domicílios 2025, 85% da população de 10 anos ou mais usa a internet, 65% dos usuários acessam apenas pelo celular, proporção que chega a 87% nas classes DE (CGI.BR, 2026b) [CONFIRMAR números e páginas].

O projeto parte de um referencial de aprendizagem de adultos e de simulação em saúde. A andragogia indica que adultos aprendem melhor quando a tarefa tem relevância imediata e utilidade prática (KNOWLES; HOLTON; SWANSON, 2015). A teoria da carga cognitiva recomenda limitar o que se exige da memória de trabalho a cada passo (SWELLER, 1988), o que orienta o desenho de uma instrução por tela. Uma revisão sistemática de simulações médicas identificou o feedback como o elemento mais associado à aprendizagem efetiva (ISSENBERG et al., 2005) [CONFIRMAR a formulação]. Dessas fontes decorrem os princípios do simulador: uma ação por vez, palavras concretas, escolhas plausíveis e feedback explicativo e não punitivo.

Neste projeto, "baixa familiaridade digital" designa a condição de adultos que relatam precisar de ajuda para realizar sozinhos tarefas digitais básicas de uma teleconsulta, como abrir um link recebido, ligar e ajustar áudio e vídeo e localizar controles na tela. A definição é funcional e revisável. Ela não equivale a idade avançada, baixa escolaridade ou deficiência. A hipótese de design a examinar é que a prática de decisões em cenários fictícios, com feedback imediato, em português simples e sem cadastro, oferece uma contribuição distinta de guias, vídeos e cursos existentes.

## JUSTIFICATIVA

**O problema.** Quem chega a uma teleconsulta sem ter praticado as ações digitais necessárias aprende por tentativa e erro durante o atendimento, em um momento de maior tensão e de tempo limitado. Os recursos de preparo identificados em levantamento exploratório são, em geral, guias textuais, vídeos e cursos autoguiados. Exemplos: o curso *Digital House Calls* (BRIDGINGAPPS, [s.d.]), os guias do Telehealth.HHS.gov (UNITED STATES, [s.d.]) e o tutorial do TelessaúdeBA (BAHIA, [s.d.]). São, quase todos, específicos de um serviço ou de outro idioma. Na busca exploratória realizada, não foi identificado um simulador interativo de decisões, em português brasileiro, de uso sem cadastro. A busca sistemática do projeto testará essa afirmação.

**Pergunta de pesquisa.** Em que medida um simulador educativo web, que permite a adultos praticar em cenários fictícios as ações digitais básicas de uma teleconsulta, atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura e de recursos existentes, segundo inspeção técnica, pedagógica e de acessibilidade?

**Aderência institucional.** O projeto pertence à linha 2, Tecnologias para Educação em Saúde, e ao tipo de projeto 5, Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde. O produto principal é uma tecnologia educacional digital, de uso a distância, cujo propósito é preparar pessoas para usar serviços de telessaúde, objeto do Programa. [CONFIRMAR e citar a descrição oficial da linha 2 em telessaude.uerj.br/mestrado/linhas-de-pesquisa.]

### Relevância e magnitude do problema para o ecossistema de Saúde com foco no SUS Digital

A demanda por competências digitais para usar serviços de saúde cresce com a oferta desses serviços. A teleconsulta está presente em 28% dos estabelecimentos de saúde pesquisados, e a interação online com a equipe subiu de 16% para 35% entre 2023 e 2025 (CGI.BR, 2026a) [CONFIRMAR]. Do lado dos usuários, 52% dos usuários de internet buscaram informações sobre saúde nos três meses anteriores à pesquisa, e quase metade da população usuária está em nível de habilidades digitais abaixo do básico (CGI.BR, 2026b) [CONFIRMAR as duas informações e a base do indicador]. A pesquisa TIC Saúde não traz, nos resultados consultados, indicador sobre preparo de usuários para a teleconsulta [CONFIRMAR em todo o relatório], o que é em si uma lacuna de informação.

O Programa SUS Digital estrutura sua atuação em três eixos, o primeiro dos quais é a "cultura de saúde digital, formação e educação permanente em saúde" (BRASIL, 2024a, art. 8º). Entre seus objetivos específicos estão fomentar "o letramento digital e a cultura da saúde digital" e reduzir "a iniquidade no acesso às soluções e serviços de saúde digital" (BRASIL, 2024a, art. 2º) [CONFIRMAR os incisos e a transcrição no texto da Portaria]. O simulador contribui para o eixo da cultura e da formação em saúde digital, por meio de prática educativa. Ele não se integra a sistemas do SUS e não substitui a oferta de serviços acessíveis; atua sobre a preparação dos usuários.

## OBJETIVOS

### Objetivo geral

Desenvolver e avaliar, por inspeção técnica, pedagógica e de acessibilidade, um simulador educativo web em português brasileiro para a prática, em cenários fictícios, de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.

### Objetivos específicos

**1)** Mapear as evidências científicas e os recursos educativos existentes sobre preparo de usuários para teleconsulta, por busca bibliográfica reproduzível e matriz comparativa, a fim de derivar objetivos educativos e requisitos rastreáveis.

**2)** Desenvolver, de forma iterativa, o simulador com os momentos de preparação, de prática de situações de dificuldade e de encerramento, documentando a rastreabilidade entre fonte, requisito, objetivo educativo, tarefa e verificação.

**3)** Avaliar o simulador por inspeção técnica, pedagógica e de acessibilidade, com critérios definidos previamente e inspetores independentes, registrando defeitos, correções e limitações e formulando recomendações de adaptação e de futura avaliação com usuários.

## PROPOSTA DE VALOR

O projeto propõe uma inovação de natureza educacional e tecnológica: um **simulador de decisões** que permite praticar, antes do atendimento, as ações digitais de uma teleconsulta. A dor atendida é a aprendizagem por tentativa e erro no momento do atendimento. A oportunidade é oferecer um recurso aberto, em português simples, de uso no celular e sem cadastro, que serviços e cursos possam adotar e adaptar.

### Potencial de contribuição científica, tecnológica ou de inovação para a área de Telessaúde e Saúde Digital

A contribuição é tripla. **Tecnológica:** um simulador web aberto, com três momentos e feedback por escolha, já existente como prova de conceito e a ser evoluído. **Metodológica:** uma matriz de rastreabilidade entre fonte, requisito, objetivo educativo, tarefa e verificação, e um protocolo de inspeção técnica, pedagógica e de acessibilidade reproduzível por outros grupos que desenvolvam tecnologias educacionais em saúde sem acesso imediato a participantes. **Científica:** uma síntese estruturada da evidência e dos recursos sobre preparo de usuários para teleconsulta, com a lacuna delimitada e testável.

### Potencial de beneficiários e público-alvo da pesquisa

**Beneficiários diretos:** adultos com baixa familiaridade digital que utilizarão ou poderão utilizar teleconsultas, nos termos da definição funcional da Introdução. **Indiretos:** equipes e serviços de telessaúde, que reduzem falhas de acesso e tempo de atendimento perdido; cursos de formação em saúde; e cuidadores e familiares que apoiam o acesso.

**Equidade e diversidade.** O desenho responde a barreiras específicas, e não a um público homogêneo. (i) *Conectividade e dispositivo:* 87% dos usuários das classes DE acessam a internet apenas pelo celular (CGI.BR, 2026b) [CONFIRMAR]; por isso o simulador é pensado para telas pequenas, consome poucos dados e funciona sem cadastro. (ii) *Letramento funcional:* instruções curtas, uma ação por tela, palavras concretas, ritmo livre e reinício a qualquer momento. (iii) *Baixa visão e tecnologias assistivas:* navegação por teclado, foco visível, contraste, ampliação e semântica para leitores de tela, verificados por inspeção segundo a WCAG 2.2. (iv) *Surdez e perda auditiva:* o cenário "não consigo ouvir" será complementado por uma variante com alternativas de comunicação por texto, como o chat e a legenda, em linha com as recomendações da OMS e da UIT (WHO; ITU, 2022; 2024) [requisito planejado; não implementado hoje]. O projeto não usa idade, escolaridade ou deficiência, isoladamente, para presumir baixa familiaridade digital.

### Potencial da demanda de pesquisa

A demanda decorre de três fatos documentados: a expansão da teleconsulta e da interação online nos serviços (CGI.BR, 2026a); a presença de barreiras de dispositivo, conexão e habilidades entre os usuários (CGI.BR, 2026b); e a evidência limitada sobre como preparar usuários, apontada por revisões recentes (GALVIN et al., 2024; YANG et al., 2024). A demanda direta por um simulador, por parte de serviços e usuários, será explorada por contato institucional com a rede de saúde de Guaraí-TO e com núcleos de telessaúde, sem que isso seja pré-requisito do estudo. [Não há parceria estabelecida.]

### Potencial de complexidade da solução

A complexidade técnica é deliberadamente baixa: arquitetura estática, sem servidor, banco de dados, login ou serviços de terceiros em tempo de uso. A complexidade está na pedagogia e na acessibilidade: equilibrar realismo e segurança, escrever em linguagem simples para públicos diversos, assegurar uso por teclado, toque e leitor de tela em vários dispositivos, e evitar que os cenários pareçam serviço oficial ou induzam a inserir dados reais. Esses desafios exigem competências em comunicação em saúde, desenvolvimento web, acessibilidade e avaliação de tecnologias educacionais, que o projeto articula com a orientação.

### Potencial de escalabilidade da solução

Como não depende de infraestrutura de servidor, o simulador pode ser hospedado de forma estática, a custo baixo ou nulo, e replicado por outros serviços. O plano de escala combina: licença aberta [DEFINIR]; guia de adaptação dos cenários a outros serviços, fluxos e plataformas; e disseminação por núcleos de telessaúde, cursos de saúde, secretarias de saúde e programas de inclusão digital. As condições para a expansão são a revisão local do conteúdo, a manutenção do código e a atualização dos cenários quando as plataformas mudarem.

### Potencial de contribuição para o SUS e/ou a Saúde Suplementar

*Educação e equidade:* amplia oportunidades de prática segura para quem hoje depende de tentativa e erro. *Segurança:* os cenários ensinam ações protetivas, como confirmar o link pelo contato que o serviço informou e não digitar senha ou código em links inesperados. *Acesso:* reduz uma barreira de uso, sem alterar a oferta de serviços. *Saúde suplementar:* operadoras e prestadores com teleconsulta podem reutilizar e adaptar o recurso para seus usuários. A contribuição é educativa e indireta. Efeitos sobre uso de serviços, continuidade do cuidado ou desfechos clínicos estão fora do alcance do desenho e não serão alegados.

### Potencial de Inovação

O projeto não alega ser o primeiro recurso de preparo para teleconsulta: existem curso autoguiado, guias e tutoriais (BRIDGINGAPPS, [s.d.]; UNITED STATES, [s.d.]; BAHIA, [s.d.]). A inovação proposta está na combinação de quatro características, que a matriz comparativa do projeto vai examinar: (1) prática ativa de escolhas, com feedback imediato e não punitivo; (2) foco em ações seguras e protetivas, como a confirmação de links por canal conhecido; (3) português brasileiro simples, desenho para celular e baixo consumo de dados, sem cadastro; (4) possibilidade de adaptação dos cenários a diferentes serviços e cursos. O valor esperado é de adoção institucional e de reúso como recurso educacional aberto, e não de receita.

### Potencial de impacto relacionado aos Objetivos de Desenvolvimento Sustentável

- **ODS 3, meta 3.8 (cobertura universal de saúde):** ao preparar pessoas para usar serviços de saúde a distância, o simulador contribui para o acesso efetivo a serviços de qualidade.
- **ODS 4, meta 4.4 (habilidades relevantes para jovens e adultos):** o simulador ensina habilidades digitais aplicadas à saúde. O indicador oficial 4.4.1 mede a proporção de jovens e adultos com habilidades em tecnologias da informação e comunicação.
- **ODS 10, meta 10.2 (inclusão de todos):** o desenho considera barreiras de dispositivo, conexão, letramento e deficiência, para que a oferta digital de saúde não aprofunde desigualdades.

[CONFIRMAR o texto oficial de cada meta (ONU/IPEA) antes de citar.]

### Potencial de impacto relacionado à Estratégia Nacional de Governo Digital do Brasil

O instrumento federal vigente é a Estratégia Federal de Governo Digital 2024–2027, instituída pelo Decreto nº 12.198/2024 (BRASIL, 2024b). Entre seus princípios estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no Decreto e no ato que a detalha, Portaria SGD/MGI nº 6.618/2024]. O simulador se relaciona ao primeiro por preparar cidadãos para usar serviços públicos digitais de saúde, e ao segundo pela privacidade por desenho: não coleta dados pessoais ou de saúde. Não há integração com plataformas governamentais.

## MATERIAL E MÉTODO

**Desenho.** Pesquisa tecnológica aplicada, conduzida segundo o arcabouço Design Science Research (HEVNER et al., 2004; PEFFERS et al., 2007), que organiza o projeto em seis atividades: (A) identificação do problema; (B) definição dos objetivos da solução, ou requisitos; (C) projeto e desenvolvimento; (D) demonstração; (E) avaliação; (F) comunicação. As atividades A e B correspondem ao objetivo específico 1; C e D, ao objetivo 2; E, ao objetivo 3; F reúne dissertação, produto e documentação. [D3: confirmar o arcabouço com a orientação.]

**Cenário e usuários.** O trabalho é realizado a distância, em ambiente próprio de desenvolvimento e inspeção. A etapa-base (Camada 0) **não envolve participantes**. O público de interesse é descrito na Introdução e orienta os requisitos.

**Etapa 1 — Fundamentação e recursos existentes (meses 1–8).** Busca reproduzível em PubMed/MEDLINE, BVS/LILACS e SciELO, em português, inglês e espanhol, com janela prioritária de 2016 a 2026 e inclusão de trabalhos seminais anteriores quando conceitualmente necessário. Os conceitos centrais são teleconsulta/telessaúde, treinamento ou preparo de usuários, simulação educativa, usabilidade, acessibilidade, habilidades digitais e necessidades de apoio. Registram-se estratégias executadas, data, filtros, totais, exportações, deduplicação por DOI/PMID, critérios de inclusão e exclusão e motivo de cada exclusão. Em paralelo, benchmarking de guias, vídeos, tutoriais e simuladores, com matriz de funcionalidades, público, idioma, prática interativa, acessibilidade e requisitos técnicos.

**Etapa 2 — Objetivos educativos e requisitos (meses 4–10).** As evidências viram objetivos de aprendizagem observáveis, tarefas e requisitos funcionais, pedagógicos, de linguagem, de privacidade e de acessibilidade. Cada requisito é ligado à sua fonte, à tarefa no simulador e à forma de verificação (matriz de rastreabilidade).

**Etapa 3 — Desenvolvimento do simulador (meses 3–14).** A partir de uma prova de conceito já existente, o simulador é refinado em ciclos. O produto tem três momentos: (a) preparação do aparelho, da conexão, do ambiente e das dúvidas a esclarecer; (b) prática de três situações fictícias, selecionáveis — link que não abre, dificuldade para ouvir e informação não compreendida — com escolhas e feedback contextual; (c) encerramento, com exemplos e um exercício de escolha única para confirmar o que ficou combinado, o próximo passo e o contato previamente informado pelo serviço. Personagens, links e mensagens são fictícios; o simulador não ativa câmera nem microfone, não envia nem armazena dados.

**Etapa 4 — Avaliação (meses 10–19), em duas camadas.**
- **Camada 0 (base, sem participantes).** Inspeção técnica, pedagógica e de acessibilidade com critérios definidos previamente: (i) conformidade com a WCAG 2.2, nível AA, por critério, segundo a metodologia WCAG-EM (W3C, 2014; W3C, 2024), com verificadores automáticos como apoio, e não como prova; (ii) avaliação heurística e percurso cognitivo (NIELSEN, 1993); (iii) rubrica pedagógica, que examina se cada instrução ensina uma ação observável, se o feedback explica o motivo da resposta segura e se o tom é respeitoso, não punitivo e não clínico; (iv) legibilidade dos textos, por índice para o português [DEFINIR e citar]; (v) teste de funcionamento, teclado, foco, zoom, movimento reduzido, reinício e ausência de chamadas de rede e de armazenamento persistente. **Pelo menos um inspetor independente** examina parte dos casos, e a concordância entre avaliadores é relatada.
- **Camada 1 (condicional).** Se a orientação indicar e o CEP aprovar, realiza-se validação de conteúdo por especialistas (com índice de validade de conteúdo, limiar definido previamente) ou teste de usabilidade com poucas pessoas, em tarefas padronizadas. O protocolo, a elegibilidade, o recrutamento, os instrumentos e o plano de dados serão definidos e submetidos antes de qualquer contato. Janela prevista: meses 14 a 19. Sem esta camada, as conclusões se limitam às evidências documentais e técnicas.

**Indicadores (Camada 0).** Cobertura de requisitos (verificados/ativos); cobertura dos objetivos educativos por cenário (objetivo, tarefa, feedback e verificação presentes); critérios WCAG 2.2 atendidos, não atendidos e não aplicáveis; defeitos por gravidade, corrigidos e reabertos; legibilidade dos textos; concordância entre inspetores. **(Camada 1, se houver):** IVC por item e global; taxa de conclusão de tarefas, erros e pedidos de ajuda.

**Critérios de inclusão e exclusão.** Aplicam-se à Etapa 1: estudos e recursos sobre preparo, treinamento, letramento digital ou acessibilidade para teleconsulta, com público adulto; excluem-se estudos exclusivamente técnicos sem implicação para usuário, serviço ou comunicação, salvo se definirem padrão de acessibilidade aplicável.

### Aspectos Éticos

Na etapa atual, a pesquisa **não envolve participantes**: baseia-se em literatura, em recursos públicos e na inspeção de um produto sem coleta de dados. Segundo a Resolução CNS nº 510/2016, art. 1º, parágrafo único, pesquisas realizadas exclusivamente com textos científicos para revisão de literatura não são registradas nem avaliadas pelo sistema CEP/CONEP [CONFIRMAR o inciso]. O enquadramento da inspeção do produto será confirmado com a instituição, e não presumido. Por isso, não há número de parecer a informar. Se houver Camada 1, o protocolo será submetido ao sistema CEP/CONEP, conforme as Resoluções CNS nº 466/2012 e nº 510/2016 (BRASIL, 2012; BRASIL, 2016), **antes** de qualquer recrutamento ou coleta. O protocolo preverá participação voluntária, consentimento livre e esclarecido, possibilidade de desistência sem prejuízo, minimização de dados, confidencialidade, riscos (desconforto, cansaço, exposição de dificuldades pessoais) e medidas de mitigação, e benefícios (contribuição para o aperfeiçoamento de um recurso educativo). Autorizações institucionais, se necessárias, não substituem a apreciação ética. O simulador não solicita, transmite nem armazena dados pessoais, de saúde ou de contato; usa conteúdo fictício e não se apresenta como serviço oficial, em linha com o princípio de minimização da LGPD (BRASIL, 2018).

### Tipo de Estudo Científico na proposta

Pesquisa aplicada, de desenvolvimento tecnológico, com avaliação de tecnologia por inspeção, organizada segundo o Design Science Research. Não é estudo observacional, experimental ou de implementação, pois, na Camada 0, não há participantes nem intervenção sobre desfechos. A Camada 1, se aprovada, seria um estudo metodológico de validação de conteúdo e/ou de usabilidade formativa.

### Governança de Dados

**Produto.** O simulador não solicita, coleta, transmite nem armazena dados pessoais, de saúde ou de contato. As escolhas feitas existem apenas na memória do navegador e desaparecem ao reiniciar ou fechar a página. Todo o conteúdo é fictício. Não há login, banco de dados, servidor de aplicação nem serviços de terceiros que registrem o uso. **Pesquisa.** Os dados da Camada 0 são documentais: referências, registros de buscas, matrizes e relatórios de inspeção, armazenados em repositório de acesso restrito ao pesquisador e à orientação, com cópia de segurança e sem informações pessoais. Se houver Camada 1, o protocolo definirá finalidade, dados mínimos, anonimização ou pseudonimização, local e controle de acesso, retenção, descarte, responsáveis e compartilhamento, em conformidade com a LGPD (BRASIL, 2018).

### Método de análise dos resultados esperados

A fundamentação será analisada por síntese narrativa estruturada, distinguindo evidência publicada, inferência de design e decisão técnica. O simulador será analisado pelos indicadores da Etapa 4, apresentados com denominadores explícitos: cobertura de requisitos e de objetivos educativos; conformidade por critério WCAG; defeitos por gravidade e situação; legibilidade; e concordância entre inspetores (percentual de concordância e coeficiente kappa de Cohen). Considera-se o objetivo 3 alcançado quando todos os requisitos ativos têm verificação registrada, os defeitos graves estão corrigidos e retestados, e as limitações estão descritas. Na Camada 1, a análise será descritiva, com IVC e, se houver teste de usabilidade, taxas de conclusão e categorias de erro e de ajuda.

### Limitações do Projeto

| Limitação | Estratégia de mitigação |
|---|---|
| A inspeção sem participantes não mostra como o público-alvo usa o simulador, nem se aprende com ele. | Declarar o limite; usar inspetor independente e rubrica explícita; planejar a Camada 1 como etapa condicional e recomendar a avaliação com usuários como continuidade. |
| A lacuna de inovação depende da busca sistemática e da comparação com recursos existentes. | Executar e registrar a busca e a matriz comparativa antes de afirmar originalidade; manter a formulação como hipótese de design. |
| A parceria institucional e o acesso ao campo não estão formalizados. | A Camada 0 não depende de campo; contato exploratório com a rede de saúde, sem presumir apoio. |
| Evidência científica direta sobre treinamento de usuários é escassa e de contexto majoritariamente estrangeiro. | Rotular fontes adjacentes; basear requisitos em múltiplas fontes; evitar extrapolar. |
| Resultados de tarefas simuladas não comprovam desempenho em teleconsultas reais nem efeitos clínicos. | Não alegar aprendizagem duradoura, adoção ou desfechos; descrever o alcance real das conclusões. |
| Recursos limitados (sem financiamento do Programa) e tempo de 24 meses. | Arquitetura simples e prova de conceito já existente; priorizar o produto mínimo; ferramentas gratuitas ou abertas. |

## CRONOGRAMA DE EXECUÇÃO

Etapas em 24 meses, no formato do modelo (marcar "X" nos meses). O mês 1 corresponde ao ingresso (março/2027). [AJUSTAR ao calendário do Programa e à Deliberação vigente.]

| Etapa / Atividade | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revisão bibliográfica e referencial teórico | X | X | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Delimitação e planejamento metodológico | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Desenvolvimento da solução/produto |  |  | X | X | X | X | X | X | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |
| Submissão/aprovação ética, quando aplicável |  |  |  |  | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Coleta/produção de dados |  |  |  | X | X | X | X | X | X | X | X | X | X | X | X | X | X | X | X |  |  |  |  |  |
| Testes e validação |  |  |  |  |  |  |  |  |  | X | X | X | X | X | X | X | X | X | X |  |  |  |  |  |
| Análise dos resultados |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X | X |  |  |  |
| Redação do Trabalho de Conclusão |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X | X | X | X | X | X | X | X |  |
| Elaboração, finalização e submissão do produto final do Trabalho de Conclusão |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X |  |
| Apresentação/defesa do Trabalho de Conclusão |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |

Notas: (a) o simulador já existe como prova de conceito, o que concentra o desenvolvimento entre os meses 3 e 14 e libera tempo para fundamentação e avaliação; (b) "coleta/produção de dados" refere-se, na Camada 0, aos registros de busca, extração e inspeção; na Camada 1, somente se aprovada, à atividade com pessoas (meses 14 a 19); (c) a submissão ao CEP só é possível após a matrícula e, por isso, ocupa os meses 5 a 9, com folga para pendências, e só se aplica à Camada 1; (d) as disciplinas são exclusivamente a distância, e o Simpósio Inaugural é presencial e obrigatório. [CONFIRMAR exame de qualificação e demais prazos na Deliberação.]

## INFRAESTRUTURA, PARCERIAS E VIABILIDADE TÉCNICA

**Infraestrutura.** Computador pessoal, acesso à internet, navegadores atualizados, ferramentas gratuitas ou de código aberto para verificação de acessibilidade e controle de versões, e hospedagem estática de baixo ou nenhum custo. Não há dependência de servidores, licenças pagas ou laboratórios.

**Parcerias.** Não há parceria institucional estabelecida. A articulação com a rede de saúde de Guaraí-TO será buscada como etapa exploratória, para compreender fluxos e necessidades, e não é condição para a Camada 0.

**Viabilidade e riscos.** A existência de uma prova de conceito funcional, a arquitetura estática e a ausência de coleta de dados tornam o plano viável em 24 meses. Riscos e respostas: (i) atraso ou não aprovação do CEP → a avaliação documental e por inspeção é entrega completa; (ii) indisponibilidade de especialistas ou de inspetor independente → ampliar a inspeção documental e recorrer a pares da instituição; (iii) sobrecarga de tempo do candidato → priorizar o produto mínimo e seguir o cronograma; (iv) deslocamentos para atividades presenciais obrigatórias → planejar com antecedência [CONFIRMAR as atividades presenciais na Deliberação].

O Mestrado Profissional em Telessaúde e Saúde Digital **não dispõe de recursos orçamentários próprios para o financiamento dos projetos de pesquisa e demais atividades acadêmicas desenvolvidos no âmbito do curso, nem de bolsas de estudos destinadas aos discentes aprovados**. Eventuais recursos necessários à execução dos projetos e à participação em atividades acadêmicas serão de responsabilidade do discente, que poderá, quando cabível, buscar financiamento ou bolsas junto a outras instituições, programas ou agências de fomento, observadas as normas e os critérios estabelecidos pelas respectivas instituições. [Parágrafo institucional do modelo; manter.]

## TIPO DE PRODUTO PLANEJADO PARA O TRABALHO DE CONCLUSÃO

( ) Artigo científico
( ) Produto Técnico
**(X) Produto Tecnológico** [D4: confirmar; indicar o estrato T1 ou T2 conforme o documento norteador da CAPES — NÃO CONFIRMADO]

**Justificativa da escolha.** O produto principal é um simulador educativo web, ou seja, um software educacional de uso aberto, documentado por requisitos, matriz de rastreabilidade, relatório de inspeção e guia de adaptação, e disponibilizado sob licença aberta [DEFINIR]. Essa modalidade corresponde ao objetivo de desenvolver uma solução educativa reutilizável por serviços e cursos de saúde. O enquadramento no estrato [T1/T2] decorre de [CONFIRMAR o critério do documento norteador]. Os resultados da avaliação serão apresentados na dissertação e poderão originar um artigo científico como produto derivado, sem que ele seja o produto principal.

## REFERÊNCIAS BIBLIOGRÁFICAS

Sistema autor-data (ABNT NBR 10520:2023); referências conforme ABNT NBR 6023:2018. Entradas marcadas com ▲ ainda têm metadados a conferir (Apêndice B3).

BAHIA. Secretaria da Saúde. Telessaúde Bahia. *Como acessar sua teleconsulta: tutorial do paciente*. Salvador: SESAB, [s.d.]. Disponível em: https://telessaude.saude.ba.gov.br/25181-2/. Acesso em: [DATA].

BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD). *Diário Oficial da União*: Brasília, DF, 15 ago. 2018. Disponível em: [URL do Planalto]. Acesso em: [DATA]. ▲

BRASIL. Lei nº 14.510, de 27 de dezembro de 2022. Altera a Lei nº 8.080, de 19 de setembro de 1990, e autoriza e disciplina a prática da telessaúde em todo o território nacional. *Diário Oficial da União*: Brasília, DF, 28 dez. 2022. Disponível em: [URL do Planalto]. Acesso em: [DATA]. ▲

BRASIL. Ministério da Saúde. Portaria GM/MS nº 3.232, de 1º de março de 2024. Altera a Portaria de Consolidação GM/MS nº 5, de 28 de setembro de 2017, para instituir o Programa SUS Digital. Brasília, DF: Ministério da Saúde, 2024a. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Decreto nº 12.198, de 24 de setembro de 2024. Institui a Estratégia Federal de Governo Digital para o período de 2024 a 2027. *Diário Oficial da União*: Brasília, DF, 2024b. Disponível em: https://www2.camara.leg.br/legin/fed/decret/2024/decreto-12198-24-setembro-2024-796286-publicacaooriginal-173095-pe.html. Acesso em: [DATA]. ▲

BRASIL. Conselho Nacional de Saúde. Resolução nº 466, de 12 de dezembro de 2012. Aprova diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. Brasília, DF: CNS, 2012. ▲

BRASIL. Conselho Nacional de Saúde. Resolução nº 510, de 7 de abril de 2016. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais. Brasília, DF: CNS, 2016. ▲

BRIDGINGAPPS. *Digital House Calls*: curso autoguiado. [S. l.]: BridgingApps, [s.d.]. Disponível em: https://bridgingapps.org/courses-landing/. Acesso em: [DATA].

COMITÊ GESTOR DA INTERNET NO BRASIL (CGI.br). Núcleo de Informação e Coordenação do Ponto BR. *TIC Saúde 2025*: resumo executivo. São Paulo: CGI.br, 2026a. Disponível em: https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260512115440/TIC_SAUDE_2025_PT_resumoexecutivo.pdf. Acesso em: [DATA]. ▲

COMITÊ GESTOR DA INTERNET NO BRASIL (CGI.br). Núcleo de Informação e Coordenação do Ponto BR. *TIC Domicílios 2025*: resumo executivo. São Paulo: CGI.br, 2026b. Disponível em: https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260511173151/tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: [DATA]. ▲

GALVIN, E.; DESSELLE, S.; GAVIN, B.; McNICHOLAS, F.; CULLINAN, S.; HAYDEN, J. Training service users in the use of telehealth: scoping review. *Journal of Medical Internet Research*, v. 26, e57586, 2024. DOI: 10.2196/57586.

HEVNER, A. R.; MARCH, S. T.; PARK, J.; RAM, S. Design science in information systems research. *MIS Quarterly*, v. 28, n. 1, p. 75–105, 2004. ▲

ISSENBERG, S. B. et al. Features and uses of high-fidelity medical simulations that lead to effective learning: a BEME systematic review. *Medical Teacher*, v. 27, n. 1, p. 10–28, 2005. ▲

KNOWLES, M. S.; HOLTON III, E. F.; SWANSON, R. A. *The adult learner*: the definitive classic in adult education and human resource development. 8. ed. London: Routledge, 2015. ▲

NIELSEN, J. *Usability engineering*. San Diego: Academic Press, 1993. ▲

NORMAN, C. D.; SKINNER, H. A. eHealth literacy: essential skills for consumer health in a networked world. *Journal of Medical Internet Research*, v. 8, n. 2, e9, 2006. DOI: 10.2196/jmir.8.2.e9.

PEFFERS, K.; TUUNANEN, T.; ROTHENBERGER, M. A.; CHATTERJEE, S. A design science research methodology for information systems research. *Journal of Management Information Systems*, v. 24, n. 3, p. 45–77, 2007. ▲

SWELLER, J. Cognitive load during problem solving: effects on learning. *Cognitive Science*, v. 12, n. 2, p. 257–285, 1988. ▲

UNITED STATES. Department of Health and Human Services. *Telehealth.HHS.gov*: preparing patients for telehealth. Washington, DC: HHS, [s.d.]. Disponível em: https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth. Acesso em: [DATA].

WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION. *WHO-ITU global standard for accessibility of telehealth services*. Geneva: WHO, 2022. Disponível em: https://www.who.int/publications/i/item/9789240050464. Acesso em: [DATA].

WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION. *Implementation toolkit for accessible telehealth services*. Geneva: WHO; ITU, 2024. Disponível em: https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities. Acesso em: [DATA].

WORLD WIDE WEB CONSORTIUM (W3C). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 dez. 2024. Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: [DATA].

WORLD WIDE WEB CONSORTIUM (W3C). *Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0*. W3C Working Group Note, 2014. Disponível em: https://www.w3.org/TR/WCAG-EM/. Acesso em: [DATA]. ▲

YANG, Y. et al. Improving the eHealth literacy of older adults: a scoping review. *Geriatric Nursing*, v. 60, p. 128–136, 2024. DOI: 10.1016/j.gerinurse.2024.07.028.

## CHECKLIST DE FORMATAÇÃO — MODELO

[Manter o título e o conteúdo conforme o modelo, se o Programa confirmar que o item faz parte do arquivo enviado — D9.]
<!-- FIM: anteprojeto-docx-oficial.md -->

### Formulação vigente (conteúdo de `docs/anteprojeto/formulacao-vigente.md`, WP4)

<!-- INÍCIO: formulacao-vigente.md -->
# Formulação vigente do anteprojeto

Fonte única de título, linha, tipo, pergunta, objetivos e palavras-chave. Os demais documentos apontam para este arquivo. Atualizado em 30/10/2026 (texto-base v1). Mudanças só com decisão registrada do candidato/orientação.

- **Título:** Treino de Teleconsulta: desenvolvimento e avaliação de um simulador educativo web para adultos com baixa familiaridade digital.
- **Linha:** 2 – Tecnologias para Educação em Saúde.
- **Tipo de projeto (redação do edital):** 5) Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Pergunta de pesquisa:** Em que medida um simulador educativo web, que permite a adultos praticar em cenários fictícios as ações digitais básicas de uma teleconsulta, atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura e de recursos existentes, segundo inspeção técnica, pedagógica e de acessibilidade?
- **Objetivo geral:** Desenvolver e avaliar, por inspeção técnica, pedagógica e de acessibilidade, um simulador educativo web em português brasileiro para a prática, em cenários fictícios, de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.
- **Objetivos específicos:** (1) Mapear evidências e recursos existentes → matriz de evidências e comparativa; (2) Desenvolver o simulador → protótipo documentado e matriz de rastreabilidade; (3) Avaliar por inspeção → relatório de inspeção com recomendações.
- **Definição operacional provisória de "baixa familiaridade digital":** adultos que relatam precisar de ajuda para realizar sozinhos tarefas digitais básicas de uma teleconsulta (abrir um link, ligar e ajustar áudio e vídeo, localizar controles). Funcional e revisável; não equivale a idade, escolaridade ou deficiência.
- **Palavras-chave (a confirmar no DeCS/MeSH):** Consulta Remota (confirmado: DeCS 32630 / MeSH D019114); Telemedicina; Letramento em Saúde; Treinamento por Simulação; Educação em Saúde.
- **Decisões pendentes do candidato:** D1–D9 (ver relatório 03, seção 2).
<!-- FIM: formulacao-vigente.md -->

---

## Apêndice B — Tabelas de apoio

### B1 — Conferência do DOCX e do edital 2027 (conteúdo de `conferencia-docx-e-edital-2027-2026-10-30.md`)

Páginas = numeração impressa no PDF do edital; conferir ao transcrever.

| Item | O que consta | Fonte | Situação no texto-base |
|---|---|---|---|
| Identidade do edital | "Edital ... Turma 2027"; início em março/2027; aprovado pelo DEPPG/PR-2 em 17/09/2026 | PDF, p. 1–2 | Confirmado |
| Prazo | Inscrições 01/10 a 30/10/2026, até 12h; boleto CEPUERJ até 30/10 | PDF, p. 4 | Confirmado; já passou |
| Prorrogação | A comissão pode alterar o calendário e prorrogar prazos (exceto cotas) | PDF, p. 11–12, X.11 | Confirmado |
| Documentos obrigatórios | 15 itens; falta de qualquer um inviabiliza a inscrição; nº 13 anteprojeto em **PDF ≤ 8 MB** no modelo; nº 14 carta em PDF ≤ 8 MB; nº 15 declaração da Deliberação | PDF, p. 5 | Confirmado |
| Etapa eliminatória | Três docentes indicados pelo candidato dão "Apto/Não apto" sobre aderência às linhas e aos objetivos do Programa; basta um "Apto" | PDF, p. 7 e 9 | Confirmado |
| Oito elementos em destaque | Linhas; ODS; potencial mercadológico/inovação; viabilidade em 2 anos; impacto; equidade e diversidade; transformação digital do SUS; escalabilidade | PDF, p. 8 | Confirmado |
| Pontuação do anteprojeto | 7 critérios × 1,0 (escalabilidade junto com inovação) = 7,0; defesa oral = 3,0; total 10 | PDF, p. 8 | Confirmado |
| Nota mínima | 14 pontos somando Lattes (10) e anteprojeto com defesa (10) | PDF, p. 9 | Confirmado |
| Conformidade | Só são avaliados anteprojetos conformes às normas publicadas e aos tipos de projeto aceitos | PDF, p. 8 | Confirmado |
| Defesa oral | 16/11/2026; resultado da elegibilidade 10/11/2026; recurso 11–12/11 | PDF, p. 10 | Confirmado |
| Validade | Só para a turma de março/2027 | PDF, p. 11, X.7 | Confirmado |
| Plágio | Plágio ou autoplágio pode ser arguido a qualquer momento e desclassifica | PDF, p. 11, X.8 | Confirmado |
| Limite de páginas | Não consta no edital | PDF | Confirmado (ausente) |
| Formatação | Arial 12; margens sup./esq. 3 cm, inf./dir. 2 cm; justificado; 1,5; recuo 1,25 cm; resumo/abstract ≤ 500; 3–5 palavras-chave; ABNT 6023:2018 e 10520:2023 | DOCX, "Checklist de formatação" | Confirmado |
| Estrutura do modelo | Capa (nome, candidato, linha, tipo) → Sumário → Resumo → Abstract → Introdução → Justificativa (+ Relevância... SUS Digital) → Objetivos (geral; específicos, preferencialmente 3) → Proposta de valor (9 subitens) → Material e Método (Aspectos éticos; Tipo de estudo; Governança de dados; Método de análise; Limitações) → Cronograma (24 meses, tabela) → Infraestrutura, parcerias e viabilidade → Tipo de produto → Referências → Checklist | DOCX | Confirmado; texto-base segue |
| Tipo de produto | Marcar uma: artigo (Q1/Q2); produto técnico (T1/T2); produto tecnológico (T1/T2), com justificativa | DOCX | Estrato **não verificado** (documento CAPES inacessível nesta rodada) |
| Capa — tipo de projeto | O DOCX numera dois itens como "4" e escreve o item 5 de outro modo; usar a redação do edital | DOCX × PDF p. 2 | Decisão: redação do edital |
| Recursos | O Programa não tem recursos orçamentários nem bolsas | DOCX | Parágrafo mantido |
| Disciplinas | Exclusivamente a distância; atividades presenciais obrigatórias (Simpósio Inaugural) | PDF, p. 11 | Citado no cronograma |

### B2 — Dados e normas brasileiras (conteúdo de `dados-e-normas-brasileiras-2026-10-30.md`)

Extraídos por leitura automatizada das fontes nesta rodada. **Nenhum entra no PDF final sem conferência humana no original.**

| ID | Dado / norma | Valor ou conteúdo extraído | Fonte (URL) | Status |
|---|---|---|---|---|
| N1 | Programa SUS Digital | Portaria GM/MS nº 3.232, de 1º/3/2024. Objetivo geral (art. 1º): promover a transformação digital no SUS para ampliar o acesso da população às ações e serviços, com integralidade e resolutividade. Art. 2º, IV: "fomentando o letramento digital e a cultura da saúde digital"; art. 2º, III: "incentivar a formação e educação permanente em saúde digital"; art. 2º, X: "reduzir a iniquidade no acesso às soluções e serviços de saúde digital". Art. 5º, I: "universalidade e equidade no acesso...". Art. 8º, eixo 1: cultura de saúde digital, formação e educação permanente. | https://www.conass.org.br/conass-informa-n-43-2024-publicada-a-portaria-gm-n-3232-que-altera-a-portaria-de-consolidacao-gm-ms-no-5-17-para-instituir-o-programa-sus-digital/ (resumo do CONASS) | A conferir no texto oficial (Portaria) |
| N2 | Estratégia Federal de Governo Digital 2024–2027 | Decreto nº 12.198, de 24/9/2024. Seis princípios (fonte secundária): governo centrado no cidadão e inclusivo; colaborativo com interoperabilidade; inteligente e inovador; confiável e seguro, com proteção de direitos, dados e informações; transparente e aberto; eficiente e sustentável. O Decreto remete a Secretaria de Governo Digital para publicar os objetivos. | https://www2.camara.leg.br/legin/fed/decret/2024/decreto-12198-24-setembro-2024-796286-publicacaooriginal-173095-pe.html ; https://www.mobiletime.com.br/noticias/26/09/2024/governo-federal-digital/ | **Princípios não confirmados em fonte oficial.** Abrir o ato que detalha a Estratégia (Portaria SGD/MGI nº 6.618/2024) |
| N3 | Lei nº 14.510/2022 | Telessaúde. Princípios listados pelo CFM: consentimento livre e informado; direito de recusa com garantia do atendimento presencial; assistência segura e com qualidade; confidencialidade dos dados; responsabilidade digital. | https://portal.cfm.org.br/noticias/lei-no-14-510-22-regulamenta-pratica | A conferir no texto da Lei; data de sanção (27/12/2022) a confirmar |
| N4 | TIC Domicílios 2025 | 85% dos usuários de internet (10+), estável desde 2023; 86% dos domicílios com internet; 65% dos usuários acessam só pelo celular (87% nas classes DE; 83% nas áreas rurais); 73% dos domicílios DE com internet; 52% dos usuários buscaram informação de saúde nos 3 meses anteriores; "abaixo do básico": quase metade; "acima do básico": 15% | https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260511173151/tic_domicilios_2025_resumoexecutivo%20pt.pdf | A conferir (páginas 3, 4, 6, 7). **Nota:** o nome do arquivo tem um espaço; usar `%20` |
| N5 | TIC Saúde 2025 | Teleconsulta: 28% dos estabelecimentos; teleconsultoria 36%; interação online com a equipe: 35% (16% em 2023); resultados de exames 39%; agendamento de consultas 34% | https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260512115440/TIC_SAUDE_2025_PT_resumoexecutivo.pdf | A conferir (p. 4); base exata de cada indicador **não especificada** |
| N6 | TIC Saúde 2024 | Dados de teleconsulta por tipo de estabelecimento e de uso por profissionais extraídos de gráficos com pareamento incerto | https://cetic.br/media/analises/tic_saude_principais_resultados_2024.pdf | **Não usar** sem leitura manual |
| N7 | DeCS/MeSH "Consulta Remota" | DeCS ID 32630; MeSH D019114; escopo: consulta por interação eletrônica ou outra forma não presencial entre paciente e médico | https://decs.bvsalud.org/en/ths/resource/?id=32630 | **Conferido** em 30/10/2026. Verificar também Telemedicina, Letramento em Saúde, Treinamento por Simulação, Educação em Saúde |
| N8 | ODS 4.4.1 | Indicador: proporção de jovens e adultos com habilidades em TIC, por tipo de habilidade | https://uis.unesco.org/node/3297502 (via busca) | A conferir no texto oficial da meta 4.4 e dos ODS 3.8 e 10.2 (ONU/IPEA) |
| N9 | Resolução CNS nº 510/2016, art. 1º, parágrafo único | Hipóteses não registradas nem avaliadas pelo sistema CEP/CONEP, incluindo pesquisa exclusivamente com textos científicos para revisão de literatura (conteúdo de memória) | Planalto/CNS | **A conferir** (não verificado nesta rodada) |
| N10 | Resolução CFM nº 2.314/2022 | Telemedicina (conteúdo não usado no texto-base) | portal.cfm.org.br | Não verificado; citar só se for necessário |
| N11 | Documento norteador CAPES (Medicina I) — estratos T1/T2 | Não acessível nesta rodada (URL fora da lista de acesso) | link do próprio DOCX (`med1-anexo.pdf`) | **Não verificado** |

### B3 — Mapa citação → referência (conferir a correspondência 1:1)

| Citação no texto | Referência | Verificação |
|---|---|---|
| (BRASIL, 2024a) | Portaria GM/MS nº 3.232/2024 | Data confirmada via CONASS; texto oficial a conferir |
| (BRASIL, 2024b) | Decreto nº 12.198/2024 | Data confirmada na Câmara; princípios a conferir |
| (BRASIL, 2022) | Lei nº 14.510/2022 | Via CFM; data a conferir |
| (BRASIL, 2018) | Lei nº 13.709/2018 (LGPD) | Metadados conhecidos; URL a inserir |
| (BRASIL, 2012; 2016) | Res. CNS 466/2012 e 510/2016 | Metadados conhecidos; conteúdo a conferir |
| (CGI.BR, 2026a) | TIC Saúde 2025 | Números a conferir |
| (CGI.BR, 2026b) | TIC Domicílios 2025 | Números a conferir |
| (GALVIN et al., 2024) | JMIR 26:e57586 | **Verificada** no repositório (PMID 39083789; 13 estudos; 8.087 registros) |
| (YANG et al., 2024) | Geriatr Nurs 60:128–136 | **Verificada** no repositório (PMID 39244798; 24 estudos) |
| (NORMAN; SKINNER, 2006) | JMIR 8(2):e9 | Verificada no repositório |
| (WHO; ITU, 2022; 2024) | Padrão global e toolkit | Verificadas no repositório |
| (W3C, 2024) | WCAG 2.2 | Verificada no repositório |
| (W3C, 2014) | WCAG-EM 1.0 | A conferir |
| (HEVNER et al., 2004); (PEFFERS et al., 2007) | DSR | Metadados de memória; **conferir** |
| (KNOWLES; HOLTON; SWANSON, 2015); (SWELLER, 1988); (ISSENBERG et al., 2005); (NIELSEN, 1993) | Referencial de aprendizagem e usabilidade | Metadados de memória; **conferir edição, páginas e a formulação atribuída** |
| (BRIDGINGAPPS, [s.d.]); (UNITED STATES, [s.d.]); (BAHIA, [s.d.]) | Recursos do benchmark | Páginas consultadas em 20/10/2026; inserir data de acesso |

Fontes brasileiras do levantamento de 24/10 (RLAE, Ciência & Saúde Coletiva, Revista Bioética) **não foram usadas** no texto-base: só podem entrar depois de metadados e leitura completos (WP6). Sugere-se que uma delas entre na Introdução ou na Justificativa, para dar evidência científica brasileira.

### B4 — Aproveitamento do rascunho antigo (16 itens) no texto-base

| Seção antiga | Destino no DOCX | Tratamento |
|---|---|---|
| 1 Nome do anteprojeto; 2 Linha; 3 Candidato | Capa | Reusar; acrescentar o tipo de projeto |
| 4 Sumário executivo | — (o DOCX não tem) | Conteúdo redistribuído em Resumo, Justificativa e Proposta de valor |
| 5 Resumo | Resumo | Reescrito em blocos rotulados; sem citações |
| 6 Abstract | Abstract | Idem, em inglês americano |
| 7 Introdução | Introdução | Ampliada com contexto brasileiro e referencial |
| 8 Justificativa | Justificativa | Pergunta e lacuna enunciadas; aderência explícita |
| 9 Potencial de inovação | Proposta de valor → Inovação, Escalabilidade | Afirmativo; plano de escala |
| 10 Impacto | Proposta de valor → Beneficiários, SUS, ODS, Governo Digital | Dividido; equidade com parágrafo próprio |
| 11–12 Objetivos | Objetivos | Um verbo principal por objetivo |
| 13 Material e método | Material e Método | Arcabouço nomeado; indicadores; duas camadas |
| 14 Aspectos éticos | Aspectos Éticos; Governança de Dados | Separado produto/pesquisa |
| 15 Limitações | Limitações | Tabela com mitigação |
| 16 Bibliografia | Referências | Só o que é citado; ABNT |
| — | Cronograma; Infraestrutura; Tipo de produto; Tipo de estudo; Método de análise | **Novas** |

### B5 — Critérios do edital → onde o avaliador encontra no texto-base

| Critério (1,0 cada, exceto onde indicado) | Seções do texto-base |
|---|---|
| Justificativa, relevância e aderência à linha | Justificativa (aderência institucional); Relevância e magnitude |
| Inovação / escalabilidade | Proposta de valor → Inovação; Escalabilidade |
| Viabilidade em 2 anos | Cronograma; Infraestrutura, parcerias e viabilidade; Complexidade |
| Impacto para a sociedade | Beneficiários; Contribuição para o SUS |
| Equidade e diversidade | Beneficiários (parágrafo "Equidade e diversidade"); Contribuição para o SUS |
| ODS | Proposta de valor → ODS |
| Transformação digital do SUS | Relevância e magnitude (SUS Digital); Contribuição para o SUS; Governo Digital |
| Defesa oral: fundamentação teórica (1,0) | Introdução (referencial); Apêndice C |

---

## Apêndice C — Respostas-base para a defesa (conferir com o texto efetivamente enviado)

Cada resposta cabe em 20 a 30 segundos. Elas assumem o texto-base; no Cenário A, **ajuste ao PDF enviado**.

| Pergunta provável | Resposta-base |
|---|---|
| Por que um simulador e não um vídeo ou um guia? | Vídeos e guias mostram o que fazer; o simulador faz a pessoa **decidir** e receber explicação. Há literatura de simulação em saúde que aponta o feedback como elemento central de aprendizagem (Issenberg et al., 2005) [conferir]. A hipótese é minha e será examinada por comparação com os recursos existentes, não afirmada. |
| O que é novo aqui? | Não digo que é o primeiro recurso de preparo. A contribuição está na combinação de prática de escolhas com feedback, foco em ações seguras, português simples sem cadastro e adaptação a outros serviços. A busca sistemática e a matriz comparativa vão testar essa combinação. |
| Como a avaliação sem participantes responde à pergunta? | A pergunta é sobre **conformidade a requisitos** derivados da literatura, medida por inspeção com critérios prévios e inspetor independente. Ela não responde se as pessoas aprendem; isso é continuidade, e há uma etapa condicional prevista. |
| Por que não testar com usuários? | Porque o acesso ao campo e a aprovação do CEP só são possíveis após a matrícula. A etapa condicional está no cronograma (meses 14–19). Sem ela, as conclusões se limitam ao que foi inspecionado. |
| Cabe em 24 meses? | Sim: o simulador já existe como prova de conceito, a arquitetura é estática e a etapa-base não depende de campo. O cronograma tem folga para o CEP. |
| Qual o impacto no SUS Digital? | Contribui para o eixo de cultura, formação e educação permanente em saúde digital do Programa SUS Digital (Portaria 3.232/2024), por prática educativa. Não se integra a sistemas e não promete mudar desfechos. |
| Como trata equidade? | Por requisitos concretos: celular e baixo consumo de dados, linguagem simples, teclado e leitor de tela, e alternativas por texto para quem não ouve. Não presumo baixa familiaridade por idade ou escolaridade. |
| Como os ODS se aplicam? | ODS 3.8 (acesso efetivo a serviços), 4.4 (habilidades em TIC) e 10.2 (inclusão), com um mecanismo por meta. |
| Por que este mestrado? | [PREENCHER PELO CANDIDATO] |

---

## Apêndice D — Modelo de `docentes-e-aderencia.md` (WP11)

```markdown
# Docentes permanentes e aderência temática — levantamento para decisão do candidato

Fonte da lista: `fontes-oficiais/Corpo_Docente_...pdf` (10 permanentes; 12 colaboradores; sem linhas de pesquisa). Levantamento feito em <data> a partir de fontes abertas. **Não é recomendação**: a escolha dos três docentes é do candidato (D5).

| Docente | Categoria | Lattes (URL) | Linhas / palavras-chave (últimos 5 anos) | Evidência de aderência (educação em saúde, telessaúde, acessibilidade, simulação, letramento) | Não verificado |
|---|---|---|---|---|---|
| Alexandra Monteiro | Permanente | | | | |
| Alexandre Sztajnberg | Permanente | | | | |
| Carlos Augusto Moreira de Sousa | Permanente | | | | |
| Lincoln Faria da Silva | Permanente | | | | |
| Magda Guimarães de Araujo Faria | Permanente | | | | |
| Maria Isabel de Castro de Souza | Permanente | | | | |
| Marcia Maria Pereira Rendeiro | Permanente | | | | |
| Rosa Maria Esteves Moreira da Costa | Permanente | | | | |
| Rômulo Cristovão de Souza | Permanente | | | | |
| Vera Maria Benjamim Werneck | Permanente | | | | |

Regras: citar só o que estiver no Lattes ou na página do Programa; não inferir aderência pelo nome; não contatar docentes (o passo a passo do Programa orienta usar o sistema de inscrição).
```

---

## Limites desta análise

- Li por inteiro: o rascunho vigente, o DOCX oficial, o PDF do edital (14 p.), o PDF do corpo docente, as decisões metodológicas, a análise e a conferência do edital, a especificação do produto mínimo, o mapa de objetivos, o benchmark, o levantamento bibliográfico, o plano de parceria e ética, o roadmap, o estado atual, as tarefas, a carta (parte), os relatórios 01 e 02 e o README. Li parcialmente (títulos, trechos e buscas por palavra-chave): o guia de defesa, a busca estruturada, a declaração e o tutorial de pendências.
- **Não li** `produto/`, `tests/`, `scripts/`, os registros de auditoria nem os slides (fora de escopo). Não executei o protótipo nem a CI.
- Verifiquei na web, nesta rodada: o descritor DeCS "Consulta Remota"; o resumo do CONASS sobre a Portaria 3.232/2024; o resumo do CFM sobre a Lei 14.510/2022; o resumo executivo da TIC Domicílios 2025 e da TIC Saúde 2025 (leitura automatizada, com pareamento de números por conferir). **Não consegui** abrir: o texto oficial da Portaria 3.232, o anexo da Estratégia Federal de Governo Digital, o documento norteador da CAPES (estratos T1/T2), os textos das Resoluções CNS e os textos oficiais dos ODS.
- Metadados de Hevner, Peffers, Knowles, Sweller, Issenberg, Nielsen e W3C (WCAG-EM) vêm de memória e estão marcados ▲.
- O texto-base foi redigido por IA. Ele pressupõe revisão e reescrita pelo candidato e pela orientação, e não substitui o julgamento acadêmico.
