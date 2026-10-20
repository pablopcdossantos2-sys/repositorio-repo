# Revisão editorial dos cenários e feedbacks

**Data:** 20/10/2026  
**Escopo:** revisão documental e atualização de microtextos em `produto/index.html` e `produto/app.js`.  
**Método atual:** análise sem participantes. Esta revisão não é teste de compreensão com o público-alvo e não demonstra eficácia educativa.

## 1. Critérios editoriais aplicados

1. **Ação concreta:** orientar um próximo passo possível, evitando “tente de novo” sem dizer o que fazer.
2. **Feedback explicativo:** indicar por que a escolha é segura e o que fazer em seguida.
3. **Tom respeitoso:** não atribuir culpa, incapacidade ou desatenção à pessoa.
4. **Limite da simulação:** deixar claro que a sala é fictícia e que não há conexão, áudio ou mensagem real.
5. **Segurança e privacidade:** recomendar canais oficiais já conhecidos; não incentivar links inesperados nem o compartilhamento de senhas/códigos.
6. **Não clínico:** praticar navegação e comunicação, sem interpretar, modificar ou criar orientação clínica.
7. **Rastreabilidade:** ligar cada texto a um objetivo educativo e a uma verificação técnica correspondente.

Esses critérios são decisões de design fundamentadas na revisão documental disponível. Galvin et al. (2024) descrevem estratégias de preparação de usuários para telessaúde e relatam evidência limitada e mista de melhoria da competência. Portanto, a existência de feedback no protótipo não pode ser tratada como prova de aprendizagem. O toolkit WHO/ITU (2024) apoia considerar acessibilidade desde o planejamento, mas não valida especificamente os textos deste protótipo.

## 2. Cenário OE-02 — “O link não abre”

**Objetivo:** escolher uma resposta segura quando o link de acesso não abre.

**Texto de situação na interface:**  
“Chegou o horário marcado, mas você não consegue abrir o link da sala virtual fictícia.”

**Ação segura esperada:**  
Conferir a conexão e confirmar o link usando um canal oficial que a pessoa já conhece. Se não conseguir entrar, procurar esse contato para pedir ajuda.

**Feedback de acerto atualizado:**  
“Boa escolha. Confira a conexão e confirme o link usando um canal oficial que você já conhece. Se não conseguir entrar, procure esse contato para pedir ajuda. Não compartilhe senha ou código de acesso em links inesperados.”

**Feedback para tentar novamente atualizado:**  
“Tente novamente. Se o link não abrir, confira a conexão e confirme o link por um canal oficial que você já conhece. Se continuar sem acesso, procure esse contato. Não compartilhe senha ou código de acesso.”

**Racional:** a expressão “canal oficial que você já conhece” é mais cautelosa do que simplesmente confiar em uma mensagem que parece oficial. O feedback inclui um caminho se o problema persistir, sem prometer resolver a conexão. O botão de simulação continua sem abrir conexão real.

**Verificação técnica:** selecionar cada opção e conferir o feedback; ativar “Tentar entrar na sala de treino” e confirmar que a mensagem informa que nenhuma conexão real foi aberta.

## 3. Cenário OE-03 — “Não consigo ouvir”

**Objetivo:** identificar uma primeira ação segura diante de falha de áudio.

**Texto de situação na interface:**  
“Você abriu a sala virtual fictícia, mas não consegue ouvir a pessoa profissional.”

**Ação segura esperada:**  
Conferir se o volume do aparelho está ligado e, se houver essa opção, se a saída de som está correta. Se continuar sem ouvir, avisar a pessoa profissional e pedir ajuda.

**Feedback de acerto atualizado:**  
“Isso! Confira se o volume do aparelho está ligado e, se houver essa opção, se a saída de som está correta. Se ainda não ouvir, avise a pessoa profissional e peça ajuda. Esta situação é fictícia: não há chamada nem áudio real.”

**Feedback para tentar novamente atualizado:**  
“Tente novamente. Confira o volume e, se houver essa opção, a saída de som. Se continuar sem ouvir, avise a pessoa profissional em vez de sair sem explicar o problema. Não é necessário compartilhar dados pessoais.”

**Feedback do botão de simulação de áudio:**  
“Você praticou conferir o controle de áudio. Na prática real, veja se o volume do aparelho está ligado e, se houver essa opção, confira a saída de som. Se ainda não ouvir, avise a pessoa profissional e peça ajuda.”

**Feedback do botão para avisar:**  
“Você pode dizer: ‘Não estou conseguindo ouvir. Pode me ajudar a conferir o áudio, por favor?’ Este botão só mostra um exemplo e não envia uma mensagem real.”

**Racional:** o texto evita presumir que todos os aparelhos apresentam as mesmas opções; inclui comunicação e pedido de ajuda se a primeira verificação não resolver. O texto não sugere que a pessoa deva resolver tudo sozinha e não ativa áudio real.

**Verificação técnica:** acionar os dois controles fictícios e confirmar feedback local, sem solicitação de permissão de microfone/áudio nem envio de mensagem real.

