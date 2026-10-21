# Registro da auditoria manual de acessibilidade — análise inicial

**Projeto:** Treino de Teleconsulta  
**ID:** AUD-MAN-2026-10-21-01  
**Data registrada:** 21/10/2026  
**Instrumento:** 1.1  
**Status do arquivo:** recebido e arquivado; **resultado da auditoria não validado**.

## Arquivos arquivados

- [JSON exportado (cópia pública redigida)](AUD-MAN-2026-10-21-01.json) — preserva a estrutura e os valores informados no JSON recebido, exceto a identificação completa do responsável e o caminho local, omitidos nesta cópia pública.
- [PDF de consulta (cópia pública compacta)](AUD-MAN-2026-10-21-01.pdf) — versão reformatada em quatro páginas a partir do JSON, para facilitar leitura e arquivamento. **Não é uma cópia bit a bit do PDF de 24 páginas enviado.** A divergência entre os dois arquivos fornecidos foi documentada, não resolvida silenciosamente.

Os arquivos públicos não incluem o nome completo nem o caminho local do computador registrados nos originais. A identificação e o caminho foram substituídos apenas nas cópias destinadas ao repositório público; os resultados de auditoria não foram modificados.

## O que está registrado

- O JSON contém 59 casos, todos marcados **C — Conforme**; os demais códigos têm contagem zero.
- As 59 evidências individuais estão vazias.
- As oito combinações da matriz visual também estão marcadas C, mas as oito evidências estão vazias.
- O único perfil assinalado é **Mouse/trackpad**. O campo de leitor de tela/versão está vazio; o campo de outras tecnologias assistivas diz “nenhuma outra tecnologia assistiva utilizada”.
- O formulário marca a conclusão “Casos desta rodada executados sem falhas observadas”, mas os campos de limitações e próximas ações estão vazios, assim como todo o registro de defeito.

## Divergências e pontos a confirmar

1. **Viewport:** no JSON o campo `metadata.viewport` está vazio; o PDF recebido informa `1280 × 800`. A cópia PDF arquivada mantém a divergência explicitamente e não preenche o valor ausente do JSON.
2. **Commit e CI:** o formulário registra o commit `872b28c0ef06f96706d5132c6dfa6bba34a73196`, enquanto o link de CI é [a execução #39615349270](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39615349270), associada à validação automatizada do commit de código `03578a999aeca76b014e08563391f16662ea4f81`. Confirmar qual commit do protótipo foi realmente testado e registrar a CI correspondente a essa versão.
3. **Sistema operacional:** a exportação informa “Windows (versão técnica reportada: 19.0.0; confirme a edição)”. Esse texto não identifica por si só a edição do Windows usada. Conferir nas configurações do sistema e corrigir, se necessário.
4. **Amplitude dos testes:** há casos sobre teclado, leitor de tela, ampliação/reflow, combinação de cores e dispositivos móveis marcados C sem evidência associada. O campo “Zoom” informa 100%, enquanto alguns casos solicitam testes a 200% e 400%. Isso não prova que os testes não foram feitos, mas impede verificar a execução a partir do registro arquivado.

## Interpretação

**Não interpretar esta rodada como evidência suficiente de que os 59 casos passaram.** Os códigos C foram preservados como respostas submetidas, não convertidos em falhas nem corrigidos automaticamente. Porém, sem evidências e sem registro das condições de teste, a conclusão deve permanecer **inconclusiva / requer complementação**.

## Próxima rodada recomendada

1. Reexecutar os casos e registrar evidência observável para cada resposta C, por exemplo ambiente, ação realizada e resultado observado.
2. Para qualquer caso não executado, usar NT; usar BL apenas quando uma dependência impediu a execução. Não manter C por suposição.
3. Registrar as configurações específicas quando testar teclado, leitor de tela, zoom/reflow, contraste e telas móveis.
4. Confirmar o commit testado, a execução CI correspondente, o sistema operacional e o viewport; exportar novamente JSON e PDF após reconciliar os campos.
5. Preservar este registro como histórico original da rodada. Não sobrescrever os resultados recebidos com resultados de um reteste.

Esta nota é uma leitura documental dos arquivos fornecidos. Não representa uma auditoria independente do protótipo nem uma certificação de conformidade WCAG.
