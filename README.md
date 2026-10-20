# Telessaúde Guaraí — apoio à preparação e continuidade do cuidado

Projeto de pesquisa aplicada em desenvolvimento para o **Mestrado Profissional em Telessaúde e Saúde Digital da UERJ (Turma 2027)**.

## Objetivo do projeto

Desenvolver e avaliar um protótipo web responsivo, simples e acessível, que ajude adultos a se prepararem para atendimentos de telessaúde, compreenderem as orientações recebidas e organizarem os próximos passos do cuidado.

O cenário preferencial de pesquisa é a rede pública de saúde de Guaraí, Tocantins, condicionado à viabilidade e às autorizações institucionais e éticas aplicáveis.

O protótipo demonstrativo usa o nome provisório **Conversa Clara**; ele não representa um sistema oficial da Secretaria Municipal de Saúde.

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

1. Revisão da literatura e diagnóstico de necessidades.
2. Desenvolvimento iterativo do protótipo.
3. Avaliação de usabilidade, compreensão de orientações e percepção de utilidade com adultos e profissionais de saúde.
4. Aperfeiçoamento e documentação do produto.

**Plano preferencial:** tentar formalizar parceria com a Secretaria Municipal de Saúde de Guaraí e buscar acesso ao fluxo real de telessaúde.

**Alternativa:** se o acesso ao serviço real não for possível dentro do prazo, avaliar o protótipo em tarefas simuladas com cenários fictícios, deixando explícito que isso não comprova melhoria da continuidade real do cuidado.

## Estrutura do repositório

- [ROADMAP — prioridades, critérios de conclusão e pendências](ROADMAP.md)
- [Guia operacional das tarefas que dependem do responsável pelo projeto](docs/tarefas-pessoais-e-proximos-passos.md)
- [Anteprojeto — base de trabalho](docs/anteprojeto-base.md)
- [Anteprojeto organizado conforme o modelo da UERJ](docs/anteprojeto-modelo-uerj.md)
- [Referências iniciais e plano de busca bibliográfica](docs/referencias-e-busca-bibliografica.md)
- [Busca bibliográfica estruturada — protocolo e síntese crítica](docs/busca-bibliografica-estruturada.md)
- [Revisão rápida de evidências e recomendações para o produto (19/10/2026)](docs/revisao-rapida-evidencias-e-recomendacoes.md)
- [Registro da busca exploratória complementar (19/10/2026)](docs/registro-busca-exploratoria-2026-10-19.md)
- [Verificações estáticas do protótipo](scripts/check-prototype.mjs)
- [Testes de navegador e acessibilidade automatizada](tests/prototype.spec.js)
- [Como executar os testes localmente](docs/como-executar-testes.md)
- [Dependências e comandos npm](package.json)
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
