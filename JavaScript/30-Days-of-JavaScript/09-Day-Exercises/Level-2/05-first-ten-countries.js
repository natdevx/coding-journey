// 5. Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.

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

console.log("========== Ejercicio 5 ==========");

function getFirstTenCountries(countries) {
  let tenCountries = [];
  countries.forEach((country) => {
    if (tenCountries.length < 10) {
      tenCountries.push(country);
    }
  });
  return tenCountries;
}

console.log(getFirstTenCountries(countries));