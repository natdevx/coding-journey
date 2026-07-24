// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2.

let m = 2; // pendiente
let b = -2; // intersección Y

let x_intercept = -b / m; // intersección X

console.log(`La pendiente es: ${m}`);
console.log(`La intersección Y es: ${b}`);
console.log(`La intersección X es: ${x_intercept}`);



// 6. La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10).

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let m2 = (y2 - y1) / (x2 - x1); // pendiente entre los dos puntos

console.log(`La pendiente entre los puntos es: ${m2}`);


// 7. Compare la pendiente de las dos preguntas anteriores.

let comparison = m === m2 ? 'son iguales' : 'no son iguales';
console.log(`La pendiente de la primera ecuación y la pendiente entre los dos puntos ${comparison}.`);


