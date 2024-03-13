import express from "express"
import __dirname from "../src/utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import viewRouter from './src/routes/viewRouter.js'
import cartsRouter from "./src/routes/cartsRouter.js"
import productsRouter from "./src/routes/productsRouter.js"

const app = express();
const PORT = 3000;

//middlewares
app.set('views',__dirname +'/views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname +'/public'))
app.engine('handlebars', handlebars.engine())

//app.use(viewRouter)


//routes
app.use("/api/carts", cartsRouter)
app.use("/api/products", productsRouter)
app.use(viewRouter)

//servidorON
const serverHttp = app.listen(PORT, () => {console.log(`Open server on port ${PORT}`);
});

serverHttp.on("error", (error) => console.log("Server error:", error));

const io = new Server(serverHttp) //socket.io

const logs = []

io.on('connection', socket =>{

    console.log("Connected!")

    socket.on("message", (data)=> {
    console.log("🚀 ~ socket.on ~ data:", data)
        console.log(__dirname);
    logs.push({socketid: socket.id, message: data})
        
        io.emit('log',{logs})
        console.log("🚀 ~ logs:", logs)
        
    })

})

