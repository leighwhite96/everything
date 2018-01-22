const fs = require("fs");

fs.readFile("test.json",function(err,data){
  if(err){
    return console.log(err);
  }
  console.log(JSON.parse(data));
});

//turn into a promise function


function getData(fileName) {
  return new Promise((resolve,reject) => {
    fs.readFile(fileName, (err,data) => {
      if(err) {
        return reject(err);
      }
      resolve(data);
    })
  });
}

var obj = {
  d: "dates"
};

function writeData(fileName) {
  return new Promise((resolve,reject) => {
    fs.writeFile(fileName,JSON.stringify(obj),(err,data) => {
      if(err) {
        return reject(err);
      }
      resolve(data);
    })
  })
}

getData("test.json")
  .then(data => console.log(JSON.parse(data)))
  .catch(err => console.log(err))

writeData("test1.json")
  .then(data => console.log(data))
  .catch(err => console.log(err))
