import express from "express"
import productManager from "./src/productManager.js"

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}))
const productsManager = new productManager("./DbProducts2.json")

app.get("/products", (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 10);

        productsManager.getProducts().then((products) => {
            const limitedProducts = limit ? products.slice(0, limit) : products; //http://localhost:8080/products?limit=3
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

app.get("/products/:pid", (req, res) => {
    try {
        const id = parseInt(req.params.pid) //http://localhost:8080/products/5
        console.log(id);
        productsManager.getProductById(id).then((prodcutById) => {
            res.json(prodcutById);

        }).catch((error) => {
            console.error(error.message);
            res.status(500).json({ error: 'Error al procesar la solicitud' });
 
        });

        } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al procesar la solicitud' });

    }
});


const server = app.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`);
});

server.on("error", (error) => console.log("Server error:", error));





