# Matriz inicial de evidências, requisitos e decisões

> **Status: preliminar.** Esta matriz organiza a fundamentação relacionada ao tema escolhido; não equivale a revisão sistemática, avaliação formal da qualidade da evidência ou validação clínica. As referências e seus metadados devem ser conferidos antes da versão final do anteprojeto.

**Enquadramento do projeto:** linha “2) Tecnologias para Educação em Saúde”; tipo “Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde”. Os requisitos devem priorizar prática guiada de tarefas digitais de teleconsulta, linguagem clara, acessibilidade e feedback, sem presumir aprendizagem duradoura ou eficácia clínica.

## 1. Matriz de rastreabilidade

A busca oficial estruturada ainda não foi executada com contagens/exportações; consultar [registro de execução das buscas](registro-busca-estruturada-2026-10-20.md). A inspeção estática parcial do protótipo foi registrada em [registro de auditoria estática](registro-auditoria-estatica-2026-10-20.md), sem substituir verificações manuais. A relação entre objetivos educativos, requisitos funcionais e nomes de testes automatizados está resumida na [matriz de rastreabilidade entre objetivos, requisitos e testes](matriz-rastreabilidade-objetivos-requisitos-testes-2026-10-24.md); ela documenta cobertura prevista, não comprova execução recente nem substitui a auditoria manual.

| Tema | Referência inicial | Implicação para o projeto | Requisito ou decisão de produto | Evidência ainda necessária |
|---|---|---|---|---|
| Acessibilidade em telessaúde | WHO; ITU (2022), *WHO-ITU global standard for accessibility of telehealth services* | A acessibilidade deve ser tratada como requisito do serviço digital, não como acabamento posterior. | Interface responsiva; foco visível; rótulos claros; linguagem compreensível; navegação por teclado e toque. | Extrair os critérios aplicáveis ao protótipo e registrar como cada um será verificado. |
| Avaliação de intervenções digitais | WHO (2019), *WHO guideline: recommendations on digital interventions for health system strengthening* | Benefícios, limitações, aceitabilidade e viabilidade precisam ser considerados; tecnologia não deve ser tratada como solução isolada. | Escopo pequeno; avaliação de usabilidade e compreensão; limitações declaradas; sem alegações de eficácia clínica. | Identificar estudos comparáveis e critérios de avaliação adequados ao contexto brasileiro. |
| Literacia em saúde digital | Norman; Skinner (2006), *eHealth literacy: essential skills for consumer health in a networked world* | Familiaridade com informação digital pode afetar como a pessoa encontra e interpreta conteúdo de saúde. | Não pressupor alta familiaridade digital; instruções diretas; tarefas que revelem dificuldades de localização e compreensão. | Buscar estudos recentes e brasileiros sobre literacia digital em contextos de telessaúde. |
| Instrumento de literacia digital | Norman; Skinner (2006), *eHEALS: the eHealth Literacy Scale* | A escala aborda literacia em saúde digital percebida; não mede por si só usabilidade do protótipo nem compreensão de uma orientação específica. | Não adotar automaticamente a escala; justificar qualquer instrumento em função da pergunta e da população. | Verificar validação em português brasileiro, adequação ao público e permissões/condições de uso. |
| Treinamento de usuários para telessaúde | Galvin et al. (2024), revisão de escopo, DOI 10.2196/57586 | O treinamento de usuários tem formatos variados; as iniciativas mapeadas incluíram telefonemas preparatórios, instruções escritas e apoio para ajustes técnicos. A evidência de melhoria de competência foi limitada e mista. | Três cenários de prática com escolha e feedback contextual; medir tarefas específicas sem afirmar eficácia antes de avaliar. | Concluir a busca oficial e comparar recursos posteriores e em português; conferir o texto integral. |
| Recurso autoguiado comparável | BridgingApps, Digital House Calls (página do mantenedor) | Há curso autoguiado com vídeos e roteiro antes/durante/depois, em inglês e espanhol. | Comparar organização pedagógica, formatos e público; não afirmar originalidade antes do benchmarking. | Examinar as lições e recursos de acessibilidade; incluir outros recursos brasileiros. |
| Prontidão e proficiência digital | NCFH, Patient Telehealth Readiness Assessment Tool; Raymundo et al. (2024), MDPQ brasileiro | Ferramentas existentes podem inspirar dimensões e tarefas, mas não são automaticamente adequadas ao nosso público ou à consulta simulada. | Tratar familiaridade como desempenho em tarefas e separar acesso, ajuda, confiança e acessibilidade. | Ler os instrumentos integralmente e justificar se/quando serão utilizados. |
| Contraste não textual | W3C, WCAG 2.2, critério 1.4.11 | A informação visual necessária para identificar controles/estados deve ter contraste suficiente em relação às cores adjacentes (3:1 quando o critério se aplica). | Variável de borda alterada para #7d8c99; contraste calculado no verificador estático. | Inspecionar bordas significativas e estados reais na interface; confirmar manualmente em dispositivos. |
| Ética em pesquisa com pessoas | CNS (2012), Resolução nº 466/2012; CNS (2016), Resolução nº 510/2016, conforme aplicabilidade | O desenho final deve ser analisado para determinar os procedimentos éticos e institucionais pertinentes. | Nenhum recrutamento ou coleta antes das verificações e aprovações aplicáveis; minimização de dados; consentimento conforme protocolo. | Confirmar com orientação e instituição as normas aplicáveis ao desenho definitivo e o trâmite necessário. |

