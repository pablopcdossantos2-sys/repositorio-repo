# Relatório de revisão técnica estática do protótipo

**Data:** 17/10/2026  
**Escopo:** inspeção do HTML, CSS e JavaScript em `produto/`; correções de código e critérios de teste.  
**Método:** leitura estática dos arquivos no repositório. Não foi executado teste automatizado em navegador real nesta rodada; portanto, não declarar conformidade integral com WCAG nem validação em dispositivos.

## 1. Resultado resumido

O protótipo já tinha uma base positiva: idioma declarado, meta viewport, link para pular ao conteúdo, rótulos associados aos checkboxes, controles nativos, estados de feedback com região `aria-live`, indicador de foco visível para controles e layout adaptável.

A inspeção também identificou oportunidades de melhoria, principalmente na gestão do foco quando a navegação ocultava o painel atual, na descrição acessível da escala de facilidade e na documentação de critérios de teste.

## 2. Alterações feitas

- Acrescentados `aria-controls` aos botões de navegação e nomes acessíveis às seções principais.
- Ao trocar de etapa, o foco passa para o título da seção de destino, em vez de permanecer potencialmente no botão do painel que acabou de ser ocultado.
- Adicionado `aria-hidden` sincronizado com a visibilidade dos painéis.
- A mudança de etapa respeita a preferência do sistema por movimento reduzido.
- As cinco opções de facilidade receberam nomes acessíveis e estado `aria-pressed` inicial e consistente.
- Adicionada instrução textual da escala (1 = difícil; 5 = fácil).
- Melhorado o comportamento em telas muito estreitas, com redução de espaçamentos e botões de ação empilhados.
- Reforçados tamanhos mínimos de alvos de toque e tratamento de textos longos.

## 3. Revisão do comportamento de reinicialização

O botão **Reiniciar demonstração** já limpava os checkboxes, a resposta selecionada, os feedbacks, a nota e retornava à primeira etapa. A versão atual também garante que os estados `aria-pressed` voltem explicitamente a `false`, limpa a cor inline do feedback de compreensão e sincroniza o estado acessível dos painéis.

O botão **Desmarcar tudo** continua destinado somente ao checklist da primeira etapa, o que corresponde ao seu rótulo. Ele não pretende reiniciar a demonstração inteira.

## 4. Itens que ainda exigem teste manual

- [ ] Abrir a página e percorrer todos os controles apenas com Tab, Shift+Tab, Enter e Espaço.
- [ ] Confirmar que o foco visível chega ao título da etapa após cada mudança e reinicialização.
- [ ] Verificar leitores de tela em pelo menos uma combinação de navegador e leitor disponível.
- [ ] Inspecionar em larguras de 320, 360, 390, 768 e 1280 CSS px, incluindo zoom de 200%.
- [ ] Confirmar ausência de rolagem horizontal inesperada e que textos/botões não se sobrepõem.
- [ ] Marcar itens, escolher resposta, selecionar nota e reiniciar; confirmar estado inicial completo.
- [ ] Repetir com preferência de movimento reduzido ativada.
- [ ] Conferir contraste de texto, foco, bordas e estados de erro com ferramenta apropriada.
- [ ] Verificar em navegador a ausência de requisições inesperadas e de armazenamento persistente.
- [ ] Executar verificador automático de acessibilidade como auxílio, sem tratá-lo como substituto de avaliação manual.

## 5. Limitações

Esta foi uma revisão estática e correção de código. Ela não prova conformidade WCAG 2.2, compatibilidade com todos os leitores de tela, usabilidade por pessoas com deficiência ou funcionamento em todos os dispositivos. Os itens pendentes devem ser marcados como concluídos somente após execução e registro dos testes.

## 6. Critérios de saída para esta fase

A revisão de código e a preparação do checklist estão concluídas. A verificação empírica do comportamento em navegador/dispositivos permanece pendente. Não foram realizados testes com participantes nem coletados dados de pesquisa.


## 7. Verificação complementar — 17/10/2026

### Inspeção do código e achados

Foi feita nova inspeção do HTML, JavaScript e CSS atuais, incluindo os caminhos de navegação e reinicialização descritos no código.

