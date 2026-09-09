// 1. Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
console.log("========== Ejercicio 1 ==========");
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const priceTotal = products
  .filter((element) => typeof element.price === "number")
  .reduce((total, inicialElement) => total + inicialElement.price, 0);

console.log(`El precio total es: ${priceTotal}`);
