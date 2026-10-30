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

**Objetivo.** Desenvolver e avaliar, por inspeção técnica, pedagógica e de acessibilidade, um simulador educativo web em português brasileiro para a prática, em cenários fictícios, de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.

**Método.** Pesquisa tecnológica aplicada, conduzida segundo o arcabouço Design Science Research. Inclui busca bibliográfica reproduzível (PubMed/MEDLINE, BVS/LILACS e SciELO) e comparação de recursos existentes; derivação de requisitos rastreáveis; desenvolvimento iterativo; e avaliação por inspeção, com critérios definidos previamente: conformidade com a WCAG 2.2 nível AA, avaliação heurística, percurso cognitivo, rubrica pedagógica, legibilidade dos textos e teste de funcionamento, com ao menos um inspetor independente além do pesquisador. Uma etapa condicional, com validação de conteúdo por especialistas ou teste de usabilidade com poucas pessoas, só ocorrerá após indicação da orientação e apreciação do Comitê de Ética em Pesquisa.

**Produto.** Simulador web responsivo, gratuito, sem cadastro e sem coleta de dados, com três momentos: preparação do aparelho e do ambiente; prática de três situações fictícias (o link não abre, não se consegue ouvir, uma informação não ficou clara), com escolhas e feedback explicativo; e encerramento, com a confirmação dos próximos passos. Todo o conteúdo é fictício. Não realiza consulta, não usa áudio ou vídeo ao vivo e não se conecta a serviços ou prontuários.

**Resultados esperados.** Matriz de evidências e comparação de recursos existentes; simulador aberto e documentado, com matriz de rastreabilidade entre fonte, requisito, objetivo educativo, tarefa e verificação; relatório de inspeção com defeitos, correções e limitações; e recomendações de adaptação e de futura avaliação com usuários. O estudo não pretende demonstrar aprendizagem duradoura nem efeitos clínicos.

**Palavras-chave:** Consulta Remota; Telemedicina; Letramento em Saúde; Treinamento por Simulação; Educação em Saúde. [CONFIRMAR cada descritor no DeCS/MeSH; "Consulta Remota" está confirmado.]

## ABSTRACT

**Background and problem.** Taking part in a teleconsultation requires users to carry out digital actions that are separate from the clinical conversation: preparing the device and the room, joining the virtual room, checking the audio, and asking for clarification when something fails. Evidence on how to prepare users for these actions is limited and mixed, and the guided-practice resources in Brazilian Portuguese identified so far are scarce [CONFIRM after the formal search].

**Research question.** To what extent does a web-based educational simulator, which lets adults practice in fictional scenarios the basic digital actions of a teleconsultation, meet the content, language, privacy and accessibility requirements derived from the literature and from existing resources, as judged by technical, pedagogical and accessibility inspection?

**Objective.** To develop and evaluate, through technical, pedagogical and accessibility inspection, a web-based educational simulator in Brazilian Portuguese for practicing, in fictional scenarios, the basic digital actions of taking part in a teleconsultation, aimed at adults with low digital familiarity.

**Methods.** Applied technological research following the Design Science Research framework. It includes a reproducible literature search (PubMed/MEDLINE, BVS/LILACS and SciELO) and a comparison of existing resources; derivation of traceable requirements; iterative development; and evaluation by inspection against predefined criteria: conformance with WCAG 2.2 level AA, heuristic evaluation, cognitive walkthrough, a pedagogical rubric, text readability and functional testing, with at least one independent inspector in addition to the researcher. A conditional stage, with content validation by experts or a usability test with a few people, will take place only if the academic supervisor requests it and a research ethics committee reviews it.

**Product.** A responsive web simulator, free of charge, with no sign-up and no data collection, with three moments: preparing the device and the room; practicing three fictional situations (the link does not open, the user cannot hear, a piece of information was unclear) with choices and explanatory feedback; and closing, with confirmation of the next steps. All content is fictional. It does not conduct a consultation, use live audio or video, or connect to services or health records.

**Expected results.** An evidence matrix and a comparison of existing resources; an open, documented simulator with a traceability matrix linking source, requirement, learning objective, task and verification; an inspection report with defects, fixes and limitations; and recommendations for adaptation and for a future evaluation with users. The study does not aim to demonstrate lasting learning or clinical effects.

**Keywords:** Remote Consultation; Telemedicine; Health Literacy; Simulation Training; Health Education. [CONFIRM each descriptor in DeCS/MeSH.]

