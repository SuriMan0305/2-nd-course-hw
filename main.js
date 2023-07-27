const timeYear = (
  num = prompt(
    "Введите номер месяца в году, а я попробую угадать время года к которому он относится"
  )
) => {
  let result;
  if (isNaN(num)) {
    alert(
      "Простите я не справился вы точно ввели число месяца цифрами? Други шифровки мне не знакомы((("
    );
  } else if (num > 2 && num < 6) {
    alert("Мне кажется этот месяц относится к весне!");
    result = "Весна";
  } else if (num > 5 && num < 9) {
    alert("Мне кажется этот месяц относится к лету!");
    result = "Лето";
  } else if (num > 8 && num < 12) {
    alert("Мне кажется этот месяц относится к осени!");
    result = "Осень";
  } else if (num == 12 || num == 1 || num == 2) {
    alert("Мне кажется этот месяц относится к зиме!");
    result = "Зима";
  } else {
    alert("Хмм, мне кажется или в году 12 месяцев? Введите число от 1 до 12!");
  }
  return result;
};

const rememberWords = (words = ["Яблоко","Груша","Дыня","Виноград","Персик","Апельсин","Мандарин"].sort(() => Math.random() - 0.5)) => {
  alert(`Запомните порядок слов в массиве, будьте внимательны: ${words.join(", ")}`);
  // Сделал так чтобы первый элемент массива находился в первой части вопроса (от 1 до 4) а второй во второй (от 5 до 7) если считать не по индексу элемента.
  let wordFirstIndex = Math.round(Math.random() * (words.length - 4));
  let wordSecondIndex = Math.round(Math.random() * (words.length - 4) + 3.49);
  //
  firstAnswer = words[wordFirstIndex];
  secondAnswer = words[wordSecondIndex];
  // Использовать для проверки!!!
  console.log(words);
  console.log(firstAnswer);
  console.log(secondAnswer);
  // Использовать для проверки!!!
  let answer = prompt(`Чему равнялся ${wordFirstIndex + 1}-й элемент массива?`);
  let check = 0;
  if (answer.toUpperCase() == firstAnswer.toUpperCase()) {
    check++;
  }
  answer = prompt(`Чему равнялся ${wordSecondIndex + 1}-й элемент массива?`);
  if (answer.toUpperCase() == secondAnswer.toUpperCase()) {
    check++;
  }
  switch(check) {
    case 0:
      alert('К сожалению, вы не угадали ни одного слова');
      break;
    case 1:
      alert('Вы были близки к победе!');
      break;
    case 2:
      alert('Поздравляю! Вы отгадали оба слова!');
      break;
  }
};
