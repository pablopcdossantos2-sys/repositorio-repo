# Treino de Teleconsulta — simulador educativo para usuários com baixa familiaridade digital

> **Para continuidade do trabalho:** antes de qualquer alteração, leia [Estado atual do projeto e diretrizes para IAs](docs/estado-atual-e-diretrizes-para-ias.md). Esse documento consolida as decisões vigentes e orienta como resolver conflitos com rascunhos anteriores.

Projeto de pesquisa tecnológica em desenvolvimento para o **Mestrado Profissional em Telessaúde e Saúde Digital da UERJ**. O tema escolhido é, de forma exclusiva:

> **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital.**

O projeto está enquadrado na linha **“2) Tecnologias para Educação em Saúde”** e no tipo **“Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde”**. A nomenclatura, os requisitos e a adequação final precisam ser conferidos com o edital vigente e com a orientação acadêmica.

### Registros de execução recentes

- [Registro de execução das buscas bibliográficas (20/10/2026)](docs/registro-busca-estruturada-2026-10-20.md) — strings e estados de execução; as consultas oficiais ainda precisam ser executadas e exportadas.
- [Registro da auditoria estática do protótipo (20/10/2026)](docs/registro-auditoria-estatica-2026-10-20.md) — inspeção de código parcial; testes manuais em navegador permanecem pendentes.
- [Verificação preliminar de contraste (20/10/2026)](docs/verificacao-preliminar-contraste-2026-10-20.md) — cálculos selecionados de contraste e pontos a confirmar no navegador.

## Objetivo do projeto

Desenvolver e avaliar tecnicamente, pedagogicamente e quanto à acessibilidade um protótipo web responsivo que **ofereça prática simulada de etapas básicas de uma teleconsulta**: preparar dispositivo e ambiente, acessar uma sala virtual fictícia, lidar com dificuldades simples de áudio, comunicar dúvidas e confirmar os próximos passos antes de encerrar. A avaliação inicial será documental e técnica, sem participantes; portanto, não permitirá concluir que o produto melhora a aprendizagem ou o desempenho de usuários reais.

A proposta é educativa, não assistencial. O simulador não realiza teleconsulta, não coleta dados clínicos, não se conecta a sistemas de saúde e não comprova por si só aprendizagem duradoura, melhor acesso, adesão ou desfechos clínicos.

## Pergunta de pesquisa de trabalho

Como desenvolver e avaliar, por análise documental e auditoria técnica, pedagógica e de acessibilidade sem participantes, um simulador web que ofereça prática fictícia de etapas básicas de uma teleconsulta para adultos com baixa familiaridade digital?

## Produto mínimo em foco

1. **Antes:** preparar aparelho, conexão, ambiente privado e dúvidas que a pessoa deseja levar ao atendimento.
2. **Durante — simulação:** praticar em três situações selecionáveis: o link não abre, não consigo ouvir e não entendi uma informação. Cada escolha recebe feedback específico, sem conexão com sistemas reais.
3. **Ao encerrar:** praticar como pedir esclarecimentos, confirmar o que ficou combinado e identificar canais oficiais de contato quando persistirem dúvidas.

Os cenários e nomes serão fictícios. O produto não terá login, integração com prontuários, inteligência artificial, diagnóstico, prescrição nem recomendação clínica automatizada. Não deverá pedir nem armazenar informações pessoais ou de saúde. A interface deve oferecer instruções passo a passo, linguagem clara, botões identificáveis, baixa carga cognitiva e uso em celular.

## Público e cenário

O público de interesse são **adultos com baixa familiaridade digital**; a definição operacional e os critérios de elegibilidade deverão ser elaborados com a orientação, justificados na metodologia e verificados antes de qualquer pesquisa com pessoas. Guaraí, Tocantins, permanece como **cenário potencial de articulação**, não como parceria confirmada nem como requisito para construir o protótipo. A eventual participação de usuários ou profissionais dependerá das autorizações institucionais e éticas aplicáveis.

## Método de trabalho — ainda sujeito à orientação

A preferência metodológica inicial é desenvolver um **protótipo simples fundamentado em literatura e análise de soluções existentes**, com avaliação técnica, pedagógica e de acessibilidade sem participantes. A interação com pessoas não é requisito inicial; só será incorporada se a orientação acadêmica indicar que é necessária e após verificar viabilidade e autorizações. Nenhuma parceria, campo, aprovação ou amostra está confirmada.

1. Executar uma busca bibliográfica reproduzível e mapear soluções existentes.
2. Derivar requisitos preliminares da literatura, guias e soluções analisadas, distinguindo evidências de hipóteses.
3. Confirmar com a orientação se o plano inicial sem participantes atende aos requisitos; apenas se for necessário, definir a atividade mínima com pessoas e verificar acesso e aprovações.
4. Desenvolver e avaliar tecnicamente o simulador com cenários fictícios, incorporando os requisitos priorizados.
5. Manter testes com pessoas fora do plano inicial, salvo indicação da orientação e confirmação de viabilidade e autorizações.
6. Documentar decisões, alterações, limites e recomendações.

