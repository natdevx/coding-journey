// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

let month = prompt("Introduce un mes: ").trim().toLowerCase();
let year = Number(prompt("Introduce un año: ").trim());

/* Un año es bisiesto si:
    - Es divisible entre 4.
    - Los divisibles entre 100 no son bisiestos.
    - Excepto si también son divisibles entre 400.
*/
let isLeapYear =(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Usamos el método switch para determinar la cantidad de días del mes.
switch (month) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log(`${month} tiene 31 días.`);
    break;

    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log(`${month} tiene 30 días.`);
    break;

    case "febrero":
        if (isLeapYear) {
            console.log(`${month} tiene 29 días.`);
        } else {
            console.log(`${month} tiene 28 días.`);
        }
    break;

    default:
        console.log(`"${month}" no es un mes válido del año.`);
}
