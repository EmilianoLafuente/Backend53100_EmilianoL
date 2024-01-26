const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

//Articulos vendidos
let nuevaArray = []

let keyObjetos = objetos.forEach(objeto => {

    const keys = Object.keys(objeto)

    keys.forEach(key => {
        
        if(!nuevaArray.includes(key)) nuevaArray.push(key)

    });
})

console.log(nuevaArray);

//Suma de valores totales
let total= 0
let valuesObjetos = objetos.forEach(objeto => {

    const value = Object.values(objeto)
    
    subTotal = value.reduce((a,b) => a + b, 0)
    total += subTotal
    console.log(subTotal);
});

console.log(total);

