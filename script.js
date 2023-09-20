let tg = window.Telegram.WebApp;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

tg.expand()
let theme = document.getElementById('theme');
if (prefersDarkMode) {
  theme.href = 'dark-mode.css'
} else {
  theme.href = 'light-mode.css'
};

alert(tg.InitData())
tg.showConfirm(tg.InitData())
console.log(tg.InitData())
console.log("Сайт работает")
