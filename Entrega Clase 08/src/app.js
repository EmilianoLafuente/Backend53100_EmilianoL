import  express  from "express";
import petsRouter from './routes/petsRouter.js'
import usersRouter from "./routes/usersRouter.js";

import {fileURLToPath} from 'url'
import {dirname} from 'path';

//Con Type: module (de debe hacer de esta manera)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log("🚀 ~ __dirname:", __dirname)


const port = 3000
const app = express()



//middelwares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('../public'))

//routes
app.use("/api/pets", petsRouter)
app.use("/api/users", usersRouter)

app.listen(port,()=> console.log("servidor en el puerto", port))