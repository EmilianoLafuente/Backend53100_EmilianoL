import  express  from "express";
import petsRouter from './routes/petsRouter.js'
import usersRouter from "./routes/usersRouter.js";

const port = 3000
const app = express()



//middelwares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use("/api/pets", petsRouter)
app.use("/api/users", usersRouter)

app.listen(port,()=> console.log("servidor en el puerto", port))