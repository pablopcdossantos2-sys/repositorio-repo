import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const localPrototype = pathToFileURL(resolve("produto/index.html")).href;

test.beforeEach(async ({ page }) => {
  await page.goto(localPrototype);
});

test("começa na etapa Preparar e mantém os outros painéis ocultos", async ({ page }) => {
  await expect(page.locator("#view-prepare")).toBeVisible();
  await expect(page.locator("#view-guidance")).toBeHidden();
  await expect(page.locator("#view-next")).toBeHidden();
  await expect(page.locator('.tab[data-view="prepare"]')).toHaveAttribute("aria-current", "step");
  await expect(page.locator("#view-prepare")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("#view-guidance")).toHaveAttribute("aria-hidden", "true");
});

test("checklist atualiza o status e Desmarcar tudo limpa as escolhas", async ({ page }) => {
  const checks = page.locator(".check-row input");
  await checks.nth(0).check();
  await expect(page.locator("#check-status")).toHaveText("1 item marcado nesta demonstração.");
  await checks.nth(1).check();
  await expect(page.locator("#check-status")).toHaveText("2 itens marcados nesta demonstração.");
  await page.getByRole("button", { name: "Desmarcar tudo" }).click();
  for (const checkbox of await checks.all()) await expect(checkbox).not.toBeChecked();
  await expect(page.locator("#check-status")).toHaveText("Nenhum item marcado.");
});

test("navegação move o foco para o título da etapa ativa", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await expect(page.locator("#view-guidance")).toBeVisible();
  await expect(page.locator("#view-prepare")).toBeHidden();
  await expect(page.locator("#guidance-title")).toBeFocused();
  await expect(page.locator('.tab[data-view="guidance"]')).toHaveAttribute("aria-current", "step");
});

test("avaliação de compreensão exige escolha e apresenta feedback coerente", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await page.locator("#check-understanding").click();
  await expect(page.locator("#understanding-feedback")).toContainText("Escolha uma resposta");
  await page.locator('input[name="understanding"][value="correct"]').check();
  await page.locator("#check-understanding").click();
  await expect(page.locator("#understanding-feedback")).toContainText("Isso!");
  await page.locator('input[name="understanding"][value="wrong"]').first().check();
  await page.locator("#check-understanding").click();
  await expect(page.locator("#understanding-feedback")).toContainText("Essa não é a ideia");
});

test("nota de facilidade mantém somente uma opção selecionada", async ({ page }) => {
  await page.locator('.tab[data-view="next"]').click();
  await page.locator('[data-rating="4"]').click();
  await expect(page.locator('[data-rating="4"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator('[data-rating="1"]')).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("#rating-feedback")).toContainText("4 de 5");
  await page.locator('[data-rating="2"]').click();
  await expect(page.locator('[data-rating="2"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator('[data-rating="4"]')).toHaveAttribute("aria-pressed", "false");
});

test("reinicialização restaura escolhas, feedbacks, nota, etapa e foco", async ({ page }) => {
  await page.locator(".check-row input").first().check();
  await page.locator('.tab[data-view="guidance"]').click();
  await page.locator('input[name="understanding"][value="correct"]').check();
  await page.locator("#check-understanding").click();
  await page.locator('.tab[data-view="next"]').click();
  await page.locator('[data-rating="5"]').click();
  await page.locator("#restart").click();

  await expect(page.locator("#view-prepare")).toBeVisible();
  await expect(page.locator("#prepare-title")).toBeFocused();
  for (const checkbox of await page.locator(".check-row input").all()) await expect(checkbox).not.toBeChecked();
  for (const option of await page.locator('input[name="understanding"]').all()) await expect(option).not.toBeChecked();
  await expect(page.locator("#understanding-feedback")).toBeEmpty();
  await expect(page.locator("#rating-feedback")).toBeEmpty();
  await expect(page.locator('[data-rating][aria-pressed="true"]')).toHaveCount(0);
  await expect(page.locator("#check-status")).toHaveText("Nenhum item marcado.");
});

for (const width of [320, 360, 390, 768, 1280]) {
  test(`não cria rolagem horizontal no estado inicial com viewport de ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(localPrototype);
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth
    }));
    expect(dimensions.page, `largura da página (${dimensions.page}px) excedeu viewport (${dimensions.viewport}px)`).toBeLessThanOrEqual(dimensions.viewport);
  });
}

for (const view of [
  { name: "Preparar", selector: "#view-prepare" },
  { name: "Entender", selector: '.tab[data-view="guidance"]', target: "#view-guidance" },
  { name: "Próximos passos", selector: '.tab[data-view="next"]', target: "#view-next" }
]) {
  test(`axe-core: verificações WCAG 2.1/2.2 A/AA em ${view.name}`, async ({ page }) => {
    if (view.target) await page.locator(view.selector).click();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      results.violations.map(violation => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        nodes: violation.nodes.map(node => ({ target: node.target, summary: node.failureSummary }))
      }))
    ).toEqual([]);
  });
}

test("com movimento reduzido ativo, a interface continua navegável", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator('.tab[data-view="guidance"]').click();
  await expect(page.locator("#view-guidance")).toBeVisible();
  await expect(page.locator("#guidance-title")).toBeFocused();
});
