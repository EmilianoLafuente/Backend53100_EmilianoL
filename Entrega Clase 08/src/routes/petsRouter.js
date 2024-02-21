import  Router  from "express";
const petsRouter = Router()

let pets = []

petsRouter.get('/', (req, res) => {
    res.json({pets})

})


petsRouter.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)
    
    res.json({status: "succes"})

})

export default petsRouter