# ROADMAP — Treino de Teleconsulta

> **Leitura obrigatória para continuidade entre IAs:** [Estado atual do projeto e diretrizes para IAs](docs/estado-atual-e-diretrizes-para-ias.md). Em caso de conflito com listas de tarefas ou propostas antigas, confira a diretriz metodológica vigente antes de agir.

**Atualizado em:** 20/10/2026  
**Branch de referência:** `main`  
**Status geral:** tema escolhido; protótipo web inicial existente; alinhamento funcional, revisão bibliográfica, método e etapas institucionais continuam em andamento.

Este roadmap acompanha exclusivamente **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital**. As demais ideias do documento comparativo ficam registradas apenas como histórico, não como alternativas ativas.

## Decisão de projeto

- **Linha de pesquisa:** 2) Tecnologias para Educação em Saúde.
- **Tipo de projeto:** Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Título de trabalho:** “Treino de Teleconsulta: desenvolvimento e avaliação de um simulador educativo para adultos com baixa familiaridade digital”.
- **Pergunta de trabalho:** como um simulador educativo web, acessível e desenvolvido em linguagem simples, pode apoiar adultos com baixa familiaridade digital a praticar etapas básicas de uma teleconsulta em tarefas simuladas?
- **Público de interesse:** adultos com baixa familiaridade digital. Definição operacional, elegibilidade e forma de identificar essa característica precisam ser discutidas com a orientação; não presumir idade, escolaridade, deficiência ou incapacidade a partir do rótulo.
- **Cenário:** Guaraí-TO é uma possibilidade de articulação e campo, não uma parceria confirmada nem uma condição para desenvolver o protótipo.
- **Preferência metodológica inicial:** desenvolver um protótipo simples fundamentado em literatura e análise de soluções existentes, com avaliação técnica/pedagógica sem participantes. Interação com pessoas só será incluída se a orientação acadêmica indicar que é necessária; acesso, campo, parceria, aprovação e amostra não estão confirmados.
- **Produto:** experiência guiada de três momentos — preparação do dispositivo/ambiente, entrada e participação numa sala virtual fictícia, e encerramento/confirmar próximos passos.
- **Limites:** sem teleconsulta real, áudio/vídeo ao vivo, contas, prontuários, IA, diagnóstico ou prescrição; sem recolha ou transmissão de dados pessoais ou clínicos.
- **Inferência permitida:** auditorias técnicas e pedagógicas, usabilidade e conclusão/compreensão em tarefas simuladas; não concluir aprendizagem duradoura, mudança de comportamento, acesso efetivo ou eficácia clínica sem desenho e evidência próprios.

## Como interpretar os estados

- [x] Concluído e documentado ou implementado no repositório.
- [ ] Pendente, precisa de execução ou evidência de conclusão.
- **Bloqueado por aprovação:** não executar até confirmar e obter as autorizações pertinentes.
- **Não verificável por inspeção estática:** requer teste em navegador/dispositivo, medição ou evidência externa.

## Resumo de prioridades

| Prioridade | Frente | Resultado esperado |
|---|---|---|
| P0 | Pergunta, evidência e enquadramento | Pergunta delimitada, busca reproduzível e lacuna sustentada; alinhamento com a linha de pesquisa. |
| P0 | Objetivos educativos e conteúdo | Mapa de aprendizagem e roteiro de simulação com instruções, escolhas seguras e feedback compreensível. |
| P0 | Método e cenário | Confirmar com a orientação se a avaliação documental/técnica sem participantes atende aos requisitos; caminho com pessoas apenas se necessário. |
| P1 | Produto e acessibilidade | Interface realmente centrada em praticar passos de teleconsulta, acessível em celular e teclado. |
| P1 | Avaliação | Tarefas, critérios de êxito, ajuda necessária, erros e compreensão definidos previamente. |
| P2 | Engenharia e entrega | Testes proporcionais, documentação do produto, limitações e estratégia de publicação. |

## Acompanhamento no GitHub

