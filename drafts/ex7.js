const num1 = "89152892023";
const num2 = "+79152892023";
const num3 = "+7(915)2892023";
const num4 = "+7(915) 289-20-23";
const num5 = "      +7(915) 289-20-23";

const num1Error = "89152892";
const num2Error = "+7d915d289-20-23";
const num3Error = "9+8710939393";
const num4Error = "8915g28927";

function isPhoneNumber(num) {
    num = num.trim();
    num = num.replace("+7", "8");
    if (!num.startsWith("8")) {
        return false;
    }
    num = num.replaceAll("(", "");
    num = num.replaceAll(")", "");
    num = num.replaceAll(" ", "");
    num = num.replaceAll("-", "");
    console.log(num);
}

isPhoneNumber(num1);
isPhoneNumber(num2);
isPhoneNumber(num3);
isPhoneNumber(num4);
isPhoneNumber(num5);

