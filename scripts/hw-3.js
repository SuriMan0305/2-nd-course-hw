// 1
const password = "password",
  enter = prompt("Введите пароль");
password === enter
  ? alert("Пароль введен верно")
  : alert("Пароль введен неправильно");
// 2
const c = Number(prompt("Введите число с"));
c > 0 && c < 10 ? console.log("Верно") : console.log("Неверно");
// 3
const d = 10,
  e = 100;
d > 100 || e > 100 ? console.log("Верно") : console.log("Неверно");
// 4
let a = "2";
let b = "3";
alert(Number(a) + Number(b));
// 5
const monthNumber = Number(prompt("Введите номер месяца в году"));
switch (monthNumber) {
  case 3:
  case 4:
  case 5:
    alert("Это месяц относится к сезону весны");
    break;
  case 6:
  case 7:
  case 8:
    alert("Это месяц относится к сезону лета");
    break;
  case 9:
  case 10:
  case 11:
    alert("Это месяц относится к сезону осени");
    break;
  case 12:
  case 1:
  case 2:
    alert("Это месяц относится к сезону зимы");
    break;
  default:
    alert("В году 12 месяцев!!! Введите номер от 1 до 12");
    break;
}
// 7
let num = prompt("Введите любое число");
if (isNaN(num) === true) {
  alert("ай ай ай, введите пожалуйста число!!!");
} else if (num % 2 === 0) {
  alert("Число четное");
} else {
  alert("Число нечетное");
}
// 8-9
const clientOS = Boolean(
  prompt(
    "Ваша операционная система Android? Если да Введите в поле число 1, если нет нажмите отмена!"
  )
);
const clientAnswer = Boolean(
  prompt(
    "Ваша модель телефона произведена ранее 2015 года? Если да Введите в поле число 1, если нет нажмите отмена!"
  )
);
const clientDeviceYear = 2015;
if (clientOS === true && clientAnswer === false) {
  alert("Установите версию приложения для Android по ссылке ...");
} else if (clientOS === true && clientAnswer === true) {
  alert("Установите облегченную версию приложения для Android по ссылке ...");
} else if (clientOS === false && clientAnswer === false) {
  alert("Установите версию приложения для iOS по ссылке ...");
} else if (clientOS === false && clientAnswer === true) {
  alert("Установите облегченную версию приложения для iOS по ссылке ...");
}
