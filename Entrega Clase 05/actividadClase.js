// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
// Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave
// será la cantidad de veces que salió dicho número. Representar por consola los
// resultados.


let obj = {}

for (let index = 0; index < 10000; index++) {
  let number = Math.floor(Math.random()*20+1)
  
  if (obj[number]) {
    obj[number] ++
  }else{
    obj[number] = 1
  }
}

console.log(obj);