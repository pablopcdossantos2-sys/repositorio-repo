# Treino de Teleconsulta

**Título de trabalho:** *Treino de Teleconsulta: desenvolvimento e avaliação de um simulador educativo web para adultos com baixa familiaridade digital.*

Projeto de pesquisa tecnológica em desenvolvimento para o Mestrado Profissional em Telessaúde e Saúde Digital da UERJ, na linha **2) Tecnologias para Educação em Saúde**. O tema de trabalho é um simulador educativo de tarefas digitais ligadas à participação em uma teleconsulta fictícia.

## O projeto em poucas palavras

O simulador permite praticar três momentos: preparação do dispositivo e do ambiente; situações fictícias envolvendo acesso, áudio e compreensão de informações; e encerramento com confirmação dos próximos passos. O produto é demonstrativo e educativo, não assistencial.

Não realiza consultas reais, não utiliza áudio/vídeo ao vivo, não se conecta a serviços ou prontuários, não oferece aconselhamento clínico e não solicita nem transmite dados pessoais ou de saúde. Não possui login, IA ou dependências externas em tempo de uso.

## Estado atual

- **Protótipo:** prova de conceito web estática em HTML, CSS e JavaScript, localizada em [produto/](produto/).
- **Fundamentação:** há levantamento e benchmark exploratórios. As buscas formais nas interfaces PubMed/MEDLINE, BVS/LILACS e SciELO ainda precisam ser executadas e documentadas com contagens e exportações.
- **Avaliação:** existem verificações automatizadas e registros de inspeção parcial. A rodada manual AUD-MAN-2026-10-21-01 é inconclusiva e não deve ser descrita como auditoria concluída.
- **Método:** o plano-base é documental e técnico, sem participantes. Qualquer etapa com pessoas depende de decisão da orientação, viabilidade e aprovações aplicáveis.
- **Candidatura:** o repositório contém um texto-base na estrutura do DOCX em `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`, ainda pendente de revisão do candidato e da orientação; não há pacote final comprovado de submissão. O status externo do processo não pode ser inferido pelo conteúdo do GitHub.

## Navegação por fase

- [Índice geral da documentação](docs/README.md)
- [Anteprojeto, edital e submissão](docs/anteprojeto/README.md)
- [Fundamentação e busca bibliográfica](docs/fundamentacao/README.md)
- [Protótipo e requisitos](docs/prototipo/README.md)
- [Avaliação, testes e auditorias](docs/avaliacao/README.md)
- [Defesa e apresentação](docs/defesa/README.md)
- [Gestão, estado atual e roadmap](docs/gestao/README.md)
- [Relatórios de análise](relatorios/README.md)

## Abrir o protótipo

Abra [produto/index.html](produto/index.html) no navegador. Não é necessário instalar Node.js para experimentar a aplicação. Para executar os testes automatizados, siga [produto/README.md](produto/README.md) e o tutorial de testes.

## Verificações automatizadas

O histórico do README anterior citava uma execução de 24/10/2026 com 29 testes Playwright + axe-core. Esse número é histórico, não uma contagem garantida da main atual. Sempre consulte [GitHub Actions](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions) e confirme o SHA da execução antes de informar resultados.

## Contribuição e segurança

Mantenha dados, personagens e serviços fictícios. Não adicione dados pessoais/clínicos, integrações assistenciais, contas, rastreamento ou coleta sem nova decisão explícita e revisão ética/técnica. As conclusões do projeto devem permanecer proporcionais às evidências documentadas.
