const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

// Shared button styles: a fixed height keeps both buttons equally tall, even
// when the browser picks different fallback fonts for the ▶ and ↺ symbols
const style = document.createElement("style");
style.textContent = `
  .run-buttons { margin: 0.5em 0; }
  .run-buttons button {
    font: inherit;
    font-size: 0.9em;
    line-height: 1;
    height: 2em;
    padding: 0 0.75em;
    margin-right: 0.5em;
    cursor: pointer;
  }
`;
document.head.append(style);

function highlight(code) {
  if (!window.hljs) return;
  if (hljs.highlightElement) hljs.highlightElement(code);
  else hljs.highlightBlock(code);
}

document.querySelectorAll("pre > code.language-js.run").forEach((code) => {
  const original = code.innerText;

  // Make the block editable
  code.contentEditable = "plaintext-only";
  code.spellcheck = false;
  code.style.outline = "none";

  code.addEventListener("keydown", (e) => {
    // Important: otherwise mdBook switches chapters on ← / →
    // and opens the search on "s"
    e.stopPropagation();

    // Tab indents instead of moving the focus
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
    // Ctrl/Cmd + Enter runs the code
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runBtn.click();
    }
  });

  // Re-apply syntax highlighting after editing
  code.addEventListener("blur", () => {
    code.textContent = code.innerText;
    highlight(code);
  });

  // \uFE0E requests the text (non-emoji) presentation of the symbols
  const runBtn = document.createElement("button");
  runBtn.textContent = "\u25B6\uFE0E Run";
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "\u21BA\uFE0E Reset";
  const buttons = document.createElement("div");
  buttons.className = "run-buttons";
  buttons.append(runBtn, resetBtn);
  const out = document.createElement("pre");
  out.hidden = true;

  runBtn.addEventListener("click", async () => {
    out.hidden = false;
    out.textContent = "";
    const fmt = (a) => (typeof a === "string" ? a : JSON.stringify(a, null, 2));
    const con = {
      log: (...a) => (out.textContent += a.map(fmt).join(" ") + "\n"),
      error: (...a) => (out.textContent += "Error: " + a.map(fmt).join(" ") + "\n"),
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

  code.parentElement.after(buttons, out);
});
