// =====================================
// EXERCISES LEVEL 2
// =====================================

//Objecto de los usuarios.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
console.log("========== Ejercicio 1 ==========");

function personWithMostSkills(users) {
  let maxSkills = 0;
  let  person = '';
  for (const user in users) {
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      person = user;
    }
  }
  return person;
}

console.log(personWithMostSkills(users));

// 2. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.
console.log("========== Ejercicio 2 ==========");

function userIsLoggedInAndPoints (users) {
  let loggedInCount = 0;
  let pointsOver50Count = 0;

  //Cuantos usuarios estan conectados.
  for (const user in users) {
    if(users[user].isLoggedIn === true) {
      loggedInCount++;
    }
    //Contar que usuarios tiene más de 50 puntos.
    if(users[user].points > 50) {
      pointsOver50Count++;
    }
  }
  return `Usuarios conectados: ${loggedInCount}, Usuarios con más de 50 puntos: ${pointsOver50Count}`;
}

console.log(userIsLoggedInAndPoints(users));

// 3. Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios.
console.log("========== Ejercicio 3 ==========");

function mernStackDevelopers(users) {
  const mernStack = [];
  for (const user in users) {
    const skills = users[user].skills;
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
      mernStack.push(user);
    }
  }
  return mernStack;
}

console.log(mernStackDevelopers(users));

// 4. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original.
console.log("========== Ejercicio 4 ==========");

const copyUsers = {...users};
copyUsers.Nat = {
  email: 'nat@natdev.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'MongoDB', 'Express', 'React', 'Node'],
  age: 24,
  isLoggedIn: true,
  points: 55
};

console.log(copyUsers);
