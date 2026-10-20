# Roteiro de auditoria técnica, pedagógica e de acessibilidade sem participantes

**Projeto:** Treino de Teleconsulta  
**Versão inicial do roteiro:** 20/10/2026  
**Status:** instrumento de trabalho para inspeção do produto; não executado integralmente e não aprovado como protocolo de pesquisa.  
**Diretriz:** esta auditoria não requer coleta com pessoas. Testes com participantes permanecem fora do plano inicial e só serão considerados se a orientação acadêmica indicar que são necessários.

## 1. Objetivo e limites

Verificar se o protótipo corresponde aos requisitos documentados, funciona conforme o esperado, apresenta conteúdo educativo seguro e compreensível por inspeção especializada, evita dados reais e implementa critérios técnicos de acessibilidade aplicáveis.

A auditoria pode identificar defeitos, consistência de conteúdo e conformidade técnica observável. **Não comprova** que pessoas com baixa familiaridade digital consigam usar o produto, que o compreendam, que aprendam de forma duradoura ou que a teleconsulta real seja facilitada. Não registrar resultados de pessoas, não simular entrevistas e não recolher dados de usuários nesta fase.

## 2. Preparação e registro

Antes da execução:
1. Registrar commit/hash dos arquivos de produto e data da auditoria.
2. Consultar o documento de diretrizes para IAs, o benchmark de recursos existentes e a matriz de evidências/requisitos.
3. Abrir produto/index.html localmente em um navegador disponível e anotar sistema operacional, navegador/versão e viewport.
4. Executar os testes automatizados conforme docs/como-executar-testes.md e guardar o link da CI mais recente que corresponde aos arquivos.
5. Não marcar como “passou” itens que não tenham sido efetivamente verificados. Usar “não executado”, “não aplicável” ou “bloqueado” com justificativa.

## 3. Escala de registro

- **Passou:** o critério foi verificado e a evidência foi registrada.
- **Falhou:** a condição esperada não ocorreu; abrir item de correção e repetir o teste após a alteração.
- **Parcial:** parte do critério foi atendida, mas há limitações explícitas.
- **Não executado:** não foi possível realizar a verificação.
- **Não aplicável:** explicar por que o requisito não se aplica ao protótipo.

Cada falha deve ter: ID, passo de reprodução, resultado esperado, resultado observado, gravidade (bloqueador/alta/média/baixa), correção proposta, commit da correção e resultado do reteste.

## 4. Casos de auditoria

| ID | Dimensão | Procedimento | Critério de aceitação | Estado inicial |
|---|---|---|---|---|
| AUD-01 | Identidade/escopo | Ler a página inicial e o rodapé. | O texto deixa claro que é demonstração acadêmica fictícia, não atendimento oficial nem teleconsulta real. | Não executado nesta auditoria |
| AUD-02 | Privacidade | Inspecionar todos os campos e controles visíveis. | Não há solicitação de nome, CPF, data de nascimento, credenciais, dados clínicos ou contato. | Não executado nesta auditoria |
| AUD-03 | Rede/armazenamento | Conferir código e, em navegador, painel Network/Application. | Nenhuma requisição externa inesperada; nenhuma persistência de respostas ou dados pessoais. Registrar o alcance real da verificação. | Inspeção estática existente; verificação manual pendente |
| AUD-04 | Preparação | Percorrer checklist e usar “Desmarcar tudo”. | Itens podem ser marcados/desmarcados; mensagem de estado é atualizada; limpar checklist não reinicia silenciosamente outras etapas. | Não executado nesta auditoria |
| AUD-05 | Navegação | Percorrer Antes, Durante e Encerrar. | Cada controle leva ao destino correto; estado visual/acessível acompanha o painel; foco não fica num painel oculto. | Automação histórica; confirmar no navegador manualmente |
| AUD-06 | Entrada/link | Acionar a simulação e testar todas as respostas. | Fica explícito que nenhum link real foi aberto; a opção segura orienta conferir conexão/link/canal oficial e não partilhar credenciais. | Automação histórica; revisão manual pendente |
| AUD-07 | Áudio | Acionar os dois controles fictícios e testar respostas. | O feedback é coerente com o botão; não solicita permissão real de microfone nem inicia áudio. | Automação histórica; revisão manual pendente |
| AUD-08 | Esclarecimento | Testar cada resposta do cenário “Não entendi”. | A resposta segura é pedir repetição/explicação e confirmar próximos passos; o feedback não altera nem fornece orientação clínica. | Automação histórica; revisão manual pendente |
| AUD-09 | Encerramento | Ler a etapa final e reiniciar. | Os próximos passos são genéricos e seguros; reiniciar limpa seleções, feedback e avaliação local e retorna à etapa inicial. | Automação histórica; confirmação manual pendente |
| AUD-10 | Linguagem | Revisar cada título, instrução, opção e feedback. | Frases diretas, uma ação por vez, sem jargão não explicado, culpa ou promessa de resultado. Registrar termos a simplificar. | Não executado nesta auditoria |
| AUD-11 | Acessibilidade semântica | Inspecionar títulos, landmarks, rótulos, fieldset/legend, nomes de botões e regiões de feedback. | Controles têm nomes compreensíveis e relações semânticas; mensagens dinâmicas são expostas; ocultação visual e estado ARIA não divergem. | Verificação estática/axe-core histórica; revisão manual pendente |
| AUD-12 | Teclado/foco | Usar Tab, Shift+Tab, Enter e Espaço em todas as etapas. | Ordem lógica, foco sempre visível, ativação por teclado e foco transferido coerentemente após mudança de painel. | Não executado manualmente |
| AUD-13 | Zoom/reflow | Inspecionar a 320, 360, 390, 768 e 1280 CSS px e zoom 200%. | Sem perda de conteúdo/funcionalidade ou sobreposição; qualquer rolagem horizontal necessária é registrada e justificada. | Automação histórica parcial; zoom manual pendente |
| AUD-14 | Movimento reduzido | Ativar a preferência do sistema e navegar entre etapas. | Não há movimento não essencial que contrarie a preferência; a navegação permanece compreensível. | Inspeção de código e automação histórica; manual pendente |
| AUD-15 | Contraste | Medir texto, foco, controles, bordas significativas e estados. | Cada combinação aplicável atende ao critério WCAG pertinente; registrar cor, fundo, razão e critério, não só o valor de uma variável. | Cálculo estático histórico para foco/borda; auditoria integral pendente |
| AUD-16 | Conteúdo fictício | Buscar nomes, links, marcas, logotipos e dados de exemplo. | Nada sugere vínculo oficial real nem apresenta dados pessoais/clinicamente identificáveis. | Não executado nesta auditoria |
| AUD-17 | Coerência pedagógica | Mapear objetivo → instrução → escolha → feedback → teste. | Cada cenário pratica uma habilidade específica; feedback explica por que a escolha é segura; não se confunde com aconselhamento clínico. | Matriz a completar |
| AUD-18 | Benchmark | Comparar cada função com os recursos do benchmark. | A documentação diferencia funções já presentes em outros recursos de hipóteses de contribuição; não alega originalidade não demonstrada. | Benchmark exploratório concluído; comparação aprofundada pendente |
| AUD-19 | Integridade da distribuição | Abrir a página da forma planejada para entrega e verificar caminhos de CSS/JS. | Recursos locais carregam sem dependência de serviço externo durante o uso. | Não executado nesta auditoria |
| AUD-20 | Evidência de execução | Conferir logs/testes e associar cada resultado ao commit correto. | Resultados automatizados e manuais são separados; testes não executados não são apresentados como concluídos. | Não executado nesta auditoria |

