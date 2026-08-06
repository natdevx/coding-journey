// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
console.log("========== Ejercicio 12 ==========");

function convertCelsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

console.log(
  "La temperatura de Celsius a Fahrenheit es: ",
  convertCelsiusToFahrenheit(32),
);

/* 13. El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.

    - Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
    - Peso bajo: IMC inferior a 18,5
    - Peso normal: IMC de 18,5 a 24,9
    - Sobrepeso: IMC de 25 a 29,9
    - Obeso: IMC es 30 o más.
*/
console.log("========== Ejercicio 13 ==========");

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log(`Peso bajo: ${bmi}`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Peso normal: ${bmi}`);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Sobrepeso: ${bmi}`);
  } else {
    console.log(`Obeso: ${bmi}`);
  }

  return bmi;
}

calculateBMI(65, 1.58);
