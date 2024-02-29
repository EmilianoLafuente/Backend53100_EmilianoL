import fs from 'fs'

export default class cartManager {

    constructor(path) {
        this.path = path

        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8')

            this.carts = JSON.parse(data)
        } else {
            this.carts = []
            fs.writeFileSync(this.path, JSON.stringify(this.carts), 'utf-8')
        }
    }

    saveFile = async () => {
        let data = JSON.stringify(this.carts, null, '\t')
        await fs.promises.writeFile(this.path, data, 'utf-8')
        return
    }

    getCarts = async () => {
        let carts = await this.carts
        return carts
    }

    createCartId = async () => {
        let carts = await  this.getCarts()
        if (carts.length > 0) {
            const nuevoId = carts[carts.length - 1].id + 1
            
            return nuevoId
        }else{
            return 1
        }
    }

    addCart = async () => {
        const carts = await  this.getCarts()
        const cartId = await this.createCartId()

        const newCart = {
            id: cartId,
            products: []
        }

        carts.push(newCart);
        this.saveFile()

        return `Cart ${cartId} added`
    }

    addProductToCart = async (cartId,productId) => {
        const carts = await  this.getCarts()
        const cart = await carts.find(cart => cart.id === cartId);

        if (!cart) {
            return `Cart not found`
        }

        const existingProduct = cart.products.find(item => item.product === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.products.push({ product: productId, quantity: 1 });
        }
        console.log(cart);

        carts.push(cart);
        this.saveFile()

        return `Product ${productId} added to cart ${cartId}`
    }

    getCartById = async(id) => {
        console.log(id);
        let cart = this.carts.find(cart => cart.id === id)
        console.log(cart);
        if(cart === undefined) {
            return {error:"Cart dont exist" } 

        }else{
            return cart
        }
      }

}