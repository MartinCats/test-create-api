require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000 ;
const cors = require('cors')
const db = require('./models/products')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req,res)=>{
    res.send('testing api')
});

app.get('/getall', async(req,res)=>{
    try {
        const result = await db.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

app.get('/get/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const result = await db.findOne({ id: id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(err.message);
    }
})

app.post('/test/create', async(req,res)=>{
    try {
        const { name, price, description } = req.body
        const id = await db.countDocuments()+1;
        const pad =(num)=> String(num).padStart(3,'0');
        const newId = `P-${pad(id)}`

        const create = new db({
            id:newId,
            name: name,
            price: price,
            description: `testing call ${name} and ${description}`
        })
        const result = await create.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

app.listen(port, () => {
    console.log('api test server STARTO');
})