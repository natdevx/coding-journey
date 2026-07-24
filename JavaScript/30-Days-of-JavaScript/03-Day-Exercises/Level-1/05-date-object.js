/* 7. Utilice el objeto Date para realizar las siguientes actividades.

I. ¿Qué año es hoy?
II. ¿Qué mes es hoy con un número?
III. ¿Qué fecha es hoy?
IV. ¿Qué día es hoy con un número?
V. ¿Cuál es la hora actual?
VI. ¿Cuántos minutos hay actualmente?
VII. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
*/

// Crear un objeto Date con la fecha y hora actual.
const currentDate = new Date();

// Obtener el año actual.
const currentYear = currentDate.getFullYear();

// Obtener el mes actual (0 = Enero, 11 = Diciembre).
const currentMonth = currentDate.getMonth() + 1;

// Obtener el día del mes.
const currentDayOfMonth = currentDate.getDate();

// Obtener el día de la semana (0 = Domingo, 6 = Sábado).
const currentDayOfWeek = currentDate.getDay();

// Obtener la hora actual.
const currentHour = currentDate.getHours();

// Obtener los minutos actuales.
const currentMinutes = currentDate.getMinutes();

// Obtener los segundos transcurridos desde el 1 de enero de 1970.
const secondsSinceJanuary1970 = Math.floor(currentDate.getTime() / 1000);

// Mostrar resultados.
console.log("Current year:", currentYear);
console.log("Current month:", currentMonth);
console.log("Current day of the month:", currentDayOfMonth);
console.log("Current day of the week:", currentDayOfWeek);
console.log("Current hour:", currentHour);
console.log("Current minutes:", currentMinutes);
console.log("Seconds since January 1, 1970:", secondsSinceJanuary1970);

