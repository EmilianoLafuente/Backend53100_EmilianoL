import express from "express"
import mongoose from "mongoose"
//import studentsRouter from "./routes/studentsRouter.js"
import bodyParser from "body-parser"

const app = express()
const PORT = 8080
const server = app.listen(PORT, ()=> console.log("Server running in", PORT))


const stringConnection = 'mongodb+srv://admin:Case2441.@cluster0.ursafaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


// Conexión a la base de datos MongoDB
mongoose.connect(stringConnection, {  })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));



    const Schema = mongoose.Schema;

    const userSchema = new Schema({
        name: String,
        email: String,
        age: Number
});
    const User = mongoose.model('Products', userSchema)

    //mostrar
    const mostrar = async () => {
        const personas = await User.find()
        console.log(personas);
    }

    mostrar()

    // Configuración de body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.get('/api/users', async (req, res) => {
        try {
          const users = await User.find();
          res.json(users);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });

      app.post('/api/users', async (req, res) => {
        const newUser = new User(req.body);
        try {
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      });

// const DB_URL = "mongodb+srv://1ronlion:J9WhGth363dVpWMH@cluster0.3ln3p8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const connection = mongoose.connect(DB_URL)


// const connectMongoDB = async ()=>{
//     const stringConnection = 'mongodb://127.0.0.1:27017/ecommerce?retryWrites=true&w=majority' //todo pasar a .env
//     try {
//         await mongoose.connect(stringConnection);
//         console.log("Conectado con exito a MongoDB usando Moongose.");
//     } catch (error) {
//         console.error("No se pudo conectar a la BD usando Moongose: " + error);
//         process.exit();
//     }
// };
// connectMongoDB();


// app.use(express.json())

// app.use(studentsRouter)

