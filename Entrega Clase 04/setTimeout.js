// setTimeout | recibe una function como parametro y la ejecuta en 3000 ms (Asincronico)

const timer = (cb) => {

    setTimeout(() => {

        cb()

    }, 3000)


}

console.log("Iniciando");

let task = () => console.log("Timer!");
timer(task)

console.log("Finalizando");


