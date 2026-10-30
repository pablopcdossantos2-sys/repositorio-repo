# Guia de execução — aplicar a rodada 2 da AP-IA02 no repositório

**Destinatário:** IA com acesso de escrita ao repositório (raiz = pasta que contém `docs/`, `scripts/`, `produto/`).
**Origem:** rodada 2 da AP-IA02 (verificação de fontes normativas e estatísticas), consultada em 30/10/2026.
**Pré-requisito:** a rodada 1 já está aplicada (`docs/anteprojeto/registros/verificacao-fontes-2026-10-30.md` existe e o texto-base cita "Anexo CVIII"). Se não estiver, **pare** e avise o usuário: este guia depende dela.
**Objetivo:** aplicar exatamente as alterações abaixo. Nada além delas.

## 0. Regras (leia antes de editar)

1. Aplique **somente** as alterações listadas. Não reescreva nem "melhore" o texto ao redor.
2. Cada alteração é "trecho antigo → trecho novo". O trecho antigo deve existir **exatamente uma vez** no arquivo. Se não existir, ou existir mais de uma vez, **pare nessa alteração**, não improvise e registre a divergência na seção 9.
3. **Não** marque a AP-IA02 como concluída (`[ ]` permanece). **Não** preencha outras datas de acesso além das três indicadas. **Não** troque a palavra-chave "Letramento em Saúde" nem altere o enquadramento do ODS 4 (decisões humanas). **Não** remova marcadores `[CONFIRMAR ...]` que não aparecem nas alterações.
4. Não invente números, URLs, páginas do DOU ou dados.
5. Caminhos são relativos à raiz do repositório; confirme-os com `ls` antes de começar.
6. Aplique na ordem das seções 1 a 5. Depois rode a verificação (seção 8).

## 1. `docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` — 6 alterações

**1.1** (Governo Digital: citação literal do art. 1º da Portaria SGD/MGI nº 6.618/2024)
- Antigo: `entre eles estão um governo "centrado no cidadão e inclusivo" e um governo "confiável e seguro", que protege direitos, dados e informações [CONFIRMAR a redação no art. 1º da Portaria SGD/MGI nº 6.618/2024].`
- Novo: `entre eles estão um governo "centrado no cidadão e inclusivo" (art. 1º, inciso I) e um governo "confiável e seguro" (art. 1º, inciso IV), que promove "a proteção de direitos, dos dados e das informações".`
- Evidência: página oficial da Portaria; o inciso IV termina em "promovendo a proteção de direitos, dos dados e das informações".

**1.2** (ODS: marcador de conferência vira nota e decisão)
- Antigo: `[CONFIRMAR o texto oficial de cada meta (ONU/IPEA) antes de citar.]`
- Novo: `[Metas 3.8, 4.4 e 10.2 e indicador 4.4.1 conferidos em 30/10/2026 no Ipea. DECIDIR o enquadramento do ODS 4: a meta 4.4 trata de competências "para emprego, trabalho decente e empreendedorismo"; a aderência do projeto se apoia no indicador 4.4.1 (habilidades em TIC).]`

**1.3** (Referência TIC Domicílios 2025: remover ▲; o ano 2026 foi confirmado na ficha catalográfica)
- Antigo: `tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: 30 out. 2026. ▲`
- Novo: `tic_domicilios_2025_resumoexecutivo%20pt.pdf. Acesso em: 30 out. 2026.`

**1.4** (Referência OMS/UIT 2024: URL da página da publicação e data de acesso)
- Antigo: `https://www.who.int/activities/making-accessible-telehealth-services-for-persons-with-disabilities. Acesso em: [DATA].`
- Novo: `https://www.who.int/publications/i/item/9789240094161. Acesso em: 30 out. 2026.`

**1.5** (Referência HHS: data de acesso; `[s.d.]` permanece, a página não mostra data)
- Antigo: `https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth. Acesso em: [DATA].`
- Novo: `https://telehealth.hhs.gov/providers/preparing-patients-for-telehealth. Acesso em: 30 out. 2026.`

**1.6** (Referência BridgingApps: URL da página do curso e data de acesso)
- Antigo: `https://bridgingapps.org/courses-landing/. Acesso em: [DATA].`
- Novo: `https://bridgingapps.org/digital-house-calls/. Acesso em: 30 out. 2026.`

## 2. `docs/anteprojeto/pendencias.md` — 2 alterações

