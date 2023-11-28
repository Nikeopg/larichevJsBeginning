// Пользователь хочет приобрести игру в магазине. Он может это сделать только если:

// Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// Он не забанен (isBanned)
// Игра не куплена (isExist)
// Игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат.

const rl = require("readline-sync");

const balance = rl.question("balance: ");
const bonusBalance = rl.question("bonuses: ");
const isBanned = false;
const isExit = false;
const isSelling = true;

if (
  (balance > 1000 || bonusBalance > 100) &&
  !isBanned &&
  !isExit &&
  isSelling
) {
  console.log("Можно купить игру");
} else {
  console.log("Нельзя купить игру");
}
