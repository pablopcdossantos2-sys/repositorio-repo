# Relatório de análise do anteprojeto — *Treino de Teleconsulta*

**Objeto analisado:** o projeto escrito (anteprojeto), com foco em `docs/anteprojeto-modelo-uerj.md` (versão baseada em uma lista de 16 itens de uma página web, **não** no DOCX oficial) e, como apoio, `docs/anteprojeto-base.md`, `docs/decisoes-metodologicas.md`, `docs/produto-minimo.md`, `docs/mapa-objetivos-educativos-e-tarefas.md`, `docs/analise-edital-turma-2027-e-lacunas.md`, `docs/conferencia-modelo-e-edital-2027-2026-10-24.md`, `docs/levantamento-bibliografico-exploratorio-2026-10-24.md`, `docs/benchmark-recursos-existentes.md`, `docs/matriz-evidencias-requisitos.md`, `docs/parceria-e-etica.md`, `docs/carta-exposicao-de-motivos.md` e o `README.md`.
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
