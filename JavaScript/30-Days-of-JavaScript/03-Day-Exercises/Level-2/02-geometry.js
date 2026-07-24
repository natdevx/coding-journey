// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho)).

let largo = Number(prompt("Ingrese el largo del rectángulo:"));
let ancho = Number(prompt("Ingrese el ancho del rectángulo:"));

let rectanguloArea = largo * ancho;
let rectanguloPerimetro = 2 * (largo + ancho);

console.log(`El área del rectángulo es: ${rectanguloArea}`);

console.log(`El perímetro del rectángulo es: ${rectanguloPerimetro}`);



// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

let radio = Number(prompt("Ingrese el radio del círculo:"));
const pi = 3.14;

let areaCirculo = pi * radio * radio;
let circunferencia = 2 * pi * radio;

console.log(`El área del círculo es: ${areaCirculo}`);

console.log(`La circunferencia del círculo es: ${circunferencia}`);