- **Navegação por teclado — inspeção de código:** os três destinos são botões HTML nativos, portanto entram na ordem normal de foco e aceitam ativação por teclado. Ao mudar de etapa, o script move o foco para o título do painel de destino e oculta os outros painéis com `display: none` via classe `.hidden` e `aria-hidden="true"`. Isso é coerente em princípio, mas precisa ser confirmado em navegador real.
- **Checklist — inspeção de código:** os checkboxes têm rótulos explícitos; o texto de estado é atualizado numa região `aria-live="polite"`. O botão “Desmarcar tudo” limpa apenas o checklist, como seu rótulo indica.
- **Compreensão — correção aplicada:** as opções de resposta estavam dentro de uma `div`, sem agrupamento semântico nativo. Foram envolvidas em `fieldset` com `legend` e o CSS foi ajustado para manter a apresentação visual. Isso dá ao leitor de tela um nome de grupo explícito.
- **Reinicialização — inspeção de código:** o botão limpa os checkboxes, a opção de rádio, as mensagens de feedback, a seleção de nota e os estados `aria-pressed`; em seguida, retorna à etapa inicial e move o foco ao título. A confirmação real ainda precisa ocorrer no navegador.
- **Escala de facilidade — inspeção de código:** as notas são botões com nomes acessíveis e `aria-pressed` sincronizado; a escala tem nome de grupo. O estado selecionado também é indicado visualmente, mas a percepção de contraste precisa ser medida.
- **Telas estreitas — inspeção de CSS:** há regras para 560 px e 360 px, ações empilhadas até 360 px, quebra de textos longos e alvos de toque com altura mínima declarada de 44 px. Essas regras não provam ausência de rolagem horizontal; isso depende de teste em navegador.
- **Movimento reduzido — inspeção de código/CSS:** o JavaScript consulta `prefers-reduced-motion` antes da rolagem suave, e o CSS remove transições quando a preferência está ativa.

### Limitação operacional desta rodada

**Não foi possível afirmar que o teste prático em navegador e leitor de tela foi concluído.** O repositório informa `has_pages: false` na metadata pública do GitHub e não foi encontrada configuração de workflow de publicação no inventário de arquivos. Além disso, o ambiente de execução desta revisão não conseguiu baixar os arquivos do GitHub para abrir a cópia local em Chromium. A inspeção acima é de código e metadata; não foi uma sessão real com Tab/Shift+Tab, zoom, TalkBack, NVDA ou VoiceOver.

### Próxima execução manual necessária

1. Abra `produto/index.html` localmente no navegador.
2. Use somente Tab e Shift+Tab para percorrer os controles; confirme foco visível e ordem lógica.
3. Ative cada botão com Enter e Espaço. Percorra as três etapas e confirme que o foco vai ao título correto.
4. Marque itens, escolha cada tipo de resposta e uma nota; reinicie e confirme que tudo volta ao estado inicial, inclusive as mensagens.
5. Repita em 320, 360, 390, 768 e 1280 px e com zoom de 200%; registre qualquer rolagem horizontal, sobreposição ou corte.
6. No Android, use TalkBack; em computador, use NVDA com Firefox ou leitor de tela já disponível. Confirme que o grupo de opções de compreensão é anunciado com a legenda, que mudanças de etapa são percebidas e que os feedbacks são lidos.
7. Use um verificador automatizado de acessibilidade e uma ferramenta de contraste como apoio, não como substituto do teste manual.

Não marcar os testes de navegador, dispositivo ou leitor de tela como concluídos até que alguém os execute e registre os resultados.


## 8. Verificação automatizada em navegador — 19/10/2026

### Ferramentas e escopo

Foi adicionada uma suíte Playwright com axe-core em `tests/prototype.spec.js`, executada pelo workflow `.github/workflows/prototype-quality.yml`. A execução automatizada foi realizada no GitHub Actions, em Chromium no runner Linux. Isso é evidência de execução automatizada; não equivale a teste em dispositivo físico ou com uma pessoa usando leitor de tela.

### Resultados

