# Revisão editorial dos cenários e feedbacks

**Data:** 20/10/2026  
**Escopo:** revisão documental dos textos dos três cenários atuais; não é validação com usuários.  
**Base:** mapa de objetivos educativos, nota de evidências e decisões, benchmark exploratório e referências já registradas no repositório.

## Princípios aplicados

1. **Uma ação segura por vez:** descrever um próximo passo concreto, sem prometer resolver falhas de conexão ou de equipamento.
2. **Feedback explicativo e não punitivo:** indicar por que a escolha é mais segura e como tentar novamente, sem envergonhar a pessoa.
3. **Segurança e privacidade:** recomendar canais oficiais já conhecidos; não incentivar o uso de links inesperados nem o compartilhamento de senhas/códigos.
4. **Comunicação clara:** preferir palavras comuns e frases curtas; distinguir “volume do aparelho” de “saída de som”, quando essa opção existir.
5. **Limite não clínico:** praticar a comunicação e a confirmação do que foi dito, sem inventar, alterar ou interpretar orientações clínicas.
6. **Fidelidade ao produto:** os botões e salas são fictícios. A interface não abre serviços reais nem ativa áudio.
7. **Alegações proporcionais:** a resposta escolhida demonstra apenas o comportamento dentro da tarefa simulada; não prova aprendizagem ou competência em uma consulta real.

## Revisão por objetivo

### OE-02 — O link não abre

**Risco editorial identificado:** “usar o link recebido pelo canal oficial” pode ser interpretado como confiar em qualquer mensagem que pareça oficial. O feedback precisa enfatizar a confirmação por um canal oficial que a pessoa já conhece, além de não compartilhar senha ou código.

**Formulação revisada na interface:** conferir a conexão e confirmar o link usando um canal oficial já conhecido; se o acesso continuar indisponível, procurar esse contato para pedir ajuda. A opção incorreta menciona senha/código em link inesperado, sem descrever procedimentos perigosos em detalhe.

**Feedback correto:** reconhece a escolha, explica os passos e reforça que senha/código não devem ser compartilhados em links inesperados.

**Feedback de tentativa:** não culpa a pessoa; explica o risco ou a consequência de não avisar o serviço e oferece uma alternativa segura.

**Limite:** o simulador não consegue verificar a autenticidade de um link nem solucionar a conexão; isso está explícito no cenário.

### OE-03 — Não consigo ouvir

**Risco editorial identificado:** “controle de áudio” pode ser abstrato para quem não conhece a interface. O texto agora cita o volume do aparelho e, se disponível, a saída de som, e recomenda avisar a pessoa profissional se a dificuldade continuar.

**Formulação revisada na interface:** conferir o volume e a saída de som disponível; se ainda não ouvir, comunicar a dificuldade e pedir ajuda.

**Feedback correto:** confirma a sequência e informa que a situação é fictícia, sem chamada ou áudio real.

**Feedback de tentativa:** propõe conferir som e comunicar a dificuldade, em vez de sair sem explicar o problema.

**Limite:** não inclui diagnóstico de defeitos, instalação de software nem passos específicos de uma plataforma, porque o simulador não representa um serviço real.

### OE-04 — Não entendi uma informação

**Risco editorial identificado:** o feedback deve apoiar comunicação e confirmação, sem se transformar em orientação clínica.

**Formulação revisada na interface:** pedir repetição ou explicação de outro jeito e confirmar o próximo passo mencionado no cenário.

**Feedback correto:** explica que pedir esclarecimento ajuda a evitar mal-entendidos e orienta confirmar o próximo passo, sem adivinhar nem alterar uma orientação por conta própria.

**Feedback de tentativa:** oferece a mesma estratégia em linguagem simples, sem julgar a pessoa.

**Limite:** o exemplo não avalia se uma orientação clínica está correta; ensina apenas a pedir esclarecimento e confirmar o que foi dito.

### OE-01 — Checklist “Antes”

O checklist continua sendo uma lista de preparação, não uma tarefa de demonstração de competência. Os itens de bateria, conexão, privacidade e dúvidas são coerentes com a finalidade de preparação já documentada. O estado marcado é temporário e não prova que a pessoa tem equipamento, conexão ou privacidade adequados.

### OE-05 — Encerrar

**Decisão nesta rodada:** manter o conteúdo educativo estático e não adicionar uma nova interação. A tela oferece exemplos para pedir esclarecimento, confirmar o próximo passo e localizar o canal oficial, mas isso não constitui tarefa com escolha e feedback para OE-05. A escala local de facilidade de 1 a 5 não mede aprendizagem nem atende ao objetivo.

A necessidade de uma tarefa interativa mínima deve ser discutida após a revisão da literatura e da relação custo-benefício pedagógica; não é uma decisão de implementação tomada nesta rodada.

## Relação com as fontes já registradas

- **Galvin et al. (2024), revisão de escopo sobre treinamento de usuários em telessaúde:** relata abordagens de preparação e uma base de evidência limitada/mista para melhoria de competência. Isso apoia a necessidade de descrever claramente o que o recurso oferece e não autoriza alegar eficácia.
- **HHS, guias de preparação para teleconsulta:** servem como referência prática para preparação e apoio; recomendações devem ser adaptadas ao escopo fictício e não tratadas como protocolo universal de uma plataforma.
- **WHO/ITU (2024), toolkit de acessibilidade em telessaúde:** sustenta considerar acessibilidade desde o planejamento; a revisão textual não substitui auditoria de teclado, leitor de tela, zoom, contraste e dispositivos.
- **Digital House Calls (BridgingApps):** já identificado no benchmark como recurso autoguiado com etapas antes/durante/depois. Portanto, essa organização não deve ser apresentada como inovação exclusiva do projeto.
- **Lesselroth et al. (2025; 2026):** estudos metodológicos sobre simulações educativas para profissionais de saúde; são evidência adjacente para planejar tarefas e critérios, não validação direta do conteúdo para usuários finais.

Referências e limites completos estão em:
- [Nota de evidências e decisões](nota-evidencias-e-decisoes-teleconsulta-2026-10-20.md)
- [Benchmark exploratório](benchmark-recursos-existentes.md)
- [Referências iniciais e plano de busca](referencias-e-busca-bibliografica.md)
- [Mapa de objetivos educativos e tarefas](mapa-objetivos-educativos-e-tarefas.md)

## Verificação necessária após a revisão

- [ ] Desenvolvedor abre o protótipo e testa cada opção correta/incorreta e cada botão de simulação.
- [ ] Executar `npm test` conforme o tutorial e registrar o commit testado e a saída real.
- [ ] Confirmar manualmente teclado, foco e leitura das mensagens dinâmicas.
- [ ] Revisar a linguagem com a orientação acadêmica.
- [ ] Não marcar o conteúdo como validado por usuários: nenhuma avaliação com participantes foi realizada.

**Status:** revisão editorial aplicada ao texto do protótipo e documentada; teste de regressão após as alterações e inspeção manual ainda pendentes.
