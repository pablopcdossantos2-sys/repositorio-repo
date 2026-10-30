# Revisão editorial e simplificação dos cenários e feedbacks

**Data:** 20/10/2026  
**Escopo:** segunda passagem editorial nos textos de situação, opções e feedbacks em `produto/index.html` e `produto/app.js`, com alinhamento do anteprojeto, mapa de objetivos, matriz de critérios e testes.  
**Método:** inspeção documental e textual sem participantes. Esta revisão não é teste de compreensão com o público-alvo e não demonstra eficácia educativa.

## 1. Critérios editoriais aplicados

1. **Ação concreta:** instruir um próximo passo possível, não apenas dizer “tente novamente”.
2. **Palavras concretas:** preferir uma descrição simples da ação a termos abstratos ou técnicos quando o sentido puder ser mantido.
3. **Sequência curta:** apresentar a primeira verificação e o que fazer se ela não resolver o problema.
4. **Feedback explicativo:** relacionar a escolha com a ação segura esperada.
5. **Tom respeitoso:** orientar sem culpa, vergonha ou julgamento.
6. **Privacidade e segurança:** indicar o uso de contato informado anteriormente pelo serviço; não incentivar links inesperados nem compartilhamento de senhas/códigos.
7. **Limite não clínico:** praticar acesso e comunicação, sem interpretar sintomas, recomendar tratamento ou alterar orientações profissionais.
8. **Simulação explícita:** deixar claro que os botões não abrem conexão, não ativam mídia e não enviam mensagens reais.
9. **Variação de dispositivos e acessibilidade:** não presumir que todos os aparelhos tenham as mesmas opções; manter rótulos, feedbacks e fluxo verificáveis.
10. **Rastreabilidade:** ligar situação, objetivo educativo, ação esperada, feedback e teste de regressão.

Estes critérios são decisões de design apoiadas pela revisão documental disponível. Galvin et al. (2024) descrevem diferentes estratégias de preparação para telessaúde e relatam evidência limitada e mista de melhoria da competência. O toolkit WHO/ITU (2024) apoia considerar acessibilidade desde o planejamento, e os guias do HHS oferecem contexto prático para preparação. Nenhuma dessas fontes validou os microtextos deste protótipo.

## 2. Cenário OE-02 — “O link não abre”

**Objetivo preliminar:** escolher uma resposta segura quando o link de acesso não abre.

**Situação revisada:**  
“Chegou o horário do atendimento fictício, mas o link da sala não abre. Esta simulação ajuda a pensar no que fazer, mas não corrige problemas reais de conexão.”

**Ação segura esperada:**  
Conferir se a internet está funcionando e confirmar o link pelo contato que o serviço de saúde informou anteriormente. Se ainda não conseguir entrar, pedir ajuda por esse contato. Não digitar senha ou código em links inesperados.

**Feedback de acerto:**  
“Boa escolha. Confira se a internet está funcionando. Confirme o link pelo contato que o serviço de saúde informou antes. Se ainda não conseguir entrar, peça ajuda por esse contato. Não digite senha ou código em links inesperados.”

**Feedback de nova tentativa:**  
“Tente novamente. Confira se a internet está funcionando e confirme o link pelo contato que o serviço de saúde informou antes. Se ainda não conseguir entrar, peça ajuda por esse contato. Não digite senha ou código em links inesperados.”

**Feedback do botão de entrada fictícia:**  
“Nesta situação fictícia, o link continua sem abrir. Confira se a internet está funcionando e confirme o link pelo contato que o serviço de saúde informou antes. Se ainda não conseguir entrar, peça ajuda por esse contato. Não digite senha ou código em links inesperados. Nenhuma conexão real foi aberta.”

**Racional:**  
A formulação substitui “canal oficial” por uma instrução mais concreta: usar o contato que o serviço informou anteriormente. Não pressupõe que qualquer mensagem recebida seja confiável nem promete resolver um problema de conexão. A simulação não abre links.

