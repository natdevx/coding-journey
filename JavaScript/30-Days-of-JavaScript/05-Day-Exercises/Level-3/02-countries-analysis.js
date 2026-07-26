// 2. Cortar los diez primeros países de la array de países
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
  "Japan",
  "Kenya"
];

const firstTenCountries = countries.slice(0, 10);

console.log(`Estos son los 10 primeros países: ${firstTenCountries}`);

// 3. Encuentre el país o países de en medio en el array de países

const middle = countries[Math.floor(countries.length / 2)];

console.log(`Países del medio: ${middle}`);

/* 4. Divide el array de países en dos arrays iguales si es par. 
Si el array de países no es par, agregue un país más para la primera mitad. 
*/

if (countries.length % 2 === 0) {

    const half = countries.length / 2;

    const firstHalf = countries.slice(0, half);
    const secondHalf = countries.slice(half);

    console.log("Primera mitad:", firstHalf);
    console.log("Segunda mitad:", secondHalf);

} else {

    const half = Math.ceil(countries.length / 2);

    const firstHalf = countries.slice(0, half);
    const secondHalf = countries.slice(half);

    console.log("El array es impar por eso quedan asi: ");
    console.log("Primera mitad:", firstHalf);
    console.log("Segunda mitad:", secondHalf);

}
