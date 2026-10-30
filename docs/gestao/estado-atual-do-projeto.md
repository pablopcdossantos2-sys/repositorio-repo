# Estado atual do projeto

**Atualizado em:** 30/10/2026  
**Título de trabalho:** *Treino de Teleconsulta: desenvolvimento e avaliação de um simulador educativo web para adultos com baixa familiaridade digital.*  
**Linha de pesquisa:** 2) Tecnologias para Educação em Saúde.  
**Tema de trabalho:** Tema 4 — Treino de Teleconsulta.

Este é o documento de referência para o estado atual. Registros detalhados e decisões antigas foram preservados em [Arquivo histórico](../_arquivo/README.md); em caso de divergência, use este documento e o [roadmap ativo](roadmap.md), e registre uma decisão nova quando houver orientação explícita.

## 1. Situação por fase

| Fase | Situação conhecida |
|---|---|
| Anteprojeto e seleção | Há um rascunho Markdown e o modelo DOCX oficial arquivado. O rascunho não segue a estrutura interna do DOCX e não está pronto para submissão. O status efetivo da candidatura não está documentado aqui. |
| Fundamentação | Há benchmark e levantamento exploratório. As buscas formais nas interfaces PubMed/MEDLINE, BVS/LILACS e SciELO ainda não têm contagens e exportações documentadas. |
| Protótipo | Existe um simulador web estático em HTML, CSS e JavaScript, com três momentos: preparação, situações fictícias durante a teleconsulta e encerramento. O encerramento inclui escolha única com feedback local. |
| Avaliação | Há testes automatizados e registros de inspeção estática. A rodada manual AUD-MAN-2026-10-21-01 foi considerada inconclusiva; não equivale a auditoria manual concluída. |
| Ética e campo | Não há parceria institucional formal, aprovação ética ou estudo com participantes documentados. A base de trabalho permanece sem participantes. |
| Defesa | Há um roteiro atualizado e um ODP anterior preservado. O ODP não deve ser usado como apresentação final sem revisão e atualização. |

## 2. Identidade e limites do produto

O simulador ensina, por meio de cenários fictícios, tarefas digitais relacionadas à participação em uma teleconsulta: preparar dispositivo e ambiente, lidar com dificuldades simples de acesso e áudio, pedir esclarecimentos e confirmar os próximos passos.

O produto:
- não realiza teleconsulta nem contato com profissionais reais;
- não usa áudio ou vídeo ao vivo;
- não se conecta a prontuários ou sistemas de saúde;
- não oferece diagnóstico, prescrição, triagem ou aconselhamento clínico;
- não solicita, transmite ou persiste dados pessoais ou de saúde;
- não inclui login, IA ou serviços de terceiros em tempo de uso.

Guaraí-TO é cenário potencial de articulação, não parceria confirmada. A avaliação com pessoas não faz parte do plano-base; qualquer alteração depende de decisão acadêmica, análise de viabilidade e autorizações institucionais e éticas aplicáveis.

## 3. Evidências que exigem cautela

- A busca exploratória não demonstra, por si só, originalidade nem ausência de soluções semelhantes.
- Uma aprovação de CI só vale para o SHA efetivamente testado. A última execução citada em documentos antigos é histórica; conferir a aba Actions antes de informar a contagem atual.
- A auditoria manual inicial de 21/10/2026 é inconclusiva. Não a descrever como concluída.
- Inspeções técnicas e tarefas simuladas não demonstram aprendizagem duradoura, adoção, mudança de comportamento ou eficácia clínica.

## 4. Seleção e candidatura

O PDF do edital arquivado indica 30/10/2026 às 12h; documentos baseados na página do Programa indicaram 29/10/2026 às 12h. Ambas as datas já passaram. O repositório não permite inferir se houve inscrição, prorrogação, recurso ou protocolo. Confirme o status diretamente no sistema e com o Programa, sem usar os antigos alertas de prazo como instruções atuais.

Não foi localizado no repositório um pacote final composto por anteprojeto preenchido no DOCX, PDF final, carta e declaração assinadas e comprovante de protocolo. Isso descreve apenas o conteúdo versionado aqui, não o que o candidato possa ter enviado fora do GitHub.

## 5. Fontes de trabalho atuais

- [Anteprojeto, seleção e submissão](../anteprojeto/README.md)
- [Fundamentação e evidências](../fundamentacao/README.md)
- [Especificação do protótipo](../prototipo/README.md)
- [Avaliação e auditoria](../avaliacao/README.md)
- [Defesa oral](../defesa/README.md)
- [Roadmap ativo](roadmap.md)
- [Tutorial operacional de tarefas e verificações](tutorial-execucao-pendencias.md)
