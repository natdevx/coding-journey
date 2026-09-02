// Los ejercicios: 2, 3 y 4 se basan en los siguientes dos arrays: users y products ().
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

// 3A. Crear una función llamada rateProduct que califique el producto.
console.log("========== Ejercicio 3A ==========");

function rateProduct(products) {
  const productId = prompt("Ingrese el ID del producto que desea calificar:");

  for (const product of products) {
    if (product._id === productId) {
      const rating = parseFloat(prompt("Ingrese la calificación (1-5):"));

      if (rating >= 1 && rating <= 5) {
        product.ratings.push({
          userId: "currentUserId",
          rate: rating,
        });

        console.log("Producto calificado exitosamente.");
      } else {
        console.log("Calificación inválida. Ingrese un valor entre 1 y 5.");
      }

      break;
    }
  }
}

rateProduct(products);

console.log(products);

// 3B. Crear una función llamada averageRating que calcule
// la valoración media de un producto.
console.log("========== Ejercicio 3B ==========");

function averageRating(products) {
  const productId = prompt(
    "Ingrese el ID del producto del cual desea calcular la valoración media:",
  );

  for (const product of products) {
    if (product._id === productId) {
      if (product.ratings.length === 0) {
        console.log("Este producto todavía no tiene valoraciones.");
        return;
      }

      const totalRating = product.ratings.reduce(
        (sum, rating) => sum + rating.rate,
        0,
      );

      const average = totalRating / product.ratings.length;

      console.log(`La valoración media del producto es: ${average}`);

      return;
    }
  }

  console.log("Producto no encontrado.");
}

averageRating(products);
