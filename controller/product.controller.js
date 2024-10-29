const db = require('../models/products')
const rg = require('../services/function')

exports.create = async(req,res) =>{
    try {
        const { name, price, description } = req.body

        const genLetter = rg.randomLetterGen;
        const genNum = rg.randomNumGen;
    
        const checkUniqueId = async()=> {
            let isUnique = false;
            let newId;

            while(!isUnique){
                newId = `${genLetter()}${genNum()}`;

                const exists = await db.findOne({ id: newId });
                if(!exists){
                    isUnique = true;
                }
            }
            return newId;
        }

        const newId = await checkUniqueId();

        const create = new db({
            id:newId,
            name: name || 0,
            price: price,
            description: `testing call ${name} and ${description}`
        })
        const result = await create.save();
        res.status(200).json(result);
        //res.json({count: create})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getall = async(req, res)=>{
    try {
        const result = await db.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.id = async(req, res)=>{
    try {
        const id = req.params.id;
        const result = await db.findOne({ id: id });
        if(result === null){
            return res.status(404).json('product not found');
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async(req, res)=>{
    try {
        const id = req.params.id;
        const find = await db.findOne({ id: id});
        if(find === null){
            return res.status(404).json('product not found');
        }

        const {name, price, description} = req.body;
        const update = {
            name: name,
            price: price,
            description: description
        }
        const result = await db.findOneAndUpdate({id:id}, {$set: update}, {new: true});
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async(req, res)=>{
    try {
        const id = req.params.id;
        const find = await db.findOne({ id: id});
        if(find === null){
            return res.status(404).json('product not found');
        }
        const result = await db.findOneAndDelete({id:id});
        res.status(201).json({ message: `${id} was deleted`})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}