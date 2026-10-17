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
