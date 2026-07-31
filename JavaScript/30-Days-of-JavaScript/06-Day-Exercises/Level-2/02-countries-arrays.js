/* 4. Usando el array countries anterior, crea un array como el siguiente.

    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
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
  "Kenya",
];

const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log('Países: ',newArr);

/* 5. Usando el array countries anterior, crea un array para saber la longitud de cada país.

    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/

let countriesNumOfLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesNumOfLength.push(countries[i].length);
}
console.log('Logitud de cada país: ',countriesNumOfLength);

/* 6. Utiliza el array countries para crear la siguiente array de arrays

    [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
    ]
*/
let countriesInfo = [];





/* 7. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

    ['Finland','Ireland', 'Iceland']
*/


/* 8. En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

    ['Albania', 'Bolivia','Ethiopia']
*/


/* 9. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

    Ethiopia
*/


/* 10. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

    ['Japan', 'Kenya'] 
*/

