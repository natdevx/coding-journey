// 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares.
console.log("Estos son los números pares: "); 
for (let i = 0; i <= 100; i++) {
  if(i % 2 === 0){
    console.log(i);
  }
}

// 8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares.
console.log("Estos son los números impares: "); 
for (let i = 0; i <= 100; i++) {
  if(i % 2 === 1){
    console.log(i);
  }
}

// 9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos.
console.log("Estos son los números primos:");

for (let i = 2; i <= 100; i++) {

    let esPrimo = true;

    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(i);
    }

}


/* 10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
        La suma de todos los números de 0 a 100 es 5050.
*/
console.log("La suma de todos los números:");
let suma = 0;

for(let i = 0; i <= 100; i++){
  suma += i;
}
console.log(suma);

/* 11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
*/
let sumaPar = 0;
let sumaImpar = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumaPar += i;
    } else {
        sumaImpar += i;
    }
}

console.log("La suma de todos los números pares:", sumaPar);
console.log("La suma de todos los números impares:", sumaImpar);

/* 12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

  [2550, 2500]
*/
console.log("Array con la suma total de números pares y los impares:", [sumaPar, sumaImpar]);
