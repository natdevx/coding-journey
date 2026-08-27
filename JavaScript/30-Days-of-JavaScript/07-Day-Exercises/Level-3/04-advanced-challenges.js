/* 19. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
    sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
*/
console.log("========== Ejercicio 19 ==========");

function sevenRandomNumbers() {
  const uniqueNumbers = [];
  while (uniqueNumbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  return uniqueNumbers;
}

console.log(sevenRandomNumbers());
console.log(sevenRandomNumbers());

// 20. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido.
console.log("========== Ejercicio 20 ==========");

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

function reverseCountries(arr) {
  const copyOfCountries = [...arr];
  const newArr = [];

  for (let i = copyOfCountries.length - 1; i >= 0; i--) {
    newArr.push(copyOfCountries[i]);
  }

  return newArr;
}

console.log(reverseCountries(countries));