- **Verificações estáticas:** 14 verificações passaram no workflow [39355380708](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39355380708), incluindo sintaxe JavaScript, referências locais, IDs, alvos ARIA, movimento reduzido e cálculo de contraste do foco.
- **Testes de navegador e axe-core:** 17 testes passaram no workflow [39356918569](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39356918569), incluindo navegação por teclado, ausência de exceções JavaScript e verificação de solicitações externas inesperadas. A execução anterior, com 16 testes, também passou no workflow [39355833032](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39355833032).
- Os cenários incluem estado inicial e painéis ocultos, navegação por Tab e ativação por Enter, atualização/limpeza do checklist, foco depois da navegação, feedback de compreensão, seleção única de nota, reinicialização completa, ausência de rolagem horizontal nas três etapas em viewports de 320, 360, 390, 768 e 1280 pixels CSS, verificação de exceções JavaScript e solicitações externas durante os fluxos cobertos e navegação com movimento reduzido.
- axe-core foi executado nos três estados da interface com tags WCAG 2.1/2.2 A/AA. As três varreduras terminaram sem violações reportadas por essas regras automatizadas.

### Achado e correção aplicados

A primeira execução da suíte identificou uma violação `label-content-name-mismatch` na escala de facilidade: os nomes `aria-label` dos botões “1” e “5” não incluíam corretamente o texto visível (“Difícil” e “Fácil”). Os nomes acessíveis foram ajustados para `1 Difícil` e `5 Fácil`, preservando o nome de grupo que explica a escala; depois, a suíte completa passou.

### Limitações e pendências

1. A varredura automática não comprova conformidade integral com WCAG 2.2 e não substitui inspeção manual.
2. Não foram executados teste manual com NVDA, VoiceOver ou TalkBack nem testes com dispositivos físicos.
3. A verificação de responsividade automatizada mede ausência de rolagem horizontal inesperada apenas no estado inicial em viewports definidos; não avalia toda combinação de conteúdo, zoom, navegador ou dispositivo.
4. A inspeção de armazenamento/rede é parcialmente estática no script; ela não substitui uma inspeção manual da aba de rede e das ferramentas de armazenamento do navegador.
5. Os testes não envolvem participantes e não constituem validação de usabilidade ou compreensão clínica.

Os itens do checklist manual da seção 4 continuam pendentes até serem executados e documentados.


## 9. Validação formal de HTML e configuração de desenvolvimento — 20/10/2026

