// 4. Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.

console.log("========== Ejercicio 4 ==========");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

function countInitialLetters(countries) {
    const letterCount = {};
    countries.forEach((country) => {
        const initialLetter = country[0].toUpperCase();
        if (letterCount[initialLetter]) {
            letterCount[initialLetter]++;
        } else {
            letterCount[initialLetter] = 1;
        }
    });
    return Object.entries(letterCount).map(([letter, count]) => ({ letter, count}));
}

console.log(countInitialLetters(countries));