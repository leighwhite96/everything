// comment





const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/school', {useMongoClient: true});


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

var Episode = mongoose.model('Movies', episodeSchema);

app.get('/', function(req, res) {
  res.send("This is working! :)");
})

app.get('/seasons/all', function(req, res) {
  Episode.find(function(err, episodes) {
    if (err) {
      res.send("Error happened here");
    }
    res.send(episodes);
  });
})
/**
 * @param  {object} req [description]
 * @param  {object} res [description]
 * @return {object}     [description]
 */
app.get('/seasons/:id', function(req, res) {
  const id = req.params.id;
  if(id > 7) {
    return res.send("That season doesn't exist..yet");
  } else {
  Episode.find({"season": id}, function(err, episodes) {
    if (err) {
      res.send("Error happened here");
    }
    res.send(episodes);
  });
}}
app.listen(PORT, function() {
  console.log("I am listening on " + PORT);
})