Foi adicionado o `html-validate` com regras recomendadas, executado no CI. A primeira execução identificou cinco erros de marcação em `produto/index.html):

1. Doctype fora do estilo recomendado (`<!doctype html>`), corrigido para `<!DOCTYPE html>`.
2. `aria-label` usado em um `div` sem papel semântico apropriado, removido para evitar rótulo redundante/inválido.
3. Os três botões de navegação por etapas não tinham atributo `type`, agora explicitamente `type="button"`.

Após as correções, a validação de HTML, os testes estáticos e os 16 testes Playwright/axe-core passaram na execução [39356779809](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39356779809).

Também foi adicionado `package.json` com versões diretas de ferramentas de desenvolvimento fixadas, `.nvmrc` com Node.js 24, `package-lock.json` v3 com a árvore de dependências transitivas e [instruções para executar as verificações localmente](como-executar-testes.md). A CI foi alterada para `npm ci`, usando o lockfile versionado. O [run 39358531889](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39358531889) concluiu com sucesso, incluindo validação de sintaxe, checagens estáticas, validação HTML e **17 testes Playwright/axe-core aprovados**.

As ações `actions/checkout` e `actions/setup-node` foram atualizadas para a série v7, baseada em runtime Node 24, removendo a dependência das versões antigas que geravam alerta sobre Node 20.


## Atualização de alinhamento ao tema escolhido — 20/10/2026

Após a escolha exclusiva de **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital**, a interface foi reorientada para três momentos de treino: preparação do aparelho e ambiente; situação fictícia de sala virtual, com ações interativas de entrada, conferência de áudio e comunicação da dificuldade; e encerramento, com pedido de esclarecimento e confirmação dos próximos passos.

Os controles da sala são apenas demonstrativos: não abrem conexão real, não ativam microfone/câmera e não enviam mensagens. A página declara os limites de uso assistencial e não solicita dados pessoais ou clínicos. Foram adicionados testes que verificam a identidade visual do tema, as três etapas, o cenário de áudio simulado e a resposta dos controles fictícios.

### Verificação automatizada após as mudanças

- **Data:** 20/10/2026.
- **Commit testado:** `21ee2dedef487c8f3f34fe571c467fc574643a01`.
- **Resultado da CI:** sucesso, [execução GitHub Actions nº 39366925143](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39366925143).
- **Verificações estáticas:** 15 concluídas.
- **Testes de navegador e axe-core:** 19 passaram; nenhum falhou nessa execução.
- **Validação do HTML, sintaxe JavaScript, instalação limpa e instalação do Chromium:** concluídas com sucesso nessa execução.

### Limites ainda pendentes

Essa CI valida o código e os fluxos automatizados do commit indicado; não substitui teste manual com teclado, leitor de tela, zoom, celulares e navegadores reais. Não é validação pedagógica com participantes e não comprova eficácia educativa, aprendizagem duradoura nem melhoria de participação em teleconsultas reais. A inspeção manual permanece pendente no [issue #2 — Testes manuais de acessibilidade do Treino de Teleconsulta](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/2). A avaliação com pessoas segue condicionada à definição do protocolo e às aprovações aplicáveis.


## 10. Validação após expansão para três cenários — 20/10/2026

### Fluxos incluídos

O cenário único de falha de áudio foi reorganizado em três situações selecionáveis: (1) link/sala indisponível; (2) dificuldade para ouvir; (3) informação não compreendida. Cada situação tem escolhas e feedback dependente da resposta. Os controles são inteiramente fictícios e não iniciam chamadas, não ativam áudio/vídeo nem enviam mensagens.

### Resultado da integração contínua

- **Execução:** [GitHub Actions nº 39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486), resultado **success**.
- **Commit do workflow:** `11d5bee68f5f8de4234ab9f5388f7f1067545b69`.
- **Verificações estáticas:** 15 passaram.
- **Validação de sintaxe, HTML e instalação limpa das dependências:** sucesso.
- **Testes Playwright/axe-core:** **22 passaram**, incluindo teste por cenário para o feedback e varredura de acessibilidade em cada um dos três cenários.
- **Contraste calculado no verificador estático:** foco `#005fcc` em branco 5,98:1 e em `#f4f7fb` 5,57:1; borda `#7d8c99` em branco 3,45:1 e em `#f4f7fb` 3,21:1.

Depois da execução, os arquivos de produto e teste mantiveram os mesmos hashes de conteúdo no `main`; as alterações posteriores foram em documentação. Assim, os resultados de CI correspondem aos arquivos atuais do protótipo.

### Pendências que permanecem

- Testes manuais com teclado, leitor de tela, ampliação/zoom e dispositivos físicos ainda não foram executados.
- O cálculo estático de contraste não garante que toda combinação de estados, fundos e limites visuais esteja conforme a WCAG; verificar os componentes que dependem de bordas para serem identificados.
- A revisão pedagógica e o uso autônomo versus mediado ainda precisam ser discutidos com a orientação.
- A busca bibliográfica formal nas interfaces oficiais e o benchmarking completo continuam pendentes.
- Não houve recrutamento, teste com participantes nem validação de eficácia educativa.

A execução automatizada confirma a qualidade técnica coberta pelos testes, não a usabilidade real nem a aprendizagem do público pretendido.


## Roteiro de execução da próxima auditoria

O checklist operacional e a matriz de rastreabilidade produto–requisito estão em [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md). O roteiro foi criado como documento de trabalho, mas seus itens manuais não foram executados nesta atualização.


## 8. Inspeção estática complementar — 20/10/2026

Foi realizada uma nova inspeção estática dos arquivos correntes de produto, sem execução em navegador. O registro detalhado, com hashes dos arquivos e estado por caso de auditoria, está em [Registro da auditoria estática do protótipo — 20/10/2026](registro-auditoria-estatica-2026-10-20.md).

Principais resultados: o HTML contém apenas checkboxes e rádios para checklist/escolhas; não foram encontradas referências externas em `src`/`href`; o JavaScript inspecionado não contém chamadas comuns de rede ou persistência (`fetch`, `XMLHttpRequest`, `localStorage`, `sessionStorage`, cookies, `WebSocket`, `sendBeacon`, `indexedDB`). A lógica de navegação, feedback e reinicialização foi lida estaticamente. Isso **não comprova** ausência universal de tráfego/armazenamento nem conformidade integral com WCAG.

