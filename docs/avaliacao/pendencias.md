# Pendências — Avaliação técnica, pedagógica e acessibilidade

**Atualização:** 30/10/2026  
**Estado:** testes automatizados e inspeção estática documentados; auditoria manual anterior inconclusiva.  
**Referências:** [protocolo preliminar](planejamento/protocolo-preliminar-avaliacao.md), [roteiro sem participantes](roteiro-auditoria-tecnica-sem-participantes.md), [registros](registros/) e [auditorias](auditorias/).

## A. Dependem do desenvolvedor do projeto

- [ ] **AVA-H01 — Executar rodada manual em ambientes reais** (teclado, zoom, larguras/dispositivos e leitor de tela disponível), registrando sistema, navegador, versões e observações. **Evidência:** registro datado preenchido, inclusive NT/BL quando não testado.
- [ ] **AVA-H02 — Disponibilizar dispositivos e tecnologias assistivas** necessários para cobrir ambientes não acessíveis à IA.
- [ ] **AVA-H03 — Discutir com a orientação se a avaliação sem participantes atende aos objetivos acadêmicos.** Inclusão de pessoas deve ser encaminhada à fase [Campo e ética](../campo-etica/pendencias.md).
- [ ] **AVA-H04 — Aprovar eventual inspeção independente** e indicar quem a realizará, se a orientação considerar necessária.

## B. A IA pode solucionar autonomamente

- [ ] **AVA-IA01 — Conferir CI e testes automatizados do SHA indicado**, sem reutilizar resultados históricos como atuais.
- [ ] **AVA-IA02 — Revisar cobertura e qualidade dos testes**, propondo/implementando testes automatizados adicionais quando adequados.
- [ ] **AVA-IA03 — Analisar registros manuais fornecidos** e classificar achados, severidade, impacto, reprodução e recomendações.
- [ ] **AVA-IA04 — Revisar rubrica pedagógica e correspondência** entre objetivos, tarefas, feedback e critérios de inspeção, sem tratar tarefas simuladas como aprendizagem observada.
- [ ] **AVA-IA05 — Verificar consistência dos relatórios e limites de inferência**, inclusive privacidade e distinção entre inspeção e teste com participantes.
- [ ] **AVA-IA06 — Atualizar relatório, matriz e status** após novas evidências; defeitos só podem ser encerrados após reteste documentado.

## Histórico

| Data | Registro |
|---|---|
| 30/10/2026 | Controle criado; auditoria manual de 21/10 mantida como inconclusiva. |