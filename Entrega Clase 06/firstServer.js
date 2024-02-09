
const http = require('http')

const server = http.createServer((request, Response) => {
    Response.end("Mi primer hola mundo desde el back")
})

server.listen(8080, ()=> {

    console.log("Listening on port 8080");
})