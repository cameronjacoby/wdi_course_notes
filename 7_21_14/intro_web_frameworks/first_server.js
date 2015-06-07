var http = require('http') {

  function doStuff(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }
}

var server = http.createServer(doStuff);
server.listen(3000);