// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".

const rl = require("readline-sync");

const numberCheck = rl.question("What is 7 + 15?\n");

switch (true) {
  case numberCheck === "I am not a robot":
  case Number(numberCheck) === 22:
  case Number(numberCheck) === -8:
    console.log("Успех");
    break;
  default:
    console.log("Вы робот!");
}
