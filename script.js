const translations = {};
let currentLang = "id";

// Load content from content.txt
fetch("content.txt")
  .then(res => res.text())
  .then(data => {
    const lines = data.split("\n");
    let lang = "";

    lines.forEach(line => {
      line = line.trim();
      if (!line || line.startsWith("#")) return;

      if (line.startsWith("[")) {
        lang = line.replace("[", "").replace("]", "");
        translations[lang] = {};
      } else if (line.includes("=")) {
        const [key, value] = line.split("=");
        translations[lang][key.trim()] = value.trim().replace(/"/g, '');
      }
    });

    switchLang(currentLang);
  });

function switchLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === "UL") {
        const listItems = t[key].split("|");
        el.innerHTML = listItems.map(i => `<li>${i}</li>`).join("");
      } else if (el.tagName === "P" || el.tagName === "SPAN" || el.tagName === "H1" || el.tagName === "H2" || el.tagName === "H3") {
        el.textContent = t[key];
      } else if (el.tagName === "LI") {
        el.textContent = t[key];
      } else if (el.tagName === "DIV" && el.classList.contains("hidden")) {
        el.textContent = t[key];
      } else if (el.tagName === "A" && el.hasAttribute("href")) {
        // skip links
      } else {
        el.innerHTML = t[key];
      }
    }
  }
}

function showService(id) {
  const contents = document.querySelectorAll('.service-detail');
  contents.forEach(content => content.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  const buttons = document.querySelectorAll('.service-tab');
  buttons.forEach(btn => btn.classList.remove('bg-blue-600'));
  event.currentTarget.classList.add('bg-blue-600');
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
