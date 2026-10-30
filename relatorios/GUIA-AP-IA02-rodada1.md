# Guia de execução — aplicar a rodada 1 da AP-IA02 no repositório

**Destinatário:** IA com acesso de escrita ao repositório (raiz = pasta que contém `docs/`, `scripts/`, `produto/`).
**Origem:** rodada 1 da AP-IA02 (verificação de fontes normativas e estatísticas), consultada em 30/10/2026.
**Objetivo:** reproduzir, no repositório real, exatamente as alterações abaixo. Nada além delas.

## 0. Regras (leia antes de editar)

1. Aplique **somente** as alterações listadas. Não reescreva, não "melhore" o texto ao redor.
2. Cada alteração é "trecho antigo → trecho novo". O trecho antigo deve existir **exatamente uma vez** no arquivo. Se não existir ou existir mais de uma vez, **pare nessa alteração**, não improvise e registre a divergência na seção 9.
3. **Não** marque a AP-IA02 como concluída (`[ ]` permanece). **Não** preencha outras datas de acesso além das três indicadas. **Não** troque a palavra-chave "Letramento em Saúde" (decisão humana, AP-H04). **Não** remova os marcadores `[CONFIRMAR ...]` que não aparecem nas alterações.
4. Não invente números, URLs, páginas do DOU ou dados. Se algo faltar, deixe o marcador.
5. Caminhos abaixo são relativos à raiz do repositório. Alguns arquivos do repositório usam `docs/anteprojeto/...`; confirme os caminhos com `ls` antes de começar.
6. Aplique na ordem: seções 1 a 8. Depois rode a verificação (seção 10).

## 1. `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` — 12 alterações

**1.1** (Introdução, TIC Saúde)
- Antigo: `(COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a) [CONFIRMAR os dois números e a base de cada indicador no relatório original].`
- Novo: `(COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a) [CONFIRMAR a base de cada indicador no relatório completo].`

**1.2** (Introdução, TIC Domicílios)
- Antigo: `proporção que chega a 87% nas classes DE (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b) [CONFIRMAR números e páginas].`
- Novo: `proporção que chega a 87% nas classes DE (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b, p. 4).`

**1.3** (Relevância e magnitude; um único trecho contínuo)
- Antigo: `entre 2023 e 2025 (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a) [CONFIRMAR]. Do lado dos usuários, 52% dos usuários de internet buscaram informações sobre saúde nos três meses anteriores à pesquisa, e quase metade da população usuária está em nível de habilidades digitais abaixo do básico (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b) [CONFIRMAR as duas informações e a base do indicador].`
- Novo: `entre 2023 e 2025 (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a, p. 4) [CONFIRMAR a base dos indicadores no relatório completo]. Do lado dos usuários, 52% dos usuários de internet buscaram informações sobre temas de saúde nos três meses anteriores à pesquisa, e quase metade da população apresentou nível de habilidade digital "abaixo do básico" (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b, p. 4) [CONFIRMAR a base do indicador de habilidades no relatório completo].`
- Motivo: a fonte diz "quase metade da **população**", não "população usuária".

**1.4** (Programa SUS Digital; citar o Anexo CVIII)
- Antigo: `(BRASIL, 2024c, art. 8º). Entre seus objetivos específicos estão fomentar "o letramento digital e a cultura da saúde digital" e reduzir "a iniquidade no acesso às soluções e serviços de saúde digital" (BRASIL, 2024c, art. 2º) [CONFIRMAR os incisos e a transcrição no texto da Portaria].`
- Novo: `(BRASIL, 2024c, Anexo CVIII, art. 8º, inciso I). Entre seus objetivos específicos estão fomentar "o letramento digital e a cultura da saúde digital" e reduzir "a iniquidade no acesso às soluções e serviços de saúde digital" (BRASIL, 2024c, Anexo CVIII, art. 2º, incisos IV e X).`

