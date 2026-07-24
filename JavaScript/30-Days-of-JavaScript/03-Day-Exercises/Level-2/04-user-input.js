// 8. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

let x;

// Probar x = -1
x = -1;
console.log(`Para x = ${x}, y = ${x ** 2 + 6 * x + 9}`);

// Probar x = -2
x = -2;
console.log(`Para x = ${x}, y = ${x ** 2 + 6 * x + 9}`);

// Probar x = -3
x = -3;
console.log(`Para x = ${x}, y = ${x ** 2 + 6 * x + 9}`);

// Conclusión
console.log("Cuando x = -3, el valor de y es 0.");


/* 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

    Introduzca el año de nacimiento: 1995
    Tienes 25 años. Tienes la edad suficiente para conducir.

    Introduzca el año de nacimiento: 2005
    Tienes 15 años. Podrás conducir después de 3 años.

*/

let birthYear = prompt("Ingrese su año de nacimiento:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let comparison = age >= 18 ? 'Tienes la edad suficiente para conducir.' : 'Podrás conducir cuando seas mayor de 18 años.';
console.log(`Tienes ${age} años. ${comparison}.`);



/* 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

    Ingrese el número de años de vida: 100
    Viviste 3153600000 segundos.

*/

let years = Number(prompt("Ingrese el número de años de vida:");
let seconds = years * 365 * 24 * 60 * 60; // Convertir años a segundos

console.log(`Viviste ${seconds} segundos.`);


