import  Express  from "express";

const app = Express()
const PORT = 3000
let users = [ 
    { name: 'Emiliano', last_name: 'Lafuente' }, 
    { name: 'Diego', last_name: 'Lafuente' } ,
    { name: 'Laura', last_name: 'Vizcaino' } 
]
console.log("🚀 ~ users:", users)

//middlewares
app.use(Express.urlencoded({extended:true}))
app.use(Express.json())

//Rutas
app.post("/api/user", (req, res) => {
    let user = req.body
    if (!user.name || !user.last_name) {
        return res.status(400).send({ status: "error" })
    }
    users.push(user)
    console.log("🚀 ~ users:", users)

    return res.status(200).send({ status: "success" })
});


app.put("/api/user/:name", (req, res) => {
    let user = req.body
    let userName = req.params.name

    let userByName = users.find((user) => user.name == userName)

    if (!user.name || !user.last_name) {
        return res.status(400).send({ status: "error" })
    }

    userByName = user
    users[0] = userByName //solo para este ejercicio

    console.log("🚀 ~ users:", users)

    return res.status(200).send({ status: "success" })
});

app.delete("/api/user/:name", (req, res) => {
    let userName = req.params.name

    let userByName = users.findIndex((user) => user.name == userName)
    if (userByName === -1) {
        return res.status(400).send({ status: "error" })
    }

    users.splice(userByName)
    console.log("🚀 ~ users:", users)

    return res.status(200).send({ status: "success" })
});

// app.get("/api/users", (res) => {
//     console.log("🚀 ~ users:", users)

//     return res.status(200).send({status: "success"})
// });
app.listen(PORT, () => {
    console.log(`Open server on port ${PORT}`);
  });
  