**1.5** (Governo Digital; aspas dos princípios)
- Antigo: `entre eles estão um governo "centrado no cidadão e inclusivo" e um governo "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" [CONFIRMAR a redação no art. 1º da Portaria SGD/MGI nº 6.618/2024].`
- Novo: `entre eles estão um governo "centrado no cidadão e inclusivo" e um governo "confiável e seguro", que protege direitos, dados e informações [CONFIRMAR a redação no art. 1º da Portaria SGD/MGI nº 6.618/2024].`
- Motivo: a redação anterior não foi confirmada como literal. O marcador **permanece**.

**1.6** (Aspectos Éticos)
- Antigo: `Segundo a Resolução CNS nº 510/2016, art. 1º, parágrafo único, pesquisas realizadas exclusivamente com textos científicos para revisão de literatura não são registradas nem avaliadas pelo sistema CEP/CONEP [CONFIRMAR o inciso].`
- Novo: `Segundo a Resolução CNS nº 510/2016, art. 1º, parágrafo único, inciso VI, pesquisas realizadas exclusivamente com textos científicos para revisão de literatura não são registradas nem avaliadas pelo sistema CEP/CONEP.`

**1.7** (Palavras-chave, português)
- Antigo: `[CONFIRMAR cada descritor no DeCS/MeSH; "Consulta Remota" está confirmado.]`
- Novo: `[DeCS/MeSH conferidos em 30/10/2026: Consulta Remota, Telemedicina, Treinamento por Simulação e Educação em Saúde. DECIDIR sobre "Letramento em Saúde": no DeCS consultado, o descritor (ID 53793; MeSH Health Literacy, D057220) aparece como "Literacia para a Saúde".]`

**1.8** (Keywords, inglês)
- Antigo: `[CONFIRM each descriptor in DeCS/MeSH.]`
- Novo: `[MeSH confirmed on 10/30/2026: Remote Consultation, Telemedicine, Simulation Training, Health Education, Health Literacy.]`

**1.9** (Referência TIC Saúde: preencher acesso e remover ▲)
- Antigo: `TIC_SAUDE_2025_PT_resumoexecutivo.pdf. Acesso em: [DATA]. ▲`
- Novo: `TIC_SAUDE_2025_PT_resumoexecutivo.pdf. Acesso em: 30 out. 2026.`

**1.10** (Referência TIC Domicílios: preencher acesso; **manter** ▲, o ano 2026b está em dúvida)
- Antigo: `tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: [DATA]. ▲`
- Novo: `tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: 30 out. 2026. ▲`

**1.11** (Referência OMS/UIT 2022: preencher acesso)
- Antigo: `https://www.who.int/publications/i/item/9789240050464. Acesso em: [DATA].`
- Novo: `https://www.who.int/publications/i/item/9789240050464. Acesso em: 30 out. 2026.`

**1.12** (Equidade e diversidade, 87% DE)
- Antigo: `apenas pelo celular (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b) [CONFIRMAR];`
- Novo: `apenas pelo celular (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026b, p. 4);`

## 2. `docs/anteprojeto/pendencias.md` — 3 alterações

**2.1** (cabeçalho)
- Antigo: `**Atualização:** 30/10/2026 — rodada 1 da AP-IA03 executada; revisão bibliográfica permanece aberta.`
- Novo: `**Atualização:** 30/10/2026 — rodada 1 da AP-IA03 e rodada 1 da AP-IA02 executadas; ambas permanecem abertas.`

**2.2** (item AP-IA02: acrescentar ao fim da linha, sem mexer no `[ ]`)
- Antigo: `Incluir a verificação dos descritores DeCS/MeSH das palavras-chave.`
- Novo: `Incluir a verificação dos descritores DeCS/MeSH das palavras-chave. **Situação:** rodada 1 executada em 30/10/2026; relatório em registros/verificacao-fontes-2026-10-30.md. Confirmados: indicadores CGI.br citados (p. 4), art. 2º (IV e X) e art. 8º (I) do Anexo CVIII da Portaria GM/MS 3.232, inciso VI do art. 1º da Res. CNS 510 e 4 de 5 descritores. Pendentes: base dos indicadores e ano de TIC Domicílios 2025; art. 1º e DOU da Portaria SGD/MGI 6.618; "Letramento em Saúde" × "Literacia para a Saúde" no DeCS (decisão humana); metas dos ODS, linha 2 e documento CAPES; entradas não reverificadas.`

