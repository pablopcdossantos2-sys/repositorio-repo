# Mapa preliminar de objetivos educativos, tarefas e critérios de verificação

**Projeto:** Treino de Teleconsulta  
**Data:** 20/10/2026  
**Status:** especificação de design preliminar, derivada da revisão documental e do protótipo atual. Não é instrumento validado nem evidência de aprendizagem.  
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
| OE-02 | Escolher uma resposta segura quando o link de acesso não abre. | Ler o cenário e escolher uma opção. | Conferir conexão e link recebido por canal oficial; se persistir, usar contato oficial conhecido; não compartilhar senha/dados por link suspeito. | Feedback específico explica a escolha segura e orienta tentar novamente sem culpar. | Testar cada opção e comparar texto/feedback com o critério; confirmar que o botão de simulação não abre link real. | Implementado; requer revisão editorial do texto e teste manual. |
| OE-03 | Identificar uma primeira ação segura diante de falha de áudio. | Usar os controles fictícios e escolher uma resposta. | Conferir volume/controle de áudio disponível e comunicar que não está ouvindo. | O feedback confirma a ação e explicita que não existe chamada ou áudio real. | Acionar ambos os controles, verificar mensagem e ausência de pedido de permissão/mídia real. | Implementado; requer revisão editorial e teste manual. |
| OE-04 | Responder de forma segura quando uma informação não foi compreendida. | Escolher uma resposta no cenário “Não entendi uma informação”. | Pedir repetição/explicação em outras palavras e confirmar o próximo passo, em vez de fingir que entendeu ou adivinhar. | O feedback explica por que pedir esclarecimento é preferível e não oferece orientação clínica. | Testar cada resposta e verificar que o feedback é coerente, respeitoso e não clínico. | Implementado; requer revisão editorial e teste manual. |
| OE-05 | Identificar o que convém confirmar ao encerrar uma teleconsulta. | Ler os exemplos na etapa “Encerrar”. | Confirmar o que ficou combinado, o próximo passo e qual canal oficial usar em caso de dúvida. | A interface oferece frases-exemplo claras e alerta para não usar links desconhecidos. | Revisar consistência e segurança dos exemplos; conferir se não parecem protocolo clínico universal. | Parcial: aparece como conteúdo estático; ainda não há tarefa de escolha nem feedback próprio nesta etapa. |

## 4. Cobertura e lacunas identificadas

1. O protótipo atual cobre preparação e três situações com escolhas e feedback (OE-01 a OE-04).
2. O encerramento (OE-05) está apresentado por exemplos estáticos, sem uma tarefa de prática. Isso deve ser tratado como limitação explícita, não como objetivo interativo já implementado.
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
- [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md): fornece os casos AUD-01 a AUD-20 para inspeção.
- [Especificação do produto mínimo](produto-minimo.md): descreve limites e funcionalidades atuais.
- [Estado atual do projeto e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md): define a diretriz de escopo vigente.

## 8. Próximas ações

1. Fazer revisão editorial dos textos existentes com base nos critérios da seção 5.
2. Atualizar a matriz de rastreabilidade para cada objetivo.
3. Executar os testes automatizados correspondentes após qualquer alteração de interface.
4. Decidir se a etapa “Encerrar” precisa de uma interação simples ou se o conteúdo estático é suficiente para o escopo do mestrado.
5. Registrar resultados de auditoria técnica sem participantes, sem afirmar que o produto foi validado com usuários.
