const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
//require("dotenv").config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req,res)=>{
    res.send("Hello from Node API UPDATED>>>>");
});

//routes
app.use("/api/products", productRoute);

mongoose.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("Connection failed");
});