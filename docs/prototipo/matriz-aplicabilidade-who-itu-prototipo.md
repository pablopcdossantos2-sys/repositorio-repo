# Matriz de aplicabilidade do toolkit WHO/ITU ao Treino de Teleconsulta

**Projeto:** Treino de Teleconsulta  
**Data da análise:** 21/10/2026  
**Natureza:** adaptação documental de critérios; não é auditoria concluída, certificação de acessibilidade ou declaração de conformidade com a recomendação ITU-T F.780.2.

## 1. Fonte e regra de interpretação

Fonte principal: World Health Organization (WHO) e International Telecommunication Union (ITU). *Implementation toolkit for accessible telehealth services* (2024). [Página oficial da WHO](https://www.who.int/publications/b/74046) · [PDF oficial no site da ITU](https://www.itu.int/dms_pub/itu-t/opb/joint/T-JOINT-WHO-2024-1-PDF-E.pdf).

O toolkit explica como implementar o padrão global WHO-ITU de acessibilidade para telessaúde e resume 25 requisitos técnicos da recomendação F.780.2. Os requisitos foram concebidos para plataformas/serviços de telessaúde. O Treino de Teleconsulta é um simulador educativo fictício, sem consulta real, vídeo ao vivo, chat, prontuário ou dados clínicos; por isso, cada requisito precisa ser classificado como diretamente aplicável, parcialmente aplicável ou fora do escopo do protótipo.

**Importante:** quando um recurso de um serviço real não existe no simulador (por exemplo, videoconferência, legendas sincronizadas ou intérprete remoto), isso não deve ser registrado automaticamente como defeito do simulador. A evidência apropriada é documentar a diferença de escopo e testar a acessibilidade dos elementos que realmente existem. A classificação abaixo é uma adaptação de trabalho, não a categorização oficial da WHO/ITU.

## 2. Matriz de correspondência

| Requisito/tema do toolkit | Aplicabilidade ao protótipo | Casos e documentos relacionados | Evidência necessária / limite |
|---|---|---|---|
| Compatibilidade com leitor de tela e teclado Braille (Req. 1) | Direta para leitor de tela e semântica HTML; teclado Braille físico ainda não foi testado. | SR-01 a SR-11; KBD-01 a KBD-08. | Executar com leitor de tela/navegador identificados; registrar títulos, rótulos, opções, estados e mensagens. Não inferir compatibilidade com Braille a partir de teclado comum. |
| Contraste e ampliação (Req. 2) | Direta. | VIS-01 a VIS-10; TXT-04 a TXT-07; MOB-04. | Medir as combinações relevantes, testar zoom/reflow e guardar capturas/valores. O cálculo de algumas cores ou axe-core não substitui a medição dos componentes e estados reais. |
| Evitar downloads, dependência de plataformas específicas e credenciais quando evitáveis (Req. 4) | Parcialmente direta. O simulador é estático e não exige conta; a experiência de distribuição/abertura ainda precisa ser observada no ambiente real do auditor. | BAS-02, BAS-04, SEG-01 e SEG-02; inspeção de dependências. | Verificar que o protótipo abre sem login, não pede senha, não exige instalação específica e não inicia chamadas de rede. Registrar o método de abertura (arquivo local ou hospedagem). |
| Evitar vídeos com música de fundo e descrição ambígua; legendas/subtítulos e tela para leitura labial (Req. 5, 6, 10 e 11) | Fora do escopo audiovisual atual: o simulador não contém vídeo de atendimento nem conteúdo audiovisual educacional próprio. A exigência de linguagem não ambígua continua relevante para os textos. | Matriz de qualidade textual C-01, C-08 e revisão editorial; BAS-03; inspeção do conteúdo real. | Não marcar como “conforme para vídeo” sem vídeo a testar. Rever a clareza textual; se forem adicionados vídeos futuramente, criar verificações para legendas, tamanho de texto, áudio e conteúdo visual. |
| Legendas, chat monitorado, comunicação textual quando áudio/vídeo falham, interpretação remota em língua de sinais e síntese de voz para dificuldades de fala (Req. 7–9 e 12) | Fora do escopo de serviço real. A simulação ensina como reconhecer e comunicar uma dificuldade, mas não fornece videoconferência, chat, intérprete ou canal de mensagem. | BAS-03; conteúdo OE-03/OE-04; matriz de produto mínimo. | Não transformar a simulação em falsa promessa de função real. Se o escopo vier a incluir uma plataforma real, revisar a decisão e os requisitos antes de implementar. |
| Tamanho dos controles e redução de precisão motora fina/double-click (Req. 13 e 14) | Direta para controles existentes; cobertura parcial para a exigência específica de não depender de gestos finos. | MOB-03; OPT-06; KBD-03/KBD-04. | Testar toque/clique no rótulo inteiro e acionamento por teclado. O instrumento ainda não pergunta explicitamente se alguma tarefa exige duplo clique ou precisão motora fina; considerar esse ponto numa futura revisão do formulário. |
| Reduzir esforço de rolagem e menus para encontrar informações (Req. 15) | Parcial. A interface tem três etapas e pode exigir rolagem conforme tela e tamanho do texto. | KBD-02; TXT-03 a TXT-07; MOB-01/MOB-02. | Registrar se uma instrução essencial ou controle fica difícil de localizar e se há rolagem em duas direções. O formulário atual não mede diretamente o esforço de rolagem; anotar como observação/defeito quando relevante. |
| Evitar conteúdo inesperado/prejudicial, explicar privacidade/segurança, evitar UI/linguagem complicadas, esforço desnecessário e falhas persistentes (Req. 16–20) | Direta para mensagens, escolhas, fluxo e comportamento local. Alguns subitens de confiabilidade/qualidade da informação não são provados apenas pela acessibilidade visual. | BAS-02/BAS-03; SEG-01/SEG-02/SEG-06; KBD; matriz textual C-01 a C-09. | Inspecionar feedback sem culpa, aviso fictício, coerência entre opção e feedback, reinicialização, rede/armazenamento e ausência de orientação clínica. Não afirmar compreensão pelo público-alvo sem dados próprios. |
| Formatos acessíveis/easy-read, material educativo simples sobre como usar telessaúde (Req. 21 e 23) | Relevante para o propósito educativo; formato easy-read dedicado não foi formalmente produzido ou validado. | Objetivos OE-01 a OE-05; TXT-03/TXT-06/TXT-07; critérios C-01 e C-08; especificação do produto mínimo. | Avaliar os textos e instruções disponíveis, mas registrar easy-read como não especificamente avaliado. O material do simulador não substitui instruções próprias de um serviço real. |
| Possibilidade de mais de duas pessoas numa consulta (Req. 22) | Não aplicável ao simulador sem reunião real. | Limite de escopo em README e produto mínimo. | Manter a limitação explícita; não implementar participação de acompanhantes num serviço fictício sem nova decisão de escopo. |
| Layout acessível para dislexia/dificuldades de aprendizagem, texto compreensível e tempo suficiente (Req. 24 e 25) | Parcialmente direta. Tamanho de texto, espaçamento, controles e ausência de temporizador podem ser inspecionados; isso não valida o layout para todas as necessidades nem comprova compreensão. | TXT-01 a TXT-07; OPT-01 a OPT-07; MOB-01; matriz textual C-01/C-08. | Testar texto ampliado, espaçamento, foco e cartões; registrar limitações. O instrumento não verifica diagnóstico nem deve inferir capacidade a partir da idade/escolaridade. O protótipo não tem limite de tempo, mas o auditor deve verificar se a navegação força avanço antes da leitura. |

## 3. Lacunas na cobertura do instrumento atual

A ficha de auditoria 1.1 cobre vários pontos relevantes do toolkit, mas não é uma transcrição do padrão e não contempla cada requisito de plataforma de telessaúde. As lacunas a considerar numa futura revisão do instrumento são:

1. verificar explicitamente se alguma interação exige double-click ou coordenação motora fina;
2. registrar esforço de rolagem e facilidade de localizar informações essenciais;
3. observar se há tempo suficiente para leitura e se algum controle força avanço;
4. avaliar se os materiais educativos estão em formato acessível/easy-read, sem alegar que linguagem simples equivale automaticamente a easy-read;
5. diferenciar claramente critérios de plataforma real (chat, legendas sincronizadas, vídeo e interpretação remota) dos critérios aplicáveis ao simulador.

Esta matriz orienta a escolha de evidências para a próxima rodada, mas não altera automaticamente os casos antigos. Quando necessário, abra uma nova versão do instrumento e preserve a rodada inconclusiva original.

## 4. Uso na próxima auditoria

Para cada caso relacionado, registrar C apenas após observar o comportamento. Use NT quando não executar; BL quando uma dependência impedir a execução. Guarde o ambiente, a evidência, o commit e o resultado. O toolkit recomenda implementação inclusiva e participação significativa das pessoas afetadas no desenho/desenvolvimento/teste; como o método vigente começa sem participantes, isso deve ser descrito como limite metodológico, não como etapa concluída.

## 5. Relação com outros registros

- [Modelo de preenchimento da auditoria manual](../avaliacao/instrumentos/modelo-preenchimento-auditoria-manual-acessibilidade.md)
- [Benchmark de recursos existentes](../fundamentacao/benchmark-recursos-existentes.md)
- [Especificação do produto mínimo](produto-minimo.md)
- [Estado atual e diretrizes para IAs](estado-atual-e-diretrizes-para-ias.md)
