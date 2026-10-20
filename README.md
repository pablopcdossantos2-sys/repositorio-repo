# Conversa Clara — tecnologia para educação em saúde

Projeto de pesquisa tecnológica em desenvolvimento para o **Mestrado Profissional em Telessaúde e Saúde Digital da UERJ**. O enquadramento selecionado é a linha **“2) Tecnologias para Educação em Saúde”** e o tipo **“Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde”**. Confirme a nomenclatura e os requisitos específicos no edital da turma à qual será feita a candidatura.

## Objetivo do projeto

Desenvolver e avaliar um protótipo web responsivo de **educação em saúde**, simples e acessível, com recursos demonstrativos para ajudar adultos a se prepararem para atendimentos de telessaúde, compreenderem orientações apresentadas em linguagem clara e identificarem próximos passos. O foco de pesquisa está no desenho e na avaliação de uma solução educativa digital — não na prestação de assistência clínica nem na comprovação de resultados clínicos.

O cenário de Guaraí, Tocantins, era a opção inicial de aplicação, mas não é pré-requisito para todos os temas candidatos. Estamos comparando alternativas que possam ser desenvolvidas e avaliadas sem depender de uma Secretaria ou unidade de saúde específica; a necessidade de parceria será definida somente após a escolha do tema.

O protótipo demonstrativo usa o nome provisório **Conversa Clara**; ele não representa um sistema oficial da Secretaria Municipal de Saúde.

## Enquadramento acadêmico selecionado

- **Linha de pesquisa:** 2) Tecnologias para Educação em Saúde
- **Tipo de projeto:** Pesquisa Tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Título de trabalho atual:** “Conversa Clara: protótipo web de educação em saúde para apoiar a preparação para atendimentos de telessaúde e a compreensão de orientações”.
- **Status do tema:** provisório. O tema final será escolhido após análise dos seis candidatos e dos critérios do edital em [Critérios do edital e seis temas](docs/criterios-edital-e-seis-temas.md).

## Princípios de escopo

- **Simplicidade e viabilidade:** construir somente o necessário para responder à pergunta de pesquisa.
- **Sem integração com prontuários na primeira versão.**
- **Sem inteligência artificial na primeira versão.**
- **Sem diagnóstico, prescrição ou alteração de condutas clínicas.**
- Conteúdo clínico, quando houver, deverá ser definido ou validado por profissional responsável.
- Priorizar acessibilidade, linguagem simples, privacidade e uso em celulares.
- Não iniciar recrutamento ou procedimentos de pesquisa com participantes antes das autorizações e aprovações aplicáveis.

## Componentes previstos para o protótipo

1. **Preparação:** checklist para organizar dúvidas e perguntas antes do atendimento.
2. **Orientações:** apresentação clara de orientações disponibilizadas ou validadas pelo profissional responsável.
3. **Próximos passos:** organização de retornos, exames e encaminhamentos informados pelo serviço.

O escopo final será refinado após revisão da literatura, conversa com a Secretaria Municipal de Saúde e discussão metodológica com a orientação acadêmica.

## Estratégia de pesquisa

1. Revisão de literatura sobre educação em saúde digital, linguagem clara, compreensão de informação, acessibilidade e tecnologias educativas.
2. Diagnóstico de necessidades e requisitos educativos, conforme viabilidade e autorizações.
3. Desenvolvimento iterativo do protótipo e do conteúdo demonstrativo.
4. Avaliação de usabilidade, compreensão das mensagens educativas e utilidade percebida, em tarefas definidas no protocolo.
5. Aperfeiçoamento e documentação do produto.

A aderência principal é com **educação em saúde**. O contexto de telessaúde é o cenário de aplicação dos recursos educativos, não uma proposta de desenvolver ferramenta de teleconsulta.

**Plano preferencial:** tentar formalizar parceria com a Secretaria Municipal de Saúde de Guaraí e buscar acesso ao fluxo real de telessaúde.

**Alternativa:** se o acesso ao serviço real não for possível dentro do prazo, avaliar o protótipo em tarefas simuladas com cenários fictícios, deixando explícito que isso não comprova melhoria da continuidade real do cuidado.

## Estrutura do repositório

- [ROADMAP — prioridades, critérios de conclusão e pendências](ROADMAP.md)
- [Guia operacional das tarefas que dependem do responsável pelo projeto](docs/tarefas-pessoais-e-proximos-passos.md)
- [Critérios do edital e seis temas candidatos para o anteprojeto](docs/criterios-edital-e-seis-temas.md)
- [Anteprojeto — base de trabalho](docs/anteprojeto-base.md)
- [Carta de exposição de motivos — minuta editável](docs/carta-exposicao-de-motivos.md)
- [Declaração de conhecimento da Deliberação nº 13/2023 — minuta editável](docs/declaracao-conhecimento-deliberacao-13-2023.md)
- [Anteprojeto organizado conforme o modelo da UERJ](docs/anteprojeto-modelo-uerj.md)
- [Referências iniciais e plano de busca bibliográfica](docs/referencias-e-busca-bibliografica.md)
- [Busca bibliográfica estruturada — protocolo e síntese crítica](docs/busca-bibliografica-estruturada.md)
- [Revisão rápida de evidências e recomendações para o produto (19/10/2026)](docs/revisao-rapida-evidencias-e-recomendacoes.md)
- [Registro da busca exploratória complementar (19/10/2026)](docs/registro-busca-exploratoria-2026-10-19.md)
- [Verificações estáticas do protótipo](scripts/check-prototype.mjs)
- [Testes de navegador e acessibilidade automatizada](tests/prototype.spec.js)
- [Como executar os testes localmente](docs/como-executar-testes.md)
- [Dependências e comandos npm](package.json)
- [Lockfile das dependências](package-lock.json)
- [Workflow de qualidade contínua](.github/workflows/prototype-quality.yml)
- [Plano de desenvolvimento e roadmap](docs/roadmap.md)
- [Especificação do produto mínimo](docs/produto-minimo.md)
- [Estratégia de parceria e ética](docs/parceria-e-etica.md)
- [Protocolo preliminar de avaliação](docs/protocolo-preliminar-avaliacao.md)
- [Matriz de evidências e requisitos](docs/matriz-evidencias-requisitos.md)
- [Relatório de revisão técnica do protótipo](docs/relatorio-revisao-tecnica.md)
- [Roteiro de reunião com a Secretaria Municipal de Saúde](docs/roteiro-reuniao-secretaria.md)
- [Protótipo — página inicial](produto/index.html)
- [Estilos do protótipo](produto/styles.css)
- [Interações do protótipo](produto/app.js)

## Situação atual

- [x] Definido o escopo inicial de baixa complexidade.
- [x] Definido o cenário preferencial em Guaraí-TO e o plano alternativo simulado.
- [ ] Conversar com a Secretaria Municipal de Saúde.
- [ ] Confirmar fluxo, unidade potencial e autorizações necessárias.
- [x] Criar uma versão de trabalho organizada conforme o modelo oficial da UERJ (ainda precisa de revisão e adequação final).
- [ ] Refinar método, instrumentos e plano de análise com a orientação.
- [ ] Submeter o protocolo à apreciação ética aplicável antes da pesquisa com participantes.

## Observação

Este repositório documenta o desenvolvimento do projeto e não constitui ferramenta clínica pronta para uso assistencial. Não publicar aqui dados pessoais, prontuários, consentimentos preenchidos ou qualquer informação identificável de participantes.
