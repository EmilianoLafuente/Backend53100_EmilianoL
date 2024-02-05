//almacenar fecha y hora | practica para repasar los conceptos de archivos con callbacks
//realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual
//posteriormete leer el archivo y mostrarlo
//utilizar modulos fs y sus operaciones de tipo callback

//aqui lo hacemos con callback hell, la buena practica es con promises

const fs = require ('fs');
const path = './baseDeDatosDesafioClase.txt'
const date = new Date().toString();

fs.writeFile(path, date, (err) => {

    if(err) return console.log(err);

    fs.readFile(path, 'utf-8', (err, result) => {

        if(err) return console.log(err);

        console.log(result);

    })
})

