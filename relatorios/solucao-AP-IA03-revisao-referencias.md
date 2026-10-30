# Solução da pendência AP-IA03 — Revisão e normalização das referências do texto-base

**Data da análise:** 30/10/2026
**Pendência resolvida (rodada 1):** `docs/anteprojeto/pendencias.md` → AP-IA03 ("Revisar referências e normalização bibliográfica, apontando metadados não verificáveis")
**Destinatário:** IA que implementará as alterações no repositório
**Arquivo-base:** `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`, seção REFERÊNCIAS BIBLIOGRÁFICAS e chamadas de citação no corpo
**Relação com outras pendências:** a AP-IA02 (conferir números, incisos e trechos das fontes primárias) **não** foi executada aqui. Quando este documento cita um ponto da AP-IA02, é só para registrar a dependência.

> **Como foi feita a verificação.** Em 30/10/2026, por consulta na web a catálogos de bibliotecas, páginas das revistas e das editoras, diários oficiais e sites oficiais dos órgãos. O ambiente de execução não tinha acesso à rede para abrir cada PDF ou resolver DOIs. Por isso cada linha da seção 2 informa **o que foi confirmado e em que tipo de fonte**. Nada foi preenchido de memória.
> Os números de linha valem para os arquivos de 30/10/2026. Localize sempre pelo **texto**.

---

## 1. Regras de implementação

1. **Não marcar AP-IA03 como concluída.** Restam itens que dependem de acesso à rede ou de decisão de estilo (seção 8). Registre "rodada 1 executada" (ver seção 7).
2. **Não preencher** `Acesso em: [DATA]` por conta própria, exceto onde a seção 4 autoriza (data já registrada no repositório). A data de acesso é a do dia em que alguém **abre** o link.
3. **Manter o símbolo ▲** em toda entrada que continuar com algum metadado não confirmado. Remover só nas entradas que a seção 2 marca como "Confirmada".
4. **Manter os marcadores `[CONFIRMAR]` do corpo do texto** que dependem da AP-IA02. A seção 5 só altera os que esta rodada resolveu.
5. **Não incluir referências que não sejam citadas no texto** (regra já registrada em `docs/fundamentacao/referencias-e-busca-bibliografica.md`). A única entrada nova (Portaria SGD/MGI nº 6.618/2024) entra porque o texto passa a citá-la (edição R5).
6. As edições da seção 5 precisam ser aplicadas **na ordem indicada**, porque as letras `2024a/b/c` mudam de significado e uma troca fora de ordem gera colisão. Rode o script da seção 9 ao final.
7. Cada trecho "antigo" deve existir uma única vez. Se não for encontrado, **pare e registre**.

---

## 2. Resultado da verificação, entrada por entrada

Legenda: **Confirmada** = metadados conferidos em fonte independente; **Corrigida** = havia erro; **Parcial** = confirmada em parte; **Não verificada** = não foi possível nesta rodada.

