// Дан произвольный url вида - https://purpleschool.ru/course/javascript
// Нужно сделать функцию, которая выводит в консоль:

// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

const url = "https://purpleschool.ru/course/javascript";

function destruction(url) {
    const [protocol, _, host, ...path] = url.split("/");
    if (protocol === "https:" || protocol === "https:") {
        if (!host.includes(".")) {
            return;
        }
        console.log(protocol, _, host, path);
        console.log(`Протокол ${protocol.split(":")[0]}`);
        console.log(`Доменное имя ${host}`);
        console.log(`Путь внутри сайта: /${path.join("/")}`);
    }
}

destruction(url);
