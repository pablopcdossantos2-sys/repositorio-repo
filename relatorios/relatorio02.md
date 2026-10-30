# Relatório 02 — Análise do anteprojeto *Treino de Teleconsulta* e do repositório

**Escopo:** o projeto escrito (anteprojeto) e o que o cerca (submissão, edital, defesa). O protótipo só entra onde afeta o texto. Seções fora do anteprojeto estão no Apêndice A.
**Data da análise:** 30/10/2026, cerca de 00h50 (Brasília).
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
