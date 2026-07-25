/* 3. Compruebe si un día es un día de fin de semana o un día laborable.

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

switch (day) {
    case "sábado":
    case "sabado":
    case "domingo":
        console.log(`El ${day} es fin de semana.`);
        break;

    case "lunes":
    case "martes":
    case "miércoles":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log(`El ${day} es un día laborable.`);
        break;

    default:
        console.log(`"${day}" no es un día válido de la semana.`);
}

