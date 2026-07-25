// 1. Declara un array vacío.

const arr = [];
console.log(arr);

// 2. Declara un array con mas de 5 elementos.

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2);

// 3. Encuentra la longitud de tu array.

const arrLogitud = arr2.length;
console.log(arrLogitud);

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.

let firstElement = arr2[0];

let middleIndex = Math.floor(arr2.length / 2);
let middleElement = arr2[middleIndex];

let lastElement = arr2[arr2.length - 1];

console.log(`Este es el primer elemento del array: ${firstElement}`);
console.log(`Este es el elemento del medio del array: ${middleElement}`);
console.log(`Este es el último elemento del array: ${lastElement}`);


// 5. Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
const mixedDataTypes = [
    'Nat', 
    28, 
    false, 
    { country: "Finland", city: "Helsinki" },
    { skills: 
        ["HTML", "CSS", "JS", "React", "Python"]
    },
    "Hola, mundo"
];

console.log(mixedDataTypes);
console.log(mixedDataTypes.length);


// 6. Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Imprima el array usando console.log().

console.log(itCompanies);

// 8. Imprima el número de empresas en el array.

console.log("Number of companies: ", itCompanies.length);

// 9. Imprime la primer empresa , la intermedia y la última empresa.

let firstCompany = itCompanies[0];

let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];

let lastCompany = itCompanies[itCompanies.length - 1];

console.log(`La primera empresa es: ${firstCompany}`);
console.log(`La empresa intermedia es: ${middleCompany}`);
console.log(`La última empresa es: ${lastCompany}`);

// 10. Imprime cada empresa.

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
