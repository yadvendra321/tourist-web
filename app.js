const express=require("express");
const app=express();
const path=require("path");
const fs=require("fs");
const e = require("express");
const bodyparser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ContactDance',{useNewUrlParser:true});

const ContactSchema = new mongoose.Schema({
    name: String
    

  });
  const Contact = mongoose.model('Contact', ContactSchema);


const port =80;
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set("views",path.join(__dirname,'views'))
app.set('view engine' ,'html');

app.set("views",path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    
    const params={ }
    res.status(200).render('tourist.html',params)
});






app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`)
});