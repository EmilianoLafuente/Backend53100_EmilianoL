let arrayDeNumeros = [2,4,6,8,10]

//Iteramos el array, y suma los dos o tres numeros mayores y luego hace el promedio 
function sumarMayoresPromedio (arr, callback) { //eto recibe una array y un callback(funcion)

    let mayores = arr.sort((a,b)=> b - a) 
    
    let result = callback(mayores) //callback

    return result
}


function promedio (arr){

    let sumaMayores = arr[0] + arr[1]

    let result = sumaMayores / 2

    return result
} 

console.log("🚀 ~ sumarMayoresPromedio(arrayDeNumeros, promedio):", sumarMayoresPromedio(arrayDeNumeros, promedio)) //extension turbo console log


