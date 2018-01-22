const express = require("express");
const app = express();
const PORT = 3000;
const formidable = require("express-formidable");
const fs = require("fs");

app.use(formidable());

app.get('/', function(req,res){
  res.send("This is working :)");
})

app.post('/',function(req,res){
  console.log(req.fields);
  res.send(req.fields);
})

app.listen(PORT,function(){
  console.log("I am listening on port: " + PORT);
})
