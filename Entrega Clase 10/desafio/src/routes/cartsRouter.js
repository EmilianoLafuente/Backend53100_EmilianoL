import Router from "express";
import productManager from "../productManager.js"
import cartManager from "../cartManager.js";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path';

//Con Type: module (de debe hacer de esta manera)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const path = join(__dirname, '..', 'database', 'carts.json') //access to DB

const cartsRouter = Router()
const cartsManager = new cartManager(path)

cartsRouter.get('/:cid', (req, res) => {
    const id = parseInt(req.params.cid)

    try {
        cartsManager.getCartById(id).then((getCartById) => {
            res.json(getCartById);

        }).catch((error) => {
            res.status(500).json({ error: error.message });
 
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }


})

cartsRouter.post('/', (req, res) => {  
    try {
        cartsManager.addCart().then((addCart) => {
            res.json(addCart);

        }).catch((error) => {
            res.status(500).json({ error: error.message });
 
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
})

cartsRouter.post('/:cid/product/:pid', (req, res) => {  
    const cartId = parseInt(req.params.cid)
    const productId = parseInt(req.params.pid)

    try {
        cartsManager.addProductToCart(cartId,productId).then((addProductToCart) => {
            res.json(addProductToCart);

        }).catch((error) => {
            res.status(500).json({ error: error.message });
 
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
})



export default cartsRouter