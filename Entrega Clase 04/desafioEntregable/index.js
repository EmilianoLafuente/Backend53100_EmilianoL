import fs from 'fs'

const PATH = "./DbProducts.json"

class productManager {

    getProducts = async() => {
        const data = await fs.promises.readFile(PATH, 'utf-8')

        return JSON.parse(data)
    }

    addProducts = async(product) => {
        product.id = 0
        const products = await this.getProducts()
        
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log('All fields are required' + " " + title,description,code)
            console.log("entra en primer if");
            return
          }
          
        if(products.find(productFind => productFind.code === product.code )){
            console.log("Product exist" + " " + product.title,product.description,product.code)

            return
        }

        if(products.length === 0){
            product.id  = 1
        }else{
            product.id  = products[products.length-1].id + 1
        
            products.push(product)

            await fs.promises.writeFile(PATH, JSON.stringify(products))

            return product
        }

    }


    getProductById = async(id) => {
        const product = await fs.promises.readFile(PATH, 'utf-8')
        const products = JSON.parse(product)

        return products.find(product => product.id === id);
      }

    deleteProduct = async(id) => {
        const products = JSON.parse(await fs.promises.readFile(PATH, 'utf-8'))

        if (products.find(product => product.id === id) != -1) {
            let productsLessId = products.filter(product => product.id !== id)
                        
            await fs.promises.writeFile(PATH, JSON.stringify(productsLessId))
            console.log(`Producto ${id} eliminado`)
        }else{
            console.log(`Producto ${id} ne encontrado`)}

        return
    }
}

//Testing code

const productsManager = new productManager()

//adding products
// let product =  {
//             title: "PC Intel",
//             description: "PC Intel",
//             price: 699,
//             thumbnail: "PcIntel.img",
//             code: 2,
//             stock: 5   
// }
// await productsManager.addProducts(product)

// let product2 =  {
//     title: "PC Ryzen",
//     description: "PC Ryzen",
//     price: 599,
//     thumbnail: "PcRyzen.img",
//     code: 2,
//     stock: 5   
// }
// await productsManager.addProducts(product2)

//All products
// const products = await productsManager.getProducts()
// console.log("🚀 ~ products:", products)

//Products by id
//const productsById = await productsManager.getProductById(2)
//console.log("🚀 ~ productsById:", productsById)

//Delete by id
//console.log("🚀 ~ products:", productsManager.deleteProduct(3))


// let product2 =  {
//     title: "PC Ryzen whit GPU 4090",
//     description: "PC Ryzen whit GPU 4090",
//     price: 1599,
//     thumbnail: "PcRyzenGPU4094.img",
//     code: 3,
//     stock: 5   
// }
// await productsManager.addProducts(product2)

