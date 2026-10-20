# Especificação do produto mínimo — Treino de Teleconsulta

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
4. **Ao encerrar:** a pessoa pratica como pedir repetição/esclarecimento, confirmar os próximos passos que foram apresentados no cenário e procurar canal oficial se a dúvida permanecer.
5. **Reiniciar:** limpa escolhas e feedbacks locais e devolve o foco ao título inicial.

## Requisitos funcionais mínimos

- **RF-01:** apresentar finalidade, natureza simulada e limites antes das atividades.
- **RF-02:** permitir navegar entre as etapas por teclado, mouse e toque.
- **RF-03:** oferecer checklist simples de preparação, sem solicitar informações identificáveis.
- **RF-04:** oferecer o botão “Entrar na sala de treino” para praticar a entrada numa sala virtual fictícia; o feedback deve deixar claro que nenhuma conexão real é aberta.
- **RF-05:** disponibilizar controles fictícios e interativos para praticar entrada, conferência de áudio e comunicação da dificuldade, sem ativar microfone/câmera ou enviar mensagens.
- **RF-06:** oferecer ao menos três cenários ramificados (acesso à sala, falha de áudio e pedido de esclarecimento) com escolhas plausíveis e feedback contextual.
- **RF-07:** oferecer uma prática de comunicação, como pedir que uma informação seja repetida ou confirmar um próximo passo.
- **RF-08:** fornecer feedback simples, respeitoso e explicativo para cada escolha relevante.
- **RF-09:** permitir reiniciar a sessão local e limpar todas as escolhas/feedbacks.
- **RF-10:** não coletar, armazenar ou transmitir respostas ou dados pessoais/clínicos.
- **RF-11:** manter todo conteúdo demonstrativo explicitamente fictício e sem instrução clínica individual.

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

## Avaliação proposta

As tarefas candidatas incluem:
1. Identificar itens básicos de preparação do dispositivo e ambiente.
2. Responder à situação em que o link não abre, escolhendo conferir conexão/link oficial e contatar um canal oficial conhecido sem compartilhar senha.
3. Diante de um cenário sem áudio, escolher uma ação apropriada (conferir o controle visível ou avisar que não consegue ouvir).
4. Diante de uma informação pouco clara, ensaiar pedido de repetição/esclarecimento.
5. Localizar e confirmar os próximos passos que o cenário apresentou.
6. Reiniciar a experiência e verificar que as escolhas, feedbacks e seleção de cenário foram limpos.

Indicadores candidatos: conclusão de tarefa, erro/ação inesperada, necessidade de ajuda, compreensão da instrução, facilidade percebida e sugestões de melhoria. Tarefas, rubrica, instrumentos e plano de análise precisam ser definidos previamente no protocolo.

## Critério de pronto para avaliação técnica

- As etapas têm objetivo educativo e instrução clara.
- Os cenários não parecem serviço oficial nem convidam à inserção de dados reais.
- Os fluxos funcionam por mouse, toque e teclado.
- Foco, mensagens de estado, contraste, zoom e larguras pequenas foram inspecionados.
- A reinicialização limpa estados locais e retorna o foco corretamente.
- Os critérios de êxito e os instrumentos propostos são coerentes com o protocolo.
- Qualquer atividade com participantes está bloqueada até a confirmação das aprovações aplicáveis.
