import express from 'express';
import __dirname from './utils.js';
import { join } from 'path';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import productsRouterView from './routes/viewsRouter.js'
import cartsRouter from "./routes/cartsRouter.js"
import productsRouter from "./routes/productsRouter.js"
import productManager from "./productManager.js"

const app = express();
const port = 8080

//Middlewares
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.engine('handlebars', handlebars.engine())

//routes
app.use("/api/carts", cartsRouter)
app.use("/api/products", productsRouter)
app.use("/", productsRouterView)

const server = app.listen(port,()=>console.log("Listening in", port)) //instanciando express
const io = new Server(server) //instanciando socket.io

//Con Type: module (de debe hacer de esta manera)
const path = join(__dirname, 'database', 'DbProducts.json') //access to DB

const productsManager = new productManager(path)
const products = await productsManager.getProducts()

// Socket.io para tiempo real
io.on('connection', (socket) => {
    console.log('Usuario conectado');
    
    // Enviamos lso productos por emit
    socket.emit('productos', products);
});















// io.on('connection', socket =>{
//     console.log("Connected! io.on")

//     //io.send(JSON.stringify(products));

//     // socket.on("message", (data)=> {

//     // logs.push({socketid: socket.id, message: data})
        
//     //     io.emit('log',{logs})
//     //     console.log("🚀 ~ logs:", logs)
        
//     // })

//     socket.on("message", (data)=> {
//             console.log("dentro del socket.on");
//             productsData.push({tittle: socket.tittle, message: data})
//             console.log("🚀 ~ socket.on ~ productsData:", productsData)
            
            
//             io.emit('productsData',{productsData})
//             //console.log("🚀 ~ logs:", logs)
            
//         })

// })