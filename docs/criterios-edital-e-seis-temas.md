# Critérios do edital e registro da decisão de tema

**Status:** decisão de tema registrada em 20/10/2026; documento mantido como histórico de comparação.  
**Linha de pesquisa selecionada:** 2) Tecnologias para Educação em Saúde.  
**Tipo de projeto selecionado:** Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.  
**Formação informada pelo candidato:** graduação em Comunicação Social — Jornalismo e graduação em Medicina.

**Decisão vigente:** trabalhar exclusivamente com **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital**. A tabela e as descrições dos outros cinco temas abaixo são registro histórico da comparação, não alternativas ativas. Pergunta, método, inovação e viabilidade continuam sujeitos a validação com a orientação.
>
> **Nota sobre o nome do arquivo:** o nome contém "cinco temas" por razões históricas e é mantido para não quebrar os links do repositório. O documento contém **seis** temas.

## 1. Como usaremos os critérios do edital

Todo tema deverá ser desenvolvido e avaliado com base nos sete critérios abaixo. Eles não serão tratados como uma seção adicionada ao final: devem orientar a escolha do problema, o desenho do produto, o método, o cronograma e as conclusões.

| Critério do edital | Pergunta que o anteprojeto precisa responder | Evidência que devemos incluir |
|---|---|---|
| Justificativa, relevância e aderência à linha | Qual problema real de educação em saúde o produto aborda e por que ele se enquadra em “Tecnologias para Educação em Saúde”? | Problema delimitado, público e contexto definidos, lacuna fundamentada, objetivos e produto diretamente relacionados à educação/aprendizagem. |
| Potencial mercadológico e/ou de inovação e escalabilidade | O que o produto faz de diferente, para quem serve e como pode ser reutilizado? | Comparação com recursos existentes; contribuição inovadora explícita; plano de distribuição, manutenção e adaptação; possibilidade de uso por mais de um serviço/contexto. Como os produtos são pensados como recursos abertos, o argumento deve ser de **adoção institucional e reuso** (núcleos de telessaúde, cursos de saúde, secretarias), não de receita. |
| Viabilidade em dois anos | É possível construir, avaliar e documentar o produto no prazo de 24 meses? | Escopo mínimo, método realista, cronograma com etapas (incluindo o tempo de análise ética, se houver participantes), dependências e alternativa caso uma etapa falhe. |
| Impacto para a sociedade | Quem ganha com o produto e qual mudança imediata poderá ser observada? | Benefício público plausível e indicador avaliável, sem prometer resultados clínicos que o método não pode demonstrar. |
| Equidade e diversidade | Quem pode ficar excluído e como o produto evita criar novas barreiras? | Linguagem simples, acessibilidade desde o desenho, uso em celular, baixo consumo de dados, compatibilidade com teclado/leitor de tela, conteúdo representativo e teste inclusivo. |
| Objetivos de Desenvolvimento Sustentável (ODS) | Quais objetivos e metas se relacionam de fato ao produto? | Relação justificada com ODS 3 (Saúde e Bem-Estar), ODS 4 (Educação de Qualidade) e, quando pertinente, ODS 10 (Redução das Desigualdades) ou ODS 16 (Paz, Justiça e Instituições Eficazes). Não basta apenas listar os números. |
| Transformação digital do SUS | Como o projeto contribui para educação, cultura digital, informação segura ou redução da iniquidade no uso de tecnologia em saúde? | Relação explícita com objetivos do Programa SUS Digital, sem pressupor integração tecnológica ou parceria institucional que não existam. |

### Enquadramento com base nas fontes oficiais

O Programa SUS Digital inclui, entre seus objetivos, educação permanente em saúde digital, letramento digital, cultura de saúde digital, uso ético e crítico de tecnologias e redução de desigualdades no acesso a serviços digitais. Isso torna projetos educativos digitais plausivelmente aderentes quando o vínculo é explicado no método e no produto — não apenas mencionado no texto.

