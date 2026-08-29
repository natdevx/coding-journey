//Objeto de paises.
const countries = {
  Mexico: {
    capital: "Mexico City",
    population: 128900000,
    languages: ["Spanish"]
  },

  Finland: {
    capital: "Helsinki",
    population: 5600000,
    languages: ["Finnish", "Swedish"]
  },

  Japan: {
    capital: "Tokyo",
    population: 123300000,
    languages: ["Japanese"]
  },

  Canada: {
    capital: "Ottawa",
    population: 40000000,
    languages: ["English", "French"]
  }
};

// 7. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.

console.log("========== Ejercicio 7 ==========");

for (const country in countries) {
    const { capital, population, languages } = countries[country];
    console.log(`País: ${country}`);
    console.log(`Capital: ${capital}`);
    console.log(`Población: ${population}`);
    console.log(`Idiomas: ${languages.join(", ")}`);
    console.log('-------------------------------');
}

