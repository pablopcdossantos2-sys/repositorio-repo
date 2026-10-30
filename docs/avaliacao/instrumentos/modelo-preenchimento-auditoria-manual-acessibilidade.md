# Modelo de preenchimento — auditoria manual de acessibilidade

**Projeto:** Treino de Teleconsulta  
**Versão do instrumento:** 1.0 · **Data:** 21/10/2026  
**Finalidade:** registrar uma rodada de inspeção manual com respostas comparáveis, evidências e defeitos reproduzíveis.

> **Limites:** instrumento de avaliação técnica do produto, não protocolo de pesquisa com participantes. Nesta etapa, não solicite a pacientes ou usuários que executem tarefas. Não registre dados pessoais ou de saúde. O preenchimento não certifica conformidade integral com WCAG nem demonstra usabilidade ou eficácia educativa.

## Instruções

1. Faça uma **cópia deste arquivo para cada rodada**; não edite o modelo mestre.
2. Registre commit, ambiente, navegador, viewport/zoom e tecnologia assistiva realmente usados.
3. Para cada linha, preencha **um** código de resultado e uma evidência breve, valor medido ou ID de defeito.
4. Só marque Conforme quando o caso tiver sido executado e a evidência observada. Código inspecionado e teste automatizado, isoladamente, não substituem observação manual.
5. Se não houver leitor de tela ou dispositivo necessário, marque Bloqueado ou Não testado; não presuma o resultado.
6. Preserve o resultado original depois de uma correção. Registre o reteste separadamente com o commit correspondente.

## 1. Escala padronizada

| Código | Resultado | Regra de uso |
|---|---|---|
| **C** | Conforme | Critério observado e atendido; evidência registrada. |
| **PC** | Parcial | Parte do critério passou ou permanece uma limitação; explique. |
| **NC** | Não conforme | Critério falhou; abrir defeito e atribuir gravidade. |
| **NT** | Não testado | Não executado nesta rodada; não conta como sucesso. |
| **BL** | Bloqueado | Equipamento, software, acesso ou outra dependência impediu o teste; explique. |
| **NA** | Não aplicável | O caso não se aplica à versão testada; justifique. Não usar por falta de tempo. |

**Gravidade de defeito:**  
**Bloqueador** — impede usar a ferramenta ou concluir uma tarefa essencial.  
**Alta** — impede uma função importante para um grupo de pessoas.  
**Média** — causa dificuldade relevante, mas existe alternativa limitada.  
**Baixa** — impacto pequeno ou principalmente cosmético.  
Considere impacto e pessoas afetadas, e não apenas esforço de correção.

## 2. Identificação da rodada

- **ID da rodada:** AUD-MAN-AAAA-MM-DD-01
- **Data:** ____________________
- **Responsável/função:** ____________________
- **Commit do produto:** ____________________
- **URL ou caminho local:** ____________________
- **Sistema operacional/versão:** ____________________
- **Dispositivo (se relevante):** ____________________
- **Navegador/versão:** ____________________
- **Viewport (largura × altura em CSS px):** ____________________
- **Zoom do navegador:** ______ %
- **Leitor de tela/versão (se usado):** ____________________
- **Outras tecnologias assistivas/configurações:** ____________________
- **Link/resultado da CI para o commit:** ____________________
- **Limitações desta rodada:** ____________________

**Perfis executados (marque todos os aplicáveis):**  
[ ] Mouse/trackpad  [ ] Teclado apenas  [ ] Leitor de tela  [ ] Ampliação/zoom  
[ ] Contraste/cores  [ ] Tela móvel/estreita  [ ] Toque  [ ] Movimento reduzido  
[ ] Outro: ____________________

## 3. Casos objetivos

Preencha as colunas **Resultado** e **Evidência/defeito** para cada caso.

