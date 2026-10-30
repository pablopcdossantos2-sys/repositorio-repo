# Implementação da prática de encerramento (OE-05)

**Projeto:** Treino de Teleconsulta  
**Data:** 21/10/2026  
**Status:** implementada no protótipo; CI #39640867875 passou (16 verificações estáticas e 27 testes Playwright/axe-core); auditoria manual e avaliação com participantes não realizadas.

## Objetivo educativo

Oferecer uma prática curta para selecionar o que convém confirmar antes de encerrar uma teleconsulta fictícia: o que ficou combinado, o próximo passo e qual contato conhecido do serviço deve ser usado se houver dúvidas. A tarefa complementa os exemplos estáticos já existentes; a nota de facilidade de 1 a 5 permanece separada e não é uma medida de compreensão ou aprendizagem.

## Interação implementada

A seção “Encerrar” apresenta uma pergunta de escolha única com três opções:

1. **Resposta esperada:** confirmar o que ficou combinado, o próximo passo e o contato do serviço de saúde previamente informado.
2. **Distrator:** encerrar sem perguntar, apesar de uma informação não estar clara.
3. **Distrator:** abrir um link recebido depois por mensagem sem reconhecer quem enviou.

O botão “Verificar resposta” apresenta feedback em uma região de estado acessível. O feedback positivo reforça a confirmação dos próximos passos, a possibilidade de pedir explicação e o uso de um contato já conhecido. O feedback de nova tentativa corrige a escolha sem culpar a pessoa, sem oferecer orientação clínica e sem apresentar um link real.

## Critérios técnicos

- Uma resposta pode ser selecionada por teclado, mouse ou toque.
- A escolha é local e não é transmitida nem persistida.
- O feedback é exibido em uma região aria-live="polite" e usa os estilos de sucesso/tentativa existentes.
- “Reiniciar demonstração” limpa a opção e o feedback junto aos demais estados interativos.
- A interação foi incluída nas verificações de funcionamento, reinicialização, layout responsivo e axe-core da suíte de navegador.

## Limites da evidência

A implementação e os testes automatizados verificam o comportamento codificado e algumas condições técnicas. Não demonstram que o público compreenda a tarefa, aprenda ou transfira o comportamento para consultas reais. A revisão manual de acessibilidade permanece necessária, e qualquer teste com participantes depende de decisão metodológica e autorizações aplicáveis.
