// 4. El área de un rectángulo se calcula de la siguiente manera:
// area = length × width.
console.log("========== Ejercicio 4 ==========");

function areaOfRectangle(length, width) {
  let area = length * width;
  return `El área total es: ${area}`;
}

console.log(areaOfRectangle(9, 15));

// 5. El perímetro de un rectángulo se calcula de la siguiente manera:
// perimeter = 2 × (length + width)

console.log("========== Ejercicio 5 ==========");

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return `El perímetro total es: ${perimeter}`;
}

console.log(perimeterOfRectangle(6, 13));

// 6. El volumen de un prisma rectangular se calcula de la siguiente manera:
// volume = length × width × height

console.log("========== Ejercicio 6 ==========");

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return `El volumen del prisma rectangular es: ${volume}`;
}

console.log(volumeOfRectPrism(6, 9, 7));

// 7. El área de un círculo se calcula de la siguiente manera:
// area = π × r × r

console.log("========== Ejercicio 7 ==========");

function areaOfCircle(radius) {
  let area = 3.14 * radius * radius;
  return `El área del círculo es: ${area}`;
}

console.log(areaOfCircle(4));

// 8. La circunferencia de un círculo se calcula de la siguiente manera:
// circumference = 2πr

console.log("========== Ejercicio 8 ==========");

function circumOfCircle(radius) {
  let circumference = 2 * 3.14 * radius;
  return `La circunferencia del círculo es: ${circumference}`;
}

console.log(circumOfCircle(5));

// 9. La densidad de una sustancia se calcula de la siguiente manera:
// density = mass / volume

console.log("========== Ejercicio 9 ==========");

function density(mass, volume) {
  let densityValue = mass / volume;
  return `La densidad de la sustancia es: ${densityValue}`;
}

console.log(density(8, 4));

// 10. La velocidad se calcula de la siguiente manera:
// speed = distance / time

console.log("========== Ejercicio 10 ==========");

function speed(distance, time) {
  let speedValue = distance / time;
  return `La velocidad es: ${speedValue}`;
}

console.log(speed(13, 4));

// 11. El peso de una sustancia se calcula de la siguiente manera:
// weight = mass × gravity

console.log("========== Ejercicio 11 ==========");

function weight(mass, gravity) {
  let weightValue = mass * gravity;
  return `El peso de la sustancia es: ${weightValue}`;
}

console.log(weight(9, 4));