**2.1** (item AP-IA02: substituir a frase "Pendentes", sem mexer no `[ ]`)
- Antigo: `Pendentes: base dos indicadores e ano de TIC Domicílios 2025; art. 1º e DOU da Portaria SGD/MGI 6.618; "Letramento em Saúde" × "Literacia para a Saúde" no DeCS (decisão humana); metas dos ODS, linha 2 e documento CAPES; entradas não reverificadas.`
- Novo: `Rodada 2 em 30/10/2026 (mesmo relatório, seção "Rodada 2"): confirmados art. 1º da Portaria SGD/MGI 6.618, ano da TIC Domicílios (2026), metas dos ODS 3.8, 4.4 e 10.2, Galvin, Yang, Norman e Skinner, toolkit OMS/UIT 2024, HHS e BridgingApps. Pendentes: base dos indicadores de teleconsulta, de interação online e de habilidades digitais; DOU da Portaria 6.618; linha 2 e documento CAPES; TelessaúdeBA; demais datas de acesso; decisões humanas ("Letramento em Saúde" × "Literacia para a Saúde"; enquadramento do ODS 4).`

**2.2** (histórico: inserir uma linha nova **acima** da linha de início `| 30/10/2026 | AP-IA03, rodada 1:`)
- Antigo: `| 30/10/2026 | AP-IA03, rodada 1:`
- Novo (duas linhas; a primeira é nova, a segunda repete o início antigo):
```
| 30/10/2026 | AP-IA02, rodada 2: art. 1º da Portaria SGD/MGI 6.618 lido (aspas corrigidas, marcador removido); ano 2026 da TIC Domicílios confirmado; metas dos ODS conferidas (alerta sobre a meta 4.4); Galvin, Yang, Norman e Skinner, OMS/UIT 2024, HHS e BridgingApps conferidos; URLs de OMS/UIT 2024 e BridgingApps trocadas; 3 datas de acesso. Item permanece aberto. |
| 30/10/2026 | AP-IA03, rodada 1:
```
- Se o histórico já tiver linhas com datas posteriores, mantenha a ordem existente e insira a nova junto das demais de 30/10/2026.

## 3. `docs/fundamentacao/referencias-e-busca-bibliografica.md` — 3 alterações (mapa B3)

**3.1**
- Antigo: `Existência e objeto confirmados; **dados do DOU e redação dos princípios a conferir** |`
- Novo: `Existência, objeto e art. 1º (incisos I e IV) **conferidos** em 30/10/2026; **edição e página do DOU a conferir** |`

**3.2**
- Antigo: `**base dos indicadores e ano de TIC Domicílios (2025 ou 2026) a conferir**`
- Novo: `ano 2026 conferido na ficha catalográfica; **base dos indicadores a conferir**`

**3.3**
- Antigo: `As linhas de Galvin, Yang, Norman e Skinner, OMS/UIT e recursos do benchmark permanecem como estão, ajustadas apenas às novas formas de chamada.`
- Novo: `Galvin, Yang, Norman e Skinner, OMS/UIT (2022 e 2024), HHS e BridgingApps foram conferidos em 30/10/2026 (rodada 2); TelessaúdeBA permanece não verificada.`

## 4. `docs/fundamentacao/dados-e-normas-brasileiras-2026-10-30.md` — 2 alterações

**4.1** (N8)
- Antigo: `| A conferir no texto oficial da meta 4.4 e dos ODS 3.8 e 10.2 (ONU/IPEA) |`
- Novo: `| **Conferido** em 30/10/2026 no Ipea (ods3, ods4, ods10); ver registro de verificação, seção R2.3 |`

**4.2** (N2)
- Antigo: `**Redação literal do art. 1º da Portaria SGD/MGI nº 6.618/2024 não conferida.**`
- Novo: `**Art. 1º, incisos I e IV, conferidos** na página oficial da Portaria (30/10/2026); DOU não conferido.`

## 5. Acrescentar a "Rodada 2" ao registro `docs/anteprojeto/registros/verificacao-fontes-2026-10-30.md`

Acrescente **ao final** do arquivo (depois da seção 5 da rodada 1, que **deve ser mantida**) o conteúdo integral do Anexo A deste guia. Garanta uma linha em branco antes. Não resuma e não altere o texto da rodada 1.

## 6. O que NÃO fazer

