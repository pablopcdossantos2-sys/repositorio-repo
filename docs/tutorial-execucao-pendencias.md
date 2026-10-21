# Tutorial de execução das pendências — auditoria, busca bibliográfica e validação do CI

**Projeto:** Treino de Teleconsulta  
**Versão:** 1.0 · **Preparado em:** 21/10/2026  
**Público-alvo:** desenvolvedor, pessoa responsável pelos testes técnicos ou pesquisador responsável pela documentação.

## Objetivo e limites

Este tutorial transforma em tarefas reproduzíveis três pendências do projeto: (1) auditoria manual de acessibilidade; (2) execução e registro das buscas bibliográficas; e (3) comparação documental com recursos existentes. Inclui também como verificar os testes automatizados no GitHub Actions.

O protótipo é um simulador educativo fictício. Não use dados reais de pacientes, informações de saúde, documentos pessoais ou contas reais de serviços de saúde. Não convide participantes para pesquisa nesta etapa. Este roteiro é uma inspeção técnica/documental, não uma avaliação clínica, uma certificação WCAG, uma revisão sistemática concluída ou uma demonstração de eficácia educativa.

## Antes de começar

1. Abra o repositório: <https://github.com/pablopcdossantos2-sys/repositorio-repo>.
2. Entre em **Code** e confira a branch `main`.
3. Abra o arquivo [Estado atual do projeto e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md) antes de alterar código ou documentação.
4. Abra [o modelo de auditoria manual](modelo-preenchimento-auditoria-manual-acessibilidade.md) e faça uma cópia para a nova rodada. **Não substitua nem reescreva** o registro histórico `AUD-MAN-2026-10-21-01`: ele permanece inconclusivo se não tiver evidências observáveis.
5. Registre a data, o commit que está sendo testado e o ambiente real utilizado. Se não souber o commit, na página principal do repositório copie o identificador curto exibido no commit mais recente da branch `main`.
6. Use um perfil de navegador sem dados pessoais e feche outras abas que possam exibir informações privadas.

## Parte A — verificar os testes automatizados no GitHub Actions

### A1. Abrir a execução correta

1. Abra o repositório no GitHub.
2. Clique em **Actions**.
3. Procure o workflow de qualidade do protótipo, chamado aproximadamente **Prototype quality** ou conforme o nome exibido no repositório.
4. Localize a execução correspondente ao commit que deseja conferir. Compare o identificador do commit na execução com o commit da branch `main`; não presuma que a execução mais recente corresponde ao código que está examinando.
5. Abra a execução e confira o estado geral e cada tarefa individual.

### A2. Interpretar o resultado

- **Success / verde:** todas as tarefas incluídas naquela execução terminaram com sucesso.
- **Failure / vermelho:** abra a tarefa que falhou, leia a primeira mensagem de erro relevante e copie o nome da tarefa e o trecho necessário para reproduzi-la.
- **Queued / In progress:** ainda não há resultado final.
- **Nenhuma execução encontrada:** confirme o commit e os filtros. Alguns workflows só rodam quando arquivos cobertos pelos filtros são alterados; uma alteração apenas documental pode não iniciar a CI.
- **Workflow ignorado ou não executado:** isso não significa que os testes passaram.

No histórico recente do projeto, o commit `d2d3044a36f72b2e87d07e13606f0068f5b5eebb` teve uma execução registrada com verificações estáticas, testes da ferramenta de busca e testes Playwright/axe-core aprovados. Isso não comprova, por si só, o estado de commits posteriores, nem substitui a verificação do commit atualmente publicado.

### A3. Guardar evidência

Registre no relatório: URL da execução, SHA completo do commit, data/hora exibida, resultado geral, nomes das tarefas e eventuais falhas. Uma captura de tela pode complementar o registro, mas deve mostrar o identificador do commit. Não escreva apenas “CI passou”.

## Parte B — auditoria manual de acessibilidade

### B1. Preparar o ambiente

1. Abra a aplicação a partir do endereço de demonstração usado pelo projeto ou execute-a conforme as instruções atuais do README. Se não conseguir iniciar a aplicação, registre o bloqueio e a mensagem; não invente resultados.
2. Registre sistema operacional, dispositivo, navegador e versão, tamanho aproximado da janela/viewport e zoom.
3. Para cada combinação de ambiente, crie um registro separado. Não misture observações feitas em computador com observações feitas em celular.
4. Abra o modelo [Modelo de preenchimento — auditoria manual](modelo-preenchimento-auditoria-manual-acessibilidade.md) e copie-o para um novo arquivo, por exemplo `docs/auditorias/AUD-MAN-AAAA-MM-DD-01.md`. Use a data real e um identificador que ainda não exista.
5. Na cópia, substitua os campos de ambiente e de execução; não marque critérios antecipadamente.

