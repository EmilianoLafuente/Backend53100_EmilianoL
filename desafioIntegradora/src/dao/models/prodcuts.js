import mongoose from 'mongoose';
const { Schema } = mongoose;

const collection = "products"

const schema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    thumbnails: {
        type: String,
        required: true,
        
    }

})

const productsModel = mongoose.model(collection, schema)

export default productsModel
