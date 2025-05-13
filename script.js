const translations = {};
let currentLang = "id";

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
    if (!el) continue;

    if (el.tagName === "UL") {
      const listItems = t[key].split("|").map(i => `<li>${i}</li>`).join("");
      el.innerHTML = listItems;
    } else if (el.tagName === "P" || el.tagName === "H1" || el.tagName === "H2" || el.tagName === "H3" || el.tagName === "STRONG" || el.tagName === "SPAN") {
      el.textContent = t[key];
    } else {
      el.innerHTML = t[key];
    }
  }
}

function showService(id) {
  const contents = document.querySelectorAll('.service-detail');
  contents.forEach(content => content.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => AOS.init());
