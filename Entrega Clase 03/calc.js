
const sumar = (a,b) => a + b
const restar = (a,b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b


function calc (a, b, cb) { //cb nombre de esta callback

    return cb (a,b) 

}

console.log("🚀 ~ calc (2,3, sumar):", calc (2,3, sumar))
console.log("🚀 ~ calc (2,3, sumar):", calc (2,3, restar))
console.log("🚀 ~ calc (2,3, sumar):", calc (2,3, dividir))
console.log("🚀 ~ calc (2,3, sumar):", calc (2,3, multiplicar))

