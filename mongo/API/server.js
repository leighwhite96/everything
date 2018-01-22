const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/school', {useMongoClient: true});
//blueprint - everything that comes in will have a name and a string

const episodeSchema = {
  id: Number,
  url: String,
  name: String,
  season: Number,
  number: Number,
  airdate: String,
  airtime: String,
  airstamp: String,
  runtime: Number,
  image: {medium: String, original: String}, //could have said Object
  summary: String,
  _links: {self: {href: String}}
}
//constructor -- theres a mongoose object with a model method, a string movie and the schema - creates an object guided by the schema
var Episode = mongoose.model('Movies', episodeSchema);

app.get('/', function(req, res) {
  res.send("This is working! :)");
})
//could set up query parameters... /epsiodes?season=5 THIS IS REST API CONVENTION
app.get('/seasons/all', function(req, res) {
  Episode.find(function(err, episodes) {
    if (err) {
      res.send("Error happened here");
    }
    res.send(episodes);
  });
})

app.get('/seasons/:id', function(req, res) {
  const id = req.params.id;
  if(id > 7) {
    return res.send("That season doesn't exist..yet");
  } else {
  Episode.find({"season": id}, function(err, episodes) {     //gives us stuff from the database - if theres an error - error, if not send all the movies
    if (err) {
      res.send("Error happened here");
    }
    res.send(episodes);
  });
}})
/* const query = req.query; Episode.find(query, function(){}) */
app.listen(PORT, function() {
  console.log("I am listening on " + PORT);
})