## INTRODUÇÃO

A transformação digital da saúde no Brasil avança por política e por norma. O Programa SUS Digital, instituído em 2024, tem como objetivo geral ampliar o acesso da população às ações e aos serviços do SUS e inclui, entre seus objetivos específicos, fomentar o letramento digital e a cultura da saúde digital (BRASIL, 2024c). A Lei nº 14.510/2022 consolidou a telessaúde no país (BRASIL, 2022). Na ponta dos serviços, a teleconsulta é ofertada por 28% dos estabelecimentos de saúde pesquisados e a interação online com a equipe de saúde passou de 16% em 2023 para 35% em 2025 (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a) [CONFIRMAR os dois números e a base de cada indicador no relatório original].

Participar de uma teleconsulta exige ações digitais que não fazem parte da conversa clínica: preparar o aparelho e a conexão, acessar um link, reconhecer os controles, perceber se há áudio, pedir ajuda quando a comunicação falha e localizar as informações de encerramento. Essas ações correspondem a componentes do letramento em saúde digital, entendido como o conjunto de habilidades para buscar, encontrar, compreender, avaliar e aplicar informação eletrônica em saúde (NORMAN; SKINNER, 2006). A acessibilidade é condição transversal: o padrão global da OMS e da UIT para a acessibilidade de serviços de telessaúde e o guia de implementação de 2024 tratam de pessoas com deficiência e de outros grupos que enfrentam barreiras de uso (WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION, 2022, 2024).

A literatura sobre preparo de usuários é limitada. Uma revisão de escopo identificou 13 estudos de treinamento de usuários para consultas síncronas de telessaúde entre 8.087 registros únicos; predominaram chamadas preparatórias individuais e instruções escritas, e a evidência de melhora da competência foi limitada e mista (GALVIN et al., 2024). Outra revisão, sobre estratégias para elevar o letramento em saúde digital de adultos mais velhos, incluiu 24 estudos e apontou a necessidade de melhorar o desenho dos estudos e a adequação dos instrumentos (YANG et al., 2024). O contexto brasileiro acrescenta barreiras de dispositivo e de conexão: segundo a pesquisa TIC Domicílios 2025, 85% da população de 10 anos ou mais usa a internet, 65% dos usuários acessam apenas pelo celular, proporção que chega a 87% nas classes DE (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b) [CONFIRMAR números e páginas].

O projeto parte de um referencial de aprendizagem de adultos e de simulação em saúde. A andragogia indica que adultos aprendem melhor quando a tarefa tem relevância imediata e utilidade prática (KNOWLES; HOLTON; SWANSON, 2015). A teoria da carga cognitiva recomenda limitar o que se exige da memória de trabalho a cada passo (SWELLER, 1988), o que orienta o desenho de uma instrução por tela. Uma revisão sistemática de simulações médicas de alta fidelidade apontou o feedback como a característica mais frequentemente citada nos estudos incluídos como importante para a aprendizagem (ISSENBERG et al., 2005). A transferência desse achado para um simulador web é uma inferência de design. Dessas fontes decorrem os princípios do simulador: uma ação por vez, palavras concretas, escolhas plausíveis e feedback explicativo e não punitivo.

Neste projeto, "baixa familiaridade digital" designa a condição de adultos que relatam precisar de ajuda para realizar sozinhos tarefas digitais básicas de uma teleconsulta, como abrir um link recebido, ligar e ajustar áudio e vídeo e localizar controles na tela. A definição é funcional e revisável. Ela não equivale a idade avançada, baixa escolaridade ou deficiência. A hipótese de design a examinar é que a prática de decisões em cenários fictícios, com feedback imediato, em português simples e sem cadastro, oferece uma contribuição distinta de guias, vídeos e cursos existentes.

## JUSTIFICATIVA

**O problema.** Quem chega a uma teleconsulta sem ter praticado as ações digitais necessárias aprende por tentativa e erro durante o atendimento, em um momento de maior tensão e de tempo limitado. Os recursos de preparo identificados em levantamento exploratório são, em geral, guias textuais, vídeos e cursos autoguiados. Exemplos: o curso *Digital House Calls* (BRIDGINGAPPS, [s.d.]), os guias do Telehealth.HHS.gov (UNITED STATES, [s.d.]) e o tutorial do TelessaúdeBA (BAHIA, [s.d.]). São, quase todos, específicos de um serviço ou de outro idioma. Na busca exploratória realizada, não foi identificado um simulador interativo de decisões, em português brasileiro, de uso sem cadastro. A busca sistemática do projeto testará essa afirmação.

