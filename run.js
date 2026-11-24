const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

function highlight(code) {
  if (!window.hljs) return;
  if (hljs.highlightElement) hljs.highlightElement(code);
  else hljs.highlightBlock(code);
}

document.querySelectorAll("pre > code.language-js.run").forEach((code) => {
  const original = code.innerText;

  // Block bearbeitbar machen
  code.contentEditable = "plaintext-only";
  code.spellcheck = false;
  code.style.outline = "none";

  code.addEventListener("keydown", (e) => {
    // Wichtig: mdBook blättert sonst mit ← / → das Kapitel um
    // und öffnet bei "s" die Suche
    e.stopPropagation();

    // Tab rückt ein, statt den Fokus zu wechseln
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
    // Strg/Cmd + Enter führt den Code aus
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runBtn.click();
    }
  });

  // Syntax-Highlighting nach dem Bearbeiten neu anwenden
  code.addEventListener("blur", () => {
    code.textContent = code.innerText;
    highlight(code);
  });

  const runBtn = document.createElement("button");
  runBtn.textContent = "▶ Ausführen";
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "↺ Zurücksetzen";
  const out = document.createElement("pre");
  out.hidden = true;

  runBtn.addEventListener("click", async () => {
    out.hidden = false;
    out.textContent = "";
    const fmt = (a) => (typeof a === "string" ? a : JSON.stringify(a, null, 2));
    const con = {
      log: (...a) => (out.textContent += a.map(fmt).join(" ") + "\n"),
      error: (...a) => (out.textContent += "Fehler: " + a.map(fmt).join(" ") + "\n"),
    };
    try {
      await new AsyncFunction("console", code.innerText)(con);
    } catch (e) {
      con.error(String(e));
    }
  });

  resetBtn.addEventListener("click", () => {
    code.textContent = original;
    highlight(code);
    out.hidden = true;
  });

  code.parentElement.after(runBtn, resetBtn, out);
});
