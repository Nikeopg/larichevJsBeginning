// Вася положил 12 000 на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500 через 2 года после снятия вклада. И остаток после покупки.

// Итог = Сумма * (1 + Ставка в месяц не в %) ** срок в месяцах

const summary = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const deposit = summary * (1 + rate / 12) ** depositLength;

if (deposit > houseCost) {
  console.log(
    `Васян сможет купить дом, у него останется ${deposit - houseCost} баксов `
  );
} else {
  `Васян не сможет купить дом, не хватает ${Math.floor(
    houseCost - deposit
  )} баксов`;
}
