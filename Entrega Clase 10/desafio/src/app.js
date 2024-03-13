import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import productsRouterView from './routes/viewsRouter.js'
import cartsRouter from "./routes/cartsRouter.js"
import productsRouter from "./routes/productsRouter.js"

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
app.use("/realTimeProducts", productsRouterView)

const server = app.listen(port,()=>console.log("Listening in", port))

const io = new Server(server)//instanciando socket.io

const logs = [{ socketid: '1111', message: 'ssss' } ]

io.on('connection', socket =>{
    console.log("Connected! io.on")

    //io.send(JSON.stringify(products));

    socket.on("message", (data)=> {

    logs.push({socketid: socket.id, message: data})
        
        io.emit('log',{logs})
        console.log("🚀 ~ logs:", logs)
        
    })

})