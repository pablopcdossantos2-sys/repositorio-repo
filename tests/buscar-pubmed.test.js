import { test } from "node:test";
import assert from "node:assert/strict";
import { getStrategyQuery, parseArguments, queryPubMed } from "../scripts/buscar-pubmed.mjs";

test("extrai literalmente uma estratégia do registro", () => {
  const fence = String.fromCharCode(96).repeat(3);
  const markdown = ["**PM-1 — estratégia**", "", "Texto.", "", fence + "text", "(telehealth[tiab] OR telemedicine[tiab]) AND patient*[tiab]", fence, "", "**PM-2 — outra**"].join("\n");
  assert.equal(getStrategyQuery("PM-1", markdown), "(telehealth[tiab] OR telemedicine[tiab]) AND patient*[tiab]");
});

test("analisa estratégia e paginação", () => {
  assert.deepEqual(parseArguments(["--strategy", "PM-2", "--retmax", "500", "--retstart", "100"]), { strategy: "PM-2", query: null, label: null, out: null, retmax: 500, retstart: 100, help: false });
});

test("rejeita ausência de consulta e estratégia junto com consulta literal", () => {
  assert.throws(() => parseArguments([]), /Informe exatamente/);
  assert.throws(() => parseArguments(["--strategy", "PM-1", "--query", "test"]), /Informe exatamente/);
});

test("registra contagem, IDs e paginação de uma resposta simulada", async () => {
  let urlSeen;
  const record = await queryPubMed({
    query: "telehealth[tiab] AND patient education",
    label: "PM-1",
    retmax: 2,
    now: () => new Date("2026-10-21T12:00:00.000Z"),
    fetchImpl: async url => {
      urlSeen = new URL(url);
      return new Response(JSON.stringify({ esearchresult: { count: "5", idlist: ["123", "456"] } }), { status: 200, headers: { "content-type": "application/json" } });
    }
  });
  assert.equal(urlSeen.searchParams.get("db"), "pubmed");
  assert.equal(urlSeen.searchParams.get("term"), "telehealth[tiab] AND patient education");
  assert.equal(record.executedAtUTC, "2026-10-21T12:00:00.000Z");
  assert.equal(record.result.totalHitsReportedByPubMed, 5);
  assert.deepEqual(record.result.returnedPmids, ["123", "456"]);
  assert.equal(record.result.nextRetstart, 2);
  assert.equal(record.result.pageIncomplete, true);
  assert.match(record.warnings[0], /--retstart 2/);
});

test("rejeita paginação acima do limite", async () => {
  let called = false;
  await assert.rejects(queryPubMed({ query: "test", retmax: 10001, fetchImpl: async () => { called = true; return new Response("{}"); } }), /retmax inválido/);
  assert.equal(called, false);
});

test("relata erro HTTP da API", async () => {
  await assert.rejects(queryPubMed({ query: "test", fetchImpl: async () => new Response("erro", { status: 503 }) }), /HTTP 503/);
});
