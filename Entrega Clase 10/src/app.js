import Express from "express"
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'
import __dirname from "./utils.js"
import viewsRouter from './routes/views.router.js'

const app = Express()
const port = 8080


//Middlewares
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(Express.urlencoded({extended: true}))
app.use(Express.json())
app.use(Express.static(__dirname + '/public'))
app.use(viewsRouter)
app.engine('handlebars', handlebars.engine())



//routes





//servidorON
const server = app.listen(port, () => {console.log(`Open server on port ${port}`);
});
const io = new Server(server) //socket.io instanciado 

server.on("error", (error) => console.log("Server error:", error));
