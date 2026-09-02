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

// 4. Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like.
console.log("========== Ejercicio 4 ==========");

function likeProduct(productId, userId) {
    for(const product of products) {
        if(product._id === productId) {
            const index = product.likes.indexOf(userId);
            if(index === -1) {
                product.likes.push(userId);
            } else {
                product.likes.splice(index, 1);
            }
            break;
        }
    }
    return products;
}


console.log(likeProduct("hedfcg", "fg12cy"));