**2.3** (histórico: inserir **nova linha acima** da linha que começa com `| 30/10/2026 | AP-IA03, rodada 1:`; usar esse início como âncora)
- Antigo: `| 30/10/2026 | AP-IA03, rodada 1:`
- Novo (duas linhas, a primeira é nova, a segunda repete o início antigo):
```
| 30/10/2026 | AP-IA02, rodada 1: conferência de dados CGI.br, Portaria GM/MS 3.232 (Anexo CVIII), Res. CNS 510 (inciso VI), Ofício Circular 17/2022 e descritores DeCS/MeSH. Texto-base ajustado (citação de artigos do Anexo, "população" no indicador de habilidades, aspas dos princípios da Portaria 6.618, inciso VI, descritores, 3 datas de acesso). Achado: "Letramento em Saúde" consta como "Literacia para a Saúde" no DeCS consultado. Item permanece aberto. |
| 30/10/2026 | AP-IA03, rodada 1:
```

## 3. `docs/anteprojeto/README.md` — 1 alteração

- Antigo: `- [Decisões metodológicas]`
- Novo (duas linhas):
```
- [Registro da verificação de fontes normativas e estatísticas (rodada 1)](registros/verificacao-fontes-2026-10-30.md) — dados CGI.br, normas, descritores DeCS/MeSH e itens em aberto (AP-IA02).
- [Decisões metodológicas]
```

## 4. `docs/anteprojeto/formulacao-vigente.md` — 1 alteração

- Antigo: `- **Palavras-chave (a confirmar no DeCS/MeSH):** Consulta Remota (confirmado: DeCS 32630 / MeSH D019114); Telemedicina; Letramento em Saúde; Treinamento por Simulação; Educação em Saúde.`
- Novo: `- **Palavras-chave (DeCS/MeSH conferidos em 30/10/2026, exceto um):** Consulta Remota (DeCS 32630 / MeSH D019114); Telemedicina (30481 / D017216); Letramento em Saúde (**decisão pendente**: no DeCS 53793 / MeSH D057220 o termo em português aparece como "Literacia para a Saúde"); Treinamento por Simulação (56169 / D000066908); Educação em Saúde (28480 / D006266). Ver registros/verificacao-fontes-2026-10-30.md.`
- Não altere a lista de palavras-chave usada nos demais documentos.

## 5. `docs/fundamentacao/referencias-e-busca-bibliografica.md` — 2 alterações (mapa B3)

**5.1**
- Antigo: `| (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a, 2026b) | TIC Saúde 2025; TIC Domicílios 2025 | Números a conferir (AP-IA02) |`
- Novo: `| (COMITÊ GESTOR DA INTERNET NO BRASIL, 2026a, 2026b) | TIC Saúde 2025; TIC Domicílios 2025 | Números **conferidos** em 30/10/2026 (p. 4 de cada resumo executivo); **base dos indicadores e ano de TIC Domicílios (2025 ou 2026) a conferir**. Ver registros/verificacao-fontes-2026-10-30.md (AP-IA02) |`

**5.2**
- Antigo: `artigos do Anexo CVIII a conferir (AP-IA02) |`
- Novo: `artigos do Anexo CVIII **conferidos** em 30/10/2026 (art. 2º, IV e X; art. 8º, I) em cópia do texto; URL do DOU não aberta |`

Nota: o link `registros/verificacao-fontes-...` está dentro do texto de uma tabela de `docs/fundamentacao`; se o repositório tiver verificador de links, use o caminho relativo correto (`../anteprojeto/registros/verificacao-fontes-2026-10-30.md`) ou deixe como texto simples, sem hiperlink.

## 6. `docs/fundamentacao/dados-e-normas-brasileiras-2026-10-30.md` — 5 alterações (coluna "Status")

**6.1** (N1)
- Antigo: `| A conferir no texto oficial (Portaria) |`
- Novo: `| **Conferido em 30/10/2026** em cópia do texto (Anexo CVIII, art. 1º; art. 2º, III, IV e X; art. 8º, I), não no DOU. Citar como "Anexo CVIII" |`

