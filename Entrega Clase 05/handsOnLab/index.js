import UserManager from "./manager.js"


//All users
let manager = new UserManager("./Usuarios.json")

let user = {
    nombre : "Emiliano 3", 
    apellido : "Lafuente 3",
    nombre_usuarios : "elafuente 3",
    password: '12345'
}

//All users
//console.log("🚀 ~ users:", await manager.getUsers())

//Add user
console.log("🚀 ~ products:", await manager.createUsers(user))


await manager.validateUsers("elafuente 3", "12345")
