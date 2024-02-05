import fs from 'fs'

const PATH = "./DbProducts.json"

class productManager {

    getProducts = async() => {

        const data = await fs.promises.readFile(PATH, 'utf-8')
        const products = JSON.parse(data)

        return products
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


    // getProductById = async(id) => {
    //     return products.find(product => product.id === id);
    //   }

}

//Testing del codigo

const productsManager = new productManager()
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

const products = await productsManager.getProducts()
console.log("🚀 ~ products:", products)





//await productManager.addProducts("pc","pc",100,"asd1.jpg",1,5)

// const producto2 = new addProducts("pc2","pc2",100,"asd2.jpg",2,5)
// const producto3 = new addProducts("pc3","pc3",100,"asd3.jpg",1,5)
// const producto4 = new addProducts("pc4","pc4",100,"asd4.jpg",4,5)
// const producto5 = new addProducts("pc4","pc4",100,"",4,5)

//console.log(productManager.getProducts);
//console.log(getProductById(2));



//metodo getProducts desafio
// const getProducts = () => (products)

//metodo addProducts desafio
// function addProducts (title, description, price, thumbnail, code, stock) {

//     if (!title || !description || !price || !thumbnail || !code || !stock) {
//         console.log('All fields are required' + " " + title,description,code)

//         return
//       }

//     if(products.find(product => product.code === code)){
//         console.log("Not found" + " " + title,description,code)

//         return
//     }else{
//         const product = {
//             id: addId(),
//             title: title,
//             description: description,
//             price: price,
//             thumbnail: thumbnail,
//             code: code,
//             stock: stock
//         }
//         products.push(product)

//         return product
//     }
// }

// function addId () {
//     if(products.length === 0){
//         id = 1
//     }else{
//         id = products[products.length-1].id + 1
//     }

//     return id
// }

//metodo getProductById desafio
// function getProductById(id) {
//     return products.find(product => product.id === id);
//   }






