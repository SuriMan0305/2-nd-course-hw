//z1
const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

const callbackObj = (a, b) => {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
};

console.log(people.sort(callbackObj));
//z2
function isPositive(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      output.push(arr[i]);
    }
  }
  return output;
}

function isMale(arr) {
  let outObj = new Object();
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      outObj[len] = arr[i];
      len++;
    }
  }
  return outObj;
}

function filter(arr, ruleFunction) {
  let output = [];
  output = ruleFunction(arr);
  return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peoples = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(peoples, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
//z3
// const timer = (halfMin = 30) => {
//   console.log(new Date());
// 	const timeToStop = setInterval(() => {
//     console.log(new Date());
//   }, 1000 * 3);
//   setTimeout(() => {
//     clearInterval(timeToStop);
//     console.log('30 секунд прошло')
//   }, halfMin * 1000);
// };

// timer();
//z4
// function delayForSecond(callback) {
//   setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// });
//z5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя
// Первый вариант, в котором выводит ошибку, но порядок правильный.

// Нужно изменить код ниже:
// delayForSecond(setTimeout(() => {
//   sayHi('Глеб');
// }, 2000));

// Первый вариант, в котором выводит ошибку, но порядок правильный.

// Второй вариант вызываем функции по-отдельности учитывая, что первая функция отстает от второй на секунду.

delayForSecond();

setTimeout(() => {
  sayHi("Глеб");
}, 1000);

// Второй вариант вызываем функции по-отдельности учитывая, что первая функция отстает от второй на секунду.
