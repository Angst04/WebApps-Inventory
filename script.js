let tg = window.Telegram.WebApp;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const data = tg.initDataUnsafe.first_name
const data_2 = tg.initData.first_name

tg.expand()
let theme = document.getElementById('theme');
if (prefersDarkMode) {
  theme.href = 'dark-mode.css'
} else {
  theme.href = 'light-mode.css'
};

document.getElementById("p1").innerHTML = data;
document.getElementById("p2").innerHTML = data_2;

tg.showAlert(data)
alert(data)
console.log(data)
console.log("Сайт работает")
