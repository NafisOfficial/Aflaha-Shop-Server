
//Dependencies
const express = require('express');
cors = require('cors')
require('dotenv').config()
const { default: mongoose } = require('mongoose');
const productsHandler = require('./ProductsHander/ProductsHandler')


//express initialization
const app = express();
app.use(cors());
app.use(express.json());

//GET FROM ENV
const port = process.env.PORT || 5000;
const mongo_user = process.env.MONGODB_USER
const mongo_password = process.env.MONGODB_PASSWORD


//database connection with mongoose
mongoose.connect(`mongodb+srv://${mongo_user}:${mongo_password}@sell-services.v7pbq3k.mongodb.net/Aflaha-shop?retryWrites=true&w=majority&appName=Sell-Services`)
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("error:", err);
})

app.use("/",productsHandler);

//Custom errorHandler
// function errorHandler(err,req,res,next){
//     if(res.headersSent){
//         return next(err)
//     }else{
//         res.status(500).json({error: err})
//     }
// }

//listen the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})