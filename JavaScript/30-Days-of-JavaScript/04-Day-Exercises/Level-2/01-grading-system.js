/* 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

    - 80-100, A
    - 70-79, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

*/

let calificacion = Number(prompt("Ingrese la calificación del estudiante: "));

if (calificacion >= 80 && calificacion <= 100) {
    console.log("A");
} else if (calificacion >= 70 && calificacion <= 79) {
    console.log("B");
} else if (calificacion >= 60 && calificacion <= 69) {
    console.log("C");
} else if (calificacion >= 50 && calificacion <= 59) {
    console.log("D");
} else if (calificacion >= 0 && calificacion <= 49) {
    console.log("F");
} else {
    console.log("Calificación no válida.");
}
