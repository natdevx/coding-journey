// Datos para trabajar para estos ejercicios.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Explique la diferencia entre forEach, map, filter, and reduce.
console.log("========== Ejercicio 1 ==========");

console.log(`
  - Todos estos metodos sirve para recorrer un array, pero cada uno tiene su proposito, que son: 

    - forEach: Se utiliza para recorrer cada elemento de un array y ejecutar una acción para cada uno de ellos. No devuelve un nuevo array; simplemente ejecuta una acción sobre cada elemento.
    - Map: Se utiliza para trasformar cada uno de los elementos de un array y devuelve un nuevo array con los elementos trasformados.
    - Filter: Se utiliza para seleccionar los elementos de un array que cumplen una determinada condición y devuelve un nuevo array con esos elementos.
    - Reduce: Se utiliza para recorrer los elementos de un array y acumular sus valores en un único resultado, utilizando una función callback.
  `);

// 2. Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
console.log("========== Ejercicio 2 ==========");

const callbackFunction = (element) => {
    console.log(element);
}
