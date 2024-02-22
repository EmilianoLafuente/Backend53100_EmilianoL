import Router from "express";
import productManager from "../productManager.js"
import { fileURLToPath } from 'url'
import { dirname, join } from 'path';

//Con Type: module (de debe hacer de esta manera)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const path = join(__dirname, '..', 'database', 'DbProducts.json') //access to DB

const productsRouter = Router()
const productsManager = new productManager(path)

let users = []

productsRouter.get("/", (req, res) => {
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


productsRouter.get("/:pid", (req, res) => {
    try {
        const id = parseInt(req.params.pid)

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

productsRouter.post('/', (req, res) => {
    const product = req.body

    try {
        productsManager.addProducts(product).then((product) => {
            res.json(product);
            //console.log(product);
        }).catch((error) => {
            res.status(500).json({ error: error.message });
 
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
});

export default productsRouter