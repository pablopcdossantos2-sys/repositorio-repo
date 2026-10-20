# Matriz inicial de evidências, requisitos e decisões

> **Status: preliminar.** Esta matriz organiza a fundamentação já listada no repositório; não equivale a revisão sistemática, avaliação formal da qualidade da evidência ou validação clínica. As referências e seus metadados devem ser conferidos antes da versão final do anteprojeto.

## 1. Matriz de rastreabilidade

| Tema | Referência inicial | Implicação para o projeto | Requisito ou decisão de produto | Evidência ainda necessária |
|---|---|---|---|---|
| Acessibilidade em telessaúde | WHO; ITU (2022), *WHO-ITU global standard for accessibility of telehealth services* | A acessibilidade deve ser tratada como requisito do serviço digital, não como acabamento posterior. | Interface responsiva; foco visível; rótulos claros; linguagem compreensível; navegação por teclado e toque. | Extrair os critérios aplicáveis ao protótipo e registrar como cada um será verificado. |
| Avaliação de intervenções digitais | WHO (2019), *WHO guideline: recommendations on digital interventions for health system strengthening* | Benefícios, limitações, aceitabilidade e viabilidade precisam ser considerados; tecnologia não deve ser tratada como solução isolada. | Escopo pequeno; avaliação de usabilidade e compreensão; limitações declaradas; sem alegações de eficácia clínica. | Identificar estudos comparáveis e critérios de avaliação adequados ao contexto brasileiro. |
| Literacia em saúde digital | Norman; Skinner (2006), *eHealth literacy: essential skills for consumer health in a networked world* | Familiaridade com informação digital pode afetar como a pessoa encontra e interpreta conteúdo de saúde. | Não pressupor alta familiaridade digital; instruções diretas; tarefas que revelem dificuldades de localização e compreensão. | Buscar estudos recentes e brasileiros sobre literacia digital em contextos de telessaúde. |
| Instrumento de literacia digital | Norman; Skinner (2006), *eHEALS: the eHealth Literacy Scale* | A escala aborda literacia em saúde digital percebida; não mede por si só usabilidade do protótipo nem compreensão de uma orientação específica. | Não adotar automaticamente a escala; justificar qualquer instrumento em função da pergunta e da população. | Verificar validação em português brasileiro, adequação ao público e permissões/condições de uso. |
| Ética em pesquisa com pessoas | CNS (2012), Resolução nº 466/2012; CNS (2016), Resolução nº 510/2016, conforme aplicabilidade | O desenho final deve ser analisado para determinar os procedimentos éticos e institucionais pertinentes. | Nenhum recrutamento ou coleta antes das verificações e aprovações aplicáveis; minimização de dados; consentimento conforme protocolo. | Confirmar com orientação e instituição as normas aplicáveis ao desenho definitivo e o trâmite necessário. |

## 2. Rastreabilidade dos requisitos do protótipo

