// 11. Utilice filter para filtrar los países que contienen land.
console.log("========== Ejercicio 11 ==========");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

// 12. Utilice filter para filtrar los países que tienen seis caracteres.
console.log("========== Ejercicio 12 ==========");
const countriesHaveSixCharacters = countries.filter(
    (country) => country.length === 6
);

console.log(countriesHaveSixCharacters);

// 13. Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
console.log("========== Ejercicio 13 ==========");

const haveSixOrMoreCharacters = countries.filter(
    (country) => country.length >= 6
);

console.log(haveSixOrMoreCharacters);

// 14. Utilice filter para filtrar los países que empiezan por "E";
console.log("========== Ejercicio 14 ==========");

const countriesStartsByE = countries.filter(
    (country) => country.startsWith("E")
); 

console.log(countriesStartsByE);

// 15. Utilice filter para filtrar sólo los precios con valores.
console.log("========== Ejercicio 15 ==========");
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productWithPrice = products.filter((element) => typeof element.price === 'number');

console.log(productWithPrice);

// 16. Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
console.log("========== Ejercicio 16 ==========");

function getStringLists(arr) {
  const result = arr.filter((element) => typeof element === "string");

  return result;
}

const array = ["hola", 15, "IA", 18, "Cursos", true];

console.log(getStringLists(array));