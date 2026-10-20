(() => {
  const tabs = [...document.querySelectorAll(".tab")];
  const views = [...document.querySelectorAll("[id^='view-']")];
  const checks = [...document.querySelectorAll(".check-row input")];
  const status = document.getElementById("check-status");

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

    // Move keyboard/screen-reader focus out of the panel that is being hidden.
    const heading = target.querySelector("h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function updateCheckStatus() {
    const count = checks.filter(input => input.checked).length;
    status.textContent = count === 0 ? "Nenhum item marcado." : count === 1 ? "1 item marcado nesta demonstração." : count + " itens marcados nesta demonstração.";
  }

  tabs.forEach(tab => tab.addEventListener("click", () => showView(tab.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => showView(button.dataset.go)));
  checks.forEach(input => input.addEventListener("change", updateCheckStatus));

  document.getElementById("reset-checks").addEventListener("click", () => {
    checks.forEach(input => { input.checked = false; });
    updateCheckStatus();
  });

  document.getElementById("simulate-audio").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Você praticou conferir o controle de áudio. Se ainda não ouvir, avise a pessoa profissional.";
  });

  document.getElementById("simulate-help").addEventListener("click", () => {
    document.getElementById("room-feedback").textContent = "Boa prática: informe com clareza que não está ouvindo e peça ajuda. Este botão não envia uma mensagem real.";
  });

  document.getElementById("check-understanding").addEventListener("click", () => {
    const selected = document.querySelector("input[name='understanding']:checked");
    const feedback = document.getElementById("understanding-feedback");
    if (!selected) {
      feedback.textContent = "Escolha uma resposta para continuar.";
      feedback.style.color = "#8a4b00";
      return;
    }
    if (selected.value === "correct") {
      feedback.textContent = "Isso! Primeiro, confira o controle de áudio disponível e avise que não está ouvindo. Esta é uma situação fictícia; o simulador não se conecta a uma consulta real.";
      feedback.style.color = "#155e42";
    } else {
      feedback.textContent = "Tente novamente: não precisa encerrar sem avisar nem compartilhar dados pessoais. Procure o controle de áudio visível e comunique a dificuldade.";
      feedback.style.color = "#8a4b00";
    }
  });

  document.querySelectorAll("[data-rating]").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-rating]").forEach(other => other.setAttribute("aria-pressed", String(other === button)));
    document.getElementById("rating-feedback").textContent = "Você selecionou " + button.dataset.rating + " de 5. Essa resposta não é enviada nem armazenada.";
  }));

  document.getElementById("restart").addEventListener("click", () => {
    checks.forEach(input => { input.checked = false; });
    document.querySelectorAll("input[name='understanding']").forEach(input => { input.checked = false; });
    document.getElementById("understanding-feedback").textContent = "";
    document.getElementById("room-feedback").textContent = "";
    document.getElementById("understanding-feedback").style.color = "";
    document.querySelectorAll("[data-rating]").forEach(button => button.setAttribute("aria-pressed", "false"));
    document.getElementById("rating-feedback").textContent = "";
    updateCheckStatus();
    showView("prepare");
  });

  // Explicit initial state makes the navigation state deterministic on reload.
  views.forEach(view => view.setAttribute("aria-hidden", String(view.id !== "view-prepare")));
  updateCheckStatus();
})();