// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

    // Comprobamos los tipos
    console.log(typeof '10' === typeof 10); // false

    // Convertimos el string a número
    let num = '10';
    let numInt = Number(num);

    // Comprobamos que ahora sean exactamente iguales
    console.log(numInt === 10); // true


// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.

let numString = '9.8';
let numFloat = parseFloat(numString);

//Comprobamos si es igual.
console.log(numFloat === 10); // false


numFloat = Math.ceil(numFloat);

//Comprobamos que ahora sea exactamente iguales.
console.log(numFloat === 10); // true

