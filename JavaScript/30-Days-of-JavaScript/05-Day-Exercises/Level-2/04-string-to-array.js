// 2. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array.

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// Eliminamos los signos de puntuación.
text = text.replace(/[.,]/g, "");

// Convertimos el string en un array.
const words = text.split(" ");

console.log(words);

console.log(words.length); // 13

console.log(Array.isArray(words)); // true