**Verificação de regressão:**  
Selecionar as opções segura e não segura e confirmar os feedbacks correspondentes; acionar o botão de entrada e confirmar que nenhuma URL ou conexão real é aberta.

## 3. Cenário OE-03 — “Não consigo ouvir”

**Objetivo preliminar:** identificar uma primeira ação segura diante de falha de áudio.

**Situação revisada:**  
“Você entrou na sala virtual fictícia, mas não consegue ouvir o profissional de saúde.”

**Ação segura esperada:**  
Conferir se o volume está ligado e se o som está saindo pelo alto-falante ou fone em uso. Se ainda não ouvir, avisar o profissional de saúde e pedir ajuda.

**Feedback de acerto:**  
“Isso. Confira se o volume está ligado e se o som está saindo pelo alto-falante ou fone que você está usando. Se ainda não ouvir, avise o profissional de saúde e peça ajuda. Esta situação é fictícia: não há chamada nem áudio real.”

**Feedback de nova tentativa:**  
“Tente novamente. Confira o volume e o alto-falante ou fone que está usando. Se continuar sem ouvir, avise o profissional de saúde e peça ajuda. Não compartilhe dados pessoais por links inesperados.”

**Feedback do botão de conferência de áudio:**  
“Você praticou uma primeira verificação. Confira se o volume está ligado e se o som sai pelo alto-falante ou fone que está usando. Se ainda não ouvir, avise o profissional de saúde e peça ajuda.”

**Feedback do botão de pedido de ajuda:**  
“Você pode dizer: ‘Não estou conseguindo ouvir. Pode me ajudar, por favor?’ Este botão só mostra um exemplo; não envia uma mensagem real.”

**Racional:**  
A formulação nomeia ações que a pessoa pode reconhecer, sem depender da expressão abstrata “saída de som”. A alternativa “alto-falante ou fone” não cobre todas as configurações possíveis; o texto continua sendo um exemplo geral e não substitui ajuda técnica do serviço. Não é ativado áudio real.

**Verificação de regressão:**  
Escolher cada opção e confirmar feedback; ativar ambos os controles fictícios; conferir que não surge pedido de permissão para microfone/áudio nem envio de mensagem.

## 4. Cenário OE-04 — “Não entendi uma informação”

**Objetivo preliminar:** responder de forma segura quando uma informação não foi compreendida.

**Situação revisada:**  
“Durante a teleconsulta fictícia, uma explicação não ficou clara. Você pode pedir que o profissional de saúde repita ou explique de outro jeito.”

**Ação segura esperada:**  
Dizer que a informação não ficou clara, pedir repetição ou explicação em outras palavras e confirmar o próximo passo mencionado.

**Feedback de acerto:**  
“Boa prática. Peça ao profissional de saúde que repita ou explique de outro jeito. Depois, confirme qual é o próximo passo mencionado. Isso ajuda a evitar mal-entendidos; não precisa adivinhar nem mudar orientações por conta própria. Este exemplo não fornece orientação clínica.”

**Feedback de nova tentativa:**  
“Tente novamente. Diga que a informação não ficou clara e peça ao profissional de saúde que repita ou explique de outro jeito. Depois, confirme o próximo passo mencionado. Não precisa fingir que entendeu nem adivinhar.”

**Racional:**  
O texto oferece uma ação direta e pede confirmação do próximo passo sem fornecer nem modificar orientação clínica. O feedback de nova tentativa não rotula a pessoa nem presume que a dificuldade seja culpa dela.

**Verificação de regressão:**  
Selecionar cada opção e verificar que o feedback corresponde à ação esperada, mantém tom respeitoso e não introduz recomendação clínica.

## 5. OE-01 — checklist “Antes”

O checklist continua sendo uma lista de preparação, não uma tarefa que demonstre competência. Os itens de bateria, conexão, privacidade e dúvidas são decisões de design coerentes com o propósito preliminar. O estado marcado é temporário e não comprova que a pessoa dispõe de aparelho, conexão ou privacidade adequados.

## 6. OE-05 — etapa “Encerrar”

