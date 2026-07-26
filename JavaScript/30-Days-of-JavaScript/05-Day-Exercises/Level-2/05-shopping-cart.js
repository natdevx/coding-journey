/* 3. En el siguiente carrito de compras agregue, elimine, edite artículos:

    - Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
    - Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
    - Elimine 'Honey' si es alérgico a la miel (honey)
    - Modificar Tea a 'Green Tea'

*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];


// Agregar al principio Si NO incluye 'Meat'
if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat");
}

console.log(shoppingCart);

// Agrgar al final SI NO incluye 'Sugar'
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);


//Eliminar 'Honey' si es alérgico a la miel (honey)

let allergy = prompt("¿Es usted alérgico a la miel? (si/no): ").trim().toLowerCase();

if (allergy === "si") {
    let index = shoppingCart.indexOf("Honey");

    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }

    console.log(shoppingCart);

} else if (allergy === "no") {
    console.log(shoppingCart);

} else {
    console.log("La respuesta debe ser 'si' o 'no'.");
}

//Modificar Tea a 'Green Tea'

let teaIndex = shoppingCart.indexOf("Tea");

if (teaIndex !== -1) {
    shoppingCart[teaIndex] = "Green Tea";
}

console.log(shoppingCart);
