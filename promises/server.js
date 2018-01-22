const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"ajax-promise.html"));
})

app.listen(PORT, function() {
  console.log("I am listenin on " + PORT);
})
