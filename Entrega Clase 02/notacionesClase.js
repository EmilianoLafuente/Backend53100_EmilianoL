//ES6
//Math **

arrayDeNumeros = [0,1,2,3,4,5,10]

let result = arrayDeNumeros.map((numero, indice) => numero ** indice)
console.log(result);

//Includes

arrayDeNombres = ["Juan","Martin", "Pepe"]

let resultNombres = arrayDeNombres.includes("Pepe")
console.log(resultNombres);

let resultNombres2 = arrayDeNombres.includes("Emiliano")
console.log(resultNombres2);

//ES10
//Flat
arrayAnidado = [0,2,3[0,1,2,3]]

let resultAnidado = arrayAnidado.flat()

console.log(resultAnidado);

//Trim

let string = "Hola clase        "
let string2 = "                      Hola clase "

string.trim()
string2.trim()

console.log(string2);
console.log(string.trim());
console.log(string2.trim());