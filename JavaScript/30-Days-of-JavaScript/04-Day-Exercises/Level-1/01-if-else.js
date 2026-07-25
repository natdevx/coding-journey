/* 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

    Ingrese su edad: 30
    Tiene la edad suficiente para conducir.

    Ingrese su edad:15
    Te faltan 3 años para conducir.

*/

let age = Number(prompt("Ingrese su edad: "));

if (age >= 18) {
    console.log('Tiene la edad suficiente para conducir');
} else {
    console.log('No tienes la edad suficiente para conducir, necesitas tener minimo 18 años');
}


