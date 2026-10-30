# Registro da auditoria de consistência — rodada 1

**Data:** 30/10/2026  
**Pendência:** AP-IA01 — auditoria de consistência interna do texto-base  
**Versão auditada:** texto-base v1, na estrutura do DOCX oficial (Turma 2027)  
**Arquivos principais:** `rascunhos/anteprojeto-docx-oficial.md`, `formulacao-vigente.md`, `planejamento/cronograma-24-meses.md`, `decisoes-metodologicas.md`, `submissao/carta-exposicao-de-motivos.md`  
**Rodada:** 1 — linha de base. Esta rodada não encerra AP-IA01.

## 1. Síntese da execução

Foram aplicadas as correções textuais que não dependem de decisão humana: harmonização do número de inspetores, qualificação da expressão “sem participantes”, esclarecimento das notas do cronograma, alinhamento do objetivo geral no Resumo/Abstract, inclusão do teste de funcionamento e correção de uma marcação Markdown. A tabela de cronograma foi mantida idêntica nos dois arquivos; o arquivo de planejamento foi identificado como fonte canônica de manutenção.

**Resultado da verificação:** 9 verificações executadas; 9 com resultado OK. Resumo: 494 palavras. Abstract: 421 palavras. Inventário: 26 ocorrências de marcadores pendentes, preservadas.

**Decisões humanas não tomadas:** D3 continua pendente; por isso E5 (demonstração DSR) não foi aplicada. A opção A de E1 foi usada como redação provisória revisável, não como decisão definitiva sobre o número de inspetores. O enquadramento ético da inspeção independente continua pendente de confirmação institucional.

**Correção de contagem de gravidade:** a tabela F01–F12 contém 2 achados de gravidade alta (F01–F02), 3 de gravidade média (F03, F04 e F06) e 7 de gravidade baixa (F05, F07–F12). A soma é 12. A frase-modelo de histórico no relatório de solução indicava 4 médios e 6 baixos; essa distribuição não corresponde à classificação da própria tabela e foi corrigida neste registro e no histórico de pendências.

## 2. Verificações sem ação corretiva (V01–V16)

| ID | Item | Resultado da auditoria |
|---|---|---|
| V01 | Título: capa × formulação vigente | Idêntico |
| V02 | Linha de pesquisa e tipo de projeto | Coerentes com a formulação |
| V03 | Pergunta de pesquisa | Idêntica nas ocorrências do Resumo e da Justificativa |
| V04 | Objetivo geral | Coerente; após E7, redação do Resumo passa a reproduzir a formulação vigente |
| V05 | Objetivos específicos 1–3 | Mesmo sentido e produtos previstos |
| V06 | Resultados esperados × objetivos | Correspondência preservada |
| V07 | Bases da busca | PubMed/MEDLINE, BVS/LILACS e SciELO coerentes entre Resumo e Método |
| V08 | Momentos e situações do simulador | Três situações fictícias e percurso de preparação/encerramento coerentes com o produto |
| V09 | Alegação de ausência de rede/armazenamento/serviços externos | Verificação estática descrita no relatório-base; não equivale a teste de segurança abrangente |
| V10 | Camada 1 condicional | Gatilho orientação + CEP e janela temporal coerentes nos documentos conferidos |
| V11 | Tabela do cronograma | Grade preservada e cópias idênticas |
| V12 | Etapas × cronograma | Etapas 1, 3 e 4 compatíveis; Etapa 2 esclarecida pela nota (e) |
| V13 | Citações × referências | Correspondência integral conforme auditoria-base; normalização permanece na AP-IA03 |
| V14 | Limite de palavras | Resumo 494 e Abstract 421, ambos ≤ 500 pela contagem simples por expressão regular |
| V15 | Decisões D1–D9 | Nove temas preservados; AP-H01 e D1 relacionados por referência cruzada |
| V16 | Definição de baixa familiaridade digital | Sentido funcional preservado; variação de redação não alterada |

## 3. Achados F01–F12 e situação após implementação

