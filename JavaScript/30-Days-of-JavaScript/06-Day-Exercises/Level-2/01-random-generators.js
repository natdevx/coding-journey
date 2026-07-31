/* 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/
let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomId = "";
let idLength = 25;

for (let i = 0; i < idLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
}

console.log("ID:", randomId);

/* 2. Escribe un script que genere un número hexadecimal aleatorio.
    #ee33df'
*/
let hexCharacters = '0123456789abcdef'
let randomHex = '';

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexCharacters.length);
    randomHex += hexCharacters[randomIndex];
}
console.log(`Número hexadecimal: #${randomHex}`);

/* 3. Escribe un script que genere un número de color rgb aleatorio.
    rgb(240,180,80)
*/
let rgbColor = "";

for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 256);

    rgbColor += randomNumber;

    if (i < 2) {
        rgbColor += ",";
    }
}

console.log(`rgb(${rgbColor})`);
