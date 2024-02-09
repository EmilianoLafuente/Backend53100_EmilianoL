import express from "express";
const app = express()

app.get('/saludo', (req, res)=> {

    res.send("Hola a todos desde express")
})


app.listen(8080), () => console.log("Servidor listen en el puerto 8080"); 