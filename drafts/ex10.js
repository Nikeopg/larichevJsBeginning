// Реализовать методы увеличения и уменьшения баланса,
// при котором каждая операция сохраняется в массив
// operations в виде { reason: 'Оплата налоов', sum: -100}.
// Возвращается true, если успешно и false, если не хватает денег.
// Так же реализовать метод вывода числа операций по кошельку

const wallet = {
    balance: 0,
    operations: [],
    increase: function (sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum,
        });
        return true;
    },
    decrease: function (sum, reason) {
        if (this.balance < sum) {
            console.log("Недостаточно баланса");
            return false;
        }

        this.operations.push({
            reason: reason,
            sum: -sum,
        });
        this.balance -= sum;
        return true;
    },
    getOperationsLenght: function () {
        return this.operations.length;
    },
};

console.log(wallet.increase(1000, "Зарплата"));
console.log(wallet.balance);
console.log(wallet.decrease(611, "Штраф"));
console.log(wallet.balance);
console.log(wallet.operations);
console.log(wallet.decrease(6000, "Штраф"));
console.log(wallet.operations);