### B2. Teste de teclado, sem mouse

Faça esta rodada em computador:

1. Recarregue a aplicação.
2. Não toque no mouse depois de começar.
3. Pressione `Tab` repetidamente e observe se o foco aparece claramente e segue uma ordem lógica.
4. Use `Shift+Tab` para voltar; confirme que a ordem inversa faz sentido.
5. Use `Enter` e `Espaço` nos controles que indiquem ser acionáveis. Não presuma que um controle funciona só porque parece um botão.
6. Passe por todas as etapas do simulador, pelos controles de preferências visuais e por todos os exercícios interativos.
7. Verifique se é possível abrir, usar e fechar os componentes sem ficar preso em uma região da página.
8. Confirme se o foco não desaparece atrás de cabeçalhos, rodapés ou elementos sobrepostos.
9. Registre cada falha com o nome do controle, as teclas pressionadas, o resultado esperado e o observado.

**Evidência mínima:** descrição reproduzível, controle afetado e ambiente. Se possível, capture uma imagem sem informações pessoais.

### B3. Teste de ampliação e layout

Faça uma rodada separada por navegador/dispositivo:

1. Com zoom de 100%, registre a aparência inicial.
2. Aumente o zoom para 200%; percorra as três etapas e os exercícios. Verifique cortes, sobreposição, texto escondido e controles inacessíveis.
3. Aumente para 400%, quando o navegador permitir. Não confunda o zoom do navegador com a configuração de tamanho de texto do sistema operacional.
4. Verifique se é possível ler e operar sem precisar rolar simultaneamente em duas direções para ler parágrafos comuns.
5. Teste a largura estreita de um celular ou uma janela estreita do navegador. Registre a largura aproximada em pixels CSS se souber obtê-la; não invente uma medida.
6. Confira se menus, diálogos, mensagens de feedback e botões continuam visíveis e utilizáveis.
7. Registre qual recurso foi usado: zoom do navegador, ampliação do sistema ou tamanho de fonte. São testes distintos.

### B4. Teste com leitor de tela

Faça apenas se houver leitor de tela disponível e se você puder utilizá-lo. Se não houver, marque os itens correspondentes como **NT (Não testado)** ou **BL (Bloqueado)** e indique o motivo.

**Windows com NVDA (opção gratuita):**
1. Acesse <https://www.nvaccess.org/download/> e instale o NVDA conforme as instruções oficiais, se estiver autorizado a instalar software.
2. Leia o guia oficial para começar: <https://www.nvaccess.org/files/nvda/documentation/userGuide.html>.
3. Abra a aplicação no navegador e inicie o NVDA.
4. Percorra a página usando navegação por teclado e comandos de leitura do NVDA.
5. Observe se o nome, o papel e o estado dos controles são anunciados; se títulos e regiões ajudam a entender a estrutura; e se mensagens de feedback são percebidas sem depender apenas de cor.
6. Faça os exercícios e as mudanças de etapa. Confirme se o leitor de tela anuncia mudanças importantes e se a ordem de leitura continua compreensível.

**Android com TalkBack (opção alternativa):**
1. Consulte as instruções oficiais do Android: <https://support.google.com/accessibility/android/answer/6283677?hl=pt-BR>.
2. Ative o TalkBack somente se estiver confortável com os gestos necessários; leia primeiro o tutorial do próprio sistema.
3. Abra a aplicação no navegador do celular.
4. Explore todos os controles com os gestos de navegação do TalkBack e tente executar os mesmos fluxos disponíveis.
5. Registre o modelo do aparelho, a versão do Android, o navegador e o leitor de tela. Não generalize o resultado para todos os aparelhos.

Não é necessário testar Windows e Android na mesma rodada. É melhor registrar claramente uma combinação real do que afirmar cobertura de um ambiente que não foi testado.

### B5. Contraste, cor, foco e mensagens

1. Confira texto normal, texto grande, botões, bordas relevantes, foco e mensagens de erro/feedback.
2. Verifique se informação importante não é transmitida exclusivamente por cor.
3. Experimente cada opção visual oferecida pela interface e combinações entre elas.
4. Observe se o foco continua perceptível em alto contraste, modo escuro e tamanho de texto aumentado.
5. Use cálculos automatizados de contraste existentes apenas como evidência complementar: registre quais cores foram calculadas e confirme visualmente o componente renderizado.
6. Não declare conformidade geral com WCAG com base apenas em axe-core, em uma ferramenta de contraste ou nesta rodada.

### B6. Como preencher cada caso

Use os códigos definidos no modelo:
- **C — Conforme:** você executou o caso, observou o critério e registrou evidência.
- **PC — Parcial:** parte passou, mas há limitação.
- **NC — Não conforme:** o critério falhou; descreva como reproduzir.
- **NT — Não testado:** não executado.
- **BL — Bloqueado:** uma dependência impediu a execução.

