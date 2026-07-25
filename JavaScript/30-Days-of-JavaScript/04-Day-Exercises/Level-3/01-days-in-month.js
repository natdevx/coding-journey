/* 1. Escribe un programa que diga el número de días en un mes.

    Introduce un mes: Enero
    Enero tiene 31 días.

    Introduce un mes: ENERO
    Enero tiene 31 días.

    Introduce un mes: Febrero
    Febrero tiene 28 días.

    Introduce un mes: FEbrero
    Febrero tiene 28 días.
*/

let month = prompt("Introduce un mes: ").trim().toLowerCase();

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
      console.log(`${month} tiene 28 días.`);
    break;

    default:
      console.log(`"${month}" no es un mes válido del año.`);
}
