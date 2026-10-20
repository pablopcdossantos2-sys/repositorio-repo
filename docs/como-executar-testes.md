# Como executar as verificações técnicas

Este documento descreve as verificações automatizadas do protótipo Conversa Clara. Elas são auxiliares de qualidade e não substituem testes manuais de acessibilidade, avaliação metodológica ou pesquisa com participantes.

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

As dependências diretas estão declaradas com versões exatas em `package.json`, e `package-lock.json` fixa as versões transitivas e suas integridades. Use `npm ci` para instalar exatamente a árvore registrada; ao alterar dependências, gere e revise o lockfile com `npm install` e versione ambos os arquivos na mesma alteração. A primeira instalação precisa de conexão à internet para baixar os pacotes e o Chromium do Playwright.

## Rodar a suíte completa

```sh
npm test
```

O comando executa, em sequência:

1. `check:syntax` — verifica a sintaxe do JavaScript.
2. `check:static` — checa estrutura HTML, IDs, referências locais, alvos ARIA, regras de movimento reduzido, contraste do foco, estado de reinicialização e indicadores estáticos de privacidade.
3. `check:html` — executa o validador HTML5 com as regras `html-validate:recommended`.
4. `test:e2e` — executa os testes de navegador com Playwright e varreduras automatizadas axe-core.

Para executar apenas uma parte:

```sh
npm run check:syntax
npm run check:static
npm run check:html
npm run test:e2e
```

## Integração contínua

O workflow [Prototype quality checks](../.github/workflows/prototype-quality.yml) executa as verificações no `push` e em pull requests que alterem o protótipo, testes, configuração do validador ou dependências de desenvolvimento. A execução do workflow pode ser consultada na aba Actions do GitHub.

## Limites das verificações

- Uma varredura axe-core sem violações detectadas não certifica conformidade integral com WCAG.
- Os testes de viewports verificam a ausência de rolagem horizontal nas três etapas nos cinco tamanhos codificados; não cobrem todas as combinações de conteúdo/dispositivo nem substituem o teste de zoom real a 200%.
- O teste automatizado não substitui o uso manual de teclado, leitor de tela, zoom real e aparelhos físicos.
- Nenhum teste automatizado desta suíte envolve participantes ou avalia eficácia clínica.
- A inspeção estática de ausência de chamadas de rede/armazenamento deve ser complementada por uma verificação manual nas ferramentas de desenvolvedor do navegador.
