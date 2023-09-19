let tg = window.Telegram.WebApp;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

let theme = document.getElementById('theme');
if (prefersDarkMode) {
  theme.href = 'dark-mode.css'
} else {
  theme.href = 'light-mode.css'
};

console.log(tg.InitData())
console.log("Сайт работает")
