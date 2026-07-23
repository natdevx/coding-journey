// 1. 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.

const string = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.';
const count = (string.match(/amor/g) || []).length;
console.log(count);


// 2. Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'.

const sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
const becauseCount = (sentence.match(/porque/g) || []).length;
console.log(becauseCount);