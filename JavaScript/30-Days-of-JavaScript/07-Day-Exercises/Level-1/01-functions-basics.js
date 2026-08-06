// =====================================
// EXERCISES LEVEL 1
// =====================================

// 1. Declare una función fullName e imprima su nombre completo.
console.log("========== Ejercicio 1 ==========");

function fullName() {
  let firstName = "Nat";
  let lastName = "Arrazola";
  let fullName = `${firstName} ${lastName}`;
  console.log("Nombre: ", fullName);
}

fullName();

// 2. Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
console.log("========== Ejercicio 2 ==========");

function fullNameWithParams(firstName, lastName) {
  return `Nombre completo: ${firstName} ${lastName}`;
}

console.log(fullNameWithParams("Naty", "Arrazola"));

// 3. Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
console.log("========== Ejercicio 3 ==========");
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log("Suma Total: ",addNumbers(7, 13));