| ID | Gravidade | Achado | Situação | Tratamento |
|---|---|---|---|---|
| F01 | Alta | Número de inspetores divergente; kappa de Cohen pressupõe dois avaliadores | **Aplicado, provisório** | Resumo, Abstract, objetivo específico, Método e carta passaram a explicitar pesquisador + ao menos um inspetor independente. Confirmação humana permanece em AP-H04. |
| F02 | Alta | “Sem participantes” podia contradizer a inspeção por pessoa independente | **Aplicado, com ressalva ética** | Texto distingue sujeitos de pesquisa/usuários de inspetores; não declara dispensa de CEP. Enquadramento institucional continua pendente. |
| F03 | Média | Etapa 2 sem correspondência clara no cronograma; registros de busca alocados de modo ambíguo | **Aplicado** | Notas (b) e (e) esclarecem a relação entre busca, extração, inspeção e Etapa 2, sem alterar a grade de X. |
| F04 | Média | Atividade D (demonstração) do DSR sem correspondente | **Condicional não aplicado** | D3 ainda não foi validada com a orientação. Não acrescentar a demonstração nem assumir DSR como decisão definitiva. |
| F05 | Baixa | Objetivo do Resumo/Abstract omitia “em cenários fictícios” | **Aplicado** | Expressão incluída nas versões em português e inglês. |
| F06 | Média | Critério de alcance do objetivo 3 não incluía recomendações | **Aplicado** | Critério agora exige recomendações de adaptação e de futura avaliação com usuários. |
| F07 | Baixa | Resumo/Abstract não mencionavam teste de funcionamento | **Aplicado (opcional)** | Teste de funcionamento incluído em ambos os resumos. |
| F08 | Baixa | Letras 2024a/2024b dependem da ordem final das referências | **Observado sem edição** | Nenhuma reordenação bibliográfica foi feita nesta rodada. A conferência e atualização das letras foi incorporada à AP-IA03. |
| F09 | Baixa | Tabela do cronograma duplicada em dois arquivos | **Aplicado parcialmente** | Grade mantida idêntica; arquivo de planejamento definido como fonte canônica de manutenção e texto-base como cópia sincronizada necessária ao documento acadêmico. |
| F10 | Baixa | “Simulador aberto” × repositório de acesso restrito | **Observado sem edição** | Não alterar sem decisão D6 sobre visibilidade e publicação. |
| F11 | Baixa | Variação de redação da definição de baixa familiaridade digital | **Observado sem edição** | Sentido equivalente; não uniformizar sem decisão autoral. |
| F12 | Baixa | Bloco Markdown isolado no fim de docentes-e-aderencia.md | **Aplicado** | Removido o delimitador isolado que quebrava a renderização. |

## 4. Alterações realizadas

- **E1:** harmonização para pesquisador + ao menos um inspetor independente, mantendo pendente a confirmação de AP-H04.
- **E2–E3:** qualificação de “sem participantes” e inclusão de convenção terminológica em `formulacao-vigente.md`.
- **E4:** notas do cronograma esclarecem a Etapa 2 e o tratamento dos registros de busca; nenhuma marcação X foi alterada.
- **E5:** não aplicada, pois depende de D3.
- **E6:** critério de alcance do objetivo 3 ampliado para incluir as recomendações previstas.
- **E7:** Resumo e Abstract alinhados à expressão “em cenários fictícios”.
- **E8:** teste de funcionamento explicitado nos dois resumos.
- **E9:** correção do Markdown, referências cruzadas em AP-H01/AP-IA02/AP-IA03, nota de manutenção do cronograma e link deste registro no README.

## 5. Inventário regenerado de marcadores no texto-base

O padrão de busca foi o definido no relatório de solução. Foram encontradas 26 ocorrências, todas preservadas:

