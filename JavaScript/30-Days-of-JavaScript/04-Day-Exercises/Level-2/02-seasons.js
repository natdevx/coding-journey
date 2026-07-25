/* 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

    - Septiembre, Octubre o Noviembre, la temporada es Otoño.
    - Diciembre, Enero o Febrero, la temporada es Invierno.
    - Marzo, Abril o Mayo, la temporada es Primavera.
    - Junio, Julio o Agosto, la temporada es Verano.

*/

let monthUserInput = prompt('Ingrese el mes actual: ');
let month = monthUserInput.trim().toLowerCase();

if (month === 'septiembre' || month === 'octubre' || month === 'noviembre') {
    console.log('La temporada es Otoño.');
} else if (month === 'diciembre' || month === 'enero' || month === 'febrero') {
    console.log('La temporada es Invierno.');
} else if (month === 'marzo' || month === 'abril' || month === 'mayo') {
    console.log('La temporada es Primavera.');
} else if (month === 'junio' || month === 'julio' || month === 'agosto') {
    console.log('La temporada es Verano.');
} else {
    console.log('No es un mes válido.');
}



