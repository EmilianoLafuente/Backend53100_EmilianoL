import express from 'express';
import {__dirname } from './utils.js';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import productsRouterView from './routes/viewsRouter.js'
import cartsRouter from "./routes/cartsRouter.js"
import productsRouter from "./routes/productsRouter.js"
import mongoose from 'mongoose';
import productsModel from "./dao/models/prodcuts.js";

const app = express();
const port = process.env.PORT

// Conexión a la base de datos MongoDB
const stringConnection = process.env.stringConnection

mongoose.connect(stringConnection, {}) 
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

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

//Socket.io para tiempo real
io.on('connection', async (socket) => {
    console.log('Usuario conectado');
    let products = await productsModel.find() 
    // let products = await productsModel.paginate({},{limit: 5}) 
    // console.log("🚀 ~ io.on ~ products:", products)

    //Enviamos los productos por emit
    socket.emit('productosEmit', products);
});