| # | Entrada | Situação | O que foi confirmado | Fonte consultada |
|---|---|---|---|---|
| 1 | HEVNER et al., 2004 | **Confirmada** | *MIS Quarterly*, v. 28, n. 1, p. 75–105, mar. 2004; DOI 10.2307/25148625; 4 autores (Hevner, March, Park, Ram) | Página da revista no repositório da Univ. do Arizona, DBLP, PDF do artigo, índices bibliográficos |
| 2 | PEFFERS et al., 2007 | **Confirmada** | *Journal of Management Information Systems*, v. 24, n. 3, p. 45–77; DOI 10.2753/MIS0742-1222240302; 4 autores. A revista indexa como 2007; o PDF traz "Winter 2007–8" e © 2008. **Manter 2007**, que é o ano do índice da revista | Site do JMIS, Taylor & Francis (cabeçalho do PDF) |
| 3 | ISSENBERG et al., 2005 | **Confirmada** | *Medical Teacher*, v. 27, n. 1, p. 10–28; DOI 10.1080/01421590500046924; 5 autores (Issenberg, McGaghie, Petrusa, Gordon, Scalese) | PDF no CORE, PubMed (via QxMD), Taylor & Francis |
| 4 | KNOWLES; HOLTON; SWANSON, 2015 | **Confirmada** | 8. ed.; London: Routledge, 2015; ISBN 9780415739016 (capa dura) | Catálogos de bibliotecas (Doshisha, Texas A&M, Masaryk), editora |
| 5 | NIELSEN, 1993 | **Corrigida** | O local é **Boston**, não San Diego: Boston: Academic Press, 1993; xiv, 358 p. A reimpressão "updated ed." é da Morgan Kaufmann (San Francisco), com a mesma data | Catálogos de bibliotecas (ECU, outras) |
| 6 | SWELLER, 1988 | **Confirmada** | *Cognitive Science*, v. 12, n. 2, p. 257–285; DOI 10.1207/s15516709cog1202_4 | Cabeçalho do PDF, Scinapse. Alguns índices listam também o DOI 10.1016/0364-0213(88)90023-7 (editora anterior); usar o primeiro |
| 7 | W3C, 2014 (WCAG-EM 1.0) | **Confirmada**, com ressalva | Publicada em 10 jul. 2014 como W3C Working Group Note. **Ressalva:** o documento descreve a avaliação de conformidade com a **WCAG 2.0**. O texto-base a aplica à WCAG 2.2 (ver seção 8, item 4) | Anúncio oficial do W3C/WAI |
| 8 | BRASIL, 2018 (LGPD) | **Parcial** | Lei nº 13.709, de 14 ago. 2018; DOU de 15 ago. 2018, seção 1. Páginas "59–64" vêm de uma lista de referências de artigo, **sem conferência no DOU** | Referências de artigo na Rev. Latino-Am. Enfermagem; URL do Planalto citada |
| 9 | BRASIL, 2022 (Lei 14.510) | **Corrigida** | A ementa do texto-base está incompleta. Ementa oficial: "Altera a Lei nº 8.080, de 19 de setembro de 1990, para autorizar e disciplinar a prática da telessaúde em todo o território nacional, e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989, de 15 de abril de 2020." DOU de 28/12/2022, edição 244, seção 1, p. 1 | Planalto, Câmara dos Deputados (publicação original), cópia do DOU |
| 10 | BRASIL, 2024a (Portaria GM/MS 3.232) | **Confirmada** | 1º mar. 2024; DOU de 04/03/2024, edição 43, seção 1, p. 52; altera a Portaria de Consolidação GM/MS nº 5/2017 "para instituir o Programa SUS Digital"; o Programa é instituído "na forma do Anexo CVIII". URL: `https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.232-de-1-de-marco-de-2024-546278935` | Cópia do DOU, CONASS, página de legislação de telessaúde |
| 11 | BRASIL, 2024b (Decreto 12.198) | **Corrigida** | A ementa do texto-base está incompleta: o Decreto também institui a Infraestrutura Nacional de Dados. DOU de 25/09/2024, edição 186, seção 1, p. 13. A URL da Câmara usada no texto-base confere | Câmara (publicação original), Planalto, cópia do DOU |
| 12 | (ausente) Portaria SGD/MGI 6.618/2024 | **Lacuna** | O texto-base cita os **princípios** da Estratégia com a fonte Decreto. Os princípios são **estabelecidos pela Portaria SGD/MGI nº 6.618, de 25 set. 2024** (art. 1º). A Portaria não está na lista | Texto da Portaria reproduzido em base de legislação; planos de transformação digital de órgãos federais |
| 13 | BRASIL, 2012 (CNS 466) | **Corrigida** | Ementa oficial: "Aprova **as** diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos". Publicada no DOU de 13 jun. 2013, seção 1, p. 59–62 (duas fontes secundárias; o número da edição diverge entre elas e **não deve ser informado**) | Revistas SciELO (Bioética), lista de resoluções |
| 14 | BRASIL, 2016 (CNS 510) | **Corrigida** | Ementa oficial completa (ver seção 4). DOU nº 98, de 24/05/2016, seção 1, p. 44–46 | Cópia do DOU, SciELO, CEP de universidades |
| 15 | GALVIN et al., 2024; YANG et al., 2024; NORMAN; SKINNER, 2006 | **Não reverificada** | O repositório já os registra como verificados (PMID, DOI). Esta rodada não repetiu a conferência | — |
| 16 | WHO; ITU, 2022 e 2024 | **Não verificada** | O repositório os registra como verificados; URLs não abertas nesta rodada | — |
| 17 | W3C, 2024 (WCAG 2.2) | **Não verificada** | Não foi consultada. A data "12 dez. 2024" deve ser conferida na página da Recomendação (ver seção 8, item 3) | — |
| 18 | CGI.br 2026a e 2026b | **Não verificada** | URLs e títulos pertencem à AP-IA02 (números dos indicadores) | — |
| 19 | BAHIA, BRIDGINGAPPS, UNITED STATES | **Não verificada** | URLs não abertas. O repositório registra consulta em 20/10/2026 | — |

---

## 3. Achados e correções necessárias

