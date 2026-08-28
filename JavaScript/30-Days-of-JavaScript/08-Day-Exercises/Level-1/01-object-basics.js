// =====================================
// EXERCISES LEVEL 1
// =====================================

// 1. Crear un objeto vacío llamado dog.
console.log("========== Ejercicio 1 ==========");

const dog = {};

// 2. Imprime el objeto dog en la consola.
console.log("========== Ejercicio 2 ==========");

console.log(dog);

// 3. Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof.
console.log("========== Ejercicio 3 ==========");

dog.name = "Doki";
dog.legs = 4;
dog.color = "Negro con blanco";
dog.age = 1;
dog.bark = function () {
    return "woof woof";
};

console.log(dog);

// 4. Obtener name, legs, color, age y el valor de bark del objeto dog.
console.log("========== Ejercicio 4 ==========");

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// 5. Establecer nuevas propiedades al objeto dog: breed, getDogInfo.
console.log("========== Ejercicio 5 ==========");

dog.breed = "Border Collie";

dog.getDogInfo = function () {
    return `Mi mascota se llama ${this.name}, es de color ${this.color}, y tiene ${this.age} año de edad, y es de raza ${this.breed} y lo amo mucho.`;
};

console.log(dog.breed);
console.log(dog.getDogInfo());
