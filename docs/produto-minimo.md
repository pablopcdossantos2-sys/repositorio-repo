# Especificação do produto mínimo — Treino de Teleconsulta

> Para manter a continuidade, leia [Estado atual do projeto e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md). O plano inicial é desenvolvimento e avaliação técnica/pedagógica sem participantes; as tarefas abaixo são candidatas para inspeção interna. Testes com pessoas só serão incluídos se a orientação acadêmica indicar que são necessários e após confirmar viabilidade e autorizações.

## Propósito

Criar um **simulador educativo digital** em que adultos com baixa familiaridade digital possam praticar ações básicas de participação em uma teleconsulta, sem ingressar em um atendimento real. O produto precisa ensinar por meio de passos práticos, não apenas apresentar um texto informativo.

## Enquadramento acadêmico

- **Tema escolhido:** Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital.
- **Linha:** 2) Tecnologias para Educação em Saúde.
- **Tipo:** Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Público de interesse:** adultos com baixa familiaridade digital; a definição operacional e a elegibilidade ainda precisam ser estabelecidas com a orientação.
- **Objetivo educativo preliminar:** permitir a prática guiada de tarefas digitais associadas ao antes, durante e encerramento de uma teleconsulta.
- **Limite de inferência:** concluir uma tarefa simulada ou acertar uma pergunta não comprova aprendizagem duradoura nem competência para todas as situações reais.

## Princípios de design

- Uma instrução principal por tela, frases curtas, termos concretos e explicação de palavras técnicas.
- Passos visíveis, progressão previsível, opções claras de voltar e reiniciar.
- Feedback respeitoso e orientado para a ação, sem culpar a pessoa por erros.
- Leitura fácil em celular, alvos de toque generosos, foco de teclado visível, suporte a tecnologia assistiva e movimento reduzido.
- Não inferir incapacidade de uma pessoa por idade, escolaridade ou diagnóstico.
- Não pedir dados pessoais, contato, sintomas, medicamentos, documentos ou identificadores.
- Todos os serviços, links, pessoas, avisos e problemas simulados são fictícios e não devem imitar uma plataforma oficial real.

## Fluxo principal

1. **Tela inicial:** explica que é treino simulado, sem conexão com serviço real, sem coleta de dados, e permite iniciar ou rever as instruções.
2. **Antes da teleconsulta:** oferece checklist de preparação do aparelho, conexão, ambiente com privacidade e perguntas que a pessoa quer lembrar.
3. **Durante — sala virtual fictícia:** oferece três situações com ramificação e feedback: o link não abre; a pessoa não consegue ouvir; e uma informação não ficou clara. A pessoa escolhe uma ação e recebe explicação sem conexão real.
4. **Ao encerrar — estado atual:** a interface apresenta exemplos estáticos de como pedir repetição/esclarecimento, confirmar os próximos passos e procurar um canal oficial. Ainda não há uma tarefa interativa com escolha e feedback que pratique o objetivo OE-05; portanto, não descrever essa etapa como prática interativa implementada.
5. **Reiniciar:** limpa escolhas e feedbacks locais e devolve o foco ao título inicial.

## Requisitos funcionais mínimos

- **RF-01:** apresentar finalidade, natureza simulada e limites antes das atividades.
- **RF-02:** permitir navegar entre as etapas por teclado, mouse e toque.
- **RF-03:** oferecer checklist simples de preparação, sem solicitar informações identificáveis.
- **RF-04:** oferecer o botão “Entrar na sala de treino” para praticar a entrada numa sala virtual fictícia; o feedback deve deixar claro que nenhuma conexão real é aberta.
- **RF-05:** disponibilizar controles fictícios e interativos para praticar entrada, conferência de áudio e comunicação da dificuldade, sem ativar microfone/câmera ou enviar mensagens.
- **RF-06:** oferecer ao menos três cenários ramificados (acesso à sala, falha de áudio e pedido de esclarecimento) com escolhas plausíveis e feedback contextual.
- **RF-07 (pendente de implementação/decisão):** oferecer uma prática de comunicação, como pedir que uma informação seja repetida ou confirmar um próximo passo. A tela atual só apresenta exemplos estáticos; a escala local de facilidade de 1 a 5 não atende a este requisito.
- **RF-08:** fornecer feedback simples, respeitoso e explicativo para cada escolha relevante.
- **RF-09:** permitir reiniciar a sessão local e limpar todas as escolhas/feedbacks.
- **RF-10:** não coletar, armazenar ou transmitir respostas ou dados pessoais/clínicos.
- **RF-11:** manter todo conteúdo demonstrativo explicitamente fictício e sem instrução clínica individual.

## Estado atual dos requisitos funcionais

A tabela separa a especificação desejada da implementação observada no código atual. “Implementado” não significa que a auditoria manual esteja concluída.

