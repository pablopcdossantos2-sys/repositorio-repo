# Arquivo geral de relatórios

**Finalidade:** preservação integral dos relatórios individuais que já foram lidos, analisados ou executados no trabalho do repositório. Os arquivos originais abaixo foram incorporados sem resumir nem substituir seu conteúdo. Os caminhos e SHAs registram a proveniência de cada versão arquivada.

**Data da consolidação:** 30/10/2026  
**Repositório:** `pablopcdossantos2-sys/repositorio-repo` — branch `main`

> Este arquivo é histórico. Os controles operacionais vigentes permanecem em `docs/`. Os documentos arquivados podem conter instruções, estados ou prazos históricos que não devem ser interpretados como atuais sem conferência.

## Índice

1. [relatorio01.md](#arquivo-1)
2. [relatorio02.md](#arquivo-2)
3. [relatorio02-outras-secoes.md](#arquivo-3)
4. [relatorio03.md](#arquivo-4)
5. [relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md](#arquivo-5)
6. [solucao-AP-IA01-auditoria-consistencia.md](#arquivo-6)
7. [solucao-AP-IA03-revisao-referencias.md](#arquivo-7)


---

<!-- BEGIN ORIGINAL FILE: relatorios/relatorio01.md -->

<a id="arquivo-1"></a>

## 1. relatorio01.md

- Caminho original: `relatorios/relatorio01.md`
- Blob SHA original: `899c4d3edc36b7329e1f50ebe4383adef51fa46b`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

# Relatório de análise do anteprojeto — *Treino de Teleconsulta*

**Objeto analisado:** o projeto escrito (anteprojeto), com foco em `docs/anteprojeto/rascunhos/anteprojeto-modelo-uerj.md` (versão baseada em uma lista de 16 itens de uma página web, **não** no DOCX oficial) e, como apoio, `docs/anteprojeto/versoes-anteriores/anteprojeto-base.md`, `docs/anteprojeto/decisoes-metodologicas.md`, `docs/protótipo/produto-minimo.md`, `docs/protótipo/mapa-objetivos-educativos-e-tarefas.md`, `docs/anteprojeto/selecao/analise-edital-turma-2027-e-lacunas.md`, `docs/anteprojeto/selecao/conferencia-modelo-e-edital-2027-2026-10-24.md`, `docs/fundamentacao/levantamento-bibliografico-exploratorio-2026-10-24.md`, `docs/fundamentacao/benchmark-recursos-existentes.md`, `docs/protótipo/matriz-evidencias-requisitos.md`, `docs/anteprojeto/planejamento/parceria-e-etica.md`, `docs/anteprojeto/submissao/carta-exposicao-de-motivos.md` e o `README.md`.
**Documentos oficiais incorporados na revisão 2:** o **modelo DOCX oficial** (`final_2026_-MODELO_ANTEPROJETO…docx`) e o **PDF do edital da Turma 2027** (arquivo nomeado "EDITAL_2026", mas cujo conteúdo é a Turma 2027, com inscrições de 01/10/2026 a 30/10/2026).
**Fora do escopo (conforme solicitado):** código, testes, CI e interface do protótipo.
**Data do relatório:** 29/10/2026 (revisão 2, após a leitura do DOCX e do edital).

> ### Resumo da revisão 2 — o que mudou
> 1. **O modelo DOCX oficial não tem a estrutura de 16 itens** que o repositório usava (ela vinha de uma página web). O DOCX tem outras seções, entre elas *Proposta de valor* com nove subitens, *Governança de dados*, *Infraestrutura, parcerias e viabilidade técnica*, *Tipo de produto planejado* (com escolha obrigatória) e um *cronograma em tabela*. **O principal ponto de melhoria passa a ser migrar o texto para essa estrutura real** (Seção 3A).
> 2. **O prazo diverge:** o PDF do edital diz que as inscrições vão **até 12h de 30/10/2026**; os documentos do repositório registravam 29/10/2026 12h, com base na página web. Ver Seção 0.
> 3. O edital esclarece a **pontuação**: sete critérios de 1,0 ponto sobre o anteprojeto e 3,0 pontos de defesa oral. A etapa eliminatória é um parecer "Apto/Não Apto" de três docentes sobre a aderência às linhas e aos objetivos do Programa.
> 4. Foram **corrigidas** afirmações da versão anterior: o ponto forte "estrutura aderente ao modelo", o achado A4 (cronograma), A5 (CEP), A6 (IA) e B5 (número de critérios).

---

## 0. Alerta de prazo (corrigido)

- O **PDF do edital** informa, em dois pontos (abertura e Passo 2), inscrições de **01/10/2026 até 12h de 30/10/2026**, com pagamento do boleto até 30/10/2026.
- Os documentos do repositório registram, com base na página oficial consultada em 23–24/10, encerramento em **29/10/2026 às 12h**, "após atualização do calendário".
- O edital permite à comissão **alterar o calendário e prorrogar prazos** sem nova apreciação do DEPPG (Disposições gerais, item 11). Por isso, o PDF e a página podem diferir, e **eu não consigo dizer qual vale**.
- O relógio do ambiente em que trabalho indica **cerca de 23h50 de 29/10/2026 (horário de Brasília)**. Se vale a data da página (29/10, 12h), o prazo já passou. Se vale o PDF (30/10, 12h), restam cerca de 12 horas.

**Ação imediata:** confirme agora, na página oficial do Programa e no sistema de inscrição, qual é o prazo vigente. Em caso de dúvida, escreva para `mestrado@telessaude.uerj.br` (e-mail exclusivo de comunicação, segundo o edital). Se o prazo ainda estiver aberto, envie uma versão **no DOCX oficial, convertida em PDF de até 8 MB**, corrigindo apenas os itens da **Seção 7.1**. O restante pode ser absorvido na defesa oral de 16/11/2026.

---

## 1. Veredito geral

O anteprojeto é **honesto, bem delimitado e metodologicamente cuidadoso**. Em vários pontos é mais rigoroso do que a média dos anteprojetos de mestrado: não promete eficácia clínica, não presume parceria, separa evidência de hipótese e prevê alternativa caso o campo falhe.

O risco principal é o oposto: **o texto é tão defensivo que enfraquece a persuasão** nos critérios em que a banca atribui pontos (inovação, impacto, equidade, ODS, SUS Digital). Além disso, o texto ainda carrega marcas de rascunho, contradições internas e lacunas de conteúdo (dados brasileiros, referencial teórico, cronograma no corpo do texto).

Em termos práticos, o conteúdo de fundo é bom e o que falta é **acabamento, coerência e assertividade**.

### As dez melhorias de maior retorno (revisadas)

| # | Melhoria | Prioridade |
|---|---|---|
| 1 | **Migrar o texto para a estrutura real do DOCX oficial** (Resumo, Abstract, Introdução, Justificativa, Objetivos, Proposta de valor, Material e métodos, Cronograma, Infraestrutura, Tipo de produto, Referências), pois o repositório usa outra estrutura | Crítica |
| 2 | Preencher o que **não existe no rascunho e é exigido pelo modelo**: palavras-chave (DeCS/MeSH), Governança de dados, Estratégia Nacional de Governo Digital, Infraestrutura e viabilidade, Tipo de produto (opção T1/T2 com justificativa), cronograma em tabela | Crítica |
| 3 | Remover marcas de rascunho, status, metadiscurso e links para o repositório | Crítica |
| 4 | Corrigir a contradição sobre o encerramento/OE-05 | Crítica |
| 5 | Dar **lugar explícito à equidade e diversidade** (critério pontuado, sem seção própria no DOCX) e escrever Inovação e Impacto de forma afirmativa, com indicadores | Alta |
| 6 | Nomear o arcabouço metodológico e os métodos de inspeção; classificar o "Tipo de estudo científico" | Alta |
| 7 | Acrescentar dados e marcos normativos brasileiros e a **pergunta de pesquisa dentro da Justificativa**, como o modelo pede | Alta |
| 8 | Citar o SUS Digital e relacionar os ODS a metas específicas | Alta |
| 9 | Propor definição operacional provisória de "baixa familiaridade digital" | Alta |
| 10 | Reformular ética e governança de dados (CEP, LGPD, ausência de coleta no produto) | Alta |


---

## 2. Como a análise foi feita e seus limites

- Li integralmente o anteprojeto no modelo UERJ, o anteprojeto-base, as decisões metodológicas, a especificação do produto mínimo, a análise do edital, a conferência do modelo e do edital, e o README. Li parcialmente (primeiras seções e cabeçalhos) o mapa de objetivos, a matriz de evidências, o levantamento bibliográfico, o benchmark, o plano de parceria e ética, a carta de exposição de motivos e o ROADMAP.
- Não li os demais documentos de processo (auditorias, registros de busca, tutoriais) por serem operacionais e não parte do texto avaliável.
- Na revisão 2, li integralmente o **DOCX oficial** e as 14 páginas do **PDF do edital**. A conferência formal do que ambos dizem passou a ser possível. Continuam sem verificação: o conteúdo atual da página web do Programa e eventuais retificações posteriores ao PDF (aprovado em 17/09/2026).
- O edital **não fixa limite de páginas** nas partes que li. O único limite explícito é o arquivo PDF de até 8 MB. As regras de formatação vêm do checklist do DOCX.
- **Não verifiquei online** os metadados das referências nem as normas e autores sugeridos neste relatório. Os itens marcados como "a verificar" devem ser confirmados antes de citação.
- A contagem de palavras abaixo foi feita por script sobre o arquivo Markdown e é aproximada.

---

## 3. Pontos fortes (a preservar)

1. **Delimitação clara do escopo.** Fica explícito o que o produto não é: teleconsulta real, sistema clínico, IA, coleta de dados.
2. **Conteúdo reaproveitável.** O texto do rascunho (introdução, justificativa, objetivos, método, ética, limitações) cobre boa parte do que o modelo pede, com três objetivos específicos e resumos abaixo de 500 palavras (205 e 218). *Correção da revisão 2:* a **estrutura** do rascunho **não** corresponde ao DOCX oficial, apenas a uma lista de 16 itens publicada em uma página web. O conteúdo é aproveitável, mas precisa ser redistribuído (Seção 3A).
3. **Proporcionalidade das alegações.** O texto não promete aprendizagem duradoura nem desfecho clínico.
4. **Reconhecimento honesto da concorrência.** O benchmark e o texto admitem que o *Digital House Calls* já existe e que "antes/durante/depois" não é inovação em si.
5. **Plano alternativo.** A avaliação em "camadas" (sem participantes como base, com participantes como complemento) é uma resposta sólida ao critério de viabilidade.
6. **Privacidade por desenho.** Ausência de login, de coleta e de IA no produto.
7. **Preocupação ética madura.** Distingue autorização administrativa de apreciação ética e não presume dispensa do CEP.
8. **Bibliografia com DOI** e fontes de peso (WHO/ITU, WCAG 2.2, revisão de escopo recente).
9. **Formação do candidato** (Medicina e Jornalismo) bem articulada nos documentos de apoio, o que deveria também aparecer no anteprojeto (ver B8).

---

## 3A. Conferência com o modelo DOCX oficial e com o edital (nova)

### 3A.1 A estrutura real do modelo

O DOCX oficial contém, nesta ordem: **capa** (nome do projeto, candidato, linha, tipo) → **sumário** → **Resumo** (até 500 palavras, sem citações, + 3 a 5 palavras-chave DeCS/MeSH) → **Abstract** (+ keywords) → **Introdução** → **Justificativa** (inclui a pergunta de pesquisa e a aderência institucional; subitem *Relevância e magnitude do problema… SUS Digital*) → **Objetivos** (geral em uma frase; três específicos) → **Proposta de valor** (nove subitens) → **Material e métodos** (ética, tipo de estudo, governança de dados, método de análise, limitações) → **Cronograma de execução** (tabela de 24 meses) → **Infraestrutura, parcerias e viabilidade técnica** → **Tipo de produto planejado** → **Referências** → **Checklist de formatação**.

| Seção do DOCX oficial | O que o modelo pede | Situação no rascunho do repositório |
|---|---|---|
| Capa | Nome do projeto, candidato, linha e **tipo de projeto** | Existem, mas o DOCX lista o tipo de modo inconsistente (dois itens "4" e redação diferente da do edital). Use a redação literal do edital: **"5) Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde"** |
| Resumo | Contexto/problema, **pergunta de pesquisa**, objetivo, método, produto, resultados; **sem citações**; **palavras-chave** | Resumo existe (205 palavras), mas **sem pergunta de pesquisa e sem palavras-chave** |
| Abstract | Correspondência de conteúdo com o resumo + keywords | Existe, sem keywords |
| Introdução | Contexto **e referencial teórico**; estado do conhecimento com literatura **recente**; conceitos | Existe (278 palavras), **sem referencial teórico** |
| Justificativa | Problema, **pergunta de pesquisa**, relevância, **aderência institucional à linha**; magnitude com evidências e relação com SUS Digital | Parcial; a pergunta está na Introdução e **não há evidência de magnitude** |
| Objetivo geral | **Uma frase**, verbo no infinitivo, contemplando desenvolvimento, validação e/ou avaliação do impacto | Atende em essência |
| Objetivos específicos | Preferencialmente três, cobrindo as fases do ciclo de vida da pesquisa tecnológica | Atende (três); ver F1 |
| Proposta de valor | Nove subitens: contribuição científica/tecnológica, beneficiários, demanda, complexidade, escalabilidade, contribuição ao SUS/Saúde Suplementar, inovação, ODS, **Estratégia Nacional de Governo Digital** | Fragmentos em "Potencial de inovação" e "Impacto"; **faltam beneficiários, demanda, complexidade, SUS/Saúde Suplementar e Governo Digital** |
| Material e métodos | Desenho, cenário, usuários, etapas, instrumentos, indicadores, critérios, validação | Existe (801 palavras), sem indicadores nem instrumentos nomeados |
| Aspectos éticos | CEP, dados pessoais, consentimento, riscos e benefícios | Existe, genérico |
| Tipo de estudo científico | Classificar e justificar o desenho | **Ausente** como classificação nomeada |
| Governança de dados | Origem, finalidade, acesso, armazenamento, segurança, retenção, descarte, responsabilidades, **LGPD** | **Ausente** |
| Método de análise dos resultados | Como dados e resultados serão analisados; critérios e indicadores | **Ausente** como seção; dispersa na Fase 3 |
| Limitações | Antecipar limitações **e estratégias de mitigação** | Existe (80 palavras), **sem estratégias de mitigação** |
| Cronograma | **Tabela** com "X" por mês, em 24 meses, com linhas padronizadas | **Ausente** na versão do modelo; a versão em tabela por períodos está no arquivo-base |
| Infraestrutura, parcerias, viabilidade | Infraestrutura, **parcerias já estabelecidas**, viabilidade, **riscos de recursos** | **Ausente** |
| Tipo de produto | **Marcar uma opção** (artigo Q1/Q2, produto técnico T1/T2 ou produto tecnológico T1/T2) e justificar, conforme o documento norteador CAPES | **Ausente** |
| Referências / citações | ABNT NBR 6023:2018 e 10520:2023; **só fontes citadas** | Parcial; ver B4 e I |

**Itens do rascunho sem lugar no DOCX:** "Sumário executivo" (368 palavras) e "Impacto para a sociedade" como seção própria. O conteúdo de ambos deve ser redistribuído nas seções do modelo, e o sumário executivo pode ser descartado.

### 3A.2 Como o edital pontua o anteprojeto e onde cada critério aparece no DOCX

O edital atribui **7,0 pontos** ao anteprojeto (sete critérios de 1,0) e **3,0 pontos** à defesa oral, somando 10; a nota do currículo Lattes é outra (10 pontos), e a **nota final mínima é 14**. Antes disso há uma etapa **eliminatória**: três docentes indicados pelo candidato atribuem "Apto" ou "Não Apto" quanto à **aderência da proposta às linhas de pesquisa e aos objetivos do Programa**; basta um "Apto" para seguir. O edital também diz que só são avaliados anteprojetos **em conformidade com as normas publicadas** e com os tipos de projeto aceitos.

| Critério pontuado (1,0 cada) | Onde o avaliador vai procurar no DOCX | Risco no rascunho atual |
|---|---|---|
| Justificativa, relevância, aderência às linhas | Justificativa (+ aderência institucional) | Falta evidência de magnitude e a declaração explícita de aderência à linha 2 e aos objetivos do Programa |
| Potencial mercadológico e/ou inovação / escalabilidade | Proposta de valor: *Potencial de Inovação*, *Escalabilidade* | Texto defensivo (D1, D2) |
| Viabilidade em 2 anos | Cronograma + Infraestrutura e viabilidade | Ambos ausentes ou incompletos |
| Impacto para a sociedade | Proposta de valor: *Beneficiários*, *Contribuição para o SUS* | Sem seção própria no modelo; hoje em seção que o DOCX não tem |
| **Equidade e diversidade** | **Não há subitem específico no DOCX** | **Risco alto:** o critério vale ponto, mas o avaliador não tem onde procurá-lo. Incluir um parágrafo identificado (por exemplo, "Equidade e diversidade") em *Beneficiários* e/ou *Contribuição para o SUS* |
| ODS | Proposta de valor: *Potencial de impacto relacionado aos ODS* | Metas não indicadas (G3) |
| Transformação digital do SUS | Justificativa (*SUS Digital*) e Proposta de valor | O Programa SUS Digital não é citado (G2) |

A defesa oral pontua ainda o **conhecimento da fundamentação teórica** (1,0), o que reforça a recomendação C3 de incluir referencial teórico, e a explicitação dos **motivos para cursar o Mestrado Profissional**.

### 3A.3 Regras de formatação do modelo (checklist do DOCX)

Arial 12; margens superior e esquerda de 3 cm, inferior e direita de 2 cm; texto justificado, espaçamento 1,5 e recuo de primeira linha de 1,25 cm; títulos nos estilos do Word (para o sumário automático); resumo e abstract até 500 palavras; 3 a 5 palavras-chave; ABNT NBR 6023:2018 (referências) e 10520:2023 (citações), mais as NBR 6027, 6028 e 14724; arquivo final em **PDF de até 8 MB**. O modelo informa que o Programa **não tem recursos orçamentários nem bolsas** para os projetos.

---

## 4. Achados e recomendações

### A. Conformidade com o modelo e o edital

**A1. Marcas de rascunho no texto.** O arquivo abre com um bloco de status ("rascunho para revisão acadêmica, não pronto para submissão") e contém trechos como "Critérios de relevância a explicitar:", "[Preencher conforme os documentos de inscrição.]" e "A bibliografia abaixo é inicial e deverá ser complementada…".
*Por que importa:* a banca lê isso como um documento incompleto.
*Recomendação:* o texto submetido deve ser inteiramente prospectivo e assertivo. Remova o bloco de status, os rótulos de intenção e as frases que descrevem o estado do documento. Os títulos das seções devem seguir o modelo oficial exatamente, sem instruções entre parênteses, como "(listar 3 objetivos específicos)", salvo se o próprio DOCX as mantiver.

**A2. Dependência de arquivos externos.** O texto remete a cinco documentos do repositório (revisão editorial, matriz de critérios, referências, busca estruturada, matriz de evidências). Segundo o FAQ citado no repositório, anexos e apêndices não são considerados.
*Recomendação:* eliminar os links. Tudo o que for relevante deve estar no corpo do texto, ainda que de forma resumida.

**A3. Códigos internos no texto.** A sigla "OE-05" aparece no corpo do texto, mas pertence à documentação interna do protótipo. Para o leitor externo é um código sem significado.
*Recomendação:* substituir por descrição em linguagem natural ou remover.

**A4. Cronograma ausente e em formato diferente do exigido.** O modelo oficial pede uma **tabela de 24 meses com "X"**, com linhas padronizadas, e o item *viabilidade em dois anos* é pontuado. O cronograma do repositório está só no `anteprojeto-base.md`, em formato de períodos, e não na versão do modelo.
*Recomendação:* preencher a tabela do DOCX (proposta na Seção 5.3) e manter coerência com Infraestrutura e viabilidade.

**A5. Aspectos éticos genéricos.** No DOCX, *Aspectos éticos* pede: necessidade de apreciação por CEP, uso de dados pessoais ou sensíveis, consentimento, anonimização, riscos, benefícios e medidas de proteção. (A menção a "número do parecer do CEP" vinha da página web e **não consta do DOCX**.) O rascunho apresenta os princípios corretos, mas sem tratar cada um desses itens.
*Recomendação:* responder item a item, afirmando que na etapa atual não há participantes nem coleta de dados, e que a eventual etapa com pessoas será submetida ao CEP após a matrícula (texto sugerido na Seção 5.4).

**A6. Plágio, autoplágio e uso de IA.** O edital (Disposições gerais, item 8) diz que **plágio ou autoplágio pode ser arguido a qualquer momento e acarreta desclassificação**. Nem o edital nem o DOCX, nas partes que li, exigem declaração de uso de IA generativa. Ainda assim, o repositório contém um documento de "diretrizes para IAs", o que sugere que ferramentas de IA participaram da elaboração.
*Recomendação:* (i) garantir que todo o texto seja de sua autoria e revisão e que as paráfrases de fontes não sigam de perto a redação original; (ii) rodar uma verificação de similaridade, se possível; (iii) não reutilizar texto já publicado seu sem citar; (iv) ser capaz de explicar e defender cada afirmação na defesa oral; (v) decidir, com a orientação da instituição, se declara o apoio de ferramentas. Isso é uma decisão sua, e a transparência costuma ser a posição mais segura.

**A7. Conferência literal: parcialmente resolvida.** Com o DOCX e o PDF do edital, a estrutura, os critérios, a pontuação e as regras de formatação passam a ser conferíveis (Seção 3A). Seguem pendentes: a verificação do prazo vigente (Seção 0), a exportação do PDF final com o tamanho (≤ 8 MB) e a conferência do DOCX preenchido contra o checklist.

**A8. Seções exigidas pelo modelo e ausentes no rascunho (nova).** Governança de dados, Tipo de estudo científico, Método de análise dos resultados, Estratégia Nacional de Governo Digital, Infraestrutura/parcerias/viabilidade, Tipo de produto planejado e palavras-chave. Cada uma é uma seção formal do DOCX, e sua ausência pode ser lida como não conformidade com o modelo, o que o edital associa a não avaliação. *Recomendação:* textos-modelo nas Seções 5.5 a 5.8.

**A9. Tipo de projeto na capa.** Use a redação literal do edital (item 5), e não a do DOCX, que traz dois itens numerados "4" e uma formulação diferente.

### B. Coerência interna e fonte única da verdade

**B1. Duas versões do anteprojeto em conflito.** `anteprojeto-base.md` tem **cinco** objetivos específicos, uma seção de hipótese e o cronograma. `anteprojeto-modelo-uerj.md` tem **três** objetivos, sem hipótese e sem cronograma. Qualquer pessoa que copie do arquivo errado reintroduz divergências.
*Recomendação:* declarar o arquivo do modelo UERJ como **única versão vigente** e arquivar o `anteprojeto-base.md` (ou reduzi-lo a um ponteiro). Migrar para o texto vigente o que for útil: o cronograma e a hipótese de trabalho.

**B2. Contradição sobre o encerramento.** O modelo UERJ afirma, no Método, que "a etapa de encerramento ainda não tem tarefa de escolha e feedback para OE-05". Já `produto-minimo.md` e o mapa de objetivos registram que, desde 21/10/2026, existe um exercício de escolha única com feedback. O mesmo texto desatualizado aparece no `anteprojeto-base.md`.
*Recomendação:* decidir qual é o estado correto e padronizar. Para o anteprojeto, a redação ideal descreve o **produto pretendido** (os três momentos, todos com prática e feedback), sem relatar "o que ainda falta".

**B3. Produto descrito no futuro, mas já iniciado.** O cronograma do rascunho prevê "desenvolvimento do simulador" nos meses 7–11, enquanto o protótipo já existe. Nem o texto nem o cronograma mencionam isso.
*Recomendação:* declarar que há uma **prova de conceito inicial** e reposicionar o cronograma, dedicando mais tempo à fundamentação, à avaliação e à redação (ver Seção 5.3). Isso reforça a viabilidade e a credibilidade na defesa.

**B4. Citações no texto sem entrada na bibliografia.** O texto cita as orientações do HHS e o curso *Digital House Calls*, mas nenhum deles está na bibliografia do rascunho. Em contrapartida, três fontes brasileiras encontradas no levantamento exploratório (Revista Latino-Americana de Enfermagem, Ciência & Saúde Coletiva e Revista Bioética) não constam da bibliografia.
*Recomendação:* garantir correspondência 1:1 entre citações e referências.

**B5. Número de critérios do edital (resolvido).** O edital lista oito aspectos "em destaque" (a–h), mas a **pontuação** usa **sete** critérios, porque inovação e escalabilidade formam um único critério. O repositório estava correto ao trabalhar com sete eixos. Falta apenas deixá-los visíveis no texto, conforme a tabela da Seção 3A.2.

**B6. Documentação excessiva em relação ao texto avaliável.** O repositório tem dezenas de documentos de processo (registros, matrizes, tutoriais, auditorias). Isso é útil para o trabalho, mas cria duplicação e risco de divergência, como visto em B1 e B2. Há também dois roadmaps (`ROADMAP.md` e `docs/roadmap.md`) e um arquivo cujo nome diz "cinco temas" e contém seis.
*Recomendação:* adotar uma regra simples: o anteprojeto é a fonte; os demais documentos o apoiam, e qualquer mudança no anteprojeto é refletida (ou descartada) nos demais na mesma sessão.

### C. Problema, justificativa e fundamentação

**C1. Falta de dados e contexto brasileiros.** A introdução e a justificativa são conceituais e se apoiam principalmente em uma revisão de escopo com estudos majoritariamente dos EUA. Não há um único dado nacional sobre exclusão digital, uso de internet por adultos, telessaúde no SUS ou regulação da teleconsulta. O próprio repositório admite essa limitação ("a transferência para o contexto brasileiro é restrita").
*Recomendação:* acrescentar um parágrafo de contexto com **dados e marcos nacionais verificáveis**. Candidatos de busca, todos **a verificar** antes de citar:
- pesquisas de uso de TIC no Brasil (CGI.br/Cetic.br: TIC Domicílios e TIC Saúde; IBGE: PNAD Contínua TIC);
- marco legal da telessaúde (Lei nº 14.510/2022) e normas sobre telemedicina (Resolução CFM nº 2.314/2022);
- Programa SUS Digital (Portaria GM/MS nº 3.232/2024, já citada no repositório) e a Estratégia de Saúde Digital para o Brasil;
- LGPD (Lei nº 13.709/2018), para a postura de privacidade do produto;
- dados regionais (Tocantins/Guaraí) sobre conectividade, população e cobertura de saúde, se disponíveis.

**C2. A lacuna não está afirmada de forma utilizável.** O texto diz repetidamente que a lacuna "ainda precisa ser sustentada". Isso é honesto, mas deixa o leitor sem uma lacuna enunciada.
*Recomendação:* enunciar a lacuna de forma precisa e limitada ao que é sabido. Exemplo de estrutura: (i) há evidência de que treinamento de usuários é pouco estudado e com resultados mistos; (ii) existem recursos autoguiados, majoritariamente em inglês e espanhol, e em formato de vídeo/curso; (iii) não foi identificado, **na busca exploratória realizada**, um simulador interativo de decisões, em português brasileiro, sem cadastro; (iv) a busca sistemática do projeto testará essa afirmação. Dessa forma a alegação é defensável e ainda assim afirmativa.

**C3. Ausência de referencial teórico sobre como a simulação ensina.** O produto se baseia em prática simulada com feedback, mas o texto não cita teoria de aprendizagem. Para um mestrado em tecnologias para educação em saúde, isso é uma lacuna esperada pela banca.
*Recomendação:* ancorar a proposta em dois ou três referenciais, de forma breve. Candidatos, **a verificar**: aprendizagem de adultos (Knowles), carga cognitiva (Sweller), princípios de aprendizagem multimídia (Mayer), prática deliberada e feedback, padrões de simulação em saúde (INACSL) e, para avaliação, o modelo de Kirkpatrick (para justificar por que a avaliação do projeto está nos níveis iniciais).

**C4. Uso muito limitado da formação do candidato.** Medicina e Jornalismo são ativos centrais (precisão do conteúdo de saúde, clareza da comunicação, leitura crítica de fontes), mas aparecem apenas na carta de motivos e nos documentos de apoio.
*Recomendação:* uma frase na Justificativa ou no Método conectando a formação à capacidade de executar o projeto (redação de conteúdo claro, revisão de acurácia biomédica).

**C5. Escassez de fontes empíricas na bibliografia.** São sete referências, das quais três são documentos de organizações (WHO/ITU, WHO) e uma é o padrão WCAG. Há só duas revisões de escopo e um artigo conceitual de 2006.
*Recomendação:* ver Seção 4.I.

### D. Potencial de inovação e escalabilidade

**D1. A seção de inovação (110 palavras) não afirma uma inovação.** Descreve um plano de comparação, mas não diz o que é novo ou diferente. Para o critério "potencial mercadológico e/ou de inovação", isso tende a render pouco.
*Recomendação:* afirmar uma **proposta de valor específica**, defensável e já respaldada pelo que o benchmark mostrou, mantendo a ressalva de que a comparação formal virá da busca. Elementos que o repositório já sustenta:
- prática ativa de **decisão** (escolha e feedback), e não apenas vídeo ou texto;
- **português brasileiro** e linguagem simples;
- **sem cadastro, sem dados e sem custo**, com uso em celular e baixo consumo de dados;
- foco em **ações seguras** (por exemplo, confirmar o link por um canal oficial conhecido), o que tem valor também de proteção contra golpes;
- possibilidade de **adaptação local** por serviços e cursos.

**D2. Escalabilidade sem plano de distribuição.** O texto fala em "reutilização/adaptação" em tese, mas não diz como.
*Recomendação:* declarar um plano concreto: licença aberta; hospedagem estática simples (sem servidor nem banco de dados); guia de adaptação dos cenários para outros serviços; e público adotante identificado (núcleos de telessaúde, cursos de saúde, secretarias de saúde, programas de inclusão digital). Isso responde ao critério sem prometer receita nem adoção.

**D3. "Potencial mercadológico" tratado só por negação.** O texto diz que "não se presume potencial de receita". Para o edital, basta explicar que o modelo é de **recurso educacional aberto** e que o valor está na adoção institucional e no reúso, como o próprio repositório já argumenta em outro documento. Traga esse argumento para o anteprojeto.

### E. Método

**E1. Falta de arcabouço metodológico nomeado.** O desenho é "pesquisa tecnológica aplicada, exploratória". É um rótulo genérico. Um mestrado profissional em tecnologia costuma ser avaliado pela clareza do processo de desenvolvimento e avaliação.
*Recomendação:* adotar e citar um arcabouço, como **Design Science Research** (Hevner et al., 2004; Peffers et al., 2007; **a verificar**), mapeando as fases do projeto para suas atividades: identificação do problema, definição de objetivos da solução, desenho e desenvolvimento, demonstração, avaliação, comunicação. Alternativamente, um modelo de desenho instrucional (por exemplo, ADDIE). O importante é que as quatro fases já descritas apareçam sob um nome reconhecível. O DOCX exige uma seção **"Tipo de estudo científico"**: classifique o desenho (por exemplo, pesquisa aplicada de desenvolvimento tecnológico com avaliação de tecnologia sem participantes na etapa base) e justifique, distinguindo-o de estudo observacional ou experimental. Exige também **"Método de análise dos resultados esperados"**: indique critérios e indicadores, como conformidade WCAG por critério, cobertura de requisitos e objetivos, número e gravidade de defeitos, e legibilidade.

**E2. Auditoria descrita sem métodos nomeados.** A Fase 3 lista o que será verificado (teclado, foco, contraste, zoom etc.), mas não **como** nem **com que referencial**.
*Recomendação:* citar no texto os métodos e padrões: WCAG 2.2 nível AA como critério de conformidade; método de avaliação de conformidade (por exemplo, WCAG-EM); **avaliação heurística** (Nielsen) e **percurso cognitivo** para usabilidade sem usuários; **índices de legibilidade** para o português e checagem de linguagem simples; e uma rubrica pedagógica explícita. Também registre que ferramentas automáticas (como axe-core) são apoio e não provam conformidade, ponto que o texto já faz.

**E3. Risco de viés na avaliação "pelo próprio pesquisador".** A camada sem participantes inclui uma rubrica pedagógica aplicada pelo autor do produto. A banca pode questionar a independência.
*Recomendação:* prever **pelo menos um inspetor independente** (colega, docente, profissional de educação em saúde ou de acessibilidade) para parte das inspeções, com concordância entre avaliadores relatada. Se isso envolver respostas de pessoas como dados de pesquisa, verifique o enquadramento ético (ver H3).

**E4. A etapa com pessoas está formulada como "só se a orientação pedir".** A formulação é prudente para o rascunho, mas, lida pela banca, sugere ausência de decisão. Um produto educativo para um público específico, avaliado sem esse público, é o ponto mais vulnerável do projeto.
*Recomendação:* reformular como **plano em duas camadas com gatilho e calendário**. A Camada 0 (sem participantes) é a base garantida. A Camada 1 (teste de usabilidade e compreensão com um número pequeno de pessoas, ou validação de conteúdo por especialistas) é **planejada para uma janela do cronograma**, condicionada à aprovação do CEP e à orientação, com a Camada 0 como alternativa já descrita. Isso mantém a honestidade e demonstra planejamento. Uma opção intermediária de menor custo é a **validação de conteúdo por juízes especialistas** (por exemplo, com índice de validade de conteúdo), usual na produção de tecnologias educacionais em saúde no Brasil; confirme o enquadramento ético com a instituição.

**E5. "Baixa familiaridade digital" não é operacionalizada.** O texto adia a definição para a orientação. Em um processo seletivo, o candidato é avaliado também pela autonomia intelectual.
*Recomendação:* oferecer uma **definição provisória**, explicitamente revisável, baseada em desempenho e necessidade de apoio, e não em idade ou escolaridade (o texto já rejeita esses proxies). Por exemplo (texto-modelo na Seção 5.3): adultos que relatam necessidade de ajuda para realizar sozinhos tarefas digitais básicas, como abrir um link, usar vídeo e áudio ou instalar/abrir um aplicativo. Pode-se citar instrumentos já mencionados no repositório (por exemplo, MDPQ em versão brasileira; eHEALS) como candidatos, sem se comprometer com eles.

**E6. A pergunta de pesquisa é de processo.** "Como desenvolver e avaliar…" descreve o que será feito, não o que se quer saber. Está coerente com o plano, mas é fraca como pergunta.
*Recomendação:* manter a pergunta atual como pergunta principal e acrescentar uma pergunta ou hipótese **de resultado**, compatível com a Camada 0. Exemplo: "Em que medida o protótipo atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura?". A hipótese de trabalho do `anteprojeto-base.md` pode voltar para a Introdução.

### F. Objetivos

**F1. Objetivos compostos e pouco mensuráveis.** Cada objetivo específico agrupa vários verbos (por exemplo, "realizar busca…, mapear…, derivando objetivos e requisitos…").
*Recomendação:* um verbo principal por objetivo, ligado a um **produto verificável** e a uma fase do cronograma. Modelo:
1. **Mapear** evidências e recursos existentes → matriz de evidências e benchmark.
2. **Desenvolver** o simulador com base em requisitos derivados → protótipo documentado e matriz de rastreabilidade.
3. **Avaliar** técnica, pedagógica e acessibilidade → relatório de inspeção com defeitos, correções e limitações (e, se aprovada, avaliação com participantes).

**F2. Objetivo geral sem o público e o contexto.** O objetivo geral não menciona o público. Considere incluir "para adultos com baixa familiaridade digital" e o contexto do SUS, mantendo o limite sobre o que será avaliado.

### G. Impacto, equidade, ODS e SUS Digital

**G1. Impacto descrito principalmente pelo que não se afirma.** A seção de impacto do rascunho dedica mais espaço a negativas do que a benefícios. O leitor não encontra a mudança esperada nem seus indicadores.
*Recomendação:* abrir com o benefício esperado e seu indicador, e só depois delimitar. Indicadores compatíveis com o desenho (Camada 0): número de requisitos atendidos; cobertura de objetivos de aprendizagem por cenário; conformidade com critérios WCAG aplicáveis; índice de legibilidade dos textos; tempo estimado de uso. Se houver Camada 1: taxa de conclusão de tarefas, erros e necessidade de ajuda.

**G2. O Programa SUS Digital não é citado.** O termo "SUS Digital" não aparece no anteprojeto, embora a relação com a transformação digital do SUS seja critério do edital. O repositório já documenta, em outro arquivo, que o Programa inclui entre seus objetivos o letramento digital e a educação permanente em saúde digital.
*Recomendação:* citar o Programa pelo nome, apontar **quais objetivos** ele atende e por qual mecanismo (educação, cultura digital, redução de iniquidades), sem alegar integração tecnológica.

**G3. ODS listados, sem metas.** O texto cita ODS 3, 4 e 10, e explica a relação em uma frase por ODS.
*Recomendação:* relacionar a **metas específicas** (candidatas, **a verificar** no texto oficial da ONU/IPEA: 3.8 sobre cobertura universal de saúde; 4.4 sobre competências relevantes de jovens e adultos; 10.2 sobre inclusão; eventualmente 9.c sobre acesso às TIC) e dizer o que no produto contribui para cada uma.

**G4. Equidade e diversidade abordadas de forma genérica.** Há menção a linguagem simples, celular e acessibilidade. Faltam especificidades relevantes ao tema:
- O cenário "não consigo ouvir" pressupõe audição. Pessoas surdas ou com perda auditiva precisam de alternativas (legendas, chat, intérprete de Libras, comunicação escrita), previstas inclusive no padrão WHO/ITU, que o projeto cita.
- Baixa escolaridade formal e **letramento funcional**: o texto fala em linguagem simples, mas não em leitura assistida, áudio, imagens ou ritmo.
- Conectividade intermitente e planos de dados limitados, em especial fora de capitais.
- Baixa visão, uso de leitor de tela, motricidade fina e alvos de toque.
*Recomendação:* um parágrafo concreto sobre esses grupos e como o desenho responde a cada um. Isso eleva o critério "equidade e diversidade" e é coerente com o que o protótipo já se propõe a fazer.

**G5. Territorialidade.** Guaraí-TO aparece em duas menções e sempre como "potencial". Se a justificativa regional é parte da motivação, vale dar-lhe substância (dados, fluxo local de telessaúde conhecido, tipo de usuário), sem afirmar parceria. Se existir qualquer manifestação de interesse institucional, mesmo informal, e se isso puder ser descrito com fidelidade, vale registrá-la.

### H. Ética e proteção de dados

**H1. Estrutura correta, texto genérico.** A seção (114 palavras) apresenta os princípios corretos, mas não os distribui por etapa nem menciona normas.
*Recomendação:* separar (a) **o produto** (sem coleta, sem transmissão, sem armazenamento persistente, conteúdo fictício, sem aparência de serviço oficial, aderência à LGPD por minimização) e (b) **a pesquisa com pessoas** (condicional: apreciação do CEP conforme as Resoluções CNS 466/2012 e 510/2016, termo de consentimento, voluntariedade, direito de desistência, confidencialidade, retenção e descarte).

**H2. Incluir a afirmação sobre o parecer do CEP.** Ver A5 e o texto sugerido na Seção 5.4.

**H3. Inspetores e juízes como participantes.** Se terceiros (especialistas ou inspetores independentes) fornecerem avaliações que serão analisadas como dados da pesquisa, o enquadramento ético deve ser confirmado com o CEP/instituição, e não presumido. O repositório já adota essa postura de cautela em outros pontos; vale estendê-la aqui.

### I. Bibliografia

**I1. Cobertura estreita.** Sete referências, com apenas duas revisões de escopo de saúde digital e uma conceitual. Faltam: literatura brasileira, marcos normativos, referencial de aprendizagem e método, e estudos sobre simulação em educação em saúde.
*Recomendação:* chegar a um conjunto de **15 a 25 referências**, cada uma citada no texto. Sugestão de composição: (i) 3 a 5 estudos sobre treinamento/preparação de usuários para telessaúde; (ii) 2 a 3 fontes sobre literacia digital em saúde (incluindo Brasil); (iii) 3 a 4 fontes brasileiras sobre telessaúde/teleconsulta no SUS (as três já localizadas no levantamento podem entrar após conferência); (iv) 3 a 4 documentos normativos; (v) 2 a 3 de referencial teórico de aprendizagem; (vi) 2 a 3 de método (DSR, heurísticas, WCAG).

**I2. Qualidade dos metadados.** Confira, referência por referência, autores, periódico, volume, páginas, DOI e data de acesso. O repositório já reconhece essa pendência. A WCAG 2.2 foi republicada em 12/12/2024; use a versão e a data corretas na citação.

**I3. Remover os apontamentos internos.** O parágrafo final da bibliografia do rascunho ("A síntese e os metadados… estão registrados em…") remete a arquivos que o avaliador não verá; retire-o.

**I4. Padronização.** Escolha o padrão (por exemplo, ABNT NBR 6023) e use-o em todas as entradas, incluindo fontes online.

### J. Linguagem e estilo

**J1. Excesso de ressalvas.** Contei dezenas de construções como "não presume", "não se presumirá", "dependerá de", "somente se", "ainda precisa". O sentido é correto, mas a repetição cria a impressão de um projeto sem convicção. Sugestão: **uma** seção de limitações bem escrita (a 15) concentra as ressalvas; nas demais, escreva afirmativamente e retome a ressalva só quando for essencial para a precisão.

**J2. Blocos longos.** Os resumos (e o sumário executivo do rascunho, que não existe no DOCX) são parágrafos únicos. Use rótulos em negrito (Contexto, Objetivo, Método, Produto, Resultados esperados) e frases mais curtas para facilitar a leitura rápida.

**J3. Sumário executivo.** O DOCX não tem essa seção. Reaproveite seu conteúdo na Justificativa e na Proposta de valor, e deixe o resumo como síntese científica (contexto, pergunta, objetivo, método, produto, resultados esperados), sem citações.

**J4. Aproveitamento do limite de palavras.** Os resumos usam cerca de 40% do limite de 500 palavras. Não é obrigatório preencher tudo, mas há espaço para incluir dado de contexto, a proposta de valor e os indicadores.

**J5. Inglês.** O abstract mistura "practising" (britânico) com termos americanos. Padronize a variante e revise com um falante fluente. Verifique também se "telehealth consultation" e "teleconsultation" são usados de forma consistente.

**J6. Título.** "Treino de Teleconsulta" pode ser lido como treinamento de profissionais. O complemento "para adultos com baixa familiaridade digital" ajuda, mas considere reforçar o público e o contexto, por exemplo: "…para usuários do SUS…". Decida com a orientação e mantenha o mesmo título em todos os documentos.

---

## 5. Textos-modelo sugeridos

Os trechos abaixo são **propostas editáveis**. Colchetes indicam dados que precisam ser inseridos e confirmados. Nada aqui afirma resultado nem dado que não possa ser verificado.

### 5.1 Proposta de valor: Potencial de Inovação (e Escalabilidade)

> A proposta é um **simulador educativo de decisões** em português brasileiro, de uso gratuito, sem cadastro e sem coleta de dados, para que adultos pratiquem, em ambiente fictício, as ações digitais necessárias para participar de uma teleconsulta. Em comparação com os recursos identificados no levantamento exploratório — guias textuais, tutoriais em vídeo e cursos autoguiados, em geral em outros idiomas e em formato de apresentação de conteúdo —, a contribuição pretendida está em quatro características: (1) prática ativa de escolhas, com feedback imediato e não punitivo; (2) foco em ações seguras, como confirmar um link por um canal oficial conhecido; (3) linguagem simples e desenho para celular e baixo consumo de dados; e (4) possibilidade de adaptação dos cenários a diferentes serviços e cursos. A originalidade dessa combinação será examinada por busca sistemática e matriz comparativa de funcionalidades, público, idioma, acessibilidade e requisitos técnicos. A escalabilidade decorre da arquitetura estática, sem servidor nem banco de dados, e do plano de distribuição como recurso educacional aberto, sob licença livre, acompanhado de guia de adaptação para núcleos de telessaúde, cursos de saúde e secretarias de saúde. O valor esperado é de adoção institucional e reúso, e não de receita.

### 5.2 Proposta de valor: Beneficiários e Contribuição para o SUS (impacto e equidade)

> O impacto pretendido é ampliar as oportunidades de **prática segura de habilidades digitais** associadas à teleconsulta por pessoas que hoje dependem de tentativa e erro durante o atendimento real. No horizonte do mestrado, os indicadores previstos são: número de requisitos atendidos, cobertura dos objetivos de aprendizagem por cenário, conformidade com os critérios WCAG 2.2 aplicáveis, legibilidade dos textos e [indicadores da etapa com participantes, se aprovada: conclusão de tarefas, erros e necessidade de ajuda]. A contribuição para o **Programa SUS Digital** se dá pelo eixo de [letramento e cultura digital em saúde / educação permanente / redução de iniquidades — conferir a redação da Portaria GM/MS nº 3.232/2024]. A relação com os ODS é a seguinte: ODS 3 (meta [3.8, verificar]), ODS 4 (meta [4.4, verificar]) e ODS 10 (meta [10.2, verificar]), pelo mecanismo de [descrever em uma frase por ODS]. Os efeitos sobre uso de serviços, continuidade do cuidado ou desfechos clínicos estão fora do alcance do desenho e não serão alegados.

### 5.3 Definição provisória do público, pergunta complementar e cronograma reajustado

**Definição operacional provisória (revisável com a orientação):**

> Neste projeto, "baixa familiaridade digital" designa a condição de adultos que relatam necessitar de ajuda para realizar sozinhos tarefas digitais básicas necessárias a uma teleconsulta, como abrir um link recebido, ligar e ajustar áudio e vídeo e localizar controles na tela. A condição é definida por desempenho e necessidade de apoio, e não por idade, escolaridade ou deficiência, isoladamente. A forma de identificação e os critérios de elegibilidade serão fixados no protocolo submetido ao CEP, se houver etapa com participantes.

**Pergunta complementar (sugestão):**

> Em que medida o protótipo atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura e dos recursos analisados?

**Cronograma de 24 meses no formato do DOCX (proposta; ajustar às disciplinas, ao Simpósio Inaugural presencial, à qualificação se prevista e ao calendário do Programa):**

| Etapa / Atividade | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revisão bibliográfica e referencial teórico | X | X | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Delimitação e planejamento metodológico | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Desenvolvimento da solução/produto |  |  |  | X | X | X | X | X | X | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |
| Submissão/aprovação ética, quando aplicável |  |  |  | X | X | X | X | X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Coleta/produção de dados |  |  |  |  |  |  |  |  |  | X | X | X | X | X | X | X | X | X | X |  |  |  |  |  |
| Testes e validação |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X | X | X | X |  |  |  |  |  |
| Análise dos resultados |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X |  |  |  |
| Redação do Trabalho de Conclusão |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X | X | X | X | X | X | X | X |  |
| Elaboração, finalização e submissão do produto final |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X | X | X | X | X |  |
| Apresentação/defesa do Trabalho de Conclusão |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |

Notas para o texto que acompanha a tabela: (a) o protótipo inicial já existe, o que justifica o desenvolvimento concentrado nos meses 4 a 15 e mais tempo para fundamentação e avaliação; (b) "Coleta/produção de dados" refere-se, na Camada 0, aos **registros de inspeção e de busca bibliográfica**, e, na Camada 1, **somente se aprovada pelo CEP**, a eventual atividade com pessoas (meses 14 a 19); (c) a submissão ao CEP só é possível após a matrícula (março de 2027), por isso aparece nos meses 4 a 9, com folga para pendências; (d) as disciplinas do curso são **exclusivamente a distância**, e há atividades presenciais obrigatórias (Simpósio Inaugural), a registrar na viabilidade.

### 5.4 Aspectos éticos (trecho de abertura sugerido)

> Na etapa atual, a pesquisa **não envolve participantes** e se baseia em fontes públicas, em literatura e na inspeção de um produto sem coleta de dados; portanto, não há número de parecer de Comitê de Ética em Pesquisa a informar. Caso a orientação acadêmica e a análise de viabilidade indiquem uma etapa com pessoas (validação por especialistas ou teste de usabilidade), o protocolo será submetido ao Sistema CEP/CONEP, conforme as Resoluções CNS nº 466/2012 e nº 510/2016, após a matrícula e **antes** de qualquer recrutamento ou coleta. Autorizações institucionais, quando necessárias, serão obtidas em paralelo e não substituem a apreciação ética. O simulador não solicita, transmite nem armazena dados pessoais, de saúde ou contato, usa exclusivamente conteúdo fictício e não se apresenta como serviço oficial, em conformidade com o princípio de minimização da Lei nº 13.709/2018 (LGPD). [Verificar as citações normativas e o enquadramento com a instituição.]

### 5.5 Governança de dados (seção exigida pelo modelo)

> **Produto.** O simulador não solicita, coleta, transmite nem armazena dados pessoais, de saúde ou de contato. As escolhas feitas durante o uso existem apenas na memória do navegador e desaparecem ao reiniciar ou fechar a página. Todo o conteúdo (pessoas, serviços, links e mensagens) é fictício. Não há login, banco de dados, servidor de aplicação nem serviços de terceiros que registrem o uso. **Pesquisa.** Na etapa atual os dados são documentais: referências bibliográficas, registros das estratégias de busca e relatórios de inspeção, armazenados em repositório de acesso restrito ao pesquisador e à orientação, com cópia de segurança e sem informações pessoais. Caso uma etapa com participantes seja aprovada pelo CEP, serão definidos no protocolo: finalidade, dados mínimos, anonimização ou pseudonimização, local e controle de acesso ao armazenamento, tempo de retenção, descarte, responsáveis e compartilhamento, em conformidade com a Lei nº 13.709/2018 (LGPD). [Conferir a redação com a instituição.]

### 5.6 Tipo de produto planejado (escolha obrigatória no modelo)

O modelo exige marcar **uma** opção e justificá-la, conforme o documento norteador da CAPES (link no próprio DOCX). Para um simulador web, a opção que parece mais coerente é **Produto tecnológico**, em vez de artigo científico (cuja publicação em periódico Q1/Q2 em 24 meses fica mais frágil sem etapa empírica com usuários). **A classificação T1/T2 depende dos critérios do documento CAPES, que não pude consultar; confira-os antes de marcar.**

> Justificativa (modelo): O produto planejado é um **simulador educativo web** (produto tecnológico), de acesso aberto, que será documentado (requisitos, matriz de rastreabilidade, relatório de inspeção) e disponibilizado sob licença livre, com guia de adaptação para outros serviços e cursos. Essa modalidade é a que melhor corresponde ao objetivo de desenvolver uma solução educativa reutilizável. Os resultados de avaliação serão apresentados na dissertação e poderão originar artigo científico como produto derivado. [Verificar enquadramento T1/T2 conforme o documento norteador.]

### 5.7 Infraestrutura, parcerias e viabilidade técnica (seção exigida)

> A execução exige computador pessoal, acesso à internet e navegadores atualizados para desenvolvimento e inspeção, ferramentas gratuitas ou de código aberto para verificação de acessibilidade e hospedagem estática de baixo ou nenhum custo. Não há dependência de servidores, licenças pagas nem laboratórios. Como o Programa não dispõe de recursos orçamentários nem de bolsas, eventuais custos (como domínio ou revisão especializada) serão de responsabilidade do discente e são pequenos. **Parcerias:** não há parceria institucional estabelecida; articulação com a rede de saúde de Guaraí-TO será buscada como etapa exploratória e não é condição para executar a Camada 0. **Riscos e mitigação:** (i) atraso ou não aprovação do CEP → manter a avaliação documental e de inspeção como entrega completa; (ii) indisponibilidade de especialistas ou participantes → ampliar a inspeção e a análise documental; (iii) sobrecarga de tempo do discente → priorizar o produto mínimo e o cronograma da Seção 5.3. [Acrescentar atividades presenciais obrigatórias e deslocamentos à viabilidade.]

### 5.8 Estratégia Nacional de Governo Digital (subitem exigido)

O modelo pede para relacionar o projeto aos eixos, princípios ou objetivos pertinentes da Estratégia, "quando aplicável". Esse subitem não existe no repositório. **Verifique o instrumento vigente e seus eixos antes de citar** (não os reproduzi aqui para não atribuir conteúdo incorreto). Estrutura sugerida: (1) citar a Estratégia vigente e seu eixo ou princípio mais próximo (por exemplo, serviços públicos digitais centrados no cidadão, inclusão digital, proteção de dados); (2) explicar em duas ou três frases o mecanismo pelo qual o simulador contribui (preparar cidadãos para usar serviços digitais de saúde); (3) afirmar que não há integração com plataformas governamentais.

### 5.9 Palavras-chave e pergunta de pesquisa no resumo

O modelo pede **3 a 5 descritores DeCS/MeSH** e que o resumo traga a **pergunta de pesquisa**. Candidatos a confirmar nos vocabulários: Telemedicina (*Telemedicine*); Educação em Saúde (*Health Education*); Letramento em Saúde (*Health Literacy*); Treinamento por Simulação (*Simulation Training*). Inclua a pergunta de pesquisa no resumo e na Justificativa, e retire as citações do resumo, que o modelo não admite.

---

---

## 6. Riscos para a avaliação e como mitigá-los

| Risco provável na leitura da banca | Origem no texto | Mitigação |
|---|---|---|
| "O projeto não decide se vai ou não testar com usuários" | E4 | Plano em duas camadas com janela no cronograma e alternativa |
| "Onde está a inovação?" | D1 | Proposta de valor afirmativa e plano de distribuição |
| "Qual é o problema no Brasil?" | C1 | Dados e marcos nacionais; lacuna enunciada |
| "Como a simulação ensina?" | C3 | Dois a três referenciais de aprendizagem |
| "Como será a avaliação, concretamente?" | E1, E2 | Arcabouço nomeado e métodos de inspeção citados |
| "A avaliação é feita por quem desenvolveu" | E3 | Inspetor independente em parte dos casos |
| "O projeto cabe em 24 meses?" | A4, B3 | Cronograma no corpo, reajustado ao protótipo já existente |
| "O texto parece inacabado" | A1, A2, B2 | Limpeza editorial final e remoção de links internos |
| "A inclusão é só retórica" | G4 | Grupos e respostas de desenho específicos |
| "Não está conforme o modelo oficial" (edital: só avalia anteprojetos conformes) | 3A | Migrar para o DOCX e preencher todas as seções |
| "Onde está a equidade?" (critério sem seção própria) | 3A.2 | Parágrafo identificado em Beneficiários e Contribuição ao SUS |
| "Qual o produto final e sua classificação?" | 3A.1 | Seção de tipo de produto preenchida e justificada |
| "ODS e SUS Digital só citados" | G2, G3 | Metas e objetivos do Programa nomeados |

---

## 7. Plano de ação priorizado

### 7.1 Antes do envio (se o prazo ainda estiver aberto)

Ordem sugerida, da maior para a menor relação entre esforço e pontuação:

- [ ] **Confirmar o prazo vigente** (Seção 0).
- [ ] Abrir o **DOCX oficial** e preencher **todas** as seções do modelo (Seção 3A.1), na ordem e com os títulos do documento, sem apagar as seções que parecem "vazias" (Governança de dados, Infraestrutura, Tipo de produto).
- [ ] Cobrir os **sete critérios pontuados** com parágrafos identificáveis, incluindo um parágrafo explícito de **equidade e diversidade**.
- [ ] Inserir a **pergunta de pesquisa** no resumo e na Justificativa; incluir **3 a 5 palavras-chave**.
- [ ] Preencher a **tabela de cronograma** (Seção 5.3).
- [ ] Marcar o **tipo de produto** e justificar (Seção 5.6).
- [ ] Redigir Governança de dados e Infraestrutura (Seções 5.5 e 5.7).
- [ ] Remover marcas de rascunho, o código "OE-05", a descrição de "pendências" e os links do repositório. Corrigir a frase sobre o encerramento.
- [ ] Citar o Programa SUS Digital pelo nome e conectar cada ODS a uma meta, conferindo as fontes.
- [ ] Alinhar citações e referências (só fontes citadas; ABNT).
- [ ] Formatar conforme o checklist (Arial 12; margens 3/3/2/2; 1,5; recuo 1,25), atualizar o sumário, exportar para **PDF ≤ 8 MB** e conferir se abre corretamente.
- [ ] Enviar também os demais documentos obrigatórios (itens 1 a 15 do edital, incluindo carta de exposição de motivos e declaração de conhecimento da Deliberação). A falta de qualquer um **inviabiliza a inscrição**.

### 7.2 Entre o envio e a defesa oral (16/11/2026)

- [ ] Lembrar que a defesa vale 3,0 pontos: **fundamentação teórica**, clareza e coerência, e **motivos para cursar o Mestrado Profissional**. Treine as três.
- [ ] Preparar respostas a: "por que não testar com usuários?", "o que é novo aqui?", "como garante qualidade pedagógica?", "e se a Secretaria não aderir?" (use a matriz de riscos da Seção 6).
- [ ] Alinhar a apresentação ao texto submetido, **sem prometer o que o texto não prevê**.
- [ ] Levar uma versão atualizada do cronograma e do plano em duas camadas.
- [ ] Ter a lista de referências fortalecida e conferida em mãos.

### 7.3 Após a aprovação (com a orientação)

- [ ] Executar e registrar as buscas sistemáticas nas bases (PubMed/MEDLINE, BVS/LILACS, SciELO), com contagens e exportações originais.
- [ ] Decidir a Camada 1, e elaborar o protocolo para o CEP.
- [ ] Fixar o arcabouço metodológico (DSR ou equivalente) e a definição operacional do público.
- [ ] Consolidar a bibliografia (15 a 25 referências) e o referencial teórico.
- [ ] Conferir cada recomendação "a verificar" deste relatório.

---

## 8. Lista final de conferência do texto

**Forma**
- [ ] Todas as seções e subitens do **DOCX oficial**, na ordem e com os títulos do modelo
- [ ] Formatação do checklist do modelo; PDF de até 8 MB
- [ ] Palavras-chave (3 a 5) e pergunta de pesquisa no resumo; sem citações no resumo
- [ ] Tipo de projeto com a redação literal do edital (item 5)
- [ ] Nenhum rótulo de rascunho, colchete ou instrução residual
- [ ] Resumo em português e abstract dentro do limite; inglês revisado
- [ ] Citações no texto = referências na bibliografia
- [ ] Nenhum link para anexos/apêndices ou arquivos internos

**Conteúdo**
- [ ] Título, linha e tipo de projeto consistentes em todos os documentos
- [ ] Problema com dado brasileiro e lacuna enunciada
- [ ] Referencial teórico de aprendizagem (2 a 3 fontes)
- [ ] Inovação afirmada e plano de distribuição (licença, adaptação, adotantes)
- [ ] Arcabouço metodológico e métodos de inspeção nomeados
- [ ] Definição provisória do público
- [ ] Cronograma em tabela (X por mês), coerente com Infraestrutura e viabilidade
- [ ] Governança de dados, Tipo de estudo, Método de análise, Infraestrutura e Tipo de produto preenchidos
- [ ] Parágrafo identificado de equidade e diversidade
- [ ] Estratégia Nacional de Governo Digital (instrumento vigente conferido)
- [ ] Plano em duas camadas com janela no cronograma
- [ ] Impacto com indicadores; SUS Digital e ODS (com metas) explicitados
- [ ] Equidade com grupos e respostas de desenho específicos
- [ ] Ética: CEP, LGPD, consentimento e plano pós-matrícula
- [ ] Limitações concentradas na seção própria, com estratégias de mitigação, e redação afirmativa nas demais

**Integridade**
- [ ] Nenhuma alegação de eficácia, aprendizagem duradoura ou desfecho clínico
- [ ] Nenhuma parceria declarada sem formalização
- [ ] Originalidade verificada (o edital prevê desclassificação por plágio ou autoplágio); decisão sobre declarar apoio de ferramentas

---

## 9. Observação final

O projeto já tem o que é mais difícil de construir: **rigor e honestidade intelectual**. O que falta é traduzi-los em um texto que **convença** sem deixar de ser verdadeiro, com decisões visíveis (método, camadas de avaliação, cronograma), contexto nacional e uma proposta de valor clara. Nenhuma das melhorias acima exige mudar a natureza do projeto, apenas dar-lhe forma final.


---

## 10. Acompanhamento das recomendações — 30/10/2026

Após a revisão 2, foram realizadas as seguintes alterações no repositório:

1. **Organização documental por fase:** os documentos antes concentrados na raiz de `docs/` foram distribuídos entre `anteprojeto/`, `fundamentacao/`, `protótipo/`, `avaliacao/` e `gestao/`, com índices próprios. Os registros de auditoria foram mantidos na fase de avaliação e os registros bibliográficos na fundamentação.
2. **Hierarquia das versões:** `anteprojeto-modelo-uerj.md` foi preservado como rascunho interno, mas agora declara expressamente que sua organização baseada em 16 itens de uma página web não corresponde ao DOCX oficial. `anteprojeto-base.md` foi movido para `versoes-anteriores/` e identificado como histórico.
3. **Contradição do encerramento:** o rascunho de trabalho foi atualizado para registrar a tarefa de escolha única com feedback local implementada no protótipo. O código interno OE-05 não é necessário para descrever essa funcionalidade no texto acadêmico.
4. **Roadmap duplicado:** o roadmap mais completo passou a ser o documento principal em `docs/gestao/roadmap.md`; `ROADMAP.md` na raiz funciona como atalho, e a versão resumida anterior foi preservada como histórica.
5. **Navegação:** README, índice de documentação e instruções de execução foram atualizados para refletir os novos caminhos.

**O que não foi declarado como concluído:** a migração integral do conteúdo para o DOCX oficial, o preenchimento de todas as seções exigidas, a confirmação dos descritores DeCS/MeSH, a verificação de referências e marcos normativos, a decisão acadêmica sobre o método e eventual participação de pessoas, a definição do tipo de produto e a aprovação de qualquer parceria ou protocolo ético. Essas tarefas continuam pendentes e devem ser resolvidas com evidência e orientação acadêmica, sem transformar as sugestões deste relatório em decisões já aprovadas.

**Nota temporal:** este registro de implementação é posterior ao relatório original, que permanece datado de 29/10/2026 (revisão 2). A análise de prazo na Seção 0 retrata a divergência documental observada naquela data e não constitui confirmação do calendário vigente em 30/10/2026.

<!-- END ORIGINAL FILE: relatorios/relatorio01.md -->

---

<!-- BEGIN ORIGINAL FILE: relatorios/relatorio02.md -->

<a id="arquivo-2"></a>

## 2. relatorio02.md

- Caminho original: `relatorios/relatorio02.md`
- Blob SHA original: `fddc8fcf886843dc588ed11240103f760f1bc20c`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

# Relatório 02 — Análise do anteprojeto *Treino de Teleconsulta* e do repositório

**Escopo:** o projeto escrito (anteprojeto) e o que o cerca (submissão, edital, defesa). O protótipo só entra onde afeta o texto. Seções fora do anteprojeto estão no Apêndice A.
**Data da análise:** 30/10/2026, cerca de 00h50 (Brasília).

> **Nota temporal — atualização em 30/10/2026, após 12h:** a contagem regressiva e o plano de execução para “hoje” da Seção 6.1 são registros históricos do momento da análise, não instruções vigentes. O PDF arquivado indica 30/10/2026 às 12h e a página consultada antes indicava 29/10/2026 às 12h; ambas as datas já passaram. Isso não permite inferir se houve inscrição, prorrogação ou protocolo. Confirmar diretamente com o Programa.
**Material analisado:** repositório `repositorio-repo-main` (zip), incluindo o **modelo DOCX oficial**, o **PDF do edital** (Turma 2027) e o PDF do corpo docente, que estão em `docs/processo-seletivo-arquivos/`. O `relatorios/relatorio01.md` foi lido por inteiro e confrontado com as fontes (Seção 2).

---

## 0. Antes de tudo: prazo e estado de prontidão

**0.1 O prazo é hoje, e os documentos do repositório divergem.**
- O **PDF do edital** diz, em dois pontos (abertura e Passo 2), inscrições "até às 12:00h do dia 30/10/2026".
- Três arquivos do repositório registram **29/10 às 12h**, com base na página web em 23–24/10: `analise-edital-turma-2027-e-lacunas.md`, `conferencia-modelo-e-edital-2027-2026-10-24.md` e `tutorial-execucao-pendencias.md`.
- O edital permite à comissão prorrogar ou alterar o calendário (Disposições gerais, item 11). Por isso a página pode ter mudado depois do PDF, em qualquer sentido.
- **Não consegui verificar a página oficial:** o acesso do meu ambiente ao site do Programa foi bloqueado e a busca na web não trouxe a página. Não sei qual prazo vale.
- **Ação:** abra agora a página da seleção e o sistema de inscrição. Se houver dúvida, escreva para `mestrado@telessaude.uerj.br` (canal exclusivo, segundo o edital). Se o prazo for o do PDF, restam cerca de **11 horas**. Não deixe o envio para o último minuto: o sistema exige 15 documentos e a falta de qualquer um **inviabiliza a inscrição** (edital, item IV).

**0.2 Não existe, no repositório, nenhum arquivo pronto para enviar.** Verifiquei todos os `.docx` e `.pdf`: só há o modelo em branco, o edital, o corpo docente e um PDF de auditoria. Isto está pendente:
- O anteprojeto vigente é um `.md` que, no cabeçalho, se declara "não pronto para submissão" e "não é uma cópia do DOCX oficial".
- A carta de exposição de motivos é uma minuta com **16 linhas contendo campos entre colchetes** a preencher, inclusive o parágrafo central sobre sua motivação.
- A declaração da Deliberação nº 13/2023 é uma minuta.
- O edital pede o anteprojeto **em PDF de até 8 MB, no modelo oficial**.

**0.3 Prioridade do que muda a nota.** O edital atribui ao anteprojeto sete critérios de 1,0 ponto cada (7,0) e à defesa oral 3,0. Há antes uma etapa eliminatória: três docentes indicados por você dão "Apto/Não Apto" quanto à aderência às linhas e aos objetivos do Programa. A nota final mínima é 14 de 20. Hoje, três desses sete critérios (SUS Digital, ODS com metas, viabilidade em 24 meses/cronograma) têm **conteúdo zero ou quase zero** no rascunho (Seção 4).

---

## 1. Veredito

O anteprojeto é **honesto, bem delimitado e cuidadoso com os limites da evidência**. Isso é raro e deve ser preservado. Os problemas são quatro:

1. **Forma:** o texto está na estrutura errada. O rascunho segue uma lista de 16 itens de uma página web. O DOCX oficial tem outras seções, entre elas Proposta de valor (9 subitens), Governança de dados, Cronograma em tabela, Infraestrutura e Tipo de produto.
2. **Pontuação:** a cautela virou o tom dominante. O texto diz muito mais o que o projeto *não* é do que o que ele entrega, e é nessa parte que o edital dá pontos.
3. **Lacunas de conteúdo:** faltam dados brasileiros, referencial teórico, SUS Digital, ODS com metas, cronograma, LGPD, tipo de produto.
4. **Acabamento:** há marcas de rascunho, metadiscurso e referências fora do padrão ABNT.

Nada disso exige mudar a natureza do projeto. Exige reescrever e reorganizar.

---

## 2. Relação com o `relatorio01.md`

O `relatorio01.md` já é uma análise detalhada e, no essencial, **concordo com ele**. Conferi suas afirmações centrais nas fontes; a tabela abaixo mostra o que confirmo, corrijo e acrescento.

| Tema | Situação |
|---|---|
| Estrutura do DOCX ≠ rascunho de 16 itens | **Confirmado** (li o DOCX por inteiro). |
| Prazo no PDF = 12h de 30/10 | **Confirmado** no PDF. Continua sem confirmação na página oficial. O relatório 01 estimava "cerca de 12 horas"; agora são cerca de 11. |
| Pontuação 7,0 + 3,0; eliminatória "Apto/Não Apto"; nota mínima 14 | **Confirmado** no edital. |
| Regras de formatação do modelo (Arial 12, margens 3/3/2/2, 1,5, recuo 1,25, PDF ≤ 8 MB) | **Confirmado** no checklist do DOCX. |
| "Resumo sem pergunta de pesquisa" | **Desatualizado.** O rascunho atual já traz a pergunta no Resumo. Mas: (a) a frase de bastidor "Esta formulação é complementar… deve ser harmonizada com a orientação" foi parar **dentro do Resumo**; (b) o **Abstract não tem** a pergunta, embora o modelo exija correspondência de conteúdo. |
| §10 do relatório 01: "README, índice e instruções atualizados para os novos caminhos" | **Não se sustenta.** O README raiz tem links com `../docs/…` que saem do repositório. Ver Apêndice A. |
| Proposta "Produto tecnológico" como tipo de produto | **Concordo, com ressalvas** (Seção 5.5). |
| Cronograma proposto (5.3) | **Concordo, mas falta a qualificação** e a coerência com o prazo do CEP (Seção 5.6). |
| ODS 3.8 / 4.4 / 10.2 como candidatos | **Parcialmente.** A meta 4.4 trata de competências para emprego e empreendedorismo, e o encaixe com literacia digital em saúde é forçado (Seção 4.6). |

**O que este relatório acrescenta** (itens novos, verificados nos arquivos):
- não existe arquivo de submissão pronto, e a carta e a declaração têm riscos próprios (0.2 e 5.9);
- a bibliografia viola o padrão ABNT do modelo (Seção 5.8);
- o critério do edital é "Políticas de Equidade e Diversidade", e não só "equidade" (4.5);
- a escolha dos três docentes é etapa eliminatória e não está documentada (4.1);
- o título do projeto aparece em quatro versões diferentes (5.1);
- o Abstract, a posição das palavras-chave e a lista de referências têm defeitos de conformidade (5.2 e 5.8);
- um plano de execução para hoje (Seção 6);
- sugestões sobre defesa, links, documentação e carta (Apêndice A).

---

## 3. Conformidade com o modelo DOCX oficial

O rascunho tem **3.566 palavras** (contando títulos e bibliografia). Contagem por seção: Sumário executivo 371, Resumo 258, Abstract 227, Introdução 280, Justificativa 258, Potencial de inovação 115, Impacto 191, Objetivos 164, Método 827, Ética 118, Limitações 111, Bibliografia 502. Resumo e Abstract estão abaixo do limite de 500 palavras.

| Seção exigida no DOCX | No rascunho | Ação |
|---|---|---|
| Capa (nome, candidato, linha, tipo) | Existe. Candidato em branco | Usar a redação literal do edital para o tipo: "5) Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde". O DOCX numera dois itens como "4" e redige o 5º de outro modo |
| Resumo + palavras-chave (3–5, DeCS/MeSH) | Resumo existe; **palavras-chave estão no fim da §15 (Limitações)**, marcadas como "provisórias" | Mover para logo abaixo do Resumo e do Abstract; ver 5.2 |
| Abstract | Existe; **sem a pergunta**; "practising" é variante britânica | Igualar o conteúdo ao Resumo |
| Introdução (contexto, **referencial teórico**, estado do conhecimento recente) | Existe; **0 menção a teoria de aprendizagem**; 0 dado brasileiro | Seção 4.1 |
| Justificativa (problema, **pergunta de pesquisa**, relevância, **aderência institucional**) | Existe; a pergunta está na Introdução | Mover a pergunta |
| *Relevância e magnitude… SUS Digital* | **Ausente.** O termo "SUS Digital" aparece **0 vez** | Seção 4.7 |
| Objetivo geral / 3 específicos | Existem; verbos múltiplos por objetivo | Seção 5.3 |
| **Proposta de valor: 9 subitens** | Fragmentos em "Potencial de inovação" e "Impacto". **Faltam:** beneficiários, demanda, complexidade, SUS/Saúde Suplementar, Governo Digital | Seção 4 |
| Material e método | Existe (827 palavras); sem arcabouço nomeado, instrumentos nem indicadores | Seção 5.4 |
| Aspectos éticos | Existe (118); genérico; **0 menção a LGPD** | Seção 5.7 |
| **Tipo de estudo científico** | **Ausente** | Seção 5.4 |
| **Governança de dados** | **Ausente** | Seção 5.7 |
| **Método de análise dos resultados** | **Ausente** como seção | Seção 5.4 |
| Limitações **e mitigação** | Existe (111); sem mitigação | Incluir par "limitação → mitigação" |
| **Cronograma (tabela de 24 meses)** | **Ausente** (só no arquivo histórico, em outro formato). **0 menção a "cronograma"** | Seção 5.6 |
| **Infraestrutura, parcerias, viabilidade** | **Ausente** | Seção 5.6 |
| **Tipo de produto planejado** (marcar 1 e justificar) | **Ausente** | Seção 5.5 |
| Referências ABNT 6023/10520; só as citadas | Fora do padrão | Seção 5.8 |
| "Sumário executivo" e "Impacto" como seções próprias | Não existem no DOCX | Redistribuir o conteúdo e descartar |

Observação sobre a fonte da estrutura: os documentos do repositório conferiram o modelo pela **página web**, que lista 16 itens (incluindo "Sumário executivo"). O **DOCX** publicado em setembro de 2026 tem a estrutura acima. O edital manda usar "o modelo disponível" no site, e o FAQ (citado nos documentos do repositório) diz que o modelo é obrigatório. **Recomendo seguir o DOCX**, que é o arquivo editável a ser preenchido. Se a divergência o preocupar, inclua no texto o conteúdo dos dois (não há prejuízo em abordar "sumário executivo" dentro do Resumo) e pergunte ao Programa por e-mail.

---

## 4. Análise por critério pontuado

Cada critério vale 1,0. A coluna "Risco" é minha avaliação do que o rascunho entrega hoje.

| # | Critério (edital) | Onde o avaliador procura no DOCX | Hoje no rascunho | Risco |
|---|---|---|---|---|
| 1 | Justificativa, relevância, aderência à linha | Justificativa | Sólida na lógica; sem dado nacional; aderência à linha 2 só enunciada | Médio |
| 2 | Inovação/mercado e escalabilidade | Proposta de valor | Texto defensivo: promete "levantamento", não afirma diferencial | Alto |
| 3 | Viabilidade em 2 anos | Cronograma + Infraestrutura | **Nenhum dos dois existe** | **Crítico** |
| 4 | Impacto para a sociedade | Proposta de valor (beneficiários, SUS) | Mais negativas que benefícios | Alto |
| 5 | Políticas de equidade e diversidade | **Sem subitem no DOCX** | Uma frase genérica | Alto |
| 6 | ODS | Proposta de valor | ODS 3, 4, 10 sem metas | Médio |
| 7 | Transformação digital do SUS | Justificativa + Proposta de valor | **0 menção a "SUS Digital"** | Alto |

Sobre a **defesa oral** (3,0): pontua "conhecimento acerca da fundamentação teórica", clareza e a explicitação dos motivos para cursar o mestrado. Sem referencial teórico no texto, o primeiro item fica sem base.

### 4.1 Critério 1 — Justificativa, relevância e aderência (e a etapa eliminatória)

1. **Aderência institucional.** O modelo pede que a Justificativa mostre "como a finalidade prática do produto responde aos objetivos da linha de pesquisa selecionada". Hoje a linha só é nomeada. Escreva uma frase ligando o produto ao objetivo da linha 2, usando a redação da página "Linhas de pesquisa" do Programa. **Não consegui acessar essa página**, então não transcrevo o objetivo; copie-o dela.
2. **Os três docentes da etapa eliminatória.** São eles que dão o "Apto/Não Apto" quanto à aderência. O repositório tem o PDF com os 10 docentes permanentes e 12 colaboradores, mas **não registra quem você indicou nem por quê**. O FAQ (conforme os documentos do repositório) fala em até três docentes **permanentes**. Escolha pela aderência à linha 2 (educação, tecnologia educacional, telessaúde) lendo o Lattes de cada um, e escreva o texto pensando neles como leitores. Basta um "Apto" para avançar.
3. **Dado brasileiro.** O texto se apoia em uma revisão de escopo cujos estudos são em sua maioria dos EUA. Falta um parágrafo com dados nacionais. Fontes que existem (confirmei a existência por busca; **os números e a redação precisam ser lidos e conferidos por você**):
   - pesquisa **TIC Saúde** do Cetic.br (há edição 2025, publicada em 2026) e a TIC Domicílios;
   - Lei nº 14.510/2022 (telessaúde) e Resolução CFM nº 2.314/2022 (telemedicina), ambas citadas de memória e **a verificar**;
   - o Programa SUS Digital (Portaria GM/MS nº 3.232, de 01/03/2024; ver 4.7);
   - dados de conectividade e perfil populacional do cenário, se mantiver Guaraí-TO.
4. **Referencial teórico.** A Introdução não tem nenhum. Em um mestrado em tecnologias para educação em saúde, a banca espera dois ou três referenciais, ditos em poucas linhas. Opções a verificar: aprendizagem de adultos (Knowles), carga cognitiva (Sweller), aprendizagem multimídia (Mayer), prática deliberada com feedback e padrões de simulação em saúde (INACSL). Escolha os que consegue explicar de olhos fechados na defesa.
5. **Pergunta de pesquisa na Justificativa**, como o modelo pede. A pergunta atual ("Como desenvolver e avaliar…") descreve o que será feito, não o que se quer saber. Mantenha-a e acrescente a de resultado que o rascunho já tem no Resumo ("Em que medida o protótipo atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura?").
6. **Formação do candidato.** A carta diz que a formação é em Jornalismo e Medicina, mas o anteprojeto não usa isso. Uma frase na Justificativa ou no Método conecta a formação à capacidade de executar (redigir conteúdo claro e revisar acurácia biomédica). **Inclua só o que for verdadeiro e documentável.**
7. **Lacuna enunciada.** O texto repete que a lacuna "ainda precisa ser sustentada". É honesto, mas deixa o leitor sem lacuna. Estruture assim: (i) a evidência sobre treinar usuários é escassa e mista (Galvin et al., 2024); (ii) existem recursos autoguiados, como o Digital House Calls, em inglês e espanhol; (iii) **na busca exploratória realizada**, não foi localizado um simulador interativo de decisões em português, sem cadastro; (iv) a busca sistemática do projeto testará essa afirmação. A afirmação fica verdadeira e utilizável.

### 4.2 Critério 2 — Inovação, mercado e escalabilidade

O "Potencial de inovação" (115 palavras) descreve um plano de comparação e **não afirma nada de novo**. O repositório já sustenta um diferencial defensável (benchmark e matriz de tradução):
- prática ativa de **decisão** com feedback imediato, e não só vídeo ou texto;
- **português brasileiro**, linguagem simples, uso em celular;
- **sem cadastro, sem coleta de dados, sem custo** (arquitetura estática; os scripts do protótipo não têm `fetch` nem armazenamento local);
- foco em **ações seguras** (confirmar o link por um canal oficial conhecido), o que também protege de golpes;
- **adaptação local** dos cenários por serviços e cursos.

Escreva isso como afirmação, com a ressalva uma vez só. **Escalabilidade e mercado** precisam de plano concreto, não só da negação "não se presume receita": licença aberta; hospedagem estática; guia de adaptação; adotantes identificados (núcleos de telessaúde, cursos de saúde, secretarias de saúde, programas de inclusão digital). "Potencial mercadológico" se responde dizendo que o modelo é de **recurso educacional aberto**, cujo valor está no reúso e na adoção institucional. O relatório 01 traz um texto-modelo (5.1) que serve de base.

### 4.3 Critério 3 — Viabilidade em dois anos (hoje, crítico)

É o critério com **menos conteúdo** no rascunho. Ver Seção 5.6 (cronograma e infraestrutura). O argumento mais forte que o projeto tem e **não usa**: **o protótipo já existe** e foi testado por CI. Isso reduz o risco de desenvolvimento e deve aparecer como prova de conceito, redistribuindo o cronograma para fundamentação, avaliação e redação. O modelo também informa que o Programa **não tem recursos orçamentários nem bolsas**; a viabilidade tem de ser dita com custo ≈ zero (hospedagem estática, software livre).

### 4.4 Critério 4 — Impacto

A seção atual (191 palavras) abre com "o impacto pretendido é contribuir…" e depois lista o que **não** será afirmado. Inverta: comece pelo benefício e por indicadores compatíveis com o desenho sem participantes. Exemplos: requisitos atendidos; cobertura dos objetivos de aprendizagem por cenário; critérios WCAG 2.2 aplicáveis atendidos; legibilidade dos textos; tempo estimado de uso. Só depois delimite ("não se alegam efeitos sobre uso de serviços ou desfechos clínicos"). Isso é mais forte e igualmente honesto.

### 4.5 Critério 5 — Políticas de equidade e diversidade

O edital diz **"Aderências às Políticas de Equidade e Diversidade"**. O DOCX não tem subitem para isso. Dois cuidados:
1. **Crie um parágrafo identificado** ("Equidade e diversidade"), dentro de *Beneficiários* e/ou *Contribuição para o SUS*, para que o avaliador o encontre.
2. **Fale de políticas, não só de intenções.** O próprio edital reserva cotas pelas Leis Estaduais 6.914/2014 e 6.959/2015. Considere conectar o produto à **Lei Brasileira de Inclusão (Lei nº 13.146/2015)**, ao padrão **WHO/ITU de acessibilidade** que você já cita, e ao eMAG (modelo de acessibilidade do governo eletrônico). Esses números e nomes são de memória; **confira antes de citar**.

Especificidades que o rascunho não menciona e que um avaliador espera:
- o cenário "não consigo ouvir" pressupõe audição; pessoas surdas ou com perda auditiva precisam de alternativas (legendas, texto, chat, intérprete de Libras), previstas no padrão WHO/ITU;
- baixa escolaridade formal e letramento funcional: leitura assistida, áudio, imagens e ritmo próprio;
- conectividade intermitente e plano de dados limitado;
- baixa visão, leitor de tela, alvos de toque.

Faça um parágrafo que ligue cada grupo a uma resposta concreta de desenho. O protótipo já tem controles de contraste, tamanho de texto e paletas; **cite-os**, deixando claro que a auditoria manual ainda está inconclusiva.

### 4.6 Critério 6 — ODS

Cite metas, com uma frase de mecanismo por ODS. Candidatas, **a conferir no texto oficial (ONU/IPEA)**:
- **ODS 3, meta 3.8** (cobertura universal de saúde): encaixe natural;
- **ODS 10, meta 10.2** (inclusão de todos): encaixe natural;
- **ODS 4, meta 4.4** (habilidades relevantes de jovens e adultos): fala em emprego e empreendedorismo; defenda o encaixe por "habilidades digitais de adultos" ou considere dar a ODS 4 menos peso;
- ODS 9, meta 9.c (acesso às TIC) é voltada aos países menos desenvolvidos; só cite se conseguir defender.

Duas metas bem defendidas valem mais que quatro soltas.

### 4.7 Critério 7 — Transformação digital do SUS e Governo Digital

1. **Cite o Programa SUS Digital pelo nome.** Confirmei que existe a Portaria GM/MS nº 3.232, de 01/03/2024 (o arquivo aparece em portais oficiais de legislação), e que estados e municípios já podem aderir. **Leia o texto da portaria** e indique **quais objetivos** o projeto atende e por qual mecanismo (educação e cultura digital, redução de iniquidades), sem alegar integração tecnológica. Outro nome a conferir: Estratégia de Saúde Digital para o Brasil 2020–2028.
2. **Estratégia Nacional de Governo Digital.** O modelo usa esse nome. Confirmei por busca que o **Decreto nº 12.198, de 24/09/2024**, institui a **Estratégia Federal de Governo Digital 2024–2027**. O nome difere do modelo; confira o decreto, escolha os eixos que realmente se aplicam e **cite com o nome oficial**, mencionando que o modelo se refere a ela como "Estratégia Nacional".

### 4.8 Aviso sobre o tom

Mediu-se, com uma busca simples e restrita a poucas construções ("não presume", "não será", "não comprova", "não substitui" etc.), **ao menos 17 ocorrências** no rascunho. O número real é maior. O sentido é correto, mas o efeito cumulativo é de projeto sem convicção. A regra prática: **uma** seção de Limitações (com mitigação) concentra as ressalvas; nas demais escreva afirmativamente e repita a ressalva só quando ela for essencial para a precisão.

---

## 5. Recomendações por seção do texto

### 5.1 Título e consistência

O título aparece em **quatro versões**:
- README: "Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital";
- anteprojeto: "…desenvolvimento de um simulador educativo para adultos com baixa familiaridade digital";
- carta: "…desenvolvimento **e avaliação** de um simulador educativo…";
- análise do edital: "…simulador educativo **web** para praticar etapas básicas de uma teleconsulta **fictícia** por adultos…".

Escolha **uma**, use-a no DOCX, na carta e na defesa. Sugestão de critério: o título deve descrever o que de fato será feito e avaliado; "e avaliação" é coerente com o objetivo geral.

### 5.2 Resumo, Abstract e palavras-chave

- Remova do Resumo a frase "Esta formulação é complementar… deve ser harmonizada com a orientação acadêmica".
- Inclua a pergunta **também no Abstract** (hoje só no Resumo).
- Mova as palavras-chave para logo abaixo de cada resumo. Hoje estão no fim da Seção 15, rotuladas "provisórias… não tratar como descritores validados".
- A lista atual (Telemedicina; Educação em Saúde; Letramento em Saúde; Treinamento por Simulação) é razoável; **confirme no DeCS/MeSH**. Considere "Consulta Remota" (*Remote Consultation* no MeSH), que é o termo mais próximo de "teleconsulta".
- Uniformize o inglês ("practising" é britânico; o restante é americano) e use um termo único (*teleconsultation* ou *telehealth consultation*).
- **Sem citações no Resumo** (exigência do modelo). O rascunho atual cumpre isso.

### 5.3 Objetivos

O objetivo geral é uma frase, o que atende ao modelo. Os três específicos, porém, juntam vários verbos cada. Sugestão de versão final (um verbo principal por objetivo, ligado a um produto verificável e a uma fase do cronograma):

> **Objetivo geral.** Desenvolver e avaliar, por inspeção técnica, pedagógica e de acessibilidade, um simulador educativo web em português para a prática, em cenários fictícios, de etapas básicas de uma teleconsulta por adultos com baixa familiaridade digital.
>
> 1. **Mapear** as evidências e os recursos existentes sobre preparação de usuários para teleconsulta, para derivar requisitos rastreáveis (produto: matriz de evidências e requisitos).
> 2. **Desenvolver** o simulador a partir desses requisitos (produto: protótipo documentado e matriz de rastreabilidade).
> 3. **Avaliar** o simulador quanto ao atendimento aos requisitos, à acessibilidade e à qualidade pedagógica, e registrar limitações e recomendações (produto: relatório de inspeção).

Se a Camada 1 (Seção 5.4) for mantida, acrescente "e, se aprovada pelo CEP, validar…" ao objetivo 3 **ou** a um quarto objetivo (o modelo diz "preferencialmente três").

### 5.4 Material e método, tipo de estudo e método de análise

1. **Nomeie o arcabouço.** "Pesquisa tecnológica aplicada, exploratória" é um rótulo genérico. **Design Science Research** (Hevner et al., 2004; Peffers et al., 2007: **conferir**) permite mapear suas quatro fases às atividades de identificação do problema, objetivos da solução, projeto e desenvolvimento, demonstração, avaliação e comunicação. Alternativa: ADDIE.
2. **Tipo de estudo científico** (seção exigida): classifique e justifique, por exemplo como pesquisa aplicada de desenvolvimento tecnológico com avaliação de tecnologia, distinta de estudo observacional ou experimental.
3. **Métodos de inspeção, com nome e referencial.** A Fase 3 lista o que será testado (teclado, foco, contraste, zoom), mas não "como" nem "com que referencial". Cite: WCAG 2.2 nível AA como critério; WCAG-EM para o método de avaliação; avaliação heurística (Nielsen) e percurso cognitivo para usabilidade sem usuários; índice de legibilidade para o português; rubrica pedagógica explícita. Ferramentas automáticas (axe-core) como apoio, não como prova.
4. **Método de análise dos resultados** (seção exigida): critérios e indicadores (conformidade por critério WCAG; cobertura de requisitos e objetivos; número e gravidade de defeitos; legibilidade).
5. **Definição provisória de "baixa familiaridade digital".** O texto adia a definição à orientação. Em seleção, a autonomia conta. Proponha uma definição revisável baseada em desempenho e necessidade de apoio, e não em idade ou escolaridade (o texto já rejeita esses proxies). Exemplo: adultos que relatam precisar de ajuda para realizar sozinhos tarefas digitais básicas, como abrir um link, usar áudio e vídeo ou localizar controles na tela.
6. **Independência da avaliação.** A rubrica pedagógica aplicada pelo autor do produto pode ser questionada. Preveja ao menos um inspetor independente (docente, profissional de educação em saúde ou acessibilidade) para parte das inspeções. Se as respostas dessa pessoa forem analisadas como dados da pesquisa, confirme o enquadramento com o CEP.
7. **A etapa com pessoas ("só se a orientação pedir").** É prudente, mas lida pela banca parece falta de decisão, e o ponto mais vulnerável do projeto é justamente avaliar um produto para um público sem ouvir esse público. Reformule como **plano em duas camadas**:
   - **Camada 0 (base garantida):** inspeção sem participantes.
   - **Camada 1 (planejada, com janela no cronograma, condicionada à aprovação do CEP):** validação de conteúdo por juízes especialistas e/ou teste de usabilidade com poucas pessoas.
   - A Camada 0 já é o plano alternativo.

### 5.5 Tipo de produto (escolha obrigatória)

O modelo exige marcar uma opção e justificá-la: artigo científico (Q1/Q2), produto técnico (T1/T2) ou produto tecnológico (T1/T2). Para um simulador web, **produto tecnológico** é a escolha coerente, e um artigo em periódico Q1/Q2 em 24 meses fica frágil sem etapa empírica com usuários. A classificação T1/T2 depende do documento norteador da CAPES, que **não consegui consultar**; confira os critérios antes de marcar. Uma justificativa curta, a ser ajustada:

> Marca-se **Produto Tecnológico**. O principal produto do trabalho é um software educativo (simulador web) com documentação de requisitos, de inspeção e de adaptação, de uso aberto e passível de reutilização por serviços e cursos de saúde. [Inserir enquadramento no estrato T1 ou T2 conforme os critérios vigentes da CAPES.] Um artigo científico poderá ser derivado dos resultados, mas não é o produto principal.

### 5.6 Cronograma, infraestrutura e viabilidade

1. **Cronograma.** Preencha a tabela do DOCX (24 meses, "X" por mês, nas linhas do modelo). O relatório 01 (5.3) traz uma proposta que serve de base. Três ajustes:
   - **Qualificação.** O texto da declaração do repositório afirma que a Deliberação exige qualificação em até 12 meses e defesa em até 24 (**confira na Deliberação**). Se isso se confirmar, a tabela precisa mostrar a qualificação. Como as linhas do modelo são fixas, registre-a numa nota abaixo da tabela e organize as atividades para que haja produto qualificável até o mês 12.
   - **CEP.** O relatório 01 coloca a submissão ao CEP nos meses 4 a 9, "após a matrícula". Se a Camada 1 depender da aprovação, a janela de "Coleta/produção de dados" não pode começar antes do parecer. **Confirme com o Programa** quando a submissão ao CEP é possível.
   - **Prova de conceito.** Declare que o protótipo inicial já existe, o que justifica concentrar o desenvolvimento e liberar tempo para fundamentação, avaliação e redação.
2. **Infraestrutura.** Descreva (i) o que existe: computador, navegador, hospedagem estática gratuita, repositório e CI; (ii) parcerias: **nenhuma formalizada**, e Guaraí-TO como cenário potencial; (iii) riscos de recursos: o Programa não tem recursos nem bolsas; (iv) mitigação: tecnologia livre e gratuita, escopo sem integração com sistemas. O modelo cita expressamente "riscos para execução em relação aos recursos necessários".
3. **Presencialidade.** O curso é exclusivamente a distância, mas há **atividades presenciais obrigatórias** (Simpósio Inaugural). Registre-as na viabilidade.

### 5.7 Ética e governança de dados

Separe **o produto** da **pesquisa**:
- **Produto:** sem login, sem coleta, sem transmissão, sem armazenamento persistente, conteúdo fictício, sem aparência de serviço oficial. Isso é a LGPD pela minimização (Lei nº 13.709/2018).
- **Pesquisa (Camada 0):** dados documentais (referências, registros de busca, relatórios de inspeção), sem informação pessoal.
- **Pesquisa (Camada 1, se houver):** apreciação do sistema CEP/CONEP, sob as Resoluções CNS nº 466/2012 e nº 510/2016 (**conferir**), antes de qualquer recrutamento; consentimento; voluntariedade; anonimização; retenção e descarte.

O relatório 01 (5.4 e 5.5) traz textos-modelo adequados. Atenção a um ponto do DOCX: a ideia de "número do parecer do CEP" vem da página web e **não está no DOCX**.

### 5.8 Referências e citações

Este é um defeito **objetivo** do rascunho e simples de corrigir.

| Problema | Evidência | Correção |
|---|---|---|
| Não está em ordem alfabética (o modelo pede alfabética no sistema autor-data) | Ordem atual: Galvin, Yang, WHO/ITU, WHO, WHO/ITU, W3C, Norman | Reordenar |
| É uma **bibliografia comentada**, não lista de referências | Cada entrada tem um parágrafo de resumo | Mover os comentários para o corpo do texto |
| Documentos online sem "**Acesso em:**" | O modelo exige "Disponível em… Acesso em: dia mês ano". Nenhuma entrada do rascunho tem "Acesso em" | Acrescentar a data |
| Fontes citadas no texto e ausentes da lista | **HHS** (Seção 13) e **Digital House Calls** (Seção 8) | Incluir ou retirar a citação |
| Fontes citadas no levantamento e ausentes | Três artigos brasileiros (RLAE, Ciência & Saúde Coletiva, Revista Bioética) | Incluir após conferir metadados |
| Cobertura estreita | 7 referências, duas revisões de escopo | Ampliar para 15–25 citadas (sugestão de composição no relatório 01, I1) |
| Metadados não conferidos | O levantamento lista autores de Yang et al. de dois jeitos (com e sem "Bao X") | Conferir autores, páginas e DOI no site da revista |

Confirmei apenas que o artigo de Galvin et al. (JMIR 2024, e57586) existe. **Não conferi** as demais referências. Metadados, normas e autores sugeridos neste relatório são **hipóteses a verificar**.

### 5.9 Carta de exposição de motivos e declaração (documentos 14 e 15 do edital)

- **Carta:** o parágrafo central está em colchetes (a motivação concreta). É o texto que mais depende de você. A defesa pontua a explicitação dos motivos para cursar o mestrado; carta e defesa devem contar a mesma história. Use só fatos verdadeiros e verificáveis. O título da carta difere do anteprojeto (5.1).
- **Declaração da Deliberação nº 13/2023:** a minuta afirma que você está ciente de pontos numéricos (mínimo de 25 créditos; qualificação em até 12 meses; defesa em até 24; comparecimento presencial ao seminário inaugural). A própria minuta manda ler a Deliberação antes de assinar. **Se não puder conferir cada número no PDF oficial**, troque a lista por uma declaração geral de ciência, para não assinar algo que não verificou. Confira também se o edital quer o PDF assinado ou só a anuência no sistema (o item 15 do edital lista o documento sem especificar formato).
- **Prova de originalidade:** o edital (Disposições gerais, item 8) permite arguir plágio ou autoplágio a qualquer momento, com desclassificação. Escreva com suas palavras, evite paráfrase colada às fontes, rode uma verificação de similaridade se puder, e esteja pronto para explicar cada afirmação na defesa. O repositório tem um documento "diretrizes para IAs"; decida conscientemente se declara apoio de ferramentas. Se o repositório for público, o texto do anteprojeto também estará público na web.

---

## 6. Plano de execução

### 6.1 Hoje, até o envio (ordem sugerida)

1. **Confirmar o prazo** (Seção 0.1). Anote o horário em que pretende enviar, com folga.
2. **Preparar os 15 documentos do edital**: diploma, histórico, Lattes, RG/CPF, foto, ficha CEPUERJ, boleto pago, etc. Confira formato e **8 MB por arquivo**.
3. **Montar o anteprojeto no DOCX oficial**, preservando os estilos e o sumário automático.
   - Cole o conteúdo nas seções do modelo (Seção 3).
   - Corrija os itens **críticos** abaixo.
4. **Críticos do texto** (cada um é rápido):
   - remover bloco de status, "[Preencher…]", rótulos de intenção, código "OE-05" e links para arquivos do repositório;
   - preencher as seções ausentes: Proposta de valor (9 subitens), Tipo de estudo, Governança, Método de análise, Infraestrutura, Tipo de produto, **Cronograma**;
   - citar **SUS Digital** e **ODS com metas**; criar o parágrafo de **equidade e diversidade**;
   - mover a pergunta para a Justificativa e as palavras-chave para os resumos;
   - **uma só versão do título**;
   - reordenar e padronizar as referências (5.8).
5. **Formatar** (Arial 12; margens 3/3/2/2 cm; justificado; espaçamento 1,5; recuo 1,25 cm), atualizar o sumário, exportar **PDF ≤ 8 MB** e abrir o PDF para conferir.
6. **Carta e declaração**: preencher, assinar, exportar.
7. **Enviar**, guardar o comprovante e conferir o status da inscrição.

Se o tempo apertar, **priorize na ordem**: (a) estar no DOCX, com todas as seções; (b) cronograma e infraestrutura; (c) SUS Digital e ODS com metas; (d) remover marcas de rascunho. O restante pode ser reforçado na defesa de 16/11.

### 6.2 Entre o envio e a defesa oral (16/11)

- **Atualizar o guia e os slides da defesa** (Apêndice A): hoje descrevem o encerramento como estático, citam 22 testes (o README cita 29), deixam em branco o nome e o slide "Por que este mestrado?", e quase não tratam dos critérios pontuados.
- Treinar respostas para: "por que não testar com usuários?", "o que é novo aqui?", "como garante qualidade pedagógica?", "e se a Secretaria não aderir?", "por que este mestrado?".
- **Não prometer na defesa o que o texto não prevê.**
- Levar o cronograma e o plano em duas camadas atualizados.
- Estudar as referências do texto; a defesa pontua fundamentação teórica.

### 6.3 Após a aprovação (com a orientação)

- Executar e registrar as buscas formais (PubMed/MEDLINE, BVS/LILACS, SciELO). As strings e o script de PubMed já existem; **nenhuma busca formal foi feita**.
- Decidir a Camada 1 e preparar o protocolo do CEP.
- Fixar o arcabouço metodológico e a definição do público.
- Retomar o protótipo e a auditoria manual (hoje inconclusiva).

---

## 7. Lista final de conferência

**Forma**
- [ ] Estrutura e títulos do DOCX oficial, sem instruções residuais
- [ ] Capa com o tipo de projeto na redação literal do edital
- [ ] Resumo e Abstract ≤ 500 palavras, equivalentes, com pergunta e 3–5 palavras-chave cada, sem citações no resumo
- [ ] Nenhum colchete, rótulo de rascunho, código interno ou link para o repositório
- [ ] Arial 12, margens, espaçamento e recuo do checklist; sumário atualizado
- [ ] PDF ≤ 8 MB, aberto e conferido

**Conteúdo**
- [ ] Pergunta na Justificativa; lacuna enunciada; dado brasileiro; referencial teórico
- [ ] Aderência à linha 2 com a redação do Programa
- [ ] Proposta de valor com os 9 subitens, de forma afirmativa
- [ ] SUS Digital citado com a portaria; ODS com metas; Governo Digital com o decreto
- [ ] Parágrafo de equidade e diversidade (políticas, grupos, respostas de desenho)
- [ ] Tipo de estudo, método de análise, governança de dados, LGPD
- [ ] Cronograma em tabela, nota sobre qualificação, coerente com a infraestrutura
- [ ] Tipo de produto marcado e justificado
- [ ] Referências alfabéticas, "Acesso em", só as citadas, ABNT

**Integridade**
- [ ] Nenhuma alegação de eficácia, aprendizagem duradoura ou desfecho clínico
- [ ] Nenhuma parceria declarada sem formalização
- [ ] Originalidade verificada
- [ ] Título, linha e tipo idênticos no anteprojeto, na carta e no sistema

---

## Apêndice A — Outras seções do repositório

Verificado nos arquivos, salvo indicação. Detalhes e linhas em `outras-secoes.md` (mesma pasta deste relatório).

### A.1 Links quebrados (alta prioridade para quem usar o repositório)
Um script que conferiu os links relativos de todos os `.md` achou **139 quebrados em 294**.
- **`README.md` da raiz: 46 links** usam `../docs/…`, que sai do repositório (exemplo na linha 3: `../docs/gestao/estado-atual-e-diretrizes-para-ias.md`). Basta remover o `../`.
- O restante vem de links entre pastas escritos como se os arquivos estivessem juntos, resíduo da reorganização por fases. Os piores: `tarefas-pessoais-e-proximos-passos.md` (16), `roadmap-historico-resumido.md` (14), `matriz-evidencias-requisitos.md` (8).
- A pasta **`docs/protótipo`** (com acento) é frágil: o zip a gravou como `prot#U00f3tipo`. Renomear para `prototipo` e corrigir os links na mesma passada.

### A.2 Prazo
Três documentos ainda dizem 29/10 (Seção 0.1). Atualize-os quando confirmar o prazo vigente.

### A.3 Guia e slides da defesa oral (`apresentacao/`)
- Descrevem o conteúdo de encerramento como estático, mas desde 21/10 há um exercício interativo (README e roadmap).
- Citam 22 testes; o README cita 29.
- Deixam em branco o nome (slide 1) e "Por que este mestrado?" (slide 12), que o edital pontua.
- As "perguntas prováveis" tratam só dos limites do protótipo; nenhuma toca ODS, SUS Digital, equidade, escalabilidade, viabilidade em 24 meses ou fundamentação teórica.
- Sugestão de ordem: problema → lacuna → proposta de valor → método e viabilidade (cronograma) → impacto, equidade, ODS, SUS Digital → limites. Leve contraste e CI para anexos.
- Mantenha a ressalva de que a escala 1–5 não mede aprendizagem.

### A.4 Documentação em excesso e inconsistente
- Cinco documentos grandes em `docs/gestao/` (54 KB, 43 KB, 37 KB, 28 KB, 15 KB) repetem o mesmo estado do projeto, e é daí que vêm as contradições.
- A contagem de testes varia entre 15, 16, 17, 22, 26, 27 e 29 conforme o documento; `roadmap.md` tem itens contraditórios sobre o encerramento (linha 120 diz implementado; linhas 240, 249 e 287 dizem pendente).
- Há dois anteprojetos (`anteprojeto-base.md` e `anteprojeto-modelo-uerj.md`) e um arquivo chamado `criterios-edital-e-cinco-temas.md` que é só um redirecionamento (o conteúdo está em `…-seis-temas.md`).
- **Sugestões:** definir uma **fonte única** por assunto; manter o "último CI" só no README; arquivar o que é histórico em `docs/_arquivo/`; reduzir `estado-atual-e-diretrizes-para-ias.md` a uma ou duas páginas. Quando o anteprojeto final existir, guardar o `.docx`, o `.pdf` e um registro de mudanças em uma pasta dedicada (`docs/anteprojeto/final/`).

### A.5 Auditoria manual `AUD-MAN-2026-10-21-01`
Já declarada **inconclusiva** no próprio registro, e corretamente. Os 59 casos estão marcados "C" com as 59 evidências vazias, só o perfil mouse/trackpad foi usado, o `viewport` está vazio e o commit do formulário difere do commit do CI citado. **Não cite essa auditoria como concluída** no texto nem na defesa; fale em "auditoria automatizada e rodada manual inicial, com reteste planejado".

### A.6 Buscas bibliográficas
Nenhuma busca formal foi executada (PubMed, BVS/LILACS e SciELO constam como "pendente / nenhuma gerada"). O levantamento de 24/10 é exploratório e diz isso. Por isso o texto deve limitar a lacuna à "busca exploratória realizada".

### A.7 Protótipo, testes e CI (inspeção leve)
- `node --check` passou em `app.js`, `check-prototype.mjs` e `buscar-pubmed.mjs`.
- `app.js` e `index.html` não têm `fetch`, `XMLHttpRequest`, `localStorage` nem URLs externas, coerente com "sem coleta".
- `check:syntax` no `package.json` não cobre `scripts/check-prototype.mjs`.
- **Não rodei** `npm ci` nem os testes Playwright, e não confirmei a contagem de 29 testes. Não verifiquei online as versões das ações do workflow (`@v7`).

---

## Limites deste relatório

- **Não consegui acessar o site do Programa** (bloqueio de rede do meu ambiente). Prazo vigente, texto da página "Linhas de pesquisa", FAQ e eventuais retificações do edital estão **sem conferência**.
- Li o DOCX e o PDF do edital do repositório por inteiro. **Não li por inteiro** os documentos de gestão (`estado-atual…`, `roadmap`, `tarefas-pessoais`, `tutorial-execucao-pendencias`), usando busca e trechos.
- Busquei online apenas para confirmar a **existência** de: Decreto nº 12.198/2024, Portaria GM/MS nº 3.232/2024, a edição 2025 da TIC Saúde e o artigo de Galvin et al. (2024). **Não li** o conteúdo desses documentos.
- Leis, resoluções, metas de ODS, referenciais teóricos e métodos citados de memória estão marcados "a verificar" e devem ser conferidos antes de entrar no texto.
- As contagens de palavras vêm de script sobre o Markdown e são aproximadas.


---

## 8. Acompanhamento das recomendações — 30/10/2026

Após a análise, foram implementadas melhorias no repositório:

1. **Links e navegação:** o README da raiz foi refeito com caminhos a partir da raiz do repositório; os diretórios de documentação receberam índices e a correção global de links está sendo registrada no acompanhamento técnico.
2. **Organização por fase:** os materiais oficiais da seleção foram movidos para anteprojeto/seleção/fontes-oficiais; o material de defesa foi movido para docs/defesa; a pasta docs/protótipo foi renomeada para docs/prototipo, sem acento.
3. **Arquivo histórico:** versões acumuladas do estado, roadmap e tarefas foram preservadas em docs/_arquivo/gestao; versões anteriores do anteprojeto e comparações de temas foram preservadas em docs/_arquivo/anteprojeto.
4. **Gestão:** o estado atual, roadmap e próximas ações foram reescritos em versões curtas, com uma fonte principal por assunto. Os documentos extensos antigos continuam acessíveis no arquivo.
5. **Defesa:** o guia Markdown foi refeito para incluir proposta de valor, fundamentação, método, viabilidade, impacto, equidade, ODS, SUS Digital e os limites da avaliação. O ODP antigo foi preservado sem edição, sinalizado como versão anterior não pronta para uso.
6. **Anteprojeto:** o rascunho foi harmonizado com um título de trabalho único; a pergunta de pesquisa foi retirada da frase de bastidor no resumo, incluída no Abstract e posicionada também na Justificativa; as palavras-chave foram aproximadas dos resumos e o inglês foi uniformizado para a variante americana. Os descritores permanecem provisórios até conferência no DeCS/MeSH.

**Pendências não resolvidas por automação:** preencher e revisar o DOCX oficial; confirmar método, tipo de produto, cronograma e critérios com a orientação; verificar leis, metas, documentos do SUS Digital/Governo Digital e referências; personalizar a carta e a motivação para a defesa; escolher docentes conforme a regra vigente; atualizar o ODP no editor de apresentações. Não foram inventados dados pessoais, resultados de busca ou decisões acadêmicas.

<!-- END ORIGINAL FILE: relatorios/relatorio02.md -->

---

<!-- BEGIN ORIGINAL FILE: relatorios/relatorio02-outras-secoes.md -->

<a id="arquivo-3"></a>

## 3. relatorio02-outras-secoes.md

- Caminho original: `relatorios/relatorio02-outras-secoes.md`
- Blob SHA original: `81f4d9a627579deb0d5f98d26964f7b168f9f7d1`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

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

<!-- END ORIGINAL FILE: relatorios/relatorio02-outras-secoes.md -->

---

<!-- BEGIN ORIGINAL FILE: relatorios/relatorio03.md -->

<a id="arquivo-4"></a>

## 4. relatorio03.md

- Caminho original: `relatorios/relatorio03.md`
- Blob SHA original: `fe0e5a7db07833806d3967e889fa2faebdfa4325`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

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

<!-- END ORIGINAL FILE: relatorios/relatorio03.md -->

---

<!-- BEGIN ORIGINAL FILE: relatorios/relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md -->

<a id="arquivo-5"></a>

## 5. relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md

- Caminho original: `relatorios/relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md`
- Blob SHA original: `a10e7176a57b4ba6a2b64b1a25f27d2575f1a0ff`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

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


## Acompanhamento da execução — 30/10/2026

### Executado nesta rodada

- Criado o texto-base completo na estrutura do DOCX oficial e a formulação vigente única.
- Arquivado o rascunho de 16 itens e atualizados os links de entrada.
- Criados registros de conferência do DOCX/edital, dados e normas a conferir, cronograma e modelo de levantamento de docentes.
- Atualizados documentos de seleção, decisões metodológicas, protocolo de avaliação, gestão, README, carta e declaração.
- Consolidado o mapa de citações e referências e acrescentadas respostas-base para a defesa.
- Renomeado o registro histórico de comparação de temas; `text.txt` foi preservado.

### Pendente e motivo

- WP5: fontes normativas e estatísticas permanecem com status de conferência; não foram promovidas a “conferidas” sem checagem humana dos documentos originais.
- WP8: DOCX de trabalho não criado; faltam decisões D1–D4 e nome do candidato, conforme pré-condições.
- WP11: criado apenas o modelo vazio; pesquisa dos perfis Lattes dos docentes permanentes não foi feita nesta rodada. Nenhum nome foi recomendado.
- WP12: `text.txt` não foi apagado; depende de autorização do candidato.
- WP13: validações automáticas e CI ainda precisam ser executadas em checkout local; esta integração via GitHub não executou scripts do repositório.
- O status da candidatura permanece não confirmado. Não foram alterados `produto/`, `tests/`, `scripts/`, `.github/`, fontes oficiais nem relatórios 01/02.

<!-- END ORIGINAL FILE: relatorios/relatorio03-plano-de-edicao-do-anteprojeto-2026-10-30.md -->

---

<!-- BEGIN ORIGINAL FILE: relatorios/solucao-AP-IA01-auditoria-consistencia.md -->

<a id="arquivo-6"></a>

## 6. solucao-AP-IA01-auditoria-consistencia.md

- Caminho original: `relatorios/solucao-AP-IA01-auditoria-consistencia.md`
- Blob SHA original: `adb91f13bab32862c6572367e9c94114f45201b4`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

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

<!-- END ORIGINAL FILE: relatorios/solucao-AP-IA01-auditoria-consistencia.md -->

---

<!-- BEGIN ORIGINAL FILE: relatorios/solucao-AP-IA03-revisao-referencias.md -->

<a id="arquivo-7"></a>

## 7. solucao-AP-IA03-revisao-referencias.md

- Caminho original: `relatorios/solucao-AP-IA03-revisao-referencias.md`
- Blob SHA original: `84b17f7a4b881225750db7c57299e782672e656d`
- Preservação: conteúdo integral da versão existente na branch `main` antes da remoção.

# Solução da pendência AP-IA03 — Revisão e normalização das referências do texto-base

**Data da análise:** 30/10/2026
**Pendência resolvida (rodada 1):** `docs/anteprojeto/pendencias.md` → AP-IA03 ("Revisar referências e normalização bibliográfica, apontando metadados não verificáveis")
**Destinatário:** IA que implementará as alterações no repositório
**Arquivo-base:** `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`, seção REFERÊNCIAS BIBLIOGRÁFICAS e chamadas de citação no corpo
**Relação com outras pendências:** a AP-IA02 (conferir números, incisos e trechos das fontes primárias) **não** foi executada aqui. Quando este documento cita um ponto da AP-IA02, é só para registrar a dependência.

> **Como foi feita a verificação.** Em 30/10/2026, por consulta na web a catálogos de bibliotecas, páginas das revistas e das editoras, diários oficiais e sites oficiais dos órgãos. O ambiente de execução não tinha acesso à rede para abrir cada PDF ou resolver DOIs. Por isso cada linha da seção 2 informa **o que foi confirmado e em que tipo de fonte**. Nada foi preenchido de memória.
> Os números de linha valem para os arquivos de 30/10/2026. Localize sempre pelo **texto**.

---

## 1. Regras de implementação

1. **Não marcar AP-IA03 como concluída.** Restam itens que dependem de acesso à rede ou de decisão de estilo (seção 8). Registre "rodada 1 executada" (ver seção 7).
2. **Não preencher** `Acesso em: [DATA]` por conta própria, exceto onde a seção 4 autoriza (data já registrada no repositório). A data de acesso é a do dia em que alguém **abre** o link.
3. **Manter o símbolo ▲** em toda entrada que continuar com algum metadado não confirmado. Remover só nas entradas que a seção 2 marca como "Confirmada".
4. **Manter os marcadores `[CONFIRMAR]` do corpo do texto** que dependem da AP-IA02. A seção 5 só altera os que esta rodada resolveu.
5. **Não incluir referências que não sejam citadas no texto** (regra já registrada em `docs/fundamentacao/referencias-e-busca-bibliografica.md`). A única entrada nova (Portaria SGD/MGI nº 6.618/2024) entra porque o texto passa a citá-la (edição R5).
6. As edições da seção 5 precisam ser aplicadas **na ordem indicada**, porque as letras `2024a/b/c` mudam de significado e uma troca fora de ordem gera colisão. Rode o script da seção 9 ao final.
7. Cada trecho "antigo" deve existir uma única vez. Se não for encontrado, **pare e registre**.

---

## 2. Resultado da verificação, entrada por entrada

Legenda: **Confirmada** = metadados conferidos em fonte independente; **Corrigida** = havia erro; **Parcial** = confirmada em parte; **Não verificada** = não foi possível nesta rodada.

| # | Entrada | Situação | O que foi confirmado | Fonte consultada |
|---|---|---|---|---|
| 1 | HEVNER et al., 2004 | **Confirmada** | *MIS Quarterly*, v. 28, n. 1, p. 75–105, mar. 2004; DOI 10.2307/25148625; 4 autores (Hevner, March, Park, Ram) | Página da revista no repositório da Univ. do Arizona, DBLP, PDF do artigo, índices bibliográficos |
| 2 | PEFFERS et al., 2007 | **Confirmada** | *Journal of Management Information Systems*, v. 24, n. 3, p. 45–77; DOI 10.2753/MIS0742-1222240302; 4 autores. A revista indexa como 2007; o PDF traz "Winter 2007–8" e © 2008. **Manter 2007**, que é o ano do índice da revista | Site do JMIS, Taylor & Francis (cabeçalho do PDF) |
| 3 | ISSENBERG et al., 2005 | **Confirmada** | *Medical Teacher*, v. 27, n. 1, p. 10–28; DOI 10.1080/01421590500046924; 5 autores (Issenberg, McGaghie, Petrusa, Gordon, Scalese) | PDF no CORE, PubMed (via QxMD), Taylor & Francis |
| 4 | KNOWLES; HOLTON; SWANSON, 2015 | **Confirmada** | 8. ed.; London: Routledge, 2015; ISBN 9780415739016 (capa dura) | Catálogos de bibliotecas (Doshisha, Texas A&M, Masaryk), editora |
| 5 | NIELSEN, 1993 | **Corrigida** | O local é **Boston**, não San Diego: Boston: Academic Press, 1993; xiv, 358 p. A reimpressão "updated ed." é da Morgan Kaufmann (San Francisco), com a mesma data | Catálogos de bibliotecas (ECU, outras) |
| 6 | SWELLER, 1988 | **Confirmada** | *Cognitive Science*, v. 12, n. 2, p. 257–285; DOI 10.1207/s15516709cog1202_4 | Cabeçalho do PDF, Scinapse. Alguns índices listam também o DOI 10.1016/0364-0213(88)90023-7 (editora anterior); usar o primeiro |
| 7 | W3C, 2014 (WCAG-EM 1.0) | **Confirmada**, com ressalva | Publicada em 10 jul. 2014 como W3C Working Group Note. **Ressalva:** o documento descreve a avaliação de conformidade com a **WCAG 2.0**. O texto-base a aplica à WCAG 2.2 (ver seção 8, item 4) | Anúncio oficial do W3C/WAI |
| 8 | BRASIL, 2018 (LGPD) | **Parcial** | Lei nº 13.709, de 14 ago. 2018; DOU de 15 ago. 2018, seção 1. Páginas "59–64" vêm de uma lista de referências de artigo, **sem conferência no DOU** | Referências de artigo na Rev. Latino-Am. Enfermagem; URL do Planalto citada |
| 9 | BRASIL, 2022 (Lei 14.510) | **Corrigida** | A ementa do texto-base está incompleta. Ementa oficial: "Altera a Lei nº 8.080, de 19 de setembro de 1990, para autorizar e disciplinar a prática da telessaúde em todo o território nacional, e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989, de 15 de abril de 2020." DOU de 28/12/2022, edição 244, seção 1, p. 1 | Planalto, Câmara dos Deputados (publicação original), cópia do DOU |
| 10 | BRASIL, 2024a (Portaria GM/MS 3.232) | **Confirmada** | 1º mar. 2024; DOU de 04/03/2024, edição 43, seção 1, p. 52; altera a Portaria de Consolidação GM/MS nº 5/2017 "para instituir o Programa SUS Digital"; o Programa é instituído "na forma do Anexo CVIII". URL: `https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.232-de-1-de-marco-de-2024-546278935` | Cópia do DOU, CONASS, página de legislação de telessaúde |
| 11 | BRASIL, 2024b (Decreto 12.198) | **Corrigida** | A ementa do texto-base está incompleta: o Decreto também institui a Infraestrutura Nacional de Dados. DOU de 25/09/2024, edição 186, seção 1, p. 13. A URL da Câmara usada no texto-base confere | Câmara (publicação original), Planalto, cópia do DOU |
| 12 | (ausente) Portaria SGD/MGI 6.618/2024 | **Lacuna** | O texto-base cita os **princípios** da Estratégia com a fonte Decreto. Os princípios são **estabelecidos pela Portaria SGD/MGI nº 6.618, de 25 set. 2024** (art. 1º). A Portaria não está na lista | Texto da Portaria reproduzido em base de legislação; planos de transformação digital de órgãos federais |
| 13 | BRASIL, 2012 (CNS 466) | **Corrigida** | Ementa oficial: "Aprova **as** diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos". Publicada no DOU de 13 jun. 2013, seção 1, p. 59–62 (duas fontes secundárias; o número da edição diverge entre elas e **não deve ser informado**) | Revistas SciELO (Bioética), lista de resoluções |
| 14 | BRASIL, 2016 (CNS 510) | **Corrigida** | Ementa oficial completa (ver seção 4). DOU nº 98, de 24/05/2016, seção 1, p. 44–46 | Cópia do DOU, SciELO, CEP de universidades |
| 15 | GALVIN et al., 2024; YANG et al., 2024; NORMAN; SKINNER, 2006 | **Não reverificada** | O repositório já os registra como verificados (PMID, DOI). Esta rodada não repetiu a conferência | — |
| 16 | WHO; ITU, 2022 e 2024 | **Não verificada** | O repositório os registra como verificados; URLs não abertas nesta rodada | — |
| 17 | W3C, 2024 (WCAG 2.2) | **Não verificada** | Não foi consultada. A data "12 dez. 2024" deve ser conferida na página da Recomendação (ver seção 8, item 3) | — |
| 18 | CGI.br 2026a e 2026b | **Não verificada** | URLs e títulos pertencem à AP-IA02 (números dos indicadores) | — |
| 19 | BAHIA, BRIDGINGAPPS, UNITED STATES | **Não verificada** | URLs não abertas. O repositório registra consulta em 20/10/2026 | — |

---

## 3. Achados e correções necessárias

| ID | Grav. | Achado | Ação |
|---|---|---|---|
| R1 | M | **Erro de local de publicação** em Nielsen (1993): "San Diego" deveria ser "Boston". | Corrigir na lista (seção 4). |
| R2 | M | **Ementas truncadas ou alteradas** em Lei 14.510, Decreto 12.198, CNS 466 e CNS 510. Em legislação, a ementa deve ser transcrita como na fonte oficial. | Substituir pelas ementas completas (seção 4). |
| R3 | M | **Faltam DOI e dados de periódico** em Hevner, Peffers, Issenberg e Sweller; **faltam dados do DOU** (seção, página, número) em todas as normas. | Completar (seção 4). |
| R4 | M | **Chamadas ≠ entradas da lista** (entidades): no texto aparece `CGI.BR`, `WHO; ITU` e `W3C`; na lista, o elemento de entrada é o nome por extenso (`COMITÊ GESTOR DA INTERNET NO BRASIL`, `WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION`, `WORLD WIDE WEB CONSORTIUM`). A chamada deve usar o mesmo elemento da entrada. | Edições E5 a E7. Alternativa na seção 8. |
| R5 | M | **Princípios da Estratégia citados à fonte errada.** O texto atribui ao Decreto os princípios "centrado no cidadão e inclusivo" e "confiável, seguro...". Eles são estabelecidos pela **Portaria SGD/MGI nº 6.618/2024**. | Acrescentar a Portaria à lista e ajustar o parágrafo (E3, E4). |
| R6 | M | **Letras `2024a/b/c` dependem da ordem da lista.** Com a nova entrada e a ordenação alfabética das entradas "BRASIL", as letras mudam: Decreto = 2024a; Portaria SGD/MGI = 2024b; Portaria GM/MS = 2024c. | Reordenar a lista e renumerar as chamadas (E1, E2, E3). |
| R7 | B | **Formas diferentes de chamada para o mesmo conjunto**: `(WHO; ITU, 2022; WHO; ITU, 2024)` e `(WHO; ITU, 2022; 2024)`; `(BRASIL, 2012; BRASIL, 2016)`; `(W3C, 2014; W3C, 2024)`. Para mesma autoria e anos diferentes, usar `(AUTOR, ano, ano)`. | E5 a E8. |
| R8 | B | **Uso inconsistente de "et al." na lista.** Galvin (6 autores), Hevner (4) e Peffers (4) estão com todos os autores; Issenberg e Yang usam "et al.". A norma admite as duas formas, mas a lista deve ser uniforme. As chamadas já usam "et al." para 4 ou mais autores. | Uniformizar com "primeiro autor + et al." (seção 4). Conferir na NBR 6023:2018. |
| R9 | B | **Cabeçalho da seção cita "Apêndice B3"**, que não existe no DOCX e que o critério de aceite do relatório 03 proíbe (nenhuma remissão ao repositório no corpo). | E9. |
| R10 | M | **Afirmação sobre Issenberg et al. (2005) está imprecisa** (`[CONFIRMAR a formulação]`). A revisão informa que o feedback foi a característica **mais citada** nos 109 estudos que a sustentam (51 artigos, 47%) como a mais importante. Não afirma que o feedback seja o elemento "mais associado à aprendizagem efetiva". Além disso, a revisão trata de simulações médicas de **alta fidelidade**; a transferência para um simulador web é inferência de design. | E10. |
| R11 | B | **Seção B3 duplicada** em `docs/fundamentacao/referencias-e-busca-bibliografica.md` (linhas 175–202 e 204–230, conteúdo idêntico) e **desatualizada** (marca Hevner, Peffers, Knowles, Sweller, Issenberg e Nielsen como "metadados de memória; conferir"). | Seção 6. |
| R12 | M | **Pista para a AP-IA02 e a revisão ética** (não verificada): uma página de legislação de um CEP lista o "Ofício Circular nº 17/2022/CONEP/SECNS/MS — Orientações acerca do artigo 1º da Resolução CNS nº 510/2016". O texto-base ainda tem `[CONFIRMAR o inciso]` sobre esse artigo. Conferir o conteúdo do ofício antes de afirmar o enquadramento. | Registrar no relatório de evidência; **não** alterar o texto. |
| R13 | B | **Artigos citados "art. 8º" e "art. 2º" da Portaria 3.232** pertencem ao **Anexo CVIII**, e não ao corpo da Portaria (o corpo tem 4 artigos e institui o Programa "na forma do Anexo CVIII"). | Na AP-IA02, conferir a numeração e, se confirmada, citar como `Anexo CVIII, art. 8º`. Não alterar agora. |

---

## 4. Lista de referências proposta (substitui a seção REFERÊNCIAS BIBLIOGRÁFICAS)

Ordenação alfabética pelo elemento de entrada. Para as entradas "BRASIL", a ordem é pelo texto que segue "BRASIL." (Conselho…, Decreto…, Lei 13.709, Lei 14.510, Ministério da Gestão…, Ministério da Saúde…). **A regra de ordenação das entradas de uma mesma jurisdição deve ser conferida na NBR 6023:2018**, que não foi consultada. Se a regra for outra, ajuste a ordem e recalcule as letras.

Manter a frase introdutória, com a edição E9. `Acesso em: [DATA]` permanece onde está; a nota de cada entrada diz quando já há data registrada.

```
BAHIA. Secretaria da Saúde. Telessaúde Bahia. *Como acessar sua teleconsulta: tutorial do paciente*. Salvador: SESAB, [s.d.]. Disponível em: https://telessaude.saude.ba.gov.br/25181-2/. Acesso em: [DATA].

BRASIL. Conselho Nacional de Saúde. Resolução nº 466, de 12 de dezembro de 2012. Aprova as diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. *Diário Oficial da União*: seção 1, Brasília, DF, p. 59-62, 13 jun. 2013. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Conselho Nacional de Saúde. Resolução nº 510, de 7 de abril de 2016. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais cujos procedimentos metodológicos envolvam a utilização de dados diretamente obtidos com os participantes ou de informações identificáveis ou que possam acarretar riscos maiores do que os existentes na vida cotidiana, na forma definida nesta Resolução. *Diário Oficial da União*: seção 1, Brasília, DF, n. 98, p. 44-46, 24 maio 2016. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Decreto nº 12.198, de 24 de setembro de 2024. Institui a Estratégia Federal de Governo Digital para o período de 2024 a 2027 e a Infraestrutura Nacional de Dados, no âmbito dos órgãos e das entidades da administração pública federal direta, autárquica e fundacional. *Diário Oficial da União*: seção 1, Brasília, DF, n. 186, p. 13, 25 set. 2024. Disponível em: https://www2.camara.leg.br/legin/fed/decret/2024/decreto-12198-24-setembro-2024-796286-publicacaooriginal-173095-pe.html. Acesso em: [DATA].

BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD). *Diário Oficial da União*: seção 1, Brasília, DF, p. 59-64, 15 ago. 2018. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm. Acesso em: [DATA]. ▲

BRASIL. Lei nº 14.510, de 27 de dezembro de 2022. Altera a Lei nº 8.080, de 19 de setembro de 1990, para autorizar e disciplinar a prática da telessaúde em todo o território nacional, e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989, de 15 de abril de 2020. *Diário Oficial da União*: seção 1, Brasília, DF, n. 244, p. 1, 28 dez. 2022. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14510.htm. Acesso em: [DATA].

BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. Secretaria de Governo Digital. Portaria SGD/MGI nº 6.618, de 25 de setembro de 2024. Estabelece princípios, objetivos e iniciativas da Estratégia Federal de Governo Digital para 2024-2027 na administração pública federal. *Diário Oficial da União*: seção 1, Brasília, DF, [n., p. e data de publicação a CONFIRMAR]. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Ministério da Saúde. Portaria GM/MS nº 3.232, de 1º de março de 2024. Altera a Portaria de Consolidação GM/MS nº 5, de 28 de setembro de 2017, para instituir o Programa SUS Digital. *Diário Oficial da União*: seção 1, Brasília, DF, n. 43, p. 52, 4 mar. 2024. Disponível em: https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.232-de-1-de-marco-de-2024-546278935. Acesso em: [DATA].

BRIDGINGAPPS. *Digital House Calls*: curso autoguiado. [S. l.]: BridgingApps, [s.d.]. Disponível em: https://bridgingapps.org/courses-landing/. Acesso em: [DATA].

COMITÊ GESTOR DA INTERNET NO BRASIL. Núcleo de Informação e Coordenação do Ponto BR. *TIC Saúde 2025*: resumo executivo. São Paulo: CGI.br, 2026a. Disponível em: https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260512115440/TIC_SAUDE_2025_PT_resumoexecutivo.pdf. Acesso em: [DATA]. ▲

COMITÊ GESTOR DA INTERNET NO BRASIL. Núcleo de Informação e Coordenação do Ponto BR. *TIC Domicílios 2025*: resumo executivo. São Paulo: CGI.br, 2026b. Disponível em: https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260511173151/tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: [DATA]. ▲

GALVIN, E. et al. Training service users in the use of telehealth: scoping review. *Journal of Medical Internet Research*, v. 26, e57586, 2024. DOI: 10.2196/57586.

HEVNER, A. R. et al. Design science in information systems research. *MIS Quarterly*, v. 28, n. 1, p. 75-105, mar. 2004. DOI: 10.2307/25148625.

ISSENBERG, S. B. et al. Features and uses of high-fidelity medical simulations that lead to effective learning: a BEME systematic review. *Medical Teacher*, v. 27, n. 1, p. 10-28, 2005. DOI: 10.1080/01421590500046924.

KNOWLES, M. S.; HOLTON III, E. F.; SWANSON, R. A. *The adult learner*: the definitive classic in adult education and human resource development. 8. ed. London: Routledge, 2015.

NIELSEN, J. *Usability engineering*. Boston: Academic Press, 1993.

NORMAN, C. D.; SKINNER, H. A. eHealth literacy: essential skills for consumer health in a networked world. *Journal of Medical Internet Research*, v. 8, n. 2, e9, 2006. DOI: 10.2196/jmir.8.2.e9.

PEFFERS, K. et al. A design science research methodology for information systems research. *Journal of Management Information Systems*, v. 24, n. 3, p. 45-77, 2007. DOI: 10.2753/MIS0742-1222240302.

SWELLER, J. Cognitive load during problem solving: effects on learning. *Cognitive Science*, v. 12, n. 2, p. 257-285, 1988. DOI: 10.1207/s15516709cog1202_4.

UNITED STATES. Department of Health and Human Services. *Telehealth.HHS.gov*: preparing patients for telehealth. Washington, DC: HHS, [s.d.]. Disponível em: https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth. Acesso em: [DATA].

WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION. *WHO-ITU global standard for accessibility of telehealth services*. Geneva: WHO, 2022. Disponível em: https://www.who.int/publications/i/item/9789240050464. Acesso em: [DATA].

WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION. *Implementation toolkit for accessible telehealth services*. Geneva: WHO; ITU, 2024. Disponível em: https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities. Acesso em: [DATA].

WORLD WIDE WEB CONSORTIUM. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 dez. 2024. Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: [DATA].

WORLD WIDE WEB CONSORTIUM. *Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0*. W3C Working Group Note, 10 jul. 2014. Disponível em: https://www.w3.org/TR/WCAG-EM/. Acesso em: [DATA].

YANG, Y. et al. Improving the eHealth literacy of older adults: a scoping review. *Geriatric Nursing*, v. 60, p. 128-136, 2024. DOI: 10.1016/j.gerinurse.2024.07.028.
```

**Observações sobre a lista:**
- Os dois blocos de BRASIL em que a URL é `[URL oficial]` (CNS 466 e 510) e a Portaria SGD/MGI não tiveram URL confirmada. Páginas de terceiros citam `http://conselho.saude.gov.br/resolucoes/2016/Reso510.pdf` (CNS 510) e `https://bvsms.saude.gov.br/bvs/saudelegis/cns/2013/res0466_12_12_2012.html` (CNS 466). **Use-as somente depois de abrir e confirmar.**
- **Data de acesso já registrada no repositório:** `docs/fundamentacao/referencias-e-busca-bibliografica.md` informa "Páginas consultadas em 20/10/2026" para BridgingApps, HHS e Telessaúde Bahia. Se `docs/fundamentacao/benchmark-recursos-existentes.md` confirmar a data **por URL**, preencher `Acesso em: 20 out. 2026` nessas três entradas. Se não confirmar, manter `[DATA]`.
- As entradas de Galvin, Hevner e Peffers passam de "todos os autores" para "primeiro autor + et al." (R8). Isso não altera as chamadas.
- Removidos os ▲ de Hevner, Peffers, Issenberg, Knowles, Nielsen, Sweller, W3C 2014, Lei 14.510, Decreto 12.198 e Portaria GM/MS 3.232. Mantidos em: CNS 466 e 510 (URL e páginas só de fonte secundária), LGPD (páginas), Portaria SGD/MGI (dados do DOU), CGI.br (AP-IA02).

---

## 5. Edições no corpo do texto (aplicar na ordem)

Todas em `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`.

**Renumeração das letras de 2024 (R6).** Aplicar **nesta ordem** para evitar colisão: E1, E2, E3.

- **E1 — Portaria GM/MS: `2024a` → `2024c`.** Três ocorrências (Introdução e duas na seção "Relevância e magnitude"):
  - `(BRASIL, 2024a)` → `(BRASIL, 2024c)` (Introdução, depois de "cultura da saúde digital")
  - `(BRASIL, 2024a, art. 8º)` → `(BRASIL, 2024c, art. 8º)`
  - `(BRASIL, 2024a, art. 2º)` → `(BRASIL, 2024c, art. 2º)`
- **E2 — Decreto: `2024b` → `2024a`.** Uma ocorrência, no parágrafo da Estratégia de Governo Digital:
  - Antigo: `instituída pelo Decreto nº 12.198/2024 (BRASIL, 2024b).`
  - Novo: `instituída pelo Decreto nº 12.198/2024 (BRASIL, 2024a).`
- **E3 — Princípios pela Portaria SGD/MGI (R5), mesma passagem:**
  - Antigo: `Entre seus princípios estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no Decreto e no ato que a detalha, Portaria SGD/MGI nº 6.618/2024].`
  - Novo: `Os princípios da Estratégia foram estabelecidos pela Portaria SGD/MGI nº 6.618/2024 (BRASIL, 2024b); entre eles estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no art. 1º da Portaria SGD/MGI nº 6.618/2024].`
  - O que sustenta a mudança: o texto da Portaria, consultado nesta rodada, diz que ela estabelece os princípios a serem observados pela Estratégia (art. 1º). A **redação exata** dos dois princípios entre aspas **não foi conferida** e continua sob `[CONFIRMAR]` (AP-IA02).
- **E4 — Marcador `[CONFIRMAR]` do Decreto:** já incorporado em E3. Nenhuma outra alteração.

**Chamadas de entidades (R4, R7). Aplicar uma vez por ocorrência; conferir as contagens:**

- **E5 — CGI.br.** Substituir `CGI.BR, 2026a` por `COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a` (3 ocorrências) e `CGI.BR, 2026b` por `COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b` (4 ocorrências).
- **E6 — OMS/UIT.** Duas formas, uma ocorrência cada:
  - `(WHO; ITU, 2022; WHO; ITU, 2024)` → `(WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION, 2022, 2024)` (Introdução)
  - `(WHO; ITU, 2022; 2024)` → `(WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION, 2022, 2024)` (seção "Equidade e diversidade")
- **E7 — W3C.** `(W3C, 2014; W3C, 2024)` → `(WORLD WIDE WEB CONSORTIUM, 2014, 2024)` (Método, Etapa 4, Camada 0).
- **E8 — BRASIL (Resoluções).** `(BRASIL, 2012; BRASIL, 2016)` → `(BRASIL, 2012, 2016)` (Aspectos Éticos).

Se o Programa ou a orientação preferirem chamadas por sigla, **não aplicar E5–E7** e use a alternativa da seção 8, item 5.

**Cabeçalho da seção de referências (R9):**
- **E9** — Antigo: `Entradas marcadas com ▲ ainda têm metadados a conferir (Apêndice B3).` Novo: `Entradas marcadas com ▲ ainda têm metadados a conferir.`

**Afirmação sobre Issenberg et al. (R10) — Introdução, parágrafo sobre referencial de aprendizagem:**
- **E10** — Antigo: `Uma revisão sistemática de simulações médicas identificou o feedback como o elemento mais associado à aprendizagem efetiva (ISSENBERG et al., 2005) [CONFIRMAR a formulação].`
- Novo: `Uma revisão sistemática de simulações médicas de alta fidelidade apontou o feedback como a característica mais frequentemente citada nos estudos incluídos como importante para a aprendizagem (ISSENBERG et al., 2005). A transferência desse achado para um simulador web é uma inferência de design.`
- O marcador `[CONFIRMAR a formulação]` é removido porque a nova redação descreve o que a revisão relata (51 de 109 artigos, 47%). **Não acrescentar esses números ao texto** sem leitura do artigo completo.

---

## 6. Atualizações no repositório fora do texto-base

1. **`docs/fundamentacao/referencias-e-busca-bibliografica.md`.** Manter **uma só** seção "Lista consolidada do anteprojeto (v1)" (apagar o bloco duplicado das linhas 204–230) e atualizar a tabela B3 assim:

| Citação no texto | Referência | Verificação |
|---|---|---|
| (BRASIL, 2024a) | Decreto nº 12.198/2024 | **Confirmada** (DOU 25/09/2024, seção 1, p. 13; ementa corrigida). Ver 30/10/2026 |
| (BRASIL, 2024b) | Portaria SGD/MGI nº 6.618/2024 | Existência e objeto confirmados; **dados do DOU e redação dos princípios a conferir** |
| (BRASIL, 2024c) | Portaria GM/MS nº 3.232/2024 | **Confirmada** (DOU 04/03/2024, seção 1, p. 52); artigos do Anexo CVIII a conferir (AP-IA02) |
| (BRASIL, 2022) | Lei nº 14.510/2022 | **Confirmada** e ementa corrigida (DOU 28/12/2022, seção 1, p. 1) |
| (BRASIL, 2018) | Lei nº 13.709/2018 | Metadados confirmados; **páginas do DOU a conferir** |
| (BRASIL, 2012, 2016) | Res. CNS 466/2012 e 510/2016 | Ementas e datas do DOU confirmadas; **URL oficial a inserir** |
| (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a, 2026b) | TIC Saúde 2025; TIC Domicílios 2025 | Números a conferir (AP-IA02) |
| (HEVNER et al., 2004); (PEFFERS et al., 2007) | DSR | **Confirmadas** (DOI, volume, páginas) |
| (KNOWLES; HOLTON; SWANSON, 2015); (SWELLER, 1988); (NIELSEN, 1993) | Referencial de aprendizagem e usabilidade | **Confirmadas** (Nielsen corrigido: Boston) |
| (ISSENBERG et al., 2005) | Revisão BEME | **Confirmada**; formulação ajustada no texto (R10) |
| (WORLD WIDE WEB CONSORTIUM, 2014, 2024) | WCAG-EM 1.0 e WCAG 2.2 | WCAG-EM **confirmada** (ressalva: descreve a WCAG 2.0); WCAG 2.2 já "verificada no repositório" |

   As linhas de Galvin, Yang, Norman e Skinner, OMS/UIT e recursos do benchmark permanecem como estão, ajustadas apenas às novas formas de chamada.

2. **Relatório de evidência:** criar `docs/anteprojeto/registros/auditoria-referencias-2026-10-30.md` com as seções 2 e 3 deste documento e o resultado do script da seção 9. Se a AP-IA01 também criou a pasta `registros/`, usar a mesma e linkar ambos no `docs/anteprojeto/README.md`.

---

## 7. Atualização de `docs/anteprojeto/pendencias.md`

1. Manter o item AP-IA03 **desmarcado** e acrescentar ao fim: ` **Situação:** rodada 1 executada em 30/10/2026 (metadados de 12 entradas conferidos, 6 correções, 1 lacuna); relatório em registros/auditoria-referencias-2026-10-30.md. Pendentes: datas de acesso, URLs oficiais das resoluções CNS, dados do DOU da Portaria SGD/MGI, WCAG 2.2, CGI.br, OMS/UIT, recursos do benchmark.`
2. Acrescentar à tabela Histórico: `| 30/10/2026 | AP-IA03, rodada 1: verificação bibliográfica; correção de local (Nielsen), ementas (Lei 14.510, Decreto 12.198, CNS 466 e 510), DOI e dados de periódico; inclusão da Portaria SGD/MGI 6.618/2024; harmonização das chamadas. Item permanece aberto. |`
3. Atualizar o campo `**Atualização:**` do cabeçalho.
4. Se a AP-IA02 for executada depois, ela deve **reusar** a tabela B3 atualizada, e não refazê-la.

---

## 8. O que ficou em aberto (exige rede, abertura de links ou decisão)

| # | Item | Quem resolve |
|---|---|---|
| 1 | **Datas de acesso** (`Acesso em: [DATA]`) de todas as entradas online. Só preencher com a data em que o link for efetivamente aberto e conferido | Candidato ou IA com navegação |
| 2 | **URLs oficiais** das Resoluções CNS 466 e 510 e da Portaria SGD/MGI 6.618/2024; **dados do DOU** da Portaria (data, edição, página). Uma base de legislação indica 26/09/2024, sem conferência | IA com navegação |
| 3 | **WCAG 2.2:** não consultada. Conferir se "W3C Recommendation, 12 dez. 2024" é a data da versão efetivamente consultada, ou se deve constar a data da primeira Recomendação e a de atualização | IA com navegação |
| 4 | **WCAG-EM 1.0 × WCAG 2.2:** a nota descreve avaliação de conformidade com a WCAG 2.0. Acrescentar ao Método uma frase como "adaptada à WCAG 2.2" só depois de decidir como será aplicada (AP-H04) | Candidato + orientação |
| 5 | **Forma de citação das entidades:** o plano usa o nome por extenso (E5–E7). A alternativa é entrada e chamada pela sigla (`CGI.BR`, `WHO; ITU`, `W3C`), com o nome por extenso dentro da entrada. Conferir o manual de normalização do Programa ou da UERJ e a NBR 10520:2023 | Candidato + orientação |
| 6 | **Regra de ordenação** das entradas "BRASIL" e **uso de "et al."** na lista (R8): conferir na NBR 6023:2018 | Candidato (norma paga) |
| 7 | **Entradas não reverificadas:** Galvin, Yang, Norman e Skinner, OMS/UIT, Bahia, BridgingApps, HHS | IA com navegação (AP-IA02) |
| 8 | **Conteúdo do Ofício Circular nº 17/2022/CONEP/SECNS/MS** e inciso do art. 1º da Res. 510 (R12), e numeração dos artigos do Anexo CVIII (R13) | AP-IA02 |

---

## 9. Verificação após as edições

Execute na raiz do repositório e cole a saída no relatório. Todas as linhas devem ser `OK`.

```python
import re
p = "docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md"
t = open(p, encoding="utf-8").read()
corpo, refs = t.split("## REFERÊNCIAS BIBLIOGRÁFICAS")
refs = refs.split("## CHECKLIST")[0]

def check(nome, cond): print(("OK   " if cond else "FALHA"), nome)

# 1. letras 2024 e conteúdo das entradas
check("Decreto = 2024a, Portaria SGD/MGI = 2024b, Portaria GM/MS = 2024c (ordem na lista)",
      refs.index("Decreto nº 12.198") < refs.index("Portaria SGD/MGI") < refs.index("Portaria GM/MS nº 3.232"))
check("chamadas 2024a/2024b/2024c existem no corpo",
      all(f"BRASIL, 2024{x}" in corpo for x in "abc"))
check("nenhuma chamada 2024b aponta mais para o Decreto",
      "Decreto nº 12.198/2024 (BRASIL, 2024b)" not in corpo)

# 2. formas antigas de chamada eliminadas
for ruim in ("CGI.BR,", "WHO; ITU,", "W3C, 2014; W3C", "BRASIL, 2012; BRASIL"):
    check(f'forma antiga ausente: "{ruim}"', ruim not in corpo)

# 3. correções de metadados
check("Nielsen: Boston", "NIELSEN, J. *Usability engineering*. Boston" in refs)
for doi in ("10.2307/25148625", "10.2753/MIS0742-1222240302",
            "10.1080/01421590500046924", "10.1207/s15516709cog1202_4"):
    check(f"DOI presente: {doi}", doi in refs)
check("ementa da Lei 14.510 completa", "e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989" in refs)
check('sem "Apêndice B3" no texto-base', "Apêndice B3" not in t)

# 4. correspondência 1:1 (chamadas autor-ano x entradas)
entradas = [l for l in refs.split("\n") if l.strip() and l[0].isupper()]
sobrenomes = {"GALVIN","HEVNER","ISSENBERG","KNOWLES","NIELSEN","NORMAN","PEFFERS","SWELLER","YANG"}
citados = set(re.findall(r"\(([A-ZÀ-Ú]{3,})\b", corpo)) | set(re.findall(r";\s*([A-ZÀ-Ú]{3,})\b", corpo))
check("autores individuais citados têm entrada",
      all(any(e.startswith(s) for e in entradas) for s in sobrenomes if s in citados or s.title() in corpo.upper()))
check("ordem alfabética das entradas",
      [e.split(".")[0] for e in entradas] == sorted([e.split(".")[0] for e in entradas], key=lambda s: s.upper()))

# 5. pendências mantidas
print("\nMarcadores [CONFIRMAR]/[DATA] restantes:",
      len(re.findall(r"\[(?:CONFIRMAR|DATA|URL)[^\]]*\]", t)))
```

**Critérios de aceite**
- Todas as linhas em `OK` (a verificação de ordem alfabética depende da regra de ordenação das entradas "BRASIL"; se falhar só por isso, registrar e conferir na norma).
- Nenhum `[CONFIRMAR]` ligado à AP-IA02 foi removido; só foram alterados o de Issenberg (E10) e o texto do de Portaria SGD/MGI (E3).
- Nenhum `Acesso em: [DATA]` foi preenchido sem a condição da seção 4.
- B3 única e atualizada em `referencias-e-busca-bibliografica.md`; relatório de evidência criado e linkado; `pendencias.md` com AP-IA03 aberta, situação e histórico.

<!-- END ORIGINAL FILE: relatorios/solucao-AP-IA03-revisao-referencias.md -->
