# Registro de execução das buscas bibliográficas — 20/10/2026

**Projeto:** Treino de Teleconsulta — simulador educativo para adultos com baixa familiaridade digital  
**Branch:** `main`  
**Data do registro:** 20/10/2026  
**Status:** protocolo e strings consolidados; **execução formal nas interfaces oficiais ainda não concluída**. Não existem contagens válidas registradas neste documento.

## 1. Resultado desta rodada

Nesta rodada, revisei as estratégias já documentadas e organizei um plano de execução reproduzível para PubMed/MEDLINE, BVS/LILACS e SciELO. Tentei abrir as três interfaces de pesquisa diretamente pelo ambiente de navegação disponível, usando URLs com consultas pré-preenchidas; as páginas de resultados não foram recuperadas. Isso é uma limitação do ambiente de pesquisa utilizado, **não evidência de indisponibilidade das bases**.

Assim, não foram observados nem registrados totais de resultados nas interfaces oficiais, arquivos exportados, duplicatas ou exclusões. Os resultados de buscas web exploratórias e artigos localizados individualmente não devem ser contabilizados como se fossem resultados dessas strings. A revisão continua em fase de busca estruturada preliminar.

## 2. Pergunta de busca

Quais evidências e boas práticas orientam o desenho, a acessibilidade e a avaliação de recursos educativos que permitem a adultos com baixa familiaridade digital praticar tarefas de acesso e participação em teleconsultas?

A pesquisa prioriza treinamento/preparação de usuários finais. Estudos sobre educação de profissionais, acessibilidade geral e letramento em saúde digital podem ser mantidos como evidência adjacente, com essa classificação explícita.

## 3. Estratégias a executar nas bases

Executar cada busca separadamente. Não aplicar filtros de idioma ou data na primeira rodada se isso puder ocultar resultados; registrar filtros apenas se forem de fato aplicados. O período de interesse é 2016–2026, com possibilidade de incluir trabalhos seminais anteriores na seleção. Idiomas prioritários: português, inglês e espanhol.

### 3.1 PubMed/MEDLINE

**PM-1 — treinamento/preparação de usuários finais**

```text
(telehealth[tiab] OR telemedicine[tiab] OR "Telemedicine"[Mesh] OR teleconsult*[tiab] OR "video visit*"[tiab] OR "video consultation*"[tiab] OR "remote consultation*"[tiab] OR "Remote Consultation"[Mesh])
AND (train*[tiab] OR "patient education"[tiab] OR "Patient Education as Topic"[Mesh] OR coaching[tiab] OR tutorial*[tiab] OR "digital navigator*"[tiab] OR preparation[tiab] OR readiness[tiab])
AND (patient*[tiab] OR "service user*"[tiab] OR consumer*[tiab] OR "older adult*"[tiab] OR "Aged"[Mesh])
```

**PM-2 — simulação/prática interativa**

```text
(telehealth[tiab] OR telemedicine[tiab] OR teleconsult*[tiab] OR "video visit*"[tiab])
AND (simulat*[tiab] OR "serious game*"[tiab] OR gamif*[tiab] OR "virtual patient*"[tiab] OR "role play*"[tiab] OR "Simulation Training"[Mesh] OR interactive[tiab])
AND (patient*[tiab] OR "older adult*"[tiab] OR "digital literacy"[tiab] OR "digital skills"[tiab])
```

**PM-3 — usabilidade/acessibilidade**

```text
(("Telemedicine"[Mesh] OR telehealth[tiab] OR telemedicine[tiab] OR teleconsult*[tiab])
AND ("User-Computer Interface"[Mesh] OR usability[tiab] OR "user experience"[tiab] OR accessibility[tiab] OR "System Usability Scale"[tiab]))
```

**PM-4 — letramento e compreensão em saúde digital**

```text
(("Telemedicine"[Mesh] OR telehealth[tiab] OR telemedicine[tiab] OR teleconsult*[tiab] OR "Digital Health"[Mesh])
AND ("Health Literacy"[Mesh] OR "health literacy"[tiab] OR "eHealth literacy"[tiab] OR readability[tiab] OR understandab*[tiab] OR "patient education"[tiab] OR "plain language"[tiab]))
```

Portal oficial: https://pubmed.ncbi.nlm.nih.gov/advanced/  
Ajuda sobre campos, histórico e exportação: https://pubmed.ncbi.nlm.nih.gov/help/

