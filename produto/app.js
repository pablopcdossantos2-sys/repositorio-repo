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
      success: "Boa escolha. Confira a conexão e use o link/canal oficial. Se continuar sem acesso, peça ajuda pelo contato oficial já conhecido; não envie senhas ou dados por links suspeitos.",
      retry: "Tente novamente. Evite compartilhar dados pessoais em links inesperados e, se não conseguir entrar, avise o serviço pelo contato oficial conhecido."
    },
    audio: {
      inputName: "understanding",
      feedbackId: "understanding-feedback",
      success: "Isso! Confira o controle de áudio e avise que não está ouvindo. Esta é uma situação fictícia; o simulador não se conecta a uma consulta real.",
      retry: "Tente novamente: não precisa encerrar sem avisar nem compartilhar dados pessoais. Procure o controle de áudio visível e comunique a dificuldade."
    },
    clarify: {
      inputName: "clarify-choice",
      feedbackId: "clarify-feedback",
      success: "Boa prática. Peça que a informação seja repetida ou explicada de outro jeito e confirme o próximo passo. O simulador não fornece nem modifica orientações clínicas.",
      retry: "Tente novamente. É melhor pedir esclarecimento do que fingir que entendeu ou adivinhar uma orientação."
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
    document.getElementById("entry-room-feedback").textContent = "Nesta situação fictícia, o acesso continua indisponível. Confira a conexão e o link oficial; se o problema persistir, use o contato oficial já conhecido. Nenhuma conexão real foi aberta.";
  });
  document.getElementById("simulate-audio").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Você praticou conferir o controle de áudio. Se ainda não ouvir, avise a pessoa profissional.";
  });
  document.getElementById("simulate-help").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Boa prática: informe com clareza que não está ouvindo e peça ajuda. Este botão não envia uma mensagem real.";
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