Para cada linha, inclua resultado, evidência breve e ambiente. Exemplo fictício de registro adequado: “NC — no Firefox versão X, com zoom de 400%, o botão ‘Continuar’ ficou fora da área visível e não foi alcançado por Tab; reproduzido após recarregar”. Não copie o exemplo como se fosse uma observação real.

### B7. Se encontrar um defeito

1. Abra uma issue no GitHub com título claro, passos para reproduzir, resultado esperado, resultado observado, ambiente e evidência sem dados pessoais.
2. Não altere o resultado histórico. Faça uma nova rodada depois da correção.
3. Registre o SHA do commit corrigido e o SHA do commit retestado.
4. Marque como resolvido somente quando o reteste realmente passar; se não puder retestar, deixe explícito.

## Parte C — executar e documentar a busca bibliográfica

### C1. Bases e fontes oficiais

Execute as buscas separadamente em cada base. Abra:
- PubMed: <https://pubmed.ncbi.nlm.nih.gov/>
- BVS: <https://bvsalud.org/>
- LILACS via BVS: <https://lilacs.bvsalud.org/>
- SciELO: <https://search.scielo.org/>

O protocolo e as estratégias já aprovadas para esta etapa estão em [Registro de execução das buscas bibliográficas](registro-busca-estruturada-2026-10-20.md). **Use as strings desse arquivo como fonte de verdade**: copie cada estratégia completa sem reescrevê-la de memória. Se a interface exigir adaptação, registre a versão adaptada e o motivo.

### C2. Registrar uma execução por estratégia e base

Para cada consulta:

1. Abra a base e cole a estratégia completa no campo de busca.
2. Execute a pesquisa.
3. Registre a data e a hora local, nome da base, estratégia exata, eventuais filtros e total de resultados mostrado pela própria interface.
4. Se a interface avisar que termos foram ignorados ou convertidos, registre a mensagem e copie a consulta interpretada quando disponível.
5. Exporte os resultados no formato oferecido pela base, preferencialmente RIS ou NBIB quando disponíveis; CSV pode ser usado se contiver metadados suficientes.
6. Nomeie o arquivo com base, identificador da estratégia e data, por exemplo `PUBMED_PM-1_AAAA-MM-DD.nbib`. Não use este exemplo como data real.
7. Abra o arquivo exportado e confirme que não está vazio e que contém registros bibliográficos.
8. Guarde a exportação e a anotação do total de resultados. O total exibido e o número de registros exportados podem divergir por limites da interface; explique a diferença se ocorrer.

Não aplique filtros de idioma, data ou tipo de publicação que não estejam previstos no protocolo sem registrar a mudança. Não some os resultados de bases diferentes como se fossem artigos únicos.

### C3. Busca complementar automatizada no PubMed (opcional)

