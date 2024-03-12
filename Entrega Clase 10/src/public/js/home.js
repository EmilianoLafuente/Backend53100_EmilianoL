const socket = io()
console.log("Connected");

//Primera parte: enviar caracter por caracter.
const input = document.getElementById('textbox');
const log = document.getElementById('log')
input.addEventListener('keyup',evt=>{
    if(evt.key === "Enter"){
        socket.emit('message', input.value)
        //input.value = ""
    }
})


socket.emit("message", "Hola desde el home")

