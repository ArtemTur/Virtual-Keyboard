document.body.onload = addElement;


const h1 = document.createElement("h1");
const textArea = document.createElement("textarea");
const buttons = document.querySelectorAll(".button");
const keyboard = document.createElement("ul");
const keys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Del', "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "&#8260;", "&#9650;", "Shift", "Ctrl", "Win", "Alt", "", "Alt", "&#9668;", "&#9660;", "&#9658;", "Ctrl"];


function addElement() {
  h1.innerHTML = "<h1>RSS Виртуальная клавиатура</h1>";
  h1.classList.add("title");
  document.body.insertAdjacentElement("afterbegin", h1);
  textArea.classList.add("textarea");
  document.body.insertAdjacentElement("beforeend", textArea);
  keyboard.classList.add("keyboard");
  document.body.insertAdjacentElement("beforeend", keyboard);
  for (let i = 0; i < keys.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = keys[i];
    li.classList.add("button");
    keyboard.insertAdjacentElement("beforeend", li)
    if (keys[i].includes("Tab") || keys[i].includes("Backspace") || keys[i].includes("Del") || keys[i].includes("CapsLock") || keys[i].includes("Alt") ||
      keys[i].includes("Ctrl") || keys[i].includes("Enter") || keys[i].includes("Shift") ||
      keys[i].includes("Win") || keys[i].includes("&#9650;") || keys[i].includes("&#9668;")
      || keys[i].includes("&#9660;") || keys[i].includes("&#9658;")) {
      li.classList.add("big-button")
    };
    if (keys[i].length === 0) {
      li.classList.add("space")
    };
    if (keys[i].includes("Backspace") || keys[i].includes("CapsLock") || keys[i].includes("Enter") ||
      keys[i].includes("Shift")) {
      li.classList.add("long")
    }
  };
};


function liveKeyboard() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      textArea.value += "\n";
    } else if (e.key === "Space") {
      textArea.value += " ";
    } else if (e.key === "Backspace") {
      textArea.value = textArea.value.slice(0, -1);
    } else if (e.key === "Tab") {
      textArea.value += "   ";
    } else if (e.key === "ArrowRight") {
      const cursorPosition = textArea.selectionStart;
      textArea.setSelectionRange(cursorPosition + 1, cursorPosition + 0);
    } else if (e.key === "ArrowLeft") {
      const cursorPosition = textArea.selectionStart;
      textArea.setSelectionRange(cursorPosition - 1, cursorPosition - 0);
    } else if (e.key === "ArrowDown") {
      textArea.setSelectionRange(textArea.value.length, textArea.value.length);
    } else if (e.key === "ArrowUp") {
      textArea.setSelectionRange(0, 0);
    } else if (e.key === "CapsLock") {
       li.includes("CapsLock").classList.add("active");
    } else {
      textArea.value += e.key;
    }
  });
};

liveKeyboard();
