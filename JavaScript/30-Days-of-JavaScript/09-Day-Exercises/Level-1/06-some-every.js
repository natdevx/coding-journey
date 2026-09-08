// 19. Explique la diferencia entre some y every.
console.log("========== Ejercicio 19 ==========");

console.log(`
  - Estos son metodos de los arreglos que evalua una codicion dada, y regresa un boleano, pero cada uno tiene su proposito, que son: 

    - Some: Comprueba si al menos un elemento del array cumple una condición. Devuelve true cuando encuentra uno que la cumple y deja de comprobar los demás elementos.
    - Every: Comprueba si todos los elementos del array cumplen una condición. Devuelve true si todos la cumplen y deja de comprobar cuando encuentra uno que no la cumple, devolviendo false.
  `);

// 20. Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
console.log("========== Ejercicio 20 ==========");
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

const hasNameGreaterThanSeven = names.some((name) => name.length > 7);
console.log(hasNameGreaterThanSeven);

// 21. Utilice every para comprobar si todos los países contienen la palabra land.
console.log("========== Ejercicio 21 ==========");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const allCountriesHaveLand = countries.every((country) => country.includes("land"));
console.log(allCountriesHaveLand);