**Pergunta de pesquisa.** Em que medida um simulador educativo web, que permite a adultos praticar em cenários fictícios as ações digitais básicas de uma teleconsulta, atende aos requisitos de conteúdo, linguagem, privacidade e acessibilidade derivados da literatura e de recursos existentes, segundo inspeção técnica, pedagógica e de acessibilidade?

**Aderência institucional.** O projeto pertence à linha 2, Tecnologias para Educação em Saúde, e ao tipo de projeto 5, Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde. O produto principal é uma tecnologia educacional digital, de uso a distância, cujo propósito é preparar pessoas para usar serviços de telessaúde, objeto do Programa. [CONFIRMAR e citar a descrição oficial da linha 2 em telessaude.uerj.br/mestrado/linhas-de-pesquisa.]

### Relevância e magnitude do problema para o ecossistema de Saúde com foco no SUS Digital

A demanda por competências digitais para usar serviços de saúde cresce com a oferta desses serviços. A teleconsulta está presente em 28% dos estabelecimentos de saúde pesquisados, e a interação online com a equipe subiu de 16% para 35% entre 2023 e 2025 (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a) [CONFIRMAR]. Do lado dos usuários, 52% dos usuários de internet buscaram informações sobre saúde nos três meses anteriores à pesquisa, e quase metade da população usuária está em nível de habilidades digitais abaixo do básico (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b) [CONFIRMAR as duas informações e a base do indicador]. A pesquisa TIC Saúde não traz, nos resultados consultados, indicador sobre preparo de usuários para a teleconsulta [CONFIRMAR em todo o relatório], o que é em si uma lacuna de informação.

O Programa SUS Digital estrutura sua atuação em três eixos, o primeiro dos quais é a "cultura de saúde digital, formação e educação permanente em saúde" (BRASIL, 2024c, art. 8º). Entre seus objetivos específicos estão fomentar "o letramento digital e a cultura da saúde digital" e reduzir "a iniquidade no acesso às soluções e serviços de saúde digital" (BRASIL, 2024c, art. 2º) [CONFIRMAR os incisos e a transcrição no texto da Portaria]. O simulador contribui para o eixo da cultura e da formação em saúde digital, por meio de prática educativa. Ele não se integra a sistemas do SUS e não substitui a oferta de serviços acessíveis; atua sobre a preparação dos usuários.

## OBJETIVOS

### Objetivo geral

Desenvolver e avaliar, por inspeção técnica, pedagógica e de acessibilidade, um simulador educativo web em português brasileiro para a prática, em cenários fictícios, de ações digitais básicas de participação em teleconsulta por adultos com baixa familiaridade digital.

### Objetivos específicos

**1)** Mapear as evidências científicas e os recursos educativos existentes sobre preparo de usuários para teleconsulta, por busca bibliográfica reproduzível e matriz comparativa, a fim de derivar objetivos educativos e requisitos rastreáveis.

**2)** Desenvolver, de forma iterativa, o simulador com os momentos de preparação, de prática de situações de dificuldade e de encerramento, documentando a rastreabilidade entre fonte, requisito, objetivo educativo, tarefa e verificação.

**3)** Avaliar o simulador por inspeção técnica, pedagógica e de acessibilidade, com critérios definidos previamente e ao menos um inspetor independente além do pesquisador, registrando defeitos, correções e limitações e formulando recomendações de adaptação e de futura avaliação com usuários.

## PROPOSTA DE VALOR

O projeto propõe uma inovação de natureza educacional e tecnológica: um **simulador de decisões** que permite praticar, antes do atendimento, as ações digitais de uma teleconsulta. A dor atendida é a aprendizagem por tentativa e erro no momento do atendimento. A oportunidade é oferecer um recurso aberto, em português simples, de uso no celular e sem cadastro, que serviços e cursos possam adotar e adaptar.

### Potencial de contribuição científica, tecnológica ou de inovação para a área de Telessaúde e Saúde Digital

A contribuição é tripla. **Tecnológica:** um simulador web aberto, com três momentos e feedback por escolha, já existente como prova de conceito e a ser evoluído. **Metodológica:** uma matriz de rastreabilidade entre fonte, requisito, objetivo educativo, tarefa e verificação, e um protocolo de inspeção técnica, pedagógica e de acessibilidade reproduzível por outros grupos que desenvolvam tecnologias educacionais em saúde sem acesso imediato a participantes. **Científica:** uma síntese estruturada da evidência e dos recursos sobre preparo de usuários para teleconsulta, com a lacuna delimitada e testável.

