// 15. Use indexOf para determinar la posición de la primera aparición de 'a' en 30 días de JavaScript.
let string = '30 días de JavaScript';
let indexOfA = string.indexOf('a');
console.log(indexOfA); // Output: 4

// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
let lastIndexOfA = string.lastIndexOf('a');
console.log(lastIndexOfA); // Output: 14

// 17. Usa indexOf para encontrar la posición de la primera aparición de la palabra 'porque' en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
let indexOfPorque = sentence.indexOf('porque');
console.log(indexOfPorque); // Output: 22

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra 'porque' en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let lastIndexOfPorque = sentence.lastIndexOf('porque');
console.log(lastIndexOfPorque); // Output: 36

// 19. Usa search para encontrar la posición de la primera aparición de la palabra 'porque' en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let searchIndex = sentence.search('porque');
console.log(searchIndex); // Output: 22
