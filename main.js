const timeYear = (num = prompt('Введите номер месяца в году, а я попробую угадать время года к которому он относится')) => {
  let result;
  if (isNaN(num)) {
    alert('Простите я не справился вы точно ввели число месяца цифрами? Други шифровки мне не знакомы(((');
  } else if ((num > 2)&&(num < 6)) {
    alert('Мне кажется этот месяц относится к весне!');
    result = "Весна";
  } else if ((num > 5)&&(num < 9)) {
    alert('Мне кажется этот месяц относится к лету!');
        result = "Лето";
  } else if ((num > 8)&&(num < 12)) {
    alert('Мне кажется этот месяц относится к осени!');
    result = "Осень";
  } else if ((num == 12) || (num == 1) || (num == 2)) {
    alert('Мне кажется этот месяц относится к зиме!');
    result = "Зима";
  } else {
    alert('Хмм, мне кажется или в году 12 месяцев? Введите число от 1 до 12!');
  }
  return result;
};