// Los ejercicios: 2, 3 y 4 se basan en los siguientes dos arrays: users y products ().
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 2. Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB.
console.log("========== Ejercicio 2 ==========");
// a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
console.log("========== Ejercicio A ==========");

function signUp(users) {
  const username = prompt("Ingrese su nombre de usuario:");
  const email = prompt("Ingrese su correo electrónico:");
  const password = prompt("Ingrese su contraseña:");

  // Verificar si el usuario ya existe
  let userExists = false;

  for (const user of users) {
    if (user.username === username || user.email === email) {
      userExists = true;
      break;
    }
  }

  // Si existe, no lo registramos
  if (userExists) {
    console.log("Ya tiene una cuenta.");
    return;
  }

  // Crear el nuevo usuario
  const newUser = {
    _id: `user-${Date.now()}`,
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false,
  };

  // Agregar el nuevo usuario a la colección
  users.push(newUser);

  console.log("Registro exitoso.");
}

signUp(users);

console.log(users);

// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación.
console.log("========== Ejercicio B ==========");

function signIn(users) {
  const username = prompt("Ingrese su nombre de usuario: ");
  const password = prompt("Ingrese su contraseña: ");

  //Buscar el usuario.
  let user = null;

  for (const currentUser of users) {
    if (currentUser.username === username) {
      user = currentUser;
      break;
    }
  }
  if (user && user.password === password) {
    user.isLoggedIn = true;
    console.log("Inicio de sesión exitoso");
  } else {
    console.log("Nombre de usuario o contraseña incorrectos.");
  }
}

signIn(users);

console.log(users);