### 3A. Preparação e funcionamento básico

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| BAS-01 | O commit e a versão abertos correspondem à identificação da seção 2? | Versão testada corresponde ao registro. | ___ | ___ |
| BAS-02 | A página abre sem erro visível, conteúdo quebrado ou CSS/JS local ausente? | Página, estilos e interações carregam sem falha impeditiva. | ___ | ___ |
| BAS-03 | Está explícito que é uma demonstração fictícia, não uma consulta real? | Interface e limites não sugerem serviço assistencial oficial. | ___ | ___ |
| BAS-04 | Alguma etapa exige nome, contato, senha, credenciais ou dados de saúde reais? | O simulador não exige nem solicita esses dados. | ___ | ___ |

### 3B. Teclado e foco

**Procedimento:** use Tab, Shift+Tab, Enter, Espaço e setas quando aplicáveis; não use o mouse nesta seção.

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| KBD-01 | Tab inicial revela “Pular para o conteúdo”? | Link fica visível ao receber foco e leva ao conteúdo principal. | ___ | ___ |
| KBD-02 | A ordem de foco segue a ordem de leitura? | Foco não pula aleatoriamente nem omite controles. | ___ | ___ |
| KBD-03 | Todos os botões e o seletor de paleta funcionam pelo teclado? | Não é necessário usar mouse para nenhuma função. | ___ | ___ |
| KBD-04 | As opções de rádio podem ser selecionadas e percorridas com teclado? | Enter/Espaço/setas funcionam de acordo com o controle nativo. | ___ | ___ |
| KBD-05 | O foco permanece visível nos temas, paletas e níveis de texto testados? | O indicador não desaparece nem se confunde com o fundo. | ___ | ___ |
| KBD-06 | Ao trocar etapa/cenário, o foco vai a um local coerente? | Foco não permanece dentro de um painel oculto. | ___ | ___ |
| KBD-07 | É sempre possível sair de controles e grupos pelo teclado? | Não existe armadilha de foco. | ___ | ___ |
| KBD-08 | Os controles continuam alcançáveis com o texto em “Muito grande”? | Nenhum controle necessário fica inacessível. | ___ | ___ |

### 3C. Leitor de tela e semântica

**Registre leitor/versão na seção 2.** Se não estiver disponível, use BL ou NT.

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| SR-01 | O leitor anuncia título da página, títulos de seção e etapas em ordem coerente? | A estrutura de títulos ajuda a localizar o conteúdo. | ___ | ___ |
| SR-02 | Cada botão tem nome anunciado que comunica sua função? | Tema, contraste, texto, foco, restauração e demais controles não são ambíguos. | ___ | ___ |
| SR-03 | O nome anunciado dos botões contém o texto visível do botão? | Nome acessível não contradiz nem omite o texto visível. | ___ | ___ |
| SR-04 | O seletor de paleta anuncia seu rótulo e a opção selecionada? | Nome e valor do controle são percebidos. | ___ | ___ |
| SR-05 | A pergunta/legenda é associada ao conjunto correto de opções de rádio? | As opções são anunciadas dentro do grupo correspondente. | ___ | ___ |
| SR-06 | Ao selecionar uma opção, o leitor comunica que ela está selecionada? | O estado selecionado é anunciado por tecnologia assistiva. | ___ | ___ |
| SR-07 | O leitor anuncia a mensagem dinâmica após “Verificar resposta”? | Acerto/nova tentativa pode ser percebido sem depender de cor ou visão. | ___ | ___ |
| SR-08 | Mudanças de tema, tamanho, contraste, paleta e foco são comunicadas? | A mudança de preferência é anunciada de forma compreensível. | ___ | ___ |
| SR-09 | Mudanças no checklist e na nota de facilidade são anunciadas? | Os estados dinâmicos podem ser percebidos sem reler a página toda. | ___ | ___ |
| SR-10 | Painéis/cenários ocultos deixam de ser percorridos? | Conteúdo não visível não aparece como conteúdo ativo na navegação. | ___ | ___ |
| SR-11 | O leitor comunica quando aumentar/diminuir texto está desabilitado no limite? | O estado indisponível é compreensível. | ___ | ___ |

### 3D. Tema, contraste e cores

