(() => {
  const tabs = [...document.querySelectorAll(".tab")];
  const views = [...document.querySelectorAll("[id^='view-']")];
  const checks = [...document.querySelectorAll(".check-row input")];
  const status = document.getElementById("check-status");
  const scenarioTabs = [...document.querySelectorAll("[data-scenario-target]")];
  const scenarioCards = [...document.querySelectorAll("[data-scenario-card]")];

  const scenarioFeedback = {
    entry: {
      inputName: "entry-choice",
      feedbackId: "entry-choice-feedback",
      success: "Boa escolha. Confira a conexão e confirme o link usando um canal oficial que você já conhece. Se não conseguir entrar, procure esse contato para pedir ajuda. Não compartilhe senha ou código de acesso em links inesperados.",
      retry: "Tente novamente. Se o link não abrir, confira a conexão e confirme o link por um canal oficial que você já conhece. Se continuar sem acesso, procure esse contato. Não compartilhe senha ou código de acesso."
    },
    audio: {
      inputName: "understanding",
      feedbackId: "understanding-feedback",
      success: "Isso! Confira se o volume do aparelho está ligado e, se houver essa opção, se a saída de som está correta. Se ainda não ouvir, avise a pessoa profissional e peça ajuda. Esta situação é fictícia: não há chamada nem áudio real.",
      retry: "Tente novamente. Confira o volume e, se houver essa opção, a saída de som. Se continuar sem ouvir, avise a pessoa profissional em vez de sair sem explicar o problema. Não é necessário compartilhar dados pessoais."
    },
    clarify: {
      inputName: "clarify-choice",
      feedbackId: "clarify-feedback",
      success: "Boa prática. Peça que a pessoa repita ou explique de outro jeito e, em seguida, confirme o próximo passo mencionado. Isso ajuda a evitar mal-entendidos; não é preciso adivinhar nem alterar orientações por conta própria. Este exemplo não fornece orientação clínica.",
      retry: "Tente novamente. Diga que a informação não ficou clara, peça para repetir ou explicar de outro jeito e confirme o próximo passo mencionado. Não precisa fingir que entendeu nem adivinhar."
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
    document.getElementById("entry-room-feedback").textContent = "Nesta situação fictícia, o link continua sem abrir. Confira a conexão e confirme o link por um canal oficial que você já conhece. Se não conseguir entrar, procure esse contato para pedir ajuda. Não compartilhe senhas ou códigos em links inesperados. Nenhuma conexão real foi aberta.";
  });
  document.getElementById("simulate-audio").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Você praticou conferir o controle de áudio. Na prática real, veja se o volume do aparelho está ligado e, se houver essa opção, confira a saída de som. Se ainda não ouvir, avise a pessoa profissional e peça ajuda.";
  });
  document.getElementById("simulate-help").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Você pode dizer: “Não estou conseguindo ouvir. Pode me ajudar a conferir o áudio, por favor?” Este botão só mostra um exemplo e não envia uma mensagem real.";
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

  views.forEach(view => view.setAttribute("aria-hidden", String(view.id !== "view-prepare")));
  updateCheckStatus();
  showScenario("entry", false);
})();