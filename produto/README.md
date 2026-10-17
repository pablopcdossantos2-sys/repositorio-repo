# Como abrir o protótipo

## Opção 1 — abrir no computador sem instalar nada

1. Abra a pasta `produto` no repositório.
2. Abra o arquivo `index.html`.
3. Se baixar o repositório como ZIP, extraia a pasta e dê dois cliques em `produto/index.html`.

O protótipo usa HTML, CSS e JavaScript puros; não precisa de Node.js, npm, Git ou instalação de dependências.

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

- Navegação entre Preparar, Entender e Próximos passos.
- Marcação e limpeza do checklist.
- Seleção de resposta no exemplo fictício.
- Seleção de avaliação e reinício da demonstração.
- Leitura em tela estreita, zoom, navegação por teclado e foco visível.

## Limites

O protótipo não é um produto clínico pronto, não se conecta a serviços de saúde e não deve ser utilizado para orientar decisões clínicas. A avaliação com participantes só poderá ocorrer após definição do protocolo e obtenção das aprovações aplicáveis.
