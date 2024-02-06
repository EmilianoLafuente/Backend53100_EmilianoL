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
        const products = JSON.parse(await fs.promises.readFile(PATH, 'utf-8'))
        let product = products.find(product => product.id === id)
 
        if(product === undefined) {
            console.log("Product dont exist");
        }else{
            return product
        }
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

    updateProduct = async(id, campo) => {

        const products = JSON.parse(await fs.promises.readFile(PATH, 'utf-8'))
        let product = products.find(product => product.id === id);

        if(product === undefined) {
            console.log("Product dont exist");
        }else{

            let newProduct = {...product, ...campo}

            products.push(newProduct)
    
            await fs.promises.writeFile(PATH, JSON.stringify(products))
    
            return newProduct
        }
    }
}