Quando medir contraste, registre a ferramenta, as cores de texto/fundo e a razão medida. Como referência WCAG 2.2 AA, texto comum geralmente requer **4,5:1**, texto grande **3:1**; controles, bordas necessárias e foco têm critérios próprios de contraste não textual.

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| VIS-01 | A página começa em modo claro? | O modo claro é inicial e há indicação para ativar o modo escuro. | ___ | ___ |
| VIS-02 | O botão alterna claro → escuro → claro sem recarregar? | Tema e rótulo atualizado correspondem ao estado; nada essencial desaparece. | ___ | ___ |
| VIS-03 | Texto, controles, seleção e foco são legíveis no modo claro? | Não há texto essencial ou estado indistinguível do fundo. | ___ | ___ |
| VIS-04 | Texto, controles, seleção e foco são legíveis no modo escuro? | Não há texto essencial ou estado indistinguível do fundo. | ___ | ___ |
| VIS-05 | Alto contraste funciona nos temas claro e escuro? | Texto, avisos, bordas, estados e botões desabilitados continuam identificáveis. | ___ | ___ |
| VIS-06 | A paleta azul/âmbar mantém distinguíveis acerto e nova tentativa? | A diferença não depende só de vermelho/verde; registre pistas textuais e visuais. | ___ | ___ |
| VIS-07 | A paleta monocromática mantém texto, foco, seleção e feedback compreensíveis? | Nenhuma informação importante depende só de uma cor. | ___ | ___ |
| VIS-08 | Sem usar cor como pista, é possível identificar seleção e entender o feedback? | O controle e o texto explícito comunicam o estado. | ___ | ___ |
| VIS-09 | Bordas necessárias e foco se destacam do fundo adjacente? | Controles/estados podem ser localizados nas combinações testadas. | ___ | ___ |
| VIS-10 | Textos principais, auxiliares e feedbacks mantêm contraste suficiente em cada combinação? | Medições são registradas; não se conclui apenas pela aparência geral. | ___ | ___ |

**Matriz obrigatória de combinações** — preencha todos os cenários ou marque NT/BL/NA com justificativa.

| Combinação | Texto/controles: C/PC/NC/NT/BL/NA | Foco/seleção: C/PC/NC/NT/BL/NA | Evidência/defeito |
|---|---|---|---|
| Claro + padrão | ___ | ___ | ___ |
| Escuro + padrão | ___ | ___ | ___ |
| Claro + alto contraste | ___ | ___ | ___ |
| Escuro + alto contraste | ___ | ___ | ___ |
| Claro + azul/âmbar | ___ | ___ | ___ |
| Escuro + azul/âmbar | ___ | ___ | ___ |
| Claro + monocromático | ___ | ___ | ___ |
| Escuro + monocromático | ___ | ___ | ___ |

### 3E. Tamanho do texto, zoom e reflow

**Importante:** o nível interno “Muito grande” não equivale a 200%. Teste também o zoom do navegador. Para reflow, procure uma largura efetiva de 320 CSS px (por exemplo, viewport de 1280 CSS px a zoom de 400%).

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| TXT-01 | Os controles percorrem Normal → Grande → Muito grande? | O texto muda e o nome/estado atual é atualizado. | ___ | ___ |
| TXT-02 | Os botões de aumentar/diminuir ficam desabilitados nos limites corretos? | Diminuir em Normal e aumentar em Muito grande ficam desabilitados. | ___ | ___ |
| TXT-03 | No nível Muito grande, instruções, respostas e botões continuam visíveis? | Nada fica cortado, sobreposto ou inacessível. | ___ | ___ |
| TXT-04 | A 200% de zoom do navegador, conteúdo e funções continuam disponíveis? | Não há perda de conteúdo ou funcionalidade. | ___ | ___ |
| TXT-05 | A 400%/320 CSS px, conteúdo reflowa sem rolagem horizontal geral? | Não é necessário rolar em duas direções para ler conteúdo normal, salvo exceção justificada. | ___ | ___ |
| TXT-06 | Com espaçamento de texto ampliado, nada fica cortado? | Se possível, testar line-height 1,5×, espaço de parágrafo 2×, letras 0,12em, palavras 0,16em; conteúdo/função não se perde. | ___ | ___ |
| TXT-07 | O foco continua visível e o fim dos cartões/mensagens pode ser alcançado com texto ampliado? | Conteúdo se ajusta ou permite rolagem vertical sem esconder controles. | ___ | ___ |

