var http = require('http');

http.createServer(function (req, res) {
  res.write("Nice work Bro!");
  res.end();
}).listen(8080);
