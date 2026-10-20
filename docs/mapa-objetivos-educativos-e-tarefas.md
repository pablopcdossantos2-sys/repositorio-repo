# Mapa preliminar de objetivos educativos, tarefas e critérios de verificação

**Projeto:** Treino de Teleconsulta  
**Data:** 20/10/2026  
**Status:** especificação de design preliminar, derivada da revisão documental e do protótipo atual. Os textos dos três cenários interativos foram revisados editorialmente em 20/10/2026; não são instrumentos validados nem evidência de aprendizagem. Ver [revisão editorial dos cenários e feedbacks](revisao-editorial-cenarios-feedbacks-2026-10-20.md).  
**Método atual:** desenvolvimento e inspeção documental/técnica/pedagógica sem participantes.

## 1. Finalidade

Tornar explícita a relação entre o propósito educativo do simulador, as tarefas que a interface apresenta, o feedback e as verificações internas. O mapa serve para orientar a implementação e a auditoria sem participantes. Ele não afirma que o público-alvo consegue realizar as tarefas ou que os objetivos são alcançados após usar o produto.

## 2. Princípios para escrever objetivos

- Descrever uma ação concreta e delimitada, não uma intenção ampla como “entender a teleconsulta”.
- Não confundir clicar na resposta correta com competência geral ou aprendizagem duradoura.
- Manter a linguagem não punitiva e explicar a razão de uma ação segura.
- Não apresentar instruções fictícias como orientação clínica individual.
- Incluir barreiras de acesso e privacidade sem sugerir que a interface resolve problemas estruturais de conexão, dispositivo ou disponibilidade do serviço.
- Distinguir os elementos implementados dos itens ainda representados apenas por texto.

## 3. Mapa de objetivos e tarefas

| ID | Objetivo educativo preliminar | Tarefa no protótipo | Resposta/ação esperada no cenário | Feedback que deve existir | Verificação interna sem participantes | Estado no protótipo |
|---|---|---|---|---|---|---|
| OE-01 | Reconhecer verificações simples de preparação antes de uma teleconsulta. | Percorrer o checklist “Antes”. | Conferir bateria/carregador, conexão disponível, privacidade e dúvidas a esclarecer. | A interface apresenta instruções curtas; o estado do checklist muda e pode ser limpo. | Conferir rótulos, atualização de estado e botão “Desmarcar tudo”; verificar que nada é transmitido/persistido. | Implementado como checklist; não mede se a pessoa realmente sabe preparar-se. |
| OE-02 | Escolher uma resposta segura quando o link de acesso não abre. | Ler o cenário e escolher uma opção. | Conferir se a internet funciona e confirmar o link pelo contato que o serviço de saúde informou anteriormente; se persistir, pedir ajuda por esse contato; não digitar senha/código em links inesperados. | Feedback revisado explica verificar a internet, confirmar o link pelo contato informado anteriormente pelo serviço de saúde e pedir ajuda se persistir a falha; não digitar senha/código em links inesperados. | Testar cada opção e comparar texto/feedback com o critério; confirmar que o botão de simulação não abre link real. | Implementado; revisão editorial concluída/documentada, mas teste de regressão e teste manual ainda pendentes. |
| OE-03 | Identificar uma primeira ação segura diante de falha de áudio. | Usar os controles fictícios e escolher uma resposta. | Conferir se o volume está ligado e se o som sai pelo alto-falante ou fone em uso; se ainda não ouvir, avisar o profissional de saúde e pedir ajuda. | O feedback revisado usa termos concretos para a primeira verificação (volume, alto-falante ou fone), orienta pedir ajuda se o problema continuar e explicita que não há chamada ou áudio real. | Acionar ambos os controles, verificar mensagem e ausência de pedido de permissão/mídia real. | Implementado; revisão editorial concluída/documentada, mas teste de regressão e teste manual ainda pendentes. |
| OE-04 | Responder de forma segura quando uma informação não foi compreendida. | Escolher uma resposta no cenário “Não entendi uma informação”. | Dizer que a informação não ficou clara, pedir repetição ou explicação em outras palavras e confirmar o próximo passo mencionado, sem fingir que entendeu nem adivinhar. | O feedback revisado nomeia o profissional de saúde, orienta pedir repetição ou explicação em outras palavras e confirmar o próximo passo mencionado, sem fornecer orientação clínica. | Testar cada resposta e verificar que o feedback é coerente, respeitoso e não clínico. | Implementado; revisão editorial concluída/documentada, mas teste de regressão e teste manual ainda pendentes. |
| OE-05 | Identificar o que convém confirmar ao encerrar uma teleconsulta. | Ler os exemplos na etapa “Encerrar”. | Confirmar o que ficou combinado, o próximo passo e qual canal oficial usar em caso de dúvida. | A interface oferece frases-exemplo claras e alerta para não usar links desconhecidos. | Revisar consistência e segurança dos exemplos; conferir se não parecem protocolo clínico universal. | Parcial: o conteúdo educativo aparece como exemplos estáticos; a tela também contém uma escala interativa de facilidade (1–5), mas ela não pratica OE-05 nem oferece feedback de aprendizagem. |