| ID | Grav. | Achado | Ação |
|---|---|---|---|
| R1 | M | **Erro de local de publicação** em Nielsen (1993): "San Diego" deveria ser "Boston". | Corrigir na lista (seção 4). |
| R2 | M | **Ementas truncadas ou alteradas** em Lei 14.510, Decreto 12.198, CNS 466 e CNS 510. Em legislação, a ementa deve ser transcrita como na fonte oficial. | Substituir pelas ementas completas (seção 4). |
| R3 | M | **Faltam DOI e dados de periódico** em Hevner, Peffers, Issenberg e Sweller; **faltam dados do DOU** (seção, página, número) em todas as normas. | Completar (seção 4). |
| R4 | M | **Chamadas ≠ entradas da lista** (entidades): no texto aparece `CGI.BR`, `WHO; ITU` e `W3C`; na lista, o elemento de entrada é o nome por extenso (`COMITÊ GESTOR DA INTERNET NO BRASIL`, `WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION`, `WORLD WIDE WEB CONSORTIUM`). A chamada deve usar o mesmo elemento da entrada. | Edições E5 a E7. Alternativa na seção 8. |
| R5 | M | **Princípios da Estratégia citados à fonte errada.** O texto atribui ao Decreto os princípios "centrado no cidadão e inclusivo" e "confiável, seguro...". Eles são estabelecidos pela **Portaria SGD/MGI nº 6.618/2024**. | Acrescentar a Portaria à lista e ajustar o parágrafo (E3, E4). |
| R6 | M | **Letras `2024a/b/c` dependem da ordem da lista.** Com a nova entrada e a ordenação alfabética das entradas "BRASIL", as letras mudam: Decreto = 2024a; Portaria SGD/MGI = 2024b; Portaria GM/MS = 2024c. | Reordenar a lista e renumerar as chamadas (E1, E2, E3). |
| R7 | B | **Formas diferentes de chamada para o mesmo conjunto**: `(WHO; ITU, 2022; WHO; ITU, 2024)` e `(WHO; ITU, 2022; 2024)`; `(BRASIL, 2012; BRASIL, 2016)`; `(W3C, 2014; W3C, 2024)`. Para mesma autoria e anos diferentes, usar `(AUTOR, ano, ano)`. | E5 a E8. |
| R8 | B | **Uso inconsistente de "et al." na lista.** Galvin (6 autores), Hevner (4) e Peffers (4) estão com todos os autores; Issenberg e Yang usam "et al.". A norma admite as duas formas, mas a lista deve ser uniforme. As chamadas já usam "et al." para 4 ou mais autores. | Uniformizar com "primeiro autor + et al." (seção 4). Conferir na NBR 6023:2018. |
| R9 | B | **Cabeçalho da seção cita "Apêndice B3"**, que não existe no DOCX e que o critério de aceite do relatório 03 proíbe (nenhuma remissão ao repositório no corpo). | E9. |
| R10 | M | **Afirmação sobre Issenberg et al. (2005) está imprecisa** (`[CONFIRMAR a formulação]`). A revisão informa que o feedback foi a característica **mais citada** nos 109 estudos que a sustentam (51 artigos, 47%) como a mais importante. Não afirma que o feedback seja o elemento "mais associado à aprendizagem efetiva". Além disso, a revisão trata de simulações médicas de **alta fidelidade**; a transferência para um simulador web é inferência de design. | E10. |
| R11 | B | **Seção B3 duplicada** em `docs/fundamentacao/referencias-e-busca-bibliografica.md` (linhas 175–202 e 204–230, conteúdo idêntico) e **desatualizada** (marca Hevner, Peffers, Knowles, Sweller, Issenberg e Nielsen como "metadados de memória; conferir"). | Seção 6. |
| R12 | M | **Pista para a AP-IA02 e a revisão ética** (não verificada): uma página de legislação de um CEP lista o "Ofício Circular nº 17/2022/CONEP/SECNS/MS — Orientações acerca do artigo 1º da Resolução CNS nº 510/2016". O texto-base ainda tem `[CONFIRMAR o inciso]` sobre esse artigo. Conferir o conteúdo do ofício antes de afirmar o enquadramento. | Registrar no relatório de evidência; **não** alterar o texto. |
| R13 | B | **Artigos citados "art. 8º" e "art. 2º" da Portaria 3.232** pertencem ao **Anexo CVIII**, e não ao corpo da Portaria (o corpo tem 4 artigos e institui o Programa "na forma do Anexo CVIII"). | Na AP-IA02, conferir a numeração e, se confirmada, citar como `Anexo CVIII, art. 8º`. Não alterar agora. |