| Requisito | Estado atual | Evidência/pendência |
|---|---|---|
| RF-01 — explicar finalidade fictícia e limites | Implementado | Avisos e limites aparecem na interface; confirmar a clareza na revisão editorial. |
| RF-02 — navegação por teclado, mouse e toque | Implementado em código | Auditoria manual de teclado, foco e dispositivo permanece pendente. |
| RF-03 — checklist de preparação | Implementado | Há quatro itens e controle para desmarcar; confirmar comportamento manualmente. |
| RF-04 — entrada fictícia na sala | Implementado | O botão apresenta feedback e não abre uma sala real. |
| RF-05 — controles fictícios de áudio e comunicação | Implementado | Os controles só atualizam mensagens locais; confirmar no navegador e na inspeção de rede. |
| RF-06 — três cenários com escolhas e feedback | Implementado | Link, áudio e esclarecimento; revisão editorial e auditoria manual pendentes. |
| RF-07 — prática interativa de encerramento | **Pendente / decisão de escopo** | Há exemplos estáticos, mas não uma tarefa de escolha com feedback para OE-05. |
| RF-08 — feedback claro e respeitoso | Parcialmente implementado | Feedbacks existem nos três cenários; revisão pedagógica e de linguagem pendente. |
| RF-09 — reiniciar e limpar estados locais | Implementado em código | Confirmar manualmente que todos os estados e o foco retornam corretamente. |
| RF-10 — não coletar/transmitir/persistir dados | Implementado por desenho e inspeção estática parcial | Não equivale a prova universal; executar a verificação de Network/Application no navegador. |
| RF-11 — conteúdo fictício e sem aconselhamento clínico | Implementado em conteúdo atual | Revisar textos e verificar que nada sugere serviço oficial ou instrução clínica individual. |

**Decisão de planejamento:** não implementar uma nova interação de encerramento automaticamente. Primeiro revisar o objetivo OE-05, a evidência bibliográfica, o ganho pedagógico esperado e o custo de teste. Se for mantido como requisito da primeira versão, especificar a tarefa, as opções, o feedback e os testes automatizados antes de alterar o código.

## Requisitos de qualidade e acessibilidade

- Interface responsiva e utilizável em telas pequenas.
- Linguagem clara, instruções diretas e uma tarefa principal por etapa.
- Contraste adequado, foco visível, títulos estruturados, controles identificáveis e mensagens de estado acessíveis.
- Estado não indicado apenas por cor; navegação e mensagens consistentes.
- Funcionamento sem dependências externas em tempo de uso.
- Consideração de baixo consumo de dados e tolerância a pausas/interrupções.
- Inspeção técnica e revisão pedagógica; nenhuma alegação de conformidade integral sem testes adequados.

## Fora do escopo da primeira versão

- Teleconsulta ao vivo, áudio/vídeo, chat com profissional ou agendamento real.
- Integração com prontuário, portal, login ou sistema oficial.
- Uso de IA, chatbot clínico ou análise automática de dados.
- Coleta de nome, CPF, contato, sintomas, diagnóstico, medicamentos ou prontuário.
- Diagnóstico, triagem, prescrição, recomendação de tratamento ou alteração de conduta.
- Alertas clínicos, lembretes de atendimento real ou acompanhamento de pacientes.
- Publicação como produto validado ou oficial do SUS.

## Tarefas candidatas para inspeção do fluxo

As tarefas abaixo servem primeiro para conferir se o protótipo e seus feedbacks funcionam conforme os requisitos; não constituem evidência de usabilidade com pessoas. Se a orientação solicitar avaliação empírica, o protocolo deverá ser revisado e aprovado antes da realização. As tarefas candidatas incluem:
1. Identificar itens básicos de preparação do dispositivo e ambiente.
2. Responder à situação em que o link não abre, escolhendo conferir conexão/link oficial e contatar um canal oficial conhecido sem compartilhar senha.
3. Diante de um cenário sem áudio, escolher uma ação apropriada (conferir o controle visível ou avisar que não consegue ouvir).
4. Diante de uma informação pouco clara, ensaiar pedido de repetição/esclarecimento.
5. Localizar e confirmar os próximos passos que o cenário apresentou.
6. Reiniciar a experiência e verificar que as escolhas, feedbacks e seleção de cenário foram limpos.

Para auditoria sem participantes, registrar resultado esperado/observado, defeitos, passos para reproduzir e retestes. Indicadores como necessidade de ajuda, facilidade percebida e compreensão relatada só se aplicam caso seja aprovada e realizada uma avaliação com pessoas. Tarefas, rubrica, instrumentos e plano de análise para uma eventual avaliação empírica precisam ser definidos previamente no protocolo.

## Critério de pronto para avaliação técnica

- As etapas têm objetivo educativo e instrução clara.
- Os cenários não parecem serviço oficial nem convidam à inserção de dados reais.
- Os fluxos funcionam por mouse, toque e teclado.
- Foco, mensagens de estado, contraste, zoom e larguras pequenas foram inspecionados.
- A reinicialização limpa estados locais e retorna o foco corretamente.
- Os critérios de êxito e os instrumentos propostos são coerentes com o protocolo.
- Qualquer atividade com participantes está bloqueada até a confirmação das aprovações aplicáveis.