O repositório contém [um guia para executar a ferramenta complementar de PubMed](guia-execucao-pubmed-automatizada.md) e o script `scripts/buscar-pubmed.mjs).

1. Siga o guia para preparar Node.js e abrir um terminal na pasta do repositório.
2. Execute apenas os comandos descritos no guia.
3. Guarde os JSONs produzidos sem substituir resultados anteriores.
4. Confira a consulta, o timestamp, os parâmetros, o total informado e os PMIDs retornados.
5. Se ocorrer erro de rede, registre o erro; não o trate como zero resultados.
6. Compare a consulta automatizada com a consulta da interface oficial e explique qualquer diferença.

O script é complementar e não substitui a execução registrada na interface oficial. Testes automatizados com respostas simuladas comprovam o comportamento do script, não a realização da busca bibliográfica real.

### C4. Triar registros e controlar duplicatas

1. Reúna as exportações originais em uma pasta de trabalho e mantenha-as sem alteração.
2. Importe cópias em um gerenciador bibliográfico (por exemplo, Zotero: <https://www.zotero.org/>), ou use outro método documentado.
3. Faça a identificação de duplicatas por DOI, PMID, título e ano. Revise manualmente casos ambíguos.
4. Registre o número de registros importados, duplicatas removidas e registros únicos restantes.
5. Leia título e resumo usando critérios de inclusão/exclusão que estejam escritos antes da triagem. Se um critério ainda não foi definido, registre-o como pendência em vez de inventá-lo silenciosamente.
6. Para cada exclusão, registre uma categoria e, quando apropriado, uma justificativa breve.
7. Não exclua artigos só porque estão em inglês ou porque não descrevem exatamente o protótipo. Estudos adjacentes podem ser úteis se forem identificados como evidência indireta.
8. Leia texto completo apenas quando acessível legalmente por fonte institucional, repositório aberto ou acesso autorizado. Registre “texto completo não obtido” quando aplicável.

### C5. Relatório mínimo da busca

No registro da rodada, inclua uma tabela com: base, identificador, string exata, data/hora, filtros, total exibido, formato/nome do arquivo exportado, registros exportados, duplicatas, registros únicos e observações. Registre também quem executou cada etapa, sem inserir dados pessoais desnecessários.

Só declare a busca formal executada depois que as consultas, contagens e exportações tiverem evidências verificáveis. Até lá, o status deve continuar como pendente ou parcial.

## Parte D — concluir o benchmark de recursos existentes

### D1. Consultar as fontes já identificadas

Comece pelo documento [Benchmark exploratório de recursos existentes](benchmark-recursos-existentes.md) e pela [matriz de aplicabilidade WHO/ITU](matriz-aplicabilidade-who-itu-prototipo.md). As fontes já registradas incluem:
- Digital House Calls, curso em inglês: <https://bridgingapps.org/courses/digital-house-calls-a-step-by-step-guide-for-telemedicine-visits-english>
- Digital House Calls, curso em espanhol: <https://bridgingapps.org/courses/digital-house-calls-spanish/>
- WHO/ITU, toolkit de acessibilidade para serviços de telessaúde: <https://www.who.int/publications/b/74046>
- Ministério da Saúde, visão geral de Telessaúde: <https://www.gov.br/saude/pt-br/composicao/seidigi/sus-digital/telessaude>
- Telessaúde Bahia, tutorial de acesso: <https://telessaude.saude.ba.gov.br/25181-2/>

### D2. Comparar sem presumir conteúdo inacessível

Para cada recurso, registre:
1. Nome, instituição responsável, idioma, público-alvo e URL.
2. Data em que a página foi consultada.
3. O que foi observado diretamente e o que a página apenas declara.
4. Sequência de tarefas ensinadas, tipo de prática, feedback, apoio a erros, acessibilidade descrita, requisitos de conta e custo.
5. Limitações de acesso. Se o conteúdo interno exigir login e você não tiver acesso, escreva “conteúdo interno não verificado”; não deduza que o recurso tem ou não tem determinada função.
6. Quais requisitos podem inspirar o simulador, quais são parcialmente aplicáveis e quais pertencem a uma plataforma de teleconsulta real e estão fora do escopo do protótipo fictício.

### D3. Escrever uma síntese comparativa

Crie ou atualize uma tabela de comparação com uma linha por recurso e uma coluna para cada dimensão acima. Diferencie claramente:
- **Observado:** verificado diretamente na página ou no conteúdo acessível.
- **Declarado pela fonte:** descrito pelo mantenedor, mas não testado independentemente.
- **Não verificado:** sem evidência suficiente.
- **Fora de escopo:** requisito de serviço real que não se aplica diretamente ao simulador fictício.

Finalize com oportunidades de melhoria do protótipo, limitações e próximos passos. Não declare que o projeto é inovador, superior ou eficaz sem um método de comparação adequado e evidências que sustentem essas conclusões.

## Parte E — checklist de encerramento da rodada

Antes de encerrar, confirme:

- [ ] O SHA do protótipo testado está registrado.
- [ ] A execução de CI corresponde ao mesmo SHA, ou a ausência de execução está explicada.
- [ ] Cada caso manual tem resultado e evidência, ou está explicitamente como NT/BL.
- [ ] O registro histórico de auditoria foi preservado.
- [ ] As buscas têm strings exatas, datas, totais e arquivos exportados.
- [ ] Erros de rede não foram registrados como zero resultados.
- [ ] Duplicatas e decisões de triagem podem ser reconstituídas.
- [ ] O benchmark distingue observação, declaração da fonte e conteúdo não verificado.
- [ ] Nenhum dado pessoal ou de saúde foi incluído.
- [ ] As conclusões não excedem as evidências disponíveis.

## Como devolver os resultados ao projeto

1. Crie um arquivo de registro datado em `docs/` ou na subpasta apropriada, sem sobrescrever os modelos.
2. Inclua links para os arquivos de evidência armazenados no repositório quando forem apropriados e não contiverem dados pessoais; para arquivos bibliográficos grandes, documente a localização de armazenamento autorizada em vez de adicionar dados sensíveis.
3. Atualize o README e o roadmap com o status real: concluído, parcial, pendente ou bloqueado.
4. Faça commit com uma mensagem descritiva.
5. Se os resultados forem incertos, preserve a incerteza e descreva o próximo passo necessário.

**Critério de conclusão:** uma tarefa só é considerada concluída quando há registro reproduzível e evidência adequada. “Não consegui executar” é um resultado válido se documentado corretamente; não é uma falha a esconder nem motivo para inventar evidências.
