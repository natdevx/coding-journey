// 15. Escriba una función randomUserIp que genere una ip de usuario aleatoria.
console.log("========== Ejercicio 15 ==========");

function randomUserIp() {
  let userIp = "";

  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 256);
    userIp += randomNumber;
    if (i < 3) {
      userIp += ".";
    }
  }
  return userIp;
}

console.log("IP del usuario: ", randomUserIp());

// 16. Escriba una función randomMacAddress que genere una dirección mac aleatoria.
console.log("========== Ejercicio 16 ==========");

function randomMacAddress() {
  let macAddressCharacters = "0123456789abcdef";
  let macAddress = "";

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      let randomIndex = Math.floor(Math.random() * macAddressCharacters.length);
      macAddress += macAddressCharacters[randomIndex];
    }
    if (i < 5) {
      macAddress += ":";
    }
  }

  return macAddress;
}

console.log("Dirección MAC: ", randomMacAddress());

/* 17. Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
    console.log(randomHexaNumberGenerator());
    '#ee33df'
*/
console.log("========== Ejercicio 17 ==========");

function randomHexaNumberGenerator() {
  let hexCharacters = "0123456789abcdef";
  let randomHex = "";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexCharacters.length);
    randomHex += hexCharacters[randomIndex];
  }
  return `#${randomHex}`;
}

console.log("Codigo Hexadecimal: ", randomHexaNumberGenerator());

/* 18. Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
    console.log(userIdGenerator());
    41XTDbE
*/
console.log("========== Ejercicio 18 ==========");

function userIdGenerator() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let randomId = "";
  let idLength = 7;

  for (let i = 0; i < idLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

console.log('User ID: ',userIdGenerator());
