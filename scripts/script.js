document.body.onload = addElement;

const h1 = document.createElement("h1");
const textArea = document.createElement("input");
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

  
document.querySelectorAll("li").forEach(li => {li.addEventListener('click', () => {
   
    document.querySelector(".textarea").value += li.textContent;
 })})

 
 
 