### Potencial de beneficiários e público-alvo da pesquisa

**Beneficiários diretos:** adultos com baixa familiaridade digital que utilizarão ou poderão utilizar teleconsultas, nos termos da definição funcional da Introdução. **Indiretos:** equipes e serviços de telessaúde, que reduzem falhas de acesso e tempo de atendimento perdido; cursos de formação em saúde; e cuidadores e familiares que apoiam o acesso.

**Equidade e diversidade.** O desenho responde a barreiras específicas, e não a um público homogêneo. (i) *Conectividade e dispositivo:* 87% dos usuários das classes DE acessam a internet apenas pelo celular (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b) [CONFIRMAR]; por isso o simulador é pensado para telas pequenas, consome poucos dados e funciona sem cadastro. (ii) *Letramento funcional:* instruções curtas, uma ação por tela, palavras concretas, ritmo livre e reinício a qualquer momento. (iii) *Baixa visão e tecnologias assistivas:* navegação por teclado, foco visível, contraste, ampliação e semântica para leitores de tela, verificados por inspeção segundo a WCAG 2.2. (iv) *Surdez e perda auditiva:* o cenário "não consigo ouvir" será complementado por uma variante com alternativas de comunicação por texto, como o chat e a legenda, em linha com as recomendações da OMS e da UIT (WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION, 2022, 2024) [requisito planejado; não implementado hoje]. O projeto não usa idade, escolaridade ou deficiência, isoladamente, para presumir baixa familiaridade digital.

### Potencial da demanda de pesquisa

A demanda decorre de três fatos documentados: a expansão da teleconsulta e da interação online nos serviços (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a); a presença de barreiras de dispositivo, conexão e habilidades entre os usuários (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b); e a evidência limitada sobre como preparar usuários, apontada por revisões recentes (GALVIN et al., 2024; YANG et al., 2024). A demanda direta por um simulador, por parte de serviços e usuários, será explorada por contato institucional com a rede de saúde de Guaraí-TO e com núcleos de telessaúde, sem que isso seja pré-requisito do estudo. [Não há parceria estabelecida.]

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

O instrumento federal vigente é a Estratégia Federal de Governo Digital 2024–2027, instituída pelo Decreto nº 12.198/2024 (BRASIL, 2024a). Os princípios da Estratégia foram estabelecidos pela Portaria SGD/MGI nº 6.618/2024 (BRASIL, 2024b); entre eles estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no art. 1º da Portaria SGD/MGI nº 6.618/2024]. O simulador se relaciona ao primeiro por preparar cidadãos para usar serviços públicos digitais de saúde, e ao segundo pela privacidade por desenho: não coleta dados pessoais ou de saúde. Não há integração com plataformas governamentais.

## MATERIAL E MÉTODO

**Desenho.** Pesquisa tecnológica aplicada, conduzida segundo o arcabouço Design Science Research (HEVNER et al., 2004; PEFFERS et al., 2007), que organiza o projeto em seis atividades: (A) identificação do problema; (B) definição dos objetivos da solução, ou requisitos; (C) projeto e desenvolvimento; (D) demonstração; (E) avaliação; (F) comunicação. As atividades A e B correspondem ao objetivo específico 1; C e D, ao objetivo 2; E, ao objetivo 3; F reúne dissertação, produto e documentação. [D3: confirmar o arcabouço com a orientação.]

**Cenário e usuários.** O trabalho é realizado a distância, em ambiente próprio de desenvolvimento e inspeção. A etapa-base (Camada 0) **não envolve participantes como sujeitos de pesquisa**: não há recrutamento, intervenção nem coleta de dados com usuários. A inspeção é feita pelo pesquisador e por inspetor independente, que examinam o produto segundo critérios definidos previamente; o enquadramento ético dessa inspeção será confirmado com a instituição. O público de interesse é descrito na Introdução e orienta os requisitos.