---

## 4. Lista de referências proposta (substitui a seção REFERÊNCIAS BIBLIOGRÁFICAS)

Ordenação alfabética pelo elemento de entrada. Para as entradas "BRASIL", a ordem é pelo texto que segue "BRASIL." (Conselho…, Decreto…, Lei 13.709, Lei 14.510, Ministério da Gestão…, Ministério da Saúde…). **A regra de ordenação das entradas de uma mesma jurisdição deve ser conferida na NBR 6023:2018**, que não foi consultada. Se a regra for outra, ajuste a ordem e recalcule as letras.

Manter a frase introdutória, com a edição E9. `Acesso em: [DATA]` permanece onde está; a nota de cada entrada diz quando já há data registrada.

```
BAHIA. Secretaria da Saúde. Telessaúde Bahia. *Como acessar sua teleconsulta: tutorial do paciente*. Salvador: SESAB, [s.d.]. Disponível em: https://telessaude.saude.ba.gov.br/25181-2/. Acesso em: [DATA].

BRASIL. Conselho Nacional de Saúde. Resolução nº 466, de 12 de dezembro de 2012. Aprova as diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. *Diário Oficial da União*: seção 1, Brasília, DF, p. 59-62, 13 jun. 2013. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Conselho Nacional de Saúde. Resolução nº 510, de 7 de abril de 2016. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais cujos procedimentos metodológicos envolvam a utilização de dados diretamente obtidos com os participantes ou de informações identificáveis ou que possam acarretar riscos maiores do que os existentes na vida cotidiana, na forma definida nesta Resolução. *Diário Oficial da União*: seção 1, Brasília, DF, n. 98, p. 44-46, 24 maio 2016. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Decreto nº 12.198, de 24 de setembro de 2024. Institui a Estratégia Federal de Governo Digital para o período de 2024 a 2027 e a Infraestrutura Nacional de Dados, no âmbito dos órgãos e das entidades da administração pública federal direta, autárquica e fundacional. *Diário Oficial da União*: seção 1, Brasília, DF, n. 186, p. 13, 25 set. 2024. Disponível em: https://www2.camara.leg.br/legin/fed/decret/2024/decreto-12198-24-setembro-2024-796286-publicacaooriginal-173095-pe.html. Acesso em: [DATA].

BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD). *Diário Oficial da União*: seção 1, Brasília, DF, p. 59-64, 15 ago. 2018. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm. Acesso em: [DATA]. ▲

BRASIL. Lei nº 14.510, de 27 de dezembro de 2022. Altera a Lei nº 8.080, de 19 de setembro de 1990, para autorizar e disciplinar a prática da telessaúde em todo o território nacional, e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989, de 15 de abril de 2020. *Diário Oficial da União*: seção 1, Brasília, DF, n. 244, p. 1, 28 dez. 2022. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14510.htm. Acesso em: [DATA].

BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. Secretaria de Governo Digital. Portaria SGD/MGI nº 6.618, de 25 de setembro de 2024. Estabelece princípios, objetivos e iniciativas da Estratégia Federal de Governo Digital para 2024-2027 na administração pública federal. *Diário Oficial da União*: seção 1, Brasília, DF, [n., p. e data de publicação a CONFIRMAR]. Disponível em: [URL oficial]. Acesso em: [DATA]. ▲

BRASIL. Ministério da Saúde. Portaria GM/MS nº 3.232, de 1º de março de 2024. Altera a Portaria de Consolidação GM/MS nº 5, de 28 de setembro de 2017, para instituir o Programa SUS Digital. *Diário Oficial da União*: seção 1, Brasília, DF, n. 43, p. 52, 4 mar. 2024. Disponível em: https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.232-de-1-de-marco-de-2024-546278935. Acesso em: [DATA].

BRIDGINGAPPS. *Digital House Calls*: curso autoguiado. [S. l.]: BridgingApps, [s.d.]. Disponível em: https://bridgingapps.org/courses-landing/. Acesso em: [DATA].

COMITÊ GESTOR DA INTERNET NO BRASIL. Núcleo de Informação e Coordenação do Ponto BR. *TIC Saúde 2025*: resumo executivo. São Paulo: CGI.br, 2026a. Disponível em: https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260512115440/TIC_SAUDE_2025_PT_resumoexecutivo.pdf. Acesso em: [DATA]. ▲

COMITÊ GESTOR DA INTERNET NO BRASIL. Núcleo de Informação e Coordenação do Ponto BR. *TIC Domicílios 2025*: resumo executivo. São Paulo: CGI.br, 2026b. Disponível em: https://www.cetic.br/media/docs/publicacoes/2/pt-br/20260511173151/tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: [DATA]. ▲

GALVIN, E. et al. Training service users in the use of telehealth: scoping review. *Journal of Medical Internet Research*, v. 26, e57586, 2024. DOI: 10.2196/57586.

HEVNER, A. R. et al. Design science in information systems research. *MIS Quarterly*, v. 28, n. 1, p. 75-105, mar. 2004. DOI: 10.2307/25148625.

ISSENBERG, S. B. et al. Features and uses of high-fidelity medical simulations that lead to effective learning: a BEME systematic review. *Medical Teacher*, v. 27, n. 1, p. 10-28, 2005. DOI: 10.1080/01421590500046924.

KNOWLES, M. S.; HOLTON III, E. F.; SWANSON, R. A. *The adult learner*: the definitive classic in adult education and human resource development. 8. ed. London: Routledge, 2015.

NIELSEN, J. *Usability engineering*. Boston: Academic Press, 1993.

NORMAN, C. D.; SKINNER, H. A. eHealth literacy: essential skills for consumer health in a networked world. *Journal of Medical Internet Research*, v. 8, n. 2, e9, 2006. DOI: 10.2196/jmir.8.2.e9.

PEFFERS, K. et al. A design science research methodology for information systems research. *Journal of Management Information Systems*, v. 24, n. 3, p. 45-77, 2007. DOI: 10.2753/MIS0742-1222240302.

SWELLER, J. Cognitive load during problem solving: effects on learning. *Cognitive Science*, v. 12, n. 2, p. 257-285, 1988. DOI: 10.1207/s15516709cog1202_4.

UNITED STATES. Department of Health and Human Services. *Telehealth.HHS.gov*: preparing patients for telehealth. Washington, DC: HHS, [s.d.]. Disponível em: https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth. Acesso em: [DATA].

WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION. *WHO-ITU global standard for accessibility of telehealth services*. Geneva: WHO, 2022. Disponível em: https://www.who.int/publications/i/item/9789240050464. Acesso em: [DATA].

WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION. *Implementation toolkit for accessible telehealth services*. Geneva: WHO; ITU, 2024. Disponível em: https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities. Acesso em: [DATA].

WORLD WIDE WEB CONSORTIUM. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 dez. 2024. Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: [DATA].

WORLD WIDE WEB CONSORTIUM. *Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0*. W3C Working Group Note, 10 jul. 2014. Disponível em: https://www.w3.org/TR/WCAG-EM/. Acesso em: [DATA].

YANG, Y. et al. Improving the eHealth literacy of older adults: a scoping review. *Geriatric Nursing*, v. 60, p. 128-136, 2024. DOI: 10.1016/j.gerinurse.2024.07.028.
```

