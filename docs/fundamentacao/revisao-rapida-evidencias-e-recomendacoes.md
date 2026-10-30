# Revisão rápida de evidências e recomendações para o produto

**Data da revisão:** 19/10/2026  
**Projeto:** Treino de Teleconsulta — solução tecnológica de educação em saúde no contexto de telessaúde  
**Finalidade:** atualizar decisões de desenho e avaliação com base em evidências científicas e diretrizes técnicas relevantes.

**Decisão de escopo:** a partir de 20/10/2026, o único tema ativo é o Treino de Teleconsulta. Esta revisão contém evidências gerais sobre experiência digital, acessibilidade, linguagem clara e usabilidade em telessaúde; elas orientam a concepção, mas não devem ser interpretadas como prova de eficácia do simulador educativo proposto. É necessário completar a busca reproduzível e comparar produtos existentes específicos de preparação/treinamento para teleconsulta.

> **Limite metodológico importante.** Este documento é uma revisão rápida e focalizada de fontes selecionadas, não uma revisão sistemática concluída. A seleção foi dirigida à pergunta do projeto e incluiu revisões sistemáticas/umbrella reviews, um estudo brasileiro de validação de instrumento, um estudo de usabilidade em serviço brasileiro e documentos normativos oficiais. Não foram executadas aqui as buscas reproduzíveis nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO, nem um processo completo de deduplicação, triagem e avaliação formal de risco de viés. Portanto, esta síntese orienta decisões, mas **não substitui** a etapa bibliográfica formal já prevista no projeto.

## 1. Síntese executiva

A evidência disponível sustenta priorizar linguagem compreensível, organização clara da informação, acessibilidade desde o início e avaliação baseada em tarefas. Isso é pertinente ao enquadramento como pesquisa tecnológica de uma solução inovadora para educação em saúde: o produto deve ser tratado como recurso educativo e a avaliação deve medir usabilidade, clareza e compreensão imediata de conteúdo fictício/validado. A evidência **não sustenta presumir** que uma interface com linguagem simplificada, isoladamente, gere aprendizagem duradoura, mude comportamentos ou melhore adesão, continuidade do cuidado ou desfechos clínicos.

As decisões mais importantes são:

1. **Se a orientação indicar uma etapa com participantes:** avaliar tarefas e compreensão por critérios prévios, sem depender apenas de uma nota geral ou de uma pergunta de múltipla escolha. No plano-base atual, a avaliação é por inspeção sem participantes.
2. Escolher com a orientação **um** instrumento de usabilidade que corresponda ao objeto avaliado. TUQ-Brasil é específico para sistemas de telessaúde; SUS é mais genérico. Nenhum deles mede, por si só, compreensão das orientações.
3. Inspecionar manualmente os critérios de acessibilidade aplicáveis, incluindo teclado, ampliação e tecnologias assistivas. Um teste com usuários é condicional e não substitui a auditoria de acessibilidade; ferramentas automáticas também não provam conformidade integral.
4. Manter usuários adultos e profissionais de saúde como grupos analíticos distintos quando necessário, pois suas tarefas e contextos não são iguais.
5. Não acrescentar contas, integração com prontuários, IA ou envio de lembretes para responder à pergunta atual. Essas funções aumentariam o risco e o escopo sem serem necessárias à avaliação preliminar proposta.

## 2. Achados das fontes e sua aplicabilidade

### 2.1 Linguagem simples, legibilidade e compreensão

A revisão sistemática narrativa de Dunnett e colaboradores incluiu 30 estudos de intervenções para melhorar a legibilidade de materiais de saúde. A maioria avaliou linguagem simplificada, organização visual ou recursos gráficos. Os resultados tenderam a favorecer a compreensão e a preferência dos pacientes, mas os efeitos sobre adesão e desfechos de saúde foram mistos, poucos estudos mostraram melhorias estatisticamente significativas e a qualidade geral dos estudos foi descrita como baixa. A maior parte dos estudos veio dos Estados Unidos, o que limita a transferência direta para o português brasileiro e para Guaraí.

