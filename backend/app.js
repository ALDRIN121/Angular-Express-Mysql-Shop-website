
const express = require('express');
require('dotenv').config()
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const mysqlCon = require('../backend/db');

mysqlCon.connect((err)=>{
    if(!err){
        console.log("Db is connected");
    }
    else{
        console.log("Db not connnected")
    }
});


app.listen(5000,()=>{
    console.log("running at http://localhost:5000");
});
//User Route
const user = require('../backend/routers/user');
app.use('/api/users',user);
//Product Route
const product = require('../backend/routers/products');
app.use('/api/products',product);