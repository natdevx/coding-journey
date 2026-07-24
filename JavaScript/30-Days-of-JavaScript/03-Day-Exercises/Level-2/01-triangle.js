/* 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

Ingrese base: 20
Ingrese altura: 10
El área del triángulo es: 100

*/

let base = Number(prompt("Ingrese la base del triángulo:"));
let altura = Number(prompt("Ingrese la altura del triángulo:"));

let area = 0.5 * base * altura;
console.log(`El área del triángulo es: ${area}`);


/* 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

Ingrese lado a: 5
Ingrese lado b: 4
Ingrese lado c: 3
El perimetro del triangulo es: 12

*/

let ladoA = Number(prompt("Ingrese el lado a del triángulo:"));
let ladoB = Number(prompt("Ingrese el lado b del triángulo:"));
let ladoC = Number(prompt("Ingrese el lado c del triángulo:"));

let perimetro = ladoA + ladoB + ladoC;

console.log(`El perímetro del triángulo es: ${perimetro}`);
