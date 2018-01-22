const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true }); //connecting us to our server (instead of http its mondodb)

movieSchema = {
  name: String
}
//movie constructor. when you want to create a new movie you use this mongoose model which means it gets saved in the DB.
var Movie = mongoose.model('Movie', movieSchema);

var movie = new Movie({ name: 'Zildjian' });

movie.save(function (err, doc) {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
