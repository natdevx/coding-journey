// =====================================
// EXERCISES LEVEL 3
// =====================================

/* 1. Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
*/
console.log("========== Ejercicio 1 ==========");

function userIdGeneratedByUser() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let length = parseInt(prompt("Ingrese la cantidad de caracteres:"));
  let count = parseInt(prompt("Ingrese la cantidad de ID a generar:"));

  //La cantidad de ID que se generarán.
  for (let i = 0; i < count; i++) {
    let userId = "";
    // Construye un ID con la cantidad de caracteres solicitada
    for (let j = 0; j < length; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      userId += characters[randomIndex];
    }
    console.log(userId);
  }
}

console.log(userIdGeneratedByUser());

/* 2. Escriba una función llamada rgbColorGenerator que genera colores rgb.
    rgbColorGenerator()
    rgb(125,244,255)
*/
console.log("========== Ejercicio 2 ==========");

function rgbColorGenerator() {
  let rgbColor = "";

  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 256);

    rgbColor += randomNumber;

    if (i < 2) {
      rgbColor += ",";
    }
  }
  return `rgb (${rgbColor})`;
}

console.log(rgbColorGenerator());

// 3. Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
console.log("========== Ejercicio 3 ==========");

function arrayOfHexaColors(quantity) {
  let hexCharacters = "0123456789abcdef";
  let arrayHexaColors = [];

  for (let i = 0; i < quantity; i++) {
    let hexColor = "";

    for (let j = 0; j < 6; j++) {
      let randomIndex = Math.floor(Math.random() * hexCharacters.length);

      hexColor += hexCharacters[randomIndex];
    }

    hexColor = `#${hexColor}`;

    arrayHexaColors.push(hexColor);
  }

  return arrayHexaColors;
}

console.log(arrayOfHexaColors(3));
console.log(arrayOfHexaColors(5));

// 4. Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.

// 5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.

// 6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.

/* 7. Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
    console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors("hexa", 1)); // '#b334ef'
    console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
*/