- Não alterar `relatorios/` nem `docs/_arquivo/`.
- Não preencher `Acesso em: [DATA]` das demais entradas (Bahia, Decreto, Lei 14.510, Portaria 3.232, Portaria 6.618, WCAG, WCAG-EM, CNS 466/510, LGPD).
- Não remover o ▲ da Portaria SGD/MGI 6.618 (o DOU continua sem confirmação) nem os `[CONFIRMAR ...]` dos indicadores de teleconsulta, de interação online e de habilidades digitais (a base continua sem confirmação).
- Não alterar o descritor "Letramento em Saúde" nem o texto do ODS 4 além do item 1.2.
- Não mexer em `selecao/fontes-oficiais/text.txt` (AP-H08).

## 7. Observação para o usuário (repasse no resumo final)

A meta 4.4 do ODS 4 fala em competências **"para emprego, trabalho decente e empreendedorismo"**. O texto-base a usa para "habilidades digitais aplicadas à saúde". A ligação defensável é com o **indicador 4.4.1** (habilidades em TIC). Isso foi sinalizado no texto como item a decidir (alteração 1.2); a decisão é do candidato e da orientação (AP-H04).

## 8. Verificação final

1. `grep -c "Acesso em: 30 out. 2026" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → deve subir em 3 linhas em relação ao estado anterior (OMS/UIT 2024, HHS e BridgingApps).
2. `grep -n "confiável, seguro, promovendo" -r docs/anteprojeto/rascunhos` → nenhuma ocorrência.
3. `grep -n "art. 1º, inciso IV" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → 1 linha.
4. `grep -n "bridgingapps.org/courses-landing\|who.int/activities" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → nenhuma ocorrência.
5. `grep -n "▲" docs/anteprojeto/rascunhos/anteprojeto-docx-oficial.md` → a Portaria SGD/MGI 6.618 e as normas ainda marcadas pela rodada anterior permanecem; a TIC Domicílios **não** tem mais ▲.
6. Em `pendencias.md`, a linha AP-IA02 começa com `- [ ]` (aberta).
7. O registro de verificação contém as seções "Rodada 2" e "R2.5", e a seção 5 da rodada 1 continua lá.
8. Se houver verificação de links ou testes (`npm test`, `scripts/`), rode-os.
9. Resuma ao usuário: alterações aplicadas por arquivo, alterações não aplicadas (se houver), o alerta do ODS 4 e o que segue em aberto.

## 9. Se algo divergir

Se qualquer "Antigo" não for encontrado exatamente uma vez, não aplique essa alteração. Liste ao final: arquivo, número da alteração e o que foi encontrado no lugar. Aplique a intenção da alteração apenas se for inequívoca, e diga que o fez.

## 10. Pendências restantes da AP-IA02 (só com acesso real à fonte)

Registre URL, localização e data de consulta numa nova seção "Rodada 3" do mesmo registro:

1. Base dos indicadores de teleconsulta (28%) e interação online (16% → 35%) da TIC Saúde 2025: tabelas em `cetic.br/pt/pesquisa/saude/indicadores/` e gráfico de telessaúde (p. 75 do livro). Base do indicador de habilidades digitais da TIC Domicílios 2025.
2. Edição e página do DOU da Portaria SGD/MGI nº 6.618/2024 (a página oficial não os mostra; imprensa indica 26/09/2024) e leitura da Portaria SGD/MGI nº 2.794/2026.
3. Descrição oficial da linha 2 (`telessaude.uerj.br/mestrado/linhas-de-pesquisa`) e documento norteador da CAPES (T1/T2).
4. TelessaúdeBA (`telessaude.saude.ba.gov.br/25181-2/`): abrir, conferir título, órgão e data.
5. Abrir o DOU da Portaria GM/MS 3.232 e a página `w3.org/TR/WCAG22` e preencher as datas de acesso.

---

## Anexo A — texto a acrescentar ao final de `verificacao-fontes-2026-10-30.md`

`````markdown


---

# Rodada 2 — 30/10/2026

**Pendência:** AP-IA02 (continuação). A AP-IA02 **permanece aberta**; ver seção R2.5.
**Método:** igual ao da rodada 1. Quando a fonte primária não pôde ser aberta, o registro diz qual cópia foi usada.

## R2.1 Portaria SGD/MGI nº 6.618/2024 — art. 1º lido

