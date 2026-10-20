# Revisão editorial dos cenários e feedbacks

**Data:** 20/10/2026  
**Escopo:** revisão documental e alteração de microtextos em `produto/index.html` e `produto/app.js`.  
**Método atual:** análise sem participantes. Esta revisão não é teste de compreensão com o público-alvo e não demonstra eficácia educativa.

## 1. Critérios editoriais aplicados

1. **Ação concreta:** orientar um passo possível, evitando recomendações vagas como “tente de novo” sem dizer o que fazer.
2. **Feedback explicativo:** indicar por que a escolha é segura e o que fazer em seguida.
3. **Tom respeitoso:** não atribuir culpa, falta de capacidade ou desatenção à pessoa.
4. **Limite da simulação:** deixar claro que o cenário é fictício e que não há conexão, áudio ou mensagem real.
5. **Segurança e privacidade:** não orientar o compartilhamento de senhas/dados pessoais nem sugerir o uso de links inesperados.
6. **Não clínico:** praticar comunicação e navegação, sem interpretar, modificar ou criar orientação clínica.
7. **Rastreabilidade:** ligar cada texto a um objetivo educativo e a uma verificação técnica correspondente.

Esses critérios são decisões de design fundamentadas na revisão documental disponível. A revisão de escopo de Galvin et al. (2024) relata que o treinamento de usuários para telessaúde inclui instruções e apoio para tarefas técnicas, mas que a evidência de melhoria de competência é limitada e mista. Portanto, a existência de feedback no protótipo não pode ser tratada como prova de aprendizagem. O toolkit de acessibilidade WHO/ITU (2024) sustenta considerar acessibilidade no desenho do serviço, mas não valida especificamente os textos deste protótipo.

## 2. Cenário OE-02 — “O link não abre”

**Objetivo:** escolher uma resposta segura quando o link de acesso não abre.

**Texto revisado da situação:**  
“Chegou o horário marcado, mas você não consegue abrir o link da sala virtual fictícia.”

**Ação segura esperada:**  
Conferir se o aparelho está conectado e se está usando o link recebido pelo canal oficial. Se não conseguir entrar, pedir ajuda pelo contato oficial que já conhece.

**Feedback de acerto:**  
“Boa escolha. Confira se o aparelho está conectado e se você abriu o link recebido pelo canal oficial. Se não conseguir entrar, peça ajuda pelo contato oficial que já conhece. Não informe senhas nem dados pessoais em links inesperados.”

**Feedback para tentar novamente:**  
“Tente novamente. Se o link não abrir, confira a conexão e use apenas o link ou contato oficial que você já conhece. Não precisa compartilhar senhas nem dados pessoais para pedir ajuda.”

**Racional:** transforma a orientação geral em sequência de ações; reforça o canal oficial conhecido e a proteção de dados sem ensinar procedimentos específicos de uma plataforma. O botão de simulação continua sem abrir conexão real.

**Verificação técnica:** selecionar cada opção e verificar que o feedback correto aparece; ativar “Tentar entrar na sala de treino” e confirmar que a mensagem deixa explícito que nenhuma conexão real foi aberta.

## 3. Cenário OE-03 — “Não consigo ouvir”

**Objetivo:** identificar uma primeira ação segura diante de falha de áudio.

**Texto revisado da situação:**  
“Você entrou na sala virtual fictícia, mas não consegue ouvir o profissional.”

**Ação segura esperada:**  
Conferir se o volume está ligado e, se houver essa opção, se a saída de som está correta. Se ainda não ouvir, avisar o profissional.

**Feedback de acerto:**  
“Isso! Confira se o volume está ligado e, se houver essa opção, se a saída de som está correta. Se ainda não ouvir, avise o profissional. Esta situação é fictícia: não há chamada nem áudio real.”

**Feedback para tentar novamente:**  
“Tente novamente. Você pode conferir o volume e os controles de som disponíveis; se continuar sem ouvir, avise o profissional em vez de sair sem explicar o problema. Não é necessário compartilhar dados pessoais.”

**Racional:** evita presumir que todo aparelho apresenta as mesmas opções; inclui um próximo passo de comunicação caso a verificação técnica não resolva. O texto não sugere que a pessoa deve resolver sozinha nem que o simulador ativa áudio.

**Verificação técnica:** acionar ambos os controles fictícios e confirmar feedback local, sem pedido de permissão de microfone/áudio nem envio de mensagem real.

## 4. Cenário OE-04 — “Não entendi uma informação”

**Objetivo:** responder de forma segura quando uma informação não foi compreendida.

