// z.1
let a = 10;
alert("Переменная а имеет значение: " + a);
a = 20;
alert("Переменная а имеет значение: " + a);
// z.2
let iphone = 2007;
alert(`Первый iPhone был представлен в ${iphone} году`);
// z.3
let creatorJS = "Бренданом Айком";
alert(`Создателем языка JavaScript является - ${creatorJS} !`);
// z.4
let ten = Number(10),
  two = Number(2);
alert(`Сумма 10 и 2 равна: ${ten + two} \n
Разность равна: ${ten - two} \n
Умножение равно: ${ten * two} \n
Деление 10 на 2 равно: ${ten / two}`);
// z.5
let result = 2 ** 5;
alert(`2 в 5й степени равняется: ${result}`);
// z.6
let a1 = 9,
  b1 = 2;
alert(`Остаток от деления 9 на 2 равен: ${a1 % b1}`);
// z.7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// z.8
let age = prompt("Сколько вам лет?");
alert("Вам " + age + " лет");
// z.9
let user = {
  name: "Bobik",
  ageUser: 10,
  isAdmin: true,
};
user["city of residence"] = "no";
user.ageUser = 12;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert("Результат поиска информации = " + user[info]);
// z.10
let userName = prompt("Запишите своё имя_");
alert("Привет, " + userName + "!");
//end of the lesson