## 4. Cenário OE-04 — “Não entendi uma informação”

**Objetivo:** responder de forma segura quando uma informação não foi compreendida.

**Ação segura esperada:**  
Pedir que a pessoa repita ou explique de outro jeito e confirmar o próximo passo mencionado.

**Feedback de acerto atualizado:**  
“Boa prática. Peça que a pessoa repita ou explique de outro jeito e, em seguida, confirme o próximo passo mencionado. Isso ajuda a evitar mal-entendidos; não é preciso adivinhar nem alterar orientações por conta própria. Este exemplo não fornece orientação clínica.”

**Feedback para tentar novamente atualizado:**  
“Tente novamente. Diga que a informação não ficou clara, peça para repetir ou explicar de outro jeito e confirme o próximo passo mencionado. Não precisa fingir que entendeu nem adivinhar.”

**Racional:** reforça comunicação ativa e confirmação do próximo passo sem sugerir qual decisão clínica tomar. O feedback explica a razão da ação em linguagem simples e sem censurar a resposta incorreta.

**Verificação técnica:** selecionar as opções do cenário e conferir que cada escolha produz o feedback esperado e nenhuma mensagem acrescenta instrução clínica.

## 5. OE-01 — Checklist “Antes”

O checklist continua sendo uma lista de preparação, não uma tarefa de demonstração de competência. Os itens de bateria, conexão, privacidade e dúvidas são coerentes com o objetivo preliminar. O estado marcado é temporário e não prova que a pessoa dispõe de equipamento, conexão ou privacidade adequados.

## 6. OE-05 — Encerrar

O conteúdo educativo da etapa “Encerrar” permanece estático: exemplos para pedir esclarecimento, confirmar o próximo passo e localizar um canal oficial. A revisão desta rodada **não implementa** uma nova tarefa interativa para OE-05. A escala local de facilidade de 1 a 5 continua separada: o feedback é local e não mede compreensão, aprendizagem ou validação com usuários.

Antes de decidir sobre uma interação para OE-05, é necessário avaliar se ela acrescenta valor pedagógico suficiente para justificar o escopo e os testes adicionais. Se aprovada como decisão de produto, a tarefa deverá ter objetivo, opções, feedback, critério de verificação e teste automatizado explícitos.

## 7. Relação com fontes já documentadas

| Objetivo/critério | Base documental e limite |
|---|---|
| OE-02 — acesso | Os guias de preparação para telessaúde do HHS e o benchmark registrado informam recomendações gerais de preparação e apoio; não são protocolo universal para uma plataforma. |
| OE-03 — áudio | A sequência de conferir volume/saída de som e comunicar a dificuldade é uma decisão de design para a tarefa do protótipo; requer inspeção manual e não foi validada com usuários. |
| OE-04 — esclarecimento | A formulação é uma decisão de design coerente com comunicação clara; as fontes registradas não demonstram que esta frase específica seja compreendida pelo público-alvo. |
| Todos | WHO/ITU (2024) orienta a considerar acessibilidade na telessaúde; Galvin et al. (2024) documenta estratégias de preparação e limitações da evidência sobre competência. Nenhuma das fontes testou estes microtextos específicos. |
| Diferenciação | Digital House Calls já foi identificado como curso autoguiado com estrutura antes/durante/depois; essa estrutura não deve ser alegada como inovação exclusiva. |

Referências:
- Galvin E, Desselle S, Gavin B, McNicholas F, Cullinan S, Hayden J. *Training Service Users in the Use of Telehealth: Scoping Review*. JMIR. 2024;26:e57586. https://doi.org/10.2196/57586.
- World Health Organization; International Telecommunication Union. *Implementation toolkit for accessible telehealth services*. 2024. https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities.
- U.S. Department of Health and Human Services. *Preparing patients for telehealth*. https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth.
- U.S. Department of Health and Human Services. *Helping patients prepare for their telehealth appointment*. https://telehealth.hhs.gov/providers/preparing-patients-for-their-appointment.
- BridgingApps. *Digital House Calls*. https://bridgingapps.org/courses-landing/.

## 8. Pendências e limites

- [x] Revisar editorialmente os três cenários interativos e seus feedbacks.
- [x] Atualizar os textos de situação/opções no HTML e os feedbacks/controles fictícios no JavaScript.
- [ ] Executar Playwright/axe-core e conferir a CI correspondente aos commits de código.
- [ ] Inspecionar manualmente o fluxo, o foco, a leitura das mensagens e os estados no navegador.
- [ ] Confirmar a legibilidade e a compreensão com o público-alvo somente se a orientação indicar que uma etapa com participantes é necessária e após as autorizações aplicáveis.
- [ ] Executar a busca bibliográfica formal nas bases oficiais; a busca estruturada continua pendente.

**Conclusão:** os textos foram revisados e atualizados para maior concretude e coerência com os objetivos preliminares. A adequação para adultos com baixa familiaridade digital continua sendo uma hipótese de design. A revisão editorial não substitui teste de regressão, auditoria manual nem validação com participantes.