- [Portaria GM/MS nº 3.232/2024 — Programa SUS Digital](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2024/prt3232_04_03_2024.html)
- [Perguntas frequentes oficiais do Programa SUS Digital](https://webatendimento.saude.gov.br/faq/susdigital)
- [Objetivos de Desenvolvimento Sustentável — Nações Unidas](https://sdgs.un.org/goals)
- [Edital oficial — Processo seletivo da Turma 2027](https://www.telessaude.uerj.br/mestrado/edital-processo-seletivo-turma-2027/)

### Critério transversal: mínima dependência de terceiros

Além dos sete critérios do edital, os temas são comparados pelo grau de dependência de terceiros (órgãos de saúde, instituições parceiras, aprovações, fornecedores, disponibilidade de participantes).

**Constatação central:** nos seis temas, **construir o produto** depende pouco de terceiros, porque se usam cenários fictícios, fontes públicas, ausência de login, de IA em produção e de integração com sistemas. A dependência real está na **avaliação com pessoas**. Teste de usabilidade ou de compreensão com participantes, e em geral também painel de especialistas, costuma exigir apreciação ética pelo sistema CEP/CONEP. Essa submissão geralmente só é possível após a matrícula, com a orientação como responsável pela pesquisa. A Resolução CNS nº 510/2016 prevê hipóteses de dispensa (por exemplo, pesquisa que use apenas informação de domínio público ou revisão de literatura), mas teste com pessoas normalmente não se enquadra. **Confirmar com o programa e com o CEP antes de assumir qualquer dispensa.**

Por isso, todo tema deve ser planejado com **avaliação em camadas**:

- **Camada 0 — sem participantes (sustenta a dissertação sozinha):** revisão estruturada da literatura; benchmarking dos recursos existentes; matriz que liga cada elemento do produto à evidência que o sustenta; auditoria de acessibilidade automatizada e manual; verificações técnicas (como as de `scripts/check-prototype.mjs` e `tests/prototype.spec.js`); rubrica pedagógica aplicada pelo próprio pesquisador; e, quando couber, análise documental de materiais públicos.
- **Camada 1 — com participantes (complementar e condicionada):** teste pequeno de tarefas e de compreensão, submetido às aprovações aplicáveis depois da matrícula. Se atrasar ou não for autorizada, o trabalho continua defensável com a Camada 0, e as conclusões se limitam ao que foi efetivamente avaliado.

Essa estrutura também responde ao critério de viabilidade: a alternativa para o caso de uma etapa falhar já está prevista no desenho.

## 2. Como a formação do candidato pode fortalecer os temas

A combinação de **Jornalismo e Medicina** permite trabalhar dois aspectos complementares sem presumir experiência profissional específica que ainda não foi relatada:

- **Comunicação Social — Jornalismo:** apuração e avaliação de fontes, análise de autoria e evidências, distinção entre informação e publicidade, narrativa, clareza textual, comunicação pública, leitura crítica de dados e combate à desinformação.
- **Medicina:** leitura crítica de evidências clínicas, precisão científica, comunicação de risco, avaliação de informação biomédica e cuidado para não converter um recurso educativo em aconselhamento clínico individual.

O ponto forte é transformar esse conhecimento combinado em um **produto educacional digital que ensine uma habilidade**, em vez de construir apenas uma página informativa. O produto deve permitir que a pessoa pratique, receba feedback e demonstre o que conseguiu compreender. Resultados em um questionário imediato, porém, não provam aprendizagem duradoura nem mudança de comportamento.

## 3. Registro histórico dos seis temas comparados

As descrições e a matriz abaixo preservam a trilha de comparação feita antes da decisão. Elas não representam uma chamada à escolha entre alternativas: o único tema ativo é o Treino de Teleconsulta.

## Tema 1 — SUS Digital sem barreiras: recurso educativo para uso seguro de serviços e informações digitais de saúde

*(antigo Tema 5)*

**Título possível:** *Desenvolvimento de um recurso interativo de educação em saúde digital sobre acesso seguro à informação, privacidade e navegação em serviços digitais de saúde.*

**Problema:** a disponibilidade de serviços digitais não garante que as pessoas saibam reconhecer canais oficiais, proteger informações pessoais ou encontrar informações confiáveis. O Programa SUS Digital menciona letramento digital, proteção de dados pessoais e redução de iniquidades como objetivos relevantes.

**Ideia do produto:** um simulador educativo sem login ou integração com sistemas reais, composto por cenários fictícios: identificar um canal oficial, reconhecer pedidos suspeitos de dados, decidir que tipo de informação não deve ser compartilhado, localizar uma fonte pública confiável e encontrar opções de ajuda. As telas seriam autorais e fictícias; não se copiariam interfaces de forma a sugerir ser um canal oficial.

**Pergunta de pesquisa possível:** Como uma solução educativa interativa pode apoiar a compreensão de práticas básicas de navegação e proteção de dados em contextos digitais de saúde?

**Método enxuto:** traduzir orientações públicas em objetivos de aprendizagem; produzir cenários e feedback; desenvolver o protótipo; revisar precisão e acessibilidade; avaliar o produto pela Camada 0 e, se autorizado, testar tarefas e compreensão de cenários fictícios (Camada 1).

**Aderência aos critérios**
- **Justificativa e linha:** educação em saúde digital e desenvolvimento de competência para navegação segura.
- **Inovação e escala:** pode ser distribuído como recurso aberto e adaptado a diferentes cursos e campanhas. A inovação precisa ser comparada com materiais oficiais e campanhas já existentes.
- **Dois anos:** viabilidade boa se não tentar replicar ou integrar o Meu SUS Digital, prontuários ou plataformas de autenticação.
- **Impacto social:** pode ajudar a ensinar práticas de segurança e navegação informada.
- **Equidade/diversidade:** foco direto em barreiras digitais, acessibilidade, linguagem clara e dispositivos modestos.
- **ODS:** 3, 4 e 10; ODS 16 como relação complementar com acesso à informação e práticas seguras.
- **Transformação digital do SUS:** alinhamento explícito com literacia digital, cultura de saúde digital, proteção de dados e redução das desigualdades.

**Dependência de terceiros:** **baixa para desenvolver; baixa a média para avaliar**. Pode ser construído com materiais oficiais públicos, mas os exemplos que mencionarem serviços ou canais específicos precisarão de verificação periódica.

**Risco principal:** tornar-se apenas um tutorial que fica desatualizado quando sistemas mudam, ou parecer um canal oficial. Para reduzir esse risco, ensinar princípios transferíveis e usar referências oficiais como exemplos opcionais, não como única parte do produto.

## Tema 2 — IA em saúde com senso crítico: microcurso sobre verificação e limites de respostas geradas por IA

*(antigo Tema 4)*

**Título possível:** *Desenvolvimento de um microcurso digital para educação em saúde sobre avaliação crítica e uso seguro de respostas produzidas por inteligência artificial generativa.*

**Problema:** ferramentas de IA generativa podem produzir respostas convincentes, mas incorretas, incompletas ou descontextualizadas; o usuário também pode inserir informações pessoais ou interpretar uma resposta genérica como orientação clínica individual.

**Ideia do produto:** um módulo educativo com exemplos de respostas de IA, exercícios de verificação de fontes, reconhecimento de incerteza, proteção de dados pessoais e identificação de situações em que a pessoa precisa recorrer a um profissional ou canal oficial. A primeira versão não precisa consultar uma API nem usar uma IA em produção. **Ajuste em relação à versão anterior:** em vez de respostas inventadas pelo pesquisador, preferir **respostas reais de chatbots públicos, registradas com data, ferramenta e versão**, para que os casos representem o comportamento real desses sistemas. Isso depende apenas dos termos de uso das ferramentas; confirmar antes de reproduzir saídas no material publicado.

**Pergunta de pesquisa possível:** Como um microcurso interativo pode apoiar a identificação de limitações e a verificação crítica de respostas de IA sobre saúde?

**Método enxuto:** mapear orientações e pesquisas relevantes; definir critérios pedagógicos de verificação; reunir e documentar um conjunto pequeno de casos; construir módulos e exercícios; avaliar pela Camada 0 e, se autorizado, testar conteúdo, acessibilidade e compreensão imediata (Camada 1). A revisão dos materiais deverá ser planejada periodicamente porque a tecnologia muda.

**Aderência aos critérios**
- **Justificativa e linha:** educação em saúde digital e desenvolvimento de competência crítica sobre tecnologia.
- **Inovação e escala:** tema atual, menos saturado que o de desinformação em geral; recurso potencialmente reutilizável em cursos de saúde e de literacia digital.
- **Dois anos:** viável se for um curso educativo, não um sistema de IA clínica.
- **Impacto social:** pode apoiar o uso mais crítico de respostas automatizadas e a proteção de informações pessoais.
- **Equidade/diversidade:** exemplos acessíveis, linguagem clara e orientação para que limitações de conectividade e familiaridade digital não se convertam em culpa do usuário. É o ponto que exige mais atenção neste tema, pois o público que mais usa IA pode não ser o mais vulnerável.
- **ODS:** 3 e 4; ODS 10 e 16 conforme o escopo de acesso equitativo, informação confiável e uso responsável.
- **Transformação digital do SUS:** forte conexão com uso ético e crítico de tecnologias digitais e letramento digital em saúde.

**Dependência de terceiros:** **baixa para desenvolver; baixa a média para avaliar; média para manter atualizado**. Não precisa de fornecedor de IA nem de integração institucional.

**Risco principal:** o tema pode envelhecer rapidamente ou se tornar amplo demais. Delimitar o produto a verificação, privacidade e limites das respostas, sem prometer que detecta automaticamente alucinações.

## Tema 3 — Radar da Desinformação em Saúde: laboratório digital para reconhecer, verificar e responder a boatos

*(antigo Tema 6; absorve a ideia do antigo Tema 1)*

**Título possível:** *Desenvolvimento e avaliação de um laboratório digital de educação em saúde para reconhecer táticas de desinformação e apoiar respostas responsáveis a conteúdos falsos ou enganosos.*

**Problema:** informações falsas ou enganosas sobre saúde podem explorar medo, urgência, falsa autoridade, testemunhos sem evidência, dados fora de contexto e outras estratégias persuasivas. Apenas apresentar a correção de um boato específico pode não preparar a pessoa para avaliar alegações novas ou decidir como agir diante delas.

**Ideia do produto:** um laboratório web educativo em duas etapas. Primeiro, uma atividade preventiva (*prebunking*) apresenta, com exemplos simples, táticas frequentes usadas para tornar uma alegação enganosa convincente. Depois, a pessoa analisa publicações simuladas e fictícias, identifica a alegação central, avalia autoria e fontes, procura evidências, decide se deve compartilhar, não compartilhar ou sinalizar o conteúdo e pratica uma resposta curta que encaminhe a fontes confiáveis. Cada decisão recebe feedback explicativo e referências públicas. A primeira versão não depende de IA, login, integração com redes sociais nem coleta de dados pessoais.

**Pergunta de pesquisa possível:** Como um laboratório digital com cenários simulados pode apoiar a compreensão imediata e o desempenho de adultos em tarefas de reconhecimento de táticas de desinformação em saúde, verificação de alegações e decisão responsável de compartilhamento?

**Método enxuto:** realizar uma busca bibliográfica estruturada sobre intervenções educativas contra desinformação em saúde; delimitar um conjunto pequeno de táticas e objetivos de aprendizagem; produzir exemplos originais fictícios, sempre identificados como simulações e acompanhados de contexto corretivo; desenvolver o protótipo; revisar o conteúdo com critérios científicos e editoriais; avaliar pela Camada 0 e, se autorizado, testar acessibilidade, usabilidade e tarefas (Camada 1).

**Aderência aos critérios**
- **Justificativa e linha:** relação direta com educação em saúde, alfabetização midiática e informacional e competências para avaliar alegações de saúde no ambiente digital. Há risco de a banca enxergar o tema como educação midiática e não como saúde digital; a justificativa deve explicitar o vínculo com saúde digital e com o SUS.
- **Inovação e escala:** combina prevenção educativa, prática simulada e decisão de resposta num recurso leve que pode ser distribuído como material aberto. O campo de jogos e simuladores contra desinformação é concorrido (por exemplo, iniciativas como Bad News, Go Viral! e Harmony Square, citadas de memória e a verificar na busca). A inovação só se sustenta se vier do recorte brasileiro, em saúde e ligado ao SUS, e isso deve ser demonstrado antes de afirmar originalidade.
- **Dois anos:** viabilidade moderada-alta se forem escolhidas poucas táticas e um público bem delimitado; monitoramento contínuo de redes sociais ou checagem automatizada em tempo real ficariam fora do escopo.
- **Impacto social:** pode desenvolver competências para reconhecer conteúdo suspeito e evitar compartilhamento irrefletido; o estudo não poderá concluir que houve redução da circulação de desinformação fora do teste sem medir esse resultado.
- **Equidade/diversidade:** linguagem clara, exemplos culturalmente pertinentes, uso em celular, baixa demanda de dados, acessibilidade e cuidado para não culpar pessoas ou grupos por suas crenças e condições de acesso à informação.
- **ODS:** 3 e 4 como principais; ODS 10 e 16 como relações complementares quando justificadas pelo foco em desigualdade de acesso à informação e confiança em fontes verificáveis.
- **Transformação digital do SUS:** contribuição para letramento digital em saúde, uso crítico de tecnologias e capacidade de reconhecer e procurar informação confiável, sem pressupor integração com sistemas do SUS.

**Dependência de terceiros:** **baixa para desenvolver; média para avaliar**. O protótipo pode usar cenários fictícios e fontes públicas. A revisão independente de conteúdo e a avaliação com participantes dependem de disponibilidade de especialistas/pessoas e das aprovações aplicáveis.

**Risco principal:** amplificar involuntariamente um boato ao repeti-lo, apresentar uma correção como definitiva quando a evidência é incerta ou prometer mudança real de comportamento sem evidência. Mitigações: usar simulações originais, não reproduzir desinformação viral como chamariz, colocar a explicação corretiva no mesmo contexto, distinguir falsidade de incerteza legítima e avaliar apenas os resultados realmente medidos.

**Fontes de partida para a revisão (não substituem busca bibliográfica formal):**
- [OMS — Infodemic](https://www.who.int/health-topics/infodemic/1?lv=true), visão geral sobre informação falsa/enganosa e gestão da infodemia.
- [Grover et al. (2025) — *Online Interventions Addressing Health Misinformation: Scoping Review*](https://pmc.ncbi.nlm.nih.gov/articles/PMC12447009/), revisão de escopo de intervenções on-line, útil para mapear formatos educativos e lacunas de pesquisa.
- [PubMed — *Mitigating Health and Science Misinformation: A Scoping Review of Literature from 2017 to 2022*](https://pubmed.ncbi.nlm.nih.gov/38534199/), revisão sobre estratégias de correção, educação e inoculação/prevenção.

A busca bibliográfica deverá verificar o que já foi desenvolvido e testado, incluindo estudos brasileiros e públicos pouco representados, antes de afirmar originalidade ou escolher os indicadores finais.

## Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital

*(novo)*

**Título possível:** *Desenvolvimento de um simulador educativo para preparar usuários adultos a participar de teleconsultas.*

**Problema:** a telessaúde pressupõe habilidades que raramente são ensinadas: testar câmera e áudio, escolher um local privado, reagir a uma queda de conexão, descrever uma queixa com clareza e registrar o que foi combinado.

**Ideia do produto:** um simulador web com uma plataforma de teleconsulta **fictícia**, sem login, sem coleta de dados e sem conteúdo clínico. Ele treina habilidades de **participação**, não a avaliação de sintomas nem a interpretação de orientações clínicas. Pode reaproveitar parte da estrutura do protótipo "Conversa Clara" já existente no repositório (checklist de preparação, organização de próximos passos e reinicialização da sessão).

**Pergunta de pesquisa possível:** Como um simulador educativo pode apoiar usuários adultos na execução de tarefas básicas de participação em uma teleconsulta simulada?

**Método enxuto:** revisão de literatura e de guias públicos sobre teleconsulta; matriz de habilidades de participação; cenários fictícios; protótipo; auditoria técnica e de acessibilidade; análise de recursos de preparação já disponíveis (tutoriais de plataformas, materiais de serviços); avaliação por tarefas, quando autorizada (Camada 1).

**Aderência aos critérios**
- **Justificativa e linha:** ligação direta com telessaúde, que é o foco do mestrado, e com a educação do usuário.
- **Inovação e escala:** reutilizável por núcleos de telessaúde e unidades de saúde, desde que a plataforma simulada ensine princípios transferíveis. A inovação precisa ser comparada com os tutoriais das plataformas e materiais de serviços existentes.
- **Dois anos:** viável, com parte da base já construída.
- **Impacto social:** preparação para usar um serviço já existente, sem prometer melhora de desfechos.
- **Equidade/diversidade:** central, pois mira pessoas com pouca familiaridade digital, conexão instável e aparelhos simples. O desenho deve prever baixo consumo de dados e instruções em linguagem clara.
- **ODS:** 3, 4 e 10.
- **Transformação digital do SUS:** letramento digital e redução de desigualdades no acesso a serviços digitais.

**Dependência de terceiros:** **baixa para desenvolver; baixa a média para avaliar**. Não precisa de Secretaria de Saúde nem de integração. Demonstrar efeito em pessoas depende da Camada 1.

**Risco principal:** parecer um tutorial de uma plataforma específica ou sugerir orientação clínica. Mitigação: manter a plataforma fictícia, ensinar princípios transferíveis e evitar qualquer conteúdo de conduta clínica.

## Tema 5 — Dados do SUS ao Alcance: laboratório de letramento em dados públicos de saúde

*(novo)*

**Título possível:** *Desenvolvimento de um laboratório digital para educação em leitura crítica de indicadores públicos do SUS.*

**Problema:** os dados públicos de saúde existem, mas conselheiros, estudantes, comunicadores e cidadãos têm dificuldade de interpretá-los, o que enfraquece o controle social e a comunicação pública baseada em evidências.

**Ideia do produto:** um recurso web com **subconjuntos curados e agregados** de dados públicos, apresentados em visualizações simples. O usuário aprende a ler denominadores, comparar territórios, perceber limites e atrasos do dado, distinguir taxa de número absoluto e formular perguntas. Não usa API ao vivo, dados individuais nem informação identificável.

**Pergunta de pesquisa possível:** Como um laboratório interativo com dados públicos agregados pode apoiar a interpretação crítica de indicadores do SUS?

**Método enxuto:** mapear fontes públicas e suas licenças; definir indicadores e objetivos de aprendizagem; trabalhar com instantâneos datados e documentados dos dados; construir visualizações com descrição textual; revisão de conteúdo; auditoria técnica e de acessibilidade; avaliação por tarefas, quando autorizada (Camada 1).

**Aderência aos critérios**
- **Justificativa e linha:** educação para a informação em saúde. É preciso justificar explicitamente o enquadramento como tecnologia educacional e confirmar com a orientação a aderência à linha.
- **Inovação e escala:** existem painéis de dados, mas há menos recursos que ensinem **como lê-los**. A lacuna precisa ser demonstrada na busca. Reutilizável em cursos, em capacitação de conselheiros e em redações.
- **Dois anos:** viável se o recorte for pequeno (poucos indicadores e poucos conceitos).
- **Impacto social:** fortalece o controle social e o uso de informação em saúde.
- **Equidade/diversidade:** visualizações com descrição textual, linguagem simples, uso em celular e cuidado para não pressupor conhecimentos estatísticos.
- **ODS:** 3, 4, 10 e 16 (acesso à informação e instituições transparentes).
- **Transformação digital do SUS:** informação em saúde e cultura de dados, ligação forte com o uso crítico de dados e tecnologias.

**Dependência de terceiros:** **muito baixa para desenvolver; baixa para avaliar**. A pesquisa pode usar apenas informação pública, hipótese que a Resolução CNS nº 510/2016 trata como possível dispensa de apreciação pelo sistema CEP/CONEP (**confirmar com o programa e o CEP**). A avaliação com pessoas permanece opcional e dependeria de aprovação.

**Risco principal:** instabilidade ou mudança nos portais de dados, e erros de interpretação nos próprios exemplos. Mitigação: instantâneos datados, revisão técnica dos indicadores e foco em habilidades de leitura em vez de conclusões sobre a situação de saúde de um território. O vínculo com a formação em Jornalismo (leitura crítica de dados e fontes) e Medicina é forte.

## Tema 6 — Saúde Acessível desde o Início: trilha para criar conteúdos e interfaces de saúde digital acessíveis

*(novo)*

**Título possível:** *Desenvolvimento de uma trilha educativa interativa sobre acessibilidade em materiais e interfaces de saúde digital.*

**Problema:** serviços e materiais de saúde digital excluem pessoas com deficiência e outros grupos quando a acessibilidade é pensada tarde ou nunca. Quem produz o conteúdo (equipes de saúde, comunicadores, estudantes) raramente recebeu formação prática sobre isso.

**Ideia do produto:** uma trilha web com exemplos de antes e depois, checklists e exercícios de correção sobre texto alternativo, contraste, estrutura de títulos, linguagem clara e navegação por teclado, usando como referências o padrão global WHO-ITU para telessaúde, a WCAG 2.2 e o eMAG. Os exercícios usam materiais fictícios ou de domínio público.

**Pergunta de pesquisa possível:** Como uma trilha educativa interativa pode apoiar a identificação e a correção de barreiras de acessibilidade em materiais de saúde digital?

**Método enxuto:** revisão de literatura e normas; matriz de barreiras e de correções; exercícios com materiais fictícios ou públicos; protótipo acessível; auditoria automatizada e manual; análise documental de um conjunto de materiais públicos de saúde digital para descrever a frequência dos problemas (Camada 0). A avaliação da aprendizagem de profissionais ou estudantes é opcional (Camada 1).

**Aderência aos critérios**
- **Justificativa e linha:** formação de quem produz recursos digitais de saúde, em linha com tecnologias educacionais.
- **Inovação e escala:** recurso aberto e reutilizável por equipes, cursos e serviços. É preciso comparar com guias de acessibilidade já existentes, para que o diferencial seja a prática guiada e o foco em saúde.
- **Dois anos:** viável se priorizar poucas barreiras de maior impacto.
- **Impacto social:** reduz barreiras para quem usa os serviços digitais de saúde.
- **Equidade/diversidade:** é o foco do tema; inclui pessoas com deficiência e com baixa literacia.
- **ODS:** 3, 4 e 10.
- **Transformação digital do SUS:** redução de iniquidades no acesso a serviços digitais, em linha com as diretrizes de acessibilidade da OMS e da ITU para telessaúde.

**Dependência de terceiros:** **baixa para desenvolver; baixa para avaliar**. A Camada 0 produz resultados mensuráveis sem participantes (por exemplo, tipos e frequência de barreiras nos materiais analisados). Se materiais de instituições forem analisados, usar apenas os publicamente disponíveis e evitar atribuir falhas de modo identificável sem cuidado ético e institucional.

**Risco principal:** virar uma lista de normas, sem prática. Mitigação: privilegiar exercícios de correção e poucas barreiras de maior impacto. Evitar declarar conformidade com WCAG apenas porque uma ferramenta automática não encontrou violações.

**Fontes de partida:**
- [Padrão global WHO-ITU, 2022](https://www.who.int/publications/i/item/9789240050464)
- [Toolkit WHO-ITU, 2024](https://www.who.int/publications/i/item/9789240094161)
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [eMAG 3.1](https://emag.governoeletronico.gov.br/)

## 4. Comparação preliminar com os critérios do edital

Notas de 1 a 5, usadas somente para comparar ideias nesta fase. São hipóteses de planejamento, não notas oficiais. Diferenças de um ponto não devem ser interpretadas como significativas. Os pesos são iguais, o que pode não refletir os pesos do edital.

| Tema | Justificativa e aderência | Inovação e escala | 2 anos | Impacto social | Equidade/diversidade | ODS | Transformação SUS Digital | Soma interna /35 | Dependência de terceiros (desenvolver / avaliar) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1. SUS Digital sem barreiras | 5 | 3 | 4 | 4 | 5 | 4 | 5 | 30 | Baixa / baixa a média |
| 4. Treino de Teleconsulta | 5 | 3 | 4 | 4 | 5 | 4 | 5 | 30 | Baixa / baixa a média |
| 2. IA em saúde com senso crítico | 5 | 4 | 4 | 4 | 3 | 4 | 5 | 29 | Baixa / baixa a média (média para manter) |
| 5. Dados do SUS ao Alcance | 4 | 4 | 4 | 4 | 4 | 4 | 5 | 29 | Muito baixa / baixa |
| 6. Saúde Acessível desde o Início | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 29 | Baixa / baixa |
| 3. Radar da Desinformação em Saúde | 4 | 3 | 4 | 4 | 4 | 4 | 4 | 27 | Baixa / média |

### Interpretação da matriz

- **Mais aderentes à telessaúde e ao SUS Digital:** Temas 1 e 4. Ambos têm justificativa institucional forte e foco em equidade, mas dependem de uma avaliação com pessoas (Camada 1) para demonstrar efeito.
- **Mais independentes de terceiros:** Temas 5 e 6. Podem sustentar uma dissertação defensável só com a Camada 0. O Tema 5 também se beneficia da possibilidade de usar apenas informação pública, a confirmar com o CEP.
- **Mais inovador e atual:** Tema 2, com o cuidado de documentar casos reais, delimitar o escopo e tratar a equidade, que é seu ponto mais frágil.
- **Mais sujeito a questionamento de inovação e enquadramento:** Tema 3. O campo é concorrido e a banca pode ver o tema como educação midiática. Só deve avançar se a busca mostrar uma lacuna brasileira real.
- **Ressalva sobre a matriz:** a pontuação foi feita sem verificar a existência de produtos semelhantes, a disponibilidade dos dados do Tema 5 e os pesos do edital. Todas essas checagens estão nas pendências.

## 5. Decisão tomada: Tema 4 — Treino de Teleconsulta

**Tema escolhido:** **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital.** O produto será um simulador web de prática guiada, com cenários fictícios, para apoiar adultos com baixa familiaridade digital a praticar etapas comuns de uma teleconsulta sem conectar-se a um atendimento real.

**Racional da decisão:** a proposta tem ligação direta com telessaúde e educação em saúde, ensina habilidades práticas em vez de apenas disponibilizar informação, mantém o escopo técnico controlável por simulação e permite incorporar acessibilidade desde o desenho. Não se pressupõe parceria com a Secretaria, e nenhum teste com pessoas começa sem a confirmação das aprovações aplicáveis.

A escolha do tema está feita para orientar o trabalho subsequente. A formulação definitiva da pergunta, a definição operacional do público e o método continuam sujeitos à discussão com a orientação.

## 6. Plano de execução possível em 24 meses

O plano abaixo é uma referência inicial, não um cronograma aprovado. **Diferente da versão anterior, inclui o tempo de análise ética**, que só se aplica se a Camada 1 for mantida.

| Período indicativo | Entrega |
|---|---|
| Meses 1–3 | Pergunta delimitada, revisão de literatura atualizada, mapa dos recursos existentes (benchmarking) e objetivos educativos explícitos |
| Meses 3–6 | Público-alvo, conteúdo mínimo, roteiros dos cenários e matriz de aprendizagem. **Em paralelo, se a Camada 1 for mantida:** elaboração do protocolo e submissão ao CEP, com a orientação, assim que possível após a matrícula |
| Meses 6–11 | Protótipo funcional mínimo, responsivo, acessível, sem login nem coleta de dados pessoais |
| Meses 11–13 | Revisão científica/editorial dos conteúdos, auditoria técnica e de acessibilidade (Camada 0) e correções priorizadas |
| Meses 14–17 | **Somente com aprovação:** avaliação com participantes (Camada 1). Sem aprovação: ampliar a Camada 0 e registrar a limitação |
| Meses 18–19 | Análise dos resultados, aperfeiçoamento e documentação do produto |
| Meses 20–22 | Redação da dissertação e síntese dos resultados e limitações |
| Meses 23–24 | Revisão, entrega e preparação da defesa |

Os prazos de análise ética variam e não foram verificados; o calendário deve ser ajustado ao programa, à orientação e ao CEP responsável.

## 7. Critérios para refinar e validar o tema escolhido

Use estas perguntas para refinar o Treino de Teleconsulta e verificar se a proposta é defensável:

1. Consigo explicar o problema e o público em duas frases?
2. O produto ensina uma habilidade definida, em vez de apenas disponibilizar texto?
3. Consigo criar e avaliar uma primeira versão pela Camada 0 sem depender de órgão de saúde, prontuário ou fornecedor de tecnologia?
4. Sei quais evidências públicas sustentam o conteúdo e como vou mantê-las atualizadas?
5. Tenho indicadores proporcionais ao que consigo avaliar em dois anos?
6. Consigo demonstrar, de forma específica, como o produto atende a cada um dos sete critérios?
7. O plano de avaliação é executável, reserva tempo para as autorizações éticas e institucionais aplicáveis e tem alternativa caso elas não saiam a tempo?
8. A inovação é real e comparada com o que já existe, ou apenas rebatiza um conteúdo comum?
9. A justificativa explica por que o tema é **saúde digital / educação em saúde** e não apenas educação midiática, estatística ou acessibilidade em geral?

O tema está escolhido; sua sustentação deve ser demonstrada por aderência, evidência de necessidade, comparação com soluções existentes e exequibilidade — não apenas pela relevância aparente do assunto.

## 8. Pendências de refinamento do tema escolhido

- [ ] Refinar a pergunta e os objetivos de aprendizagem com a orientação.
- [ ] Definir operacionalmente “baixa familiaridade digital” e a estratégia de elegibilidade sem inferir incapacidade pela idade ou escolaridade.
- [ ] Mapear produtos semelhantes (tutoriais, vídeos, guias, simulações e recursos do SUS) e demonstrar a lacuna específica do simulador.
- [ ] Definir o cenário de avaliação e as tarefas simuladas; manter alternativa sem participantes caso as aprovações não sejam possíveis no prazo.
- [ ] Escolher instrumentos, critérios de êxito e plano de análise antes da coleta.
- [ ] Confirmar com orientação, instituição e instâncias pertinentes quais autorizações éticas e administrativas se aplicam.
- [ ] Atualizar e conferir o anteprojeto conforme o edital e o modelo oficial vigentes.

## Histórico de alterações

**20/10/2026 — Substituição de três temas.** Foram removidos os temas abaixo, por apresentarem maior fragilidade e menor aderência aos critérios do edital e ao critério de mínima dependência de terceiros. A numeração foi refeita.

| Tema removido | Motivo da remoção |
|---|---|
| Antigo 1 — Saúde em Checagem: simulador interativo para avaliar informações de saúde na internet | Produto quase idêntico ao do Tema 3 (Radar da Desinformação), com recorte mais amplo e inovação menos defensável. A ideia foi absorvida pelo Tema 3. |
| Antigo 2 — Risco sem Confusão: microcurso interativo para entender números e notícias sobre saúde | Vínculo mais fraco com telessaúde e SUS Digital e menor inovação (comunicação de risco é um campo muito estudado). Pode ser reaproveitado como módulo de outro tema. |
| Antigo 3 — Da linguagem médica à linguagem clara: oficina digital para produzir materiais educativos acessíveis | Maior dependência de terceiros na avaliação (acesso a profissionais ou estudantes) e inovação frágil sem IA, pois o feedback de reescrita ficaria limitado a rubricas e autoavaliação. Parte do conteúdo de linguagem clara foi incorporada ao Tema 6. |

**Correspondência de numeração:** antigo Tema 5 → Tema 1; antigo Tema 4 → Tema 2; antigo Tema 6 → Tema 3; Temas 4, 5 e 6 são novos.

**Outras alterações:** inclusão do critério transversal de dependência de terceiros e da avaliação em camadas; revisão das notas da matriz (menos concentradas em 5); revisão da recomendação, que agora tem o Tema 1 como candidato principal; inclusão da etapa de análise ética no cronograma; inclusão de pendências sobre a unificação do repositório e a confirmação ética.