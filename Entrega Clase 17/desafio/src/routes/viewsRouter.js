import { Router } from "express";
import { __dirname } from "../utils.js";
import { obtenerResultadosFiltradosYPaginados } from "../utils.js";
import { join } from 'path';
// import productManager from "../productManager.js"
import productsModel from "../dao/models/prodcuts.js";

const productsRouterView = Router()

//Con Type: module (de debe hacer de esta manera)
const path = join(__dirname, 'database', 'DbProducts.json') //access to DB

// const productsManager = new productManager(path)
// const products = await productsManager.getProducts()

productsRouterView.get('/realTimeProducts', async (req, res) => {
    let pageQuery = parseInt(req.query.page)
    let categoryQuery = req.query.category ? parseString(req.query.category) : "PC"
    let limit = req.query.limit ? parseInt(req.query.limit, 10) : 5

    if (!pageQuery) pageQuery = 1

    //
    // QUEDE ACA
    //
    const pipelines = [
        {
            // $match:{category: "CEL"}
            $match: { category: categoryQuery }
        }

        // ,
        // {
        //     $sort: { price: -1 } //menor a mayor
        // }
    ]

    const opcionesDePaginacion = {
        page: 1,
        limit: limit
    };

    try {
        const resultados = await obtenerResultadosFiltradosYPaginados(pipelines, opcionesDePaginacion);
        console.log("Resultados filtrados y paginados:", resultados);

        //let products = await productsModel.paginate({},{pageQuery, limit, lean:true}) 

        products.isValid = pageQuery >= 1 && pageQuery <= products.totalPages

        products.nextLink = products.hasNextPage
            ? `http://${process.env.local}:${process.env.PORT}/realTimeProducts?page=${products.nextPage}`
            : ""

        products.prevLink = products.hasPrevPage
            ? `http://${process.env.local}:${process.env.PORT}/realTimeProducts?page=${products.prevPage}`
            : ""

        // Renderiza la plantilla Handlebars
        res.render('viewProducts', products); //realTimeProducts

    } catch (error) {
        console.error("Error:", error);
    }
}
)

productsRouterView.get('/', async (req, res) => {
    // Renderiza la plantilla Handlebars con los datos de productos  
    // let products = await productsModel.find()
    let products = await productsModel.paginate({}, { limit: 5 })
    //console.log("🚀 ~ productsRouterView.get ~ products:", products)

    res.render('home', { products });
})

export default productsRouterView;