## 2. Rastreabilidade dos requisitos do simulador escolhido

**Decisão vigente:** Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital. O simulador trabalha apenas com cenários fictícios e não abre conexões com uma teleconsulta real.

| ID | Requisito / objetivo de aprendizagem | Justificativa | Como verificar sem participantes | Estado |
|---|---|---|---|---|
| OA-01 | Reconhecer passos básicos de preparação do aparelho e do ambiente | Reduzir a complexidade percebida por meio de sequência clara | Conferir instruções e testar checklist local | Fluxo automatizado aprovado; revisão pedagógica e teste manual pendentes |
| OA-02 | Responder à indisponibilidade de uma sala virtual fictícia | Praticar conferir conexão/link oficial e pedir ajuda por canal conhecido | Selecionar resposta segura/insegura e conferir feedback; verificar ausência de requisição real | Testado pela CI de 20/10/2026; teste manual e revisão pedagógica pendentes |
| OA-03 | Escolher uma resposta segura diante de falha de áudio simulada | Prática contextual de controle e comunicação de dificuldade | Testar respostas corretas/incorretas, os controles locais e o feedback | Testado pela CI de 20/10/2026; teste manual e revisão pedagógica pendentes |
| OA-04 | Pedir repetição/esclarecimento em vez de fingir que entendeu | Praticar comunicação clara sem orientação clínica individual | Testar respostas corretas/incorretas e feedback contextual | Fluxo automatizado aprovado; revisão pedagógica e teste manual pendentes |
| OA-05 | Localizar e confirmar os próximos passos apresentados no cenário | Praticar confirmação de informação sem gerar recomendação clínica | Verificar hierarquia visual e conteúdo fictício | Incluído; revisão pedagógica e responsividade pendentes |
| RF-01 | Explicar finalidade e limites do simulador | Evitar confusão com serviço clínico ou plataforma oficial | Revisão textual da tela inicial e dos avisos | Implementado; retestar |
| RF-02 | Navegar entre três etapas sem conta | Simplicidade e baixo atrito | Percorrer todas as rotas em desktop e celular | Implementado; retestar |
| RF-03 | Manter todas as escolhas somente na sessão local | Privacidade por padrão | Inspecionar armazenamento, código e rede | Declarado; revalidar tecnicamente |
| RF-04 | Reiniciar e limpar a sessão | Permitir nova prática sem carregar escolhas anteriores | Preencher opções, reiniciar e conferir estado inicial/foco | Implementado; retestar |
| AQ-01 | Oferecer navegação por teclado e foco visível | Acessibilidade e orientação | Percorrer controles sem mouse e registrar falhas | Navegação básica automatizada aprovada; inspeção manual com tecnologias assistivas pendente |
| AQ-02 | Não depender apenas de cor para indicar estado | Acessibilidade e compreensão | Conferir rótulos, mensagens e estados | Testar após alteração do texto |
| AQ-03 | Legibilidade em celular, zoom e diferentes navegadores | Uso em contextos variados | Testes Playwright e testes manuais em tamanhos/dispositivos definidos | Automatização existente; repetição pendente |
| AQ-04 | Dar feedback simples e não punitivo | Apoiar a prática sem aumentar a carga cognitiva | Acionar estados vazios, respostas corretas/incorretas e reinicialização | Implementado; retestar |

