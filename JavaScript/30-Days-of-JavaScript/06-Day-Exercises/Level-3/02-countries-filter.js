// 4. Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array.
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

let fourLetterCountries = [];

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    if (country.length === 4) {
        fourLetterCountries.push(country);
    }
}

console.log("Los países con exactamente 4 caracteres son:", fourLetterCountries);


// 5. Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array.

let twoWordsCountries = [];

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const words = country.split(" ");

    if (words.length >= 2) {
        twoWordsCountries.push(country);
    }
}

console.log("Países con dos o más palabras:", twoWordsCountries);
