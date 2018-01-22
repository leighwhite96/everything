const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.get('/cat', function (req, res) {
  res.send('<h1>meow</h1>');
});

app.get('/dog', function (req,res) {
  res.send('<h1>woof</h1>');
});

app.get('/cat/dog', function (req,res) {
  res.send('<h1>meoof</h1>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
