import Router from "express";
import cartsModel from "../dao/models/carts.js";

const cartsRouter = Router()


cartsRouter.get('/', async (req, res) => { ///api/carts/

    try {
        let result = await cartsModel.find() 
        console.log();
        res.json({result})

    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }


})

cartsRouter.get('/:cid', async (req, res) => { ///api/carts/1
    const id = parseInt(req.params.cid)

    try {
        let result = await cartsModel.find({id})
 
        res.json({result})

    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }


})

cartsRouter.post('/', async (req, res) => {  ///api/carts/
    try {
        const newCart = new cartsModel()
        await newCart.save()

        res.status(201).json(newCart)

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
})

cartsRouter.post('/:cid/product/:pid', async (req, res) => {   ///api/carts/1/product/2
    const cartId = parseInt(req.params.cid)
    const productId = parseInt(req.params.pid)
    
    if (!cartId) {
        return `Cart not found`
    }

    try {
        const cart = await cartsModel.findOne({id: cartId })
        const existingProduct = cart.products.find(item => item.product === productId);
    
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.products.push({ product: productId, quantity: 1 });
        }

        await cartsModel.updateOne({id:cartId},{$set:cart})
        res.status(200).json({ message: `Product ${productId} added to cart ${cartId}` });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
})

cartsRouter.delete('/:cid/product/:pid', async (req, res) => {   ///api/carts/1/product/2
    const cartId = parseInt(req.params.cid)
    console.log("🚀 ~ cartsRouter.delete ~ cartId:", cartId)
    const productId = parseInt(req.params.pid)
    console.log("🚀 ~ cartsRouter.delete ~ productId:", productId)
    
    if (!cartId) {
        return res.status(404).json({ message: 'Cart not found' })
    }

    try {
        const cart = await cartsModel.findOne({id: cartId })
        console.log("🚀 ~ cartsRouter.delete ~ cart:", cart)

        if(!cart) {
            return res.status(404).json({ message: 'Cart not found' })
        }
        
        const productIndex = cart.products.findIndex(item => item.product === productId);
        console.log("🚀 ~ cartsRouter.delete ~ productIndex:", productIndex)
        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
    
            // Elimino el producto del array de productos
            cart.products.splice(productIndex, 1);

            // Guardo los cambios en la base de datos
            await cart.save();

            res.status(200).json({ message: `Product ${productId} deleted from cart` });
 


    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
})

cartsRouter.delete('/delete', async (req, res) => {

    const result = await cartsModel.deleteMany({});

    console.log(`${result.deletedCount} carts deleted.`);
    return res.json({ message: `${result.deletedCount} carts deleted` });

})

export default cartsRouter