## 4. Cobertura e lacunas identificadas

1. O protótipo atual cobre preparação e três situações com escolhas e feedback (OE-01 a OE-04).
2. O conteúdo educativo do encerramento (OE-05) está apresentado por exemplos estáticos, sem uma tarefa de prática. A escala interativa de facilidade de 1 a 5 na mesma tela é um controle separado: informa a seleção localmente e declara que não envia nem armazena a resposta; não deve ser interpretada como medida de compreensão, aprendizagem ou validação com usuários.
3. O checklist registra apenas o estado temporário da interface; não demonstra que a pessoa tem conexão, privacidade ou equipamento adequados.
4. O simulador não pode resolver falta de internet, indisponibilidade do serviço, falta de dispositivo, suporte técnico ou outras barreiras estruturais. Deve ensinar a reconhecer limites e buscar canais oficiais conhecidos, não prometer resolver essas barreiras.
5. O resultado dos testes automatizados demonstra apenas os fluxos cobertos por esses testes. Não mede compreensão, transferência para uma teleconsulta real nem aprendizagem duradoura.

## 5. Critérios pedagógicos de inspeção

Para cada tarefa interativa, a revisão documental deve responder:

- A situação é compreensível sem conhecimento prévio de termos técnicos?
- Há uma ação segura claramente identificável, sem ambiguidade desnecessária?
- O feedback explica o motivo da resposta em linguagem simples?
- As opções incorretas são plausíveis como erro comum, mas não contêm instruções perigosas detalhadas?
- A interface evita vergonha, culpa ou julgamento do usuário?
- O feedback é compatível com o objetivo e não introduz recomendações clínicas?
- O texto distingue cenário fictício de serviço real?
- A tarefa pode ser concluída por teclado e tem nomes/estados acessíveis?

## 6. Prioridade de implementação

**Não ampliar o produto automaticamente.** Primeiro, revisar o texto e mapear requisitos já existentes. A melhoria mínima candidata é tornar o encerramento mais ativo com uma única escolha sobre confirmar próximos passos, caso a revisão pedagógica indique que isso acrescenta valor sem aumentar desnecessariamente o escopo. Antes de implementar, definir opções, resposta segura, feedback, teste automatizado e critérios de acessibilidade.

Esta melhoria é uma proposta de design, não uma decisão aprovada nem uma tarefa já implementada.

## 7. Relação com outros documentos

- [Benchmark exploratório de recursos existentes](benchmark-recursos-existentes.md): compara recursos e fundamenta requisitos provisórios.
- [Matriz de evidências e requisitos](matriz-evidencias-requisitos.md): rastreia fontes, requisitos e verificações.
- [Matriz de critérios para revisão de textos e feedbacks](matriz-criterios-qualidade-textos-feedbacks.md): relaciona objetivos, ações seguras, feedbacks e testes de regressão.
- [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md): fornece os casos AUD-01 a AUD-20 para inspeção.
- [Especificação do produto mínimo](produto-minimo.md): descreve limites e funcionalidades atuais.
- [Estado atual do projeto e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md): define a diretriz de escopo vigente.
- [Segunda revisão estática do protótipo — 20/10/2026](segunda-revisao-estatica-2026-10-20.md): registra a inspeção de IDs, referências, APIs comuns e a distinção entre conteúdo de encerramento e escala de facilidade.

## 8. Próximas ações

**Complemento estático de 20/10/2026:** a segunda revisão confirmou, por inspeção textual, 24 IDs sem duplicações, três destinos de `aria-controls` existentes, nove referências únicas de `getElementById` sem destino ausente e nenhuma URL HTTP(S) em `href`/`src`. A escala de facilidade do encerramento é interativa, mas não constitui tarefa de OE-05. Detalhes e hashes em [segunda revisão estática](segunda-revisao-estatica-2026-10-20.md). A inspeção não executou navegador nem testes nesta rodada.

1. [x] Fazer uma segunda passagem editorial para tornar ações e termos mais concretos; ver [registro de revisão e simplificação](revisao-editorial-cenarios-feedbacks-2026-10-20.md) e [matriz de critérios](matriz-criterios-qualidade-textos-feedbacks.md).
2. [ ] Atualizar a matriz de rastreabilidade para cada objetivo após o desenvolvedor executar os testes de regressão.
3. [ ] Executar os testes automatizados correspondentes após as alterações de interface/texto e verificar a CI correspondente.
4. Decidir se a etapa “Encerrar” precisa de uma interação simples ou se o conteúdo estático é suficiente para o escopo do mestrado.
5. Registrar resultados de auditoria técnica sem participantes, sem afirmar que o produto foi validado com usuários.