- [#1 — Busca bibliográfica reproduzível nas bases oficiais](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/1)
- [#2 — Testes manuais de acessibilidade](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/2)
- [#3 — Protocolo de avaliação e autorizações aplicáveis](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/3)
- [#4 — Viabilidade de cenário/parceria em Guaraí](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/4)
- [Registro de execução das buscas (20/10/2026)](docs/registro-busca-estruturada-2026-10-20.md)
- [Registro da auditoria estática parcial (20/10/2026)](docs/registro-auditoria-estatica-2026-10-20.md)

## Fase 0 — Decisões e base técnica

- [x] Escolher exclusivamente o Tema 4 — Treino de Teleconsulta.
- [x] Manter a linha “2) Tecnologias para Educação em Saúde” e o tipo de pesquisa tecnológica definidos.
- [x] Construir uma primeira interface web estática, sem dependências externas em tempo de uso.
- [x] Definir limites de segurança: cenário fictício, sem dados reais, sem teleconsulta e sem orientação clínica individual.
- [x] Registrar histórico comparativo dos temas sem manter decisões concorrentes em aberto.
- [x] Alinhar a interface a três situações fictícias: link indisponível, falha de áudio e pedido de esclarecimento.
- [x] Adicionar escolhas com feedback específico em cada situação e manter todas as interações locais.
- [x] Escurecer a variável de borda e acrescentar verificação estática do contraste de bordas significativas.
- [x] Confirmar a suíte automatizada após as mudanças: 15 verificações estáticas e 22 testes de navegador/axe-core passaram em 20/10/2026 ([CI #39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486)).
- [x] Criar roteiro rastreável de auditoria técnica/pedagógica/acessibilidade sem participantes ([roteiro](docs/roteiro-auditoria-tecnica-sem-participantes.md)).
- [x] Realizar e registrar inspeção estática parcial do HTML/JS/CSS, incluindo busca por campos pessoais e APIs comuns de rede/persistência ([registro](docs/registro-auditoria-estatica-2026-10-20.md)).
- [x] Calcular contraste de combinações selecionadas de texto, foco e estados e registrar possíveis pendências ([verificação preliminar](docs/verificacao-preliminar-contraste-2026-10-20.md)).
- [x] Fazer revisão contextual estática das bordas com baixo contraste: há outros indicadores de estado no código, mas AUD-15 segue parcial até teste manual em navegador/tecnologia assistiva.
- [x] Conferir a última CI para o código do protótipo inspecionado: 22 testes Playwright + axe-core passaram no commit de código registrado ([execução](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486)); os testes manuais continuam pendentes.
- [ ] Concluir testes manuais em dispositivos/tecnologias assistivas; automação não substitui essa etapa.
- [x] Criar mapa preliminar de objetivos educativos e tarefas, distinguindo conteúdo estático de prática interativa ([mapa](docs/mapa-objetivos-educativos-e-tarefas.md)).
- [ ] Revisar os objetivos com base na literatura e definir critérios de verificação.

## Fase 1 — Revisão bibliográfica e alinhamento acadêmico (P0)

- [x] Consolidar as estratégias e criar registro de execução com campos para contagens/exportações ([registro](docs/registro-busca-estruturada-2026-10-20.md)).
- [ ] Executar as estratégias nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO; nesta rodada as páginas de resultados não foram recuperadas pelo ambiente de navegação, então não há contagens/exportações oficiais documentadas.
- [x] Acrescentar estratégias focadas em preparação, simulação educativa, habilidades digitais e necessidades de apoio.
- [x] Adicionar nota exploratória com evidências sobre treinamento de usuários, recursos comparáveis e suas limitações.
- [x] Registrar rodada exploratória da web em 20/10/2026 sobre métodos de usabilidade de simulações educativas e diretriz de acessibilidade WHO/ITU ([registro](docs/registro-busca-exploratoria-2026-10-20.md)).
- [x] Registrar um primeiro benchmark exploratório de recursos públicos e seus limites ([benchmark](docs/benchmark-recursos-existentes.md)).
- [x] Acrescentar ao protocolo uma rubrica candidata para sucesso total/parcial e falha por tarefa, para revisão da orientação.
- [ ] Executar as estratégias nas bases oficiais e registrar as contagens/exportações; a busca formal permanece pendente.
- [ ] Registrar data, estratégia efetiva, filtros, resultados, exportações, deduplicação e critérios de inclusão/exclusão.
- [ ] Aprofundar o benchmark de recursos existentes e demonstrar o diferencial específico; o levantamento atual é exploratório e não exaustivo.
- [x] Atualizar a síntese exploratória, as referências e a matriz com estudos metodológicos adjacentes e limites de transferência.
- [ ] Executar a busca oficial reproduzível nas interfaces e atualizar a matriz com contagens/exportações e triagem documentada.
- [ ] Discutir pergunta, objetivos, público-alvo, produto e adequação à linha com a orientação.
- [ ] Conferir o edital e o modelo oficial vigentes da UERJ, incluindo extensão, formato, critérios e documentos obrigatórios.

**Critério de saída:** busca reproduzível e lacuna tecnológica/educativa descrita com base em literatura e comparação com soluções existentes; anteprojeto coerente com o método discutido.

## Fase 2 — Público, cenário e ética (P0)

- [ ] Definir “baixa familiaridade digital” operacionalmente, sem associá-la automaticamente a idade, escolaridade ou diagnóstico.
- [ ] Confirmar com a orientação se o plano sem participantes atende aos requisitos; somente se necessário, investigar acesso e definir a menor atividade com pessoas que responda à exigência.
- [ ] **Condicional:** só avaliar contato com a Secretaria Municipal de Saúde de Guaraí se a orientação indicar que uma articulação institucional/campo é necessária; não pressupor aceite nem parceria.
- [ ] Definir tarefas de auditoria interna e critérios técnicos; elegibilidade, convite, consentimento e plano de análise para pessoas só se a orientação solicitar uma etapa empírica.
- [ ] Verificar formalmente autorizações institucionais e apreciação ética aplicável.
- [ ] Não recrutar, entrevistar, observar usuários em contexto de atendimento nem coletar respostas antes de confirmar as aprovações necessárias.

**Critério de saída:** cenário de desenvolvimento/avaliação documentado, responsabilidades claras e aprovações pertinentes verificadas. Se não houver campo ou autorização em tempo hábil, continuar com avaliação sem participantes e limitar as conclusões.

## Fase 3 — Produto, conteúdo e acessibilidade (P1)

- [x] Reestruturar o protótipo em três etapas: antes; durante, com três cenários selecionáveis; encerrar/confirmar próximos passos.
- [x] Acrescentar em cada cenário uma tarefa de escolha e feedback acolhedor; revisão editorial documental registrada, com revisão pela orientação e teste manual ainda pendentes.
- [ ] Garantir que exemplos, nome de serviço, link, data e profissionais sejam fictícios; não imitar portal oficial real de modo enganoso.
- [ ] Evitar pedir informações pessoais ou clínicas; nenhuma resposta deve ser enviada ou armazenada.
- [ ] Testar navegação por teclado, foco, mensagens dinâmicas, movimento reduzido, contraste, larguras de tela e ampliação; registrar resultados no roteiro de auditoria.
- [ ] Testar manualmente com tecnologia assistiva disponível e documentar limitações reais.
- [x] Atualizar `docs/produto-minimo.md` e a especificação do produto com os três cenários.
- [ ] Atualizar o relatório com o resultado da CI final após os testes do novo fluxo.

**Critério de saída:** cada funcionalidade corresponde a um objetivo educativo e tem um teste verificável; conteúdo e interface não podem ser confundidos com serviço real de telessaúde.

## Fase 4 — Protocolo e avaliação (P1)

- [ ] Priorizar requisitos derivados da literatura e de soluções existentes; só definir técnica com participantes se a orientação indicar necessidade.
- [ ] Manter tarefas de usabilidade com pessoas fora do plano inicial; prepará-las apenas se a orientação solicitar essa avaliação.
- [ ] Definir previamente critérios de conclusão, erros relevantes, necessidade de ajuda e compreensão da instrução.
- [ ] Escolher instrumentos de usabilidade com justificativa; não assumir que questionários de uma plataforma real são automaticamente válidos para um simulador breve.
- [ ] Planejar análise descritiva e registro qualitativo proporcional ao escopo.
- [ ] Executar avaliação documental, técnica, pedagógica e de acessibilidade sem participantes; se a orientação exigir pessoas, revisar protocolo e autorizações antes de iniciar.
- [ ] Preservar rastreabilidade requisito → evidência → implementação → teste → resultado.

## Fase 5 — Engenharia e entrega (P2)

- [x] Manter verificações estáticas e testes automatizados do protótipo.
- [ ] Rodar testes depois de cada alteração de interface/fluxo e corrigir regressões.
- [ ] Registrar ambiente, resultados e limitações em relatório técnico.
- [ ] Consolidar requisitos, documentação, código, resultados e recomendações.
- [ ] Definir publicação/hospedagem sem anunciar vínculo institucional ou implantação oficial sem autorização.

## Critérios de conclusão do projeto

O projeto só poderá ser considerado coerente quando:
1. título, pergunta, objetivos, produto e método descrevem o mesmo simulador educativo;
2. a baixa familiaridade digital estiver definida de maneira operacional e não estigmatizante;
3. a inovação estiver comparada com recursos existentes;
4. cada alegação de resultado estiver sustentada por evidência coletada;
5. limitações e dependências institucionais/éticas estiverem explícitas;
6. o protótipo for acessível e seguro para uso demonstrativo;
7. o anteprojeto responder aos sete critérios do edital.

## Histórico de decisão

Em 20/10/2026, foi escolhido exclusivamente **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital**. Os outros temas permanecem apenas no documento histórico de comparação e não devem orientar novas funcionalidades, busca de produto ou escrita do anteprojeto.


## Atualização — apresentação para defesa oral (20/10/2026)

- [x] Preparar uma nova apresentação em formato **OpenDocument Presentation (.odp)**, alinhada ao escopo e às evidências atuais do projeto.
- [x] Preparar guia complementar em Markdown com roteiro de fala, perguntas prováveis e checklist de preparação.
- [x] Atualizar a apresentação para não pressupor entrevistas, amostra, parceria institucional, testes com participantes ou eficácia clínica.
- [x] Corrigir a descrição das evidências técnicas: o último CI documentado contém 22 testes Playwright + axe-core aprovados no commit de código registrado; auditoria manual e busca bibliográfica formal seguem pendentes.
- [x] Adicionar os arquivos finais à pasta `apresentacao/`: [apresentação ODP](apresentacao/defesa-oral-atualizada.odp) e [guia Markdown](apresentacao/guia-defesa-oral-atualizado.md). O pacote ODP foi aberto e convertido em PDF pelo LibreOffice Impress, com 15 páginas geradas. A inspeção visual de miniaturas não identificou páginas ausentes; a revisão de legibilidade em tela cheia e a personalização pelo candidato continuam pendentes.
- [ ] Personalizar nome e motivação do candidato e confirmar no edital vigente duração e permissão de slides.

**Arquivos adicionados:** `apresentacao/defesa-oral-atualizada.odp` e `apresentacao/guia-defesa-oral-atualizado.md`. A apresentação é material de preparação, não substitui a conferência do edital vigente nem validação acadêmica do método.


## Atualização — revisão contextual de contraste (20/10/2026)

- [x] Relidos os seletores CSS e os elementos HTML relacionados às três bordas de baixo contraste.
- [x] Registrado que a etapa ativa também usa fundo, texto, círculo preenchido e `aria-current`; o checklist usa checkbox nativo e fundo; o aviso contém símbolo, fundo e texto explícito.
- [ ] Confirmar esses indicadores no estado renderizado, teclado e tecnologia assistiva. AUD-15 permanece parcial; nenhuma mudança de CSS foi feita.


## Atualização — segunda revisão estática do protótipo (20/10/2026)

- [x] Inspecionar estaticamente os arquivos atuais de HTML, JavaScript e CSS, registrando hashes e limites em [segunda revisão estática](docs/segunda-revisao-estatica-2026-10-20.md).
- [x] Conferir por busca textual 24 IDs sem duplicações, os três destinos de `aria-controls`, nove referências únicas de `getElementById` e referências `href`/`src` apenas locais.
- [x] Repetir a busca lexical por APIs comuns de rede/persistência; nenhuma das APIs listadas foi encontrada no JavaScript inspecionado. Isso não prova ausência universal de rede/armazenamento.
- [x] Corrigir a documentação pedagógica: o conteúdo educativo de encerramento é estático, embora exista uma escala interativa de facilidade de 1 a 5. A escala não é tarefa de aprendizagem nem validação com usuários.
- [x] Atualizar o mapa de objetivos, o guia da defesa e o relatório de revisão técnica com essa distinção.
- [ ] Executar auditoria manual no navegador, incluindo teclado/foco, zoom/reflow, leitor de tela, estados visuais e painel Network/Application.
- [ ] Executar a suíte automatizada em CI após qualquer alteração de código; esta rodada foi documental/estática e não gerou nova execução de testes.
- [ ] Concluir buscas bibliográficas formais nas interfaces oficiais e registrar contagens/exportações reais.

**Limite desta rodada:** não houve alteração no código do produto, execução do navegador, nova CI ou avaliação com participantes. A inspeção estática não equivale a auditoria integral WCAG nem demonstra aprendizagem.


### Ajuste de precisão da apresentação — 20/10/2026

- [x] Corrigir o slide do protótipo para dizer que o **conteúdo educativo** da etapa “Encerrar” é estático, embora a tela inclua uma escala local de facilidade de 1 a 5.
- [x] Substituir o ODP no repositório e conferir que o arquivo em `main` corresponde ao novo blob `c0270a9cf1c7d8a25c2e42d5e73280ddbb8ed7fd`.
- [x] Harmonizar a descrição com o mapa de objetivos e o guia da defesa: a escala de facilidade não é tarefa de aprendizagem, métrica de compreensão nem validação com usuários.

Commit da atualização do ODP: [50bd1e648bf871afea0d90266fd95153da40fa36](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/50bd1e648bf871afea0d90266fd95153da40fa36). A alteração é documental; não houve mudança de código do protótipo nem nova execução de CI.


### Conferência de renderização após a correção do slide — 20/10/2026

- [x] Reabrir o ODP atualizado com LibreOffice Impress em modo headless e exportar para PDF.
- [x] Confirmar que a apresentação continua com 15 páginas.
- [x] Inspecionar a renderização do slide 5: a frase sobre conteúdo educativo estático e escala local de facilidade aparece legível na página renderizada.
- [ ] Revisar todos os slides em tamanho de apresentação e personalizar os campos do candidato; a inspeção desta rodada foi focada no slide alterado.

A exportação PDF foi usada apenas para verificação; o artefato principal continua sendo `apresentacao/defesa-oral-atualizada.odp`. Não houve mudança no código do produto nem nova CI.


## Atualização de continuidade — documentação, tutorial e coerência metodológica (20/10/2026)

### Concluído nesta rodada

- [x] Remover do `README.md` as seções **“Situação atual”**, **“Aviso”** e **“Preparação para defesa oral”**, mantendo a organização geral e os links úteis.
- [x] Criar [tutorial didático para abrir e testar o protótipo](docs/tutorial-instalar-e-testar-prototipo.md), distinguindo o uso sem instalação da aplicação da instalação do ambiente para testes automatizados.
- [x] Ligar o tutorial a `README.md`, `produto/README.md` e `docs/como-executar-testes.md`.
- [x] Harmonizar a pergunta e o objetivo do `README.md`, `docs/anteprojeto-base.md` e `docs/anteprojeto-modelo-uerj.md) com o plano atual de desenvolvimento e avaliação documental/técnica/pedagógica sem participantes.
- [x] Reformular a hipótese no anteprojeto-base como proposição de design verificável, sem alegar que o protótipo é utilizável pelo público-alvo ou melhora resultados reais.

### Estado de execução e limites

- Nenhum arquivo de código do produto foi alterado nesta rodada.
- Não foi executada nova suíte automatizada: o ambiente de trabalho não conseguiu resolver `github.com` para clonar o repositório e executar os comandos localmente. Isso não indica falha do produto; significa que não há resultado de teste novo a registrar.
- O tutorial descreve o procedimento esperado; não significa que o desenvolvedor já tenha instalado o ambiente ou executado os passos.
- A pergunta harmonizada é uma proposta de trabalho alinhada à preferência metodológica atual e continua sujeita à discussão com a orientação acadêmica.

### Próximas prioridades

1. [ ] Executar as buscas bibliográficas nas bases oficiais e registrar estratégias realmente submetidas, contagens, exportações e triagem.
2. [ ] O desenvolvedor seguir o tutorial e registrar os resultados locais de `npm test`, versão de Node.js, sistema operacional e commit.
3. [ ] Executar a auditoria manual de teclado/foco, zoom/reflow, leitores de tela, estados visuais e Network/Application, registrando cada caso sem presumir sucesso.
4. [x] Revisar editorialmente as instruções e feedbacks dos três cenários à luz dos objetivos e das fontes já documentadas; ver [registro](docs/revisao-editorial-cenarios-feedbacks-2026-10-20.md).
5. [ ] Executar testes de regressão automatizados e auditoria manual do fluxo após as mudanças de texto no HTML/JavaScript.
5. [ ] Decidir, após revisão pedagógica, se o encerramento precisa de uma tarefa interativa mínima para OE-05; não implementar automaticamente sem justificativa.
6. [ ] Confirmar com a orientação se o desenho inicial sem participantes atende aos requisitos do curso.

A apresentação em `apresentacao/` permanece versionada e não foi modificada nesta rodada.


## Atualização — estado dos requisitos do protótipo e busca formal (20/10/2026)

- [x] Atualizar `docs/produto-minimo.md` para separar requisitos desejados do estado atual de implementação, com uma matriz RF-01 a RF-11.
- [x] Marcar RF-07 (prática interativa de encerramento/OE-05) como pendente de implementação/decisão. A tela atual contém exemplos estáticos e uma escala de facilidade local; a escala não cumpre OE-05.
- [x] Registrar a regra de não ampliar automaticamente o escopo: primeiro justificar a necessidade pedagógica, especificar opções e feedback e planejar os testes.
- [x] Registrar tentativa adicional de acesso à API E-utilities do PubMed; a ferramenta de navegação não conseguiu acessar o endpoint e não forneceu contagem.
- [ ] Executar PM-1 a PM-4, BVS-1 a BVS-3 e SC-1 a SC-2 nas interfaces oficiais com contagens e exportações reais. A busca formal continua pendente.

**Limites desta atualização:** nenhuma alteração de HTML/CSS/JS e nenhuma nova execução de testes automatizados. A inspeção da matriz de requisitos é documental e não substitui a auditoria manual do navegador.


## Atualização — revisão pedagógica dos cenários e feedbacks (20/10/2026)

### Concluído nesta rodada

- [x] Revisar editorialmente os três cenários interativos com foco em ação concreta, feedback explicativo, tom não punitivo, privacidade e limites não clínicos.
- [x] Atualizar os textos do cenário “O link não abre”: conferir conexão e link/canal oficial conhecido; pedir ajuda por contato oficial conhecido; não compartilhar senhas/dados em links inesperados.
- [x] Atualizar “Não consigo ouvir”: conferir volume e controles de saída de som quando disponíveis e avisar o profissional se o problema continuar.
- [x] Atualizar “Não entendi uma informação”: pedir repetição/explicação alternativa e confirmar o próximo passo, sem adivinhar.
- [x] Criar [registro da revisão editorial dos cenários e feedbacks](docs/revisao-editorial-cenarios-feedbacks-2026-10-20.md) com racional, fontes já documentadas, rastreabilidade e limites.
- [x] Harmonizar o mapa de objetivos educativos e os dois rascunhos de anteprojeto, corrigindo a descrição da etapa “Encerrar”: os exemplos são estáticos; a escala de facilidade 1–5 não é tarefa de aprendizagem.
- [x] Adicionar teste Playwright para conferir que o feedback dos três cenários contém a próxima ação concreta.
- [x] Indexar o registro de revisão no README.

### Evidências e pendências

- Alterações de produto: `produto/app.js` e `produto/index.html`.
- Teste acrescentado: `tests/prototype.spec.js`.
- Commits de código: [ee4f89f](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/ee4f89fc94ccbe2f91839e3a56b23b67092c656b), [e97887c](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/e97887ce65bd4225d01b6d40e3ffb07d6db2c70d) e [63a267b](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/63a267bd7ecd61f9effd22db79a3e36388b22455).
- [ ] Aguardar/conferir a CI correspondente aos commits de código; não há resultado novo de testes confirmado nesta atualização.
- [ ] Fazer inspeção manual no navegador dos fluxos e mensagens.
- [ ] Executar as buscas bibliográficas formais em PubMed/MEDLINE, BVS/LILACS e SciELO com contagens e exportações reais.
- [ ] Confirmar com a orientação se o desenho sem participantes atende aos requisitos do mestrado.

**Limite:** esta rodada é uma revisão editorial e técnica; não prova compreensão pelo público-alvo nem eficácia educativa. A etapa “Encerrar” permanece estática e não foi ampliada.


## Atualização — revisão editorial dos cenários e fortalecimento do anteprojeto (20/10/2026)

- [x] Revisar os textos e feedbacks de OE-02 (link), OE-03 (áudio) e OE-04 (informação não compreendida), reforçando ações concretas, tom não punitivo, canais oficiais conhecidos e limites não clínicos.
- [x] Atualizar os textos da interface em `produto/index.html` e os feedbacks dos cenários/controles fictícios em `produto/app.js`.
- [x] Atualizar o mapa de objetivos e o registro editorial, mantendo OE-05 como conteúdo estático e decisão de escopo em aberto.
- [x] Fortalecer a justificativa do anteprojeto-base e do anteprojeto-modelo: a revisão de Galvin et al. (2024) não comprova eficácia do protótipo; Digital House Calls já é um recurso autoguiado, portanto antes/durante/depois não será alegado como diferencial exclusivo.
- [x] Atualizar o README e este roadmap para apontar ao registro editorial.

**Pendências após a alteração do código:**
- [ ] Executar `npm test` conforme o [tutorial](docs/tutorial-instalar-e-testar-prototipo.md) e registrar o commit efetivamente testado; não há resultado novo de teste confirmado nesta rodada.
- [ ] Conferir o fluxo manualmente, inclusive foco e mensagens anunciadas por leitor de tela.
- [ ] Executar a busca bibliográfica formal nas bases oficiais; contagens/exportações permanecem pendentes.
- [ ] Discutir com a orientação se a avaliação sem participantes atende aos requisitos do curso.

**Limite:** revisão editorial e atualização de texto não são validação com usuários, não demonstram compreensão do público-alvo e não comprovam eficácia educativa.


### Ajuste de rastreabilidade dos testes — 20/10/2026

- [x] Alinhar as novas asserções Playwright às formulações efetivamente presentes na versão atual de `produto/app.js` (link/canal oficial conhecido; controles de som disponíveis; confirmação do próximo passo).
- [ ] Confirmar a execução da CI para o commit de teste [b911436](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/b911436ee49e2678ad4f69c8ededf63be98d4467). A consulta de status disponível não retornou checks; não interpretar isso como aprovação nem falha.


### Complemento — cobertura automatizada dos feedbacks (20/10/2026)

- [x] Ampliar `tests/prototype.spec.js` para conferir partes específicas dos feedbacks de link, áudio e esclarecimento, incluindo canal oficial conhecido, proteção de senha/código, saída de som e confirmação do próximo passo.
- [ ] Executar `npm test` depois das alterações de HTML/JavaScript/testes. O status combinado consultado para o commit de teste não retornou checks; portanto, não há resultado aprovado confirmado.
- [ ] Registrar no relatório o resultado real da execução local ou da CI, associando-o ao commit testado.

Commit das asserções adicionais: [492d562](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/492d562b2a674e8c42eb4e48a320a290a2af0a43). Não marcar a suíte como aprovada até obter o resultado.


## Atualização — matriz de critérios editoriais e fortalecimento metodológico (20/10/2026)

### Avanços documentais desta rodada

- [x] Criar [matriz de critérios para revisão de textos e feedbacks](docs/matriz-criterios-qualidade-textos-feedbacks.md), com critérios observáveis para ação concreta, feedback explicativo, tom não punitivo, privacidade, limite não clínico, simulação explícita, variação de dispositivos, acessibilidade e rastreabilidade.
- [x] Relacionar OE-02 (link), OE-03 (áudio), OE-04 (esclarecimento), OE-01 (checklist) e OE-05 (encerramento) às ações esperadas e verificações sem participantes.
- [x] Ligar a matriz ao README, ao mapa de objetivos e aos dois rascunhos de anteprojeto.
- [x] Registrar limites de inferência: fontes fundamentam princípios gerais, não validam os microtextos específicos nem comprovam compreensão ou eficácia.

### Pendências mantidas

- [ ] Executar a suíte Playwright/axe-core após as alterações de conteúdo/código e registrar o commit efetivamente testado; não presumir CI aprovada.
- [ ] Executar auditoria manual de navegação, foco, mensagens, zoom/reflow, leitor de tela, estados visuais e comportamento de rede.
- [ ] Executar a busca bibliográfica formal nas interfaces oficiais e registrar contagens/exportações reais.
- [ ] Confirmar com a orientação se o plano sem participantes atende aos requisitos do curso.

**Limite desta rodada:** foram realizadas alterações documentais; não houve alteração no HTML/CSS/JavaScript, execução de testes, auditoria manual ou avaliação com participantes. A matriz documenta consistência do design, não validação do público-alvo.


### Complemento de rastreabilidade — especificação do produto (20/10/2026)

- [x] Vincular a especificação do produto mínimo à matriz de critérios editoriais, para que a implementação e a auditoria consultem os mesmos critérios.
- [x] Manter as pendências técnicas como abertas: testes de regressão após as mudanças de código, auditoria manual e buscas bibliográficas formais.
- [ ] Não marcar os critérios técnicos como aprovados até registrar execução no commit atual.


- [x] Conferir o encadeamento documental: o roadmap técnico também aponta diretamente para a [matriz de critérios de qualidade dos textos e feedbacks](docs/matriz-criterios-qualidade-textos-feedbacks.md).


## Atualização — segunda simplificação editorial dos cenários (20/10/2026)

### Concluído nesta rodada

- [x] Tornar o texto de acesso mais concreto: verificar a internet, confirmar o link pelo contato informado anteriormente pelo serviço de saúde e pedir ajuda por esse contato se a falha persistir.
- [x] Substituir “saída de som” por referência ao volume, alto-falante ou fone em uso; manter o pedido de ajuda se o áudio continuar falhando.
- [x] Simplificar o cenário de esclarecimento para pedir repetição/explicação em outras palavras e confirmar o próximo passo mencionado.
- [x] Harmonizar HTML, JavaScript, testes Playwright, mapa de objetivos, matriz editorial, especificação, anteprojetos, README e diretriz para IAs.
- [x] Preservar a etapa “Encerrar” como conteúdo estático; não acrescentar uma interação sem decisão de escopo.

### Pendências e limite

- [ ] Executar a suíte Playwright/axe-core e confirmar a CI associada ao commit atual.
- [ ] Fazer auditoria manual de teclado, foco, mensagens, zoom/reflow, leitor de tela, estados visuais e comportamento de rede.
- [ ] Executar a busca bibliográfica formal e registrar contagens/exportações reais.
- [ ] Confirmar com a orientação se o desenho sem participantes atende aos requisitos do curso.

A revisão é documental e de conteúdo. Não comprova compreensão do público-alvo, usabilidade real ou eficácia educativa.


## Atualização — controles visuais, acessibilidade e uniformização das opções (21/10/2026)

### Implementado nesta rodada

- [x] Definir modo claro como padrão e adicionar alternância para modo escuro.
- [x] Adicionar três níveis de tamanho de texto e controles para aumentar/diminuir.
- [x] Adicionar alto contraste, paleta azul/âmbar, paleta monocromática e reforço do foco/leitura.
- [x] Manter as configurações apenas na sessão atual, sem armazenamento persistente.
- [x] Padronizar os cartões de opções de resposta em largura e altura dentro de cada cenário.
- [x] Incluir verificações estáticas e testes de navegador para os novos controles e a uniformidade dos cartões.
- [x] Atualizar README, guia de uso e diretrizes para IAs com os recursos e seus limites.

### Validação e pendências

- [x] A CI completou as verificações estáticas, sintáticas e de validação HTML nesta execução.
- [x] Confirmar o resultado final dos testes Playwright/axe-core: 26 testes passaram na execução [#39615349270](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39615349270), no commit [03578a9](https://github.com/pablopcdossantos2-sys/repositorio-repo/commit/03578a999aeca76b014e08563391f16662ea4f81).
- [ ] Fazer auditoria manual com teclado, leitor de tela, ampliação/zoom e diferentes combinações de tema, contraste e paleta.
- [ ] Confirmar a igualdade dimensional dos cartões também com texto muito grande e em larguras móveis; retestar qualquer caso divergente.

**Limite:** esses controles ampliam as preferências visuais e a testabilidade, mas não certificam conformidade WCAG nem demonstram acessibilidade para todas as deficiências visuais. Ver [registro de implementação e verificações pendentes](docs/revisao-acessibilidade-visual-e-controles-2026-10-21.md).


## Atualização — modelo estruturado de auditoria manual (21/10/2026)

- [x] Criar um modelo reutilizável com códigos padronizados C/PC/NC/NT/BL/NA, dados do ambiente e casos de teste por área.
- [x] Incluir campos de evidência, IDs de defeito, gravidade, commit da correção e resultado do reteste.
- [ ] Executar a primeira rodada manual com o navegador e as tecnologias assistivas realmente disponíveis.
- [ ] Corrigir e retestar defeitos identificados, mantendo os resultados vinculados ao commit.

Instrumento: [Modelo de preenchimento — auditoria manual de acessibilidade](docs/modelo-preenchimento-auditoria-manual-acessibilidade.md). O formulário não equivale a validação com participantes ou certificação integral WCAG.
