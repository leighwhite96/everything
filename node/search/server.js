const express = require("express");
const app = express();
const path = require("path");
const formidable = require("express-formidable");
const fs = require("fs");
// const library = require("library.js");


app.use(formidable());
 
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  var name = req.fields.name;
  fs.readFile((path.join(__dirname,'books.json')), function(err,file) {
    if(err){
      res.send("Error");
    }
    var obj = JSON.parse(file);
    res.send(obj[name]);
  });
});

// app.get('/', function(req, res) {
//   console.log(req.fields);
//   var book = req.fields["book"];
//   console.log(book);
//   fs.readFile((path.join(__dirname,"books.json")), function(err,index){
//     if(err) {
//       console.error("error");
//     }
//
//   })});
  // fs.writeFile((path.join(__dirname, "data.json")), JSON.stringify(req.fields), function(error, input) {
  //   if (error) {
  //     console.error("error");
  //   } else {
  //     console.log('book recieved');
  //   }
  // });
  // var book = document.GetElementById("bk").value;
  // res.send(books.book[0]);

app.listen(3000, function() {
  console.log('I am listening on port 3000!');
});
