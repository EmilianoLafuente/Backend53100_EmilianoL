let products = []
let id = 0

//metodo getProducts desafio
const getProducts = () => (products)

//metodo addProducts desafio
function addProducts (title, description, price, thumbnail, code, stock) {

    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('All fields are required' + " " + title,description,code)

        return
      }

    if(products.find(product => product.code === code)){
        console.log("Not found" + " " + title,description,code)

        return
    }else{
        const product = {
            id: addId(),
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }
        products.push(product)

        return product
    }
}

function addId () {
    if(products.length === 0){
        id = 1
    }else{
        id = products[products.length-1].id + 1
    }

    return id
}

//metodo getProductById desafio
function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
//Testing del codigo
const producto1 = new addProducts("pc","pc",100,"asd1.jpg",1,5)
const producto2 = new addProducts("pc2","pc2",100,"asd2.jpg",2,5)
const producto3 = new addProducts("pc3","pc3",100,"asd3.jpg",1,5)
const producto4 = new addProducts("pc4","pc4",100,"asd4.jpg",4,5)
const producto5 = new addProducts("pc4","pc4",100,"",4,5)
  
console.log(getProducts());
console.log(getProductById(2));