## 3. Lacunas prioritárias para o Treino de Teleconsulta

A revisão de escopo de Galvin et al. (2024) é evidência diretamente pertinente ao treinamento de usuários, mas identifica formatos predominantemente mediados e evidência limitada/mista de melhoria de competência. O curso Digital House Calls, em inglês e espanhol, demonstra que já existem recursos autoguiados com vídeos e plano antes/durante/depois. Portanto, **a lacuna de um simulador autoguiado em português permanece hipótese a verificar**, não conclusão desta matriz. Ver [Nota de evidências e decisões de 20/10/2026](nota-evidencias-e-decisoes-teleconsulta-2026-10-20.md).

1. Estudos empíricos sobre preparação/treinamento de usuários para teleconsultas e prática de tarefas digitais.
2. Recursos ou simuladores existentes que ensinem entrada em sala virtual, uso de controles e resposta a problemas técnicos simples.
3. Instrumentos de usabilidade disponíveis em português brasileiro e adequados ao desenho exploratório.
4. Evidências sobre pessoas que necessitam de apoio digital, sem presumir homogeneidade por idade ou escolaridade.
5. Recomendações nacionais de privacidade, segurança e governança aplicáveis ao protótipo e à coleta de dados planejada.

## 4. Modelo para registrar novas referências

Para cada estudo incluído, registrar:

- Referência bibliográfica completa, DOI ou URL estável e data de acesso.
- Base consultada, estratégia de busca e motivo de inclusão.
- Pergunta, desenho e contexto do estudo.
- População e características relevantes para a aplicabilidade.
- Tecnologia ou intervenção avaliada.
- Medidas de usabilidade, compreensão ou utilidade.
- Resultados principais e limitações.
- Implicação específica para o anteprojeto ou para o protótipo.
- Limites de transferência dos resultados para o contexto de Guaraí.

## 5. Regra para atualizar a matriz

Uma referência só deve justificar uma decisão específica quando o texto integral ou resumo confiável sustentar essa relação. Distinguir sempre: (a) resultado observado em estudo; (b) recomendação de diretriz; (c) decisão de design do projeto; e (d) hipótese ainda não testada. Não transformar uma decisão de design em afirmação de eficácia.


## 6. Evidências adicionadas na busca de 17/10/2026

As fontes abaixo foram localizadas em páginas oficiais de organizações, periódicos ou repositórios bibliográficos. O resumo é uma triagem inicial, não uma avaliação crítica completa dos artigos.

| Fonte | Tipo e achado útil | Aplicação no projeto | Limitação de interpretação |
|---|---|---|---|
| WHO; ITU (2024), *Implementation toolkit for accessible telehealth services*. https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities | Ferramenta de implementação que complementa o padrão global de acessibilidade de 2022 e recomenda incorporar acessibilidade desde o planejamento. | Transformar acessibilidade em checklist desde o início; incluir testes de teclado, foco, telas pequenas e requisitos de tecnologias assistivas conforme o escopo do protótipo. | Diretriz de serviço; não comprova que este protótipo específico atende aos requisitos. |
| W3C (2024), *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/ | Recomendação técnica publicada em 12/12/2024; inclui foco visível, foco não encoberto, navegação por teclado e tamanho mínimo de alvos de ponteiro. | Referência técnica para auditoria de interface; usar critérios pertinentes ao protótipo e registrar o que foi e não foi testado. | A conformidade não pode ser declarada só com inspeção do código; exige avaliação mais abrangente. |
| Santos MR et al. (2023), *The Brazilian version of the telehealth usability questionnaire (telehealth usability questionnaire Brazil): translation, cross-cultural adaptation, and psychometric properties*. Revista da Associação Médica Brasileira, 69(12):e20230228. DOI: https://doi.org/10.1590/1806-9282.20230228 | Estudo metodológico de adaptação transcultural e propriedades psicométricas de questionário de usabilidade em telessaúde para português brasileiro. | Candidato a instrumento para discussão com a orientação se a pergunta e o protótipo forem compatíveis. | Foi desenvolvido para avaliar usabilidade de telessaúde; a adequação a um protótipo breve e demonstrativo deve ser justificada. Verificar condições de uso e texto integral. |
| Jiang X et al. (2024), *The level of electronic health literacy among older adults: a systematic review and meta-analysis*. Archives of Public Health, 82:204. DOI: https://doi.org/10.1186/s13690-024-01428-9 | Revisão sistemática e metanálise de 48 estudos, totalizando 33.919 adultos mais velhos; relata heterogeneidade substancial entre estudos e diferenças de literacia digital em saúde. | Reforça a necessidade de não presumir familiaridade digital uniforme; usar linguagem direta, controles claros e tarefas que observem dificuldades. | Estudos incluídos usaram eHEALS e são heterogêneos; resultados agregados não descrevem automaticamente o público de Guaraí. |
| Dunnett J et al. (2025), *Effectiveness and acceptability of interventions to improve readability of patient healthcare materials: A narrative systematic review*. Public Health, 248:105937. DOI: https://doi.org/10.1016/j.puhe.2025.105937 | Revisão de 30 estudos; linguagem simplificada e estruturação visual foram associadas, em geral, a melhor compreensão e preferência, enquanto efeitos sobre adesão e desfechos clínicos foram mistos. | Apoia testar compreensão diretamente e usar frases curtas e organização visual; não basta declarar que o texto é simples. | A revisão relata limitações metodológicas e evidência limitada para efeitos de longo prazo; não sustenta alegações de impacto clínico. |

