import mongoose from "mongoose"

const stringConnection = 'mongodb://localhost/ecommerce'

mongoose.connect(stringConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true

})

    .then(db => console.log('Database Connected'))
    .catch(err => console.log(err))

    //export default 