### 3F. Uniformidade das opções de resposta

**Procedimento:** compare as três opções dentro de cada cenário (não compare entre cenários diferentes). Teste texto Normal e Muito grande, em desktop e tela estreita.

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| OPT-01 | As três opções do cenário de entrada têm largura uniforme? | Larguras iguais visualmente, sem ultrapassar o contêiner. | ___ | ___ |
| OPT-02 | As três opções do cenário de áudio têm largura uniforme? | Larguras iguais visualmente, sem ultrapassar o contêiner. | ___ | ___ |
| OPT-03 | As três opções do cenário de esclarecimento têm largura uniforme? | Larguras iguais visualmente, sem ultrapassar o contêiner. | ___ | ___ |
| OPT-04 | As alturas são uniformes com texto Normal em cada cenário? | Os cartões ficam alinhados e o texto não é cortado. | ___ | ___ |
| OPT-05 | As alturas continuam uniformes/adequadas com texto Muito grande? | Os cartões crescem quando necessário, sem esconder texto ou controles. | ___ | ___ |
| OPT-06 | Clicar/toque no texto do cartão seleciona a opção correta? | O rótulo inteiro funciona e o estado selecionado fica visível/anunciado. | ___ | ___ |
| OPT-07 | A seleção continua distinguível em todos os temas e paletas? | Seleção é indicada pelo controle/contorno, não só por matiz. | ___ | ___ |

### 3G. Baixa visão, visão de cores e dispositivos móveis

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| MOB-01 | Em 320, 360 e 390 CSS px, a página funciona sem rolagem horizontal geral? | Nada é cortado nem sobreposto; registre viewport e estado testado. | ___ | ___ |
| MOB-02 | Em orientação retrato e paisagem, as etapas e os botões continuam funcionais? | Nenhuma ação essencial desaparece ou fica inacessível. | ___ | ___ |
| MOB-03 | Em tela tátil, os controles podem ser acionados sem tocar acidentalmente em outro? | Alvos e espaçamentos são utilizáveis; não há sobreposição. | ___ | ___ |
| MOB-04 | Com ampliação do sistema/navegador, é possível localizar foco e botões? | Não há recorte/sobreposição que impeça usar controles essenciais. | ___ | ___ |
| MOB-05 | Em simulação de protanopia, deuteranopia ou tritanopia (se disponível), os estados continuam identificáveis? | Texto, forma/contorno ou estado do controle preservam a distinção mesmo quando cores se aproximam. | ___ | ___ |
| MOB-06 | Com movimento reduzido ativado, a navegação continua funcional? | A preferência é respeitada e nenhuma instrução depende de animação. | ___ | ___ |

### 3H. Privacidade e consistência do treino

| ID | Pergunta/procedimento | Critério de aceitação | Resultado | Evidência/defeito |
|---|---|---|---|---|
| SEG-01 | Os botões deixam claro que não iniciam consulta, conexão, áudio ou mensagem real? | Texto e comportamento correspondem; nada abre serviço real. | ___ | ___ |
| SEG-02 | As respostas/preferências deixam de ser enviadas ou armazenadas persistentemente? | Conferir rede e armazenamento no navegador; anotar exatamente o que foi inspecionado. | ___ | ___ |
| SEG-03 | “Restaurar padrão” retorna todas as preferências visuais aos valores padrão? | Claro, texto Normal, contraste/paleta padrão e foco reforçado desativado. | ___ | ___ |
| SEG-04 | Após recarregar, tema claro e preferências padrão reaparecem? | Nenhuma preferência visual é persistida inesperadamente. | ___ | ___ |
| SEG-05 | “Reiniciar demonstração” limpa respostas/feedbacks e retorna à etapa inicial? | Não restam escolhas ou mensagens antigas aparentes. | ___ | ___ |
| SEG-06 | Os textos evitam diagnóstico, prescrição ou alteração de orientação clínica? | Feedbacks permanecem fictícios, genéricos e respeitosos. | ___ | ___ |

