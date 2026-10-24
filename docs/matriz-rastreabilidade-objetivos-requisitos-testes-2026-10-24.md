# Matriz de rastreabilidade entre objetivos, requisitos e testes automatizados

**Data:** 24/10/2026  
**Escopo:** inspeção documental de \`tests/prototype.spec.js\`, do [mapa de objetivos educativos](mapa-objetivos-educativos-e-tarefas.md) e da [especificação do produto mínimo](produto-minimo.md).  
**Natureza:** inventário estático dos testes existentes; não é uma execução nova de CI nem uma auditoria manual.

## Como interpretar

- **Coberto por teste automatizado:** há asserção explícita no arquivo de teste para parte do comportamento descrito.
- **Parcial:** o teste verifica apenas uma parte do requisito/objetivo, em um conjunto específico de estados ou dimensões.
- **Não comprovado por automação:** não foi localizada uma verificação automatizada suficiente para sustentar a afirmação mais ampla.
- Os nomes abaixo são os títulos reais dos testes em \`tests/prototype.spec.js\`. Laços de teste geram casos adicionais para larguras, etapas e cenários.
- Passar em teste automatizado não demonstra compreensão, aprendizagem, usabilidade com o público-alvo, conformidade WCAG integral ou eficácia educativa.

## 1. Objetivos educativos (OE)

| Objetivo | Evidência automatizada localizada | Cobertura observada | Lacuna / inspeção complementar |
|---|---|---|---|
| **OE-01 — preparação** | \`checklist atualiza o status e Desmarcar tudo limpa as escolhas\`; \`reinicialização restaura escolhas, feedbacks, nota, etapa e foco\`; \`apresenta o tema escolhido e as três etapas de treino de teleconsulta\` | **Parcial.** Verifica estado temporário, limpeza, texto e fluxo inicial. | Não verifica se uma pessoa consegue preparar dispositivo, conexão ou privacidade, nem se os itens são adequados ao contexto real. Conferir manualmente linguagem, foco, toque e ausência de armazenamento/rede. |
| **OE-02 — link não abre** | \`cenário de entrada recomenda usar link/canal oficial sem compartilhar senhas\`; \`os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais\`; \`feedbacks dos três cenários explicam uma próxima ação concreta\` | **Parcial a substancial para o texto/fluxo codificado.** Verifica resposta segura, feedback e declaração de simulação. | Não prova que o feedback é entendido pelo público-alvo; não testa todos os dispositivos, tecnologias assistivas ou condições de rede. |
| **OE-03 — falha de áudio** | \`avaliação de compreensão exige escolha e apresenta feedback coerente\`; \`os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais\`; \`feedbacks dos três cenários explicam uma próxima ação concreta\` | **Parcial.** Verifica escolha/feedback e que a simulação não ativa áudio real conforme o caminho testado. | Não testa hardware de áudio real, permissões do navegador, dispositivos assistivos ou entendimento do conteúdo. A ausência de chamadas reais é coberta por verificação de solicitações externas no fluxo exercitado, não por prova universal. |
| **OE-04 — pedir esclarecimento** | \`cenário de esclarecimento orienta a pedir repetição em vez de adivinhar\`; \`feedbacks dos três cenários explicam uma próxima ação concreta\` | **Parcial a substancial para as opções e mensagens verificadas.** | Não mede se a pessoa se sente à vontade para pedir esclarecimento, se compreende a instrução ou se transfere a ação para situações reais. |
| **OE-05 — confirmar encerramento/próximos passos** | \`etapa Encerrar permite praticar a confirmação dos próximos passos\`; \`reinicialização restaura escolhas, feedbacks, nota, etapa e foco\` | **Parcial.** Verifica escolha ausente, resposta esperada/distrator, feedback e reinício. | Não comprova aprendizagem ou desempenho real. Conferir manualmente anúncio do feedback, foco, navegação e legibilidade em dispositivos/tecnologias assistivas. |

## 2. Requisitos funcionais (RF)

| Requisito | Testes existentes relacionados | Estado da cobertura automatizada | Limite principal |
|---|---|---|---|
| **RF-01 — finalidade fictícia e limites** | \`apresenta o tema escolhido e as três etapas de treino de teleconsulta\`; \`os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais\` | Parcial | Verifica trechos e elementos específicos; não é revisão editorial integral de toda a interface. |
| **RF-02 — navegação por teclado/mouse/toque** | \`teclado percorre a navegação e ativa etapa com Enter\`; \`navegação move o foco para o título da etapa ativa\`; \`o painel de acessibilidade permanece acessível por teclado\`; \`com movimento reduzido ativo, a interface continua navegável\` | Parcial | Teclado e algumas transições são automatizados; toque real, leitores de tela, diferentes navegadores e dispositivos exigem inspeção manual. |
| **RF-03 — checklist** | \`checklist atualiza o status e Desmarcar tudo limpa as escolhas\`; \`reinicialização restaura escolhas, feedbacks, nota, etapa e foco\` | Parcial | Não avalia a adequação dos itens nem se condições reais estão disponíveis. |
| **RF-04 — entrada fictícia** | \`os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais\`; \`navegação completa não gera exceções JavaScript nem solicita recursos externos\` | Parcial | O teste de rede cobre o percurso exercitado; não é monitoramento de toda combinação de execução possível. |
| **RF-05 — controles fictícios de áudio/comunicação** | \`os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais\`; \`navegação completa não gera exceções JavaScript nem solicita recursos externos\` | Parcial | Não substitui inspeção manual das permissões, mídia, Network e Application no navegador. |
| **RF-06 — três cenários ramificados** | \`avaliação de compreensão exige escolha e apresenta feedback coerente\`; \`cenário de entrada recomenda usar link/canal oficial sem compartilhar senhas\`; \`cenário de esclarecimento orienta a pedir repetição em vez de adivinhar\`; \`etapa Encerrar permite praticar a confirmação dos próximos passos\`; \`feedbacks dos três cenários explicam uma próxima ação concreta\` | Cobertura automatizada ampla dos caminhos e feedbacks nomeados | Não cobre todas as combinações possíveis, nem adequação pedagógica validada com pessoas. |
| **RF-07 — prática interativa de encerramento** | \`etapa Encerrar permite praticar a confirmação dos próximos passos\`; \`reinicialização restaura escolhas, feedbacks, nota, etapa e foco\` | Parcial | Verifica comportamento da interface; a escala de facilidade é distinta e não constitui métrica educativa. |
| **RF-08 — feedback simples/respeitoso/explicativo** | \`avaliação de compreensão exige escolha e apresenta feedback coerente\`; \`cenário de entrada recomenda usar link/canal oficial sem compartilhar senhas\`; \`cenário de esclarecimento orienta a pedir repetição em vez de adivinhar\`; \`etapa Encerrar permite praticar a confirmação dos próximos passos\`; \`feedbacks dos três cenários explicam uma próxima ação concreta\` | Parcial a ampla nos textos explicitamente afirmados | Tom, clareza, compreensão e ausência de ambiguidade continuam exigindo revisão editorial; testes de texto não são validação de linguagem com o público-alvo. |
| **RF-09 — reiniciar e limpar estados** | \`reinicialização restaura escolhas, feedbacks, nota, etapa e foco\`; \`checklist atualiza o status e Desmarcar tudo limpa as escolhas\` | Coberto para os estados listados nas asserções | Fazer uma conferência manual adicional de todos os controles e de foco/feedback anunciado. |
| **RF-10 — não coletar/transmitir/persistir dados** | \`navegação completa não gera exceções JavaScript nem solicita recursos externos\`; \`preferências visuais podem ser combinadas e restauradas sem armazenamento persistente\`; \`preferências visuais não persistem após recarregar a página\` | Parcial e restrito aos fluxos/propriedades verificados | O teste de requisições externas não demonstra sozinho ausência universal de persistência ou transmissão. Inspecionar Network, Application, cookies, armazenamento e permissões no navegador. |
| **RF-11 — conteúdo fictício e sem orientação clínica individual** | \`os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais\`; testes de conteúdo dos cenários e feedbacks | Parcial | Não é uma revisão exaustiva de todo texto nem prova de que cada pessoa reconhecerá o caráter fictício. Revisar todas as telas e links manualmente. |

## 3. Requisitos de qualidade e acessibilidade

| Área | Testes automatizados localizados | O que eles permitem afirmar | O que não permitem afirmar |
|---|---|---|---|
| Navegação e foco | Testes de teclado, mudança de etapa, reinício e painel de acessibilidade | Os caminhos de teclado explicitamente exercitados têm asserções de foco/estado. | Não certificam toda a ordem de foco nem todos os leitores de tela. |
| Reflow/rolagem horizontal | \`não cria rolagem horizontal nas três etapas com viewport de 320, 360, 390, 768 e 1280 px\` | Não houve overflow horizontal nos viewports e etapas verificados, se a execução passar. | Não equivale a testar zoom real de 200%/400%, todos os conteúdos ou todos os navegadores. |
| Regras automatizadas de acessibilidade | \`axe-core: verificações WCAG 2.1/2.2 A/AA em Preparar, Entender e Próximos passos\`; \`axe-core: verifica acessibilidade nos três cenários de prática\` | O axe-core pode detectar violações automatizáveis nas telas/estados analisados. | Não certifica conformidade integral WCAG, usabilidade com leitor de tela, linguagem clara ou acessibilidade universal. |
| Movimento reduzido | \`com movimento reduzido ativo, a interface continua navegável\` | Verifica navegação no modo de movimento reduzido. | Não é uma auditoria completa de todas as animações/efeitos. |
| Tema, texto e contraste | \`controles de aparência e acessibilidade funcionam e o modo claro é o padrão\`; \`preferências visuais podem ser combinadas e restauradas sem armazenamento persistente\`; testes de uniformidade de opções | Verifica estados e combinações codificados. | Não substitui medição/inspeção de contraste de todas as combinações, zoom real ou leitura em ambientes diversos. |
| Erros de execução e dependências externas | \`navegação completa não gera exceções JavaScript nem solicita recursos externos\` | Verifica erros de página e requisições HTTP(S) no fluxo executado. | Não prova ausência de todo defeito ou de toda comunicação em qualquer condição. |

## 4. Plano de fechamento sem intervenção humana

Estas tarefas são automatizáveis ou documentais, mas **não devem ser confundidas com execução manual**:

1. Manter esta matriz atualizada quando os testes ou requisitos mudarem.
2. Quando houver acesso a ambiente de execução, rodar a suíte no commit atual e registrar o identificador exato do commit e o resultado real da CI.
3. Se uma asserção de teste for alterada, apontar o requisito correspondente nesta matriz.
4. Não marcar a auditoria manual como concluída com base em Playwright/axe-core.

## 5. Pendências que continuam dependentes de pessoa/ambiente

- Executar a auditoria manual no navegador/dispositivos realmente disponíveis: teclado e foco, leitor de tela, zoom/reflow, toque, combinações visuais, permissões e Network/Application.
- Executar e documentar as buscas bibliográficas formais nas interfaces oficiais, com strings realmente submetidas, contagens, exportações e triagem.
- Conferir integralmente os documentos oficiais do processo seletivo e discutir com a orientação a adequação metodológica.
- Não inferir aprendizagem, usabilidade do público-alvo ou eficácia educativa a partir da implementação ou dos testes automatizados.

## Fontes internas

- [Testes Playwright/axe-core](../tests/prototype.spec.js)
- [Mapa de objetivos educativos e tarefas](mapa-objetivos-educativos-e-tarefas.md)
- [Especificação do produto mínimo](produto-minimo.md)
- [Modelo de auditoria manual de acessibilidade](modelo-preenchimento-auditoria-manual-acessibilidade.md)
- [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md)
