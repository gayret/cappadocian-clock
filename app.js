const yesterday = document.getElementById("yesterday");
const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");

const yesterdayAsString = document.getElementById("yesterday-as-string");
const todayAsString = document.getElementById("today-as-string");
const tomorrowAsString = document.getElementById("tomorrow-as-string");

const lastMonth = document.getElementById("last-month");
const thisMonth = document.getElementById("this-month");
const nextMonth = document.getElementById("next-month");

function updateCalendar() {
  const now = new Date();

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  yesterday.textContent = `${now.getDate() - 1}`;
  today.textContent = `${now.getDate()}`;
  tomorrow.textContent = `${now.getDate() + 1}`;

  yesterdayAsString.textContent = days[now.getDay() - 1];
  todayAsString.textContent = days[now.getDay()];
  tomorrowAsString.textContent = days[now.getDay() + 1];

  lastMonth.textContent = `${months[now.getMonth() - 1]}`;
  thisMonth.textContent = `${months[now.getMonth()]}`;
  nextMonth.textContent = `${months[now.getMonth() + 1]}`;
}
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = hours * 30 + minutes * 0.5; // 30 derece/saate
  const minuteDeg = minutes * 6 + seconds * 0.1; // 6 derece/dakikaya
  const secondDeg = seconds * 6; // 6 derece/saniyeye

  document.getElementById(
    "hour"
  ).style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById(
    "second"
  ).style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
setInterval(updateCalendar, 1000);

updateClock();
updateCalendar();
