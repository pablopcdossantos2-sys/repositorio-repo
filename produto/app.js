(() => {
  const tabs = [...document.querySelectorAll(".tab")];
  const views = [...document.querySelectorAll("[id^='view-']")];
  const checks = [...document.querySelectorAll(".check-row input")];
  const status = document.getElementById("check-status");
  const scenarioTabs = [...document.querySelectorAll("[data-scenario-target]")];
  const scenarioCards = [...document.querySelectorAll("[data-scenario-card]")];

  const themeToggle = document.getElementById("theme-toggle");
  const textDecrease = document.getElementById("text-decrease");
  const textIncrease = document.getElementById("text-increase");
  const textSizeValue = document.getElementById("text-size-value");
  const contrastToggle = document.getElementById("contrast-toggle");
  const paletteSelect = document.getElementById("palette-select");
  const focusToggle = document.getElementById("focus-toggle");
  const accessibilityReset = document.getElementById("accessibility-reset");
  const accessibilityStatus = document.getElementById("accessibility-status");
  const textSizes = [
    { value: "normal", label: "Normal" },
    { value: "large", label: "Grande" },
    { value: "larger", label: "Muito grande" }
  ];

  function syncAccessibilityControls(announce = false) {
    const dark = document.body.dataset.theme === "dark";
    const highContrast = document.body.dataset.contrast === "high";
    const focusEnhanced = document.body.dataset.focusMode === "enhanced";
    const textSizeIndex = Math.max(0, textSizes.findIndex(item => item.value === document.body.dataset.textSize));
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.textContent = dark ? "Ativar modo claro" : "Ativar modo escuro";
    contrastToggle.setAttribute("aria-pressed", String(highContrast));
    contrastToggle.textContent = highContrast ? "Desativar alto contraste" : "Ativar alto contraste";
    focusToggle.setAttribute("aria-pressed", String(focusEnhanced));
    focusToggle.textContent = focusEnhanced ? "Desativar foco e leitura reforçados" : "Reforçar foco e leitura";
    textSizeValue.textContent = textSizes[textSizeIndex].label;
    textDecrease.disabled = textSizeIndex === 0;
    textIncrease.disabled = textSizeIndex === textSizes.length - 1;
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", dark ? "#0c1219" : "#f5f8fc");
    if (announce) {
      const paletteLabel = paletteSelect.options[paletteSelect.selectedIndex].text;
      accessibilityStatus.textContent = [
        dark ? "Modo escuro" : "Modo claro",
        "texto " + textSizes[textSizeIndex].label.toLowerCase(),
        highContrast ? "alto contraste ativado" : "contraste padrão",
        "paleta " + paletteLabel.toLowerCase(),
        focusEnhanced ? "foco e leitura reforçados ativados" : "foco reforçado desativado"
      ].join(". ") + ".";
    }
  }

  themeToggle.addEventListener("click", () => {
    document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    syncAccessibilityControls(true);
  });
  textDecrease.addEventListener("click", () => {
    const index = textSizes.findIndex(item => item.value === document.body.dataset.textSize);
    if (index > 0) document.body.dataset.textSize = textSizes[index - 1].value;
    syncAccessibilityControls(true);
  });
  textIncrease.addEventListener("click", () => {
    const index = textSizes.findIndex(item => item.value === document.body.dataset.textSize);
    if (index >= 0 && index < textSizes.length - 1) document.body.dataset.textSize = textSizes[index + 1].value;
    syncAccessibilityControls(true);
  });
  contrastToggle.addEventListener("click", () => {
    document.body.dataset.contrast = document.body.dataset.contrast === "high" ? "standard" : "high";
    syncAccessibilityControls(true);
  });
  paletteSelect.addEventListener("change", () => {
    document.body.dataset.palette = paletteSelect.value;
    syncAccessibilityControls(true);
  });
  focusToggle.addEventListener("click", () => {
    document.body.dataset.focusMode = document.body.dataset.focusMode === "enhanced" ? "standard" : "enhanced";
    syncAccessibilityControls(true);
  });
  accessibilityReset.addEventListener("click", () => {
    document.body.dataset.theme = "light";
    document.body.dataset.textSize = "normal";
    document.body.dataset.contrast = "standard";
    document.body.dataset.palette = "standard";
    document.body.dataset.focusMode = "standard";
    paletteSelect.value = "standard";
    syncAccessibilityControls(false);
    accessibilityStatus.textContent = "As preferências de aparência e acessibilidade foram restauradas.";
  });


  const scenarioFeedback = {
    entry: {
      inputName: "entry-choice",
      feedbackId: "entry-choice-feedback",
      success: "Boa escolha. Confira se a internet está funcionando. Confirme o link pelo contato que o serviço de saúde informou antes. Se ainda não conseguir entrar, peça ajuda por esse contato. Não digite senha ou código em links inesperados.",
      retry: "Tente novamente. Confira se a internet está funcionando e confirme o link pelo contato que o serviço de saúde informou antes. Se ainda não conseguir entrar, peça ajuda por esse contato. Não digite senha ou código em links inesperados."
    },
    audio: {
      inputName: "understanding",
      feedbackId: "understanding-feedback",
      success: "Isso. Confira se o volume está ligado e se o som está saindo pelo alto-falante ou fone que você está usando. Se ainda não ouvir, avise o profissional de saúde e peça ajuda. Esta situação é fictícia: não há chamada nem áudio real.",
      retry: "Tente novamente. Confira o volume e o alto-falante ou fone que está usando. Se continuar sem ouvir, avise o profissional de saúde e peça ajuda. Não compartilhe dados pessoais por links inesperados."
    },
    clarify: {
      inputName: "clarify-choice",
      feedbackId: "clarify-feedback",
      success: "Boa prática. Peça ao profissional de saúde que repita ou explique de outro jeito. Depois, confirme qual é o próximo passo mencionado. Isso ajuda a evitar mal-entendidos; não precisa adivinhar nem mudar orientações por conta própria. Este exemplo não fornece orientação clínica.",
      retry: "Tente novamente. Diga que a informação não ficou clara e peça ao profissional de saúde que repita ou explique de outro jeito. Depois, confirme o próximo passo mencionado. Não precisa fingir que entendeu nem adivinhar."
    },
    closing: {
      inputName: "closing-choice",
      feedbackId: "closing-choice-feedback",
      success: "Boa escolha. Antes de encerrar, confirme o que ficou combinado, qual é o próximo passo e qual contato o serviço de saúde informou para dúvidas. Se uma informação não ficou clara, peça que o profissional repita ou explique de outro jeito. Não use links inesperados. Este é um exemplo fictício e não fornece orientação clínica.",
      retry: "Tente novamente. Não precisa fingir que entendeu nem abrir um link de alguém que você não reconhece. Peça ao profissional de saúde que esclareça o que ficou combinado, confirme o próximo passo e use o contato que o serviço informou antes se tiver dúvidas."
    }
  };

  function showView(name) {
    const target = document.getElementById("view-" + name);
    if (!target) return;
    views.forEach(view => {
      const active = view === target;
      view.classList.toggle("hidden", !active);
      view.setAttribute("aria-hidden", String(!active));
    });
    tabs.forEach(tab => {
      const active = tab.dataset.view === name;
      tab.classList.toggle("active", active);
      if (active) tab.setAttribute("aria-current", "step");
      else tab.removeAttribute("aria-current");
    });
    const heading = target.querySelector("h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function showScenario(name, moveFocus = true) {
    const target = scenarioCards.find(card => card.dataset.scenarioCard === name);
    if (!target) return;
    scenarioCards.forEach(card => {
      const active = card === target;
      card.classList.toggle("hidden", !active);
      card.setAttribute("aria-hidden", String(!active));
    });
    scenarioTabs.forEach(button => {
      const active = button.dataset.scenarioTarget === name;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (moveFocus) {
      const heading = target.querySelector("h3");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    }
  }

  function updateCheckStatus() {
    const count = checks.filter(input => input.checked).length;
    status.textContent = count === 0 ? "Nenhum item marcado." : count === 1 ? "1 item marcado nesta demonstração." : count + " itens marcados nesta demonstração.";
  }

  tabs.forEach(tab => tab.addEventListener("click", () => showView(tab.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => showView(button.dataset.go)));
  checks.forEach(input => input.addEventListener("change", updateCheckStatus));
  scenarioTabs.forEach(button => button.addEventListener("click", () => showScenario(button.dataset.scenarioTarget)));

  document.getElementById("reset-checks").addEventListener("click", () => {
    checks.forEach(input => { input.checked = false; });
    updateCheckStatus();
  });

  document.getElementById("simulate-enter").addEventListener("click", () => {
    document.getElementById("entry-room-feedback").textContent = "Nesta situação fictícia, o link continua sem abrir. Confira se a internet está funcionando e confirme o link pelo contato que o serviço de saúde informou antes. Se ainda não conseguir entrar, peça ajuda por esse contato. Não digite senha ou código em links inesperados. Nenhuma conexão real foi aberta.";
  });
  document.getElementById("simulate-audio").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Você praticou uma primeira verificação. Confira se o volume está ligado e se o som sai pelo alto-falante ou fone que está usando. Se ainda não ouvir, avise o profissional de saúde e peça ajuda.";
  });
  document.getElementById("simulate-help").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Você pode dizer: “Não estou conseguindo ouvir. Pode me ajudar, por favor?” Este botão só mostra um exemplo; não envia uma mensagem real.";
  });

  document.querySelectorAll("[data-scenario-check]").forEach(button => {
    button.addEventListener("click", () => {
      const config = scenarioFeedback[button.dataset.scenarioCheck];
      if (!config) return;
      const selected = document.querySelector('input[name="' + config.inputName + '"]:checked');
      const feedback = document.getElementById(config.feedbackId);
      feedback.classList.remove("is-success", "is-retry");
      if (!selected) {
        feedback.textContent = "Escolha uma resposta para ver o feedback.";
        feedback.classList.add("is-retry");
      } else if (selected.value === "safe" || selected.value === "correct") {
        feedback.textContent = config.success;
        feedback.classList.add("is-success");
      } else {
        feedback.textContent = config.retry;
        feedback.classList.add("is-retry");
      }
    });
  });

  document.querySelectorAll("[data-rating]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-rating]").forEach(other => other.setAttribute("aria-pressed", String(other === button)));
    document.getElementById("rating-feedback").textContent = "Você selecionou " + button.dataset.rating + " de 5. Essa resposta não é enviada nem armazenada.";
  }));

  document.getElementById("restart").addEventListener("click", () => {
    checks.forEach(input => { input.checked = false; });
    document.querySelectorAll("input[type='radio']").forEach(input => { input.checked = false; });
    document.querySelectorAll(".feedback").forEach(feedback => {
      feedback.textContent = "";
      feedback.classList.remove("is-success", "is-retry");
    });
    document.querySelectorAll("[data-rating]").forEach(button => button.setAttribute("aria-pressed", "false"));
    updateCheckStatus();
    showScenario("entry", false);
    showView("prepare");
  });

  syncAccessibilityControls(false);

  views.forEach(view => view.setAttribute("aria-hidden", String(view.id !== "view-prepare")));
  updateCheckStatus();
  showScenario("entry", false);
})();