**6.2** (N2)
- Antigo: `| **Princípios não confirmados em fonte oficial.** Abrir o ato que detalha a Estratégia (Portaria SGD/MGI nº 6.618/2024) |`
- Novo: `| Nomes dos princípios **confirmados** na página oficial da Estratégia (30/10/2026). **Redação literal do art. 1º da Portaria SGD/MGI nº 6.618/2024 não conferida.** Portaria alterada em 2026 (nº 473, só o Anexo; nº 2.794, não lida) |`

**6.3** (N4)
- Antigo: `| A conferir (páginas 3, 4, 6, 7). **Nota:`
- Novo: `| **Conferido em 30/10/2026** (p. 4: 85%, 65%, 87%, 52%); "abaixo do básico" refere-se à "população", base a conferir. **Nota:`

**6.4** (N5)
- Antigo: `| A conferir (p. 4); base exata de cada indicador **não especificada** |`
- Novo: `| **Conferido em 30/10/2026** (p. 4 e 5); base exata de cada indicador **não especificada** no resumo |`

**6.5** (N9)
- Antigo: `| **A conferir** (não verificado nesta rodada) |`
- Novo: `| **Conferido em 30/10/2026**: inciso VI (cópia da Resolução); Ofício Circular nº 17/2022/CONEP orienta que a dispensa vale só se os procedimentos se enquadrarem na totalidade |`

## 7. Criar `docs/anteprojeto/registros/verificacao-fontes-2026-10-30.md`

Crie o arquivo com o conteúdo **integral** do Anexo A deste guia (copie o texto dentro do bloco, sem as cercas de código). Não resuma.

## 8. O que NÃO fazer

- Não alterar `relatorios/arquivo_geral.md` nem `docs/_arquivo/`.
- Não preencher `Acesso em: [DATA]` das demais entradas (Bahia, BridgingApps, HHS, Decreto, Lei 14.510, Portaria 3.232, WCAG, WCAG-EM, OMS/UIT 2024, CNS 466/510, LGPD, Portaria 6.618). Só foram abertas Saúde, Domicílios e OMS/UIT 2022.
- Não citar o Ofício Circular 17/2022 no texto-base nem na lista de referências (não é citado no texto).
- Não mexer em `selecao/fontes-oficiais/text.txt` (AP-H08).

## 9. Se algo divergir

Se qualquer "Antigo" não for encontrado exatamente uma vez, não aplique essa alteração. Liste ao final: arquivo, número da alteração, o que foi encontrado no lugar. Provavelmente o arquivo já mudou desde 30/10/2026; nesse caso, aplique a **intenção** da alteração apenas se for inequívoca, e diga que o fez.

## 10. Verificação final

