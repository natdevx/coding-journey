// 10. Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
console.log("========== Ejercicio 10 ==========");

function sumOfNumbers(element) {
  let sum = 0;
  for (let i = 1; i <= element; i++) {
    sum += i;
  }
  return `La suma de los números en ese rango: ${sum}`;
}
console.log(sumOfNumbers(4));

// 11. Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
console.log("========== Ejercicio 11 ==========");

function sumOfOdds(element) {
  let sum = 0;
  for (let i = 1; i <= element; i++) {
    if (!i % 2 === 0){
      sum += i;
    } else {
      console.log('No hay mas impares que sumar');
    }
  }
  return `La suma de los numeros impares: ${sum}`;
}

console.log(sumOfOdds(7));

// 12. Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
console.log("========== Ejercicio 12 ==========");

function sumOfEven(element) {
  let sum = 0;
  for (let i = 1; i <= element; i++) {
    if (i % 2 === 0){
      sum += i;
    }
  }
  return `La suma de los numeros pares: ${sum}`;
}

console.log(sumOfEven(7));

/* 13. Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
    evensAndOdds(100);
    El número de impares son 50.
    El número de pares es 51.
*/

/* 14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

    sum(1, 2, 3); // -> 6
    sum(1, 2, 3, 4); // -> 10
*/
