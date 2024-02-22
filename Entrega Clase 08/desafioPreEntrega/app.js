import express from "express"
import cartsRouter from "./src/routes/cartsRouter.js"
import productsRouter from "./src/routes/productsRouter.js"

const app = express();
const PORT = 8080;

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('../public'))

//routes
app.use("/api/carts", cartsRouter)
app.use("/api/products", productsRouter)

//servidorON
const server = app.listen(PORT, () => {console.log(`Open server on port ${PORT}`);
});

server.on("error", (error) => console.log("Server error:", error));
