var http = require("http");
var fileSystem = require("fs");
const PORT = 3000;

function handler(request, response) {
  var url = request.url;
  //console.log(request.url);

  if (url.indexOf('/cat') > -1) { //they want something different to our homepage '/' is home
    response.writeHead(200, {"Content-Type": "text/html"});
    return response.end('<img src="http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"/>')
  }

  fileSystem.readFile(__dirname + '/index.html', function(error, index) { //could do if(error) {} because if its truthy it's defined/got a value
  /*  if (error) {
      console.error("error"); //if(!file) {} would check that there's something in the fie
      response.write("There was an error");
    } else if (!file) {
      console.error("error");
    } else {*/
      response.write(index);
      return response.end();
  });

} 

http.createServer(handler).listen(PORT);

console.log("node http server listening on http://localhost:" + PORT);
