# Nota de evidências e decisões para o Treino de Teleconsulta

**Data:** 20/10/2026  
**Tema ativo:** Tema 4 — Treino de Teleconsulta: simulador educativo para usuários com baixa familiaridade digital.  
**Tipo desta nota:** verificação exploratória de fontes abertas e consequência prática para o projeto. **Não** é relato de uma busca executada nas interfaces PubMed/MEDLINE, BVS/LILACS ou SciELO, nem revisão sistemática concluída.

## 1. Achado central para o anteprojeto

A revisão de escopo de Galvin et al. mapeou estudos sobre treinamento de usuários para teleconsultas síncronas. O artigo descreve iniciativas em que a preparação era frequentemente feita por telefonema individual, com instruções escritas, para ensinar configurações, instalação de software e resolução de problemas técnicos. Os autores encontraram evidência limitada e mista de que essas atividades melhoravam a competência dos usuários e recomendaram mais estudos, habilidades digitais mais amplas e codesenho.

**Implicação para o Treino de Teleconsulta:** há uma base científica diretamente pertinente ao tema, mas isso não prova a eficácia do nosso produto. A contribuição proposta deve ser estudada como um recurso educativo interativo específico e comparada com soluções existentes. A revisão de Galvin não cobre, por si só, a literatura posterior nem os recursos em português; nossa busca continua necessária.

Referência: Galvin E, Desselle S, Gavin B, McNicholas F, Cullinan S, Hayden J. *Training Service Users in the Use of Telehealth: Scoping Review*. Journal of Medical Internet Research. 2024;26:e57586. DOI: https://doi.org/10.2196/57586. Texto: https://www.jmir.org/2024/1/e57586.

## 2. Recursos existentes a comparar — não presumir lacuna de inovação

| Recurso | O que foi possível confirmar na fonte aberta | Como usar no projeto | Limitação desta verificação |
|---|---|---|---|
| **Digital House Calls — BridgingApps** | A página do mantenedor descreve um curso gratuito, autoguiado, com vídeos reais e animados e um plano de preparo para antes, durante e depois da telemedicina. A página oferece versões em inglês e espanhol. | Comparar sequência pedagógica, divisão antes/durante/depois, formatos multimídia e possibilidade de prática. Ajuda a evitar dizer que não existem recursos autoguiados. | A página de apresentação foi consultada; não foi feita uma avaliação completa de todas as lições, funcionamento e acessibilidade. |
| **Patient Telehealth Readiness Assessment Tool — National Center for Farmworker Health (NCFH)** | A biblioteca oficial lista uma ferramenta com esse nome. | Inspecionar a ferramenta integral e verificar como avalia prontidão, identifica necessidades de apoio e sugere encaminhamentos. Pode informar a matriz de dimensões de familiaridade digital. | Nesta verificação, foi consultada a página de apresentação, não validada a escala, suas propriedades psicométricas nem sua adequação ao público brasileiro. |
| **Mobile Device Proficiency Questionnaire (MDPQ), adaptação brasileira** | Artigo de 2024 descreve adaptação transcultural e validade de conteúdo em português brasileiro, com pré-teste em 32 pessoas idosas e dimensões que incluem funções básicas, comunicação, internet, privacidade e resolução de problemas. | Considerar como referência para mapear tarefas digitais e discutir instrumentos. | Não presumir que seja instrumento validado para todos os adultos com baixa familiaridade digital nem que meça, por si só, prontidão para teleconsulta. É necessário ler o texto integral e avaliar versão, propriedades e pertinência com a orientação. |

Fontes:
- Digital House Calls: https://bridgingapps.org/courses-landing/
- NCFH: https://www.ncfh.org/digital-library/patient-telehealth-readiness-assessment-tool/
- Raymundo TM et al. *Adaptação transcultural do Mobile Proficiency Questionnaire e validade de conteúdo para o português brasileiro*. Revista Brasileira de Geriatria e Gerontologia. 2024;27:e230200. DOI: https://doi.org/10.1590/1981-22562024027.230200.pt.

**Conclusão provisória:** não afirmar que o Treino de Teleconsulta é o primeiro ou único simulador autoguiado. A lacuna precisa ser delimitada depois da busca reproduzível e do benchmarking, incluindo recursos brasileiros, cursos autoguiados, vídeos, aplicativos e materiais de telessaúde.

## 3. Definição de “baixa familiaridade digital”

A definição deve referir-se à execução de tarefas específicas de teleconsulta em um dispositivo e contexto definidos, e não a um atributo geral da pessoa. Recomenda-se manter dimensões separadas:
- tarefas que a pessoa já executa de modo independente, com ajuda ou ainda não executa;
- acesso a aparelho e conexão;
- disponibilidade e tipo de apoio;
- experiência anterior e confiança percebida;
- necessidades de acessibilidade, que não são sinônimo de baixa proficiência.

