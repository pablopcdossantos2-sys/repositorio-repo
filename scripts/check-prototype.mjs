#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import vm from "node:vm";

const root = process.cwd();
const productDir = path.join(root, "produto");
const htmlPath = path.join(productDir, "index.html");
const cssPath = path.join(productDir, "styles.css");
const jsPath = path.join(productDir, "app.js");
const html = fs.readFileSync(htmlPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const js = fs.readFileSync(jsPath, "utf8");
let passed = 0;

function check(label, fn) {
  try {
    fn();
    passed += 1;
    console.log(`PASS ${label}`);
  } catch (error) {
    console.error(`FAIL ${label}: ${error.message}`);
    process.exitCode = 1;
  }
}
function contrastRatio(hexA, hexB) {
  const luminance = hex => {
    const rgb = hex.match(/[0-9a-f]{2}/gi).map(value => parseInt(value, 16) / 255);
    const linear = rgb.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const a = luminance(hexA);
  const b = luminance(hexB);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
function localFileExists(url) {
  if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(url)) return true;
  const localPath = url.split(/[?#]/, 1)[0];
  if (!localPath) return true;
  return fs.existsSync(path.resolve(productDir, localPath));
}

check("arquivos principais do protótipo existem", () => {
  for (const file of [htmlPath, cssPath, jsPath]) assert.ok(fs.existsSync(file), file);
});
check("documento em português e metadados básicos", () => {
  assert.match(html, /<html\s+lang=["']pt-BR["']/i);
  assert.match(html, /<meta\s+name=["']viewport["']/i);
  assert.match(html, /<meta\s+name=["']description["']/i);
  assert.match(html, /<title>[^<]+<\/title>/i);
});
const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
const idSet = new Set(ids);
check("IDs HTML são únicos", () => assert.equal(ids.length, idSet.size, "há IDs duplicados"));
check("o produto está centrado no tema Treino de Teleconsulta", () => {
  assert.match(html, /Treino de Teleconsulta/i);
  assert.match(html, /sala virtual fictícia/i);
  assert.match(html, /Pratique três situações comuns numa teleconsulta/i);
  assert.match(html, /data-scenario-card="entry"/);
  assert.match(html, /data-scenario-card="audio"/);
  assert.match(html, /data-scenario-card="clarify"/);
  assert.match(html, /data-scenario-target/);
  assert.match(html, /id="simulate-enter"/);
  assert.match(html, /id="simulate-audio"/);
  assert.match(html, /id="entry-choice-feedback"/);
  assert.match(html, /id="clarify-feedback"/);
  assert.match(html, /id="simulate-help"/);
  assert.match(html, /não ativam microfone nem áudio real/i);
  assert.match(html, /baixa familiaridade digital|simulador educativo/i);
  assert.doesNotMatch(html, /Conversa Clara/);
});
check("pular para conteúdo tem destino válido", () => {
  assert.match(html, /class=["']skip-link["'][^>]*href=["']#main["']/i);
  assert.ok(idSet.has("main"), "não existe id=main");
});
check("referências locais em href/src existem", () => {
  const refs = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map(match => match[1]);
  const missing = refs.filter(ref => !localFileExists(ref));
  assert.deepEqual(missing, [], `referências locais inexistentes: ${missing.join(", ")}`);
});
check("aria-controls e aria-labelledby apontam para IDs existentes", () => {
  for (const match of html.matchAll(/\baria-controls=["']([^"']+)["']/gi)) {
    for (const id of match[1].trim().split(/\s+/)) assert.ok(idSet.has(id), `aria-controls aponta para ${id}`);
  }
  for (const match of html.matchAll(/\baria-labelledby=["']([^"']+)["']/gi)) {
    for (const id of match[1].trim().split(/\s+/)) assert.ok(idSet.has(id), `aria-labelledby aponta para ${id}`);
  }
});
check("abas e botões data-go possuem painel de destino", () => {
  for (const match of html.matchAll(/\bdata-view=["']([^"']+)["']/gi)) {
    assert.ok(idSet.has(`view-${match[1]}`), `falta painel view-${match[1]}`);
  }
  for (const match of html.matchAll(/\bdata-go=["']([^"']+)["']/gi)) {
    assert.ok(idSet.has(`view-${match[1]}`), `data-go aponta para view-${match[1]} inexistente`);
  }
});
check("foco visível possui cor com contraste mínimo de 3:1 nos fundos testados", () => {
  const focus = /--focus:\s*(#[0-9a-f]{6})/i.exec(css)?.[1];
  assert.ok(focus, "variável --focus não encontrada");
  for (const background of ["#ffffff", "#f4f7fb"]) {
    const ratio = contrastRatio(focus, background);
    assert.ok(ratio >= 3, `contraste de ${focus} sobre ${background} é ${ratio.toFixed(2)}:1`);
    console.log(`  Contraste ${focus} sobre ${background}: ${ratio.toFixed(2)}:1`);
  }
  assert.match(css, /:focus-visible|\.panel h2:focus/, "não foi encontrada regra visível para foco");
});
check("preferência por movimento reduzido é contemplada", () => {
  assert.match(js, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
check("mudança de etapa sincroniza o estado acessível e movimenta o foco", () => {
  assert.match(js, /setAttribute\(["']aria-hidden["'],\s*String\(!active\)\)/);
  assert.match(js, /heading\.focus\(\{\s*preventScroll:\s*true\s*\}\)/);
});
check("opções de avaliação comunicam estado selecionado", () => {
  assert.match(html, /aria-pressed=["']false["']/);
  assert.match(js, /setAttribute\(["']aria-pressed["'],\s*String\(other === button\)\)/);
});
check("reinicialização limpa estados interativos e devolve a etapa inicial", () => {
  assert.match(js, /getElementById\(["']restart["']\)/);
  assert.match(js, /checks\.forEach\(input => \{ input\.checked = false; \}\)/);
  assert.match(js, /input\[name='understanding'\]/);
  assert.match(js, /showView\(["']prepare["']\)/);
  assert.match(js, /rating-feedback/);
  assert.match(js, /scenarioFeedback/);
  assert.match(js, /clarify-choice/);
});
check("HTML/CSS/JS não dependem de chamadas de rede ou armazenamento persistente no protótipo", () => {
  assert.doesNotMatch(js, /\b(?:localStorage|sessionStorage|XMLHttpRequest)\b|\bfetch\s*\(|\bsendBeacon\s*\(/);
});
check("JavaScript é sintaticamente válido", () => {
  new vm.Script(js, { filename: "produto/app.js" });
});

console.log(`\nResultado: ${passed} verificações estáticas concluídas.`);
console.log("Limite: estas verificações não substituem testes em navegador, leitores de tela ou dispositivos reais.");
