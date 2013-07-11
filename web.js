var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  var buffer = new Buffer(40);
  buffer = fs.readFileSync('index.html');
  var string = "";
  string = buffer.toString();
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
