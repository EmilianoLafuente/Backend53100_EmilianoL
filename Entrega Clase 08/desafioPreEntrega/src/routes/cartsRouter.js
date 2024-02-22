import  Router  from "express";
import {fileURLToPath} from 'url'
import {dirname} from 'path';

//Con Type: module (de debe hacer de esta manera)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const cartsRouter = Router()

let pets = []

cartsRouter.get('/', (req, res) => {
    res.json({pets})

})

cartsRouter.get('/views', (req, res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)

})


cartsRouter.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)
    
    res.json({status: "succes"})

})

export default cartsRouter