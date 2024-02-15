import express from "express"
import productManager from "./src/productManager.js"

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}))
const productsManager = new productManager("./DbProducts2.json")

app.get("/products", (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 10);

        // Llama al método y maneja la Promesa correctamente
        productsManager.getProducts().then((products) => {
            console.log("🚀 ~ app.get ~ products:", products);

            const limitedProducts = limit ? products.slice(0, limit) : products;
            res.json({ products: limitedProducts });
        }).catch((error) => {
            console.error(error.message);
            res.status(500).json({ error: 'Error al procesar la solicitud' });
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});



//  app.get("/products", (req, res) => {
//      try {
//         const limit = parseInt(req.query.limit, 10);

        
//         // const products =  productsManager.getProducts()
//         // console.log("🚀 ~ app.get ~ products:", products)

        
//         // res.send()
//         //const limitedProducts = limit ? products.slice(0, limit) : products

//         //res.json({ products: limitedProducts })
        
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Error al procesar la solicitud' })
//     }

// });

const server = app.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`);
});

server.on("error", (error) => console.log("Server error:", error));


// app.get("/productos", (req, res) => {
//   productos
//     .getAll()
//     .then((data) => res.send(data))
//     .catch((error) => {
//       console.log(error.message);
//       res.send({ error: error.message });
//     });
// });

// app.get("/productoRandom", (req, res) => {
//   productos
//     .getAll()
//     .then((data) => {
//       const random = Math.floor(Math.random() * data.length);
//       res.send(data[random]);
//     })
//     .catch((error) => {
//       console.log(error.message);
//       res.send({ error: error.message });
//     });
// });


