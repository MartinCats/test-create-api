const mongoose = require('mongoose');

const URL = process.env.DB_URL

mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err=> console.error(`Database connected error`, err))

const productSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    description:String
});

const productData = mongoose.model('product',productSchema);

module.exports = productData;