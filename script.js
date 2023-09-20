let tg = window.Telegram.WebApp;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const { first_name, last_name, username } = tg.initDataUnsafe.user;

tg.expand()
let theme = document.getElementById('theme');
if (prefersDarkMode) {
  theme.href = 'dark-mode.css'
} else {
  theme.href = 'light-mode.css'
};

document.getElementById("p1").innerHTML = username;

tg.showAlert(first_name)
alert(first_name)
alert(username)
console.log(username)
console.log("Сайт работает")
