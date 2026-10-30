# Estado atual do projeto e diretrizes para IAs

**Data da consolidação:** 20/10/2026  
**Branch de referência:** `main`  
**Finalidade:** orientar IAs e colaboradores que retomarem o repositório, mantendo decisões atuais separadas de alternativas históricas e propostas ainda não aprovadas.

> **Leia este documento antes de propor alterações, escrever texto acadêmico ou modificar o protótipo.** Ele consolida a orientação de trabalho mais recente do responsável pelo projeto. Em caso de conflito com rascunhos antigos, listas de tarefas ou propostas metodológicas anteriores, siga as decisões abaixo até que o responsável pelo projeto ou a orientação acadêmica registre uma mudança explícita.

## 1. Diretriz vigente mais importante

O projeto deve começar com **baixa complexidade e nenhuma ou pouca interação com pessoas**.

O plano padrão atual é:

1. revisar e registrar literatura pertinente;
2. mapear e comparar soluções educativas existentes;
3. derivar requisitos e objetivos educativos a partir das fontes, distinguindo evidência publicada de hipótese de design;
4. desenvolver um protótipo web simples;
5. avaliá-lo por inspeção técnica, pedagógica, de linguagem e de acessibilidade, sem participantes.

**Não planejar entrevistas, oficinas, codesenho, observação de usuários, questionários ou testes com pessoas como requisito inicial.** Se o orientador acadêmico disser explicitamente que é necessário testar o protótipo ou colher dados diretamente de pessoas, o projeto será revisto para incluir somente a etapa necessária. Antes disso, não presumir que essa etapa ocorrerá, nem definir amostra, campo, recrutamento ou instrumentos como decisões tomadas.

Esta diretriz não afirma que a avaliação sem participantes será suficiente para a dissertação: isso precisa ser confirmado com a orientação acadêmica e com os requisitos vigentes do curso.

## 2. Identidade e limites do projeto

- **Tema exclusivo:** Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital.
- **Linha de pesquisa:** 2) Tecnologias para Educação em Saúde.
- **Tipo de projeto de trabalho:** pesquisa tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Produto:** simulador educativo web simples para praticar passos digitais de uma teleconsulta fictícia.
- **Público de interesse conceitual:** adultos com baixa familiaridade digital. A definição operacional é pendente e não deve ser inferida automaticamente de idade, escolaridade, deficiência ou diagnóstico.
- **Cenário:** Guaraí-TO é apenas uma possibilidade de articulação; não há parceria ou campo confirmado.
- **Estado acadêmico:** anteprojeto e método permanecem em elaboração, sujeitos à orientação, ao edital e ao modelo institucional vigentes.

As outras ideias/tópicos existentes em registros históricos não são alternativas ativas e não devem redirecionar o produto ou a pesquisa.

## 3. Protótipo existente: o que há e o que não há

A aplicação em `produto/index.html`, `produto/app.js` e `produto/styles.css` é um protótipo demonstrativo de baixa fidelidade, ainda em desenvolvimento. O fluxo atual inclui:

- **Antes:** preparação e checklist;
- **Durante:** situações fictícias “O link não abre”, “Não consigo ouvir” e “Não entendi uma informação”, com opções e feedback;
- **Encerrar:** exemplos fictícios de próximos passos, exercício de escolha única sobre confirmar combinados/etapas/contato conhecido e feedback local; a escala de facilidade de 1 a 5 permanece separada e não mede aprendizagem.

O produto deve continuar simples, acessível, sem dependências externas em tempo de uso e sem dados reais. Manter estas restrições:

- não realiza consulta nem contato com profissionais reais;
- não usa áudio ou vídeo ao vivo;
- não se conecta a serviços de saúde, prontuários ou plataformas de teleconsulta;
- não oferece diagnóstico, prescrição, triagem ou aconselhamento clínico individual;
- não deve solicitar, transmitir ou persistir dados pessoais ou clínicos;
- não adicionar contas de usuário, chatbot/IA, integrações, rastreamento ou novas funções complexas sem uma nova justificativa explícita e revisão de escopo.

Todos os nomes, mensagens e situações devem permanecer fictícios e não devem imitar um portal oficial de forma enganosa.

## 4. Evidências e pesquisa bibliográfica: estado real

Já existe uma rodada de busca exploratória complementar na web, um benchmark inicial de recursos existentes (`../fundamentacao/benchmark-recursos-existentes.md`), um roteiro de auditoria técnica/pedagógica/acessibilidade sem participantes (`../avaliacao/roteiro-auditoria-tecnica-sem-participantes.md`), um mapa preliminar de objetivos educativos/tarefas (`../protótipo/mapa-objetivos-educativos-e-tarefas.md`) e documentação de estudos e recomendações de acessibilidade. Em 20/10/2026, foram criados o [registro de execução das buscas bibliográficas](../../fundamentacao/registros/registro-busca-estruturada-2026-10-20.md) e o [registro da auditoria estática parcial](../../avaliacao/registros/registro-auditoria-estatica-2026-10-20.md). A verificação preliminar de contraste foi registrada em [verificacao-preliminar-contraste-2026-10-20.md](../../avaliacao/registros/verificacao-preliminar-contraste-2026-10-20.md); não substitui a auditoria manual. O benchmark identifica, entre outros, o curso Digital House Calls, o tutorial do TelessaúdeBA, guias do HHS, a ferramenta de prontidão do NCFH e o toolkit WHO/ITU. Ela serve para orientar perguntas e requisitos, mas **não é uma busca bibliográfica formal, sistemática ou reproduzível concluída**.

Continuam pendentes:
- executar e documentar buscas nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO — as strings e o formulário de registro foram consolidados, mas as consultas oficiais ainda não foram executadas com contagens/exportações reproduzíveis;
- registrar strings exatas efetivamente submetidas, datas, filtros, contagens, exportações, deduplicação e critérios de seleção; o registro atual marca esses campos como pendentes, sem inventar contagens;
- conferir referências e ler criticamente as fontes relevantes;
- aprofundar o benchmark exploratório de guias, vídeos, tutoriais, recursos educativos e simuladores existentes;
- sustentar a lacuna e a contribuição específica do produto sem presumir originalidade.

Não afirmar “revisão sistemática”, “revisão de escopo”, novidade comprovada, validação com usuários ou eficácia sem que o método e as evidências realizadas sustentem essas afirmações. Estudos de simulação para profissionais podem ser evidência metodológica adjacente, mas não devem ser descritos como evidência direta de eficácia para usuários finais.