### Consequências para os requisitos

1. Manter linguagem simples, mas testar compreensão com tarefas específicas, sem confundir legibilidade com compreensão.
2. Usar a WCAG 2.2 como referência técnica de verificação, sem afirmar conformidade integral após uma revisão estática.
3. Discutir o TUQ Brazil com a orientação como opção possível, não como instrumento já selecionado.
4. Evitar tratar adultos como um grupo digitalmente homogêneo; o protocolo deve considerar variedade de experiência e acessibilidade.
5. Não concluir que usabilidade ou clareza do protótipo melhora adesão, continuidade real do cuidado ou desfechos clínicos.


## 7. Relação com a busca bibliográfica estruturada

A síntese crítica e as estratégias de busca estão em [docs/busca-bibliografica-estruturada.md](busca-bibliografica-estruturada.md). Os estudos de Kim e Xie (2017), Daraz et al. (2018), Milanti et al. (2023), Santos et al. (2023), Jiang et al. (2024), Neves et al. (2025), Oliveira et al. (2025), Wiener e Abuhalimeh (2025) e Colussi et al. (2026) ajudam a sustentar requisitos de linguagem compreensível, acessibilidade e avaliação contextualizada. A síntese é provisória; a execução documentada das buscas nas interfaces oficiais, leitura integral e avaliação formal de qualidade ainda são necessárias.


## 9. Síntese focalizada de evidências e decisões — 19/10/2026

A revisão rápida em `docs/revisao-rapida-evidencias-e-recomendacoes.md` complementa esta matriz com fontes científicas e normas técnicas selecionadas. Ela não substitui a busca reproduzível nas bases oficiais, a triagem integral nem a avaliação formal da qualidade previstas no protocolo bibliográfico.

