# Matriz de critérios para revisão de textos e feedbacks

**Projeto:** Treino de Teleconsulta  
**Data:** 20/10/2026  
**Status:** matriz documental de inspeção, não validada com participantes.  
**Método vigente:** revisão de fontes e auditoria técnica/pedagógica sem participantes como plano inicial.

## 1. Finalidade e limites

Esta matriz transforma a revisão editorial dos cenários em critérios verificáveis para o anteprojeto e para a inspeção do protótipo. Ela distingue: (a) o que as fontes documentadas permitem afirmar; (b) decisões de design adotadas no produto; e (c) o que ainda precisa de verificação.

A revisão de Galvin et al. (2024) descreve intervenções de preparação para telessaúde e aponta evidência limitada/mista de melhoria da competência. O toolkit WHO/ITU (2024) orienta a considerar acessibilidade no planejamento de serviços de telessaúde. Os guias do HHS trazem recomendações práticas de preparação. **Nenhuma dessas fontes validou os microtextos deste protótipo**, e nenhuma substitui a busca bibliográfica formal, ainda pendente.

## 2. Critérios de qualidade do conteúdo

| ID | Critério | Evidência observável na revisão | Como verificar sem participantes | Limite |
|---|---|---|---|---|
| C-01 | Ação concreta | A instrução indica uma ação possível, não apenas “tente novamente”. | Identificar verbo/ação e próximo passo em cada situação e feedback. | A presença da instrução não prova compreensão. |
| C-02 | Feedback explicativo | O feedback de acerto reforça a ação segura e/ou sua razão; o de tentativa informa como corrigir. | Comparar opção selecionada com o texto exibido e com o objetivo. | Não prova aprendizagem nem transferência para uma teleconsulta real. |
| C-03 | Tom não punitivo | Evita culpa, vergonha, rótulos e linguagem que responsabiliza a pessoa por falhas técnicas. | Revisão textual por busca de formulações acusatórias e leitura contextual. | A adequação percebida pelo público não foi avaliada. |
| C-04 | Privacidade e segurança | Não pede senha/código, não recomenda links inesperados e orienta usar o contato informado anteriormente pelo serviço de saúde. | Revisar todas as opções, feedbacks e mensagens dos botões. | Não é aconselhamento completo de cibersegurança. |
| C-05 | Limite não clínico | Não interpreta sintomas, não recomenda tratamento e não altera uma orientação profissional. | Conferir se os textos se restringem a acesso, áudio e comunicação. | Não substitui revisão clínica caso o escopo venha a mudar. |
| C-06 | Simulação explícita | Informa que botões e situações são fictícios e não iniciam chamada, conexão ou envio. | Ativar cada botão e confirmar a mensagem; inspecionar comportamento técnico. | Texto declarativo sozinho não prova ausência de tráfego; verificar Network/Application. |
| C-07 | Variação de dispositivos | Não pressupõe que todo aparelho tenha os mesmos controles ou opções. | Procurar qualificadores como “se houver essa opção” quando aplicável. | A compatibilidade real exige testes em dispositivos. |
| C-08 | Linguagem e acessibilidade | Frases diretas e concretas; evitar jargões como “canal oficial” sem explicação; nomear alto-falante/fone quando isso tornar a ação mais clara; rótulos, foco, estados e feedbacks anunciados acessivelmente. | Revisão textual e testes automatizados/manuais de teclado, foco e leitor de tela. | Leiturabilidade calculada ou automação isolada não demonstram acessibilidade integral. |
| C-09 | Rastreabilidade | Objetivo, situação, opção segura, feedback e teste correspondem entre si. | Conferir a tabela da seção 3 e a suíte de testes. | Testes escritos não são testes aprovados até haver execução registrada. |

## 3. Matriz de rastreabilidade por cenário

