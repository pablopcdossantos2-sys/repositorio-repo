# Implementação de controles visuais e acessibilidade

**Data:** 21/10/2026  
**Escopo:** barra de aparência/acessibilidade, temas, escala de texto, alto contraste, paletas, reforço de foco/leitura e uniformização dimensional dos cartões de resposta.  
**Estado:** implementação no código e testes adicionados; auditoria manual ainda pendente.

## 1. Funcionalidades incorporadas

| Recurso | Comportamento |
|---|---|
| Modo claro/escuro | O modo claro é o padrão. Um botão alterna o tema sem recarregar a página. |
| Tamanho do texto | Três níveis: normal, grande e muito grande. Os botões ficam desabilitados quando atingem o menor/maior nível. |
| Alto contraste | Alterna combinações de maior contraste para os temas claro e escuro e reforça bordas de componentes. |
| Paleta azul/âmbar | Reduz a dependência de vermelho e verde para diferenciar feedbacks; a mensagem de feedback continua escrita por extenso. |
| Paleta monocromática | Usa uma apresentação em preto e branco e também diferencia visualmente os feedbacks por estilo de borda, sem depender apenas de cor. |
| Foco e leitura reforçados | Torna o foco de teclado mais evidente, aumenta o espaçamento vertical e sublinha links. |
| Restaurar padrão | Retorna modo claro, texto normal, contraste e paleta padrão e foco reforçado desativado. |
| Cartões de resposta uniformes | As opções de rádio passam a ocupar toda a largura disponível e compartilham linhas de altura uniforme em cada conjunto de respostas. |

Os ajustes visuais permanecem somente na página atual e não são armazenados em `localStorage`, `sessionStorage` ou servidor. O botão de reiniciar o treino limpa as escolhas da simulação; o botão “Restaurar padrão” limpa apenas as preferências visuais.

## 2. Acessibilidade para pessoas cegas ou com baixa visão

Não foi criado um “modo para cegos” separado, pois leitores de tela operam sobre a estrutura e semântica da página, não sobre uma paleta visual. O protótipo mantém o link para pular ao conteúdo, títulos estruturados, controles HTML nativos, rótulos, grupos de respostas, foco visível e mensagens dinâmicas com `aria-live`. A barra de controles possui rótulos e estado anunciado e pode ser percorrida por teclado.

O uso prático com NVDA, JAWS, VoiceOver, TalkBack ou outras tecnologias assistivas não foi executado nesta rodada; não afirmar compatibilidade verificada com cada produto. O usuário também deve poder continuar usando os recursos de ampliação e leitura por voz do sistema operacional/navegador.

As opções azul/âmbar e monocromática podem ajudar algumas pessoas com deficiências de visão de cores, mas não cobrem todas as formas de daltonismo. O alto contraste, por sua vez, deve ser inspecionado com diferentes componentes e nos dois temas, não apenas pela presença de uma opção no menu.

## 3. Uniformidade das opções

Os três conjuntos de respostas — acesso ao link, falha de áudio e esclarecimento — agora usam um contêiner de grade e cartões com a mesma largura e alturas de linha uniformes. A implementação inclui um teste Playwright que compara a altura e a largura renderizadas das três opções de cada conjunto.

O teste deve ser conferido no resultado real da CI. A igualdade dimensional precisa ser reavaliada quando o texto está em tamanho muito grande, em zoom ampliado ou em viewport estreito, porque o texto pode ocupar linhas adicionais e a grade poderá crescer para acomodá-lo.

## 4. Verificações automatizadas

Foram adicionadas verificações estáticas para os controles, atributos padrão e ausência de armazenamento persistente, e testes Playwright para:
- modo claro padrão e alternância claro/escuro;
- aumento e redução do texto e limites dos botões;
- alto contraste, paletas e foco reforçado;
- restauração das preferências padrão;
- navegação por teclado no painel;
- comparação de largura e altura dos cartões de resposta.

A primeira execução Playwright/axe-core concluiu com falha: havia asserções de texto antigas que não correspondiam aos feedbacks editoriais atuais, e o axe-core identificou nomes acessíveis que não incluíam o texto visível em alguns controles. As verificações sintáticas, estáticas e HTML passaram. Corrigi as asserções e os nomes acessíveis. A nova execução, [GitHub Actions #39615349270](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39615349270), terminou com sucesso no commit [03578a9](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/03578a999aeca76b014e08563391f16662ea4f81): **26 testes Playwright/axe-core passaram**. Isso não certifica conformidade integral WCAG; a auditoria manual segue pendente.

## 5. Roteiro de auditoria manual pendente

1. Percorrer todos os controles apenas com Tab, Shift+Tab, Enter e Espaço; conferir foco visível.
2. Alternar claro/escuro e confirmar contraste de texto, botões, foco, estados marcados, cartões, avisos e feedbacks.
3. Testar alto contraste nos temas claro e escuro, tanto com paleta padrão quanto monocromática.
4. Alternar as paletas padrão, azul/âmbar e monocromática; confirmar que acerto/ nova tentativa continuam identificáveis pelo texto, não apenas pela cor.
5. Aumentar o texto até “Muito grande”, testar zoom do navegador e viewports de 320, 360 e 390 px; procurar cortes, sobreposição e rolagem horizontal.
6. Conferir dimensões de todos os cartões de resposta em cada cenário e se o foco/seleção continuam claros com texto ampliado.
7. Usar ao menos um leitor de tela compatível disponível para percorrer títulos, grupos de rádio, botões, estado da barra e mensagens de feedback.
8. Restaurar as preferências padrão e recarregar a página; verificar que o modo claro permanece padrão e nenhuma preferência foi persistida.

## 6. Limites

Testes automatizados de HTML, Playwright e axe-core identificam parte dos problemas, mas não certificam conformidade integral com WCAG. Não foi realizada avaliação com participantes; esses ajustes não comprovam usabilidade ou adequação para um grupo específico de deficiência visual. Os resultados manuais só devem ser registrados após cada verificação real.
