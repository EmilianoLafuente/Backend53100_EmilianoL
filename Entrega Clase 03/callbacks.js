let arrayDeNumeros = [2,4,6,8,10]

//Iteramos el array, y suma los dos o tres numeros mayores y luego hace el promedio 
function sumarMayoresPromedio (arr) {

    let mayores = arr.sort((a,b)=> b - a) 
    console.log(mayores);

    let sumaMayores = mayores [0] + mayores[1]
    
    return console.log("El promedio es " + sumaMayores/2);
}


function promedio (){

} 


sumarMayoresPromedio(arrayDeNumeros)