A prioridade é consolidar evidências, requisitos e avaliação técnica/pedagógica sem participantes. Técnica, amostra, instrumentos e análise de atividades com pessoas só serão definidos se a orientação solicitar essa etapa. Nenhuma atividade de pesquisa com participantes deve começar antes de verificar e obter as aprovações aplicáveis.

## Critérios que orientam o anteprojeto

O anteprojeto deve responder aos sete critérios do edital: (1) justificativa, relevância e aderência à linha; (2) potencial mercadológico e/ou inovação/escalabilidade; (3) conclusão em dois anos; (4) impacto para a sociedade; (5) equidade e diversidade; (6) relação com os ODS; e (7) relação com a transformação digital do SUS. A matriz histórica de comparação e o registro da decisão estão em [Critérios do edital e decisão de tema](docs/criterios-edital-e-seis-temas.md). As outras cinco alternativas não integram mais o escopo ativo do projeto.

## Princípios de escopo e segurança

- **Ensinar uma tarefa por vez:** instruções concretas, progressão previsível, exemplos fictícios e feedback não punitivo.
- **Acessibilidade desde o início:** teclado, foco visível, leitura por tecnologia assistiva, contraste, responsividade e linguagem simples.
- **Sem teleconsulta real:** nenhum áudio/vídeo ao vivo ou contato com profissionais pelo protótipo.
- **Sem dados clínicos ou identificáveis:** evitar formulários que solicitem dados pessoais; não transmitir nem persistir respostas.
- **Sem decisões clínicas:** nenhum diagnóstico, prescrição, triagem ou alteração de conduta.
- **Ética antes da pesquisa:** não recrutar, entrevistar nem conduzir testes de pesquisa com participantes sem verificar e obter as aprovações aplicáveis.
- **Alegações proporcionais à evidência:** usabilidade e desempenho em tarefas simuladas não equivalem a aprendizagem duradoura nem a resultados clínicos.

## Estrutura do repositório

- [ROADMAP — prioridades, critérios de conclusão e pendências](ROADMAP.md)
- [Roadmap técnico do produto](docs/roadmap.md)
- [Anteprojeto — versão de trabalho](docs/anteprojeto-base.md)
- [Anteprojeto organizado conforme o modelo da UERJ](docs/anteprojeto-modelo-uerj.md)
- [Especificação do produto mínimo](docs/produto-minimo.md)
- [Mapa preliminar de objetivos educativos e tarefas](docs/mapa-objetivos-educativos-e-tarefas.md)
- [Revisão editorial dos cenários e feedbacks (20/10/2026)](docs/revisao-editorial-cenarios-feedbacks-2026-10-20.md) — mudanças de linguagem, racional pedagógico, fontes de contexto e verificações pendentes.
- [Decisões metodológicas — opções, desenho recomendado e pendências](docs/decisoes-metodologicas.md)
- [Protocolo preliminar de avaliação](docs/protocolo-preliminar-avaliacao.md)
- [Matriz de evidências e requisitos](docs/matriz-evidencias-requisitos.md)
- [Nota de evidências e decisões para o tema](docs/nota-evidencias-e-decisoes-teleconsulta-2026-10-20.md)
- [Critérios do edital e decisão de tema](docs/criterios-edital-e-seis-temas.md)
- [Plano de parceria e ética](docs/parceria-e-etica.md)
- [Roteiro de conversa exploratória com a Secretaria](docs/roteiro-reuniao-secretaria.md)
- [Busca bibliográfica estruturada — protocolo e síntese crítica](docs/busca-bibliografica-estruturada.md)
- [Referências iniciais e plano de busca](docs/referencias-e-busca-bibliografica.md)
- [Benchmark exploratório de recursos existentes](docs/benchmark-recursos-existentes.md)
- [Revisão rápida de evidências e recomendações](docs/revisao-rapida-evidencias-e-recomendacoes.md)
- [Registro da busca exploratória complementar — 19/10/2026](docs/registro-busca-exploratoria-2026-10-19.md)
- [Registro da busca exploratória complementar — 20/10/2026](docs/registro-busca-exploratoria-2026-10-20.md)
- [Guia operacional das tarefas pessoais](docs/tarefas-pessoais-e-proximos-passos.md)
- [Relatório de revisão técnica](docs/relatorio-revisao-tecnica.md)
- [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](docs/roteiro-auditoria-tecnica-sem-participantes.md)
- [Carta de exposição de motivos — minuta editável](docs/carta-exposicao-de-motivos.md)
- [Declaração de conhecimento da Deliberação nº 13/2023 — minuta editável](docs/declaracao-conhecimento-deliberacao-13-2023.md)
- [Protótipo — página inicial](produto/index.html)
- [Como abrir o protótipo](produto/README.md)
- [Tutorial didático para abrir e testar o protótipo](docs/tutorial-instalar-e-testar-prototipo.md)
- [Testes de navegador e acessibilidade automatizada](tests/prototype.spec.js)
- [Verificações estáticas](scripts/check-prototype.mjs)
- [Como executar os testes localmente](docs/como-executar-testes.md)
- [Workflow de qualidade contínua](.github/workflows/prototype-quality.yml)
