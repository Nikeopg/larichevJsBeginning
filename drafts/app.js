let arr = [{ name: "Вася" }, { name: "Петя" }];
console.log(arr.map((e) => e.name)
.reduce((acc, e) => (acc += e[0]), ""));
