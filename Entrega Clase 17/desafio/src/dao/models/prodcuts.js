import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
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
        required: true,
        min: 0
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

//Paginate
schema.plugin(mongoosePaginate)

const productsModel = mongoose.model(collection, schema)

export default productsModel
