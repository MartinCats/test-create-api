const mongoose = require('mongoose');

const URL = process.env.DB_URL

mongoose.connect(URL).catch((err)=> console.error(`cannot connect server`))

const productSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    description:String
});

const productData = mongoose.model('product',productSchema);

module.exports = productData;