**Observações sobre a lista:**
- Os dois blocos de BRASIL em que a URL é `[URL oficial]` (CNS 466 e 510) e a Portaria SGD/MGI não tiveram URL confirmada. Páginas de terceiros citam `http://conselho.saude.gov.br/resolucoes/2016/Reso510.pdf` (CNS 510) e `https://bvsms.saude.gov.br/bvs/saudelegis/cns/2013/res0466_12_12_2012.html` (CNS 466). **Use-as somente depois de abrir e confirmar.**
- **Data de acesso já registrada no repositório:** `docs/fundamentacao/referencias-e-busca-bibliografica.md` informa "Páginas consultadas em 20/10/2026" para BridgingApps, HHS e Telessaúde Bahia. Se `docs/fundamentacao/benchmark-recursos-existentes.md` confirmar a data **por URL**, preencher `Acesso em: 20 out. 2026` nessas três entradas. Se não confirmar, manter `[DATA]`.
- As entradas de Galvin, Hevner e Peffers passam de "todos os autores" para "primeiro autor + et al." (R8). Isso não altera as chamadas.
- Removidos os ▲ de Hevner, Peffers, Issenberg, Knowles, Nielsen, Sweller, W3C 2014, Lei 14.510, Decreto 12.198 e Portaria GM/MS 3.232. Mantidos em: CNS 466 e 510 (URL e páginas só de fonte secundária), LGPD (páginas), Portaria SGD/MGI (dados do DOU), CGI.br (AP-IA02).

---

## 5. Edições no corpo do texto (aplicar na ordem)

Todas em `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`.

**Renumeração das letras de 2024 (R6).** Aplicar **nesta ordem** para evitar colisão: E1, E2, E3.