Fonte: página oficial da Portaria em gov.br/governodigital (`.../EFGD/portaria-sgd-mgi-no-6-618-de-25-de-setembro-de-2024`). A página traz a ressalva "Este conteúdo não substitui o publicado na versão certificada" e mostra "Publicado em 23/01/2026" e "Atualizado em 30/06/2026" (datas da página, não do DOU). Alterada pelas Portarias SGD/MGI nº 473/2026 (só o Anexo) e nº 2.794/2026 (não lida).

| Item | Resultado |
|---|---|
| Art. 1º, caput | "Ficam estabelecidos os seguintes princípios a serem observados pela Estratégia Federal de Governo Digital para o período de 2024 a 2027" |
| Inciso I | "um Governo centrado no cidadão e inclusivo, que promove uma experiência agradável, simples e ágil e ao mesmo tempo garante que todos [...] tenham acesso e possam se beneficiar dos serviços oferecidos" |
| Inciso IV | "um Governo confiável e seguro que busca em sua atuação a construção e manutenção da confiança pública, garantindo que os cidadãos possam interagir com o governo de forma segura, **promovendo a proteção de direitos, dos dados e das informações**" |
| Texto-base antes da rodada | Citava entre aspas "confiável, seguro, promovendo a proteção de direitos, dos dados e das informações". **Não era literal** (reunia partes de uma frase maior). Corrigido para citar apenas "confiável e seguro" (inciso IV) e "a proteção de direitos, dos dados e das informações" (trecho literal do inciso IV) |
| Marcador [CONFIRMAR a redação no art. 1º] | **Removido** |
| DOU (edição e página) | **Continua não confirmado.** Matéria de imprensa indica 26/09/2024. A referência mantém `[n., p. e data de publicação a CONFIRMAR]` e o ▲ |

## R2.2 Estatísticas CGI.br — ano e base

| Item | Resultado |
|---|---|
| Ano da referência TIC Domicílios 2025 (`2026b`) | **Confirmado 2026.** Ficha catalográfica do livro eletrônico: "Comitê Gestor da Internet no Brasil, 2026" (ISBN 978-65-6165-016-8). A coletiva de imprensa foi em 9/12/2025, e o PDF de "principais resultados" cita CGI.br 2025 e 2026 de forma inconsistente. O ▲ foi removido. A TIC Saúde 2025 também é de 2026 (ISBN 978-65-6165-014-4) |
| TIC Saúde, base de "teleconsulta 28%" e "interação online 16% → 35%" | **Não confirmada.** No livro (p. 24-25) os dois valores aparecem **sem base indicada**. Os gráficos 1 e 2 (p. 25) e o exemplo de tabela (p. 28) usam "total de estabelecimentos de saúde que utilizaram a Internet nos últimos 12 meses", mas para **outros** indicadores. Gráficos de telessaúde estão na p. 75 do livro (não lida). Tabelas de indicadores: `cetic.br/pt/pesquisa/saude/indicadores/` (não aberta) |
| TIC Domicílios, "abaixo do básico" | Indicador "Nível de habilidades digitais – metodologia da UIT (2025)". O resumo diz "quase metade da **população**"; **a base (10+ anos ou usuários) não está clara**. Nenhum texto lido traz os cortes dos níveis |

## R2.3 Metas dos ODS — Ipea (ods3, ods4, ods10)

| Meta | Texto oficial conferido | Observação para o texto-base |
|---|---|---|
| 3.8 (ONU) | "Atingir a cobertura universal de saúde, incluindo a proteção do risco financeiro, o acesso a serviços de saúde essenciais de qualidade e o acesso a medicamentos e vacinas essenciais seguros, eficazes, de qualidade e a preços acessíveis para todos." | O texto-base usa "cobertura universal de saúde"; confere |
| 3.8 (Brasil, Ipea) | "Assegurar, por meio do Sistema Único de Saúde (SUS), a cobertura universal de saúde, o acesso a serviços essenciais de saúde de qualidade em todos os níveis de atenção e o acesso a medicamentos e vacinas essenciais seguros, eficazes e de qualidade que estejam incorporados ao rol de produtos oferecidos pelo SUS." | Versão nacional menciona o SUS |
| 4.4 (ONU) | "Até 2030, aumentar substancialmente o número de jovens e adultos que tenham habilidades relevantes, inclusive competências técnicas e profissionais, para emprego, trabalho decente e empreendedorismo." | **Atenção:** a meta trata de competências **para emprego, trabalho decente e empreendedorismo**. O texto-base diz que o simulador "ensina habilidades digitais aplicadas à saúde". A ligação direta é com o **indicador 4.4.1** ("Proporção de jovens e adultos com habilidades em tecnologias de informação e comunicação (TIC), por tipo de habilidade"), que o texto já cita. O enquadramento é decisão do candidato/orientação |
| 4.4 (Brasil, Ipea) | "Até 2030, aumentar substancialmente o número de jovens e adultos que tenham as competências necessárias, sobretudo técnicas e profissionais, para o emprego, trabalho decente e empreendedorismo." | idem |
| 10.2 | ONU: "Até 2030, empoderar e promover a inclusão social, econômica e política de todos, [...]". Ipea acrescenta "de forma a reduzir as desigualdades" e troca "origem" por "nacionalidade" | Texto completo na seção "Meta 10.2" da página do Ipea (não transcrito integralmente aqui) |