Uma revisão sistemática anterior de Daraz e colaboradores incluiu 157 estudos que avaliaram 7.891 websites dos Estados Unidos e do Canadá; os níveis médios de legibilidade foram estimados entre 10º e 15º ano escolar, acima da recomendação então discutida pelos autores. Esse achado demonstra um problema recorrente em conteúdo de saúde online, mas os níveis escolares calculados para inglês não devem ser convertidos diretamente em uma meta para conteúdo em português brasileiro.

**Implicação para o protótipo:** usar frases curtas, explicar termos necessários e organizar a informação em blocos. A compreensão pelo público-alvo não será afirmada no plano-base; se a orientação solicitar etapa com participantes, deverá ser examinada por procedimento e rubrica definidos previamente. Não considerar pontuação automática de legibilidade como prova suficiente de compreensão.

**Melhoria recomendada:** na tarefa de compreensão, além de uma resposta estruturada, pedir ao participante para explicar em palavras próprias a ideia principal e o próximo passo do cenário fictício. Definir previamente uma rubrica simples para classificar a resposta (por exemplo: compreendeu o passo principal; compreensão parcial; interpretação incorreta). A formulação, o procedimento e a análise devem ser discutidos com a orientação e incluídos no protocolo antes de qualquer pesquisa com participantes.