Continuam pendentes a execução manual de teclado/foco, teste de rede/armazenamento no navegador, leitor de tela, zoom/reflow, contraste integral, movimento reduzido e verificação da distribuição. Não houve alteração de código nem nova execução de CI nesta rodada; não atribuir aos arquivos inspecionados um resultado de CI sem conferir o workflow correspondente ao commit atual.


## 9. Segunda revisão estática complementar — 20/10/2026

Foi inspecionada novamente a versão corrente dos arquivos HTML/JS/CSS e a suíte escrita em `tests/prototype.spec.js`. O relatório específico [segunda revisão estática do protótipo](segunda-revisao-estatica-2026-10-20.md) registra hashes e resultados: 24 IDs sem duplicação na varredura, três destinos de `aria-controls` existentes, nove referências `getElementById` sem destino ausente, nenhuma URL HTTP(S) em `href`/`src` e nenhuma ocorrência das APIs comuns de rede/persistência pesquisadas no JS.

A leitura dos arquivos de teste indica cobertura escrita para navegação, foco, cenários, feedback, reinicialização, escala de facilidade, larguras de viewport, axe-core e solicitações externas durante um fluxo automatizado. Isso não significa que os testes tenham sido executados nesta rodada. Não houve execução em navegador, alteração do produto ou nova CI.

A escala interativa de facilidade (1–5) no encerramento foi distinguida do objetivo OE-05: o conteúdo educativo de encerramento permanece estático e a escala não é medida de aprendizagem, coleta de pesquisa ou validação com usuários.


## 10. Revisão editorial de feedbacks — 20/10/2026

Os textos de situação, opções e feedback dos três cenários foram revisados para tornar a próxima ação mais concreta, reduzir ambiguidade e manter tom respeitoso e não clínico. O registro de decisões e a relação com as fontes estão em [revisão editorial dos cenários e feedbacks](revisao-editorial-cenarios-feedbacks-2026-10-20.md).

- **OE-02 — link:** orientar a conferir conexão e link/canal oficial conhecido e pedir ajuda por contato oficial conhecido; alertar contra compartilhar senhas ou dados pessoais em links inesperados.
- **OE-03 — áudio:** conferir volume e, quando disponível, a saída de som; comunicar a dificuldade se persistir.
- **OE-04 — esclarecimento:** pedir repetição/explicação alternativa e confirmar o próximo passo, sem adivinhar.
- **Teste acrescentado:** `tests/prototype.spec.js` verifica que os feedbacks contêm orientações concretas nos três cenários.

**Commits de código/teste:** [ee4f89f](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/ee4f89fc94ccbe2f91839e3a56b23b67092c656b), [e97887c](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/e97887ce65bd4225d01b6d40e3ffb07d6db2c70d) e [63a267b](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/63a267bd7ecd61f9effd22db79a3e36388b22455).

Após a revisão mais recente do texto, foram refinados os feedbacks em `produto/app.js` (commit [3a5184a](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/3a5184a345bbef26cdad93b22c3f43b2def39931)) e as instruções/opções em `produto/index.html` (commit [586bc1b](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/586bc1b438a54e6ff8e11e6be36626d5691c608f)). A suíte `tests/prototype.spec.js` recebeu asserções específicas para o canal oficial conhecido, proteção de senha/código, orientação sobre saída de som e confirmação do próximo passo (commit [492d562](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/492d562b2a674e8c42eb4e48a320a290a2af0a43)). A consulta ao status combinado do commit de teste não retornou status checks; portanto, não há execução aprovada confirmada nesta atualização. O desenvolvedor ainda deve executar `npm test` conforme o tutorial e registrar o resultado real.

A configuração do workflow inclui `produto/**` e `tests/**` nos gatilhos de push para `main`, mas não foi possível confirmar um resultado de CI associado ao commit de teste nesta atualização. Portanto, a execução e o resultado permanecem pendentes de conferência. A revisão é editorial e não demonstra compreensão pelo público-alvo; também não substitui a inspeção manual no navegador.