## 4. Resumo quantitativo da rodada

Conte os códigos das linhas da seção 3. NT, BL e NA **não** contam como Conforme.

| Resultado | Quantidade |
|---|---:|
| C — Conforme | ___ |
| PC — Parcial | ___ |
| NC — Não conforme | ___ |
| NT — Não testado | ___ |
| BL — Bloqueado | ___ |
| NA — Não aplicável | ___ |
| Total de casos registrados | ___ |
| Defeitos bloqueadores/altos abertos | ___ |
| Defeitos médios/baixos abertos | ___ |
| Defeitos corrigidos e retestados | ___ |

**Conclusão da rodada — marque uma opção:**

- [ ] **Incompleta:** existem casos importantes NT/BL; não é possível concluir sobre essas áreas.
- [ ] **Foram encontrados defeitos:** há NC e os defeitos estão registrados para correção.
- [ ] **Pronta para nova revisão:** nenhum bloqueador/alto está aberto; persistem limitações ou retestes.
- [ ] **Casos desta rodada executados sem falhas observadas:** todos os casos aplicáveis foram executados e não há NC/PC em aberto. Isso **não** certifica WCAG integralmente nem valida o produto com usuários.

**Limitações observadas (obrigatório):**  
__________________________________________________________________  
__________________________________________________________________

**Próximas ações (obrigatório se houver NC/PC/NT/BL):**  
__________________________________________________________________  
__________________________________________________________________

## 5. Registro de defeito — copie este bloco para cada problema

### DEF-___ — título objetivo e curto

- **Caso relacionado:** ____________________
- **Data:** ____________________
- **Commit em que ocorreu:** ____________________
- **Ambiente, viewport, zoom, tema/paleta e tecnologia assistiva:** ____________________
- **Gravidade:** [ ] Bloqueador [ ] Alta [ ] Média [ ] Baixa
- **Necessidade potencialmente afetada:** [ ] Teclado [ ] Leitor de tela [ ] Baixa visão/ampliação [ ] Visão de cores [ ] Mobilidade/toque [ ] Geral [ ] Outra: ______
- **Passos exatos para reproduzir:** 1. ______ 2. ______ 3. ______
- **Resultado esperado:** ____________________
- **Resultado observado:** ____________________
- **Evidência sem dados pessoais:** [ ] captura [ ] gravação [ ] log [ ] contraste medido [ ] outra: ______
- **Correção proposta:** ____________________
- **Commit da correção:** ____________________
- **Resultado do reteste:** [ ] C [ ] PC [ ] NC [ ] NT [ ] BL
- **Commit/ambiente do reteste:** ____________________
- **Observação adicional, se indispensável:** ____________________

Não anexe nomes, imagens de pessoas, dados clínicos, credenciais nem informações pessoais.

## 6. Resumo por área

| Área | Status C/PC/NC/NT/BL/NA | IDs de defeitos abertos | Evidência/limitação principal |
|---|---|---|---|
| Preparação e funcionamento | ___ | ___ | ___ |
| Teclado e foco | ___ | ___ | ___ |
| Leitor de tela/semântica | ___ | ___ | ___ |
| Tema, contraste e paletas | ___ | ___ | ___ |
| Tamanho do texto/zoom/reflow | ___ | ___ | ___ |
| Dimensões das opções | ___ | ___ | ___ |
| Móvel, toque e movimento | ___ | ___ | ___ |
| Privacidade e consistência | ___ | ___ | ___ |

## 7. Regras de interpretação

