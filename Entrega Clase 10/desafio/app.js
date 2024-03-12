import express from "express"
import cartsRouter from "./src/routes/cartsRouter.js"
import productsRouter from "./src/routes/productsRouter.js"
import __dirname from "../src/utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import viewRouter from './src/routes/viewRouter.js'

const app = express();
const PORT = 8080;

//middlewares
app.set('views', __dirname +'/views')
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.engine('handlebars', handlebars.engine())

//app.use(viewRouter)


//routes
app.use("/api/carts", cartsRouter)
app.use("/api/products", productsRouter)
app.use("/home", viewRouter)

//servidorON
const server = app.listen(PORT, () => {console.log(`Open server on port ${PORT}`);
});
const io = new Server(server) //socket.io

server.on("error", (error) => console.log("Server error:", error));
