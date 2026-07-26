/* 1. El siguiente es un array de 10 edades de estudiantes:

- Ordene el array y encuentre la edad mínima y máxima
- Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
- Encuentre el rango de las edades (max menos min)
- Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_

*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Ordenar el array.
const agesToSort = ages.sort((a, b) => a - b);
console.log("Edades ordenadas:", agesToSort);

//Encontarar la edad minima.
const minAge = agesToSort[0];
//Encontarar la edad maxima.
const maxAge = agesToSort[agesToSort.length - 1];

console.log("Mínimo:", minAge);
console.log("Máximo:", maxAge);

// Encontarar la edad media
const middle1 = agesToSort[agesToSort.length / 2 - 1];
const middle2 = agesToSort[agesToSort.length / 2];
const medianAge = (middle1 + middle2) / 2;

console.log("Edad media:", medianAge);

// Encontar la edad promedio (todos los elementos divididos por el número de elementos).
const total = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9];
const averageAge = total / ages.length;

console.log("Edad promedio:", averageAge);

// Encuentre el rango de las edades (max menos min).
const range = maxAge - minAge;

console.log("Rango:", range);

// Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_.
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

console.log("Valor absoluto (mín - promedio):", minDifference);
console.log("Valor absoluto (máx - promedio):", maxDifference);

