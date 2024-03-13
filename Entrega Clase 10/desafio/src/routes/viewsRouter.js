import { Router } from "express";
import productManager from "../productManager.js"
import { join } from 'path';
import __dirname from "../utils.js";

//Con Type: module (de debe hacer de esta manera)
const path = join(__dirname, 'database', 'DbProducts.json') //access to DB

const productsRouterView = Router()
const productsManager = new productManager(path)

const products = await productsManager.getProducts()






productsRouterView.get('/',(req,res)=>{
    const logs = JSON.stringify(products) // quede aca

    res.render('realTimeProducts', {logs});
})


export default productsRouterView;