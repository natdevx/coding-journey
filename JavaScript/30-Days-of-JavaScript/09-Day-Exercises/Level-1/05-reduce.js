// 17. Usa reduce para sumar todos los números del array de números.
console.log("========== Ejercicio 17 ==========");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((presentValue, initialValue) => presentValue + initialValue, 0);

console.log(sum);

// 18. Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa.
console.log("========== Ejercicio 18 ==========");
const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const NorthernEuropeanCountries = countries.reduce(
  (accumulator, currentCountry) => `${accumulator}, ${currentCountry}`
);

console.log(
  `${NorthernEuropeanCountries} son países del norte de Europa.`
);