| ID | Requisito | Justificativa atual | Como verificar sem participantes | Estado |
|---|---|---|---|---|
| RF-01 | Explicar finalidade e limites | Segurança de uso e prevenção de interpretação como sistema clínico | Revisão textual da tela inicial e avisos | Implementado; revisar redação |
| RF-02 | Navegar entre os três módulos sem conta | Simplicidade e baixo atrito | Percorrer todas as rotas em computador e celular | Implementado; testar responsividade |
| RF-03 | Checklist pré-atendimento | Apoiar a preparação da conversa | Marcar, desmarcar e reiniciar itens | Implementado |
| RF-04 | Exemplo de orientação em linguagem clara | Demonstrar apresentação de informação sem gerar conduta clínica | Revisão de linguagem e identificação visível como exemplo fictício | Implementado; manter conteúdo fictício |
| RF-05 | Organizar próximos passos | Demonstrar organização de ações informadas pelo serviço | Conferir hierarquia visual e leitura em tela pequena | Implementado |
| RF-06 | Reiniciar e limpar a sessão | Permitir nova demonstração sem carregar escolhas anteriores | Preencher opções, reiniciar e conferir estado inicial | Implementado; incluir no checklist técnico |
| RF-07 | Utilizar cenários fictícios | Reduzir risco de exposição de dados reais na demonstração | Inspecionar textos e conteúdo do repositório | Implementado na versão atual; revisar em cada alteração |
| RF-08 | Não coletar nem transmitir dados identificáveis | Privacidade e escopo de protótipo | Inspecionar código, armazenamento local, requisições de rede e dependências | Declarado no projeto; precisa de verificação técnica documentada |
| AQ-01 | Navegação por teclado e foco visível | Acessibilidade | Percorrer todos os controles sem mouse e registrar falhas | Parcialmente previsto; testar |
| AQ-02 | Não depender apenas de cor | Acessibilidade e compreensão | Conferir rótulos, estados e mensagens sem depender de distinção cromática | Verificar |
| AQ-03 | Legibilidade em celular e computador | Uso em diferentes telas | Teste manual em larguras e navegadores distintos | Pendente |
| AQ-04 | Mensagens claras de erro e feedback | Orientação explícita durante a tarefa | Acionar estados vazios, respostas corretas/incorretas e reinicialização | Implementado parcialmente; revisar consistência |

## 3. Lacunas prioritárias da revisão

1. Estudos empíricos de usabilidade de serviços ou ferramentas de telessaúde com adultos.
2. Estudos sobre compreensão de orientações transmitidas remotamente e linguagem simples em saúde.
3. Instrumentos de usabilidade disponíveis em português brasileiro e adequados ao desenho exploratório.
4. Evidências sobre barreiras de acessibilidade e literacia digital em pessoas com diferentes níveis de escolaridade e experiência tecnológica.
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
| Instrumento de usabilidade | Santos et al. (2023), validação do TUQ-Brasil; Neves et al. (2025), avaliação mista do e-SUS Território com SUS e dados qualitativos. | Escolher um instrumento de acordo com o objeto avaliado e combiná-lo com indicadores diretos de tarefa. | TUQ-Brasil foi estudado com pessoas com experiência recente em telessaúde e contém 21 itens; sua adequação a um protótipo curto/simulado precisa ser justificada. Resultados do e-SUS Território não são benchmark direto para o Conversa Clara. |
| Acessibilidade | Padrão WHO-ITU (2022), toolkit WHO-ITU (2024), WCAG 2.2 e eMAG 3.1. | Testar foco, teclado, semântica, tecnologia assistiva, contraste, zoom e telas pequenas; registrar ambiente e evidência. | A correção pontual da cor do foco não comprova conformidade integral. Testes automáticos e inspeção estática não substituem avaliação prática. |
| Letramento em saúde digital | Wiener e Abuhalimeh (2025), revisão sistemática de 20 estudos com eHEALS. | Não presumir familiaridade digital uniforme; quando pertinente, descrever experiência dos participantes e barreiras. | eHEALS é autorreferida e não substitui medidas de usabilidade nem tarefas de compreensão; resultados internacionais não estimam o perfil de Guaraí. |
| Limites de resultado | OMS (2019), diretriz sobre intervenções digitais. | Limitar resultados esperados a usabilidade, compreensão em cenários definidos e utilidade percebida. | Não inferir melhora na continuidade real do cuidado, adesão ou desfechos clínicos a partir de teste simulado. |

**Decisões de seguimento:** (1) discutir com a orientação a escolha entre TUQ-Brasil e SUS, sem aplicar automaticamente ambos; (2) prever uma medida direta de compreensão além de uma pergunta de múltipla escolha; (3) concluir buscas reproduzíveis e avaliação crítica; (4) executar e documentar a bateria manual de acessibilidade. As quatro decisões permanecem pendentes até haver evidência de execução.
