#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const STRATEGIES_PATH = resolve(ROOT, "docs/registro-busca-estruturada-2026-10-20.md");
const ENDPOINT = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi";
const STRATEGIES = ["PM-1", "PM-2", "PM-3", "PM-4"];
const MAX_RETMAX = 10000;
const FENCE = String.fromCharCode(96).repeat(3);

export function parseArguments(argv) {
  const options = { strategy: null, query: null, label: null, out: null, retmax: 1000, retstart: 0, help: false };
  const valueFlags = new Set(["--strategy", "--query", "--label", "--out", "--retmax", "--retstart"]);
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") { options.help = true; continue; }
    const equals = arg.indexOf("=");
    const flag = equals > 0 ? arg.slice(0, equals) : arg;
    if (!valueFlags.has(flag)) throw new Error("Opção desconhecida: " + arg);
    let value;
    if (equals > 0) value = arg.slice(equals + 1);
    else {
      if (i + 1 >= argv.length || argv[i + 1].startsWith("--")) throw new Error("Falta o valor de " + flag);
      value = argv[++i];
    }
    if (flag === "--strategy") options.strategy = value.trim().toUpperCase();
    else if (flag === "--query") options.query = value.trim();
    else if (flag === "--label") options.label = value.trim();
    else if (flag === "--out") options.out = value.trim();
    else if (flag === "--retmax") options.retmax = Number(value);
    else if (flag === "--retstart") options.retstart = Number(value);
  }
  if (options.help) return options;
  if (Boolean(options.strategy) === Boolean(options.query)) throw new Error("Informe exatamente --strategy PM-1..PM-4 ou --query com uma consulta literal.");
  if (options.strategy && !STRATEGIES.includes(options.strategy)) throw new Error("Estratégia inválida. Use: " + STRATEGIES.join(", "));
  if (!Number.isInteger(options.retmax) || options.retmax < 0 || options.retmax > MAX_RETMAX) throw new Error("--retmax deve ser um inteiro entre 0 e " + MAX_RETMAX + ".");
  if (!Number.isInteger(options.retstart) || options.retstart < 0) throw new Error("--retstart deve ser um inteiro maior ou igual a zero.");
  if (options.out === "") throw new Error("--out não pode estar vazio.");
  if (options.label === "") options.label = null;
  return options;
}

export function getStrategyQuery(strategy, markdown) {
  if (!STRATEGIES.includes(strategy)) throw new Error("Estratégia desconhecida: " + strategy);
  const start = markdown.indexOf("**" + strategy);
  if (start < 0) throw new Error("Estratégia não encontrada no registro: " + strategy);
  const section = markdown.slice(start);
  const fenceStart = section.indexOf(FENCE);
  const lineEnd = section.indexOf("\n", fenceStart);
  const fenceEnd = section.indexOf(FENCE, lineEnd + 1);
  if (fenceStart < 0 || lineEnd < 0 || fenceEnd < 0) throw new Error("Bloco de consulta incompleto para " + strategy);
  const query = section.slice(lineEnd + 1, fenceEnd).trim();
  if (!query) throw new Error("Consulta vazia para " + strategy);
  return query;
}

