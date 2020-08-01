var http = require('http')

http.createServer(function (req, res) {
  res.write("Ok")
  res.end();
}).listen(8080);