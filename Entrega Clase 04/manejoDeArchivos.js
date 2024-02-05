//persistencia de archivos | nodejs: fs (File System, modulo nativo)
//JSON | Java Script Object Notation

const fs = require ('fs');
const path = './baseDeDatos.txt'

fs.writeFileSync(path, "=> Buenas del write") //sobrescribe completamente el archivo, en caso de no existir lo crea

fs.appendFileSync(path, " => Buenas del append") //añade informacion al archivo

let readFile = fs.readFileSync(path, 'utf-8') //lee archivos con formato indicado
console.log("🚀 ~ readFile:", readFile)

fs.unlink(path, () => console.log(`Archivo ${path} eliminado`)) //elimna archivos

