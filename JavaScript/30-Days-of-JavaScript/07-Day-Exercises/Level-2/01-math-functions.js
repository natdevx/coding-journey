// =====================================
// EXERCISES LEVEL 2
// =====================================

// 1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
console.log("========== Ejercicio 1 ==========");

function solveLinEquation(variable, a, b, c, value) {
  if (variable.toLowerCase() === "x") {
    // value representa y
    let x = (-b * value - c) / a;
    return `El valor de x es: ${x}`;
  } else if (variable.toLowerCase() === "y") {
    // value representa x
    let y = (-a * value - c) / b;
    return `El valor de y es: ${y}`;
  } else {
    return "Variable no válida. Escribe 'x' o 'y'.";
  }
}

// Calcular x
console.log(solveLinEquation("x", 2, 6, 4, 2));
// x = -8
// Calcular y
console.log(solveLinEquation("y", 2, 6, 4, -8));
// y = 2

// Otro ejemplo
console.log(solveLinEquation("x", 3, 2, 5, 4));
// x = -4.333333333333333
console.log(solveLinEquation("y", 3, 2, 5, -4.333333333333333));
// y = 4

// 2. La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
console.log("========== Ejercicio 2 ==========");

function solveQuadEquation(a = 0, b = 0, c = 0) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return "La ecuación no tiene soluciones reales.";
  }

  if (discriminant === 0) {
    const x = -b / (2 * a);
    return `{${x}}`;
  }

  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return `{${x1}, ${x2}}`;
}

console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); // {2, -2}
console.log(solveQuadEquation(1, -1, 0)); // {1, 0}
