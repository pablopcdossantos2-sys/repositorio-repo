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

Também foi adicionado `package.json` com versões diretas de ferramentas de desenvolvimento fixadas, `.nvmrc` com Node.js 24 e [instruções para executar as verificações localmente](como-executar-testes.md). **Ainda não há `package-lock.json` versionado**, portanto as dependências transitivas não estão completamente travadas. O roadmap mantém essa limitação aberta em vez de declarar a instalação plenamente reproduzível.

As ações `actions/checkout` e `actions/setup-node` foram atualizadas para a série v7, baseada em runtime Node 24, removendo a dependência das versões antigas que geravam alerta sobre Node 20.
