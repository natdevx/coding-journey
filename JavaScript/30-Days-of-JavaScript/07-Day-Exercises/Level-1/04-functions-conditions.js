// 14. Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.

console.log("========== Ejercicio 14 ==========");

function checkSeason(month) {
  month = month.toLowerCase();

  if (month === "septiembre" || month === "octubre" || month === "noviembre") {
    return "La estación es Otoño.";
  } else if (
    month === "diciembre" ||
    month === "enero" ||
    month === "febrero"
  ) {
    return "La estación es Invierno.";
  } else if (month === "marzo" || month === "abril" || month === "mayo") {
    return "La estación es Primavera.";
  } else if (month === "junio" || month === "julio" || month === "agosto") {
    return "La estación es Verano.";
  } else {
    return "No es un mes válido.";
  }
}

console.log(checkSeason("julio"));

/* 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
    console.log(findMax(0, 10, 5));
    10;
    console.log(findMax(0, -10, -2));
    0;
*/
console.log("========== Ejercicio 15 ==========");

function findMax(num1, num2, num3) {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }

  if (num3 > max) {
    max = num3;
  }

  return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
