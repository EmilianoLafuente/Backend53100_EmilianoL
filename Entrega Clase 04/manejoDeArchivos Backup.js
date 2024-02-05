//persistencia de archivos | nodejs: fs (File System, modulo nativo)
//JSON | Java Script Object Notation

const fs = require ('fs');
const path = './baseDeDatos.txt'

fs.writeFileSync(path, "=> Buenas del write") //sobrescribe

fs.appendFileSync(path, " => Buenas del append")

let readFile = fs.readFileSync(path, 'utf-8')
console.log("🚀 ~ readFile:", readFile)

fs.unlinkSync(path, () => `Archivo eliminado`)

