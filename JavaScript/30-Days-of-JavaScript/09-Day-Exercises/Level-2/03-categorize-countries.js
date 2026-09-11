// 3. Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
console.log("========== Ejercicio 3 ==========");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

function categorizeCountries(pattern) {
  const categorizedCountries = countries.filter((country) =>
    country.toLowerCase().includes(pattern.toLowerCase()),
  );
  return categorizedCountries;
}


console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("island"));