O marcador do texto-base foi trocado por nota de conferência com um item de decisão sobre o ODS 4.

## R2.4 Outras fontes

| Fonte | Resultado |
|---|---|
| Galvin et al., 2024 (*J Med Internet Res*, 26, e57586) | **Confirmada.** 6 autores (Galvin, Desselle, Gavin, McNicholas, Cullinan, Hayden); publicada em 31/7/2024; DOI 10.2196/57586. Resumo: 13 estudos incluídos, 8.087 registros únicos; treinamento tipicamente por "once-off preparatory phone calls" com instruções escritas; "limited and mixed evidence that training improved participants' competency with telehealth". O texto-base confere. Observação: a seção de resultados também cita 13.997 registros antes da remoção de duplicatas |
| Yang et al., 2024 (*Geriatric Nursing*, 60, 128-136) | **Confirmada** (PubMed 39244798, nov.-dez. 2024; DOI 10.1016/j.gerinurse.2024.07.028). 8 autores; 24 estudos, 1.629 registros, 8 bases até 20/2/2024. Conclusão: melhorar o desenho dos estudos e usar instrumentos abrangentes, mas concisos. O texto-base confere |
| Norman e Skinner, 2006 (*J Med Internet Res*, 8(2), e9) | **Confirmada** (16/6/2006; DOI 10.2196/jmir.8.2.e9) |
| OMS/UIT, *Implementation toolkit for accessible telehealth services*, 2024 | **Confirmada** na página de publicação: 9/9/2024, ISBN 978-92-4-009416-1, 35 p. A URL da lista (`.../activities/making-accessible-telehealth-services-...`) é uma página de atividade; **substituída** pela página da publicação `https://www.who.int/publications/i/item/9789240094161` |
| HHS, *Preparing patients for telehealth* | Página existe; título e órgão conferem. **Sem data de atualização na página**; `[s.d.]` mantido. Data de acesso preenchida |
| BridgingApps, *Digital House Calls* | Curso gratuito, autoguiado, com vídeos (reais e animados), textos e recursos visuais; público: idosos e cuidadores familiares; inglês e espanhol; **exige cadastro**; o aluno monta um plano para antes, durante e depois da consulta. A URL da lista (`/courses-landing/`) não pôde ser aberta; **substituída** pela página do curso `https://bridgingapps.org/digital-house-calls/`. Sem data na página |
| Linha 2 do Programa | O edital da Turma 2026 traz apenas o título "Tecnologias para Educação em Saúde" e remete à página de linhas de pesquisa, que **não pôde ser aberta**. Descrição oficial **não conferida** |
| TelessaúdeBA | **Não verificada** (a página não foi localizada nem aberta) |

## R2.5 O que permanece em aberto (AP-IA02)

1. Base dos indicadores de teleconsulta e de interação online (TIC Saúde: tabelas do Cetic.br e gráfico da p. 75) e do indicador de habilidades digitais (TIC Domicílios).
2. DOU (edição e página) da Portaria SGD/MGI nº 6.618/2024 e leitura da Portaria nº 2.794/2026.
3. Descrição oficial da linha 2; documento norteador da CAPES (T1/T2).
4. TelessaúdeBA; data de acesso das demais entradas online; abrir o DOU da Portaria 3.232 e a página `w3.org/TR/WCAG22`.
5. Decisões humanas: "Letramento em Saúde" × "Literacia para a Saúde"; enquadramento do ODS 4 (meta 4.4 × indicador 4.4.1).
6. Conferência humana do texto oficial (DOU) das normas lidas em cópias.

`````