| Objetivo | Situação e ação segura esperada | Elementos do feedback atual | Verificação de regressão |
|---|---|---|---|
| OE-02 — link indisponível | Conferir se a internet funciona; confirmar o link pelo contato que o serviço de saúde informou anteriormente; se persistir, pedir ajuda por esse contato; não digitar senha/código em links inesperados. | Feedback de acerto reforça a sequência; feedback de tentativa dá o próximo passo sem culpa; botão fictício declara que nenhuma conexão real foi aberta. | Selecionar cada opção; conferir os dois feedbacks; ativar “Tentar entrar na sala de treino”; verificar que não abre URL real. |
| OE-03 — falha de áudio | Conferir o volume e se o som sai pelo alto-falante ou fone em uso; se continuar sem áudio, avisar o profissional de saúde e pedir ajuda. | Feedback de acerto e tentativa explicam a primeira verificação e a comunicação; botões mostram uma ação e uma frase de ajuda, sem ativar mídia real. | Selecionar cada opção; ativar os dois controles; verificar texto, foco e ausência de solicitação de microfone/áudio real. |
| OE-04 — informação não compreendida | Dizer que a informação não ficou clara, pedir repetição ou explicação em outras palavras e confirmar o próximo passo mencionado; não fingir que entendeu nem adivinhar. | Feedback explica a ação em palavras diretas e evita criar ou modificar orientação clínica. | Testar cada resposta e verificar que o feedback é coerente, respeitoso e não clínico. |
| OE-01 — preparação | Conferir bateria/carregador, conexão disponível, privacidade e dúvidas a levar ao atendimento. | Checklist com estado local e opção de limpar. | Conferir rótulos, contagem e reinicialização; não interpretar itens marcados como prova de capacidade real. |
| OE-05 — encerramento | Confirmar o que ficou combinado, próximo passo e canal oficial para dúvidas. | Conteúdo educativo estático; a escala de facilidade 1–5 não é tarefa de aprendizagem. | Revisar clareza/segurança dos exemplos; não marcar OE-05 como prática interativa concluída. Qualquer ampliação precisa de justificativa, opções, feedback e testes próprios. |

## 4. Regras de aceitação documental

A revisão editorial documental pode ser considerada concluída quando, para cada cenário interativo:
1. a situação está descrita em termos concretos;
2. há uma ação segura esperada identificada;
3. feedback de acerto e de tentativa são coerentes com o objetivo;
4. os feedbacks não culpam a pessoa nem incluem aconselhamento clínico;
5. os limites fictícios e de privacidade são claros;
6. há uma verificação de regressão escrita para as respostas e os controles relevantes.

Essas regras demonstram **consistência documental**, não compreensão pelo público. A verificação técnica só poderá ser marcada como executada após rodar a suíte no commit correspondente e registrar a saída. A auditoria manual de teclado, foco, leitores de tela, zoom/reflow e comportamento de rede continua sendo uma etapa separada.

## 5. Uso das fontes e limites da inferência

- **Galvin et al. (2024), DOI 10.2196/57586:** fundamenta a relevância de examinar estratégias de preparação e adverte contra presumir competência adquirida; não valida a linguagem ou eficácia do nosso produto.
- **WHO/ITU (2024), Implementation toolkit for accessible telehealth services:** fundamenta considerar acessibilidade desde o planejamento; não certifica conformidade do protótipo.
- **HHS, Preparing patients for telehealth / Helping patients prepare for their telehealth appointment:** oferece contexto prático sobre preparação e apoio; não é protocolo universal para todas as plataformas.
- **Digital House Calls (BridgingApps):** confirma que já existe recurso autoguiado organizado em antes/durante/depois; essa estrutura não é diferencial exclusivo.

Referências e URLs já registradas em [Revisão editorial dos cenários e feedbacks](revisao-editorial-cenarios-feedbacks-2026-10-20.md), [Matriz de evidências e requisitos](matriz-evidencias-requisitos.md) e [Benchmark exploratório](benchmark-recursos-existentes.md).

## 6. Estado e próximas ações

- [x] Critérios editoriais explicitados.
- [x] Textos de situação, opções e feedbacks dos cenários OE-02, OE-03 e OE-04 mapeados aos objetivos.
- [x] Verificações de regressão descritas para cada cenário.
- [ ] Executar a suíte automatizada após as mudanças de texto/código e registrar o commit testado.
- [ ] Fazer auditoria manual de fluxo, teclado, foco, mensagens, zoom/reflow, leitor de tela e comportamento de rede.
- [ ] Executar buscas bibliográficas formais e completar a comparação dos recursos.
- [ ] Discutir com a orientação se o plano sem participantes atende ao mestrado.

**Conclusão:** a segunda passagem editorial torna as instruções mais concretas e aproxima as palavras da ação esperada em OE-02 a OE-04. O alinhamento documental não demonstra que adultos com baixa familiaridade digital compreenderão ou considerarão adequados os textos; não houve teste com pessoas e a execução da regressão deve ser conferida no commit atual.
