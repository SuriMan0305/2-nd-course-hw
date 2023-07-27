//z1

console.log('js'.toUpperCase());

//z2
const libWords = ['Дом', 'Банк', 'Больница', 'Театр', 'Кино'];
const toSearch = 'КИНО';

const searchStart = (words = [], search = '') => {

  let locker = [];

  for (el of words) {

    if (el.toUpperCase().startsWith(search.toUpperCase())) {
      locker.push(el);
    }

  }

  return locker;

};

console.log(searchStart(libWords, toSearch));

//z3

console.log(`Число ${32.58884} можно округлить 3-мя способами: \n \nДо меньшего целого: ${Math.floor(32.58884)};\nДо большего целого: ${Math.ceil(32.58884)};\n
До ближайшего целого: ${Math.round(32.58884)};`);

//z4

console.log(`Даны числа: 52, 53, 49, 77, 21, 32 из них:\n\nНаибольшее: ${Math.max(52, 53, 49, 77, 21, 32)}\nНаименьшее: ${Math.min(52, 53, 49, 77, 21, 32)}`);

//z5

const randNum = () => {
  console.log(Math.round(Math.random()*9 + 1));
};

randNum();

//z6

const randArr = (num) => {

  let arr = [];

  for (let i = 0; i < (Math.floor(num / 2)); i++) {

    arr.push(Math.round(Math.random()*num));
//    Делаю так чтобы числа в массиве не повторялись
      for (let j = 0; j < i; j++) {

        if (arr[j] == arr[i]) {

          while (arr[j] == arr[i]) {
            arr[i] = Math.round(Math.random()*num);
          }

        } else {
          continue;
        }

      }
//    Делаю так чтобы числа в массиве не повторялись
    }
  
  return arr;

};

console.log(randArr(7));

//z7

let a = 20, b = 10;

const randInt = (minNum, maxNum) => {

  let result;

  if (minNum < maxNum) {
    result = Math.round(Math.random()*(maxNum - minNum) + minNum);
  } else {
    result = Math.round(Math.random()*(minNum - maxNum) + maxNum);
  }

  return result;

};

console.log(`Из диапазона от ${a} до ${b} в результате рандома выбрано число ${randInt(a, b)}`);

//z8

// 1й способ

let nowDate = new Date();

console.log(nowDate);

// 2й способ

let myDate = new Date(1690323232482);

console.log(myDate);

// 3й способ

let enterDate = new Date('7/26/2023');

console.log(enterDate);

// 4й способ

let fullDate = new Date(2023, 6, 26, 1, 30, 20);

console.log(fullDate);

//z9

let currentDate = new Date();

console.log('Сегодня: ' + currentDate);

let futureDate = new Date(currentDate.setDate(currentDate.getDate() + 73));

console.log('Через 73 дня будет: ' + futureDate);

//z10

const watchDate = (date) => {

  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
	minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это  ${days[date.getDay()]}.`);
  console.log(`Время: ${hour}:${minute}:${second}`);

};

watchDate(new Date(2023, 1, 24, 12, 15, 5));