Fontes: [Dunnett et al., 2025](https://doi.org/10.1016/j.puhe.2025.105937); [Daraz et al., 2018](https://doi.org/10.1177/1062860617751639).

### 2.2 Experiência digital do paciente e desenho centrado no usuário

Uma umbrella review sobre experiência digital do paciente analisou 45 revisões selecionadas entre 173 registros. Os autores organizaram os fatores que influenciam a experiência em nove categorias, incluindo capacidade, oportunidade e motivação dos usuários, tecnologia e funcionalidade, interação, ambiente organizacional, ambiente físico e ambiente social. Entre os elementos de desenho relevantes, destacaram informação, navegação, visualização e personalização, além de abordagens centradas no usuário, participativas e inclusivas. A própria revisão relata diversidade importante entre os estudos e frequentemente encontra resultados temáticos/descritivos, o que recomenda usar os achados como orientação de desenho, não como prova de efeito causal.

Uma revisão sistemática de 2025 sobre codesign em intervenções digitais de saúde incluiu 171 estudos. Identificou abordagens variadas e desafios ligados à participação, ao contexto de uso, aos testes e a custos/escala. Isso favorece um processo iterativo pragmático em vez de uma especificação decidida exclusivamente por quem desenvolve o produto.

**Implicação para o protótipo:** manter a interface pequena e registrar, por inspeção, problemas de navegação, conteúdo e contexto previstos. Caso uma etapa com participantes seja aprovada, relacionar observações a tarefas, contexto de uso e decisões específicas de interface; não limitar a avaliação a perguntar se “gostaram”.

**Melhoria recomendada:** organizar ciclos curtos de inspeção e correção no plano-base. Se houver etapa condicional com pessoas, planejar ciclos após as aprovações aplicáveis e separar feedback de usuários adultos e profissionais quando as tarefas ou expectativas forem diferentes.

Fontes: [Wang et al., 2022 — Digital Patient Experience: Umbrella Systematic Review](https://doi.org/10.2196/37952); [Duffy et al., 2025 — Examining Challenges to Co-Design Digital Health Interventions With End Users](https://doi.org/10.2196/50178).

### 2.3 Como medir usabilidade: TUQ-Brasil, SUS e tarefas

O estudo de adaptação transcultural do Telehealth Usability Questionnaire para o português brasileiro (TUQ-Brasil) avaliou as propriedades psicométricas do questionário em 54 pessoas com experiência recente em telessaúde: 30 pacientes e 24 profissionais de saúde. Os autores relataram índice de validade de conteúdo de 0,96, consistência interna elevada (alfa de Cronbach e ômega de McDonald de 0,94), confiabilidade teste-reteste com ICC de 0,85 e correlação moderada com a System Usability Scale (SUS; r=0,52). O TUQ-Brasil tem 21 itens e foi desenvolvido para avaliar a utilidade/usabilidade de sistemas de telessaúde.

Esses resultados tornam o TUQ-Brasil um candidato relevante, mas não demonstram que ele seja automaticamente adequado a um protótipo breve que não realiza uma teleconsulta e que usa cenários fictícios. A amostra de validação tinha experiência prévia com sistemas de telessaúde; além disso, a modalidade avaliada não foi uniforme. A SUS é mais genérica e contém 10 itens, mas mede usabilidade percebida e não substitui uma avaliação direta de compreensão ou utilidade clínica.

Um estudo brasileiro de 2025 avaliou o aplicativo e-SUS Território com Agentes Comunitários de Saúde por método misto, utilizando SUS e análise qualitativa. O escore médio SUS foi 55,3, descrito pelos autores como aceitação marginal; problemas de sincronização e registro também foram identificados. Trata-se de um aplicativo profissional de trabalho, e não de um protótipo para pacientes, portanto esse resultado **não deve ser usado como benchmark numérico direto** para o Treino de Teleconsulta. Sua contribuição relevante é metodológica: combinar medida de usabilidade com investigação qualitativa das dificuldades de uso e do contexto.

**Recomendação de decisão:** discutir com a orientação e escolher um instrumento, com justificativa explícita:
- **TUQ-Brasil:** considerar se o objeto e as tarefas forem suficientemente próximos de um sistema/serviço de telessaúde para que os 21 itens façam sentido.
- **SUS:** considerar como medida geral da usabilidade da interface se o foco for o protótipo web em si.
- **Tarefas observadas:** em qualquer opção, medir conclusão sem ajuda, necessidade de ajuda, erros e pontos de bloqueio; avaliar compreensão separadamente.

Não aplicar TUQ-Brasil e SUS automaticamente em conjunto. A escolha deve considerar o tamanho e o tipo do estudo, a carga para os participantes, a pergunta de pesquisa e as condições de uso dos instrumentos.

Fontes: [Santos et al., 2023 — TUQ-Brasil](https://doi.org/10.1590/1806-9282.20230228); [Neves et al., 2025 — e-SUS Território](https://revista.saudeemdebate.org.br/sed/article/view/9774).

### 2.4 Letramento em saúde digital

Uma revisão sistemática publicada em 2025 examinou 20 estudos de adultos que utilizaram eHEALS. O escore médio ponderado foi 24,3 em uma escala de 8 a 40, com variação expressiva entre estudos (médias de 12,57 a 35,1). A revisão é restrita a pesquisas que empregaram a eHEALS e a literatura elegível, e seus resultados não representam uma estimativa da literacia digital de adultos em Guaraí.

A eHEALS é uma medida autorreferida de letramento em saúde digital; não é, isoladamente, uma medida de usabilidade do protótipo nem uma prova de que alguém compreende uma instrução específica.

**Implicação para o projeto:** não presumir que todos os usuários têm a mesma familiaridade com celulares ou com informações digitais. Se a experiência digital for relevante à pergunta de pesquisa, decidir com a orientação se deve ser caracterizada — sem substituir tarefas de uso ou perguntas de compreensão por uma escala autorreferida.

Fonte: [Wiener & Abuhalimeh, 2025](https://doi.org/10.1371/journal.pdig.0001075).

### 2.5 Acessibilidade digital

O padrão global WHO-ITU de 2022 trata requisitos técnicos de acessibilidade para serviços de telessaúde. O toolkit conjunto da OMS e da ITU, publicado em 2024, orienta a implementação de acessibilidade no planejamento e no desenvolvimento de serviços. Ambos destacam que barreiras de interface e incompatibilidade com tecnologias assistivas podem excluir pessoas com deficiência e outros grupos marginalizados.

No Brasil, o eMAG 3.1 é uma referência nacional de recomendações de acessibilidade para páginas e portais de governo. Para esta auditoria técnica, deve ser usado em conjunto com a WCAG 2.2 do W3C, publicada posteriormente e com critérios específicos mais recentes. A aplicação do eMAG a este projeto é uma referência útil de boas práticas, não uma alegação de que o protótipo é um serviço oficial de governo.

A correção realizada em `produto/styles.css` mudou a cor do foco para `#005fcc`. O contraste calculado dessa cor é 5,98:1 sobre branco e 5,57:1 sobre o fundo `#f4f7fb`. Isso é uma verificação pontual de cores, não uma declaração de conformidade WCAG: ainda é necessário examinar tamanho e visibilidade do indicador, os demais elementos, o comportamento com zoom, navegação por teclado, leitores de tela e uso em navegador real.

**Lista mínima de verificação:**
- navegação por teclado, ordem de foco e foco claramente visível;
- nomes e agrupamentos semânticos dos controles;
- leitura dos feedbacks dinâmicos por tecnologia assistiva;
- contraste de texto, componentes, estados e foco;
- reflow/zoom em telas estreitas, sem sobreposição ou perda de conteúdo;
- alvo de interação, espaçamento e uso por toque;
- preferência por movimento reduzido;
- teste manual com ao menos uma combinação de navegador e leitor de tela disponível.

Fontes: [Padrão global WHO-ITU, 2022](https://www.who.int/publications/i/item/9789240050464); [Toolkit WHO-ITU, 2024](https://www.who.int/publications/i/item/9789240094161); [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/); [eMAG 3.1](https://emag.governoeletronico.gov.br/).

### 2.6 Contexto do serviço e limites da telessaúde digital

A OMS recomenda avaliar intervenções digitais considerando benefícios, danos, aceitabilidade, viabilidade, recursos e equidade, além de alertar que a tecnologia não substitui sistemas de saúde funcionais. Para o Treino de Teleconsulta, isso significa que a avaliação em tarefas simuladas pode produzir evidências sobre usabilidade e compreensão naquele contexto, mas não comprova melhora na continuidade real do cuidado, adesão ou desfechos clínicos.

Se houver acesso ao serviço real, é importante mapear antes o fluxo de preparação e de comunicação pós-atendimento, as responsabilidades da equipe e as limitações de conectividade. Se isso não for viável, a alternativa simulada precisa estar explícita na pergunta e nos objetivos e ser aprovada nos trâmites aplicáveis.

Fonte: [OMS, Recommendations on digital interventions for health system strengthening, 2019](https://www.who.int/publications/i/item/9789241550505).

### 2.7 Evidência recente (2025–2026): apoio digital, barreiras de acesso e usabilidade

Um estudo qualitativo de 2026 avaliou um portal do paciente com participantes que precisavam de apoio digital. Nas sessões de think-aloud, uma dificuldade relevante foi perceber o estado do sistema; os participantes que receberam instruções orais apresentaram menos problemas de usabilidade do que aqueles que receberam instruções por escrito ou nenhuma instrução. O estudo é pequeno e feito em outro país e outro tipo de sistema, mas reforça dois princípios úteis para o Treino de Teleconsulta: o sistema deve tornar o estado e o resultado das ações perceptíveis; instruções claras podem ser parte do contexto de uso, embora não devam substituir uma interface compreensível por si só.

Outro estudo qualitativo multicêntrico dos EUA, publicado em setembro de 2026, reuniu 62 participantes (40 pacientes, 15 profissionais e 7 gestores/políticos) para discutir acesso e sustentabilidade da telessaúde. Os entrevistados identificaram benefícios de acesso, mas também barreiras persistentes; entre as medidas propostas estavam conectividade de banda larga, acesso a dispositivos e pontos comunitários, apoio à literacia digital, plataformas simples e integração adequada ao fluxo de trabalho. Esses resultados não podem ser transferidos diretamente ao contexto brasileiro, mas sustentam incluir perguntas sobre conectividade, dispositivos e suporte disponível na conversa exploratória com o serviço local. Um protótipo de interface não resolverá, isoladamente, essas barreiras estruturais.

Em 2025, uma análise de 1.661 adultos usuários de internet na Polônia examinou visitas médicas remotas por telefone. Literacia em saúde digital, ansiedade tecnológica, idade e escolaridade apresentaram associação estatística com o escore de usabilidade; o estudo foi observacional e baseado em autorrelato, em sistema e contexto diferentes. A utilidade para o projeto é lembrar que a experiência digital não é homogênea, e não usar coeficientes ou estimativas desse país como previsão para Guaraí.

**Implicações adicionais:** (1) incluir na inspeção de interface se cada ação apresenta feedback compreensível; (2) planejar tarefas observadas com possibilidade de registrar necessidade de ajuda; (3) discutir se familiaridade digital e acesso a dispositivo/conectividade precisam ser descritos no protocolo; (4) mapear barreiras do serviço antes de propor funcionalidades. Não adicionar um modo de onboarding extenso automaticamente: primeiro testar se a interface existente pode ser compreendida e se instruções breves bastam.

Fontes: [Raanhuis et al., 2026](https://doi.org/10.3233/SHTI260651); [Khairat et al., 2026](https://doi.org/10.7812/TPP/26.102); [Duplaga, 2025](https://doi.org/10.3233/SHTI251307).

## 3. Recomendações priorizadas para o Treino de Teleconsulta

| Prioridade | Recomendação | Critério verificável de conclusão |
|---|---|---|
| P0 | Finalizar a busca bibliográfica formal | Estratégias efetivamente executadas, datas, resultados, duplicatas, exclusões e seleção documentados; leitura integral e avaliação crítica conforme o plano. |
| P0 | Definir pergunta, resultados e instrumento com a orientação | Protocolo descreve população, contexto, tarefas, medidas, análise e limites das inferências; questionário escolhido e justificado. |
| P0 | Confirmar cenário e aprovações aplicáveis | Registro das decisões institucionais e verificação dos trâmites éticos antes de atividades com participantes. |
| P1 | Reforçar a avaliação da compreensão | Além da opção estruturada, incluir resposta em palavras próprias a cenário fictício, com rubrica predefinida; aplicar só conforme o protocolo aprovado. |
| P1 | Preparar roteiro de observação de tarefas | Para cada tarefa, registrar sucesso, necessidade de ajuda, tipo de erro, dificuldade e observação contextual; não usar apenas tempo como sucesso. |
| P1 | Executar testes de acessibilidade e dispositivos | Ambiente, dimensões, zoom, teclado, leitor de tela, contraste e resultados registrados no relatório técnico. |
| P1 | Fechar a rastreabilidade dos requisitos | Cada requisito aponta para justificativa, implementação, teste realizado e resultado; pendências não são marcadas como concluídas sem evidência. |
| P2 | Introduzir automação mínima de qualidade | Verificação repetível de HTML e dos principais comportamentos, com instruções para executar localmente. |

## 4. Perguntas metodológicas para a orientação

1. O objeto principal é a usabilidade da interface, a compreensão das orientações, a utilidade percebida ou uma combinação claramente hierarquizada?
2. O TUQ-Brasil corresponde ao uso que se pretende avaliar, dado que a aplicação não realiza uma teleconsulta? A SUS, combinada com tarefas, seria mais adequada?
3. Como será definida e julgada uma resposta que demonstre compreensão do cenário, sem confundir reconhecimento entre alternativas com capacidade de explicar o próximo passo?
4. Os usuários adultos e os profissionais de saúde executarão tarefas iguais ou diferentes? Como os resultados serão apresentados separadamente?
5. Se a avaliação for simulada, os objetivos e as conclusões estarão explicitamente limitados à interface e à compreensão em tarefas controladas?

## 5. Afirmações que não devem ser feitas com a evidência atual

- Que o protótipo melhora a continuidade real do cuidado, adesão, segurança ou desfechos clínicos.
- Que a linguagem simplificada necessariamente produz melhores resultados de saúde.
- Que o protótipo atende integralmente à WCAG 2.2 ou funciona com todos os leitores de tela sem testes documentados.
- Que o escore obtido com uma escala de usabilidade demonstra compreensão das orientações.
- Que resultados de estudos estrangeiros ou de sistemas profissionais do SUS representam automaticamente a experiência de pacientes adultos em Guaraí.
- Que a parceria institucional ou as aprovações de pesquisa já estão confirmadas.

## 6. Referências selecionadas

1. **Dunnett J, Holkham J, Trebacz A, Baldasera C, Francis C, Dawson L, Swiers R, Christie-de-Jong F.** Effectiveness and acceptability of interventions to improve readability of patient healthcare materials: a narrative systematic review. *Public Health*. 2025;248:105937. [DOI](https://doi.org/10.1016/j.puhe.2025.105937).
2. **Daraz L, Morrow AS, Ponce OJ, et al.** Readability of Online Health Information: A Meta-Narrative Systematic Review. *Journal of General Internal Medicine*. 2018. [DOI](https://doi.org/10.1177/1062860617751639).
3. **Wang T, et al.** Digital Patient Experience: Umbrella Systematic Review. *Journal of Medical Internet Research*. 2022;24(8):e37952. [DOI](https://doi.org/10.2196/37952).
4. **Duffy A, Boroumandzad N, Lopez Sherman A, Christie G, Riadi I, Moreno S.** Examining Challenges to Co-Design Digital Health Interventions With End Users: Systematic Review. *Journal of Medical Internet Research*. 2025;27:e50178. [DOI](https://doi.org/10.2196/50178).
5. **Santos MR, et al.** The Brazilian version of the telehealth usability questionnaire (telehealth usability questionnaire Brazil): translation, cross-cultural adaptation, and psychometric properties. *Revista da Associação Médica Brasileira*. 2023;69(12):e20230228. [DOI](https://doi.org/10.1590/1806-9282.20230228).
6. **Bassalo Neves R, Barbosa Feres Carvalho D, Albano de Azevedo Guimarães E, Conceição de Oliveira V, Ferreira de Oliveira Quites H, Bezerra Cavalcante R, et al.** Desafios na usabilidade do aplicativo e-SUS Território da Estratégia de Saúde Digital do Brasil. *Saúde em Debate*. 2025;49(especial 1). [Artigo](https://revista.saudeemdebate.org.br/sed/article/view/9774).
7. **Wiener RC, Abuhalimeh BJ.** Evaluating adult digital health literacy, 2020–2025: A systematic review. *PLOS Digital Health*. 2025;4(11):e0001075. [DOI](https://doi.org/10.1371/journal.pdig.0001075).
8. **World Health Organization; International Telecommunication Union.** WHO-ITU global standard for accessibility of telehealth services. 2022. [Publicação](https://www.who.int/publications/i/item/9789240050464).
9. **World Health Organization; International Telecommunication Union.** Implementation toolkit for accessible telehealth services. 2024. [Publicação](https://www.who.int/publications/i/item/9789240094161).
10. **World Wide Web Consortium (W3C).** Web Content Accessibility Guidelines (WCAG) 2.2. [Recomendação](https://www.w3.org/TR/WCAG22/).
11. **Governo Federal do Brasil.** Modelo de Acessibilidade em Governo Eletrônico (eMAG), versão 3.1. [Portal eMAG](https://emag.governoeletronico.gov.br/).
12. **World Health Organization.** Recommendations on digital interventions for health system strengthening. 2019. [Diretriz](https://www.who.int/publications/i/item/9789241550505).
13. **PRISMA.** PRISMA 2020 statement and reporting resources. [Checklist e fluxogramas](https://www.prisma-statement.org/prisma-2020).

14. **RAANHUIS, A. F. A. et al. (2026).** Usability of a Patient Portal in Patients with Digital Support Needs: A Think Aloud Study. *Studies in Health Technology and Informatics*, 336, 2200–2204. DOI: https://doi.org/10.3233/SHTI260651. Estudo de think-aloud que identifica problemas de visibilidade do estado do sistema e sugere que o apoio oral pode reduzir dificuldades em um contexto específico. A fonte é um estudo pequeno, não um teste do Treino de Teleconsulta.
15. **KHAIRAT, S. et al. (2026).** What Telehealth Gets Right and What's Missing: A National Multistakeholder Study of Access and Sustainability. *The Permanente Journal*. Publicado em 8 set. 2026. DOI: https://doi.org/10.7812/TPP/26.102. Entrevistas qualitativas com 62 pacientes, profissionais e gestores nos EUA; destaca benefícios de acesso e barreiras de conectividade, dispositivos, literacia digital e fluxo de trabalho.
16. **DUPLAGA, M. (2025).** The Determinants of the Usability of Telephone-Based Remote Physician Visits. *Studies in Health Technology and Informatics*, 329, 1976–1977. DOI: https://doi.org/10.3233/SHTI251307. Estudo observacional de 1.661 adultos usuários de internet na Polônia; associações entre usabilidade autorreferida, literacia digital, ansiedade tecnológica, idade e escolaridade. Não é diretamente generalizável ao contexto de Guaraí.

## 7. Próximo passo obrigatório

Usar esta síntese para orientar a discussão metodológica, atualizar a matriz de rastreabilidade e completar a busca bibliográfica reprodutível nas bases planejadas. Só depois dessa etapa se deve considerar a fundamentação bibliográfica suficientemente consolidada para a versão final do anteprojeto.
