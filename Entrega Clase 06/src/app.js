import express from "express";
const app = express()
const port = 8080
app.use(express.urlencoded({extended: true}))


app.get('/saludo', (req, res)=> {

    res.send("Hola a todos desde express")
})

app.get("/usuario/:user", (req, res)=> {
    let user = req.params.user

    res.send(`Hola ${user}`)
})

app.get("/usuario/:userId", (req, res)=> {
    let userId = req.params.userId

    let data = users.find(user => (userId == user.id))
    console.log("🚀 ~ app.get ~ data:asd", data)
    
    if(!data) return res.send("Usuario no encontrado")

    res.send(data)
})

app.get("/", (req, res)=> {
    res.json(users)
})

app.get("/usuarios/username", (req, res)=> {
    let username = req.query
    console.log("🚀 ~ app.get ~ username:", username)

    let data = users.find(user => (username == user.name))
    console.log("🚀 ~ app.get ~ data:", data)
    
    if(!data) return res.send("Usuario no encontrado")

    res.send(data)
})

let users = [
    {id: 1, name: "emiliano", apellido: "Lafuente", edad: 26},
    {id: 2, name: "Martin", apellido: "Perez", edad: 30}
]

app.listen(port), () => console.log(`Servidor en el puerto  ${port}`); 