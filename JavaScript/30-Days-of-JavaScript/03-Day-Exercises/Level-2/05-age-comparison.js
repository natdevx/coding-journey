/* 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

    Ingrese horas: 40
    Introduce la tarifa por hora: 28
    Su ganancia semanal es 1120

*/

let hours = Number(prompt("Ingrese las horas:"));
let hourlyRate = Number(prompt("Ingrese la tarifa por hora:"));

let weeklyEarnings = hours * hourlyRate;
console.log(`Su ganancia semanal es ${weeklyEarnings}`);


// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

let name = prompt("Ingrese su nombre: ");
let nameLen = name.length > 7 ? 'es largo.' : 'es corto.';

console.log(`Su nombre: ${name} es ${nameLen}`);


/* 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

    let firstName = "Asabeneh";
    let lastName = "Yetayeh";
    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.

*/

let firstName = prompt("Ingrese su nombre: ");
let lastName = prompt("Ingrese su apellido: ");

let fullName = firstName.length > lastName.length ? 'es más largo que tu apellido' : 'es más corto que tu apellido';

console.log(`Tu primer nombre, ${firstName}, ${fullName}, ${lastName}`);

/* 12. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

    let myAge = 250;
    let yourAge = 25;
    Soy 225 años mayor que tú.

*/

let myAge = 250;
let yourAge = 25;

let ageDifference = myAge - yourAge;

console.log(`Soy ${ageDifference} años mayor que tú.`);

