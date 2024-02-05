// setInterval | contador que cada 2000 ms suma 1 a la variable contador y al llegar a 6 se corta  

const contador = () => {

    let contador = 1
    console.log("Iniciando operacion")

    let timer = setInterval(() => {

        console.log(contador ++);

        if(contador > 6){

            clearInterval(timer)

        }

    }, 2000) 
}

console.log("Iniciando tarea");
contador()
console.log("Finalizando tarea");