### 3.2 BVS, incluindo LILACS

**BVS-1 — preparação, treinamento e habilidade digital**

```text
(tw:(teleconsulta OR telessaúde OR telemedicina OR "consulta por vídeo" OR "consulta remota" OR telehealth OR telemedicine OR "remote consultation"))
AND
(tw:(treinamento OR capacitação OR "educação do paciente" OR tutorial OR simulação OR "letramento digital" OR "alfabetização digital" OR "competência digital" OR "habilidades digitais" OR "inclusão digital" OR training OR simulation OR "digital literacy" OR "digital skills"))
```

**BVS-2 — usabilidade, acessibilidade e compreensão**

```text
(tw:(telessaúde OR teleconsulta OR telemedicina OR telehealth OR telemedicine))
AND
(tw:(usabilidade OR acessibilidade OR "letramento em saúde" OR "alfabetização em saúde" OR "literacia em saúde digital" OR compreensão OR legibilidade OR usability OR "health literacy" OR readability))
```

**BVS-3 — comunicação e educação do paciente**

```text
(tw:(teleconsulta OR telessaúde OR "atenção primária" OR "primary health care"))
AND
(tw:("linguagem simples" OR "orientação ao paciente" OR "educação do paciente" OR "patient education" OR "plain language" OR "patient understanding"))
```

Portal oficial: https://pesquisa.bvsalud.org/portal/  
Na execução, registrar se a busca foi em toda a BVS ou filtrada para LILACS, além de outras coleções selecionadas. Não atribuir à LILACS um total obtido da BVS inteira.

### 3.3 SciELO

**SC-1 — português/espanhol**

```text
(telessaúde OR teleconsulta OR telemedicina OR "consulta por vídeo" OR saúde digital)
AND
(usabilidade OR acessibilidade OR "letramento em saúde" OR compreensão OR legibilidade OR "linguagem simples" OR "experiência do usuário" OR treinamento OR capacitação OR simulação OR "educação do paciente")
```

**SC-2 — inglês**

```text
(telehealth OR telemedicine OR "digital health")
AND
(usability OR accessibility OR "health literacy" OR readability OR "patient understanding" OR training OR simulation OR "patient education")
```

Portal oficial: https://search.scielo.org/  
Registrar coleções, idiomas, índices pesquisados e filtros aplicados.

## 4. Busca complementar de literatura cinzenta e recursos

Executar em buscador web, guardando a consulta, data, páginas examinadas e URLs relevantes:

- `"como participar de uma teleconsulta passo a passo"`
- `"treino teleconsulta"`
- `"simulador de teleconsulta"`
- `"teleconsulta SUS orientações ao paciente"`
- `"telehealth patient training"`
- `"video visit practice"`
- `"digital navigator telehealth"`

Adicionar `site:gov.br` como variação, sem limitar toda a busca a um único domínio. Separar estudos acadêmicos, diretrizes oficiais, tutoriais, cursos e produtos comerciais.

## 5. Elegibilidade e triagem

**Incluir:** estudos empíricos, qualitativos/mistos, estudos de usabilidade/implementação, revisões pertinentes e normas oficiais; intervenções e recursos sobre preparação para telessaúde, compreensão de informação, acessibilidade, letramento digital em saúde e usabilidade. Priorizar adultos/usuários finais; marcar estudos com profissionais como evidência adjacente.

**Excluir:** registros sem relação substantiva com o tema, publicidade sem procedência, duplicatas, versões preliminares substituídas por artigo final e resumos sem informação suficiente (mantendo pendências relevantes identificadas).

Para cada registro, anotar: base, consulta, data, identificador, título, ano, idioma, tipo de fonte, população/público, recurso/tarefa, prática interativa, feedback, acessibilidade, instrumentos/desfechos, principais achados, limitações e decisão de triagem com motivo.

## 6. Registro de execução — preencher apenas após executar