- Uma pergunta objetiva facilita a comparação, mas NC/PC deve ter evidência suficiente para reproduzir o problema.
- A cor parecer adequada não prova contraste suficiente: registre as cores de texto/fundo e a razão calculada.
- Passar no axe-core não substitui ouvir como um leitor de tela anuncia os controles e as mensagens.
- Azul/âmbar e monocromático não cobrem necessariamente todos os tipos de daltonismo.
- “Muito grande” não equivale a redimensionamento a 200%; teste o zoom do navegador separadamente.
- Se tecnologia assistiva ou dispositivo não estiver disponível, use BL/NT, não C.
- Esta ficha cobre riscos selecionados do protótipo; não teste todos os critérios WCAG e não declare conformidade WCAG 2.2 AA apenas com base nela.

## 8. Fontes de referência

- W3C — [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- Tradução em português — [Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/).
- W3C WAI — [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).

Critérios particularmente relacionados (lista indicativa, não exaustiva): 1.3.1 relações e informações; 1.4.1 uso de cor; 1.4.3 contraste mínimo; 1.4.4 redimensionar texto; 1.4.10 reflow; 1.4.11 contraste não textual; 1.4.12 espaçamento do texto; 2.1.1 teclado; 2.1.2 sem bloqueio do teclado; 2.4.7 foco visível; 2.4.11 foco não obscurecido; 2.5.8 tamanho do alvo mínimo; 4.1.2 nome, função, valor; 4.1.3 mensagens de estado.

**Fim do modelo em branco.** Copie o arquivo antes de preencher para preservar uma versão reutilizável.

## Formulário HTML interativo e ajuda contextual (21/10/2026)

O [formulário HTML interativo](formulario-auditoria-manual-acessibilidade.html) oferece um ícone de informação ao lado dos campos preenchíveis. O ícone abre uma janela de ajuda com o significado do campo, orientações de preenchimento e exemplo correspondente. Para os casos de auditoria, a ajuda usa o ID, a pergunta e o critério do caso para orientar o registro de evidências.

**Importação e correção de exportações:** o formulário HTML permite importar uma exportação `.json` anterior, revisar ou corrigir campos e exportar o mesmo registro novamente. A importação substitui os valores atuais, portanto exporte uma cópia antes se quiser preservá-los. O JSON precisa pertencer ao projeto e ao instrumento reconhecidos pelo formulário. A ajuda do campo **Viewport** explica como medir a largura e altura da área visível do protótipo em pixels CSS. A seção **Como conduzir a auditoria** divide a execução em preparação, funcionamento básico, teclado/foco, tecnologia assistiva, testes visuais/adaptação e registro dos resultados. Marque C apenas quando o caso tiver sido efetivamente executado e observado; use NT ou BL quando apropriado.

O formulário sugere automaticamente a data da rodada, o nome/versão do navegador, uma identificação aproximada do sistema operacional e uma categoria aproximada de dispositivo. Os campos continuam editáveis e as sugestões devem ser confirmadas. URL do protótipo, viewport, zoom, leitor de tela, commit testado e resultado da CI ficam manuais para evitar preencher automaticamente valores que poderiam não corresponder ao protótipo auditado ou exigem confirmação. Não há envio nem gravação automática das respostas.

Para relacionar os casos da ficha aos critérios aplicáveis do toolkit oficial WHO/ITU, consulte a [Matriz de aplicabilidade WHO/ITU–protótipo](../../prototipo/matriz-aplicabilidade-who-itu-prototipo.md). Ela distingue requisitos diretos, parciais e fora do escopo do simulador fictício; não constitui declaração de conformidade com o padrão para serviços reais de telessaúde.


## Registro da auditoria manual (21/10/2026)

Foi arquivada a rodada `AUD-MAN-2026-10-21-01`, com [JSON e PDF]( ../auditorias/manual/2026-10-21/README.md ). As respostas foram mantidas como recebidas nas cópias públicas redigidas, mas a análise inicial encontrou todas as 59 respostas C sem evidências, somente o perfil Mouse/trackpad marcado e divergências de metadados. O registro é **inconclusivo** até que a execução seja complementada; ver a nota de análise no diretório de auditoria.
