
const fs = require ('fs');
const path = './baseDeDatosEjemploDeFs.txt'

fs.writeFile(path, "mensaje" + "\n", (err) => {

    if (err) return console.log("Write" + err)

    fs.readFile(path, 'utf-8', (err, result) => {

        if (err) return console.log("read" + err)

        console.log(result)

        fs.appendFile(path, "Agregando texto", (err) => {

            if (err) return console.log("append" + err)

            fs.readFile(path, 'utf-8', (err, result) => {

                if(err) return console.log(err)
                console.log(result)
            })
        })
    })
})