- **E1 — Portaria GM/MS: `2024a` → `2024c`.** Três ocorrências (Introdução e duas na seção "Relevância e magnitude"):
  - `(BRASIL, 2024a)` → `(BRASIL, 2024c)` (Introdução, depois de "cultura da saúde digital")
  - `(BRASIL, 2024a, art. 8º)` → `(BRASIL, 2024c, art. 8º)`
  - `(BRASIL, 2024a, art. 2º)` → `(BRASIL, 2024c, art. 2º)`
- **E2 — Decreto: `2024b` → `2024a`.** Uma ocorrência, no parágrafo da Estratégia de Governo Digital:
  - Antigo: `instituída pelo Decreto nº 12.198/2024 (BRASIL, 2024b).`
  - Novo: `instituída pelo Decreto nº 12.198/2024 (BRASIL, 2024a).`
- **E3 — Princípios pela Portaria SGD/MGI (R5), mesma passagem:**
  - Antigo: `Entre seus princípios estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no Decreto e no ato que a detalha, Portaria SGD/MGI nº 6.618/2024].`
  - Novo: `Os princípios da Estratégia foram estabelecidos pela Portaria SGD/MGI nº 6.618/2024 (BRASIL, 2024b); entre eles estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no art. 1º da Portaria SGD/MGI nº 6.618/2024].`
  - O que sustenta a mudança: o texto da Portaria, consultado nesta rodada, diz que ela estabelece os princípios a serem observados pela Estratégia (art. 1º). A **redação exata** dos dois princípios entre aspas **não foi conferida** e continua sob `[CONFIRMAR]` (AP-IA02).
- **E4 — Marcador `[CONFIRMAR]` do Decreto:** já incorporado em E3. Nenhuma outra alteração.

**Chamadas de entidades (R4, R7). Aplicar uma vez por ocorrência; conferir as contagens:**

- **E5 — CGI.br.** Substituir `CGI.BR, 2026a` por `COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a` (3 ocorrências) e `CGI.BR, 2026b` por `COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b` (4 ocorrências).
- **E6 — OMS/UIT.** Duas formas, uma ocorrência cada:
  - `(WHO; ITU, 2022; WHO; ITU, 2024)` → `(WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION, 2022, 2024)` (Introdução)
  - `(WHO; ITU, 2022; 2024)` → `(WORLD HEALTH ORGANIZATION; INTERNATIONAL TELECOMMUNICATION UNION, 2022, 2024)` (seção "Equidade e diversidade")
- **E7 — W3C.** `(W3C, 2014; W3C, 2024)` → `(WORLD WIDE WEB CONSORTIUM, 2014, 2024)` (Método, Etapa 4, Camada 0).
- **E8 — BRASIL (Resoluções).** `(BRASIL, 2012; BRASIL, 2016)` → `(BRASIL, 2012, 2016)` (Aspectos Éticos).

Se o Programa ou a orientação preferirem chamadas por sigla, **não aplicar E5–E7** e use a alternativa da seção 8, item 5.

**Cabeçalho da seção de referências (R9):**
- **E9** — Antigo: `Entradas marcadas com ▲ ainda têm metadados a conferir (Apêndice B3).` Novo: `Entradas marcadas com ▲ ainda têm metadados a conferir.`

**Afirmação sobre Issenberg et al. (R10) — Introdução, parágrafo sobre referencial de aprendizagem:**
- **E10** — Antigo: `Uma revisão sistemática de simulações médicas identificou o feedback como o elemento mais associado à aprendizagem efetiva (ISSENBERG et al., 2005) [CONFIRMAR a formulação].`
- Novo: `Uma revisão sistemática de simulações médicas de alta fidelidade apontou o feedback como a característica mais frequentemente citada nos estudos incluídos como importante para a aprendizagem (ISSENBERG et al., 2005). A transferência desse achado para um simulador web é uma inferência de design.`
- O marcador `[CONFIRMAR a formulação]` é removido porque a nova redação descreve o que a revisão relata (51 de 109 artigos, 47%). **Não acrescentar esses números ao texto** sem leitura do artigo completo.

---

## 6. Atualizações no repositório fora do texto-base

1. **`docs/fundamentacao/referencias-e-busca-bibliografica.md`.** Manter **uma só** seção "Lista consolidada do anteprojeto (v1)" (apagar o bloco duplicado das linhas 204–230) e atualizar a tabela B3 assim:

| Citação no texto | Referência | Verificação |
|---|---|---|
| (BRASIL, 2024a) | Decreto nº 12.198/2024 | **Confirmada** (DOU 25/09/2024, seção 1, p. 13; ementa corrigida). Ver 30/10/2026 |
| (BRASIL, 2024b) | Portaria SGD/MGI nº 6.618/2024 | Existência e objeto confirmados; **dados do DOU e redação dos princípios a conferir** |
| (BRASIL, 2024c) | Portaria GM/MS nº 3.232/2024 | **Confirmada** (DOU 04/03/2024, seção 1, p. 52); artigos do Anexo CVIII a conferir (AP-IA02) |
| (BRASIL, 2022) | Lei nº 14.510/2022 | **Confirmada** e ementa corrigida (DOU 28/12/2022, seção 1, p. 1) |
| (BRASIL, 2018) | Lei nº 13.709/2018 | Metadados confirmados; **páginas do DOU a conferir** |
| (BRASIL, 2012, 2016) | Res. CNS 466/2012 e 510/2016 | Ementas e datas do DOU confirmadas; **URL oficial a inserir** |
| (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a, 2026b) | TIC Saúde 2025; TIC Domicílios 2025 | Números a conferir (AP-IA02) |
| (HEVNER et al., 2004); (PEFFERS et al., 2007) | DSR | **Confirmadas** (DOI, volume, páginas) |
| (KNOWLES; HOLTON; SWANSON, 2015); (SWELLER, 1988); (NIELSEN, 1993) | Referencial de aprendizagem e usabilidade | **Confirmadas** (Nielsen corrigido: Boston) |
| (ISSENBERG et al., 2005) | Revisão BEME | **Confirmada**; formulação ajustada no texto (R10) |
| (WORLD WIDE WEB CONSORTIUM, 2014, 2024) | WCAG-EM 1.0 e WCAG 2.2 | WCAG-EM **confirmada** (ressalva: descreve a WCAG 2.0); WCAG 2.2 já "verificada no repositório" |

   As linhas de Galvin, Yang, Norman e Skinner, OMS/UIT e recursos do benchmark permanecem como estão, ajustadas apenas às novas formas de chamada.

2. **Relatório de evidência:** criar `docs/anteprojeto/registros/auditoria-referencias-2026-10-30.md` com as seções 2 e 3 deste documento e o resultado do script da seção 9. Se a AP-IA01 também criou a pasta `registros/`, usar a mesma e linkar ambos no `docs/anteprojeto/README.md`.

---

## 7. Atualização de `docs/anteprojeto/pendencias.md`

1. Manter o item AP-IA03 **desmarcado** e acrescentar ao fim: ` **Situação:** rodada 1 executada em 30/10/2026 (metadados de 12 entradas conferidos, 6 correções, 1 lacuna); relatório em registros/auditoria-referencias-2026-10-30.md. Pendentes: datas de acesso, URLs oficiais das resoluções CNS, dados do DOU da Portaria SGD/MGI, WCAG 2.2, CGI.br, OMS/UIT, recursos do benchmark.`
2. Acrescentar à tabela Histórico: `| 30/10/2026 | AP-IA03, rodada 1: verificação bibliográfica; correção de local (Nielsen), ementas (Lei 14.510, Decreto 12.198, CNS 466 e 510), DOI e dados de periódico; inclusão da Portaria SGD/MGI 6.618/2024; harmonização das chamadas. Item permanece aberto. |`
3. Atualizar o campo `**Atualização:**` do cabeçalho.
4. Se a AP-IA02 for executada depois, ela deve **reusar** a tabela B3 atualizada, e não refazê-la.

---

## 8. O que ficou em aberto (exige rede, abertura de links ou decisão)

| # | Item | Quem resolve |
|---|---|---|
| 1 | **Datas de acesso** (`Acesso em: [DATA]`) de todas as entradas online. Só preencher com a data em que o link for efetivamente aberto e conferido | Candidato ou IA com navegação |
| 2 | **URLs oficiais** das Resoluções CNS 466 e 510 e da Portaria SGD/MGI 6.618/2024; **dados do DOU** da Portaria (data, edição, página). Uma base de legislação indica 26/09/2024, sem conferência | IA com navegação |
| 3 | **WCAG 2.2:** não consultada. Conferir se "W3C Recommendation, 12 dez. 2024" é a data da versão efetivamente consultada, ou se deve constar a data da primeira Recomendação e a de atualização | IA com navegação |
| 4 | **WCAG-EM 1.0 × WCAG 2.2:** a nota descreve avaliação de conformidade com a WCAG 2.0. Acrescentar ao Método uma frase como "adaptada à WCAG 2.2" só depois de decidir como será aplicada (AP-H04) | Candidato + orientação |
| 5 | **Forma de citação das entidades:** o plano usa o nome por extenso (E5–E7). A alternativa é entrada e chamada pela sigla (`CGI.BR`, `WHO; ITU`, `W3C`), com o nome por extenso dentro da entrada. Conferir o manual de normalização do Programa ou da UERJ e a NBR 10520:2023 | Candidato + orientação |
| 6 | **Regra de ordenação** das entradas "BRASIL" e **uso de "et al."** na lista (R8): conferir na NBR 6023:2018 | Candidato (norma paga) |
| 7 | **Entradas não reverificadas:** Galvin, Yang, Norman e Skinner, OMS/UIT, Bahia, BridgingApps, HHS | IA com navegação (AP-IA02) |
| 8 | **Conteúdo do Ofício Circular nº 17/2022/CONEP/SECNS/MS** e inciso do art. 1º da Res. 510 (R12), e numeração dos artigos do Anexo CVIII (R13) | AP-IA02 |