| Tema | Evidência ou diretriz selecionada | Implicação para o produto | Limite de interpretação / próximo teste |
|---|---|---|---|
| Legibilidade e compreensão | Dunnett et al. (2025), revisão sistemática narrativa de 30 estudos; Daraz et al. (2018), revisão sistemática de 157 estudos e 7.891 websites. | Usar linguagem direta, organização visual e explicação de termos; avaliar compreensão com tarefas e explicação em palavras próprias. | Estudos de legibilidade foram predominantemente de países de língua inglesa; resultados sobre adesão/desfechos clínicos são mistos. Não converter níveis escolares em inglês diretamente para português nem presumir efeito clínico. |
| Desenho centrado no usuário | Wang et al. (2022), umbrella review da experiência digital do paciente; Duffy et al. (2025), revisão sistemática de codesign em saúde digital. | Iterar com tarefas observadas e incluir perspectiva de usuários e profissionais; relacionar feedback a decisões de interface. | Métodos e resultados variam; desenho centrado no usuário não é prova de eficácia. A participação deve seguir o protocolo e as aprovações aplicáveis. |
| Instrumento de usabilidade | Santos et al. (2023), validação do TUQ-Brasil; Neves et al. (2025), avaliação mista do e-SUS Território com SUS e dados qualitativos. | Escolher um instrumento de acordo com o objeto avaliado e combiná-lo com indicadores diretos de tarefa. | TUQ-Brasil foi estudado com pessoas com experiência recente em telessaúde e contém 21 itens; sua adequação a um protótipo curto/simulado precisa ser justificada. Resultados do e-SUS Território não são benchmark direto para o Treino de Teleconsulta. |
| Acessibilidade | Padrão WHO-ITU (2022), toolkit WHO-ITU (2024), WCAG 2.2 e eMAG 3.1. | Testar foco, teclado, semântica, tecnologia assistiva, contraste, zoom e telas pequenas; registrar ambiente e evidência. | A correção pontual da cor do foco não comprova conformidade integral. Testes automáticos e inspeção estática não substituem avaliação prática. |
| Letramento em saúde digital | Wiener e Abuhalimeh (2025), revisão sistemática de 20 estudos com eHEALS. | Não presumir familiaridade digital uniforme; quando pertinente, descrever experiência dos participantes e barreiras. | eHEALS é autorreferida e não substitui medidas de usabilidade nem tarefas de compreensão; resultados internacionais não estimam o perfil de Guaraí. |
| Limites de resultado | OMS (2019), diretriz sobre intervenções digitais. | Limitar resultados esperados a usabilidade, compreensão em cenários definidos e utilidade percebida. | Não inferir melhora na continuidade real do cuidado, adesão ou desfechos clínicos a partir de teste simulado. |

**Decisões de seguimento:** (1) discutir com a orientação a escolha entre TUQ-Brasil e SUS, sem aplicar automaticamente ambos; (2) prever uma medida direta de compreensão além de uma pergunta de múltipla escolha; (3) concluir buscas reproduzíveis e avaliação crítica; (4) executar e documentar a bateria manual de acessibilidade. As quatro decisões permanecem pendentes até haver evidência de execução.


## 10. Evidências complementares localizadas em 19/10/2026

| Fonte | Achado relevante | Aplicação ao Treino de Teleconsulta | Limite e verificação necessária |
|---|---|---|---|
| Raanhuis et al. (2026), think-aloud em portal de pacientes com necessidades de apoio digital. DOI: 10.3233/SHTI260651. | Dificuldades para perceber o estado do sistema; menos problemas relatados entre quem recebeu instruções orais naquele contexto. | Garantir mensagens e estados perceptíveis após ações; observar se usuários compreendem feedback sem auxílio. | Estudo pequeno, internacional e sobre portal do paciente, não sobre este protótipo; verificar a hipótese em tarefas próprias, sem presumir que instrução oral será necessária. |
| Khairat et al. (2026), entrevistas multistakeholder sobre acesso e sustentabilidade da telessaúde. DOI: 10.7812/TPP/26.102. | As entrevistas destacam benefícios de acesso, mas também barreiras de conectividade, dispositivos, literacia digital, onboarding e fluxo de trabalho. | Incluir essas dimensões no roteiro exploratório de conversa institucional e não presumir que a interface resolva barreiras estruturais. | Estudo realizado nos EUA; usar como pauta de perguntas e não como estimativa do cenário brasileiro. |
| Duplaga (2025), usabilidade de consultas médicas remotas por telefone. DOI: 10.3233/SHTI251307. | Literacia digital, ansiedade tecnológica, idade e escolaridade associaram-se a escores autorreferidos de usabilidade em uma amostra de 1.661 adultos usuários de internet. | Considerar heterogeneidade de experiência e barreiras digitais ao definir as características a descrever no protocolo. | Estudo observacional da Polônia; não é diretamente generalizável ao contexto de Guaraí. |

A seleção e os limites da busca desta rodada estão registrados em [registro de busca exploratória complementar](registro-busca-exploratoria-2026-10-19.md); ela não substitui busca reprodutível nas interfaces oficiais.

## 10. Evidências metodológicas adicionais — busca exploratória de 20/10/2026

