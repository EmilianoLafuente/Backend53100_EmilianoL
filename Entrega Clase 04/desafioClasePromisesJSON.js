//almacenar fecha y hora | practica para repasar los conceptos de archivos con callbacks
//realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual
//posteriormete leer el archivo y mostrarlo
//utilizar modulos fs y sus operaciones de tipo callback

//aqui lo hacemos con promises y manejo de JSON

const fs = require ('fs');
const path = './baseDeDatosDesafioClasePromisesJSON.json'

const asyncTask = async () => {

    let data = await fs.promises.readFile(path, 'utf-8')
    
    let result = JSON.parse(data) //convertimos JSON a JS
    //console.log(result);

    result.name = "Emiliano Lafuente"
    
    let finalData= JSON.stringify(result)
    console.log(finalData);

    await fs.promises.writeFile(path, finalData)

}

asyncTask()


