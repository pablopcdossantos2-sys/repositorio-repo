(() => {
  const tabs = [...document.querySelectorAll(".tab")];
  const views = [...document.querySelectorAll("[id^='view-']")];
  const checks = [...document.querySelectorAll(".check-row input")];
  const status = document.getElementById("check-status");

  function showView(name) {
    views.forEach(view => view.classList.toggle("hidden", view.id !== "view-" + name));
    tabs.forEach(tab => {
      const active = tab.dataset.view === name;
      tab.classList.toggle("active", active);
      if (active) tab.setAttribute("aria-current", "step");
      else tab.removeAttribute("aria-current");
    });
    document.querySelector(".panel:not(.hidden)")?.scrollIntoView({behavior:"smooth",block:"start"});
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

  document.getElementById("check-understanding").addEventListener("click", () => {
    const selected = document.querySelector("input[name='understanding']:checked");
    const feedback = document.getElementById("understanding-feedback");
    if (!selected) {
      feedback.textContent = "Escolha uma resposta para continuar.";
      feedback.style.color = "#8a4b00";
      return;
    }
    if (selected.value === "correct") {
      feedback.textContent = "Isso! No exemplo, a pessoa deve confirmar o retorno e esclarecer dúvidas com o serviço. O texto é fictício.";
      feedback.style.color = "#155e42";
    } else {
      feedback.textContent = "Essa não é a ideia do exemplo. A demonstração não orienta alteração de condutas; dúvidas devem ser esclarecidas com o serviço.";
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
    document.querySelectorAll("[data-rating]").forEach(button => button.removeAttribute("aria-pressed"));
    document.getElementById("rating-feedback").textContent = "";
    updateCheckStatus();
    showView("prepare");
  });
})();