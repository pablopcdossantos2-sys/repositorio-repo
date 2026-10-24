# Como executar as verificações técnicas

Este documento descreve as verificações automatizadas do simulador educativo **Treino de Teleconsulta**. Elas são auxiliares de qualidade e não substituem testes manuais de acessibilidade, avaliação metodológica ou pesquisa com participantes.

Para instruções didáticas desde a abertura do protótipo até a instalação do ambiente de testes, consulte o [tutorial de instalação e teste do protótipo](tutorial-instalar-e-testar-prototipo.md).

## Pré-requisitos

- Node.js **24.8.0 ou posterior** (a versão selecionada é declarada em `.nvmrc`; o requisito também está em `package.json`).
- npm compatível com a versão de Node instalada.
- Conexão à internet na primeira instalação para baixar as dependências e o Chromium do Playwright.

## Instalação

Na raiz do repositório, execute:

```sh
npm ci
npx playwright install chromium
```

As dependências diretas estão declaradas com versões exatas em `package.json`, e `package-lock.json` fixa as versões transitivas e suas integridades. Use `npm ci` para instalar exatamente a árvore registrada; ao alterar dependências, gere e revise o lockfile com `npm install` e versione ambos os arquivos na mesma alteração.

## Rodar a suíte completa

```sh
npm test
```

O comando executa, em sequência:

1. `check:syntax` — valida a sintaxe do JavaScript.
2. `test:research-tools` — executa os testes unitários da ferramenta auxiliar de busca no PubMed (`tests/buscar-pubmed.test.js`); isso verifica o código da ferramenta, não equivale a executar uma busca bibliográfica formal nem a registrar resultados de bases.
3. `check:static` — confere estrutura, referências locais, foco, limites de privacidade e coerência do tema Treino de Teleconsulta.
4. `check:html` — valida o HTML.
5. `test:e2e` — percorre o simulador em navegador, testa estados principais, foco, reinicialização, larguras de tela, movimento reduzido e regras de acessibilidade automatizada do axe-core.

## Limites das verificações

- Passar nos testes automatizados não comprova conformidade integral com WCAG.
- Testes locais do protótipo não são avaliação com usuários e não comprovam eficácia educativa.
- Testes com participantes só podem ocorrer depois da definição do protocolo e da confirmação das aprovações aplicáveis.
- O simulador usa cenários fictícios: não abrir links reais, não inserir dados pessoais/de saúde e não apresentar o produto como serviço oficial.

## Registros

Após rodar os testes, documente a data, ambiente, resultado, falhas e correções em [Relatório de revisão técnica](relatorio-revisao-tecnica.md). Não marcar itens manuais como concluídos sem executá-los.
