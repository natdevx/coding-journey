// 5. Verifique si 'on' se encuentra tanto en Python como en la jergon.
let palabra1 = "Python";
let palabra2 = "jargon";

console.log(palabra1.includes("on")); // true
console.log(palabra2.includes("on")); // true


// 6. Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

let sentence = "I hope this course is not full of jargon.";

console.log(sentence.search("jargon"));
