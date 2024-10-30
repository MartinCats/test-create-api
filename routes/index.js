const express = require('express');
const router = express.Router();
const productRouter = require('./product.router');


router.get('/', (req, res) => {
    res.send(`
        <h1>Testing API</h1>
        <p>This is the home page. You can access the following:</p>
        <ul>
            <li><a href="/getall">All API</a></li>
            <li><a href="/about">About API</a></li>
        </ul>
    `);
});


router.get('/get', (req, res) => {
    res.send('<h1>Get Request</h1><p>What do you want to get?</p>');
});


router.get('/about', (req, res) => {
    res.send(`
        <h2>API Endpoints</h2>
        <ul>
            <li>
                <strong>GET</strong> <code>/getall</code><br />
                Get all products in the database.
            </li>
            <li>
                <strong>GET</strong> <code>/get/:product_id</code><br />
                Get a specific product by ID (e.g., <code>/get/aa1111</code>, <code>/get/bc2222</code>).
            </li>
            <li>
                <strong>POST</strong> <code>/create</code><br />
                Create a new product in the database. Required fields:
                <ul>
                    <li><code>name</code>: Product name</li>
                    <li><code>price</code>: Product price</li>
                    <li><code>description</code>: Product description</li>
                </ul>
            </li>
            <li>
                <strong>PUT</strong> <code>/update/:product_id</code><br />
                Update or edit a product in the database.
            </li>
            <li>
                <strong>DELETE</strong> <code>/delete/:product_id</code><br />
                Delete a product from the database.
            </li>
        </ul>
    `);
});


productRouter(router);

module.exports = router;
