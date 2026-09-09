// 2. Encuentre la suma del precio de los productos usando sólo reduce(callback)).

console.log("========== Ejercicio 2 ==========");
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const sumTotal = products.reduce((total, element) => {
  if (typeof element.price === "number") {
    return total + element.price;
  }

  return total;
}, 0);

console.log(`La suma total de los precios: ${sumTotal}`);
