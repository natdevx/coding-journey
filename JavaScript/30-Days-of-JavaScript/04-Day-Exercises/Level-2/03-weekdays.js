/* 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

    ¿Qué día es hoy? Sábado
    El sábado es fin de semana.

    ¿Qué día es hoy? sábAdo
    El sábado es fin de semana.

    ¿Qué día es hoy? Viernes
    El viernes es un día laborable.

    ¿Qué día es hoy? ViErNes
    El viernes es un día laborable.

*/
let day = prompt("¿Qué día es hoy?").trim().toLowerCase();

if (day === "sábado" ||day === "sabado" ||day === "domingo") {
    console.log(`El ${day} es fin de semana.`);
} else if (day === "lunes" ||day === "martes" ||day === "miércoles" ||day === "miercoles" ||day === "jueves" ||day === "viernes") {
    console.log(`El ${day} es un día laborable.`);
} else {
    console.log(`"${day}" no es un día válido de la semana.`);
}

