
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const programGrid = document.getElementById("programGrid");
const emptyState = document.getElementById("emptyState");
const detailPanel = document.getElementById("detailPanel");
const toast = document.getElementById("toast");

let activeCategory = "All Programs";
let activeProgramId = null;

// Check whether program data is available
if (typeof programs === "undefined" || !Array.isArray(programs)) {
  if (programGrid) {
    programGrid.innerHTML =
      "<p>Programs could not be loaded. Please check programs.js.</p>";
  }
} else {
  const categories = [
    "All Programs",
    ...new Set(programs.map(p => p.category))
  ];

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function renderCategories() {
    if (!categoryList) return;

    categoryList.innerHTML = "";

    categories.forEach(category => {
      const count =
        category === "All Programs"
          ? programs.length
          : programs.filter(p => p.category === category).length;

      const button = document.createElement("button");
      button.className =
        "category-button" +
        (activeCategory === category ? " active" : "");

      const name = document.createElement("span");
      name.textContent = category;

      const countLabel = document.createElement("span");
      countLabel.className = "count";
      countLabel.textContent = count;

      button.append(name, countLabel);

      button.addEventListener("click", () => {
        activeCategory = category;
        renderCategories();
        renderPrograms();
      });

      categoryList.appendChild(button);
    });

    setText("categoryCount", categories.length - 1);
    setText("sidebarCount", `${programs.length} programs`);
    setText("totalCount", programs.length);
  }

  function getFilteredPrograms() {
    const query = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

    return programs.filter(p => {
      const categoryMatches =
        activeCategory === "All Programs" ||
        p.category === activeCategory;

      const queryMatches =
        !query ||
        String(p.title || "").toLowerCase().includes(query) ||
        String(p.category || "").toLowerCase().includes(query) ||
        String(p.aim || "").toLowerCase().includes(query) ||
        String(p.id).includes(query);

      return categoryMatches && queryMatches;
    });
  }

  function renderPrograms() {
    if (!programGrid) return;

    const filtered = getFilteredPrograms();
    programGrid.innerHTML = "";

    filtered.forEach(p => {
      const card = document.createElement("button");
      card.className = "program-card";
      card.type = "button";

      const top = document.createElement("div");
      top.className = "card-top";

      const number = document.createElement("span");
      number.className = "program-number";
      number.textContent =
        `PROGRAM ${String(p.id).padStart(2, "0")}`;

      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = p.category;

      top.append(number, tag);

      const title = document.createElement("strong");
      title.textContent = p.title;

      const aim = document.createElement("p");
      aim.textContent = p.aim;

      card.append(top, title, aim);

      card.addEventListener("click", () => showProgram(p.id));
      programGrid.appendChild(card);
    });

    setText("shownCount", filtered.length);
    setText(
      "resultLabel",
      `${filtered.length} result${filtered.length === 1 ? "" : "s"}`
    );
    setText("listHeading", activeCategory);

    if (emptyState) {
      emptyState.classList.toggle("hidden", filtered.length !== 0);
    }
  }

  function showProgram(id) {
    const p = programs.find(item => item.id === id);
    if (!p) return;

    activeProgramId = id;

    setText(
      "detailNumber",
      `PROGRAM ${String(p.id).padStart(2, "0")} · ${p.category.toUpperCase()}`
    );
    setText("detailTitle", p.title);
    setText("detailAim", `Aim: ${p.aim}`);
    setText("codeText", p.code);
    setText("outputText", p.output);
    setText("detailExplanation", p.explanation);

    const currentIndex = programs.findIndex(item => item.id === id);

    const prevButton = document.getElementById("prevProgram");
    const nextButton = document.getElementById("nextProgram");

    if (prevButton) {
      prevButton.disabled = currentIndex <= 0;
      prevButton.style.opacity = currentIndex <= 0 ? "0.45" : "1";
    }

    if (nextButton) {
      nextButton.disabled = currentIndex >= programs.length - 1;
      nextButton.style.opacity =
        currentIndex >= programs.length - 1 ? "0.45" : "1";
    }

    if (detailPanel) {
      detailPanel.classList.remove("hidden");
      detailPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }

  if (searchInput) {
    searchInput.addEventListener("input", renderPrograms);
  }

  const closeButton = document.getElementById("closeDetail");

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      if (detailPanel) detailPanel.classList.add("hidden");
    });
  }

  const copyButton = document.getElementById("copyCode");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const codeElement = document.getElementById("codeText");
      const code = codeElement ? codeElement.textContent : "";

      try {
        await navigator.clipboard.writeText(code);
        showToast("Code copied!");
      } catch {
        const area = document.createElement("textarea");
        area.value = code;
        document.body.appendChild(area);
        area.select();

        const copied = document.execCommand("copy");
        area.remove();

        showToast(
          copied
            ? "Code copied!"
            : "Please select and copy the code manually."
        );
      }
    });
  }

  const prevButton = document.getElementById("prevProgram");
  const nextButton = document.getElementById("nextProgram");

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      const index = programs.findIndex(p => p.id === activeProgramId);

      if (index > 0) {
        showProgram(programs[index - 1].id);
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      const index = programs.findIndex(p => p.id === activeProgramId);

      if (index >= 0 && index < programs.length - 1) {
        showProgram(programs[index + 1].id);
      }
    });
  }

  renderCategories();
  renderPrograms();
}
