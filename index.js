
//Dependencies
const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');
const productsHandler = require('./ProductsHander/ProductsHandler')


//express initialization
const app = express();
app.use(express.json());

//GET FROM ENV
const port = process.env.PORT || 5000;
const mongodb_url = process.env.MONGO_URL


//database connection with mongoose
mongoose.connect(mongodb_url)
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("error:", err);
})

app.use("/",productsHandler);

//Custom errorHandler
function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }else{
        res.status(500).json({error: err})
    }
}

//listen the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})