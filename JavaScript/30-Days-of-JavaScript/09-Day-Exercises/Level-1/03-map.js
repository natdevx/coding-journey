// 6. Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
console.log("========== Ejercicio 6 ==========");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const countriesToUpperCase = countries.map((country) => country.toUpperCase());

console.log(countriesToUpperCase);

// 7. Utilice map para crear un array de longitudes de países a partir del array de países.
console.log("========== Ejercicio 7 ==========");

const countriesToLength = countries.map((country) => country.length);
console.log(countriesToLength);

// 8. Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
console.log("========== Ejercicio 8 ==========");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersSquare = numbers.map((num) => num * num);

console.log(numbersSquare);

// 9. Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
console.log("========== Ejercicio 9 ==========");
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

const nameToUpperCase = names.map((name) => name.toUpperCase());

console.log(nameToUpperCase);

// 10. Utilice map para asignar el array de productos a sus correspondientes precios.
console.log("========== Ejercicio 10 ==========");
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productsPrices = products.map(function (element) {
  return element.price;
});

console.log(productsPrices);
