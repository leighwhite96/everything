const express = require("express");
const app = express();
const path = require("path");
const formidable = require("express-formidable");
const fs = require("fs");

app.use(formidable());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/', function(req, res) {
  console.log('post to /');
  console.log(req.fields);
  fs.writeFile((path.join(__dirname, "data.json")), JSON.stringify(req.fields), function(error, input) {
    if (error) {
      console.error("error");
    } else {
      console.log('files saved');
    }
  });
  res.send("Thanks!");
});
app.listen(3000, function() {
  console.log('I am listening on port 3000!');
});
