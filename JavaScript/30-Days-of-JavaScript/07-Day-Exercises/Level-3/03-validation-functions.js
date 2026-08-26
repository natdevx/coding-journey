// 15. Escribe una función llamada isPrime, que verifica si un número es un número primo.
console.log("========== Ejercicio 15 ==========");

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(7));

// 16. Escriba una función que verifique si todos los elementos son únicos en un array.
console.log("========== Ejercicio 16 ==========");

function unique(arr) {
  let vistos = [];
  for (const element of arr) {
    if (vistos.includes(element)) {
      return false;
    }

    vistos.push(element);
  }
  return true;
}

console.log(unique([1, 2, 2, 3]));
console.log(unique([1, 2, 3, 4, 5]));

// 17. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
console.log("========== Ejercicio 17 ==========");

function sameType(arr) {
  if (arr.length === 0) {
    return true;
  }

  const firstType = typeof arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== firstType) {
      return false;
    }
  }
  return true;
}

console.log(sameType([1, 2, 2, 3]));
console.log(sameType([1, 2, "3", 4, 5]));

// 18. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
console.log("========== Ejercicio 18 ==========");

function isValidVariable(variableName) {
  const firstCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";
  const allowedCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_$";

  // Comprobar si está vacío
  if (variableName.length === 0) {
    return false;
  }

  // Comprobar si el primer carácter es válido
  if (!firstCharacters.includes(variableName[0])) {
    return false;
  }

  // Comprobar los caracteres restantes
  for (let i = 1; i < variableName.length; i++) {
    if (!allowedCharacters.includes(variableName[i])) {
      return false;
    }
  }
  return true;
}

console.log(isValidVariable("firstName"));
console.log(isValidVariable("_lastName"));
console.log(isValidVariable("$price"));
console.log(isValidVariable("user123"));

console.log(isValidVariable("123user"));
console.log(isValidVariable("first-name"));
console.log(isValidVariable("user name"));
console.log(isValidVariable("my@email"));
console.log(isValidVariable(""));
