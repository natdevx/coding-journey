// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while.

// For
console.log("Con el bucle for:");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// While
console.log("Con el bucle while:");
let j = 0;

while (j <= 10) {
  console.log(j);
  j++;
}

// Do...while
console.log("Con el bucle do while:");
let k = 0;

do {
  console.log(k);
  k++;
} while (k <= 10);


// 2. Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while.

// For
console.log("Con el bucle for de 10 a 0:");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// While
console.log("Con el bucle while de 10 a 0:");
j = 10; // Reiniciamos la variable

while (j >= 0) {
  console.log(j);
  j--;
}

// Do...while
console.log("Con el bucle do while de 10 a 0:");
k = 10; // Reiniciamos la variable

do {
  console.log(k);
  k--;
} while (k >= 0);


// 3. Itera de 0 a n usando el bucle for.
/* Este es para el usuario decide el valor: 
  const n = Number(prompt("Ingrese un número: "));
*/

const n = 20;

for (let i = 0; i <= n; i++) {
    console.log(i);
}
