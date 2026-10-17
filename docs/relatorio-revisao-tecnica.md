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
