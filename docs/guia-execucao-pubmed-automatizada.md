# Guia de execução complementar de buscas no PubMed

**Projeto:** Treino de Teleconsulta  
**Status:** ferramenta complementar; sua existência ou execução não significa que a busca formal foi concluída.

## Finalidade e limites

O script **scripts/buscar-pubmed.mjs** executa PM-1 a PM-4, documentadas no [registro de execução das buscas](registro-busca-estruturada-2026-10-20.md), pela API NCBI E-utilities. Ele registra a string exata, data/hora UTC, endpoint, parâmetros, total reportado e os IDs PubMed devolvidos.

**Ele não substitui a execução da consulta na interface oficial do PubMed**, não documenta filtros visuais, não baixa títulos/resumos e não substitui a exportação bibliográfica para triagem. Nenhuma contagem foi gerada nesta atualização: o script foi criado e testado com respostas simuladas, mas não foi usado para realizar buscas reais.

## Requisitos

- Node.js 24.8.0 ou posterior.
- Conexão à internet com acesso ao endpoint eutils.ncbi.nlm.nih.gov.
- Nenhuma dependência npm adicional.

## Exemplo no Windows PowerShell

Salve os resultados fora da pasta/repositório Git para não publicá-los por engano. Na raiz do repositório, execute:

    $resultados = Join-Path $HOME "treino-teleconsulta-buscas"
    New-Item -ItemType Directory -Force $resultados | Out-Null

    node scripts/buscar-pubmed.mjs --strategy PM-1 --retmax 10000 --out (Join-Path $resultados "pubmed_PM-1_2026-10-21.json")
    node scripts/buscar-pubmed.mjs --strategy PM-2 --retmax 10000 --out (Join-Path $resultados "pubmed_PM-2_2026-10-21.json")
    node scripts/buscar-pubmed.mjs --strategy PM-3 --retmax 10000 --out (Join-Path $resultados "pubmed_PM-3_2026-10-21.json")
    node scripts/buscar-pubmed.mjs --strategy PM-4 --retmax 10000 --out (Join-Path $resultados "pubmed_PM-4_2026-10-21.json")

Execute uma estratégia por vez. O script não sobrescreve arquivos existentes; em uma nova rodada, use nomes novos com data/hora. Se surgir aviso de paginação, repita a consulta com o valor de retstart indicado e outro nome de arquivo, conservando todas as páginas relacionadas.

Para uma consulta personalizada, use --query "sua consulta" e informe --label. Para ver opções: node scripts/buscar-pubmed.mjs --help.

## Como registrar resultados

1. Execute a estratégia na interface oficial [PubMed Advanced Search](https://pubmed.ncbi.nlm.nih.gov/advanced/), confirme a string realmente submetida, registre data/hora/filtros/total visível e exporte os registros em formato bibliográfico.
2. Execute separadamente a consulta de API, se desejar o registro complementar, e guarde seu JSON bruto local.
3. Se a interface e a API apresentarem totais diferentes, registre ambos e investigue; não escolha um total silenciosamente.
4. Preserve exportações originais e faça deduplicação por DOI/PMID com conferência manual. Uma lista de IDs não equivale à triagem de títulos/resumos.
5. Este script não consulta BVS/LILACS nem SciELO.

## Testes da ferramenta

Os testes usam respostas simuladas para conferir extração das estratégias, validação de parâmetros, registro de contagem e paginação. Não executam consultas reais e não verificam a disponibilidade da internet do pesquisador.
