# Como abrir o protótipo

## Opção 1 — abrir no computador sem instalar nada

1. Abra a pasta `produto` no repositório.
2. Abra o arquivo `index.html`.
3. Se baixar o repositório como ZIP, extraia a pasta e dê dois cliques em `produto/index.html`.

O protótipo usa HTML, CSS e JavaScript puros; não precisa de Node.js, npm, Git ou instalação de dependências.

## Para executar os testes automatizados

O simulador **não precisa ser instalado**. Para executar a suíte automatizada, porém, é necessário instalar Node.js 24.8.0 ou posterior, npm, as dependências do projeto e o Chromium do Playwright. Siga o [tutorial didático para abrir e testar o protótipo](../docs/avaliacao/tutorial-instalar-e-testar-prototipo.md), que apresenta os dois caminhos passo a passo.

A documentação de referência dos comandos está em [Como executar as verificações técnicas](../docs/avaliacao/como-executar-testes.md).

## Opção 2 — publicar uma demonstração pelo GitHub Pages

A publicação depende de habilitar o GitHub Pages nas configurações do repositório. Como não foi possível ativar essa configuração por esta integração, é necessário fazer esta etapa manualmente:

1. Abra https://github.com/pablopcdossantos2-sys/repositorio-repo/settings/pages
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Selecione a branch **main**.
4. Se o campo de pasta oferecer apenas `/(root)` ou `/docs`, a pasta `produto` não poderá ser selecionada diretamente nessa configuração. Nesse caso, será necessário mover/copiar os arquivos do protótipo para a raiz ou configurar um fluxo de publicação apropriado.
5. Salve as configurações e aguarde a publicação.
6. Use o endereço que o próprio GitHub Pages apresentar nessa tela; não presuma que a publicação terminou até que o GitHub confirme.

**Importante:** o protótipo atual é demonstrativo. Não inserir informações reais de pacientes. As respostas de interação ficam somente na página durante a sessão e não são enviadas a servidor.

## O que testar

- Navegação entre Antes, Durante e Encerrar.
- Marcação e limpeza do checklist de preparação.
- Situação fictícia em que a pessoa não consegue ouvir e feedback da resposta escolhida.
- Confirmação dos próximos passos apresentados no cenário.
- Seleção da avaliação local e reinício do treino.
- Leitura em tela estreita, zoom, navegação por teclado e foco visível.
- Alternância entre modo claro e escuro; o modo claro é o padrão.
- Aumentar/reduzir o texto; conferir que a interface e as opções continuam legíveis.
- Ativar/desativar alto contraste, paleta azul e âmbar, paleta preto e branco e foco/leitura reforçados.
- Conferir se as três opções de resposta de cada cenário têm tamanhos iguais e continuam selecionáveis por teclado.

## Limites

O protótipo não é um produto clínico pronto, não se conecta a serviços de saúde e não deve ser utilizado para orientar decisões clínicas. A avaliação com participantes só poderá ocorrer após definição do protocolo e obtenção das aprovações aplicáveis.


## Controles de aparência e acessibilidade

No início da página, a seção **Aparência e acessibilidade** oferece modo claro/escuro, três tamanhos de texto, alto contraste, paletas de cores e reforço do foco e espaçamento da leitura. **Restaurar padrão** retorna ao modo claro e às configurações iniciais. Os ajustes existem apenas enquanto a página permanece aberta; não são armazenados.

A paleta azul/âmbar e a versão preto e branco ajudam a reduzir a dependência de diferenças entre vermelho e verde ou de matizes. Elas não cobrem necessariamente todas as formas de daltonismo. Para pessoas cegas, a ferramenta depende da estrutura semântica, navegação por teclado, nomes de controles e compatibilidade do navegador/leitor de tela; os controles visuais não substituem os recursos assistivos do dispositivo.

Consulte o [registro de implementação e verificações pendentes](../docs/avaliacao/registros/revisao-acessibilidade-visual-e-controles-2026-10-21.md). A inclusão dos controles não equivale a certificação de conformidade WCAG, e a auditoria manual com tecnologias assistivas continua pendente.
