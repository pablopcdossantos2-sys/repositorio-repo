# Guia atualizado para a defesa oral

Esta versão acompanha a apresentação `defesa-oral-atualizada.odp`. Confirme no edital vigente a duração da etapa e se slides são permitidos.

## Mensagem central

O projeto **Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital** está em fase de fortalecimento documental e avaliação técnica. A prioridade é concluir a busca bibliográfica, executar a auditoria manual e registrar decisões de acessibilidade. Não iniciar atividades com participantes nem ampliar o escopo sem indicação explícita da orientação acadêmica.

## Roteiro de fala por slide

1. **Treino de Teleconsulta:** apresentar o simulador como recurso educativo simples, com situações fictícias e sem atendimento real.
2. **Problema e relevância:** dificuldades com links, áudio e compreensão podem criar barreiras; não citar números sem fonte verificada.
3. **Escopo atual:** sem chamada real, câmera, microfone, mensageria, prontuário, IA, diagnóstico, prescrição ou coleta de dados pessoais.
4. **Objetivos educativos:** OE-01 a OE-04 aparecem no checklist e nos cenários; isso não comprova aprendizagem. O conteúdo educativo de OE-05 é estático; a tela também possui uma escala local de facilidade (1–5), que não mede aprendizagem nem valida o protótipo.
5. **Protótipo atual:** etapas Antes/Durante/Encerrar; cenários “O link não abre”, “Não consigo ouvir” e “Não entendi uma informação”. No encerramento, o conteúdo educativo é estático; há também uma escala de facilidade 1–5 com feedback local, sem envio ou armazenamento.
6. **Verificação técnica:** último CI documentado: 22 testes Playwright + axe-core aprovados para o commit `11d5bee68f5f8de4234ab9f5388f7f1067545b69`. Não confundir testes automatizados com auditoria manual completa.
7. **Achados de contraste:** os cálculos são preliminares; bordas de alguns estados precisam de avaliação contextual antes de concluir se são informação visual essencial.
8. **Literatura:** Galvin et al. (2024), trabalhos metodológicos de Lesselroth et al. (2025/2026) e OMS/UIT (2024) são referências iniciais. As buscas formais ainda estão pendentes.
9. **Plano sem participantes:** executar buscas oficiais, auditoria manual de teclado/foco/zoom/reflow/leitores de tela/dispositivos e documentar rastreabilidade.
10. **Limites:** não há validação com usuários nem evidência de eficácia clínica; não há decisão de iniciar pesquisa com participantes nesta fase.
11. **Contribuição:** protótipo documentado, mapa de objetivos/tarefas, registro de barreiras e recomendações de melhoria.
12. **Por que este mestrado?:** personalizar com trajetória, motivação e objetivos reais; remover todos os campos entre colchetes.
13. **Mensagem final:** reforçar rigor técnico/documental e ausência de promessas além das evidências.
14. **Anexo de referências:** conferir metadados e ler os estudos citados antes da defesa.
15. **Anexo da auditoria:** explicar o que foi automatizado e o que continua pendente.

## Perguntas prováveis

**O protótipo já foi validado?**  
Não. Existem testes automatizados e inspeções estáticas parciais, mas a auditoria manual não foi concluída e não houve validação com participantes.

**A revisão bibliográfica está concluída?**  
Não. Existem referências exploratórias e estratégias propostas para PubMed/MEDLINE, BVS/LILACS e SciELO. Buscas oficiais, contagens, exportações e triagem continuam pendentes.

**Haverá testes com usuários?**  
Não é uma etapa assumida nesta fase. A prioridade é avaliação técnica sem participantes. Qualquer proposta com pessoas depende de discussão explícita com a orientação e das aprovações aplicáveis.

**Qual é a inovação?**  
Neste estágio, fale em contribuição potencial e incremental: cenários fictícios, feedback educativo e foco em ações seguras. A originalidade ainda não foi demonstrada por busca exaustiva.

**Por que não medir eficácia clínica?**  
O protótipo é demonstrativo e não há desenho nem evidência que permitam inferir eficácia clínica.

## Checklist antes da defesa

- [ ] Preencher nome completo e personalizar o slide “Por que este mestrado?”.
- [ ] Confirmar no edital vigente duração, formato e permissão para usar slides.
- [ ] Confirmar título e linha de pesquisa com a documentação oficial.
- [ ] Abrir o arquivo ODP no LibreOffice Impress e revisar fontes, quebras de linha e legibilidade.
- [ ] Testar o protótipo local e preparar capturas de tela caso haja demonstração.
- [ ] Conferir metadados e conteúdo das referências citadas.
- [ ] Ensaiar em voz alta e adaptar a fala ao tempo oficial.

## Estado das evidências

- **Documentado:** protótipo demonstrativo, cenários fictícios, roteiro de auditoria, mapa de objetivos educativos, duas rodadas de inspeção estática parcial e verificação preliminar de contraste.
- **Automatizado:** último CI documentado com 22 testes Playwright + axe-core aprovados no commit indicado.
- **Pendente:** buscas formais, contagens/triagem, auditoria manual, testes em dispositivos reais e leitores de tela.
- **Não realizado:** avaliação com participantes; não deve ser presumida como aprovada ou agendada.


**Nota de precisão pedagógica (20/10/2026):** a escala de facilidade no encerramento é uma interação de interface, não uma tarefa de aprendizagem para OE-05 nem instrumento de avaliação com participantes. Ver `docs/segunda-revisao-estatica-2026-10-20.md`.
