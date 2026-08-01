// 1. Copia el array countries (Evita mutaciones).
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

let countriesCopy = [];

for (let i = 0; i < countries.length; i++) {
  countriesCopy.push(countries[i]);
}

//Prueba
countriesCopy.push("Argentina", "Mexico", "Spain");

console.log("El array original: ",countries);
console.log("El array copia: ",countriesCopy);

/* 2. Los arrays son mutables. Crea una copia del array que no modifique el original. 
Ordena la copia del array y guárdala en una variable sortedCountries.
*/
let sortedCountries = [];

for (let i = 0; i < countriesCopy.length; i++) {
    sortedCountries.push(countriesCopy[i]);
}

sortedCountries.sort();

console.log("El array copia ordenado:", sortedCountries);

// 3. Ordena el array webTechs y el array mernStack.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let sortedWebTechs = [];

for (let i = 0; i < webTechs.length; i++) {
    sortedWebTechs.push(webTechs[i]);
}

sortedWebTechs.sort();

console.log("El array webTechs ordenado:", sortedWebTechs);

// Ordenamiento del array mernStack.
const mernStack = ["MongoDB", "Express", "React", "Node"];

let sortedMernStack = [];

for (let i = 0; i < mernStack.length; i++) {
    sortedMernStack.push(mernStack[i]);
}

sortedMernStack.sort();

console.log("El array mernStack ordenado:", sortedMernStack);
