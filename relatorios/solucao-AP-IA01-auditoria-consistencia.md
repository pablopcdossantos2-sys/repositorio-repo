# Solução da pendência AP-IA01 — Auditoria de consistência interna do texto-base

**Data da análise:** 30/10/2026
**Pendência resolvida:** `docs/anteprojeto/pendencias.md` → AP-IA01 ("Auditar a consistência interna do texto-base: título, pergunta, objetivos, método, cronograma, resumo e abstract")
**Destinatário:** IA que implementará as alterações no repositório
**Arquivo-base auditado:** `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` (texto-base v1)
**Fonte de verdade para a formulação:** `docs/anteprojeto/formulacao-vigente.md`

> **Como usar este documento.** A seção 1 diz o que é seguro fazer e o que não é. A seção 2 mostra o que foi conferido e está coerente. A seção 3 lista as divergências encontradas e a seção 4 traz as edições prontas (texto antigo → texto novo). A seção 5 diz como atualizar `pendencias.md` e criar o registro de evidência. A seção 6 traz um script de verificação.
> Os números de linha valem para os arquivos de 30/10/2026. Localize sempre pelo **texto**, não pela linha.

---

## 1. Regras de implementação (leia antes de editar)

1. **Não marcar AP-IA01 como concluído.** O próprio item diz "após cada decisão humana". Esta é a **rodada 1 (linha de base)**. Registre a situação como "rodada 1 executada; reexecutar após D2, D3, D5, D6 e D9" (ver seção 5).
2. **Não resolver decisões humanas.** Nenhuma edição abaixo decide D1–D9. As edições da seção 4 apenas **alinham redações que já divergem entre si** ou **tornam explícito o que o texto já assume**. As que dependem de decisão estão marcadas como **[CONDICIONAL]**; aplique só se a condição valer.
3. **Não inventar dados, números, nomes, datas ou aprovações.** Nada neste documento foi buscado na web; as conferências de fontes externas pertencem à AP-IA02.
4. **Preservar os marcadores entre colchetes** (`[CONFIRMAR]`, `[DEFINIR]`, `[D3: ...]` etc.). Eles são o controle das pendências; remova um somente quando a pendência correspondente tiver evidência.
5. **Não tocar em** `docs/anteprojeto/selecao/fontes-oficiais/text.txt` (AP-H08) nem preencher campos pessoais (AP-H06, AP-IA05).
6. **Manter a fonte única.** `formulacao-vigente.md` não deve ser alterada por esta rodada, exceto pela inclusão da convenção terminológica da edição E3.
7. Cada edição deve ser feita **uma de cada vez**, com o texto antigo conferido como trecho único no arquivo (use busca exata antes de substituir). Se o trecho antigo não for encontrado, **pare e registre** em vez de adaptar por conta própria.

---

## 2. O que foi conferido e está coerente (sem ação)

| # | Item conferido | Onde | Resultado |
|---|---|---|---|
| V01 | Título | Capa × `formulacao-vigente.md` | Idêntico |
| V02 | Linha de pesquisa e tipo de projeto (redação do edital) | Capa, Justificativa × formulação | Coerente |
| V03 | Pergunta de pesquisa | Resumo e Justificativa × formulação | Texto idêntico nas 2 ocorrências |
| V04 | Objetivo geral | Seção Objetivos × formulação | Idêntico (a versão do Resumo/Abstract é parafraseada: ver F05) |
| V05 | Objetivos específicos 1–3 | Objetivos × formulação | Mesmo sentido e mesmos produtos (matriz, protótipo + rastreabilidade, relatório de inspeção) |
| V06 | Resultados esperados × objetivos | Resumo "Resultados esperados" | Cada resultado corresponde a um objetivo específico |
| V07 | Bases da busca (PubMed/MEDLINE, BVS/LILACS, SciELO) | Resumo × Método Etapa 1 | Coerente |
| V08 | Três momentos e três situações do simulador | Resumo, Método Etapa 3 × `produto/index.html` | Coerente: "O link não abre", "Não consigo ouvir", "Não entendi uma informação" + preparação + encerramento |
| V09 | Alegação "sem coleta de dados, sem rede, sem serviços de terceiros" | Resumo, Governança × `produto/` | Conferido: nenhuma ocorrência de `fetch`, `XMLHttpRequest`, `localStorage`, `sessionStorage`, `indexedDB`, `getUserMedia`, `WebSocket`, `sendBeacon`; nenhuma URL externa em `index.html`, `app.js` ou `styles.css`; só `styles.css` e `app.js` locais |
| V10 | Camada 1 condicional (gatilho: orientação + CEP; janela meses 14–19) | Resumo, Método, Cronograma nota (b), `decisoes-metodologicas.md` §12 | Coerente |
| V11 | Tabela do cronograma | Texto-base × `planejamento/cronograma-24-meses.md` | **Tabelas idênticas** |
| V12 | Etapas × linhas do cronograma | Etapa 1 (1–8), Etapa 3 (3–14), Etapa 4 (10–19) | Coincidem com as linhas "Revisão bibliográfica", "Desenvolvimento", "Testes e validação" (ver F03 para a Etapa 2 e a linha "Coleta") |
| V13 | Citações no texto × lista de Referências | Todo o texto-base | Toda citação tem entrada na lista, e toda entrada é citada |
| V14 | Tamanho de Resumo e Abstract (limite do modelo: ≤ 500 palavras) | Resumo, Abstract | ≈ 397 e ≈ 408 palavras (contagem simples por regex; refazer após edições) |
| V15 | Decisões D1–D9 | `pendencias.md` (AP-H02) × `relatorios/relatorio03.md` §2 | Mesmos nove temas. Observação: AP-H01 (status da candidatura) e D1 (Cenário A/B) tratam do mesmo assunto; manter os dois, mas com referência cruzada (ver E9) |
| V16 | Definição de "baixa familiaridade digital" | Introdução × formulação | Mesmo sentido; redação ligeiramente diferente (ver F11) |

