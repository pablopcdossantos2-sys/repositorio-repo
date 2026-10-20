# Roadmap de desenvolvimento — Treino de Teleconsulta

> Antes de alterar código, método ou escopo, leia [Estado atual do projeto e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md), que reúne as decisões atuais e os limites das propostas condicionais.

Este roadmap acompanha exclusivamente **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital**. A escolha de tema foi registrada em 20/10/2026; o anteprojeto e o protótipo continuam em refinamento.

## Enquadramento acadêmico

- **Linha:** 2) Tecnologias para Educação em Saúde.
- **Tipo:** Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Objetivo educativo:** prática guiada de tarefas digitais relacionadas a uma teleconsulta em ambiente fictício.
- **Público:** adultos com baixa familiaridade digital; a definição operacional permanece pendente de discussão com a orientação.
- **Limite de inferência:** desempenho em tarefas simuladas não comprova aprendizagem duradoura, melhor acesso a teleconsultas reais ou eficácia clínica.
- **Preferência metodológica inicial:** desenvolver protótipo simples fundamentado em literatura e análise de soluções existentes, com avaliação técnica/pedagógica sem participantes. Interação com pessoas só será incluída se a orientação indicar que é necessária; acesso, campo, aprovação e amostra não confirmados.

## Fase 0 — Decisão e base técnica

- [x] Escolher o Tema 4 como foco exclusivo.
- [x] Manter o enquadramento acadêmico de Tecnologias para Educação em Saúde.
- [x] Criar uma primeira interface web estática, com cenários fictícios e sem dependências externas no tempo de uso.
- [x] Reorientar a interface para três etapas gerais: preparação, situações simuladas durante a consulta e encerramento.
- [x] Implementar três situações selecionáveis com feedback dependente da resposta (link indisponível, áudio e pedido de esclarecimento).
- [x] Criar mapa preliminar de objetivos educativos e tarefas ([mapa](mapa-objetivos-educativos-e-tarefas.md)).
- [ ] Revisar objetivos, tarefas e testes, incluindo a lacuna de prática interativa no encerramento.
- [ ] Definir de modo não estigmatizante o que será considerado “baixa familiaridade digital”.

## Fase 1 — Evidências e diferenciação (P0)

- [x] Consolidar strings e formulário de registro de execução ([registro](registro-busca-estruturada-2026-10-20.md)).
- [ ] Executar buscas reprodutíveis em PubMed/MEDLINE, BVS/LILACS e SciELO; as interfaces oficiais não retornaram páginas de resultados pelo ambiente usado nesta rodada, sem contagens/exportações confirmadas.
- [x] Incluir termos para teleconsulta, simulação educativa, preparação de pacientes, competência digital, acessibilidade e necessidade de apoio digital nas estratégias propostas.
- [ ] Registrar estratégias, data, filtros, resultados, exportações, deduplicação e razões de exclusão.
- [x] Registrar um primeiro benchmark exploratório de recursos públicos e suas limitações ([benchmark](benchmark-recursos-existentes.md)).
- [ ] Aprofundar o benchmarking de guias, vídeos, tutoriais, plataformas e simuladores existentes.
- [ ] Definir a lacuna do projeto com base no que foi encontrado, sem presumir originalidade antes da comparação.
- [x] Fazer rodada exploratória complementar na web em 20/10/2026 e registrar publicações recentes sobre simulação/avaliação e diretriz WHO/ITU.
- [x] Registrar explicitamente que trabalhos de simulação para profissionais são evidência metodológica adjacente, não evidência direta para usuários finais.
- [x] Relacionar recursos de preparação existentes e derivar requisitos provisórios sem alegar originalidade.
- [ ] Atualizar a matriz de evidências e requisitos após conferência integral das referências e leitura crítica.

## Fase 2 — Cenário, público e ética (P0)

- [ ] Confirmar com a orientação se o plano documental/técnico sem participantes atende aos requisitos do curso.
- [ ] Investigar acesso ao público somente se a orientação indicar que alguma atividade com pessoas é necessária.
- [ ] **Condicional:** investigar a Secretaria Municipal de Saúde de Guaraí como possível campo somente se a orientação indicar que uma articulação institucional é necessária; parceria não confirmada.
- [ ] Definir elegibilidade, amostra, recrutamento e proteção de dados apenas se a orientação solicitar participação de pessoas e após confirmar viabilidade.
- [ ] Confirmar autorizações administrativas e apreciação ética aplicáveis antes de qualquer eventual atividade de pesquisa com pessoas; não presumir que essa etapa fará parte do estudo.
- [ ] Não recrutar, entrevistar ou testar com participantes antes da confirmação das aprovações pertinentes.

## Fase 3 — Protótipo e acessibilidade (P1)

- [x] Implementar navegação entre três painéis, checklist local, feedback e reinicialização.
- [ ] Atualizar conteúdo: instruções passo a passo, entrada simulada, controle de áudio/vídeo fictício, pedido de esclarecimento e próximos passos.
- [ ] Garantir que a interface não solicite dados pessoais/clínicos e não transmita ou armazene respostas.
- [x] Executar testes Playwright, axe-core e verificações estáticas após a atualização funcional: 15 checagens estáticas e 22 testes de navegador passaram em 20/10/2026 ([CI #39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486)).
- [x] Criar roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes ([roteiro](roteiro-auditoria-tecnica-sem-participantes.md)).
- [x] Registrar inspeção estática parcial do HTML/JS/CSS, incluindo controles e busca por APIs comuns de rede/persistência ([registro](registro-auditoria-estatica-2026-10-20.md)).
- [ ] Completar testes manuais de teclado, leitor de tela, contraste em componentes reais, zoom, telas pequenas, rede/armazenamento e movimento reduzido; inspeção estática não equivale à auditoria completa.

## Fase 4 — Avaliação e aperfeiçoamento (P1)

- [x] Redigir uma rubrica candidata por tarefa para auditoria sem participantes; critérios e uso ainda exigem revisão da orientação.
- [ ] Priorizar auditoria técnica, pedagógica e de acessibilidade sem participantes; só definir técnica de participação se solicitada pela orientação.
- [ ] Manter tarefas e rubrica de usabilidade com pessoas como material opcional, a revisar somente se a orientação solicitar teste.
- [ ] Escolher instrumento de usabilidade de acordo com o que o simulador realmente testa; não presumir que uma escala de consulta real seja automaticamente adequada.
- [ ] Planejar análise antes da coleta.
- [ ] Concluir a avaliação documental, técnica, pedagógica e de acessibilidade sem participantes; se pessoas forem exigidas, revisar protocolo e autorizações antes de qualquer atividade.
- [ ] Corrigir problemas identificados e manter registro dos testes.

## Fase 5 — Entrega acadêmica (P2)

- [ ] Consolidar produto, requisitos e documentação.
- [ ] Atualizar o anteprojeto conforme o edital e o modelo oficial da UERJ.
- [ ] Documentar resultados, limitações e plano de evolução.
- [ ] Definir publicação/hospedagem sem sugerir implantação oficial sem autorização.

## Regra de escopo

Não acrescentar chatbot, IA, integração com prontuário, consulta real, contas de usuário, transmissão/armazenamento de respostas ou decisões clínicas à primeira versão sem justificativa científica e revisão do protocolo. O tema central permanece o treino educativo de habilidades digitais para teleconsulta.