| Tema | Fonte | Consequência para requisito ou avaliação | Limite |
|---|---|---|---|
| Usabilidade pré-piloto de simulação educativa | Lesselroth et al. (2025), DOI 10.3233/SHTI250327; Lesselroth et al. (2026), DOI 10.3233/SHTI250237 e 10.3233/SHTI260636 | Incluir uma rubrica por tarefa, critérios prévios de sucesso parcial/total, tipo de ajuda e registro de problemas de fluxo/fidelidade; combinar conclusão de tarefa e comentário qualitativo na avaliação planejada. | Os estudos encontrados avaliam sobretudo simulações de telemedicina dirigidas a residentes/profissionais. Servem como referência metodológica adjacente, não como evidência direta de benefício a pacientes/usuários com baixa familiaridade digital. |
| Acessibilidade de telessaúde | WHO; ITU (2024), *Implementation toolkit for accessible telehealth services*. https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities | Ampliar a auditoria de acessibilidade para além do contraste: verificar conteúdo compreensível, ordem e visibilidade do foco, navegação por teclado e, onde pertinente, compatibilidade com tecnologia assistiva e alternativas a conteúdos audiovisuais. | Trata-se de orientação para acessibilidade de serviços de telessaúde. A referência ajuda a planejar a auditoria, mas não prova conformidade automática do protótipo. |

**Registro de procedência:** a rodada de 20/10/2026 foi exploratória na web; buscas oficiais reproduzíveis nas interfaces PubMed/MEDLINE, BVS/LILACS e SciELO, com exportação e contagens, continuam pendentes. Consulte [Registro da busca exploratória complementar — 20/10/2026](registro-busca-exploratoria-2026-10-20.md).


## 11. Benchmark exploratório de recursos existentes — 20/10/2026

O [mapa preliminar de objetivos educativos e tarefas](mapa-objetivos-educativos-e-tarefas.md) explicita a relação entre objetivos, cenários, feedback e verificações internas. O [benchmark de recursos existentes](benchmark-recursos-existentes.md) identifica materiais públicos que ajudam a preparar usuários para teleconsulta. O levantamento é exploratório, não exaustivo e não constitui teste comparativo de eficácia.

| Fonte/recurso | O que acrescenta à matriz | Requisito ou decisão provisória | Limite |
|---|---|---|---|
| Galvin et al. (2024), revisão de escopo | Treinamentos de usuários frequentemente usam instruções e apoio técnico; evidência de melhora de competência é limitada/mista. | Não prometer eficácia; manter resultados esperados proporcionais à avaliação realizada. | Busca da revisão primária até junho de 2023; heterogeneidade dos estudos. |
| BridgingApps — Digital House Calls | Curso autoguiado com vídeos e estrutura antes/durante/depois. | Comparar conteúdo e funcionalidades; não alegar originalidade pelo simples uso dessa sequência. | Página pública examinada, não curso integralmente auditado. |
| TelessaúdeBA — tutorial do paciente | Etapas de acesso a um serviço brasileiro específico. | Considerar tarefas de acesso, mas manter exemplos fictícios e nunca pedir CPF ou dados reais. | Fluxo local específico; não universalizar. |
| HHS — guias de preparação | Dispositivo, conexão, ambiente, privacidade e apoio técnico. | Verificar se a preparação cobre dispositivo/ambiente e alternativas seguras. | Contexto dos EUA; transferibilidade precisa de análise. |
| NCFH — readiness tool | Prontidão inclui recursos, conectividade e necessidade de treinamento. | Considerar barreiras estruturais na fundamentação; não adicionar questionário de prontidão ao produto mínimo sem justificativa. | Ferramenta para uso mediado por equipe, contexto norte-americano. |
| WHO/ITU (2024) | Recomenda integrar acessibilidade ao planejamento da telessaúde. | Traduzir recomendações aplicáveis em itens verificáveis na auditoria técnica/manual. | Diretriz de serviços, não avaliação direta do protótipo. |

**Próxima ação:** verificar o conteúdo completo dos recursos comparadores mais próximos, executar buscas oficiais reproduzíveis e mapear cada requisito ao protótipo e a um teste interno. Não inferir validação por usuários nem eficácia educativa.


## 12. Verificação operacional dos requisitos

Para transformar os requisitos derivados da literatura e do benchmark em inspeção verificável, foi criado o [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md). Ele relaciona cada requisito B-01–B-08 a áreas da interface, testes propostos e estado de verificação. Os itens manuais continuam pendentes; a existência do roteiro não deve ser descrita como execução da auditoria.
