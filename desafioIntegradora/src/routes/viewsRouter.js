import { Router } from "express";
import __dirname from "../utils.js";
import { join } from 'path';
// import productManager from "../productManager.js"
import productsModel from "../models/prodcuts.js";

const productsRouterView = Router()

//Con Type: module (de debe hacer de esta manera)
const path = join(__dirname, 'database', 'DbProducts.json') //access to DB

// const productsManager = new productManager(path)
// const products = await productsManager.getProducts()

productsRouterView.get('/realTimeProducts',(req,res)=>{
    // Renderiza la plantilla Handlebars
    res.render('realTimeProducts', { title: 'Real Time Products' });
})

productsRouterView.get('/', async (req,res)=>{
    // Renderiza la plantilla Handlebars con los datos de productos  
    let products = await productsModel.find() 

    res.render('home', {products});
})

export default productsRouterView;