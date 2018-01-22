var books = {
  "Harry Potter": {
    author: "J.K.Rowling", published: "26 June 1997"
  },
  "The Bible": {
    author: "Jesus", published: "25 December 0"
  }, 
  "Game of Thrones": {
    author: "George RR Martin", published: "31 March 1996"
  }
}

function getBookAuthor(name) {
  //return the author of that book name
  return books[name].author;
}

function getDatePublished(name) {
  return books[name].published;
}



module.exports = {
  getBookAuthor: getBookAuthor,
  getDatePublished: getDatePublished
}
