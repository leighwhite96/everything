const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;
const path = require("path");

// data in a file
//read out of a file into a data object: fs.readFile()
//need user info:
//get the right response from data object

app.get('/', function(req,res){
  res.send("Home :)");
});

app.get('/book',function(req,res){
  res.sendFile(path.join(__dirname,'books.json'));

}); 
app.get('/book/:bookname',function(req,res){
  const bookname = req.params.bookname;
  fs.readFile(path.join(__dirname,'books.json'), function(error,file){
    if(error) {
      console.log(error);
      return res.send("Nope!");
    }
    let data = JSON.parse(file);
    const answer = data[bookname];
    if(!answer){
      return res.send("No book of that name :( ");
    }
    res.send(answer);
  });
});

app.listen(PORT, function(){
  console.log("Listening on port " + PORT);
});
