// 10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let string = 'JavaScript';
let randomIndex = Math.floor(Math.random() * string.length);
let randomCharacter = string[randomIndex];
console.log(`Random character from 'JavaScript': ${randomCharacter}`);