1. `grep -n "Acesso em: 30 out. 2026" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → exatamente 3 linhas (TIC Saúde, TIC Domicílios, OMS/UIT 2022).
2. `grep -c "Anexo CVIII" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → 1 ou mais linhas; não deve restar `art. 8º)` nem `art. 2º)` sem o Anexo.
3. `grep -n "inciso VI" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → 1 linha (Aspectos Éticos).
4. `grep -n "confiável, seguro, promovendo" -r docs/anteprojeto` → nenhuma ocorrência fora de registros históricos de auditoria.
5. Em `pendencias.md`, a linha AP-IA02 começa com `- [ ]` (aberta).
6. O novo arquivo existe e é citado em `docs/anteprojeto/README.md` e em `pendencias.md`.
7. Se o repositório tiver verificação de links ou testes (`npm test`, `scripts/`), rode-os. Eles são voltados ao protótipo, mas confirme que nada quebrou.
8. Dê ao usuário um resumo curto: alterações aplicadas (por arquivo), alterações não aplicadas (se houver) e o que segue em aberto.

## 11. Pendências restantes da AP-IA02 (não executar sem acesso à fonte)

Itens que exigem abrir fontes que a rodada 1 não conseguiu abrir. Faça só se tiver acesso real à fonte e registre URL, localização e data de consulta no mesmo registro (nova seção "Rodada 2"):

1. Base dos indicadores de teleconsulta e de interação online (relatório completo `TIC_SAUDE_2025_PT_livro.pdf`) e do indicador de habilidades digitais (TIC Domicílios).
2. Ano correto da referência TIC Domicílios 2025 (2025 ou 2026): notícias indicam divulgação em dez/2025, e a URL do resumo executivo tem carimbo de maio/2026.
3. Art. 1º da Portaria SGD/MGI nº 6.618/2024 (redação literal dos princípios), edição e página do DOU (matéria indica 26/09/2024) e leitura da Portaria SGD/MGI nº 2.794/2026.
4. Portaria GM/MS nº 3.232/2024: abrir a URL do DOU da lista (a rodada 1 usou uma cópia).
5. Metas ODS 3.8, 4.4 e 10.2; descrição oficial da linha 2 (telessaude.uerj.br/mestrado/linhas-de-pesquisa); documento norteador da CAPES (T1/T2).
6. Reverificar Galvin et al. 2024, Yang et al. 2024, Norman e Skinner 2006, toolkit OMS/UIT 2024, BridgingApps, TelessaúdeBA e HHS.
7. Conferir na interface do DeCS os IDs da seção 3 do registro (uma consulta automática devolveu o registro de outro descritor) e se "Letramento em Saúde" retorna na edição 2027.

---

## Anexo A — conteúdo integral de `docs/anteprojeto/registros/verificacao-fontes-2026-10-30.md`

`````markdown
# Registro da verificação de fontes normativas e estatísticas — rodada 1

**Data de consulta:** 30/10/2026
**Pendência:** AP-IA02 — fontes normativas e estatísticas primárias, descritores DeCS/MeSH
**Arquivo-base:** `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md`
**Estado:** rodada 1. A AP-IA02 **permanece aberta**; ver seção 5.

Método: leitura das fontes pelas ferramentas de busca e leitura web da sessão. Quando a fonte primária não pôde ser aberta, o registro diz qual cópia foi usada. Nada foi preenchido por inferência.

## 1. Dados estatísticos (CGI.br / Cetic.br)

| Dado no texto-base | Resultado | Local na fonte | Situação |
|---|---|---|---|
| Teleconsulta ofertada por 28% dos estabelecimentos (TIC Saúde 2025) | Confere | Resumo executivo, p. 4 e p. 5 ("28% dos estabelecimentos oferecem teleconsulta") | **Confirmado** |
| Interação online com a equipe de saúde: 16% (2023) → 35% (2025) | Confere | p. 4: "passou de 16% em 2023 para 35% em 2025" | **Confirmado** |
| Base desses dois indicadores | O texto não declara base própria. Os gráficos 1 e 2 (p. 5) usam "total de estabelecimentos de saúde que utilizaram a Internet nos últimos 12 meses" | p. 5 | **Não confirmada.** O texto-base diz "estabelecimentos de saúde pesquisados"; manter o marcador até ler o relatório completo (`TIC_SAUDE_2025_PT_livro.pdf`) |
| 85% da população de 10 anos ou mais usa internet (TIC Domicílios 2025) | Confere | Resumo executivo, p. 4 | **Confirmado** |
| 65% dos usuários acessam apenas pelo celular; 87% nas classes DE | Confere | p. 4 ("65% a acessaram exclusivamente por esse dispositivo"; "mais frequente nas classes DE (87%)") | **Confirmado** |
| 52% dos usuários buscaram informação de saúde nos 3 meses anteriores | Confere. A fonte diz "temas relacionados à saúde" | p. 4 | **Confirmado** |
| "Quase metade da população usuária" com habilidade digital abaixo do básico | **Imprecisão.** A fonte diz "quase metade da **população**", sem restringir a usuários; base não especificada no resumo | p. 4 | **Corrigido no texto** ("população"); base **a conferir** no relatório completo |

