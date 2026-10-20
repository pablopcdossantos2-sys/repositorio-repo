# Roadmap de desenvolvimento — Treino de Teleconsulta

Este roadmap acompanha exclusivamente **Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital**. A escolha de tema foi registrada em 20/10/2026; o anteprojeto e o protótipo continuam em refinamento.

## Enquadramento acadêmico

- **Linha:** 2) Tecnologias para Educação em Saúde.
- **Tipo:** Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Objetivo educativo:** prática guiada de tarefas digitais relacionadas a uma teleconsulta em ambiente fictício.
- **Público:** adultos com baixa familiaridade digital; a definição operacional permanece pendente de discussão com a orientação.
- **Limite de inferência:** desempenho em tarefas simuladas não comprova aprendizagem duradoura, melhor acesso a teleconsultas reais ou eficácia clínica.

## Fase 0 — Decisão e base técnica

- [x] Escolher o Tema 4 como foco exclusivo.
- [x] Manter o enquadramento acadêmico de Tecnologias para Educação em Saúde.
- [x] Criar uma primeira interface web estática, com cenários fictícios e sem dependências externas no tempo de uso.
- [x] Reorientar a interface para três etapas gerais: preparação, situações simuladas durante a consulta e encerramento.
- [x] Implementar três situações selecionáveis com feedback dependente da resposta (link indisponível, áudio e pedido de esclarecimento).
- [ ] Mapear objetivos de aprendizagem e vincular cada um a uma tarefa observável e a um teste.
- [ ] Definir de modo não estigmatizante o que será considerado “baixa familiaridade digital”.

## Fase 1 — Evidências e diferenciação (P0)

- [ ] Executar buscas reprodutíveis em PubMed/MEDLINE, BVS/LILACS e SciELO.
- [ ] Incluir termos para teleconsulta, simulação educativa, preparação de pacientes, competência digital, acessibilidade e necessidade de apoio digital.
- [ ] Registrar estratégias, data, filtros, resultados, exportações, deduplicação e razões de exclusão.
- [ ] Fazer benchmarking de guias, vídeos, tutoriais, plataformas e simuladores existentes.
- [ ] Definir a lacuna do projeto com base no que foi encontrado, sem presumir originalidade antes da comparação.
- [ ] Atualizar a matriz de evidências e requisitos com referências conferidas.

## Fase 2 — Cenário, público e ética (P0)

- [ ] Discutir a pergunta, público, tarefas e desenho com a orientação.
- [ ] Avaliar se a Secretaria Municipal de Saúde de Guaraí é um campo viável; a parceria é apenas potencial, não confirmada.
- [ ] Definir elegibilidade, amostra, recrutamento e proteção de dados se houver participantes.
- [ ] Confirmar autorizações administrativas e apreciação ética aplicáveis.
- [ ] Não recrutar, entrevistar ou testar com participantes antes da confirmação das aprovações pertinentes.

## Fase 3 — Protótipo e acessibilidade (P1)

- [x] Implementar navegação entre três painéis, checklist local, feedback e reinicialização.
- [ ] Atualizar conteúdo: instruções passo a passo, entrada simulada, controle de áudio/vídeo fictício, pedido de esclarecimento e próximos passos.
- [ ] Garantir que a interface não solicite dados pessoais/clínicos e não transmita ou armazene respostas.
- [x] Executar testes Playwright, axe-core e verificações estáticas após a atualização funcional: 15 checagens estáticas e 22 testes de navegador passaram em 20/10/2026 ([CI #39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486)).
- [ ] Completar testes manuais de teclado, leitor de tela, contraste em componentes reais, zoom, telas pequenas e movimento reduzido.

## Fase 4 — Avaliação e aperfeiçoamento (P1)

- [ ] Definir tarefas padronizadas, critérios de conclusão, erros, necessidade de ajuda e rubrica de compreensão.
- [ ] Escolher instrumento de usabilidade de acordo com o que o simulador realmente testa; não presumir que uma escala de consulta real seja automaticamente adequada.
- [ ] Planejar análise antes da coleta.
- [ ] Caso haja aprovação e viabilidade, conduzir a avaliação prevista no protocolo; caso contrário, limitar a avaliação a evidências documentais, técnicas e pedagógicas.
- [ ] Corrigir problemas identificados e manter registro dos testes.

## Fase 5 — Entrega acadêmica (P2)

- [ ] Consolidar produto, requisitos e documentação.
- [ ] Atualizar o anteprojeto conforme o edital e o modelo oficial da UERJ.
- [ ] Documentar resultados, limitações e plano de evolução.
- [ ] Definir publicação/hospedagem sem sugerir implantação oficial sem autorização.

## Regra de escopo

Não acrescentar chatbot, IA, integração com prontuário, consulta real, contas de usuário, transmissão/armazenamento de respostas ou decisões clínicas à primeira versão sem justificativa científica e revisão do protocolo. O tema central permanece o treino educativo de habilidades digitais para teleconsulta.
