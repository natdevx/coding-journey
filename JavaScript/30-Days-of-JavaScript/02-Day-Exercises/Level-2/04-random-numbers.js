// 7. Genere un número aleatorio entre 0 y 100 inclusive.

const num = Math.floor(Math.random() * 101);
console.log(num);

// 8. Genere un número aleatorio entre 50 y 100 inclusive.
const min = 50;
const max = 100;

const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numeroAleatorio);


// 9. Genere un número aleatorio entre 0 y 255 inclusive.

const numAleatorio = Math.floor(Math.random() * 256);
console.log(numAleatorio);
