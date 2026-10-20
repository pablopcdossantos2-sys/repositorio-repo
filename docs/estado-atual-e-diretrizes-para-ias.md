# Estado atual do projeto e diretrizes para IAs

**Data da consolidação:** 20/10/2026  
**Branch de referência:** `main`  
**Finalidade:** orientar IAs e colaboradores que retomarem o repositório, mantendo decisões atuais separadas de alternativas históricas e propostas ainda não aprovadas.

> **Leia este documento antes de propor alterações, escrever texto acadêmico ou modificar o protótipo.** Ele consolida a orientação de trabalho mais recente do responsável pelo projeto. Em caso de conflito com rascunhos antigos, listas de tarefas ou propostas metodológicas anteriores, siga as decisões abaixo até que o responsável pelo projeto ou a orientação acadêmica registre uma mudança explícita.

## 1. Diretriz vigente mais importante

O projeto deve começar com **baixa complexidade e nenhuma ou pouca interação com pessoas**.

O plano padrão atual é:

1. revisar e registrar literatura pertinente;
2. mapear e comparar soluções educativas existentes;
3. derivar requisitos e objetivos educativos a partir das fontes, distinguindo evidência publicada de hipótese de design;
4. desenvolver um protótipo web simples;
5. avaliá-lo por inspeção técnica, pedagógica, de linguagem e de acessibilidade, sem participantes.

**Não planejar entrevistas, oficinas, codesenho, observação de usuários, questionários ou testes com pessoas como requisito inicial.** Se o orientador acadêmico disser explicitamente que é necessário testar o protótipo ou colher dados diretamente de pessoas, o projeto será revisto para incluir somente a etapa necessária. Antes disso, não presumir que essa etapa ocorrerá, nem definir amostra, campo, recrutamento ou instrumentos como decisões tomadas.

Esta diretriz não afirma que a avaliação sem participantes será suficiente para a dissertação: isso precisa ser confirmado com a orientação acadêmica e com os requisitos vigentes do curso.

## 2. Identidade e limites do projeto

- **Tema exclusivo:** Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital.
- **Linha de pesquisa:** 2) Tecnologias para Educação em Saúde.
- **Tipo de projeto de trabalho:** pesquisa tecnológica de soluções inovadoras para Ensino e Educação em Saúde ou para Educação à Distância em Saúde.
- **Produto:** simulador educativo web simples para praticar passos digitais de uma teleconsulta fictícia.
- **Público de interesse conceitual:** adultos com baixa familiaridade digital. A definição operacional é pendente e não deve ser inferida automaticamente de idade, escolaridade, deficiência ou diagnóstico.
- **Cenário:** Guaraí-TO é apenas uma possibilidade de articulação; não há parceria ou campo confirmado.
- **Estado acadêmico:** anteprojeto e método permanecem em elaboração, sujeitos à orientação, ao edital e ao modelo institucional vigentes.

As outras ideias/tópicos existentes em registros históricos não são alternativas ativas e não devem redirecionar o produto ou a pesquisa.

## 3. Protótipo existente: o que há e o que não há

A aplicação em `produto/index.html`, `produto/app.js` e `produto/styles.css` é um protótipo demonstrativo de baixa fidelidade, ainda em desenvolvimento. O fluxo atual inclui:

- **Antes:** preparação e checklist;
- **Durante:** situações fictícias “O link não abre”, “Não consigo ouvir” e “Não entendi uma informação”, com opções e feedback;
- **Encerrar:** reinício e/ou próximos passos demonstrativos conforme o estado atual da interface.

O produto deve continuar simples, acessível, sem dependências externas em tempo de uso e sem dados reais. Manter estas restrições:

- não realiza consulta nem contato com profissionais reais;
- não usa áudio ou vídeo ao vivo;
- não se conecta a serviços de saúde, prontuários ou plataformas de teleconsulta;
- não oferece diagnóstico, prescrição, triagem ou aconselhamento clínico individual;
- não deve solicitar, transmitir ou persistir dados pessoais ou clínicos;
- não adicionar contas de usuário, chatbot/IA, integrações, rastreamento ou novas funções complexas sem uma nova justificativa explícita e revisão de escopo.