export async function queryPubMed({ query, label = "consulta-personalizada", retmax = 1000, retstart = 0, fetchImpl = globalThis.fetch, now = () => new Date() }) {
  if (typeof query !== "string" || !query.trim()) throw new Error("A consulta não pode estar vazia.");
  if (!Number.isInteger(retmax) || retmax < 0 || retmax > MAX_RETMAX) throw new Error("retmax inválido; use 0.." + MAX_RETMAX + ".");
  if (!Number.isInteger(retstart) || retstart < 0) throw new Error("retstart inválido; use um inteiro >= 0.");
  const params = new URLSearchParams({ db: "pubmed", term: query, retmode: "json", retmax: String(retmax), retstart: String(retstart), sort: "relevance" });
  const requestUrl = ENDPOINT + "?" + params.toString();
  let response;
  try {
    response = await fetchImpl(requestUrl, { method: "GET", headers: { accept: "application/json", "user-agent": "treino-teleconsulta-research/1.0" }, signal: AbortSignal.timeout(30000) });
  } catch (error) {
    throw new Error("Falha ao acessar PubMed E-utilities; verifique a conexão. Detalhe: " + error.message);
  }
  if (!response.ok) throw new Error("PubMed E-utilities respondeu HTTP " + response.status + ".");
  let payload;
  try { payload = await response.json(); } catch { throw new Error("A resposta do PubMed não é JSON válido."); }
  const result = payload && payload.esearchresult;
  if (!result || !/^\d+$/.test(String(result.count)) || !Array.isArray(result.idlist)) throw new Error("Resposta do ESearch sem os campos esperados.");
  const count = Number(result.count);
  const ids = result.idlist.map(String);
  const nextRetstart = retstart + ids.length < count ? retstart + ids.length : null;
  const warnings = [];
  if (nextRetstart !== null) warnings.push("Há mais resultados que os IDs desta página. Use --retstart " + nextRetstart + " na mesma consulta para continuar.");
  for (const group of [result.warninglist, result.errorlist]) {
    if (group) for (const [key, values] of Object.entries(group)) if (Array.isArray(values) && values.length) warnings.push(key + ": " + values.join("; "));
  }
  return {
    recordVersion: "1.0",
    project: "Treino de Teleconsulta",
    label,
    executedAtUTC: now().toISOString(),
    database: "PubMed",
    retrievalMethod: "NCBI E-utilities ESearch API",
    exactQuery: query,
    request: { method: "GET", endpoint: ENDPOINT, parameters: { db: "pubmed", retmode: "json", retmax, retstart, sort: "relevance" }, url: requestUrl },
    result: { totalHitsReportedByPubMed: count, retstart, retmaxRequested: retmax, returnedPmidCount: ids.length, returnedPmids: ids, nextRetstart, pageIncomplete: nextRetstart !== null },
    warnings,
    limitations: [
      "Consulta via API é complementar e não substitui a execução na interface oficial ou o registro de filtros visuais.",
      "A saída contém IDs, não títulos/resumos; preserve exportações bibliográficas separadas para triagem."
    ]
  };
}

function helpText() {
  return [
    "Busca complementar no PubMed por NCBI E-utilities",
    "Uso: node scripts/buscar-pubmed.mjs --strategy PM-1 --retmax 10000 --out caminho.json",
    "Ou: node scripts/buscar-pubmed.mjs --query TEXTO --label consulta-teste",
    "Parâmetros: --strategy PM-1..PM-4 | --query TEXTO | --label TEXTO | --retmax N | --retstart N | --out ARQUIVO | --help",
    "O JSON inclui a consulta exata, o horário UTC, a contagem e os PMIDs devolvidos.",
    "Não substitui busca na interface oficial nem exportação para triagem."
  ].join("\n");
}

export async function main(argv = process.argv.slice(2)) {
  try {
    const options = parseArguments(argv);
    if (options.help) { process.stdout.write(helpText() + "\n"); return; }
    let query = options.query;
    if (options.strategy) query = getStrategyQuery(options.strategy, await readFile(STRATEGIES_PATH, "utf8"));
    const record = await queryPubMed({ query, label: options.label || options.strategy || "consulta-personalizada", retmax: options.retmax, retstart: options.retstart });
    const json = JSON.stringify(record, null, 2) + "\n";
    if (options.out) {
      const outputPath = resolve(process.cwd(), options.out);
      await writeFile(outputPath, json, { encoding: "utf8", flag: "wx" });
      process.stdout.write("Registro salvo em: " + outputPath + "\n");
      process.stdout.write("Total reportado: " + record.result.totalHitsReportedByPubMed + "; IDs nesta página: " + record.result.returnedPmidCount + "\n");
      for (const warning of record.warnings) process.stdout.write("Aviso: " + warning + "\n");
    } else process.stdout.write(json);
  } catch (error) {
    process.stderr.write("Erro: " + error.message + "\n");
    process.exitCode = 1;
  }
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) await main();
