// 13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios.
let arrOfNumbers = []

for(let i = 1; i <= 5; i++) {
    let randomNum = Math.floor( Math. random() * 100);
    arrOfNumbers.push(randomNum);
}

console.log("Matriz con 5 numeros aleatorios: ", arrOfNumbers);

// 14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos.
let numUnique = [];

for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 100);

    if (!numUnique.includes(randomNum)) {
        numUnique.push(randomNum);
    } else {
        // Si el número ya existe, repetimos esta iteración.
        i--;
    }
}

console.log("Matriz con 5 números aleatorios únicos:", numUnique);


/* 15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

    5j2khz

*/


