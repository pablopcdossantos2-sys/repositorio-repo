# Especificação do produto mínimo

## Propósito

Construir o menor protótipo útil para avaliar se uma interface digital simples pode ajudar adultos a se prepararem para um atendimento de telessaúde, compreenderem orientações e organizarem próximos passos.

## Decisões de escopo

- Aplicação web responsiva, utilizável em celular e computador.
- Sem integração com prontuários ou outros sistemas clínicos.
- Sem inteligência artificial.
- Sem contas de usuário na primeira versão, salvo se a avaliação demonstrar necessidade e houver justificativa de privacidade.
- Sem armazenamento de dados clínicos identificáveis.
- Sem diagnóstico, prescrição, recomendação clínica autônoma ou alteração de tratamento.
- Conteúdo de orientação deve ser fictício para testes ou fornecido/validado por profissional responsável.
- O produto é um protótipo de pesquisa, não um sistema pronto para uso assistencial.

## Fluxo principal

1. Tela inicial com explicação breve sobre a finalidade e os limites do protótipo.
2. Módulo “Preparar minha consulta”: checklist local de dúvidas e perguntas; permitir marcar itens concluídos.
3. Módulo “Entender as orientações”: demonstrar um exemplo de resumo em linguagem clara; o conteúdo deve ser fictício ou aprovado para o estudo.
4. Módulo “Meus próximos passos”: lista de ações exemplificativas (por exemplo, retorno ou exame) informadas no cenário; sem envio de alertas clínicos.
5. Tela final de avaliação com perguntas sobre clareza, facilidade de uso e pontos de dificuldade.

## Requisitos funcionais mínimos

- RF-01: apresentar claramente a finalidade e os limites do protótipo.
- RF-02: permitir navegar entre os três módulos sem criar conta.
- RF-03: permitir interagir com um checklist de preparação.
- RF-04: apresentar orientações em linguagem simples no cenário demonstrativo.
- RF-05: organizar próximos passos de forma legível.
- RF-06: permitir reiniciar a demonstração e limpar o conteúdo inserido na sessão.
- RF-07: oferecer um modo de demonstração com dados fictícios para testes.
- RF-08: não coletar nem transmitir dados clínicos identificáveis na versão inicial.

## Requisitos de qualidade e acessibilidade

- Interface responsiva, com navegação consistente.
- Linguagem simples, frases curtas e instruções explícitas.
- Contraste adequado, foco de teclado visível e rótulos claros.
- Alvos de interação confortáveis em telas pequenas.
- Não depender apenas de cor para comunicar estado.
- Informar limitações e não usar mensagens que pareçam diagnóstico ou prescrição.
- Testar com usuários de diferentes níveis de familiaridade digital.

## Fora do escopo da primeira versão

- Integração com prontuário eletrônico ou sistemas de telemedicina.
- Login, cadastro de paciente ou armazenamento em nuvem.
- Inteligência artificial, chatbot clínico ou sumarização automática de consultas.
- Envio de lembretes por SMS, WhatsApp ou e-mail.
- Prescrição, triagem clínica, diagnóstico ou recomendação de conduta.
- Painel administrativo complexo.
- Publicação como aplicativo nativo nas lojas.

## Avaliação proposta

Tarefas exemplificativas:
1. Encontrar e marcar perguntas para levar ao atendimento.
2. Localizar uma orientação no resumo demonstrativo e explicar com suas próprias palavras o que ela significa.
3. Identificar o próximo passo descrito no cenário fictício.
4. Informar qual parte da interface foi confusa ou difícil.

Indicadores candidatos:
- tarefa concluída sem ajuda;
- erro ou interpretação incorreta;
- necessidade de assistência;
- clareza percebida;
- sugestões qualitativas de melhoria.

Os instrumentos, tarefas, critérios de êxito e procedimento de coleta deverão ser definidos no protocolo acadêmico e submetidos às aprovações aplicáveis antes da pesquisa com participantes.

## Critério de pronto para avaliação

O protótipo pode avançar para testes quando:
- os três módulos funcionarem em celular e computador;
- todos os exemplos forem fictícios ou formalmente validados para o estudo;
- não houver coleta de dados identificáveis desnecessários;
- a linguagem e os limites clínicos estiverem claros;
- as tarefas de avaliação e o procedimento de reinicialização estiverem documentados.