---

## 9. Verificação após as edições

Execute na raiz do repositório e cole a saída no relatório. Todas as linhas devem ser `OK`.

```python
import re
p = "docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md"
t = open(p, encoding="utf-8").read()
corpo, refs = t.split("## REFERÊNCIAS BIBLIOGRÁFICAS")
refs = refs.split("## CHECKLIST")[0]

def check(nome, cond): print(("OK   " if cond else "FALHA"), nome)

# 1. letras 2024 e conteúdo das entradas
check("Decreto = 2024a, Portaria SGD/MGI = 2024b, Portaria GM/MS = 2024c (ordem na lista)",
      refs.index("Decreto nº 12.198") < refs.index("Portaria SGD/MGI") < refs.index("Portaria GM/MS nº 3.232"))
check("chamadas 2024a/2024b/2024c existem no corpo",
      all(f"BRASIL, 2024{x}" in corpo for x in "abc"))
check("nenhuma chamada 2024b aponta mais para o Decreto",
      "Decreto nº 12.198/2024 (BRASIL, 2024b)" not in corpo)

# 2. formas antigas de chamada eliminadas
for ruim in ("CGI.BR,", "WHO; ITU,", "W3C, 2014; W3C", "BRASIL, 2012; BRASIL"):
    check(f'forma antiga ausente: "{ruim}"', ruim not in corpo)

# 3. correções de metadados
check("Nielsen: Boston", "NIELSEN, J. *Usability engineering*. Boston" in refs)
for doi in ("10.2307/25148625", "10.2753/MIS0742-1222240302",
            "10.1080/01421590500046924", "10.1207/s15516709cog1202_4"):
    check(f"DOI presente: {doi}", doi in refs)
check("ementa da Lei 14.510 completa", "e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989" in refs)
check('sem "Apêndice B3" no texto-base', "Apêndice B3" not in t)

# 4. correspondência 1:1 (chamadas autor-ano x entradas)
entradas = [l for l in refs.split("\n") if l.strip() and l[0].isupper()]
sobrenomes = {"GALVIN","HEVNER","ISSENBERG","KNOWLES","NIELSEN","NORMAN","PEFFERS","SWELLER","YANG"}
citados = set(re.findall(r"\(([A-ZÀ-Ú]{3,})\b", corpo)) | set(re.findall(r";\s*([A-ZÀ-Ú]{3,})\b", corpo))
check("autores individuais citados têm entrada",
      all(any(e.startswith(s) for e in entradas) for s in sobrenomes if s in citados or s.title() in corpo.upper()))
check("ordem alfabética das entradas",
      [e.split(".")[0] for e in entradas] == sorted([e.split(".")[0] for e in entradas], key=lambda s: s.upper()))

# 5. pendências mantidas
print("\nMarcadores [CONFIRMAR]/[DATA] restantes:",
      len(re.findall(r"\[(?:CONFIRMAR|DATA|URL)[^\]]*\]", t)))
```

**Critérios de aceite**
- Todas as linhas em `OK` (a verificação de ordem alfabética depende da regra de ordenação das entradas "BRASIL"; se falhar só por isso, registrar e conferir na norma).
- Nenhum `[CONFIRMAR]` ligado à AP-IA02 foi removido; só foram alterados o de Issenberg (E10) e o texto do de Portaria SGD/MGI (E3).
- Nenhum `Acesso em: [DATA]` foi preenchido sem a condição da seção 4.
- B3 única e atualizada em `referencias-e-busca-bibliografica.md`; relatório de evidência criado e linkado; `pendencias.md` com AP-IA03 aberta, situação e histórico.