| ID | Base/coleção | Data e hora | String final realmente submetida | Filtros reais | Total exibido | Exportação/arquivo | Estado |
|---|---|---|---|---|---:|---|---|
| PM-1 | PubMed/MEDLINE | Pendente | Conforme seção 3.1, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| PM-2 | PubMed/MEDLINE | Pendente | Conforme seção 3.1, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| PM-3 | PubMed/MEDLINE | Pendente | Conforme seção 3.1, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| PM-4 | PubMed/MEDLINE | Pendente | Conforme seção 3.1, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| BVS-1 | BVS; coleção exata a registrar | Pendente | Conforme seção 3.2, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| BVS-2 | BVS; coleção exata a registrar | Pendente | Conforme seção 3.2, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| BVS-3 | BVS; coleção exata a registrar | Pendente | Conforme seção 3.2, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| SC-1 | SciELO | Pendente | Conforme seção 3.3, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| SC-2 | SciELO | Pendente | Conforme seção 3.3, confirmar após executar | Nenhum aplicado até o momento | — | Não exportado | Pendente |
| CG-1 | Busca web/literatura cinzenta | Pendente | Registrar consulta individual | N/A | — | Links a registrar | Pendente |

## 7. Deduplicação e fluxo de seleção

Não há contagens consolidadas nesta rodada. Após exportar os registros, preservar uma cópia original por base, combinar numa planilha e identificar duplicatas por DOI, PMID e título, com conferência manual. Registrar:

- Registros recuperados por base/consulta: **pendente**.
- Duplicatas removidas: **pendente**.
- Registros triados por título/resumo: **pendente**.
- Excluídos na primeira triagem e motivos: **pendente**.
- Textos integrais avaliados: **pendente**.
- Excluídos após leitura integral e motivos: **pendente**.
- Estudos incluídos na síntese: **pendente**.

Não estimar valores nem gerar diagrama de fluxo antes de ter números reais. Não denominar o trabalho revisão sistemática/de escopo concluída até que a orientação defina o desenho e os passos correspondentes sejam executados.

## 8. Referências metodológicas e de contexto já localizadas

- Galvin E et al. Training Service Users in the Use of Telehealth: Scoping Review. *J Med Internet Res*. 2024;26:e57586. https://pubmed.ncbi.nlm.nih.gov/39083789/
- Ajuda oficial do PubMed sobre construção de buscas e exportação: https://pubmed.ncbi.nlm.nih.gov/help/
- Benchmark exploratório do repositório: [benchmark-recursos-existentes.md](benchmark-recursos-existentes.md).
- Síntese estruturada preliminar: [busca-bibliografica-estruturada.md](busca-bibliografica-estruturada.md).

## 9. Próxima ação

Executar manualmente as strings nas três interfaces oficiais, registrar a string efetiva e os totais apresentados, exportar os resultados e guardar os arquivos. Se a interface continuar inacessível no ambiente, usar um navegador normal do pesquisador e registrar a execução local; não substituir contagens ausentes por estimativas de resultados web.


## Tentativa adicional de acesso à interface oficial — 20/10/2026

Foi feita uma tentativa adicional de abrir a API oficial E-utilities do NCBI para consultar a contagem da estratégia PM-1, mantendo a string documentada. A ferramenta de navegação não conseguiu acessar o endpoint (“not accessible via this tool”). Nenhum total foi obtido e nenhuma consulta formal foi considerada executada. Isso registra apenas uma limitação do ambiente de navegação; não indica indisponibilidade do PubMed e não altera o estado pendente das estratégias PM-1 a PM-4, BVS-1 a BVS-3 e SC-1 a SC-2.

A próxima execução deverá ocorrer em um navegador acessível ao pesquisador, com a string realmente submetida, data/hora, filtros, total exibido e exportação anotados. Não preencher contagens por aproximação.


## Ferramenta complementar para PubMed E-utilities — 21/10/2026

Foi adicionada a ferramenta auxiliar scripts/buscar-pubmed.mjs, que extrai as estratégias PM-1 a PM-4 deste registro e pode gravar em JSON a string exata, o total reportado pela API, os PMIDs retornados, a data/hora UTC e os parâmetros da chamada. O uso está descrito no [guia de execução complementar](guia-execucao-pubmed-automatizada.md). Testes com respostas simuladas verificam a extração das estratégias, a validação dos parâmetros e o registro de contagem/paginação.

**Estado atual:** nenhuma execução real da API foi realizada nesta atualização; não há contagens ou exportações novas. O script é complementar e não substitui a busca na interface oficial, o registro de filtros visuais nem a exportação bibliográfica para triagem. Não alterar o estado de PM-1 a PM-4 para concluído antes da execução efetiva e do arquivamento dos artefatos.
