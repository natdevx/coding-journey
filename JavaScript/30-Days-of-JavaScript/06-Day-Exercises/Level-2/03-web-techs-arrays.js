// 11. Encuentra la palabra más larga en el array webTechs
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestTech = "";
for (let i = 0; i < webTechs.length; i++) {
    const tech = webTechs[i];

    if (tech.length > longestTech.length) {
        longestTech = tech;
    }
}

console.log("La palabra más larga del array es:", longestTech);

/* 12. Utiliza el array de webTechs para crear la el siguiente array de arrays:
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
let webTechInfo = [];

for (let i = 0; i < webTechs.length; i++) {
    const tech = webTechs[i];
    const length = tech.length;

    webTechInfo.push([tech, length]);
}

console.log('Informacion de las tecnologias: ',webTechInfo);

// 13. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack.

const mernStack = ["MongoDB", "Express", "React", "Node"];

let acronym = "";

for (const tech of mernStack) {
  acronym += tech[0]; 
}

console.log('El acrónimo del Stack app: ',acronym);