---

## 3. Divergências e lacunas encontradas

Gravidade: **A** = pode gerar contradição visível para avaliadores ou para o CEP; **M** = incoerência interna a corrigir; **B** = ajuste de redação/higiene.

| ID | Grav. | Achado | Locais (texto-base v1) |
|---|---|---|---|
| F01 | A | **Número de inspetores independentes diverge.** Resumo, Abstract e Objetivo específico 3 dizem "inspetores independentes" (plural); o Método diz "**Pelo menos um** inspetor independente". A carta repete o plural. Além disso, o método de análise usa **kappa de Cohen**, que pressupõe **dois** avaliadores, o que favorece a leitura "pesquisador + ao menos um inspetor independente". Os demais documentos usam "avaliadores" (`protocolo-preliminar-avaliacao.md`). | Linhas 20, 36, 82 (plural) × 143, 170, 202 (singular); `submissao/carta-exposicao-de-motivos.md` linha 20 |
| F02 | A | **"Sem participantes" convive com "inspetor independente".** O texto afirma duas vezes que a Camada 0 "não envolve participantes" e invoca a Res. CNS 510/2016 só para revisão de literatura. Uma pessoa que inspeciona o produto e fornece julgamentos pode ser lida como participante. O texto já diz que o enquadramento será confirmado com a instituição, mas a frase categórica anterior parece contradizê-lo. | Linhas 134 e 152 |
| F03 | M | **Cronograma × método.** (a) A Etapa 2 (objetivos educativos e requisitos, meses 4–10) não tem linha própria; ela cai entre "Delimitação" (1–6) e "Desenvolvimento" (3–14), sem nota explicativa. (b) A nota (b) diz que "coleta/produção de dados" inclui "registros de busca", mas a linha só começa no mês 4, enquanto a busca (Etapa 1) começa no mês 1. | Linhas 134–143 (método) × 177–194 (cronograma); idem em `planejamento/cronograma-24-meses.md` |
| F04 | M | **DSR: atividade D (demonstração) sem correspondente.** O texto mapeia A–F aos objetivos ("C e D ao objetivo 2"), mas nenhuma etapa descreve a demonstração. **Depende de D3** (arcabouço ainda não validado com a orientação). | Linha 132 × Etapa 3 |
| F05 | B | **Objetivo geral do Resumo/Abstract omite "em cenários fictícios"**, que consta na formulação vigente e na seção Objetivos. | Linhas 18–20 (Resumo, "Objetivo"), 34 (Abstract, "Objective") |
| F06 | M | **Critério de alcance do objetivo 3 é mais estreito que o objetivo.** O objetivo 3 inclui "formulando recomendações de adaptação e de futura avaliação com usuários"; o critério de alcance (Método de análise) não as exige. | Linha 162 |
| F07 | B | **Resumo/Abstract não citam o "teste de funcionamento"** (item v da inspeção), embora o Método o inclua. Opcional. | Linhas 20, 36 × 143 |
| F08 | M | **Letras `2024a`/`2024b` dependem da ordem final das referências.** Hoje a Portaria GM/MS é `2024a` e o Decreto é `2024b`. Se a AP-IA03 reordenar as entradas "BRASIL" (hoje: Lei 13.709, Lei 14.510, Portaria, Decreto, Res. 466, Res. 510), as letras podem se inverter e as 4 citações no texto precisam acompanhar. | `(BRASIL, 2024a)` ×3 e `(BRASIL, 2024b)` ×1 |
| F09 | B | **Duas cópias da tabela do cronograma.** Hoje idênticas, mas podem divergir. | Texto-base e `planejamento/cronograma-24-meses.md` |
| F10 | B | **"Simulador aberto e documentado" × "repositório de acesso restrito".** A Governança diz que os dados da Camada 0 ficam em repositório restrito ao pesquisador e à orientação, enquanto o Resumo promete produto "aberto" com matrizes e relatório. Não é contradição necessária (dados de trabalho × entregas publicadas), mas a redação não separa os dois. **Não editar sem decisão** (depende de D6 e de saber a visibilidade do repositório). | Resumo "Resultados esperados"; Governança de Dados |
| F11 | B | **Definição de "baixa familiaridade digital":** a formulação usa "(abrir um link, ligar e ajustar áudio e vídeo, localizar controles)"; a Introdução usa "como abrir um link recebido, ligar e ajustar áudio e vídeo e localizar controles na tela". Sentido igual. Não alterar sem decisão; apenas registrar. | Introdução × formulação |
| F12 | B | **Marcação quebrada:** `planejamento/docentes-e-aderencia.md` termina com um bloco de código (```) **sem fechamento**, o que quebra a renderização do final do arquivo. | Final do arquivo |

### Inventário dos marcadores pendentes no texto-base (26 ocorrências)

Para a rodada 2 e para as demais pendências. Regenerar com o comando da seção 6.

| Grupo | Marcadores (linha aproximada) | Pendência responsável |
|---|---|---|
| Dados pessoais | `[PREENCHER PELO CANDIDATO]` (8) | AP-H06 / D8 |
| Números e normas a conferir na fonte primária | Indicadores TIC Saúde/TIC Domicílios (46, 50, 66 ×3, 96); incisos e transcrição da Portaria SUS Digital (68); inciso da Res. CNS 510 (152); metas dos ODS (124); redação do Decreto e da Portaria SGD/MGI (128); descrição oficial da linha 2 (62) | AP-IA02 |
| Referências e descritores | `[CONFIRMAR a formulação]` sobre Issenberg et al. (52); descritores DeCS/MeSH (26, 42) | AP-IA03 (descritores: sem item B dedicado; ver E9) |
| Dependem da busca formal | "recursos de prática guiada ... escassos" (14, 30) | Fundamentação (`docs/fundamentacao/pendencias.md`) |
| Decisões autorais | D3 (132); licença `[DEFINIR]` (108, 212); estrato T1/T2 (210, 212); índice de legibilidade `[DEFINIR e citar]` (143) | AP-H02 (D3, D4, D6); o índice de legibilidade é decisão metodológica (AP-H04) |
| Calendário e Deliberação | `[AJUSTAR ao calendário]` (179); exame de qualificação e prazos (194); atividades presenciais (202) | AP-H07 |
| **Não são pendências** (declarações de estado, manter) | `[requisito planejado; não implementado hoje]` (96); `[Não há parceria estabelecida.]` (100) | — |

---

## 4. Edições a implementar

Formato: **arquivo → texto antigo → texto novo**. Onde o texto antigo aparece mais de uma vez, a edição diz quais ocorrências alterar.

### E1 — Harmonizar o número de inspetores independentes (F01)

**Opção A (padrão, aplicar):** "o pesquisador e ao menos um inspetor independente". É a leitura que o corpo do Método já assume e a única compatível com o kappa de Cohen.
**Opção B (só se o candidato ou a orientação decidir por mais de um inspetor independente):** trocar "ao menos um" por "ao menos dois" em todas as edições abaixo e substituir "kappa de Cohen" por "kappa de Fleiss" no Método de análise.
Registre a confirmação pendente em AP-H04.

`docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`

1. **Resumo, Método** (linha 20):
   - Antigo: `rubrica pedagógica e legibilidade dos textos, com inspetores independentes.`
   - Novo: `rubrica pedagógica e legibilidade dos textos, com ao menos um inspetor independente além do pesquisador.`
2. **Abstract, Methods** (linha 36):
   - Antigo: `a pedagogical rubric and text readability, with independent inspectors.`
   - Novo: `a pedagogical rubric and text readability, with at least one independent inspector in addition to the researcher.`
3. **Objetivo específico 3** (linha 82):
   - Antigo: `com critérios definidos previamente e inspetores independentes,`
   - Novo: `com critérios definidos previamente e ao menos um inspetor independente além do pesquisador,`
4. **Método, Etapa 4, Camada 0** (linha 143):
   - Antigo: `**Pelo menos um inspetor independente** examina parte dos casos, e a concordância entre avaliadores é relatada.`
   - Novo: `O pesquisador e **pelo menos um inspetor independente** examinam, de forma independente, ao menos parte dos casos, e a concordância entre os dois avaliadores é relatada.`
5. Linhas 170 e 202 já usam o singular; **não alterar**.

`docs/anteprojeto/submissao/carta-exposicao-de-motivos.md` (alteração de uma só expressão; o restante da carta é da AP-IA05):
   - Antigo: `com critérios definidos previamente e inspetores independentes.`
   - Novo: `com critérios definidos previamente e ao menos um inspetor independente além do pesquisador.`

### E2 — Qualificar "sem participantes" (F02)

`docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`

1. **Método, "Cenário e usuários"** (linha 134):
   - Antigo: `A etapa-base (Camada 0) **não envolve participantes**.`
   - Novo: `A etapa-base (Camada 0) **não envolve participantes como sujeitos de pesquisa**: não há recrutamento, intervenção nem coleta de dados com usuários. A inspeção é feita pelo pesquisador e por inspetor independente, que examinam o produto segundo critérios definidos previamente; o enquadramento ético dessa inspeção será confirmado com a instituição.`
2. **Aspectos Éticos** (linha 152), apenas a primeira frase:
   - Antigo: `Na etapa atual, a pesquisa **não envolve participantes**: baseia-se em literatura, em recursos públicos e na inspeção de um produto sem coleta de dados.`
   - Novo: `Na etapa atual, a pesquisa **não envolve participantes como sujeitos de pesquisa**: baseia-se em literatura, em recursos públicos e na inspeção de um produto, sem coleta de dados com usuários.`
   - Manter integralmente o restante do parágrafo, inclusive "O enquadramento da inspeção do produto será confirmado com a instituição, e não presumido." e o `[CONFIRMAR o inciso]`.
3. **Não** acrescentar afirmação de que a inspeção independe de CEP. Isso não está decidido.

### E3 — Convenção terminológica nos documentos internos (F02)

`docs/anteprojeto/formulacao-vigente.md`: acrescentar, ao final da lista, o item:

```
- **Convenção terminológica:** nos documentos internos, "sem participantes" significa sem recrutamento de público-alvo e sem coleta de dados com usuários; "inspetor" ou "avaliador" é quem examina o produto segundo critérios definidos previamente. O enquadramento ético da inspeção feita por inspetor independente está pendente de confirmação institucional (ver Aspectos Éticos do texto-base).
```

Não alterar outros itens desse arquivo.

### E4 — Reconciliar cronograma e método (F03, F09)

Aplicar **a mesma edição nos dois arquivos**: `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` (seção CRONOGRAMA DE EXECUÇÃO) e `docs/anteprojeto/planejamento/cronograma-24-meses.md`. **Não alterar a grade de "X".**

1. Na nota (b):
   - Antigo: `(b) "coleta/produção de dados" refere-se, na Camada 0, aos registros de busca, extração e inspeção;`
   - Novo: `(b) "coleta/produção de dados" refere-se, na Camada 0, à extração de dados da literatura e dos recursos e à inspeção (os registros da busca integram a linha "Revisão bibliográfica e referencial teórico", meses 1–8);`
2. Acrescentar, depois da nota (d) e antes de `[CONFIRMAR exame de qualificação ...]`, a nota:
   - `(e) a Etapa 2 do método (objetivos educativos e requisitos, meses 4–10) é executada dentro das linhas "Delimitação e planejamento metodológico" (meses 1–6) e "Desenvolvimento da solução/produto" (meses 3–14).`
3. Em `planejamento/cronograma-24-meses.md`, logo abaixo do título, acrescentar: `> Fonte única da tabela. Ao alterá-la, replicar a mudança na seção CRONOGRAMA DE EXECUÇÃO de ../rascunhos/anteprojeto-docx-oficial.md (e vice-versa) e rodar a verificação da AP-IA01.`

### E5 — [CONDICIONAL: só se D3 mantiver o DSR] Demonstração (F04)

`docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`, Método, **Etapa 3**, ao final do parágrafo (depois de `não envia nem armazena dados.`), acrescentar:

`A demonstração (atividade D do DSR) consiste na execução documentada dos três cenários e do percurso completo do simulador, com registro da versão demonstrada.`

Se a orientação trocar o arcabouço, **não aplicar**, e revisar o mapeamento A–F do parágrafo "Desenho".

### E6 — Critério de alcance do objetivo 3 (F06)

Método de análise (linha 162):
- Antigo: `os defeitos graves estão corrigidos e retestados, e as limitações estão descritas.`
- Novo: `os defeitos graves estão corrigidos e retestados, as limitações estão descritas e as recomendações de adaptação e de futura avaliação com usuários estão formuladas.`

### E7 — Objetivo geral no Resumo e no Abstract (F05)

1. **Resumo, "Objetivo"**:
   - Antigo: `para a prática de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.`
   - Novo: `para a prática, em cenários fictícios, de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.`
2. **Abstract, "Objective"**:
   - Antigo: `for practicing the basic digital actions of taking part in a teleconsultation, aimed at adults with low digital familiarity.`
   - Novo: `for practicing, in fictional scenarios, the basic digital actions of taking part in a teleconsultation, aimed at adults with low digital familiarity.`
3. Depois de E1, E7 e E8, **recontar** Resumo e Abstract (≤ 500 palavras cada).

### E8 — [OPCIONAL] Teste de funcionamento no Resumo/Abstract (F07)

1. **Resumo**: `rubrica pedagógica e legibilidade dos textos,` → `rubrica pedagógica, legibilidade dos textos e teste de funcionamento,` (aplicar em conjunto com E1.1).
2. **Abstract**: `a pedagogical rubric and text readability,` → `a pedagogical rubric, text readability and functional testing,` (aplicar em conjunto com E1.2).

### E9 — Higiene e referências cruzadas (F08, F12, V15)

1. `docs/anteprojeto/planejamento/docentes-e-aderencia.md`: remover a linha final isolada ```` ``` ````, que não abre nenhum bloco. Se restar uma linha `---` solta no fim, pode permanecer.
2. `docs/anteprojeto/pendencias.md`, AP-IA03: acrescentar ao fim do item: ` Ao reordenar as entradas "BRASIL", recalcular as letras 2024a/2024b e atualizar as quatro citações no texto-base (Introdução, Relevância ×2, Estratégia de Governo Digital).`
3. `docs/anteprojeto/pendencias.md`, AP-IA02: acrescentar ao fim do item: ` Incluir a verificação dos descritores DeCS/MeSH das palavras-chave.`
4. `docs/anteprojeto/pendencias.md`, AP-H02: acrescentar ao fim do item: ` D1 corresponde ao Cenário A/B do relatório 03 (§1.3) e se resolve junto com AP-H01.`
5. **Não** alterar F10 e F11. Registrá-los no relatório de evidência como "observados, sem edição, aguardando decisão".

---

## 5. Atualização do controle de pendências e registro de evidência

### 5.1 Criar o relatório de consistência (a evidência exigida pelo item)

Criar `docs/anteprojeto/registros/auditoria-consistencia-2026-10-30.md` com:
- cabeçalho (data, arquivos auditados, versão do texto-base, rodada 1);
- a tabela da seção 2 (verificações sem ação);
- a tabela da seção 3 (achados F01–F12) com a **situação de cada um** ao fim da implementação (`aplicado`, `condicional não aplicado`, `observado sem edição`);
- o inventário de marcadores da seção 3;
- o resultado do script da seção 6 (saída colada).

Em `docs/anteprojeto/README.md`, acrescentar o link para esse registro na lista de materiais.

### 5.2 Atualizar `docs/anteprojeto/pendencias.md`

1. Manter o item AP-IA01 **desmarcado** (`- [ ]`) e acrescentar ao final: ` **Situação:** rodada 1 (linha de base) executada em 30/10/2026; relatório em registros/auditoria-consistencia-2026-10-30.md. Reexecutar após D2, D3, D5, D6 e D9. Pendente de confirmação humana: número de inspetores independentes (AP-H04) e enquadramento ético da inspeção.`
2. Atualizar o campo `**Atualização:**` do cabeçalho para `30/10/2026`.
3. Acrescentar à tabela Histórico:
   `| 30/10/2026 | AP-IA01, rodada 1: auditoria de consistência do texto-base; 12 achados (2 de gravidade alta, 4 média, 6 baixa — ver relatório); edições E1–E9 aplicadas conforme condições. Item permanece aberto. |`
   Ajuste os números se alguma edição condicional não for aplicada.

---

## 6. Verificação após as edições

Execute na raiz do repositório e cole a saída no relatório. Todas as linhas devem ser `OK`.

```python
import re
base = "docs/anteprojeto/"
t = open(base + "rascunhos/anteprojeto-docx-oficial.md", encoding="utf-8").read()
f = open(base + "formulacao-vigente.md", encoding="utf-8").read()
c = open(base + "planejamento/cronograma-24-meses.md", encoding="utf-8").read()
d = open(base + "planejamento/docentes-e-aderencia.md", encoding="utf-8").read()

def sec(txt, a, b):
    i = txt.index(a); return txt[i:txt.index(b, i + 1)]

def check(nome, cond): print(("OK   " if cond else "FALHA"), nome)

pergunta = re.search(r"\*\*Pergunta de pesquisa:\*\* (.+)", f).group(1).strip()
check("pergunta idêntica à formulação em Resumo e Justificativa", t.count(pergunta) == 2)

geral = re.search(r"\*\*Objetivo geral:\*\* (.+)", f).group(1).strip()
check("objetivo geral idêntico à formulação", t.count(geral) == 1)

tab = lambda s: [l for l in s.split("\n") if l.startswith("|")]
check("tabelas do cronograma idênticas nos dois arquivos",
      tab(c) == tab(sec(t, "## CRONOGRAMA", "## INFRAESTRUTURA")))

check('nenhum "inspetores independentes" restante',
      "inspetores independentes" not in t and "independent inspectors" not in t)

check('"não envolve participantes" sempre qualificado',
      not re.search(r"não envolve participantes(?! como sujeitos)", t))

for nome, a, b in (("Resumo", "## RESUMO", "## ABSTRACT"), ("Abstract", "## ABSTRACT", "## INTRODUÇÃO")):
    n = len(re.findall(r"\w+", sec(t, a, b)))
    check(f"{nome} ≤ 500 palavras (≈{n})", n <= 500)

check("docentes-e-aderencia.md sem bloco de código aberto", d.count("```") % 2 == 0)

print("\nMarcadores pendentes (regenerar inventário):")
for i, l in enumerate(t.split("\n"), 1):
    for m in re.finditer(r"\[(?:CONFIRMAR|CONFIRM|DEFINIR|D\d|AJUSTAR|PREENCHER)[^\]]*\]", l):
        print(i, m.group(0)[:80])
```

**Critérios de aceite da implementação**
- Todas as linhas do script em `OK`.
- Nenhum marcador `[CONFIRMAR]`, `[DEFINIR]` ou `[Dn]` foi removido (o inventário continua com as mesmas 26 ocorrências, mais as que a edição E2/E5 eventualmente acrescente).
- `pendencias.md` mantém AP-IA01 aberto, com a situação e a linha de histórico.
- Relatório de evidência criado e linkado no README da pasta.
- Nenhuma edição de F10 e F11; nenhuma alteração em `text.txt`.

---

## 7. O que ficou fora desta rodada (por não poder ser resolvido pela IA)

| Assunto | Por que ficou de fora | Quem resolve |
|---|---|---|
| Número final de inspetores independentes (A ou B) | Decisão de desenho; E1 usa a Opção A como padrão revisável | Candidato + orientação (AP-H04) |
| Enquadramento ético da inspeção por inspetor independente | Depende de manifestação institucional; o texto já a registra como pendente | Candidato + instituição/CEP |
| Aplicação de E5 | Condicionada a D3 | Candidato + orientação |
| F10 (acesso restrito × produto aberto) e F11 (redação da definição) | Dependem de D6 e de decisão autoral | Candidato |
| Todos os números e normas marcados `[CONFIRMAR]` | Exigem consulta às fontes primárias | AP-IA02 |
| Verificação de metadados das referências marcadas com ▲ | Exigem consulta às fontes | AP-IA03 |
| Cronograma × Deliberação vigente e checklist do modelo | Dependem de AP-H07 | Candidato, depois AP-IA04 |
