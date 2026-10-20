import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const localPrototype = pathToFileURL(resolve("produto/index.html")).href;

test.beforeEach(async ({ page }) => {
  await page.goto(localPrototype);
});

test("apresenta o tema escolhido e as três etapas de treino de teleconsulta", async ({ page }) => {
  await expect(page).toHaveTitle(/Treino de Teleconsulta/);
  await expect(page.getByRole("heading", { name: "Vamos praticar uma teleconsulta, passo a passo." })).toBeVisible();
  await expect(page.locator(".brand")).toContainText("Treino de Teleconsulta");
  await expect(page.locator(".tabs")).toContainText("Antes");
  await expect(page.locator(".tabs")).toContainText("Durante");
  await expect(page.locator(".tabs")).toContainText("Encerrar");
  await page.locator('.tab[data-view="guidance"]').click();
  await expect(page.getByRole("heading", { name: "Pratique três situações comuns numa teleconsulta" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "O link não abre" })).toBeVisible();
  await expect(page.locator('[data-scenario-card="entry"]').getByText(/sala virtual fictícia/)).toBeVisible();
  await page.getByRole("button", { name: "2. Resolver o áudio" }).click();
  await expect(page.getByRole("heading", { name: "Não consigo ouvir" })).toBeVisible();
  await page.getByRole("button", { name: "3. Pedir esclarecimento" }).click();
  await expect(page.getByRole("heading", { name: "Não entendi uma informação" })).toBeVisible();
  await page.locator('.tab[data-view="next"]').click();
  await expect(page.getByRole("heading", { name: "Confirme o que ficou combinado" })).toBeVisible();
});

test("começa na etapa Preparar e mantém os outros painéis ocultos", async ({ page }) => {
  await expect(page.locator("#view-prepare")).toBeVisible();
  await expect(page.locator("#view-guidance")).toBeHidden();
  await expect(page.locator("#view-next")).toBeHidden();
  await expect(page.locator('.tab[data-view="prepare"]')).toHaveAttribute("aria-current", "step");
  await expect(page.locator("#view-prepare")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("#view-guidance")).toHaveAttribute("aria-hidden", "true");
});

test("teclado percorre a navegação e ativa etapa com Enter", async ({ page }) => {
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator('.tab[data-view="prepare"]')).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator('.tab[data-view="guidance"]')).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#guidance-title")).toBeFocused();
  await expect(page.locator("#view-guidance")).toBeVisible();
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
  await expect(page.locator('[data-scenario-target="entry"]')).toHaveAttribute("aria-pressed", "true");
});

test("navegação move o foco para o título da etapa ativa", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await expect(page.locator("#view-guidance")).toBeVisible();
  await expect(page.locator("#view-prepare")).toBeHidden();
  await expect(page.locator("#guidance-title")).toBeFocused();
  await expect(page.locator('.tab[data-view="guidance"]')).toHaveAttribute("aria-current", "step");
});

test("os controles fictícios permitem praticar ações sem ativar áudio nem enviar mensagens reais", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await page.getByRole("button", { name: "Tentar entrar na sala de treino" }).click();
  await expect(page.locator("#entry-room-feedback")).toContainText("Nenhuma conexão real foi aberta");
  await page.getByRole("button", { name: "2. Resolver o áudio" }).click();
  await page.getByRole("button", { name: "Conferir áudio (simulação)" }).click();
  await expect(page.locator("#room-feedback")).toContainText("conferir o controle de áudio");
  await expect(page.locator("#room-feedback")).toContainText("alto-falante ou fone");
  await page.getByRole("button", { name: "Avisar que não estou ouvindo" }).click();
  await expect(page.locator("#room-feedback")).toContainText("Não estou conseguindo ouvir");
  await expect(page.locator("#room-feedback")).toContainText("não envia uma mensagem real");
  await expect(page.locator("#view-guidance")).toContainText("não ativam microfone nem áudio real");
});

test("avaliação de compreensão exige escolha e apresenta feedback coerente", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await page.getByRole("button", { name: "2. Resolver o áudio" }).click();
  await page.locator("#check-understanding").click();
  await expect(page.locator("#understanding-feedback")).toContainText("Escolha uma resposta");
  await page.locator('input[name="understanding"][value="correct"]').check();
  await page.locator("#check-understanding").click();
  await expect(page.locator("#understanding-feedback")).toContainText("Isso!");
  await page.locator('input[name="understanding"][value="wrong"]').first().check();
  await page.locator("#check-understanding").click();
  await expect(page.locator("#understanding-feedback")).toContainText("Tente novamente");
});

test("cenário de entrada recomenda usar link/canal oficial sem compartilhar senhas", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await page.locator('[name="entry-choice"][value="unsafe"]').first().check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#entry-choice-feedback")).toContainText("Tente novamente");
  await page.locator('[name="entry-choice"][value="safe"]').check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#entry-choice-feedback")).toContainText("Boa escolha");
  await expect(page.locator("#entry-choice-feedback")).toContainText("contato que o serviço de saúde informou antes");
  await expect(page.locator("#entry-choice-feedback")).toContainText("senha ou código de acesso");
});