## 5. Validação técnica conhecida e lacunas

O histórico do repositório registra uma execução de CI bem-sucedida em 20/10/2026: [GitHub Actions #39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486), com 15 verificações estáticas e 22 testes Playwright/axe-core passando após a expansão dos três cenários.

Isso é um resultado histórico de automação, não uma declaração de acessibilidade integral nem validação empírica com público-alvo. Os testes manuais continuam pendentes, incluindo teclado, foco, zoom, telas estreitas, leitor de tela/tecnologia assistiva e dispositivos reais disponíveis. Sempre confira a execução mais recente da CI antes de declarar que a versão atual passou nos testes.

Quando o código ou os fluxos mudarem:
1. executar as verificações locais conforme `../avaliacao/como-executar-testes.md`;
2. revisar regressões nos cenários e na reinicialização;
3. conferir a CI correspondente ao commit;
4. atualizar `../avaliacao/relatorio-revisao-tecnica.md` e o roadmap com os resultados reais, sem marcar testes manuais como concluídos sem executá-los.

## 6. Prioridades de desenvolvimento, na ordem recomendada

### P0 — Base acadêmica e definição do produto
1. Confirmar com a orientação se o plano sem participantes atende ao requisito acadêmico.
2. Executar a busca bibliográfica reproduzível e concluir o benchmarking.
3. Conferir o edital e o modelo institucional vigentes.
4. Harmonizar pergunta, objetivos, método, produto, título e expectativa de resultado nos documentos do anteprojeto.
5. Revisar os objetivos educativos preliminares e ligar cada objetivo a uma tarefa e a um critério de verificação.

### P1 — Produto e avaliação técnica sem participantes
6. Revisar conteúdo e fluxo, preservando o escopo enxuto e fictício.
7. Garantir que cada funcionalidade tenha justificativa, requisito e verificação.
8. Realizar auditoria técnica, pedagógica, de linguagem simples, privacidade e acessibilidade usando o roteiro de auditoria criado.
9. Fazer testes manuais e documentar resultados, problemas em aberto e retestes.

### P2 — Consolidação
10. Atualizar matriz de evidências/requisitos, relatório técnico, anteprojeto e roadmaps após resultados verificáveis.
11. Registrar limitações e preparar uma apresentação clara do produto para discussão com a orientação.
12. Só replanejar participação de pessoas se a orientação indicar sua necessidade.

## 7. Participantes, ética e campo: regra condicional

Não há amostra, recrutamento, campo, parceria, autorização ou aprovação ética presumidos.

Se a orientação solicitar atividade com pessoas:
1. explicitar qual dúvida acadêmica não pode ser respondida por literatura, benchmark e auditoria técnica;
2. propor a menor atividade pertinente e compatível com o tempo do mestrado;
3. consultar a orientação e a instituição sobre autorizações administrativas e necessidade de apreciação ética aplicável;
4. definir protocolo, convite/consentimento, dados, armazenamento, acesso, retenção, descarte e análise antes de iniciar;
5. iniciar somente após confirmar e obter as autorizações pertinentes.

Não realizar “teste informal” com potenciais participantes para contornar esses requisitos. Uma conversa administrativa para explorar viabilidade institucional não deve ser transformada em coleta de dados de pesquisa. Se não houver uma etapa empírica autorizada, descrever o produto como informado por fontes documentais e avaliação técnica — não como codesenhado, validado ou testado por usuários.

## 8. Como interpretar documentos antigos e propostas condicionais

Alguns documentos já contêm tarefas candidatas, rubricas, roteiros ou descrições mais detalhadas de testes com participantes. Eles foram preparados como material de discussão ou como plano alternativo; sua existência não significa que a etapa foi aprovada ou que deva ser executada agora.

- `../anteprojeto/decisoes-metodologicas.md`: referência detalhada para comparar alternativas metodológicas; interpretar à luz da diretriz sem participantes como padrão.
- `../avaliacao/planejamento/protocolo-preliminar-avaliacao.md`: documento de trabalho, **não aprovado para coleta**; rubricas e tarefas com pessoas são condicionais.
- `../anteprojeto/versoes-anteriores/anteprojeto-base.md` e `../anteprojeto/rascunhos/anteprojeto-modelo-uerj.md`: rascunhos em evolução; não assumir que cada frase já foi confirmada pela orientação ou que todo texto está harmonizado com esta consolidação.
- `ROADMAP.md` e `roadmap-historico-resumido.md`: listas de pendências, não prova de que algo foi executado. Conferir caixas, links e evidências antes de reportar estado.
- Registros bibliográficos exploratórios: informam próximos passos, mas não substituem a busca formal nas bases.

Se uma passagem antiga contradisser a diretriz vigente, não a reproduzir automaticamente. Sugerir sua correção e harmonizar os documentos afetados.

## 9. Instruções operacionais para qualquer IA que trabalhe no repositório

Antes de executar uma tarefa:

1. Ler este documento; depois consultar `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md`, `ROADMAP.md` e o documento específico da tarefa.
2. Conferir o conteúdo atual de `main` e os links/commits relevantes; não confiar somente em contexto de conversa anterior ou em um resumo antigo.
3. Respeitar o tema exclusivo, o escopo mínimo e a diretriz sem participantes como padrão.
4. Distinguir fatos implementados, evidências verificadas, decisões registradas, hipóteses e tarefas futuras.
5. Não inventar fontes, resultados de teste, autorizações, parcerias, participantes ou aprovações.
6. Fazer alterações focadas; evitar ampliar o escopo ou criar infraestrutura desnecessária.
7. Se uma decisão de produto ou método mudar, atualizar este documento e os documentos afetados na mesma sequência de trabalho.
8. Após mudanças de código, executar os testes possíveis e reportar exatamente o que passou, falhou ou não foi testado.
9. Após mudanças documentais, conferir que README, roadmap, anteprojeto e protocolo não passaram a dizer coisas incompatíveis.
10. Ao entregar, resumir arquivos alterados, commit, testes executados, limitações e próxima ação objetiva.

### Hierarquia de orientação em caso de conflito

1. Instrução explícita mais recente do responsável pelo projeto.
2. Esta consolidação de estado atual, enquanto refletir as decisões mais recentes.
3. Documento metodológico específico atualizado e decisões formalmente confirmadas pela orientação acadêmica/instituição.
4. README e roadmaps para navegação e tarefas.
5. Rascunhos, roteiros, rubricas candidatas, registros exploratórios e decisões históricas.

Esta hierarquia não permite ignorar exigências formais da instituição ou da orientação acadêmica; ela serve para resolver conflitos entre registros do repositório e evitar que uma proposta antiga seja tomada como decisão.

## 10. Histórico desta consolidação

- **20/10/2026 — conferência da CI:** consultada a execução [GitHub Actions #39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486), que passou com validações de sintaxe/estrutura/HTML e 22 testes Playwright + axe-core no commit de código `11d5bee68f5f8de4234ab9f5388f7f1067545b69`. Os três arquivos do produto inspecionados mantêm os mesmos hashes de conteúdo dessa versão. A CI não foi reexecutada após commits documentais porque o workflow não é acionado por documentação; repetir após qualquer alteração em código/testes. Os testes manuais seguem pendentes.

- **20/10/2026 — complemento da auditoria:** calculadas razões de contraste para combinações selecionadas de texto, botões, foco e bordas. As combinações de texto examinadas atingiram os limiares calculados; algumas bordas que podem indicar estados têm contraste inferior a 3:1 e foram registradas para avaliação contextual, sem declarar falha definitiva. Ver `../avaliacao/registros/verificacao-preliminar-contraste-2026-10-20.md`. Não houve alteração de CSS nem nova execução de testes nesta etapa.

- **20/10/2026 — continuação:** consolidadas estratégias e um formulário de registro para buscas em PubMed/MEDLINE, BVS/LILACS e SciELO. A tentativa de abrir páginas de resultados pelo ambiente de navegação não permitiu obter contagens; as consultas oficiais e exportações continuam pendentes. Foi realizada e documentada inspeção estática parcial do HTML/JS/CSS, sem execução no navegador, sem alteração do produto e sem nova rodada de testes automatizados. Os registros correspondentes foram ligados ao README e aos dois roadmaps.

- **20/10/2026:** registrada a diretriz de começar com um projeto simples, sem ou com pouca interação com pessoas; a inclusão de teste com pessoas fica condicionada à orientação acadêmica. O guia foi criado e vinculado no README, nos roadmaps e nos documentos metodológicos; anteprojeto-modelo, guia de tarefas pessoais, especificação do produto e protocolo preliminar foram harmonizados para não tratar participação de pessoas como etapa inicial. Também foram acrescentados um benchmark exploratório de recursos públicos (Digital House Calls, TelessaúdeBA, HHS, NCFH e WHO/ITU), um roteiro de auditoria técnica/pedagógica/acessibilidade sem participantes e um mapa preliminar de objetivos educativos/tarefas. As buscas oficiais, a execução da auditoria e o aprofundamento do benchmark continuam pendentes.

**Ao alterar esta diretriz no futuro:** editar a data e o histórico acima, resumir o que mudou e atualizar os documentos dependentes. Não apagar decisões anteriores necessárias para entender por que o escopo foi alterado.


## Atualização de continuidade — apresentação oral (20/10/2026)

Foi criada uma apresentação de defesa oral em formato `.odp` e um guia complementar em Markdown. A versão atual contém 15 slides (13 principais e 2 anexos) e já foi adicionada ao repositório: [apresentação ODP](../../defesa/historico/defesa-oral-versao-anterior.odp) e [guia Markdown](../../defesa/guia-defesa-oral.md). O pacote ODP foi verificado estruturalmente e convertido em PDF pelo LibreOffice Impress, gerando 15 páginas. Uma inspeção de miniaturas confirmou que as 15 páginas estão presentes; ainda é necessário revisar a legibilidade em tamanho real e personalizar os campos do candidato.

### Conteúdo alinhado ao estado atual

- Escopo deliberadamente enxuto: revisão/documentação, avaliação técnica, pedagógica e de acessibilidade sem participantes como prioridade.
- O protótipo é demonstrativo, com cenários fictícios; o conteúdo educativo de “Encerrar” é estático. A tela também tem uma escala de facilidade de 1 a 5, com estado e feedback apenas locais; ela não mede aprendizagem nem valida o protótipo.
- O último CI documentado é de 22 testes Playwright + axe-core aprovados no commit `11d5bee68f5f8de4234ab9f5388f7f1067545b69`; não apresentar a auditoria manual como concluída.
- A busca bibliográfica formal em PubMed/MEDLINE, BVS/LILACS e SciELO continua pendente; não inventar contagens.
- A análise de contraste é preliminar e parcial; algumas bordas precisam de avaliação contextual.
- Não assumir parceria, campo, amostra, entrevistas, testes com participantes ou eficácia clínica. Qualquer mudança para incluir pessoas exige discussão explícita com a orientação e aprovações aplicáveis.

### Próximas ações da apresentação

1. [x] Adicionar os dois arquivos ao repositório em `apresentacao/`.
2. [x] Abrir o ODP no LibreOffice Impress e converter para PDF: 15 páginas geradas; a inspeção de miniaturas não mostrou páginas ausentes.
3. [ ] Fazer revisão final de legibilidade em tamanho real; preencher o nome do candidato e personalizar o slide “Por que este mestrado?”.
4. [ ] Confirmar no edital vigente se slides são permitidos e qual é a duração.
5. [x] Atualizar ROADMAP e este documento com o resultado da sincronização e da verificação de renderização.

A apresentação e o guia são materiais de preparação; não representam validação da proposta pela orientação nem conclusão das pendências bibliográficas/técnicas.


### Resultado da sincronização no GitHub

Em 20/10/2026, os dois arquivos foram adicionados à branch `main`:
- `apresentacao/defesa-oral-atualizada.odp`
- `apresentacao/guia-defesa-oral-atualizado.md`

Commit de inclusão do ODP: [e9c32c88c61cca79f0c93b0ee853a01eb0d2b014](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/e9c32c88c61cca79f0c93b0ee853a01eb0d2b014). O guia foi incluído em commit anterior. O conteúdo do arquivo ODP foi enviado como blob binário, a estrutura do pacote ZIP/ODP foi validada localmente e a conversão para PDF no LibreOffice Impress gerou 15 páginas.

Próximas pendências prioritárias permanecem: executar a busca bibliográfica formal nas bases oficiais e registrar contagens reais; concluir a auditoria manual de acessibilidade e avaliar visualmente as bordas de estado; revisar a apresentação no LibreOffice e preencher os dados pessoais que faltam. Não iniciar atividades com participantes sem indicação explícita da orientação acadêmica.


### Verificação de renderização — 20/10/2026

O arquivo `apresentacao/defesa-oral-atualizada.odp` foi convertido com sucesso para PDF usando o LibreOffice Impress em modo headless. O PDF resultante contém **15 páginas**, correspondentes aos 15 slides. Foi gerada uma folha de miniaturas para inspeção geral; não foram identificadas páginas ausentes. Esta verificação não substitui uma revisão de legibilidade em tela cheia, ensaio com tempo cronometrado ou personalização do slide de motivação.


## Atualização técnica — revisão contextual de contraste (20/10/2026)

Foi feita uma leitura estática adicional do HTML/CSS para contextualizar as três bordas abaixo de 3:1 calculadas anteriormente. O código apresenta indicadores adicionais:
- Etapa ativa: fundo e texto diferentes, círculo numerado preenchido e `aria-current="step"`.
- Checklist marcado: checkbox nativo marcado e fundo diferente.
- Aviso de exemplo fictício: símbolo de informação, fundo amarelo-claro e texto explícito.

Essa leitura sugere que as bordas podem não ser o único indicador de estado, mas **não encerra a auditoria de acessibilidade**: ainda faltam inspeção em navegador, teclado e tecnologia assistiva. AUD-15 permanece parcial. Não foi alterado CSS; portanto, não houve necessidade de nova CI por esta atualização documental. O detalhe foi registrado em [verificação preliminar de contraste](../../avaliacao/registros/verificacao-preliminar-contraste-2026-10-20.md) e [registro da auditoria estática](../../avaliacao/registros/registro-auditoria-estatica-2026-10-20.md).


## Atualização de continuidade — segunda revisão estática (20/10/2026)

Foi realizada uma segunda inspeção textual dos arquivos atuais de produto e dos testes, sem executar o navegador. O registro completo, com hashes e limites, está em [segunda revisão estática do protótipo](../../avaliacao/registros/segunda-revisao-estatica-2026-10-20.md).

### Achados estáticos desta rodada

- HTML: 24 IDs identificados pela varredura, sem duplicações.
- JavaScript: nove referências únicas a `getElementById`, todas correspondentes a IDs existentes; as três referências `aria-controls` apontam para elementos existentes.
- Referências `href`/`src`: somente `styles.css`, `#main` e `app.js`; nenhuma URL HTTP(S) externa declarada.
- Busca lexical no JS: não encontrou as APIs comuns pesquisadas de rede/persistência (`fetch`, `XMLHttpRequest`, `localStorage`, `sessionStorage`, cookies, `WebSocket`, `sendBeacon`, `indexedDB`). Isso não prova ausência universal de tráfego ou persistência.
- A suíte `tests/prototype.spec.js` inclui testes escritos para navegação, foco, cenários, feedback, reinício, escala de facilidade, larguras de viewport, axe-core e solicitações externas; não foi executada nesta rodada.

### Correção de precisão pedagógica

A etapa “Encerrar” tem conteúdo educativo estático, mas também inclui uma escala interativa de facilidade de 1 a 5. Essa escala é um controle local, declarado como não enviado nem armazenado; **não é tarefa de aprendizagem para OE-05, instrumento de pesquisa, medida de compreensão nem validação com usuários**. O mapa de objetivos, o guia da apresentação e o relatório técnico foram atualizados para deixar essa distinção explícita.

### Limites e próximos passos

Nenhum arquivo de produto foi alterado, nenhuma execução nova de CI foi realizada e nenhuma avaliação com participantes ocorreu. Continuam prioritários: auditoria manual no navegador (teclado/foco, zoom/reflow, leitor de tela, estados visuais e Network/Application), buscas bibliográficas oficiais com contagens/exportações reais e eventual execução da suíte após mudanças de código.

A regra de continuidade permanece: após cada avanço verificável, atualizar `ROADMAP.md` e este documento; não registrar como concluídas atividades que não foram executadas.


### Ajuste da apresentação após a segunda revisão — 20/10/2026

A apresentação ODP foi corrigida para distinguir o conteúdo educativo estático da etapa “Encerrar” da escala interativa de facilidade (1–5) presente na interface. A escala dá feedback local e declara que não envia nem armazena a resposta; ela não pratica o objetivo OE-05 e não deve ser tratada como instrumento de avaliação de aprendizagem ou validação com usuários.

- Arquivo: `apresentacao/defesa-oral-atualizada.odp`.
- Commit da correção: [50bd1e648bf871afea0d90266fd95153da40fa36](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/50bd1e648bf871afea0d90266fd95153da40fa36).
- O mapa de objetivos, o guia da defesa, o relatório técnico e a segunda revisão estática foram harmonizados com essa distinção.
- Não houve alteração do HTML/CSS/JS, execução de navegador, nova CI ou atividade com participantes nesta rodada.

Manter essa distinção em respostas futuras: **a escala de facilidade não é uma tarefa de aprendizagem**. As próximas pendências permanecem a auditoria manual e a busca bibliográfica formal com contagens/exportações reais.


### Verificação do ODP após ajuste textual — 20/10/2026

Depois de atualizar o slide sobre o conteúdo de encerramento, o arquivo `apresentacao/defesa-oral-atualizada.odp` foi novamente aberto/exportado com LibreOffice Impress em modo headless. O PDF de conferência contém 15 páginas; a renderização do slide 5 foi inspecionada e mostra a nova frase sem corte aparente. A inspeção foi focada no slide alterado e não equivale à revisão completa de legibilidade de todos os slides.

- Arquivo versionado: `apresentacao/defesa-oral-atualizada.odp`.
- Commit da correção do ODP: [50bd1e648bf871afea0d90266fd95153da40fa36](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/50bd1e648bf871afea0d90266fd95153da40fa36).
- A versão local conferida tem 15 páginas; a branch `main` foi conferida quanto ao SHA do blob do ODP.
- Pendência: revisão em tela cheia de todos os slides, personalização do candidato e conferência do edital.

Nenhum arquivo do produto foi alterado e não houve nova execução da CI.


## Atualização de continuidade — tutorial do protótipo e alinhamento do anteprojeto (20/10/2026)

### Alterações documentais confirmadas

- O `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md` teve removidas as seções “Situação atual”, “Aviso” e “Preparação para defesa oral”, conforme solicitado. O tutorial foi referenciado na estrutura do repositório, sem restaurar essas seções.
- Foi criado [Tutorial didático: abrir e testar o protótipo](../../avaliacao/tutorial-instalar-e-testar-prototipo.md). Ele explica que a aplicação web não exige instalação, mas que os testes automatizados requerem Node.js 24.8.0 ou posterior, `npm ci`, instalação do Chromium do Playwright e execução de `npm test`.
- O tutorial foi vinculado a `produto/README.md` e `../avaliacao/como-executar-testes.md).
- A pergunta de pesquisa e o objetivo foram harmonizados em `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md`, `../anteprojeto/versoes-anteriores/anteprojeto-base.md` e `../anteprojeto/rascunhos/anteprojeto-modelo-uerj.md) para focar no desenvolvimento e na avaliação documental, técnica, pedagógica e de acessibilidade sem participantes.
- A hipótese do anteprojeto-base foi reescrita como proposição de design verificável. Não afirmar que o simulador já é utilizável pelo público-alvo, melhora a aprendizagem ou altera resultados de teleconsulta.

### Formulação de trabalho atual

**Pergunta:** “Como desenvolver e avaliar, por análise documental e auditoria técnica, pedagógica e de acessibilidade sem participantes, um simulador web que ofereça prática fictícia de etapas básicas de uma teleconsulta para adultos com baixa familiaridade digital?”

Essa formulação reduz o risco de prometer uma avaliação de resultados que o plano inicial não medirá. É uma proposta coerente com a preferência atual do responsável pelo projeto, mas ainda deve ser discutida com a orientação acadêmica e conferida com o edital/modelo institucional vigente.

### Verificação e limites desta rodada

- Nenhum arquivo de HTML, CSS ou JavaScript do produto foi alterado.
- Não houve execução nova de Playwright/axe-core. Tentou-se clonar o repositório para executar verificações locais, mas o ambiente não conseguiu resolver o domínio `github.com`; por isso não existe novo resultado de teste nesta rodada.
- O tutorial é documentação de procedimento, não prova de que o desenvolvedor já instalou ferramentas ou executou a suíte.
- As buscas bibliográficas oficiais e a auditoria manual continuam pendentes; nenhuma contagem foi inventada e nenhuma atividade com participantes foi realizada ou agendada.

### Instruções para a próxima IA

1. Ler esta diretriz, `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md` e `ROADMAP.md` antes de alterar arquivos.
2. Priorizar as buscas formais com resultados verificáveis e a revisão documental dos textos/feedbacks do protótipo.
3. Se alterar código, orientar o desenvolvedor a executar o tutorial, associar os resultados ao commit exato e atualizar o relatório técnico.
4. Não ampliar o encerramento para uma nova tarefa interativa antes de revisar sua necessidade pedagógica e a rastreabilidade de OE-05.
5. Atualizar `ROADMAP.md` e este documento após cada avanço verificável, mantendo pendências como pendências até haver evidência de execução.


## Atualização de continuidade — matriz de requisitos e busca bibliográfica (20/10/2026)

### Planejamento do protótipo

O documento `../protótipo/produto-minimo.md` agora contém uma matriz explícita do estado de RF-01 a RF-11, distinguindo o que está implementado em código, o que requer revisão e o que ainda é requisito pendente. A principal lacuna é **RF-07/OE-05**: a etapa “Encerrar” apresenta exemplos estáticos, mas não oferece tarefa interativa de escolha e feedback. A escala de facilidade de 1 a 5 é local e não atende a esse objetivo.

Diretriz: não adicionar automaticamente uma nova interação. Primeiro justificar o ganho pedagógico, revisar a evidência e o objetivo, especificar tarefa/opções/feedback e prever testes automatizados. Se o conteúdo estático for suficiente para o escopo acordado, documentar a decisão em vez de ampliar o produto.

### Busca bibliográfica

Foi registrada em `../fundamentacao/registros/registro-busca-estruturada-2026-10-20.md` uma tentativa adicional de abrir o endpoint oficial E-utilities do PubMed para PM-1. A ferramenta de navegação não conseguiu acessar o endpoint, portanto não foi obtida contagem nem considerada executada a busca. As consultas formais nas bases oficiais seguem pendentes; não inventar totais ou inferir que as bases estejam indisponíveis.

### Estado desta rodada

- Não foram alterados HTML, CSS ou JavaScript.
- Não houve nova execução de Playwright/axe-core.
- O ambiente local não conseguiu resolver `github.com` ao tentar clonar o repositório; logo, não há resultado novo de testes locais.
- O README está sem as três seções removidas a pedido e contém link para o tutorial de teste.
- O tutorial distingue abrir a aplicação sem instalação de preparar Node.js/npm/Playwright para testes automatizados.
- A pergunta e o objetivo de trabalho foram harmonizados em README e anteprojetos para refletir avaliação documental/técnica/pedagógica sem participantes, sem alegar eficácia ou usabilidade demonstrada.

### Próximas ações

1. Executar as buscas oficiais manualmente num navegador acessível e registrar consulta, data/hora, filtros, totais e exportações.
2. Solicitar ao desenvolvedor que siga o tutorial e reporte os resultados de `npm test` com sistema, versões e commit.
3. Realizar auditoria manual conforme AUD-01 a AUD-20; não marcar casos como concluídos sem evidência.
4. [x] Fazer revisão editorial dos textos e feedbacks dos três cenários com base na matriz de objetivos; consultar o registro editorial. O teste de regressão e a inspeção manual após a edição permanecem pendentes.
5. Discutir com a orientação se o plano sem participantes atende aos requisitos acadêmicos.


## Atualização de continuidade — revisão editorial dos cenários (20/10/2026)

### Alterações confirmadas no repositório

- Revisados os textos de situação, opções e feedbacks para os três cenários interativos em `produto/index.html` e `produto/app.js`.
- OE-02 (link): feedback orienta conferir conexão e link/canal oficial conhecido, pedir ajuda pelo contato oficial conhecido e não compartilhar senhas/dados em links inesperados.
- OE-03 (áudio): feedback orienta conferir volume e controles de som disponíveis, e comunicar a dificuldade caso persista.
- OE-04 (esclarecimento): feedback orienta pedir repetição/explicação alternativa e confirmar o próximo passo, sem adivinhar ou criar orientação clínica.
- Criado `../protótipo/revisao-editorial-cenarios-feedbacks-2026-10-20.md`, com texto revisado, racional, fontes contextuais e verificações pendentes.
- Atualizado `../protótipo/mapa-objetivos-educativos-e-tarefas.md` e os anteprojetos `../anteprojeto/versoes-anteriores/anteprojeto-base.md` e `../anteprojeto/rascunhos/anteprojeto-modelo-uerj.md`.
- O `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md` foi atualizado com link para o novo registro. As seções “Preparação para defesa oral”, “Situação atual” e “Aviso” continuam removidas.
- Adicionado teste Playwright em `tests/prototype.spec.js` para verificar a presença de instruções concretas nos feedbacks dos três cenários.

### Evidências e limites

A revisão se baseia nas referências já documentadas no repositório, especialmente Galvin et al. (2024) sobre treinamento de usuários em telessaúde, WHO/ITU (2024) sobre acessibilidade de serviços de telessaúde e guias HHS de preparação para teleconsulta. Essas fontes fundamentam critérios gerais de design; não validam as formulações específicas nem demonstram que o público-alvo as compreende.

A escala de facilidade de 1 a 5 no encerramento continua sendo apenas feedback local de interface. OE-05 não recebeu nova interação nesta rodada; o conteúdo educativo de encerramento permanece estático.

### Verificações ainda pendentes

- [ ] Confirmar execução e resultado da CI após as mudanças em HTML/JS e no teste automatizado.
- [ ] Fazer inspeção manual do fluxo, teclado/foco, mensagens de estado e comportamento em navegador.
- [ ] Manter a auditoria manual e as buscas bibliográficas oficiais como pendências até execução documentada.
- [ ] Não afirmar validação com usuários, compreensão demonstrada, aprendizagem ou eficácia educativa.

### Diretriz operacional atualizada

Quando alterar feedbacks ou textos pedagógicos, registrar a ligação entre objetivo educativo, texto apresentado, feedback de acerto/tentativa e critério de teste. Se uma fonte só fundamenta um princípio geral, não a apresentar como validação do texto específico. Atualizar sempre `ROADMAP.md` e este documento após avanços verificáveis.


## Atualização de continuidade — revisão editorial dos cenários e anteprojeto (20/10/2026)

### Alterações confirmadas no repositório

- A revisão editorial dos cenários OE-02 (link), OE-03 (áudio) e OE-04 (informação não compreendida) foi concluída como trabalho documental e aplicada ao código.
- `produto/index.html`: opções e instruções foram ajustadas para recomendar a confirmação do link por um canal oficial já conhecido; conferir volume e, quando disponível, saída de som; pedir repetição/explicação e confirmar o próximo passo mencionado.
- `produto/app.js`: feedbacks de acerto, tentativa e botões fictícios foram refinados para explicar a razão da ação, indicar um próximo passo e preservar o tom não punitivo. As mensagens reforçam que não há conexão, áudio ou mensagem real.
- [Registro editorial](../../prototipo/revisao-editorial-cenarios-feedbacks-2026-10-20.md) atualizado com os textos, o racional, as fontes documentadas e as verificações pendentes.
- `../protótipo/mapa-objetivos-educativos-e-tarefas.md` atualizado para refletir a revisão editorial, sem declarar validação com usuários.
- `../anteprojeto/versoes-anteriores/anteprojeto-base.md` e `../anteprojeto/rascunhos/anteprojeto-modelo-uerj.md` fortalecidos com uma distinção mais explícita entre evidência publicada e hipótese de design. A revisão de escopo de Galvin et al. (2024) descreve evidência limitada/mista de melhoria da competência; o benchmark já identificou Digital House Calls, então a estrutura antes/durante/depois e o caráter autoguiado não são apresentados como novidade exclusiva.
- `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md`, `ROADMAP.md` e `roadmap-historico-resumido.md` apontam para a revisão editorial; os roadmaps registram a revisão como concluída e priorizam os testes de regressão.

### Decisões e limites que permanecem

1. **OE-05/Encerrar:** continua com exemplos estáticos. Não foi adicionada tarefa interativa nova; a escala de facilidade de 1 a 5 não é medida de aprendizagem.
2. **Busca bibliográfica:** as consultas oficiais, contagens, exportações e triagem continuam pendentes.
3. **Teste de código:** houve alteração de HTML e JavaScript. Não registrar como aprovados os testes de regressão até que exista execução verificável após estes commits.
4. **Auditoria manual:** teclado/foco, anúncio de mensagens, zoom/reflow, leitor de tela e estados visuais continuam pendentes.
5. **Participantes:** não houve validação com usuários. Não iniciar atividades com pessoas sem indicação explícita da orientação e verificação das autorizações aplicáveis.

### Próximas ações

1. O desenvolvedor deve seguir [Tutorial didático para abrir e testar o protótipo](../../avaliacao/tutorial-instalar-e-testar-prototipo.md) e executar `npm test`; registrar sistema operacional, versões, saída e commit testado.
2. Conferir manualmente o foco e a leitura dos feedbacks em navegador e tecnologia assistiva disponível.
3. Executar e registrar as buscas formais em PubMed/MEDLINE, BVS/LILACS e SciELO.
4. Discutir com a orientação se o plano sem participantes atende aos requisitos acadêmicos.

**Integridade:** revisão editorial não equivale a teste de compreensão, usabilidade com o público-alvo, aprendizagem demonstrada ou eficácia clínica. Não há resultado novo de `npm test` confirmado nesta rodada; não declarar os testes aprovados até registrar uma execução posterior às alterações de código. Atualizar este documento e o ROADMAP após cada avanço verificável.


### Ajuste de continuidade — asserções dos feedbacks

Após a revisão do texto atual no `main`, as novas asserções de `tests/prototype.spec.js` foram alinhadas às frases reais do JavaScript: conferir a conexão e confirmar o link por canal oficial conhecido; conferir volume/saída de som quando disponível e avisar a pessoa profissional; pedir esclarecimento e confirmar o próximo passo mencionado. O ajuste de teste está no commit [b911436](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/b911436ee49e2678ad4f69c8ededf63be98d4467).

A consulta de status para esse commit retornou uma lista vazia de checks; portanto, **o resultado da CI ainda não está confirmado**. A suíte deve ser conferida no GitHub Actions antes de registrar aprovação. Não afirmar que os testes passaram com base apenas na existência das asserções.


### Complemento — asserções automatizadas para os feedbacks (20/10/2026)

A suíte `tests/prototype.spec.js` foi atualizada no commit [492d562](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/492d562b2a674e8c42eb4e48a320a290a2af0a43) para verificar partes específicas dos feedbacks: uso de canal oficial já conhecido e não compartilhar senha/código; conferir saída de som e comunicar que não consegue ouvir; confirmar o próximo passo mencionado e não fornecer orientação clínica. A alteração de testes complementa as mudanças de conteúdo nos commits `3a5184a` e `586bc1b`.

**Estado:** os testes foram escritos/atualizados, mas a execução posterior às mudanças não está confirmada. A consulta ao status combinado do commit `492d562` não retornou status checks. O desenvolvedor deve seguir o tutorial e executar `npm test`; registrar a saída, ambiente e commit testado antes de afirmar sucesso. Não presumir que a CI rodou ou passou.

Esta atualização também precisa ser mantida no `ROADMAP.md`. As próximas prioridades continuam sendo: executar os testes, fazer auditoria manual sem participantes e concluir a busca bibliográfica formal.


## Atualização de continuidade — matriz de critérios para textos e feedbacks (20/10/2026)

### Avanço documental confirmado

Foi criada a [Matriz de critérios para revisão de textos e feedbacks](../../prototipo/matriz-criterios-qualidade-textos-feedbacks.md). O documento traduz a revisão editorial dos cenários em critérios observáveis para:
- ação concreta e próximo passo;
- feedback explicativo para acerto e tentativa;
- tom respeitoso e não punitivo;
- segurança e privacidade, com preferência por canal oficial já conhecido;
- ausência de aconselhamento clínico;
- explicitação de que controles e situações são fictícios;
- consideração de diferenças entre dispositivos;
- acessibilidade e rastreabilidade entre objetivo, texto e teste.

A matriz relaciona OE-02 (link), OE-03 (áudio), OE-04 (esclarecimento), OE-01 (checklist) e OE-05 (encerramento) às ações esperadas e verificações internas. Ela foi ligada ao README, ao mapa de objetivos e aos dois rascunhos de anteprojeto; os roadmaps também registram o avanço.

### Uso correto da evidência

Galvin et al. (2024), WHO/ITU (2024) e os guias de preparação do HHS informam critérios gerais e contexto, mas não validam os microtextos específicos do protótipo. O recurso Digital House Calls já identificado impede apresentar a estrutura antes/durante/depois ou o caráter autoguiado como inovação exclusiva. A contribuição específica continua sendo hipótese a investigar.

### Estado técnico e pendências

- Não foram alterados HTML, CSS ou JavaScript nesta rodada.
- Não foi executada nova suíte Playwright/axe-core nem nova CI; o estado dos testes após alterações anteriores de código continua a exigir confirmação.
- Não foi feita auditoria manual em navegador ou tecnologia assistiva.
- As buscas formais em PubMed/MEDLINE, BVS/LILACS e SciELO continuam pendentes, sem contagens/exportações completas.
- Não houve validação com participantes; não iniciar atividade com pessoas sem indicação explícita da orientação e autorizações aplicáveis.
- OE-05 permanece conteúdo educativo estático. A escala de facilidade de 1 a 5 não é tarefa de aprendizagem nem medida de compreensão.

### Próximos passos

1. Executar `npm test` conforme o tutorial, registrar ambiente, saída e commit exato; conferir a CI correspondente.
2. Fazer auditoria manual de navegação, foco, feedbacks anunciados, zoom/reflow, leitor de tela, estados visuais e comportamento de rede.
3. Executar e registrar as buscas bibliográficas oficiais com datas, estratégias efetivas, totais e exportações.
4. Confirmar com a orientação se a avaliação sem participantes atende aos requisitos do mestrado.

**Regra de integridade:** a matriz demonstra rastreabilidade e consistência documental, não compreensão pelo público-alvo, usabilidade validada ou eficácia educativa. Atualizar este documento e `ROADMAP.md` após cada avanço verificável.


### Complemento — especificação do produto mínimo (20/10/2026)

O documento `../protótipo/produto-minimo.md` agora aponta diretamente para a matriz de critérios editoriais, reduzindo o risco de manter critérios de conteúdo separados da especificação funcional. Essa alteração é documental: não muda o comportamento do protótipo e não gera novo resultado de teste.

A matriz, a especificação do produto, o mapa de objetivos, o README, o anteprojeto e os roadmaps devem permanecer consistentes. As pendências de execução de testes, auditoria manual e busca bibliográfica formal continuam abertas.


O roadmap técnico `roadmap-historico-resumido.md` também aponta para a matriz de critérios, junto do `../avaliacao/../../avaliacao/auditorias/manual/2026-10-21/README.md`, `ROADMAP.md`, mapa de objetivos, especificação do produto e anteprojetos. Esta verificação foi documental; não altera o estado dos testes.


## Atualização de continuidade — segunda simplificação editorial dos cenários (20/10/2026)

### Alterações desta rodada

- Os textos de OE-02 usam uma ação mais concreta: verificar a internet e confirmar o link pelo contato que o serviço de saúde informou anteriormente, pedindo ajuda por esse contato se o problema persistir.
- Os textos de OE-03 nomeiam volume, alto-falante ou fone, em vez de depender apenas da expressão “saída de som”; o texto reconhece que os dispositivos podem variar.
- Os textos de OE-04 orientam pedir repetição/explicação em outras palavras e confirmar o próximo passo, sem adivinhar ou modificar orientação profissional.
- O HTML, os feedbacks JavaScript, os testes Playwright e a documentação ligada aos objetivos e anteprojetos foram atualizados em conjunto.
- A etapa “Encerrar” permanece composta por exemplos estáticos. A escala de facilidade não foi transformada em tarefa de aprendizagem, e nenhuma funcionalidade nova foi acrescentada.

### Evidências e limites

Os guias do HHS e o toolkit WHO/ITU orientam princípios gerais de preparação e acessibilidade; Galvin et al. (2024) alerta para a evidência limitada/mista sobre melhoria de competência em estratégias de treinamento. Essas fontes não validam os microtextos específicos. A alteração é uma decisão editorial de design, não uma avaliação da compreensão, usabilidade ou eficácia com adultos com baixa familiaridade digital.

### Pendências a manter

- Executar Playwright/axe-core para o commit atual e conferir o resultado da CI; não inferir aprovação apenas pela existência dos testes.
- Fazer auditoria manual de teclado, foco, zoom/reflow, mensagens anunciadas, responsividade e comportamento de rede.
- Executar e registrar as buscas formais em PubMed/MEDLINE, BVS/LILACS e SciELO.
- Confirmar com a orientação se o plano inicial sem participantes atende aos requisitos do curso.

### Diretriz para a próxima IA

Ao continuar, leia novamente o README, o roadmap e este documento. Use o registro editorial, a matriz e o mapa de objetivos como fontes de rastreabilidade; não afirme validação dos textos com usuários, nem implemente uma tarefa interativa de encerramento sem revisar o ganho pedagógico e a decisão de escopo.


## Atualização de continuidade — controles de aparência e acessibilidade (21/10/2026)

### Implementado no protótipo

- Modo claro como padrão explícito e alternância para modo escuro.
- Três níveis de tamanho do texto (normal, grande e muito grande), com controles de aumentar/diminuir e estados desabilitados nos limites.
- Alto contraste com combinações específicas para temas claro e escuro.
- Paleta azul/âmbar, que reduz a dependência de vermelho/verde, e paleta monocromática.
- Reforço de foco visível, espaçamento da leitura e sublinhado de links.
- Botão para restaurar as configurações visuais padrão; as escolhas são mantidas apenas na página atual e não são gravadas em armazenamento.
- Opções de resposta em cartões de largura comum e linhas de altura uniforme em cada cenário.
- Testes automatizados acrescentados para a barra, os modos, a navegação por teclado e o tamanho dos cartões.

### Limites e próximos passos

O modo para leitores de tela não é um botão visual separado: deve funcionar por meio da semântica nativa, títulos, rótulos, grupos de rádio, foco, mensagens de estado e tecnologias assistivas do navegador/dispositivo. Não afirmar que a ferramenta está “validada para pessoas cegas” sem auditoria manual pertinente. Paletas de cores são opções gerais, não uma solução que atenda a todos os tipos de daltonismo.

Na execução de CI consultada durante esta atualização, a verificação estática, sintática e HTML terminou com sucesso; os testes Playwright/axe-core ainda estavam em execução. Confirmar a conclusão da CI para o commit de código antes de declarar aprovação. Em seguida, fazer verificação manual com teclado, leitor de tela, zoom/ampliação, diferentes combinações de tema/contraste, telas pequenas e opções de resposta com texto muito grande.


## Atualização de validação — controles visuais e testes de navegador (21/10/2026)

A execução do GitHub Actions [#39615349270](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39615349270), no commit de código [03578a9](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/03578a999aeca76b014e08563391f16662ea4f81), concluiu com sucesso. As verificações de sintaxe, estrutura e HTML passaram, e os **26 testes Playwright/axe-core passaram**. A execução inclui os testes de modo claro/escuro, tamanho do texto, alto contraste, paletas, foco por teclado e dimensões uniformes das opções.

Esse resultado é evidência automatizada para o commit citado, não certificação integral WCAG. Continuam pendentes testes manuais com leitor de tela e ampliação, inspeção das combinações de cores em dispositivos reais e verificação da igualdade dos cartões em outros tamanhos de tela/configurações.


## Atualização de continuidade — ficha de auditoria manual (21/10/2026)

Foi criado o [Modelo de preenchimento da auditoria manual de acessibilidade](../../avaliacao/instrumentos/modelo-preenchimento-auditoria-manual-acessibilidade.md). Orientar a próxima auditoria a copiar a ficha por rodada, registrar commit/navegador/viewport/zoom/tecnologia assistiva, preencher os casos e anexar evidências sem dados pessoais. Usar C/PC/NC/NT/BL/NA; não converter NT/BL em aprovação nem declarar conformidade WCAG integral. A auditoria permanece pendente até haver resultados observados.


### Formulário interativo de auditoria manual (21/10/2026)

Além do modelo Markdown, está disponível o [formulário HTML preenchível](../../avaliacao/instrumentos/formulario-auditoria-manual-acessibilidade.html), que permite preencher os casos com teclado ou mouse, gerar um arquivo JSON com as respostas e abrir a impressão do navegador para salvar em PDF. O HTML funciona localmente, não envia respostas a um servidor e não as salva automaticamente. A auditoria manual continua pendente até que haja execução documentada.


### Usabilidade do formulário de auditoria — ajuda contextual (21/10/2026)

O formulário HTML foi ampliado com ícones de ajuda por campo, exemplos contextualizados e preenchimento automático conservador da data, do navegador/versão, da identificação aproximada do sistema operacional e da categoria aproximada do dispositivo. Os campos seguem editáveis e as sugestões precisam ser revisadas. URL do protótipo, viewport, zoom, leitor de tela, commit e CI continuam manuais para evitar valores que não correspondem ao produto testado. Não há envio nem gravação automática das respostas. Link: [formulário HTML de auditoria](../../avaliacao/instrumentos/formulario-auditoria-manual-acessibilidade.html).


## Registro da auditoria manual (21/10/2026)

Foi arquivada a rodada `AUD-MAN-2026-10-21-01`, com [JSON e PDF]( ../../avaliacao/auditorias/manual/2026-10-21/README.md ). As respostas foram mantidas como recebidas nas cópias públicas redigidas, mas a análise inicial encontrou todas as 59 respostas C sem evidências, somente o perfil Mouse/trackpad marcado e divergências de metadados. O registro é **inconclusivo** até que a execução seja complementada; ver a nota de análise no diretório de auditoria.


## Atualização de continuidade — rastreabilidade e estado das evidências (24/10/2026)

Foi criada a [matriz de rastreabilidade entre objetivos educativos, requisitos funcionais e testes automatizados](../../prototipo/matriz-rastreabilidade-objetivos-requisitos-testes-2026-10-24.md). Ela registra quais testes existentes verificam partes dos objetivos OE-01 a OE-05 e dos requisitos RF-01 a RF-11, além de explicitar as limitações da cobertura. A matriz é uma inspeção estática da suíte, não uma execução de testes.

A documentação do produto mínimo e do README foi alinhada para não classificar o RF-08 (feedback claro e respeitoso) como totalmente sem regressão automatizada: existem testes específicos para mensagens e próximos passos, mas eles não cobrem toda a linguagem nem comprovam compreensão pelo público-alvo.

**Estado de validação na data desta atualização:** há execuções históricas bem-sucedidas de CI registradas em commits anteriores; não se deve inferir que o commit atual foi aprovado sem consultar o GitHub Actions e confirmar o SHA. Permanecem pendentes a auditoria manual de acessibilidade com evidências observadas, a execução reproduzível das buscas bibliográficas nas interfaces oficiais e a conferência integral do edital e do DOCX institucional vigente. Não afirmar conclusão dessas tarefas enquanto não houver evidência real. O [tutorial de execução das pendências](../../gestao/tutorial-execucao-pendencias.md) reúne os passos e critérios de conclusão.