## 5. Matriz de rastreabilidade produto–requisito

Preencher depois de inspecionar a versão corrente:

| Requisito | Local do produto | Teste(s) relacionado(s) | Resultado/evidência | Ação |
|---|---|---|---|---|
| B-01 — explicitar demonstração fictícia | Página inicial e seção “Limites desta versão” | AUD-01, AUD-16 | Pendente de auditoria documentada | Conferir clareza e consistência |
| B-02 — não solicitar dados pessoais/clínicos | HTML/JS e todos os painéis | AUD-02, AUD-03 | Pendente de auditoria documentada | Inspecionar campos, rede e armazenamento |
| B-03 — preparar, resolver falha e pedir esclarecimento | Etapas Antes/Durante/Encerrar | AUD-04 a AUD-09, AUD-17 | Cobertura aparente no código; verificação manual pendente | Mapear cada objetivo a um teste |
| B-04 — feedback específico e não punitivo | Feedback de cada cenário | AUD-06 a AUD-10 | Automação histórica cobre feedback; revisão pedagógica pendente | Revisar linguagem e explicação |
| B-05 — alternativa segura diante de falha/link suspeito | Cenário de entrada e textos de encerramento | AUD-06, AUD-08, AUD-10 | Cobertura aparente no código; revisão de conteúdo pendente | Conferir orientação segura e não clínica |
| B-06 — simplicidade e ausência de conta/conexão externa obrigatória | Arquivos locais de HTML/CSS/JS | AUD-03, AUD-19 | Inspeção estática anterior; execução manual pendente | Conferir versão de distribuição |
| B-07 — acessibilidade aplicável | HTML, CSS e JS | AUD-11 a AUD-15 | Automação histórica parcial; testes manuais pendentes | Executar checklist manual |
| B-08 — alegações proporcionais | Interface e documentação | AUD-01, AUD-17, AUD-18 | Pendente de revisão integrada | Não afirmar eficácia ou validação com usuários |

## 6. Modelo de registro de execução

Copiar e preencher para cada rodada:

- **Data/hora:**
- **Auditor/função (sem dados pessoais desnecessários):**
- **Commit e hashes dos arquivos:**
- **Sistema/navegador/versão:**
- **Viewport/zoom/tecnologia assistiva:**
- **IDs executados:**
- **Resultados por ID (passou/falhou/parcial/não executado/não aplicável):**
- **Defeitos e gravidade:**
- **Correções/commit:**
- **Retestes:**
- **Limitações:**
- **Próxima ação:**

## Registro de inspeção estática inicial — 20/10/2026

Foi feita uma inspeção estática parcial dos arquivos atuais de HTML, JavaScript e CSS, sem executar o protótipo no navegador e sem participantes. Resultados, hashes dos arquivos e limites estão no [Registro da auditoria estática do protótipo — 20/10/2026](registro-auditoria-estatica-2026-10-20.md). A inspeção não conclui a auditoria manual: testes de rede/armazenamento no navegador, teclado/foco, zoom, contraste integral, leitor de tela e distribuição continuam pendentes.

## 7. Referências de apoio

- [Benchmark exploratório de recursos existentes](benchmark-recursos-existentes.md).
- [Matriz de evidências e requisitos](matriz-evidencias-requisitos.md).
- [Mapa preliminar de objetivos educativos e tarefas](mapa-objetivos-educativos-e-tarefas.md).
- [Relatório de revisão técnica](relatorio-revisao-tecnica.md).
- [Como executar os testes localmente](como-executar-testes.md).
- [WHO/ITU — Implementation toolkit for accessible telehealth services (2024)](https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities).
- [W3C — Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

**Estado atual:** este roteiro está criado, mas a auditoria manual nele descrita não foi executada por esta alteração documental. A suíte automatizada histórica não deve ser usada para marcar todos os casos como concluídos.
