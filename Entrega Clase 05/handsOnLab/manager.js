// Práctica de módulos nativos:
// fs + crypto
// ¿Cómo lo hacemos? Se creará una clase "UserManager' que permitirá guardar usuarios en
// un archivo. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la
// contraseña hasheada con crypto. Utilizar los módulos nativos fs y crypto, El manager debe
// contar con los siguientes métodos:
// El método "Crear usuario" debe recibir un objeto con los campos:
// • Nombre
// Apellido
// Nombre de usuario
// Contraseña
// El método debe guardar un usuario en un archivo "Usuarios json", recordando que la
// contraseña debe estar hasheada por seguridad


import fs from 'fs'
import crypto from  'crypto'

const path = "./Usuarios.json"

export default class UserManager {

    constructor(path){
        this.path = path

        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8')

            this.users =  JSON.parse(data)
        }else{
            this.users = []
            fs.writeFileSync(this.path, JSON.stringify(this.users), 'utf-8')
        }
    }

    saveFile = async() => {
        let data = JSON.stringify(this.users, null, '\t')
        await fs.promises.writeFile(this.path, data, 'utf-8')
        return
    }

    getUsers = async () => {
            return this.users

    }

    createUsers = async (user) => {

        const users = await this.getUsers()

        user.salt = crypto.randomBytes(128).toString('base64')

        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

        users.push(user)
        this.saveFile()

        return 
    }

    validateUsers = async (userName, password) => {
        const users = await this.getUsers()
        
        const userIndex = users.findIndex(users => users.nombre_usuarios === userName)
  
        if(userIndex == -1){
            console.log("User not found");
        }

        const user = users[userIndex]
        const newHash = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

        if (newHash === user.password) {
            console.log("Inicio satisfactorio")
            
        }else{
            console.log("Error al iniciar sesion")
        }
    }
}


