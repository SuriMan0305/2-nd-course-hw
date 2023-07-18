//z1
function minNumber(a, b) {
  let result;
  a >= b ? (result = b) : (result = a);
  return result;
}
console.log(minNumber(10, 5));
console.log(minNumber(5, 10));
console.log(minNumber(6, 6));
//z2
function evenOdd(num) {
  let result;
  Math.abs(num) % 2 == 1 ? (result = "Число нечетное") : (result = "Число четное");
  return result;
}
console.log(evenOdd(10));
console.log(evenOdd(-5));
//z3.1
function squareNumConsole(num) {
  console.log((num = num ** 2));
}
squareNumConsole(10);
squareNumConsole(1);
squareNumConsole(0);
squareNumConsole(-4);
//z3.2
function squareNum(num) {
  return (num = num ** 2);
}
console.log(squareNum(10));
console.log(squareNum(1));
console.log(squareNum(0));
console.log(squareNum(-4));
//z4
function ageQuest(age) {
  age = Number(prompt("Сколько вам лет?"));
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  } else {
    alert("Привет, друг!");
  }
}
ageQuest();
//z5
function multi(a, b) {
  let result;
  if (isNaN(a) || isNaN(b)) {
    result = "Одно или оба значения не являются числом";
  } else {
    result = Number(a) * Number(b);
  }
  return result;
}
console.log(multi(1, 5));
//z6
function cubeNum() {
  let a = prompt('Введите число которое хотите возвести в куб');
  if (isNaN(a)) {
    result = "Переданный параметр не является числом";
  } else {
    result = Number(a) ** 3;
  }
  return alert("Результат возведения в куб " + result);
}
cubeNum();
//z7
const circle1 = {
  radius: 1,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};
const circle2 = {
  radius: 15,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};
console.log(
  ` Радиус круга №1 равен: ${circle1.radius} \n Площадь равна: ${circle1.getArea()} \n Периметр равен: ${circle1.getPerimeter()}`
);
console.log(
  ` Радиус круга №2 равен: ${circle2.radius} \n Площадь равна: ${circle2.getArea()} \n Периметр равен: ${circle2.getPerimeter()}`
);
