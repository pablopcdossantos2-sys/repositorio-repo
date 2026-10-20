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
- **Encerrar:** reinício e/ou próximos passos demonstrativos conforme o estado atual da interface.

O produto deve continuar simples, acessível, sem dependências externas em tempo de uso e sem dados reais. Manter estas restrições:

- não realiza consulta nem contato com profissionais reais;
- não usa áudio ou vídeo ao vivo;
- não se conecta a serviços de saúde, prontuários ou plataformas de teleconsulta;
- não oferece diagnóstico, prescrição, triagem ou aconselhamento clínico individual;
- não deve solicitar, transmitir ou persistir dados pessoais ou clínicos;
- não adicionar contas de usuário, chatbot/IA, integrações, rastreamento ou novas funções complexas sem uma nova justificativa explícita e revisão de escopo.

Todos os nomes, mensagens e situações devem permanecer fictícios e não devem imitar um portal oficial de forma enganosa.

## 4. Evidências e pesquisa bibliográfica: estado real

Já existe uma rodada de busca exploratória complementar na web, um benchmark inicial de recursos existentes (`docs/benchmark-recursos-existentes.md`), um roteiro de auditoria técnica/pedagógica/acessibilidade sem participantes (`docs/roteiro-auditoria-tecnica-sem-participantes.md`), um mapa preliminar de objetivos educativos/tarefas (`docs/mapa-objetivos-educativos-e-tarefas.md`) e documentação de estudos e recomendações de acessibilidade. Em 20/10/2026, foram criados o [registro de execução das buscas bibliográficas](registro-busca-estruturada-2026-10-20.md) e o [registro da auditoria estática parcial](registro-auditoria-estatica-2026-10-20.md). A verificação preliminar de contraste foi registrada em [verificacao-preliminar-contraste-2026-10-20.md](verificacao-preliminar-contraste-2026-10-20.md); não substitui a auditoria manual. O benchmark identifica, entre outros, o curso Digital House Calls, o tutorial do TelessaúdeBA, guias do HHS, a ferramenta de prontidão do NCFH e o toolkit WHO/ITU. Ela serve para orientar perguntas e requisitos, mas **não é uma busca bibliográfica formal, sistemática ou reproduzível concluída**.

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
1. executar as verificações locais conforme `docs/como-executar-testes.md`;
2. revisar regressões nos cenários e na reinicialização;
3. conferir a CI correspondente ao commit;
4. atualizar `docs/relatorio-revisao-tecnica.md` e o roadmap com os resultados reais, sem marcar testes manuais como concluídos sem executá-los.

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

- `docs/decisoes-metodologicas.md`: referência detalhada para comparar alternativas metodológicas; interpretar à luz da diretriz sem participantes como padrão.
- `docs/protocolo-preliminar-avaliacao.md`: documento de trabalho, **não aprovado para coleta**; rubricas e tarefas com pessoas são condicionais.
- `docs/anteprojeto-base.md` e `docs/anteprojeto-modelo-uerj.md`: rascunhos em evolução; não assumir que cada frase já foi confirmada pela orientação ou que todo texto está harmonizado com esta consolidação.
- `ROADMAP.md` e `docs/roadmap.md`: listas de pendências, não prova de que algo foi executado. Conferir caixas, links e evidências antes de reportar estado.
- Registros bibliográficos exploratórios: informam próximos passos, mas não substituem a busca formal nas bases.

Se uma passagem antiga contradisser a diretriz vigente, não a reproduzir automaticamente. Sugerir sua correção e harmonizar os documentos afetados.

## 9. Instruções operacionais para qualquer IA que trabalhe no repositório

Antes de executar uma tarefa:

1. Ler este documento; depois consultar `README.md`, `ROADMAP.md` e o documento específico da tarefa.
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

- **20/10/2026 — complemento da auditoria:** calculadas razões de contraste para combinações selecionadas de texto, botões, foco e bordas. As combinações de texto examinadas atingiram os limiares calculados; algumas bordas que podem indicar estados têm contraste inferior a 3:1 e foram registradas para avaliação contextual, sem declarar falha definitiva. Ver `docs/verificacao-preliminar-contraste-2026-10-20.md`. Não houve alteração de CSS nem nova execução de testes nesta etapa.

- **20/10/2026 — continuação:** consolidadas estratégias e um formulário de registro para buscas em PubMed/MEDLINE, BVS/LILACS e SciELO. A tentativa de abrir páginas de resultados pelo ambiente de navegação não permitiu obter contagens; as consultas oficiais e exportações continuam pendentes. Foi realizada e documentada inspeção estática parcial do HTML/JS/CSS, sem execução no navegador, sem alteração do produto e sem nova rodada de testes automatizados. Os registros correspondentes foram ligados ao README e aos dois roadmaps.

- **20/10/2026:** registrada a diretriz de começar com um projeto simples, sem ou com pouca interação com pessoas; a inclusão de teste com pessoas fica condicionada à orientação acadêmica. O guia foi criado e vinculado no README, nos roadmaps e nos documentos metodológicos; anteprojeto-modelo, guia de tarefas pessoais, especificação do produto e protocolo preliminar foram harmonizados para não tratar participação de pessoas como etapa inicial. Também foram acrescentados um benchmark exploratório de recursos públicos (Digital House Calls, TelessaúdeBA, HHS, NCFH e WHO/ITU), um roteiro de auditoria técnica/pedagógica/acessibilidade sem participantes e um mapa preliminar de objetivos educativos/tarefas. As buscas oficiais, a execução da auditoria e o aprofundamento do benchmark continuam pendentes.

**Ao alterar esta diretriz no futuro:** editar a data e o histórico acima, resumir o que mudou e atualizar os documentos dependentes. Não apagar decisões anteriores necessárias para entender por que o escopo foi alterado.


## Atualização de continuidade — apresentação oral (20/10/2026)

Foi criada uma apresentação de defesa oral em formato `.odp` e um guia complementar em Markdown. A versão atual contém 15 slides (13 principais e 2 anexos) e já foi adicionada ao repositório: [apresentação ODP](../apresentacao/defesa-oral-atualizada.odp) e [guia Markdown](../apresentacao/guia-defesa-oral-atualizado.md). O pacote ODP foi verificado estruturalmente e convertido em PDF pelo LibreOffice Impress, gerando 15 páginas. Uma inspeção de miniaturas confirmou que as 15 páginas estão presentes; ainda é necessário revisar a legibilidade em tamanho real e personalizar os campos do candidato.

### Conteúdo alinhado ao estado atual

- Escopo deliberadamente enxuto: revisão/documentação, avaliação técnica, pedagógica e de acessibilidade sem participantes como prioridade.
- O protótipo é demonstrativo, com cenários fictícios; a etapa “Encerrar” tem conteúdo estático.
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
