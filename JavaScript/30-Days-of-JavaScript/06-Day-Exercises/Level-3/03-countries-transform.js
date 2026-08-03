// 6. Invertir el array countries y poner en mayúscula cada país y almacenalo en un array.
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

let countriesReverse = [];

for (let i = countries.length - 1; i >= 0; i--) {
  countriesReverse.push(countries[i].toUpperCase());
}

console.log("El array invertido de paises: ", countriesReverse);