- 8 `[PREENCHER PELO CANDIDATO]`
- 14 `[CONFIRMAR após a busca formal]`
- 26 `[CONFIRMAR cada descritor no DeCS/MeSH; "Consulta Remota" está confirmado.]`
- 30 `[CONFIRM after the formal search]`
- 42 `[CONFIRM each descriptor in DeCS/MeSH.]`
- 46 `[CONFIRMAR os dois números e a base de cada indicador no relatório original]`
- 50 `[CONFIRMAR números e páginas]`
- 52 `[CONFIRMAR a formulação]`
- 62 `[CONFIRMAR e citar a descrição oficial da linha 2 em telessaude.uerj.br/mestrado/linhas-de-pesquisa.]`
- 66 `[CONFIRMAR]`; `[CONFIRMAR as duas informações e a base do indicador]`; `[CONFIRMAR em todo o relatório]`
- 68 `[CONFIRMAR os incisos e a transcrição no texto da Portaria]`
- 96 `[CONFIRMAR]`
- 108 `[DEFINIR]`
- 124 `[CONFIRMAR o texto oficial de cada meta (ONU/IPEA) antes de citar.]`
- 128 `[CONFIRMAR a redação no Decreto e no ato que a detalha, Portaria SGD/MGI nº 6.618/2024]`
- 132 `[D3: confirmar o arcabouço com a orientação.]`
- 143 `[DEFINIR e citar]`
- 152 `[CONFIRMAR o inciso]`
- 179 `[AJUSTAR ao calendário do Programa e à Deliberação vigente.]`
- 194 `[CONFIRMAR exame de qualificação e demais prazos na Deliberação.]`
- 202 `[CONFIRMAR as atividades presenciais na Deliberação]`
- 210 `[D4: confirmar; indicar o estrato T1 ou T2 conforme o documento norteador da CAPES — NÃO CONFIRMADO]`
- 212 `[DEFINIR]`; `[CONFIRMAR o critério do documento norteador]`

As declarações `[requisito planejado; não implementado hoje]` e `[Não há parceria estabelecida.]` também foram preservadas; elas não são pendências de preenchimento e não devem ser removidas.

## 6. Resultado da verificação após as edições

A verificação foi executada sobre os conteúdos recuperados da branch `main`, com os mesmos critérios do script fornecido e uma correção necessária: depois de E7, o objetivo geral em português aparece duas vezes no texto-base (Resumo e seção Objetivos), portanto o teste correto é contagem igual a 2, e não igual a 1. O script original, sem esse ajuste, acusaria falso negativo.

```text
OK   pergunta idêntica à formulação em Resumo e Justificativa
OK   objetivo geral idêntico à formulação em Resumo e seção Objetivos (contagem esperada: 2 após E7)
OK   tabelas do cronograma idênticas nos dois arquivos
OK   nenhum "inspetores independentes" restante
OK   "não envolve participantes" sempre qualificado
OK   Resumo ≤ 500 palavras (494)
OK   Abstract ≤ 500 palavras (421)
OK   docentes-e-aderencia.md sem bloco de código aberto
OK   declarações condicionais preservadas
```

**Resultado:** 9/9 verificações OK. A contagem de palavras é simples, por expressão regular, e não substitui a conferência final no modelo DOCX.

## 7. Situação da pendência

AP-IA01 permanece **aberta**. Esta é a rodada 1 (linha de base), não uma validação final do anteprojeto.

Reexecutar a auditoria após D2, D3, D5, D6 e D9. Também permanecem necessárias:
- confirmação humana do número de inspetores independentes (AP-H04);
- confirmação institucional do enquadramento ético da inspeção independente;
- decisão sobre D3 antes de aplicar E5;
- decisões sobre F10 e F11, se a orientação/candidato entenderem necessário;
- conferência de referências e letras 2024a/2024b na AP-IA03;
- conferência de fontes primárias e marcadores normativos/estatísticos na AP-IA02.

Não foram alterados `docs/anteprojeto/selecao/fontes-oficiais/text.txt`, dados pessoais, decisões D1–D9, grade de X do cronograma ou afirmações sobre parceria, CEP, amostra e aprovação.
