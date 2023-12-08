const users = [
    {
        name: "Вася",
        surname: "Пупкин",
        age: 30,
        skills: ["Разработка", "DevOps"],
    },
    {
        name: "Катя",
        surname: "Белова",
        age: 18,
        skills: ["Дизайн"],
    },
];

const userData = users.map((user) => {
    return {
        fullname: `${user.name} ${user.surname}`,
        skillNum: `${user.skills.length}`,
    };
});

console.log(userData);
