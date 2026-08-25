// 8. Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
console.log("========== Ejercicio 8 ==========");

function shuffleArray(arr) {
  let newArr = [];
  let copy = [...arr];

  while (copy.length > 0) {
    // 1. generar índice aleatorio
    let randomIndex = Math.floor(Math.random() * copy.length);
    // 2. obtener elemento
    let element = copy[randomIndex];
    // 3. agregarlo a newArr
    newArr.push(element);
    // 4. eliminarlo de copy
    copy.splice(randomIndex, 1);
  }

  return newArr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

// 9. Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
console.log("========== Ejercicio 9 ==========");

function factorial(num) {
  let factorialOfNum = 1;

  for (let i = num; i >= 1; i--) {
    factorialOfNum *= i;
  }

  return factorialOfNum;
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// 10. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
console.log("========== Ejercicio 10 ==========");

function isEmpty(param) {
  if (param === undefined || param === null || param === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty(undefined)); // true
console.log(isEmpty(null)); // true
console.log(isEmpty("")); // true
console.log(isEmpty("Hello")); // false

// 11. Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
console.log("========== Ejercicio 11 ==========");

function sum(...args) {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return `La suma total: ${sum}`;
}

console.log(sum(2, 4, 6));
console.log(sum(-1, 2, 3, 4, 5));

// 12. Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
console.log("========== Ejercicio 12 ==========");

function sumOfArrayItems(arr){
  let sum = 0;
  for (const element of arr) {
    if (typeof element !== "number") {
      return "Todos los elementos del array deben ser números.";
    }
    sum += element;
  }
  return `La suma total de los elementos del array es: ${sum}`;
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
console.log(sumOfArrayItems([1, 2, "3", 4, 5]));

// 13. Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
console.log("========== Ejercicio 13 ==========");

function average(arr) {
  let sum = 0;
  for (const element of arr) {
    if (typeof element !== "number") {
      return "Todos los elementos del array deben ser números.";
    }
    sum += element;
  }
  return `El promedio de los elementos del array es: ${sum / arr.length}`;
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, "3", 4, 5]));
console.log(average([1, 2, 3, 4, 5, 6, 7]));

/* 14. Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    'Not Found'
 */

console.log("========== Ejercicio 14 ==========");

function modifyArray(arr) {
  if (arr.length < 5) {
    return 'Not Found';
  }
  arr[4] = arr[4].toUpperCase();
  return arr;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
