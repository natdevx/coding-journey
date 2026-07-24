/* 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log().

    I. 4 > 3 && 10 < 12

    II. 4 > 3 && 10 > 12

    III. 4 > 3 || 10 < 12

    IV. 4 > 3 || 10 > 12

    V. !(4 > 3)

    VI. !(4 < 3)

    VII. !(false)

    VIII. !(4 > 3 && 10 < 12)

    IX. !(4 > 3 && 10 > 12)

    X. !(4 === '4')

    XI. No hay 'on' tanto en dragon como en python

*/

// Expresiones

let expresion1 = 4 > 3 && 10 < 12;

let expresion2 = 4 > 3 && 10 > 12;

let expresion3 = 4 > 3 || 10 < 12;

let expresion4 = 4 > 3 || 10 > 12;

let expresion5 = !(4 > 3);

let expresion6 = !(4 < 3);

let expresion7 = !false;

let expresion8 = !(4 > 3 && 10 < 12);

let expresion9 = !(4 > 3 && 10 > 12);

let expresion10 = !(4 === "4");

let expresion11 = !("dragon".includes("on") && "python".includes("on"));



// Resultados

console.log("4 > 3 && 10 < 12:", expresion1); // true

console.log("4 > 3 && 10 > 12:", expresion2);  // false

console.log("4 > 3 || 10 < 12:", expresion3); // true

console.log("4 > 3 || 10 > 12:", expresion4); // true

console.log("!(4 > 3):", expresion5);  // false

console.log("!(4 < 3):", expresion6);  // true

console.log("!(false):", expresion7);  // true

console.log("!(4 > 3 && 10 < 12):", expresion8); // false

console.log("!(4 > 3 && 10 > 12):", expresion9); // true

console.log("!(4 === '4'):", expresion10); // true

console.log("No hay 'on' en dragon y python:", expresion11); // false