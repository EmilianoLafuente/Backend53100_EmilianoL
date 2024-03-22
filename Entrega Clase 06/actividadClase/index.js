import Express from "express";

const port = 8080
const app = Express()

app.get("/bienvenida", (req, res) => {

    res.send("Saludos desde el back")
    res.sendFile("./index.html")
})

app.get("/usuario", (req, res) => {

    let user = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 40,
        corre: "asdas@asda.com"
    }

    res.json(user)
    
})

app.listen(port, () => {
    console.log(`Servidor con el puerto ${port}`);
})