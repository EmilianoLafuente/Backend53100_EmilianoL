import Express from "express";
import Handlebars from "express-handlebars";

import __dirname from "./utils.js"

const app = Express()
const port = 8080


//Middlewares
app.set('views', `${__dirname}/views`)
//Motor de plantillas
app.engine('handlebars', Handlebars.engine())
app.set('view engine', 'handlebars')








//servidorON
const server = app.listen(port, () => {console.log(`Open server on port ${port}`);
});

server.on("error", (error) => console.log("Server error:", error));
