/* 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

    Ingrese un número: 2
    2 es un número par

    Ingrese un número: 9
    9 es un número impar

*/

let numero = Number(prompt('Ingrese un número: '));
let esPar = numero % 2 === 0;

if (esPar) {
    console.log(`${numero} es un número par.`);
} else {
    console.log(`${numero} es un número impar.`);
}