Ressalvas de metadados:
- TIC Saúde 2025: a página sugere a citação com o ano **2026**. Confere com a referência `2026a`.
- TIC Domicílios 2025: o resumo não informa a data de publicação (coleta de março a setembro de 2025). Notícias e o PDF de "principais resultados" indicam divulgação em **dezembro de 2025**, enquanto o carimbo da URL do resumo executivo é de maio de 2026. **O ano da referência `2026b` fica em dúvida**; o ▲ foi mantido.
- Foi aberto o PDF com espaço no nome do arquivo (`tic_domicilios_2025_resumoexecutivo pt.pdf`). A URL da lista usa `%20`, que é a forma correta.

## 2. Normas

### 2.1 Portaria GM/MS nº 3.232/2024 (Programa SUS Digital)

Fonte aberta: cópia do texto da Portaria hospedada pela Secretaria de Saúde de Campinas (`saude.campinas.sp.gov.br/.../U_PT-MS-GM-3232_010324.pdf`). A URL do DOU listada nas referências **não pôde ser aberta** nesta sessão. A cópia traz "DOU nº 43, de 04/03/2024, Seção 1, p. 52", o que confere com a lista.

| Trecho do texto-base | Resultado |
|---|---|
| "cultura de saúde digital, formação e educação permanente em saúde" como eixo 1 | **Confirmado:** Anexo CVIII, **art. 8º, inciso I** |
| "o letramento digital e a cultura da saúde digital" | **Confirmado:** Anexo CVIII, **art. 2º, inciso IV** (o inciso continua: "...e da proteção de dados pessoais") |
| "a iniquidade no acesso às soluções e serviços de saúde digital" | **Confirmado:** Anexo CVIII, **art. 2º, inciso X** |
| Objetivo geral | Anexo CVIII, art. 1º: "promover a transformação digital no âmbito do Sistema Único de Saúde - SUS" para ampliar o acesso, com integralidade e resolubilidade |
| Citação "art. 8º" e "art. 2º" sem o Anexo | **Corrigido** (R13 da rodada anterior): o corpo da Portaria tem 4 artigos; os dispositivos citados são do **Anexo CVIII** |

### 2.2 Portaria SGD/MGI nº 6.618, de 25/9/2024

| Item | Resultado |
|---|---|
| Existência, data e objeto | **Confirmados** na página oficial da Estratégia Federal de Governo Digital (gov.br/governodigital) e em matéria do MobileTime |
| Princípios | A página oficial lista seis princípios, entre eles **"Governo Centrado no Cidadão e Inclusivo"** e **"Governo Confiável e Seguro"**. A matéria descreve o segundo como "que protege direitos, dados e informações" |
| Redação "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações" | **Não confirmada como literal.** Foi retirada das aspas; o texto agora cita "confiável e seguro" e parafraseia o restante. O marcador [CONFIRMAR a redação no art. 1º] foi **mantido**, pois o art. 1º da Portaria não foi lido |
| Publicação no DOU | Matéria indica **26/09/2024**; edição e página **não confirmadas**. Mantida a lacuna na referência |
| Alterações posteriores | A página oficial informa que a Portaria foi alterada pelas Portarias SGD/MGI nº 473, de 20/1/2026, e nº 2.794, de 1º/4/2026. A nº 473/2026 (DOU, seção 1, nº 16, de 23/1/2026) altera **apenas o Anexo** (objetivos e iniciativas). A nº 2.794/2026 **não foi lida** |

### 2.3 Resolução CNS nº 510/2016 e Ofício Circular nº 17/2022

| Item | Resultado |
|---|---|
| Art. 1º, parágrafo único, **inciso VI** | **Confirmado** em cópia da Resolução (Unicesumar): "pesquisa realizada exclusivamente com textos científicos para revisão da literatura científica". Marcador [CONFIRMAR o inciso] removido |
| Ofício Circular nº 17/2022/CONEP/SECNS/MS, de 05/07/2022 (assinado em 06/07/2022) | **Aberto** (cópia da USP-FCFRP). Sobre o inciso VI: "refere-se a pesquisas que recorrerão exclusivamente às fontes bibliográficas, de cunho acadêmico-científico". A dispensa vale só para protocolos cujos procedimentos se enquadrem **na totalidade** nos incisos; cada instituição pode exigir análise ética interna |
| Consequência para o texto-base (R12) | O inciso VI cobre a **revisão de literatura**. **Não cobre** a inspeção do produto por inspetor independente, que continua dependendo de confirmação institucional, como o texto já declara. **Nenhuma alteração adicional no texto.** O Ofício não é citado no texto-base; por isso não entrou na lista de referências |

