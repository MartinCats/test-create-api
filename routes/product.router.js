const products = require('../controller/product.controller');

module.exports = (router)=>{
    router.get('/getall', products.getall);
    router.get('/get/:id', products.id);
    router.post('/create', products.create);
    router.put('/update/:id', products.update);
    router.delete('/delete/:id', products.delete);
};