**Etapa 1 — Fundamentação e recursos existentes (meses 1–8).** Busca reproduzível em PubMed/MEDLINE, BVS/LILACS e SciELO, em português, inglês e espanhol, com janela prioritária de 2016 a 2026 e inclusão de trabalhos seminais anteriores quando conceitualmente necessário. Os conceitos centrais são teleconsulta/telessaúde, treinamento ou preparo de usuários, simulação educativa, usabilidade, acessibilidade, habilidades digitais e necessidades de apoio. Registram-se estratégias executadas, data, filtros, totais, exportações, deduplicação por DOI/PMID, critérios de inclusão e exclusão e motivo de cada exclusão. Em paralelo, benchmarking de guias, vídeos, tutoriais e simuladores, com matriz de funcionalidades, público, idioma, prática interativa, acessibilidade e requisitos técnicos.

**Etapa 2 — Objetivos educativos e requisitos (meses 4–10).** As evidências viram objetivos de aprendizagem observáveis, tarefas e requisitos funcionais, pedagógicos, de linguagem, de privacidade e de acessibilidade. Cada requisito é ligado à sua fonte, à tarefa no simulador e à forma de verificação (matriz de rastreabilidade).

**Etapa 3 — Desenvolvimento do simulador (meses 3–14).** A partir de uma prova de conceito já existente, o simulador é refinado em ciclos. O produto tem três momentos: (a) preparação do aparelho, da conexão, do ambiente e das dúvidas a esclarecer; (b) prática de três situações fictícias, selecionáveis — link que não abre, dificuldade para ouvir e informação não compreendida — com escolhas e feedback contextual; (c) encerramento, com exemplos e um exercício de escolha única para confirmar o que ficou combinado, o próximo passo e o contato previamente informado pelo serviço. Personagens, links e mensagens são fictícios; o simulador não ativa câmera nem microfone, não envia nem armazena dados.

**Etapa 4 — Avaliação (meses 10–19), em duas camadas.**
- **Camada 0 (base, sem participantes).** Inspeção técnica, pedagógica e de acessibilidade com critérios definidos previamente: (i) conformidade com a WCAG 2.2, nível AA, por critério, segundo a metodologia WCAG-EM (WORLD WIDE WEB CONSORTIUM, 2014, 2024), com verificadores automáticos como apoio, e não como prova; (ii) avaliação heurística e percurso cognitivo (NIELSEN, 1993); (iii) rubrica pedagógica, que examina se cada instrução ensina uma ação observável, se o feedback explica o motivo da resposta segura e se o tom é respeitoso, não punitivo e não clínico; (iv) legibilidade dos textos, por índice para o português [DEFINIR e citar]; (v) teste de funcionamento, teclado, foco, zoom, movimento reduzido, reinício e ausência de chamadas de rede e de armazenamento persistente. O pesquisador e **pelo menos um inspetor independente** examinam, de forma independente, ao menos parte dos casos, e a concordância entre os dois avaliadores é relatada.
- **Camada 1 (condicional).** Se a orientação indicar e o CEP aprovar, realiza-se validação de conteúdo por especialistas (com índice de validade de conteúdo, limiar definido previamente) ou teste de usabilidade com poucas pessoas, em tarefas padronizadas. O protocolo, a elegibilidade, o recrutamento, os instrumentos e o plano de dados serão definidos e submetidos antes de qualquer contato. Janela prevista: meses 14 a 19. Sem esta camada, as conclusões se limitam às evidências documentais e técnicas.

**Indicadores (Camada 0).** Cobertura de requisitos (verificados/ativos); cobertura dos objetivos educativos por cenário (objetivo, tarefa, feedback e verificação presentes); critérios WCAG 2.2 atendidos, não atendidos e não aplicáveis; defeitos por gravidade, corrigidos e reabertos; legibilidade dos textos; concordância entre inspetores. **(Camada 1, se houver):** IVC por item e global; taxa de conclusão de tarefas, erros e pedidos de ajuda.

**Critérios de inclusão e exclusão.** Aplicam-se à Etapa 1: estudos e recursos sobre preparo, treinamento, letramento digital ou acessibilidade para teleconsulta, com público adulto; excluem-se estudos exclusivamente técnicos sem implicação para usuário, serviço ou comunicação, salvo se definirem padrão de acessibilidade aplicável.

### Aspectos Éticos

