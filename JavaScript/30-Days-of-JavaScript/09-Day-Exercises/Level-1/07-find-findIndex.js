// 22. Explique la diferencia entre find y findIndex.
console.log("========== Ejercicio 22 ==========");

console.log(`
  - Estos son métodos que buscan el primer elemento de un array que cumpla una condición, pero cada uno tiene un propósito diferente:

    - find: Devuelve el primer elemento del array que cumple la condición. Si ningún elemento la cumple, devuelve undefined.

    - findIndex: Devuelve el índice del primer elemento del array que cumple la condición. Si ningún elemento la cumple, devuelve -1.
  `);

// 23. Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
console.log("========== Ejercicio 23 ==========");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const countryWithSixChars = countries.find((country) => country.length === 6);
console.log(countryWithSixChars);

// 24. Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
console.log("========== Ejercicio 24 ==========");

const indexCountryWithSixChars = countries.findIndex(
  (country) => country.length === 6,
);
console.log(indexCountryWithSixChars);

// 25. Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
console.log("========== Ejercicio 25 ==========");

const norwayIndex = countries.findIndex((country) => country === "Norway");

console.log(norwayIndex);

// 26. Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
console.log("========== Ejercicio 26 ==========");

const russiaIndex = countries.findIndex((country) => country === "Russia");

console.log(russiaIndex);
