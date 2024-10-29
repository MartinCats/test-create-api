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
        'URL/getall' <br/> 
        method = GET <br/> 
        for get all product in database, <br/ >
        <br/> 

        'URL/get/<product_id>' <br/> 
        method = GET <br/> 
        for get only one product in database (example 'URL/get/aa1111','URL/get/bc2222') <br/ >
        <br/> 

        'URL/create' <br/>
        method = POST <br/> 
        for create new product to database <br/> 
        form requirement <br/>
        *input name = name <br/>
        *input name = price <br/>
        *input name = description
        <br/> 

        'URL/update/<product_id>' <br/> 
        method = PUT <br/> 
        for update or edit product in database <br/> 
        <br/> 

        'URL/delete' <br/> 
        method = DELETE <br/> 
        for delete product in database <br/> 
        `)
});

productRouter(router);

module.exports = router;