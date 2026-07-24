// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = "Nat";
let lastName = "Arrazola";
let country = "Mexico";
let city = "Merida";
let age = 28;
let isMarried = false;
let year = 2026;

// Verificamos los diferentes tipos de datos.
console.log(typeof firstName);   // string
console.log(typeof lastName);    // string
console.log(typeof country);     // string
console.log(typeof city);        // string
console.log(typeof age);         // number
console.log(typeof isMarried);   // boolean
console.log(typeof year);        // number


// 2. Verifique si typeof '10' es igual a 10.

// Comprobamos los tipos
console.log(typeof '10' === typeof 10); // false


// 3. Verifique si parseInt('9.8') es igual a 10.

let numString = "9.8";
let numInt = parseInt(numString);

// Verificar si el resultado es igual a 10.
console.log(numInt === 10); // false