Na etapa atual, a pesquisa **não envolve participantes como sujeitos de pesquisa**: baseia-se em literatura, em recursos públicos e na inspeção de um produto, sem coleta de dados com usuários. Segundo a Resolução CNS nº 510/2016, art. 1º, parágrafo único, pesquisas realizadas exclusivamente com textos científicos para revisão de literatura não são registradas nem avaliadas pelo sistema CEP/CONEP [CONFIRMAR o inciso]. O enquadramento da inspeção do produto será confirmado com a instituição, e não presumido. Por isso, não há número de parecer a informar. Se houver Camada 1, o protocolo será submetido ao sistema CEP/CONEP, conforme as Resoluções CNS nº 466/2012 e nº 510/2016 (BRASIL, 2012, 2016), **antes** de qualquer recrutamento ou coleta. O protocolo preverá participação voluntária, consentimento livre e esclarecido, possibilidade de desistência sem prejuízo, minimização de dados, confidencialidade, riscos (desconforto, cansaço, exposição de dificuldades pessoais) e medidas de mitigação, e benefícios (contribuição para o aperfeiçoamento de um recurso educativo). Autorizações institucionais, se necessárias, não substituem a apreciação ética. O simulador não solicita, transmite nem armazena dados pessoais, de saúde ou de contato; usa conteúdo fictício e não se apresenta como serviço oficial, em linha com o princípio de minimização da LGPD (BRASIL, 2018).

### Tipo de Estudo Científico na proposta

Pesquisa aplicada, de desenvolvimento tecnológico, com avaliação de tecnologia por inspeção, organizada segundo o Design Science Research. Não é estudo observacional, experimental ou de implementação, pois, na Camada 0, não há participantes nem intervenção sobre desfechos. A Camada 1, se aprovada, seria um estudo metodológico de validação de conteúdo e/ou de usabilidade formativa.

### Governança de Dados

**Produto.** O simulador não solicita, coleta, transmite nem armazena dados pessoais, de saúde ou de contato. As escolhas feitas existem apenas na memória do navegador e desaparecem ao reiniciar ou fechar a página. Todo o conteúdo é fictício. Não há login, banco de dados, servidor de aplicação nem serviços de terceiros que registrem o uso. **Pesquisa.** Os dados da Camada 0 são documentais: referências, registros de buscas, matrizes e relatórios de inspeção, armazenados em repositório de acesso restrito ao pesquisador e à orientação, com cópia de segurança e sem informações pessoais. Se houver Camada 1, o protocolo definirá finalidade, dados mínimos, anonimização ou pseudonimização, local e controle de acesso, retenção, descarte, responsáveis e compartilhamento, em conformidade com a LGPD (BRASIL, 2018).

### Método de análise dos resultados esperados

A fundamentação será analisada por síntese narrativa estruturada, distinguindo evidência publicada, inferência de design e decisão técnica. O simulador será analisado pelos indicadores da Etapa 4, apresentados com denominadores explícitos: cobertura de requisitos e de objetivos educativos; conformidade por critério WCAG; defeitos por gravidade e situação; legibilidade; e concordância entre inspetores (percentual de concordância e coeficiente kappa de Cohen). Considera-se o objetivo 3 alcançado quando todos os requisitos ativos têm verificação registrada, os defeitos graves estão corrigidos e retestados, as limitações estão descritas e as recomendações de adaptação e de futura avaliação com usuários estão formuladas. Na Camada 1, a análise será descritiva, com IVC e, se houver teste de usabilidade, taxas de conclusão e categorias de erro e de ajuda.

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

Notas: (a) o simulador já existe como prova de conceito, o que concentra o desenvolvimento entre os meses 3 e 14 e libera tempo para fundamentação e avaliação; (b) "coleta/produção de dados" refere-se, na Camada 0, à extração de dados da literatura e dos recursos e à inspeção (os registros da busca integram a linha "Revisão bibliográfica e referencial teórico", meses 1–8); na Camada 1, somente se aprovada, à atividade com pessoas (meses 14 a 19); (c) a submissão ao CEP só é possível após a matrícula e, por isso, ocupa os meses 5 a 9, com folga para pendências, e só se aplica à Camada 1; (d) as disciplinas são exclusivamente a distância, e o Simpósio Inaugural é presencial e obrigatório; (e) a Etapa 2 do método (objetivos educativos e requisitos, meses 4–10) é executada dentro das linhas "Delimitação e planejamento metodológico" (meses 1–6) e "Desenvolvimento da solução/produto" (meses 3–14). [CONFIRMAR exame de qualificação e demais prazos na Deliberação.]

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

Sistema autor-data (ABNT NBR 10520:2023); referências conforme ABNT NBR 6023:2018. Entradas marcadas com ▲ ainda têm metadados a conferir.

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

E FORMATAÇÃO — MODELO

[Manter o título e o conteúdo conforme o modelo, se o Programa confirmar que o item faz parte do arquivo enviado — D9.]
