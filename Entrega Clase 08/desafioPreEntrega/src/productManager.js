import fs from 'fs'

export default class productManager {

    constructor(path) {
        this.path = path

        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8')

            this.products = JSON.parse(data)
        } else {
            this.products = []
            fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf-8')
        }
    }

    saveFile = async () => {
        let data = JSON.stringify(this.products, null, '\t')
        await fs.promises.writeFile(this.path, data, 'utf-8')
        return
    }

    getProducts = async () => {
        let products = await this.products
        return products
    }

    addProducts = async (product) => {
        console.log("entro a add product");
        product.id = 0
        const products = await this.getProducts()
        product.status = true
        product.thumbnails = []
          
        if (!product.title || !product.description || !product.code || !product.price || !product.status || !product.stock || !product.category) {
            console.log("Fields title, description, code, price, status, stock, and category are required.")
            return {error: "Fields title, description, code, price, status, stock, and category are required."} 
        }

        if (products.find(productFind => productFind.code === product.code)) {
            console.log("entra en primer find");
            return {error:"Product exist" + " " + product.title + " " + product.description + " " + product.code} 

        }

        if (products.length === 0) {
            product.id = 1
            products.push(product)

            this.saveFile()
            console.log(`Product ${product.id} added`);
            return product
        } else {
            product.id = products[products.length - 1].id + 1

            products.push(product)
            console.log("🚀 ~ productManager ~ addProducts= ~ product:", product)
            
            this.saveFile(product)
            console.log(`Producto ${product.id} agregado`);
            return product
        }

    }

    getProductById = async(id) => {
        let product = this.products.find(product => product.id === id)
 
        if(product === undefined) {
            return {error:"Product dont exist" } 

        }else{
            return product
        }
      }

    deleteProduct = async (id) => {
        let product = await this.products.find(product => product.id === id)

        if (product) {
            this.products = await this.products.filter(product => product.id !== id)

            await this.saveFile()
            console.log(`Producto ${id} eliminado`)
            return
        } else {
            console.log(`Producto ${id} no encontrado`)
        }
    }

    updateProduct = async (id, campo) => {
        let productIndex = await this.products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            console.log("Product dont exist");
            return
        } else {
            this.products[productIndex] = await { ...this.products[productIndex], ...campo }; //actualiza producto segun posicion 
            await this.saveFile()

            return console.log(`Producto ${id} modificado`)
        }
    }
}