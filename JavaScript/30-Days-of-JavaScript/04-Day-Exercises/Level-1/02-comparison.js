/* 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

    Ingrese su edad: 30
    Eres 5 años mayor que yo.

*/

let myAge = Number(prompt("Ingrese mi edad:"));
let yourAge = Number(prompt("Ingrese tu edad:"));

if (myAge < yourAge) {
    console.log(`Eres ${yourAge - myAge} años mayor que yo.`);
} else if (myAge > yourAge) {
    console.log(`Soy ${myAge - yourAge} años mayor que tú.`);
} else {
    console.log("Somos de la misma edad.");
}


/* 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes;
    - Usando if else
    - operador ternario.

    let a = 4;
    let b = 3;

    4 es mayor que 3
*/

let a = 4;
let b = 3;

// Usando la estructura if...else.
if (a > b) {
    console.log(`${a} es mayor que ${b}`);
} else {
    console.log(`${a} es menor que ${b}`);
}

// Usando el operador ternario.
const comparison = a > b
    ? `${a} es mayor que ${b}`
    : `${a} es menor que ${b}`;

console.log(comparison);
