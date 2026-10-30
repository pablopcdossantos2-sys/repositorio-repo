# Tutorial didático: abrir e testar o protótipo Treino de Teleconsulta

**Público deste tutorial:** desenvolvedor do projeto ou pessoa responsável por conferir o protótipo localmente.  
**Status:** instruções de preparação; a execução precisa ser registrada separadamente. Este documento não afirma que os testes foram executados nesta rodada.

## 1. Antes de começar: escolha o que você quer fazer

Há dois caminhos diferentes:

- **Só abrir e percorrer o simulador:** não é necessário instalar a aplicação nem Node.js. Basta ter um navegador moderno.
- **Executar os testes automatizados:** é necessário instalar Node.js/npm e baixar as dependências de teste, incluindo o Chromium usado pelo Playwright.

O protótipo usa HTML, CSS e JavaScript sem framework de aplicação. Não é necessário instalar o simulador como um programa no computador.

## 2. Caminho A — abrir o protótipo sem instalar ferramentas de desenvolvimento

### Opção A1: baixar o repositório como ZIP

1. Abra o repositório: <https://github.com/pablopcdossantos2-sys/repositorio-repo>.
2. Clique em **Code** e escolha **Download ZIP**.
3. Aguarde o download e extraia o arquivo ZIP para uma pasta conhecida.
4. Abra a pasta extraída e entre na subpasta `produto`.
5. Abra o arquivo `index.html` com um navegador atualizado (por exemplo, Firefox, Chrome, Edge ou outro navegador moderno).
6. Confirme que a página apresenta o título **Treino de Teleconsulta** e o aviso de demonstração fictícia.

### Opção A2: se o repositório já estiver clonado

1. Abra a pasta local do repositório.
2. Entre na pasta `produto`.
3. Abra `index.html` no navegador.

### Percurso manual inicial

Sem inserir informações pessoais ou de saúde:

1. Na etapa **Antes**, marque e desmarque os itens do checklist; experimente **Desmarcar tudo**.
2. Selecione **Continuar** e navegue entre os três cenários fictícios.
3. No cenário do link, acione a simulação e teste cada resposta antes de clicar em **Verificar resposta**.
4. No cenário de áudio, teste os dois controles fictícios e as opções de resposta.
5. No cenário de esclarecimento, experimente as respostas e observe o feedback.
6. Vá para **Encerrar**, leia os exemplos e teste a escala local de facilidade de 1 a 5.
7. Clique em **Reiniciar demonstração** e confirme que as seleções e mensagens são limpas.
8. Navegue usando apenas o teclado: `Tab`, `Shift+Tab`, `Enter` e `Espaço`. Observe a visibilidade do foco.

**Limites:** estes passos são uma conferência manual inicial, não substituem a auditoria completa de acessibilidade descrita em [roteiro de auditoria técnica sem participantes](roteiro-auditoria-tecnica-sem-participantes.md). Não são um teste com usuários e não demonstram aprendizagem.

## 3. Caminho B — preparar o ambiente para testes automatizados

### Pré-requisitos

- **Node.js 24.8.0 ou posterior**.
- npm compatível com a versão instalada de Node.js.
- Conexão à internet para instalar as dependências e baixar o navegador de teste na primeira execução.
- Espaço em disco suficiente para as dependências e o Chromium.

A versão mínima é definida em `package.json`. O arquivo `.nvmrc` indica a linha principal de Node.js 24, mas respeite o requisito mínimo `>=24.8.0).

### Passo 1 — instalar Node.js

1. Abra o site oficial: <https://nodejs.org/>.
2. Instale uma versão que satisfaça **Node.js 24.8.0 ou posterior**.
3. Feche e reabra o terminal após a instalação, se necessário.
4. Confira as versões.

No Windows, abra **PowerShell**. No macOS ou Linux, abra **Terminal**:

```sh
node --version
npm --version
```

O comando `node --version` deve indicar pelo menos `v24.8.0). Se o terminal disser que `node` ou `npm` não é reconhecido, a instalação não terminou corretamente ou o terminal precisa ser reaberto.

### Passo 2 — obter os arquivos do projeto

Se ainda não baixou o projeto, você pode usar o ZIP do caminho A. Para trabalhar com Git, instale o Git caso necessário e execute:

```sh
git clone https://github.com/pablopcdossantos2-sys/repositorio-repo.git
cd repositorio-repo
```

Se já tiver uma cópia local, abra o terminal **na raiz do repositório** — a pasta que contém `package.json`, `package-lock.json`, `.nvmrc`, `produto/` e `tests/`.

Para atualizar a cópia local antes de testar:

```sh
git pull
```

