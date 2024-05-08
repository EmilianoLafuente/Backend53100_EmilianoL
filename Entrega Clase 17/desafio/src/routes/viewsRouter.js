import { Router } from "express";
import { __dirname } from "../utils.js";
import { obtenerResultadosFiltradosYPaginados } from "../utils.js";
import productsModel from "../dao/models/prodcuts.js";

const productsRouterView = Router()

productsRouterView.get('/realTimeProducts', async (req, res) => {
    let pageQuery = parseInt(req.query.page)
    let categoryQuery = req.query.category ? req.query.category : "PC" 
    let limit = req.query.limit ? parseInt(req.query.limit, 10) : 5
    let sortQuery = req.query.sort
    
    if (!pageQuery) pageQuery = 1

    const filtro = {
        category: categoryQuery      
    }

    const opcionesDePaginacion =  { 
        limit: limit,
        page: pageQuery,
        sort: sortQuery,
        lean:true
    }

    if (sortQuery) {
        opcionesDePaginacion.sort = { price: sortQuery.toLowerCase() === 'asc' ? 1 : -1 };
    }
    
    console.log("🚀 ~ productsRouterView.get ~ opcionesDePaginacion:", opcionesDePaginacion)
    
    try {
        const products = await productsModel.paginate(filtro,opcionesDePaginacion);

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
    let products = await productsModel.paginate({}, { limit: 5 })

    res.render('home', { products });
})

export default productsRouterView;