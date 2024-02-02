// Calculadora positiva con promesas
// ¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno
// ASÍNCRONO donde podremos ponerlas a prueba

// Definir función suma:
//     • Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea O
//     • En caso de que algún sumando sea 0, rechazar la promesa indicando "Operación innecesaria".
//     • En caso de que la suma sea negativa, rechazar la promesa indicando "La calculadora sólo debe devolver valores positivos"

// Definir función resta:
//     • Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea O
//     • En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando
//     • En caso de que el valor de la resta sea menor que O, rechazar la promesa indicando  "calculadora sólo puede devolver valores positivos"
 
// Definir una función multiplicación:
//     • Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores  sea negativo
//     • Si el producto es negativo, rechazar la oferta indicando "La calculadora sólo puede devolver valores positivos"

// Definir la misma función división utilizada en esta clase.

// Definir una función asíncrona "cálculos", y realizar pruebas utilizando async/await y try/catch



function sumar (a,b) {

    return new Promise((resolve, reject) => {

        if (a === 0 || b === 0) reject("Operación innecesaria")
        if (a + b < 0 ) reject("La calculadora sólo debe devolver valores positivos")

        if (isNaN(a) || isNaN(b)){
            reject("Ingrese un parametro valido")
        }else{
            resolve(a + b)
        }
        

    })
}

function restar (a,b) {

    return new Promise((resolve, reject) => {

        if (a < 0 || b < 0 ) reject("La calculadora sólo debe devolver valores positivos")
        if (isNaN(a) || isNaN(b)){
            reject("Ingrese un parametro valido")
          }
        else{
            resolve(a - b)
        }
    })
}
function dividir (a,b) {

    return new Promise((resolve, reject) => {

        if (isNaN(a) || isNaN(b)){
            reject("Ingrese un parametro valido")
          }
        else{
            resolve(a / b)
        }
    })
}
function multiplicar (a,b) {

    return new Promise((resolve, reject) => {

        if (isNaN(a) || isNaN(b)){
            reject("Ingrese un parametro valido")
          }
        else{
            resolve(a * b)
        }
    })
}

async function calc (a,b, callback){

    try {

        let result = await callback (a,b) 
        console.log(`🚀 ~ El resultado es: ` + result)

    } catch (err)  {

        console.log(err)

    }
}


//test
calc (4,0, sumar)
calc (4,-5, sumar)
calc (4,"a", sumar)
calc (4,4, sumar)
calc (4,4, restar)
calc (4,4, dividir)
calc (4,4, multiplicar)