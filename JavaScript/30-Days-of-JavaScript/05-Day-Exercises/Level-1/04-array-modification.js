// 17. Cortar las primeras 3 empresas del array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const firstThreeCompanies = itCompanies.slice(0, 3);

console.log(`Estas son las primeras 3 empresas: ${firstThreeCompanies}`);

// 18. Cortar las últimas 3 empresas del array

const lastThreeCompanies = itCompanies.slice(-3);

console.log(`Estas son las ultimas 3 empresas: ${lastThreeCompanies}`);


// 19. Cortar la empresa o empresas intermedias de TI del array

const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];

console.log(`La empresa intermedia es: ${middleCompany}`);


// 20. Eliminar la primera empresa de TI del array.
// Creamos una copia del array original para no modificarlo.

const companies = [...itCompanies];

companies.shift();
console.log(companies);

// 21. Eliminar la empresa o empresas intermedias de TI del array.

const middleIndex = Math.floor(companies.length / 2);

companies.splice(middleIndex, 1);

console.log(companies);

// 22. Elimine la última empresa de TI del array.

companies.pop();

console.log(companies);

// 23. Eliminar todas las empresas de TI.

companies.splice(0);

console.log(companies);

