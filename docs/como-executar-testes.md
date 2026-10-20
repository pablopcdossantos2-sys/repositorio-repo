# Como executar as verificações técnicas

Este documento descreve as verificações automatizadas do protótipo Conversa Clara. Elas são auxiliares de qualidade e não substituem testes manuais de acessibilidade, avaliação metodológica ou pesquisa com participantes.

## Pré-requisitos

- Node.js **24.x** (o projeto declara Node.js >=22.16.0 para compatibilidade com as ferramentas de desenvolvimento).
- npm compatível com a versão de Node instalada.
- Conexão à internet na primeira instalação para baixar as dependências e o Chromium do Playwright.

## Instalação

Na raiz do repositório, execute:

```sh
npm install
npx playwright install chromium
```

As dependências diretas de desenvolvimento estão declaradas com versões exatas em `package.json`. Como ainda não há `package-lock.json` versionado, as dependências transitivas não estão completamente fixadas; para reproduções de longa duração, a próxima melhoria de engenharia é gerar e versionar o lockfile após validar o ambiente de desenvolvimento.

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
