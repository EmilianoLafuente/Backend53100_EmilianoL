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

    createId = async () => {
        let products = await this.products
        if (products.length > 0) {
            const nuevoId = products[products.length - 1].id + 1
            return nuevoId

        }else{
            return 1
        }
    }
    
    getProducts = async () => {
        let products = await this.products
        return products
    }

    addProducts = async (product) => {
        product.id = 0
        const products = await this.getProducts()
        product.status = true

        if (!product.title || !product.description || !product.code || !product.price || !product.status || !product.stock || !product.category) {
            return { error: "Fields title, description, code, price, status, stock, and category are required." }
        }
        if (typeof product.price !== 'number' || typeof product.stock !== 'number') {
            return { error: "Price and stock must be numbers." }
        }
        if (products.find(productFind => productFind.code === product.code)) {
            return { error: "Product exist" + " " + product.title + " " + product.description + " " + product.code }
        }
        if (products.length === 0) {
            product.id = 1
            products.push(product)

            this.saveFile()
            console.log(`Product ${product.id} added`);
            return product
        } else {
            product.id = await this.createId()

            products.push(product)
            this.saveFile()
            console.log(`Product ${product.id} added`);
            return `Product ${product.id} added`
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
            return `Product ${id} deleted`
        } else {
            return `Product ${id} not found`
        }
    }

    updateProduct = async (id, campo) => {
        let productIndex = await this.products.findIndex(product => product.id === id)

        if (productIndex === -1) {
            return `Product ${id} dont exist`
        }

        if (!campo.hasOwnProperty('id') || campo.id === id) {  //hasOwnProperty comprueba si tiene la propiedad especifica
            
            const updatedProduct = await { ...this.products[productIndex], ...campo, id: this.products[productIndex].id } //crea una copia del producto manteniendo el id
            this.products[productIndex] = updatedProduct
            await this.saveFile()
            return `Product ${id} modified`
            
        }else {
            return `You cannot modify product IDs, ID:${id}`

        }
    }
}