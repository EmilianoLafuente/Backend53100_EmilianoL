//almacenar fecha y hora | practica para repasar los conceptos de archivos con callbacks
//realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual
//posteriormete leer el archivo y mostrarlo
//utilizar modulos fs y sus operaciones de tipo callback

//aqui lo hacemos con promises!

const fs = require ('fs');
const path = './baseDeDatosDesafioClasePromises.txt'
const date = new Date().toString();

const asyncTask = async () => {

    await fs.promises.writeFile(path, date, (err) => {

        if(err) return console.log(err);

    })
        console.log("Mensaje escrito");

        let result= await fs.promises.readFile(path, 'utf-8')
        console.log(result)
    

    await fs.promises.appendFile(path, "\n Agregando texto")
    result = await fs.promises.readFile(path, 'utf-8')
    console.log(result)
}

asyncTask()


