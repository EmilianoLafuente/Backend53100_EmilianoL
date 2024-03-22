
// import http from 'http'



// const server = http.createServer((request, Response) => {
//     Response.end("Mi primer hola mundo desde el back")
// })

// server.listen(port, ()=> {

//     console.log(`Listening on port ${port}`);
// })


import Express from "express";

const port = 8080
const app = Express()

app.use(Express.urlencoded({extended: true}))

let users = [
    {id: 1, name: "pedro", lastname: "Rodriguez", grander:"M"},
    {id: 2, name: "Marta", lastname: "Perez", grander:"F"},
    {id: 3, name: "Diego", lastname: "Sanchez", grander:"M"}
]

app.get("/", (req, res) => {

    res.send(users)

 })

app.get("/usuario/:id", (req, res) => {

    let userId = req.params.userId

    let data = users.find((user) => (user.id == userId))
    res.send(data)

 })

 app.get("/usuario", (req, res) => {
    res.send("hola desde el back")
    let userName = req.query
    console.log(userName);

    let data = users.find((users) => (userName == users.name))
    console.log(data);
    if (!data) return res.send("Usuario no encontrado")

    res.send(data)

 })

app.listen(port, () => {
    console.log(`Servidor con el puerto ${port}`);
})