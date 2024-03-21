import Router from "express";
import productsModel from "../models/prodcuts.js";

const productsRouter = Router()

productsRouter.get("/", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 10);
        let result = await productsModel.find().limit(limit) // /api/products?limit=3

        res.json({result})

    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
});

productsRouter.get("/:code", async (req, res) => {
    try {
        const code = parseInt(req.params.code)
        let result = await productsModel.find({code}) //Utilizo code como id unico
 
        res.json({result})

    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);

    }
});

productsRouter.post('/', async (req, res) => {
    const {title, description, code, price, status, stock, category, thumbnails} = req.body
    
    let product = {
        title, description, code, price, status, stock, category, thumbnails
    }

        try {
            let result = await productsModel.create(product)
            res.json({result})

    }   catch (error) {
            console.error(error.message);
            res.status(500).json(error.message);
    }

});

productsRouter.put('/:pcode', async (req, res) => { 
    const code = parseInt(req.params.pcode)
    const fieldUpdate = req.body

    try {
        let result = await productsModel.updateOne({code:code},{$set:fieldUpdate}) //Utilizo code como id unico

        if(result.modifiedCount === 1){
            res.json("Product modified")
        }else{
            res.json("Product not modified")
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
});

productsRouter.delete('/:code', async (req, res) => {
    try {
        const code = parseInt(req.params.code) //Utilizo code como id unico
        let result = await productsModel.deleteOne({code:code})

        if(result.deletedCount === 1){
            res.json("Removed product")
        }else{
            res.json("Product not removed")
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
});

export default productsRouter