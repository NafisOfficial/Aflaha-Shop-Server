const express = require("express");
const { default: mongoose } = require("mongoose");

const products = express.Router();
const productsCollection = new mongoose.model("Products",{});

// get all the products
products.get('/', async (req, res)=>{
    productsCollection.find()
});

//get a products by id
products.get('/', async (req, res)=>{

});

//add a product
products.post('/add-product', async (req, res)=>{

});

//update a product by id
products.patch('/update', async (req, res)=>{

});

//delete a product by id
products.delete('/delete', async (req, res)=>{

});


module.exports = products;