Observação: a cópia consultada da Resolução não traz ementa e numera um inciso final como "III". A cópia do DOU prevalece; a ementa da lista foi conferida na rodada anterior (AP-IA03).

## 3. Descritores DeCS/MeSH

Fonte: DeCS/BVS (decs.bvsalud.org) e MeSHb (NLM).

| Palavra-chave | DeCS (pt) | DeCS ID | MeSH | Situação |
|---|---|---|---|---|
| Consulta Remota | Consulta Remota | 32630 | Remote Consultation, **D019114** | **Reconfirmado** (DeCS e MeSHb) |
| Telemedicina | Telemedicina | 30481 | Telemedicine, **D017216** | **Confirmado** |
| Educação em Saúde | Educação em Saúde | 28480 | Health Education, **D006266** | **Confirmado** |
| Treinamento por Simulação | Treinamento por Simulação | 56169 | Simulation Training, **D000066908** | **Confirmado.** Não confundir com "Treinamento com Simulação de Alta Fidelidade" (ID 56800) |
| Letramento em Saúde | **Literacia para a Saúde** | 53793 | Health Literacy, **D057220** | **Divergência.** No registro DeCS 53793 o termo em português aparece como "Literacia para a Saúde" (espanhol: Alfabetización en Salud). Uma página secundária do DeCS afirma que a edição 2026 usa "Literacia" e que "Letramento em Saúde" volta na edição 2027; **essa afirmação não foi confirmada**. Não alterei a palavra-chave: a escolha cabe ao candidato/orientação |

Aviso de método: uma das consultas ao DeCS (ID 32630, versão em inglês) devolveu o registro de outro descritor (56800). Repetida pela versão em francês, devolveu o registro correto de Consulta Remota. Os demais IDs foram confirmados com a leitura de cada página, mas a leitura automática do DeCS deve ser conferida por um humano na interface.

## 4. Outras fontes

| Fonte | Resultado |
|---|---|
| OMS/UIT, *WHO-ITU global standard for accessibility of telehealth services* | Título, ISBN 978 92 4 005046 4 e URL da lista **conferem**; a página mostra 1/1/2022 e 36 p. Data de acesso preenchida (30 out. 2026) |
| W3C, WCAG 2.2 | Histórico oficial: Recomendação em **5/10/2023**, nova entrada de Recomendação em **12/12/2024** (a mais recente). A data "12 dez. 2024" da lista corresponde à versão mais recente. A página `w3.org/TR/WCAG22` não pôde ser aberta; data de acesso **não preenchida** |

## 5. O que permanece em aberto (AP-IA02)

1. Base dos indicadores de teleconsulta e de interação online (TIC Saúde) e do indicador de habilidades digitais (TIC Domicílios): ler os relatórios completos.
2. Ano correto da referência TIC Domicílios 2025 (2025 ou 2026).
3. Redação literal dos princípios no art. 1º da Portaria SGD/MGI nº 6.618/2024; DOU (edição e página); leitura da Portaria nº 2.794/2026.
4. Termo do descritor "Letramento em Saúde" × "Literacia para a Saúde" (decisão humana; ligar a AP-H04).
5. Texto oficial das metas 3.8, 4.4 e 10.2 dos ODS; descrição oficial da linha 2 do Programa; documento norteador da CAPES (T1/T2): **não consultados**.
6. Itens não reverificados: Galvin et al. 2024, Yang et al. 2024, Norman e Skinner 2006, toolkit OMS/UIT 2024, e os recursos BridgingApps, TelessaúdeBA e HHS.
7. Datas de acesso das demais entradas online (inclusive o URL do DOU da Portaria 3.232 e o do W3C).
8. Conferência humana das páginas do DOU e das cópias usadas aqui (Campinas, Unicesumar, USP): cópias não substituem o texto oficial.
`````