**Texto revisado da opção segura:**  
“Pedir que a pessoa repita ou explique de outro jeito e, em seguida, confirmar qual é o próximo passo.”

**Feedback de acerto:**  
“Boa prática. Peça que a pessoa repita ou explique de outro jeito e, em seguida, confirme qual é o próximo passo. Assim, você não precisa adivinhar. Este exemplo não fornece nem altera orientações clínicas.”

**Feedback para tentar novamente:**  
“Tente novamente. Se uma informação não ficou clara, peça para repetir ou explicar de outro jeito e confirme o próximo passo. Não precisa fingir que entendeu nem adivinhar.”

**Racional:** reforça a comunicação ativa e a confirmação do próximo passo sem propor qual seria uma decisão clínica. O feedback explica o motivo da ação em linguagem simples e sem censurar a resposta incorreta.

**Verificação técnica:** selecionar as três opções, confirmar que cada escolha produz o feedback esperado e que nenhuma mensagem acrescenta instrução clínica.

## 5. Relação com os objetivos e fontes documentadas

| Objetivo | Decisão de conteúdo | Base documental/limite |
|---|---|---|
| OE-02 — acesso | Conexão, link/canal oficial conhecido, pedir ajuda; não compartilhar senhas ou dados em links inesperados. | Guias de preparação para telessaúde do HHS e benchmark documentado no repositório informam a preparação e o apoio; são recomendações gerais, não um protocolo universal de plataforma. |
| OE-03 — áudio | Conferir volume/saída de som disponível e comunicar a dificuldade. | Derivado do objetivo e da tarefa técnica do protótipo; requer revisão manual do fluxo e não foi validado com usuários. |
| OE-04 — esclarecimento | Pedir repetição/explicação alternativa e confirmar o próximo passo. | Coerente com comunicação compreensível e linguagem clara, mas o texto específico é uma decisão de design; a literatura existente não comprova que esta formulação seja compreendida pelo público-alvo. |
| Todos | Feedback concreto, respeitoso, fictício e não clínico. | WHO/ITU (2024) sobre acessibilidade de telessaúde; Galvin et al. (2024) sobre preparação/treinamento de usuários e limitações da evidência. |

Referências já registradas no repositório:
- Galvin E, Desselle S, Gavin B, McNicholas F, Cullinan S, Hayden J. *Training Service Users in the Use of Telehealth: Scoping Review*. JMIR. 2024;26:e57586. https://doi.org/10.2196/57586.
- World Health Organization; International Telecommunication Union. *Implementation toolkit for accessible telehealth services*. 2024. https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities.
- U.S. Department of Health and Human Services. *Preparing patients for telehealth*. https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth.
- U.S. Department of Health and Human Services. *Helping patients prepare for their telehealth appointment*. https://telehealth.hhs.gov/providers/preparing-patients-for-their-appointment.

As fontes são referências de contexto e desenho; não devem ser citadas como se tivessem testado estes textos específicos.

## 6. Encerramento e OE-05

O conteúdo da etapa “Encerrar” permanece composto por exemplos estáticos de pedido de esclarecimento, confirmação do próximo passo e uso de canal oficial. A revisão desta rodada **não implementa** uma tarefa interativa nova para OE-05. A escala de facilidade de 1 a 5 permanece separada: seu feedback é local e não é medida de compreensão, aprendizagem ou validação com usuários.

Antes de decidir sobre uma interação para OE-05, é necessário avaliar se ela acrescenta valor pedagógico suficiente para justificar o escopo e os testes adicionais. Se aprovada como decisão de produto, a tarefa deve ter objetivo, opções, feedback, critério de verificação e teste automatizado explícitos.

## 7. Pendências e limites

- [x] Revisar editorialmente os três cenários interativos e seus feedbacks.
- [x] Atualizar os textos de situação e opções no HTML.
- [x] Atualizar feedbacks de acerto, tentativa e controles fictícios no JavaScript.
- [ ] Executar Playwright/axe-core e conferir o resultado da CI correspondente aos commits de código.
- [ ] Inspecionar manualmente o fluxo, foco, leitura das mensagens e estados em navegador.
- [ ] Confirmar legibilidade e compreensão com o público-alvo somente se a orientação indicar que uma etapa com participantes é necessária e após as autorizações aplicáveis.
- [ ] Executar a busca bibliográfica formal nas bases oficiais; a busca estruturada continua pendente.

**Conclusão:** os textos estão mais concretos e coerentes com os objetivos preliminares, mas a adequação para adultos com baixa familiaridade digital ainda é uma hipótese de design. A revisão editorial não substitui teste manual nem validação com participantes.