O conteúdo educativo da etapa “Encerrar” continua estático: exemplos para pedir esclarecimento, confirmar o próximo passo e identificar o contato informado pelo serviço para dúvidas. A escala local de facilidade de 1 a 5 continua separada; não mede compreensão, aprendizagem ou validação com usuários. Esta revisão não implementa uma nova tarefa interativa para OE-05.

Antes de ampliar a etapa, deve-se avaliar se uma interação acrescenta valor pedagógico suficiente para justificar o escopo e os testes adicionais. Se aprovada como decisão de produto, deverá ter objetivo, opções, feedback, critério de verificação e teste automatizado explícitos.

## 7. Relação com as fontes e limite da evidência

| Base documental | Uso no projeto | Limite |
|---|---|---|
| Galvin et al. (2024), DOI 10.2196/57586 | Contextualiza estratégias de preparação para telessaúde e a evidência limitada/mista sobre competência. | Não demonstra eficácia deste protótipo nem valida estas formulações. |
| WHO/ITU (2024), *Implementation toolkit for accessible telehealth services* | Fundamenta considerar acessibilidade ao definir conteúdo e fluxo. | Não certifica acessibilidade integral nem valida estes textos. |
| U.S. Department of Health and Human Services, *Preparing patients for telehealth* e *Helping patients prepare for their telehealth appointment* | Oferece recomendações práticas gerais de preparação. | Não é protocolo universal para cada serviço, aparelho ou plataforma. |
| BridgingApps, *Digital House Calls* | Informa que já há recurso autoguiado com estrutura antes/durante/depois. | Impede alegar que a estrutura temporal, isoladamente, é inovação exclusiva. |

Referências:
- Galvin E, Desselle S, Gavin B, McNicholas F, Cullinan S, Hayden J. *Training Service Users in the Use of Telehealth: Scoping Review*. JMIR. 2024;26:e57586. https://doi.org/10.2196/57586.
- World Health Organization; International Telecommunication Union. *Implementation toolkit for accessible telehealth services*. 2024. https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities.
- U.S. Department of Health and Human Services. *Preparing patients for telehealth*. https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth.
- U.S. Department of Health and Human Services. *Helping patients prepare for their telehealth appointment*. https://telehealth.hhs.gov/providers/preparing-patients-for-their-appointment.
- BridgingApps. *Digital House Calls*. https://bridgingapps.org/courses-landing/.

## 8. Pendências e limites

- [x] Fazer segunda passagem documental para substituir termos abstratos por ações e objetos mais concretos.
- [x] Atualizar textos de situação/opções e feedbacks em HTML/JavaScript e ajustar as asserções automatizadas correspondentes.
- [ ] Executar Playwright/axe-core e conferir a CI do commit com as mudanças atuais.
- [ ] Inspecionar manualmente o fluxo, a visibilidade e movimentação do foco, a leitura das mensagens e os estados no navegador.
- [ ] Avaliar a adequação da linguagem com o público-alvo somente se a orientação indicar que uma etapa com participantes é necessária e após as autorizações aplicáveis.
- [ ] Executar a busca bibliográfica formal nas bases oficiais; a busca estruturada continua pendente.

**Conclusão:** esta rodada melhora a concretude dos textos e a coerência documental entre objetivos, opções, feedbacks e testes planejados. Não prova compreensão pelo público-alvo, usabilidade real ou eficácia educativa.


## 9. Implementação posterior da prática de encerramento (21/10/2026)

A revisão acima registrava corretamente que, em 20/10/2026, OE-05 ainda não tinha prática interativa. Em 21/10/2026 foi implementada uma melhoria separada: uma pergunta de escolha única sobre confirmar o que ficou combinado, o próximo passo e o contato previamente informado pelo serviço. O feedback reforça pedir explicação quando necessário e evitar links inesperados; não fornece orientação clínica nem inicia conexão real. A especificação, o estado atual e a matriz foram atualizados em [Implementação da prática de encerramento (OE-05)](implementacao-pratica-encerramento-2026-10-21.md). A mudança não constitui validação com usuários. CI e auditoria manual devem ser tratadas separadamente.
