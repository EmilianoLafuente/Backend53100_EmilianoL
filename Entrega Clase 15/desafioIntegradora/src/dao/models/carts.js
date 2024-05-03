import mongoose from 'mongoose';
const { Schema } = mongoose;

const collection = "carts"

const schema = new Schema({
    id: {
        type: Number,
        unique: true

    },
    products: {
        type: [], 
        required: true,
        default: []
    }

})


schema.pre('save', async function(next) {
    try {
        if (this.isNew) { //Verifica si el documento es nuevo
            const latestCart = await this.constructor.findOne({}, {}, { sort: { 'id': -1 } })
            if (latestCart && latestCart.id) {
                this.id = latestCart.id + 1;
            } else {
                this.id = 1
            }
        }
        next();
    } catch (error) {
        next(error);
    }
});


const cartsModel = mongoose.model(collection, schema)

export default cartsModel