const express = require("express");
const { default: mongoose } = require("mongoose");

const Products = express.Router();
const productSchema = new mongoose.Schema({
    'name': String,
    'quantity': String,
    'price': Number,
    'manufacturer_date': String,
    'exp_date': String,
    'reviews': Array,
    'services' : Object,
    'img_url' : Array
});
const productsCollection = new mongoose.model("Products",productSchema);

// get all the products
Products.get('/', async (req, res)=>{
    try{
        const data = await productsCollection.find()
        res.json(data);
    }catch(error){
        console.log(error)
    }
});

//get a products by id
Products.get('/:id', async (req, res)=>{
    try{
        const singleData = await productsCollection.find({_id: req.params.id})
        res.json(singleData);
    }catch(error){
        console.log(error);
    }
});

//add a product
Products.post('/add-product', async (req, res)=>{

});

//update a product by id
Products.patch('/update', async (req, res)=>{

});

//delete a product by id
Products.delete('/delete', async (req, res)=>{

});


module.exports = Products;