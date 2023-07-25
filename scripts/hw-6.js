//z1,z2
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 10) {
    console.log(arr[i]);
    break;
  } else {
    console.log(arr[i]);
  }
}

console.log("Индекс числа 4 равен: " + arr.indexOf(4));
//z3
const fragments = [1, 3, 5, 10, 20];

console.log(
  "В результате получается следующая строка:__" + fragments.join(" ") + "__"
); // разделительный знак ставится строго м-у двумя элементами массива
//z4
let locker = [];

for (let i = 0; i < 3; i++) {
  locker[i] = [];
  for (let j = 0; j < 3; j++) {
    locker[i].push(1);
  }
}

console.log(locker);
//z5
let units = [1, 1, 1];

units.push(2, 2, 2);

console.log(units);
//z6
let numSort = [9, 8, 7, "a", 6, 5];

numSort.sort();

numSort.pop();

console.log(numSort);
//z7
const predict = (enter = prompt("Угадай число от 1 до 10")) => {
  const luckyNum = [9, 8, 7, 6, 5];
  let result = false;

  for (let item of luckyNum) {
    if (item == enter) {
      result = true;
      alert("Вы угадали, поздравляю!");
    }
  }

  if (result == false) {
    alert("Вы не угадали, попробуйте ещё раз! У вас точно получится!");
  }

  return result;
};

predict();
//z8
const stroke = "abcdef";

let strokeArr = stroke.split("");

strokeArr.reverse();

strokeArr = strokeArr.join("");

console.log(strokeArr);
//z9
const cup = [
  [1, 2, 3],
  [4, 5, 6],
];

let united = [];

for (el of cup) {
  for (numEl of el) {
    united.push(numEl);
  }
}

console.log(united);
//z10
const randArr = [3, 1, 5, 2, 4, 9, 7, 8, 6, 10];

console.log(randArr);

for (let i = 0; i < randArr.length - 1; i++) {
  let sum = randArr[i] + randArr[i + 1];
  console.log(
    `Итерация № ${i + 1} сумма элемента ${i + 1} и элемента ${
      i + 2
    } равна ${sum}`
  );
}
//z11
const preSquare = [3, 5, 6, 8, 10];

console.log(preSquare);

const square = (a) => a.map((elem) => elem ** 2);

console.log(square(preSquare));
//z12
const wordsArr = ["слово", "", "слог", "длинное предложение", "буква"];

console.log(wordsArr);

const getLengthWords = (arrayWords) => {
  let resultArr = [];
  for (let i = 0; i < arrayWords.length; i++) {
    let word = arrayWords[i];
    let newArrayWord = word.split("");
    resultArr.push(newArrayWord.length);
  }
  return resultArr;
};

console.log(getLengthWords(wordsArr));
//z13
const forFilter = [1, -2, 5, 78, 0, -10, -1000, -1, 543, -8];

const filterMinus = (toFilt) => toFilt.filter((intNum) => intNum < 0);

console.log(forFilter);

console.log(filterMinus(forFilter));
//z14
const randArray = (forCreate) => {
  for (let i = 0; i < 10; i++) {
    forCreate.push(Math.round(Math.random() * 10));
  }
  return forCreate;
};

const evenFilter = (forToFilt) => {
  let evenNum = [];
  for (let i = 0; i < forToFilt.length; i++) {
    if (forToFilt[i] % 2 == 0) {
      evenNum.push(forToFilt[i]);
    } else {
      continue;
    }
  }
  return evenNum;
};

let randomize = [];

console.log(randArray(randomize));

console.log(evenFilter(randomize));
//z15
let box = [];

const newRandArray = (forRand) => {
  let simpleArr = [];
  for (let i = 0; i < 6; i++) {
    simpleArr.push(Math.round(Math.random() * 9) + 1);
    forRand[i] = simpleArr[i];
  }
  return forRand;
};

const average = (forAverage) => {
  let sumAverage = 0;
  let count = 0;
  for (let i = 0; i < forAverage.length; i++) {
    sumAverage = sumAverage + forAverage[i];
    count++;
  }
  sumAverage = sumAverage / count;
  return sumAverage;
};

console.log(newRandArray(box));

console.log('Среднее арифметическое всего массива равно: ' + average(box));