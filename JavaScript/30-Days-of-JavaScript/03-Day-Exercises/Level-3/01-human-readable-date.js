/* Ejercicios: Nivel 3
    1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05).
        I. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

const now = new Date();

// Obtener la fecha y hora actual
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

// Mostrar la fecha con el formato solicitado
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);


