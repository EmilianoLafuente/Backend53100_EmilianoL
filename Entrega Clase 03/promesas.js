//calllback hell

//promesas
//Las promesas son un concepto para resolver el problema de asincronía
//de una forma mucho más elegante y práctica que, por ejemplo, 
//utilizando funciones callbacks directamente.

//web adicional para aprender: https://lenguajejs.com/javascript/asincronia/promesas/

// La promesa se cumple (promesa resuelta)
// La promesa no se cumple (promesa rechazada)
// La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

//const sumar = (a,b) => a + b
//const restar = (a,b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b



function sumar (a,b) {

    return new Promise((resolve, reject) => {

        if (isNaN(a) || isNaN(b)){
            reject("Ingrese un parametro valido")
          }
        else{
            resolve(a + b)
        }
    })
}

async function calc (a,b){

    try {

        let suma = sumar (a,b) 
        //let restar = restar(a,b)
        //let dividir = dividir(a,b)
        //let multiplicar = multiplicar(a,b)
        
        // Promise.all([sumar,restar,dividir,multiplicar])
        //Promise.all([sumar])

    } catch (err)  {

        console.log(err)

    }
}


//calc(4,"n") //aqui debe entrar al reject

console.log("🚀 ~ calc (2,3, sumar):", calc (2,3))

