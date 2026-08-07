// 3. Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
console.log("========== Ejercicio 3 ==========");

function printArray(arr) {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element);
  }
  return newArr;
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const numersPar = [2, 4, 6, 8];

console.log(printArray(countries));
console.log(printArray(numersPar));

/* 4. Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
    showDateTime()
    08/01/2020 04:08
*/
console.log("========== Ejercicio 4 ==========");

function showDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

console.log('La feha y hora son: ',showDateTime());

/* 5. Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
    swapValues(3, 4); // x => 4, y=>3
    swapValues(4, 5); // x = 5, y = 4
*/
console.log("========== Ejercicio 5 ==========");

function swapValues(x, y) {
    let valueX = y;
    let valueY = x;
    return `Intercambio de valores: x= ${valueX}, y= ${valueY}`
}

console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

/* 6. Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

    console.log(reverseArray([1, 2, 3, 4, 5]));
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(["A", "B", "C"]));
    //['C', 'B', 'A']
*/
console.log("========== Ejercicio 6 ==========");

function reverseArray(arr) {
    let newArr = [];
    for (let i= arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

// 7. Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.




// 8. Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.



// 9. Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.