Não usar idade, escolaridade ou deficiência como proxies automáticos. Não adotar um corte numérico, escore ou instrumento sem discussão com a orientação e justificativa. O MDPQ brasileiro pode ajudar a pensar nas categorias de tarefas, mas sua adequação ao público e ao propósito deve ser examinada antes de escolhê-lo.

## 4. Alteração de produto implementada nesta rodada

O protótipo foi ampliado de uma única situação central para **três situações selecionáveis, cada uma com escolhas e feedback condicionado à resposta**:

1. **O link não abre:** a simulação mantém o acesso indisponível e orienta a conferir conexão/link oficial e, se necessário, procurar o serviço pelo contato oficial já conhecido; desestimula compartilhar senha/dados por links suspeitos.
2. **Não consigo ouvir:** permite praticar a conferência do controle de áudio e a comunicação da dificuldade. Não ativa microfone ou áudio real.
3. **Não entendi uma informação:** pratica pedir repetição ou explicação alternativa e confirmar o próximo passo, em vez de fingir que entendeu ou adivinhar.

Os cenários são um protótipo de baixa fidelidade, não uma simulação completa de uma plataforma de videochamada. Os botões são fictícios; não abrem sistemas, não enviam mensagens, não gravam e não armazenam respostas. O rótulo “simulador” e o diferencial pedagógico ainda devem ser discutidos e refinados, tendo em vista os recursos existentes.

## 5. Contraste e acessibilidade

O W3C orienta que a informação visual necessária para identificar componentes e estados da interface tenha contraste mínimo de 3:1 contra as cores adjacentes, quando o critério WCAG 2.2, 1.4.11, for aplicável. Isso não significa que toda borda decorativa esteja automaticamente sujeita ao critério; é necessário avaliar a função da borda.

A variável de borda do protótipo mudou de `#d9e3ec` (aproximadamente 1,30:1 sobre branco) para `#7d8c99`. A verificação estática calcula aproximadamente 3,45:1 sobre branco e 3,21:1 sobre o fundo `#f4f7fb`. O script de qualidade agora verifica contraste de foco e bordas significativas. Os testes automatizados não substituem a inspeção da interface em dispositivos e tecnologias assistivas.

Fonte: W3C, Understanding WCAG 2.2 Success Criterion 1.4.11: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html.

## 6. Decisões metodológicas que continuam pendentes

1. **Uso autônomo, mediado ou ambos:** a literatura inclui treinamentos conduzidos por pessoas. Não presumir que a versão autoguiada alcançará todos os usuários que mais precisam de apoio.
2. **Resultado que o estudo pode afirmar:** priorizar usabilidade, desempenho em tarefas simuladas, necessidade de ajuda e compreensão das instruções. Não afirmar aprendizagem duradoura, maior adesão ou melhora de desfechos clínicos.
3. **Público e elegibilidade:** definir a operacionalização de baixa familiaridade digital antes da coleta e sem critérios estigmatizantes.
4. **Instrumentos:** escolher com a orientação instrumentos e rubricas adequados ao protótipo; não assumir que ferramenta de prontidão ou escala de usabilidade de serviço real serve automaticamente para a avaliação proposta.
5. **Pesquisa com pessoas:** manter a auditoria documental/técnica sem participantes como Camada 0. Qualquer entrevista, recrutamento, teste de pesquisa ou coleta com participantes depende de confirmar e obter as aprovações institucionais e éticas aplicáveis.

## 7. Próximas ações documentáveis

- [ ] Executar as strings da busca nas interfaces oficiais PubMed/MEDLINE, BVS/LILACS e SciELO; guardar data/hora, string final, filtros, totais e exportações.
- [ ] Examinar por inteiro Digital House Calls e a ferramenta NCFH; preencher a matriz comparativa com tarefas, formato, público, idioma, feedback, acessibilidade e evidência de avaliação.
- [ ] Adicionar a revisão de Galvin como evidência-chave e ler seu texto integral, verificando os métodos e limitações antes de citá-la no anteprojeto.
- [ ] Ler o artigo de adaptação do MDPQ e decidir com a orientação se ele informa apenas as dimensões de tarefas ou se algum instrumento poderá ser empregado.
- [ ] Executar os testes automáticos do protótipo após as mudanças e, depois, registrar testes manuais de teclado, zoom, contraste, leitores de tela e dispositivo.
- [ ] Revisar a pergunta, os objetivos e o protocolo com a orientação; não fixar amostra nem critério de corte antes dessa discussão.

**Limite de integridade:** esta nota registra verificações exploratórias de páginas abertas e alterações de engenharia. Não registra uma busca reproduzível concluída nas bases acadêmicas, uma revisão formal da qualidade de evidência, teste manual de acessibilidade nem avaliação com usuários.