Todos os nomes, mensagens e situações devem permanecer fictícios e não devem imitar um portal oficial de forma enganosa.

## 4. Evidências e pesquisa bibliográfica: estado real

Já existe uma rodada de busca exploratória complementar na web e documentação inicial de estudos, recursos relacionados e recomendações de acessibilidade. Ela serve para orientar perguntas e requisitos, mas **não é uma busca bibliográfica formal, sistemática ou reproduzível concluída**.

Continuam pendentes:
- executar e documentar buscas nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO;
- registrar strings exatas, datas, filtros, contagens, exportações, deduplicação e critérios de seleção;
- conferir referências e ler criticamente as fontes relevantes;
- completar o benchmarking de guias, vídeos, tutoriais, recursos educativos e simuladores existentes;
- sustentar a lacuna e a contribuição específica do produto sem presumir originalidade.

Não afirmar “revisão sistemática”, “revisão de escopo”, novidade comprovada, validação com usuários ou eficácia sem que o método e as evidências realizadas sustentem essas afirmações. Estudos de simulação para profissionais podem ser evidência metodológica adjacente, mas não devem ser descritos como evidência direta de eficácia para usuários finais.

## 5. Validação técnica conhecida e lacunas

O histórico do repositório registra uma execução de CI bem-sucedida em 20/10/2026: [GitHub Actions #39368979486](https://github.com/pablopcdossantos2-sys/repositorio-repo/actions/runs/39368979486), com 15 verificações estáticas e 22 testes Playwright/axe-core passando após a expansão dos três cenários.

Isso é um resultado histórico de automação, não uma declaração de acessibilidade integral nem validação empírica com público-alvo. Os testes manuais continuam pendentes, incluindo teclado, foco, zoom, telas estreitas, leitor de tela/tecnologia assistiva e dispositivos reais disponíveis. Sempre confira a execução mais recente da CI antes de declarar que a versão atual passou nos testes.

Quando o código ou os fluxos mudarem:
1. executar as verificações locais conforme `docs/como-executar-testes.md`;
2. revisar regressões nos cenários e na reinicialização;
3. conferir a CI correspondente ao commit;
4. atualizar `docs/relatorio-revisao-tecnica.md` e o roadmap com os resultados reais, sem marcar testes manuais como concluídos sem executá-los.

## 6. Prioridades de desenvolvimento, na ordem recomendada

### P0 — Base acadêmica e definição do produto
1. Confirmar com a orientação se o plano sem participantes atende ao requisito acadêmico.
2. Executar a busca bibliográfica reproduzível e concluir o benchmarking.
3. Conferir o edital e o modelo institucional vigentes.
4. Harmonizar pergunta, objetivos, método, produto, título e expectativa de resultado nos documentos do anteprojeto.
5. Definir objetivos educativos observáveis e ligar cada objetivo a uma tarefa e a um critério de verificação.

### P1 — Produto e avaliação técnica sem participantes
6. Revisar conteúdo e fluxo, preservando o escopo enxuto e fictício.
7. Garantir que cada funcionalidade tenha justificativa, requisito e verificação.
8. Realizar auditoria técnica, pedagógica, de linguagem simples, privacidade e acessibilidade.
9. Fazer testes manuais e documentar resultados, problemas em aberto e retestes.

### P2 — Consolidação
10. Atualizar matriz de evidências/requisitos, relatório técnico, anteprojeto e roadmaps após resultados verificáveis.
11. Registrar limitações e preparar uma apresentação clara do produto para discussão com a orientação.
12. Só replanejar participação de pessoas se a orientação indicar sua necessidade.

## 7. Participantes, ética e campo: regra condicional

Não há amostra, recrutamento, campo, parceria, autorização ou aprovação ética presumidos.

Se a orientação solicitar atividade com pessoas:
1. explicitar qual dúvida acadêmica não pode ser respondida por literatura, benchmark e auditoria técnica;
2. propor a menor atividade pertinente e compatível com o tempo do mestrado;
3. consultar a orientação e a instituição sobre autorizações administrativas e necessidade de apreciação ética aplicável;
4. definir protocolo, convite/consentimento, dados, armazenamento, acesso, retenção, descarte e análise antes de iniciar;
5. iniciar somente após confirmar e obter as autorizações pertinentes.

Não realizar “teste informal” com potenciais participantes para contornar esses requisitos. Uma conversa administrativa para explorar viabilidade institucional não deve ser transformada em coleta de dados de pesquisa. Se não houver uma etapa empírica autorizada, descrever o produto como informado por fontes documentais e avaliação técnica — não como codesenhado, validado ou testado por usuários.

## 8. Como interpretar documentos antigos e propostas condicionais

Alguns documentos já contêm tarefas candidatas, rubricas, roteiros ou descrições mais detalhadas de testes com participantes. Eles foram preparados como material de discussão ou como plano alternativo; sua existência não significa que a etapa foi aprovada ou que deva ser executada agora.

- `docs/decisoes-metodologicas.md`: referência detalhada para comparar alternativas metodológicas; interpretar à luz da diretriz sem participantes como padrão.
- `docs/protocolo-preliminar-avaliacao.md`: documento de trabalho, **não aprovado para coleta**; rubricas e tarefas com pessoas são condicionais.
- `docs/anteprojeto-base.md` e `docs/anteprojeto-modelo-uerj.md`: rascunhos em evolução; não assumir que cada frase já foi confirmada pela orientação ou que todo texto está harmonizado com esta consolidação.
- `ROADMAP.md` e `docs/roadmap.md`: listas de pendências, não prova de que algo foi executado. Conferir caixas, links e evidências antes de reportar estado.
- Registros bibliográficos exploratórios: informam próximos passos, mas não substituem a busca formal nas bases.

Se uma passagem antiga contradisser a diretriz vigente, não a reproduzir automaticamente. Sugerir sua correção e harmonizar os documentos afetados.

## 9. Instruções operacionais para qualquer IA que trabalhe no repositório

Antes de executar uma tarefa:

1. Ler este documento; depois consultar `README.md`, `ROADMAP.md` e o documento específico da tarefa.
2. Conferir o conteúdo atual de `main` e os links/commits relevantes; não confiar somente em contexto de conversa anterior ou em um resumo antigo.
3. Respeitar o tema exclusivo, o escopo mínimo e a diretriz sem participantes como padrão.
4. Distinguir fatos implementados, evidências verificadas, decisões registradas, hipóteses e tarefas futuras.
5. Não inventar fontes, resultados de teste, autorizações, parcerias, participantes ou aprovações.
6. Fazer alterações focadas; evitar ampliar o escopo ou criar infraestrutura desnecessária.
7. Se uma decisão de produto ou método mudar, atualizar este documento e os documentos afetados na mesma sequência de trabalho.
8. Após mudanças de código, executar os testes possíveis e reportar exatamente o que passou, falhou ou não foi testado.
9. Após mudanças documentais, conferir que README, roadmap, anteprojeto e protocolo não passaram a dizer coisas incompatíveis.
10. Ao entregar, resumir arquivos alterados, commit, testes executados, limitações e próxima ação objetiva.

### Hierarquia de orientação em caso de conflito

1. Instrução explícita mais recente do responsável pelo projeto.
2. Esta consolidação de estado atual, enquanto refletir as decisões mais recentes.
3. Documento metodológico específico atualizado e decisões formalmente confirmadas pela orientação acadêmica/instituição.
4. README e roadmaps para navegação e tarefas.
5. Rascunhos, roteiros, rubricas candidatas, registros exploratórios e decisões históricas.

Esta hierarquia não permite ignorar exigências formais da instituição ou da orientação acadêmica; ela serve para resolver conflitos entre registros do repositório e evitar que uma proposta antiga seja tomada como decisão.

## 10. Histórico desta consolidação

- **20/10/2026:** registrada a diretriz de começar com um projeto simples, sem ou com pouca interação com pessoas; a inclusão de teste com pessoas fica condicionada à orientação acadêmica. Este documento foi criado para servir como referência de retomada entre diferentes IAs e colaboradores.

**Ao alterar esta diretriz no futuro:** editar a data e o histórico acima, resumir o que mudou e atualizar os documentos dependentes. Não apagar decisões anteriores necessárias para entender por que o escopo foi alterado.
