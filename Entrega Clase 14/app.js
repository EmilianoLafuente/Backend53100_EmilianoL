import express from "express"
import mongoose from "mongoose"
import studentsRouter from "./routes/studentsRouter.js"

const app = express()
const PORT = 8080
const server = app.listen(PORT, ()=> console.log("Server running in", PORT))

//const DB_URL = "mongodb+srv://admin:<admin>@cluster0.xtezbaa.mongodb.net/"
//const connection = mongoose.connect(DB_URL)


const connectMongoDB = async ()=>{
    const stringConnection = 'mongodb+srv://admin:Case2441.@cluster0.ursafaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' //todo pasar a .env


    try {
        await mongoose.connect(stringConnection);
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();


app.use(express.json())

app.use(studentsRouter)