test("cenário de esclarecimento orienta a pedir repetição em vez de adivinhar", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  await page.getByRole("button", { name: "3. Pedir esclarecimento" }).click();
  await page.locator('[name="clarify-choice"][value="unsafe"]').first().check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#clarify-feedback")).toContainText("Tente novamente");
  await page.locator('[name="clarify-choice"][value="safe"]').check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#clarify-feedback")).toContainText("Boa prática");
  await expect(page.locator("#clarify-feedback")).toContainText("próximo passo mencionado");
  await expect(page.locator("#clarify-feedback")).toContainText("não fornece orientação clínica");
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
  await page.getByRole("button", { name: "2. Resolver o áudio" }).click();
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
  await expect(page.locator("#room-feedback")).toBeEmpty();
  await expect(page.locator("#entry-room-feedback")).toBeEmpty();
  await expect(page.locator("#entry-choice-feedback")).toBeEmpty();
  await expect(page.locator("#clarify-feedback")).toBeEmpty();
  await expect(page.locator("#rating-feedback")).toBeEmpty();
  await expect(page.locator('[data-rating][aria-pressed="true"]')).toHaveCount(0);
  await expect(page.locator("#check-status")).toHaveText("Nenhum item marcado.");
});

for (const width of [320, 360, 390, 768, 1280]) {
  test(`não cria rolagem horizontal nas três etapas com viewport de ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(localPrototype);

    const checkOverflow = async (state) => {
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        page: document.documentElement.scrollWidth
      }));
      expect(
        dimensions.page,
        `etapa ${state}: largura da página (${dimensions.page}px) excedeu viewport (${dimensions.viewport}px)`
      ).toBeLessThanOrEqual(dimensions.viewport);
    };

    await checkOverflow("Preparar");
    await page.locator('.tab[data-view="guidance"]').click();
    await expect(page.locator("#guidance-title")).toBeFocused();
    await checkOverflow("Entender");
    await page.locator('.tab[data-view="next"]').click();
    await expect(page.locator("#next-title")).toBeFocused();
    await checkOverflow("Próximos passos");
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

test("axe-core: verifica acessibilidade nos três cenários de prática", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();
  const cases = [
    { name: "1. Entrar na sala", target: "#entry-title" },
    { name: "2. Resolver o áudio", target: "#audio-title" },
    { name: "3. Pedir esclarecimento", target: "#clarify-title" }
  ];
  for (const item of cases) {
    await page.getByRole("button", { name: item.name }).click();
    await expect(page.locator(item.target)).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      results.violations.map(violation => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.map(node => ({ target: node.target, summary: node.failureSummary }))
      }))
    ).toEqual([]);
  }
});

test("navegação completa não gera exceções JavaScript nem solicita recursos externos", async ({ page }) => {
  const pageErrors = [];
  const externalRequests = [];
  page.on("pageerror", error => pageErrors.push(error.message));
  page.on("request", request => {
    if (/^https?:/i.test(request.url())) externalRequests.push(request.url());
  });

  await page.reload();
  await page.locator(".check-row input").first().check();
  await page.locator("#reset-checks").click();
  await page.locator('.tab[data-view="guidance"]').click();
  await page.getByRole("button", { name: "2. Resolver o áudio" }).click();
  await page.locator('input[name="understanding"][value="correct"]').check();
  await page.locator("#check-understanding").click();
  await page.locator('.tab[data-view="next"]').click();
  await page.locator('[data-rating="4"]').click();
  await page.locator("#restart").click();

  expect(pageErrors, "erros JavaScript inesperados").toEqual([]);
  expect(externalRequests, "solicitações externas inesperadas").toEqual([]);
});

test("com movimento reduzido ativo, a interface continua navegável", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator('.tab[data-view="guidance"]').click();
  await expect(page.locator("#view-guidance")).toBeVisible();
  await expect(page.locator("#guidance-title")).toBeFocused();
});


test("feedbacks dos três cenários explicam uma próxima ação concreta", async ({ page }) => {
  await page.locator('.tab[data-view="guidance"]').click();

  await page.locator('[name="entry-choice"][value="safe"]').check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#entry-choice-feedback")).toContainText("Confira a conexão e confirme o link");
  await page.locator('[name="entry-choice"][value="unsafe"]').first().check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#entry-choice-feedback")).toContainText("confirme o link por um canal oficial que você já conhece");

  await page.getByRole("button", { name: "2. Resolver o áudio" }).click();
  await page.locator('[name="understanding"][value="correct"]').check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#understanding-feedback")).toContainText("saída de som está correta");
  await page.locator('[name="understanding"][value="wrong"]').first().check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#understanding-feedback")).toContainText("avise a pessoa profissional");

  await page.getByRole("button", { name: "3. Pedir esclarecimento" }).click();
  await page.locator('[name="clarify-choice"][value="safe"]').check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#clarify-feedback")).toContainText("confirmar qual é o próximo passo");
  await page.locator('[name="clarify-choice"][value="unsafe"]').first().check();
  await page.getByRole("button", { name: "Verificar resposta" }).click();
  await expect(page.locator("#clarify-feedback")).toContainText("Não precisa fingir que entendeu");
});
