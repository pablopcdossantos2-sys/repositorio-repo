# ROADMAP — Treino de Teleconsulta

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
- **Preferência metodológica inicial:** identificar necessidades e produzir um protótipo fundamentado, combinando uma técnica enxuta de identificação de necessidades com revisão de uma representação simples. O acesso ao público é incerto; amostra, parceria e aprovações não estão confirmadas. A usabilidade autônoma é complementar e condicionada.
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
| P0 | Ética e cenário | Definição de avaliação sem participantes e caminho condicionado para eventual estudo com pessoas. |
| P1 | Produto e acessibilidade | Interface realmente centrada em praticar passos de teleconsulta, acessível em celular e teclado. |
| P1 | Avaliação | Tarefas, critérios de êxito, ajuda necessária, erros e compreensão definidos previamente. |
| P2 | Engenharia e entrega | Testes proporcionais, documentação do produto, limitações e estratégia de publicação. |

## Acompanhamento no GitHub

- [#1 — Busca bibliográfica reproduzível nas bases oficiais](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/1)
- [#2 — Testes manuais de acessibilidade](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/2)
- [#3 — Protocolo de avaliação e autorizações aplicáveis](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/3)
- [#4 — Viabilidade de cenário/parceria em Guaraí](https://github.com/pablopcdossantos2-sys/repositorio-repo/issues/4)

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
- [ ] Concluir testes manuais em dispositivos/tecnologias assistivas; automação não substitui essa etapa.
- [ ] Definir objetivos de aprendizagem observáveis e critérios iniciais de sucesso.

## Fase 1 — Revisão bibliográfica e alinhamento acadêmico (P0)

- [ ] Executar as estratégias nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO.
- [x] Acrescentar estratégias focadas em preparação, simulação educativa, habilidades digitais e necessidades de apoio.
- [x] Adicionar nota exploratória com evidências sobre treinamento de usuários, recursos comparáveis e suas limitações.
- [x] Registrar rodada exploratória da web em 20/10/2026 sobre métodos de usabilidade de simulações educativas e diretriz de acessibilidade WHO/ITU ([registro](docs/registro-busca-exploratoria-2026-10-20.md)).
- [x] Acrescentar ao protocolo uma rubrica candidata para sucesso total/parcial e falha por tarefa, para revisão da orientação.
- [ ] Executar as estratégias nas bases oficiais e registrar as contagens/exportações; a busca formal permanece pendente.
- [ ] Registrar data, estratégia efetiva, filtros, resultados, exportações, deduplicação e critérios de inclusão/exclusão.
- [ ] Completar o benchmarking de recursos existentes (portais, guias, vídeos, tutoriais, cursos autoguiados e simuladores) e demonstrar o diferencial específico; o levantamento atual é exploratório.
- [x] Atualizar a síntese exploratória, as referências e a matriz com estudos metodológicos adjacentes e limites de transferência.
- [ ] Executar a busca oficial reproduzível nas interfaces e atualizar a matriz com contagens/exportações e triagem documentada.
- [ ] Discutir pergunta, objetivos, público-alvo, produto e adequação à linha com a orientação.
- [ ] Conferir o edital e o modelo oficial vigentes da UERJ, incluindo extensão, formato, critérios e documentos obrigatórios.

**Critério de saída:** busca reproduzível e lacuna tecnológica/educativa descrita com base em literatura e comparação com soluções existentes; anteprojeto coerente com o método discutido.

## Fase 2 — Público, cenário e ética (P0)

- [ ] Definir “baixa familiaridade digital” operacionalmente, sem associá-la automaticamente a idade, escolaridade ou diagnóstico.
- [ ] Investigar alternativas de acesso ao público e discutir a combinação enxuta de identificação de necessidades e revisão de protótipo simples; não presumir campo, parceria ou amostra.
- [ ] Fazer contato exploratório com a Secretaria Municipal de Saúde de Guaraí para avaliar contexto e possibilidade de parceria; não pressupor aceite.
- [ ] Definir tarefas simuladas, elegibilidade, convite, consentimento, dados necessários e plano de análise, caso haja pesquisa com pessoas.
- [ ] Verificar formalmente autorizações institucionais e apreciação ética aplicável.
- [ ] Não recrutar, entrevistar, observar usuários em contexto de atendimento nem coletar respostas antes de confirmar as aprovações necessárias.

**Critério de saída:** cenário de desenvolvimento/avaliação documentado, responsabilidades claras e aprovações pertinentes verificadas. Se não houver campo ou autorização em tempo hábil, continuar com avaliação sem participantes e limitar as conclusões.

## Fase 3 — Produto, conteúdo e acessibilidade (P1)

- [x] Reestruturar o protótipo em três etapas: antes; durante, com três cenários selecionáveis; encerrar/confirmar próximos passos.
- [x] Acrescentar em cada cenário uma tarefa de escolha e feedback acolhedor; a revisão pedagógica com a orientação ainda está pendente.
- [ ] Garantir que exemplos, nome de serviço, link, data e profissionais sejam fictícios; não imitar portal oficial real de modo enganoso.
- [ ] Evitar pedir informações pessoais ou clínicas; nenhuma resposta deve ser enviada ou armazenada.
- [ ] Testar navegação por teclado, foco, mensagens dinâmicas, movimento reduzido, contraste, larguras de tela e ampliação.
- [ ] Testar manualmente com tecnologia assistiva disponível e documentar limitações reais.
- [x] Atualizar `docs/produto-minimo.md` e a especificação do produto com os três cenários.
- [ ] Atualizar o relatório com o resultado da CI final após os testes do novo fluxo.

**Critério de saída:** cada funcionalidade corresponde a um objetivo educativo e tem um teste verificável; conteúdo e interface não podem ser confundidos com serviço real de telessaúde.

## Fase 4 — Protocolo e avaliação (P1)

- [ ] Definir primeiro a técnica principal de identificação de necessidades e o modo de revisar uma representação simples do produto.
- [ ] Definir tarefas padronizadas relacionadas aos passos simulados (por exemplo, preparar o dispositivo; entrar na sala fictícia; reagir à ausência de áudio; pedir repetição; confirmar os próximos passos) apenas se a avaliação de usabilidade autônoma for mantida.
- [ ] Definir previamente critérios de conclusão, erros relevantes, necessidade de ajuda e compreensão da instrução.
- [ ] Escolher instrumentos de usabilidade com justificativa; não assumir que questionários de uma plataforma real são automaticamente válidos para um simulador breve.
- [ ] Planejar análise descritiva e registro qualitativo proporcional ao escopo.
- [ ] Caso participantes sejam incluídos, realizar as etapas somente após aprovação. Caso contrário, manter a avaliação técnica/pedagógica e explicitar a limitação.
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
