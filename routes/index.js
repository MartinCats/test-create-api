const router = require('express').Router();
const productRouter = require('./product.router');

router.get('/', (req,res)=>{
    res.send('testing api')
});

router.get('/get', (req,res)=>{
    res.send('what your to get')
});

router.get('/about', (req,res)=>{
    res.send(`
        '/getall' for get all product in database, <br/ >
        '/get/<product_id>' for get only one product in database (example '/get/aa1111','/get/bc2222') <br/ >
        '/product/create' for create new product to database <br/> 
        form requirement <br/>
        *input name = name <br/>
        *input name = price <br/>
        *input name = description
        `)
});

productRouter(router);

module.exports = router;