Se houver alterações locais não salvas, confira o estado do Git antes de atualizar para não perder trabalho.

### Passo 3 — instalar as dependências do projeto

Na raiz do repositório, execute:

```sh
npm ci
```

Aguarde o comando terminar. Ele instala as versões fixadas no `package-lock.json). Se houver erro, guarde a mensagem completa para diagnóstico.

Use `npm ci) para reproduzir as dependências registradas. Não edite manualmente o `package-lock.json) nem remova-o para contornar erros.

### Passo 4 — instalar o navegador de testes

Execute:

```sh
npx playwright install chromium
```

Isso baixa o Chromium usado pela suíte Playwright. Não é uma instalação do simulador para uso assistencial; é apenas um navegador automatizado para verificação de qualidade.

Em algumas distribuições Linux, podem faltar bibliotecas de sistema. Leia a mensagem de erro do Playwright. Se ela recomendar dependências de sistema, consulte a documentação oficial antes de instalar pacotes: <https://playwright.dev/docs/browsers#install-system-dependencies>. Não execute comandos com privilégios administrativos sem entender o que instalam.

## 4. Executar os testes

Na raiz do repositório, execute a suíte completa:

```sh
npm test
```

O script executa, em sequência:

1. `check:syntax` — valida a sintaxe do JavaScript.
2. `check:static` — executa verificações estáticas do protótipo.
3. `check:html` — valida a estrutura do HTML.
4. `test:e2e` — executa os testes de navegador com Playwright e axe-core.

Se precisar investigar uma falha, execute as partes separadamente:

```sh
npm run check:syntax
npm run check:static
npm run check:html
npm run test:e2e
```

Não declare a suíte aprovada se o comando terminar com erro ou se algum teste tiver sido ignorado sem justificativa. Guarde a saída do terminal.

## 5. Como registrar o resultado

Após executar os testes, anote no [relatório de revisão técnica](relatorio-revisao-tecnica.md):

- data e hora;
- sistema operacional;
- versões de Node.js e npm;
- commit ou versão testada;
- comandos executados;
- resultado de cada comando e falhas encontradas;
- correções feitas e resultado do reteste;
- limites do que não foi verificado.

O resultado local deve ser distinguido do resultado de CI do GitHub Actions. Associe sempre o resultado ao commit exato; um teste histórico não prova que uma versão posterior passou.

## 6. Problemas comuns

### `node` ou `npm` não é reconhecido

Instale ou repare Node.js, feche e reabra o terminal e repita `node --version` e `npm --version).

### A versão de Node.js é antiga

Instale Node.js 24.8.0 ou posterior e confirme que o terminal está usando essa versão. Se houver várias versões instaladas, a versão encontrada no PATH pode não ser a que você acabou de instalar.

### `npm ci` falha

Confirme que o terminal está na raiz do repositório e que `package.json` e `package-lock.json` estão presentes. Confira a conexão e copie a mensagem completa. Não substitua `npm ci` por mudanças aleatórias nos arquivos de dependência.

### O Playwright não encontra o Chromium

Execute novamente `npx playwright install chromium). Se o erro mencionar bibliotecas do sistema, siga as instruções oficiais específicas para seu sistema operacional.

### O HTML abre, mas o estilo parece ausente

Confira se `produto/styles.css` e `produto/app.js` permanecem na mesma pasta de `produto/index.html). Não mova apenas o HTML para outra pasta.

### Um teste falha

Registre o nome do teste, o passo, o resultado esperado e o observado. Não marque a auditoria inteira como reprovada ou aprovada com base em uma suposição; identifique o alcance da falha e abra uma correção rastreável.

## 7. Segurança, privacidade e limites

- Use apenas cenários fictícios.
- Não insira nomes, telefones, senhas, dados de pacientes ou informações clínicas.
- Os controles de áudio e link são simulados; não iniciam chamada nem abrem uma sala real.
- A escala de facilidade de 1 a 5 é uma interação local da demonstração, não uma medida validada de aprendizagem ou instrumento de pesquisa.
- Testes automatizados não substituem avaliação manual de acessibilidade, nem demonstram que o público-alvo consegue usar ou aprender com o protótipo.
- Não recrute nem teste com participantes como atividade de pesquisa sem indicação da orientação e sem verificar e obter as autorizações aplicáveis.

## 8. Referências de apoio

- [Como executar as verificações técnicas](como-executar-testes.md).
- [Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes](roteiro-auditoria-tecnica-sem-participantes.md).
- [Estado atual do projeto e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md).
- [Documentação oficial do Node.js](https://nodejs.org/).
- [Documentação oficial do Playwright](https://playwright.dev/docs/intro).
