// Z.1
for (i = 0; i < 2; i++) {
  console.log("Привет");
}
// Z.2
for (i = 1; i <= 5; i++) {
  console.log(i);
}
// Z.3
for (i = 7; i <= 22; i++) {
  console.log(i);
}
// Z.4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let name in obj) {
  alert(name + " - зарплата " + obj[name]);
}
// Z.5
let n = 1000;
let num = 0;
while (n >= 50) {
  n = n / 2;
  num++;
}
console.log("Количество итераций = " + num);
// Z.6
const firstF = 7; // Число в месяце, на которое выпадает первая в нём пятница.
for (i = 1; i <= 31; i++) {
  if (i === firstF) {
    alert(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
  } else if ((i - firstF) % 7 === 0) {
    alert(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
  }
}
