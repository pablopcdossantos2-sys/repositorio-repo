# Matriz de tradução do benchmark em requisitos verificáveis

**Projeto:** Treino de Teleconsulta  
**Data:** 24/10/2026  
**Status:** síntese documental derivada do benchmark exploratório já registrado. Não é revisão sistemática, avaliação formal dos recursos citados, teste com público-alvo nem prova de eficácia.

## 1. Objetivo e regra de uso

Esta matriz transforma observações do [benchmark exploratório de recursos existentes](../fundamentacao/benchmark-recursos-existentes.md) em decisões de design e verificações proporcionais ao protótipo atual. O propósito é tornar explícito por que cada requisito existe, onde aparece no produto e que evidência seria suficiente para inspecioná-lo sem participantes.

A comparação é descritiva. Os recursos têm públicos, países, formatos e finalidades diferentes; não se conclui que um recurso é melhor, que a solução proposta é original ou que os requisitos abaixo foram validados com usuários.

## 2. Matriz de rastreabilidade

| Evidência documental / fonte | Implicação de design para o protótipo | Requisito verificável | Evidência de inspeção sem participantes | Estado atual / lacuna |
|---|---|---|---|---|
| Digital House Calls (BridgingApps): preparação autoguiada organizada antes/durante/depois | O fluxo sequencial não deve ser apresentado como inovação isolada; a contribuição precisa ser delimitada pela prática de decisões, feedback contextual, português brasileiro e simplicidade | RQ-01: manter etapas previsíveis, permitir voltar e reiniciar, e fornecer prática interativa em situações fictícias | Percorrer todas as etapas, testar voltar/reiniciar e conferir cada feedback contra o objetivo educativo | Fluxo e cenários implementados; automação aprovada na CI #40095534286; inspeção manual ainda pendente |
| Tutorial do paciente do TelessaúdeBA: passos concretos para acessar uma plataforma específica | Usar apenas tarefas comuns como referência; não copiar exigências de identificação, consentimento ou passos próprios de uma plataforma real | RQ-02: nenhum cenário deve pedir CPF, documento, senha, código, dados clínicos ou acesso a um serviço real | Inspecionar textos, campos, links, botões e chamadas de rede; confirmar que as ações são locais | O protótipo é fictício e não contém fluxo de identificação; repetir inspeção no navegador faz parte da auditoria manual |
| Guias do HHS: preparação de dispositivo, conexão, ambiente e privacidade | A preparação deve abranger fatores práticos além de clicar em botões, sem sugerir que o simulador resolve barreiras estruturais | RQ-03: checklist cobre aparelho/bateria, conexão, privacidade e dúvidas; texto reconhece que falta de conexão ou suporte pode persistir | Conferir os quatro itens e testar marcar/desmarcar; verificar que a interface não afirma testar a conexão do usuário | Checklist implementado; não comprova prontidão real nem disponibilidade de recursos |
| Ferramenta de prontidão do NCFH: acesso a dispositivo, conectividade, privacidade e necessidade de apoio | Reconhecer que barreiras são multidimensionais, sem importar questionário de triagem nem recolher dados de prontidão | RQ-04: não incluir escala de prontidão ou perfil pessoal no produto mínimo sem justificativa explícita | Busca de campos, formulários, armazenamento e transmissão de respostas; revisão do escopo | Sem questionário de prontidão previsto; manter o limite explícito |
| Toolkit WHO/ITU: acessibilidade deve ser considerada desde o desenho | Testes automatizados são apenas uma camada; avaliar semântica, teclado, foco, ampliação, contraste, conteúdo e tecnologia assistiva aplicáveis ao produto real | RQ-05: controles e estados devem ser acessíveis; documentar o que é aplicável e o que está fora do escopo audiovisual de um simulador sem chamada | Executar roteiro manual com ambiente identificado, evidência por caso e resultado C/PC/NC/NT/BL/NA | CI com axe-core aprovada; auditoria manual e leitor de tela ainda pendentes; não declarar conformidade/certificação |
| Galvin et al. (2024): revisão de escopo relata literatura limitada e evidência mista sobre treinamento de usuários finais | Formular o produto como proposta a ser inspecionada, sem prometer eficácia, melhoria de competência ou aprendizagem duradoura | RQ-06: toda descrição pública/acadêmica distingue implementação, teste automatizado, avaliação sem participantes e eficácia não demonstrada | Revisar README, anteprojeto, relatórios, feedbacks e conclusões à procura de afirmações causais ou exageradas | Limites já aparecem na documentação; devem continuar presentes em qualquer relatório e apresentação |

## 3. Critérios de aceitação consolidados

Uma rodada documental/técnica pode ser considerada concluída apenas quando houver evidência registrada para cada item aplicável:

1. **Rastreabilidade:** cada objetivo educativo tem tarefa, feedback e critério de verificação explícitos.
2. **Ficcionalidade e privacidade:** não há fluxo que abra atendimento real, solicite credenciais/dados pessoais ou transmita respostas.
3. **Ações concretas:** os feedbacks orientam um próximo passo compreensível, sem culpar a pessoa e sem oferecer aconselhamento clínico individual.
4. **Acessibilidade:** resultados automatizados e manuais são separados; toda falha ou limitação tem evidência e status, e NT não é tratado como aprovado.
5. **Inferência proporcional:** o relatório descreve somente o que foi efetivamente inspecionado; não infere compreensão, aprendizagem ou eficácia a partir de testes de código.
6. **Reprodutibilidade documental:** fontes, data da consulta, escopo e limitações são identificados. As buscas formais nas bases bibliográficas permanecem pendentes até haver strings executadas, contagens e exportações verificáveis.

## 4. Decisões que esta matriz não toma

- Não confirma que a avaliação sem participantes atende aos requisitos do mestrado; isso depende da orientação e das regras do curso.
- Não adiciona participantes, recrutamento, questionários ou coleta de dados.
- Não estabelece uma lacuna científica definitiva nem comprova originalidade.
- Não declara o protótipo acessível a todas as pessoas ou conforme integralmente ao toolkit WHO/ITU.
- Não substitui a execução reproduzível de buscas em PubMed/MEDLINE, BVS/LILACS e SciELO.

## 5. Fontes documentais

- [Benchmark exploratório de recursos existentes](../fundamentacao/benchmark-recursos-existentes.md)
- [Mapa de objetivos educativos, tarefas e critérios](mapa-objetivos-educativos-e-tarefas.md)
- [Especificação do produto mínimo](produto-minimo.md)
- [Matriz de aplicabilidade WHO/ITU ao protótipo](matriz-aplicabilidade-who-itu-prototipo.md)
- [Estado atual e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md)
- [Galvin et al. (2024), revisão de escopo no JMIR](https://www.jmir.org/2024/1/e57586/)
