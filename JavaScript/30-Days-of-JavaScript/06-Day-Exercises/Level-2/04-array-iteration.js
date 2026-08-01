// 14. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
const techsStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] ;

for (const tech of techsStack) {
  console.log(tech);
}

// 15. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
const fruits = ['banana', 'orange', 'mango', 'lemon'];

let fruitReverse = [];

for(let i = fruits.length -1 ; i>=0; i--){        
    fruitReverse.push(fruits[i]);
  }

console.log("El array invertido de frutas: ",fruitReverse);

/* 16. Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

console.log('Todos los elemetos del array FullStack: ');

for (const techs of fullStack) {
    for (const tech of techs) {
        console.log(tech);
    }
}
