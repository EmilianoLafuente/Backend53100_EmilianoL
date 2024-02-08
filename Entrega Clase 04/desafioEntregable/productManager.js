import fs from 'fs'

class productManager {

    constructor(path){
        this.path = path

        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8')

            this.products =  JSON.parse(data)
        }else{
            this.products = []
            fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf-8')
        }
    }

    saveFile = async() => {
        let data = JSON.stringify(this.products, null, '\t')
        await fs.promises.writeFile(this.path, data, 'utf-8')
        return
    }

    getProducts = async() => {
        return this.products
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
            products.push(product)

            this.saveFile()
            console.log(`Producto ${product.id} agregado`);
            return product
        }else{
            product.id  = products[products.length-1].id + 1
        
            products.push(product)

            this.saveFile(product)
            console.log(`Producto ${product.id} agregado`);
            return product
        }

    }


    getProductById = async(id) => {
        let product = this.products.find(product => product.id === id)
 
        if(product === undefined) {
            console.log("Product dont exist");
        }else{
            return product
        }
      }

    deleteProduct = async(id) => {
        let product = this.products.find(product => product.id === id) 

        if ( product !== undefined) {
            this.products = this.products.filter(product => product.id !== id)
            this.saveFile(this.products)
            console.log(`Producto ${id} eliminado`)
            return 
        }else{
            console.log(`Producto ${id} no encontrado`)}

            return
    }

    updateProduct = async(id, campo) => {
        let productIndex  = this.products.findIndex(product => product.id === id);

        if(productIndex === -1) {
            console.log("Product dont exist");
            return
        }else{
            this.products[productIndex] = { ...this.products[productIndex], ...campo }; //actualiza producto segun posicion 
            this.saveFile()
            
            return console.log(`Producto ${id} modificado`)
        }
    }
}


//Testing
const productsManager = new productManager("./DbProducts2.json")
console.log("🚀 ~ products:", await productsManager.getProducts())




