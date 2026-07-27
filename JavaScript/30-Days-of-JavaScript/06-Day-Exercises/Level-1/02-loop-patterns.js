/*4. Escribe un bucle que haga el siguiente patrón usando console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
console.log("Patrón de # usando bucle: ");

let repeated = "";
for (let i = 0; i < 7; i++) {
    repeated += '#';
    console.log(repeated);
}

/* 5. Usa un bucle para imprimir el siguiente patrón:

    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/
console.log("Patrón de numeros usando bucle: ");

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

/* Usando un bucle imprime el siguiente patrón:

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

*/

console.log("Patrón de numeros de elevado a 2 y 3 usando bucle: ");

for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i * i}\t${i * i * i}`);
}

