var http = require('http');
var server = http.createServer();

server.listen(3000, '127.0.0.1');
console.log("server is listening on 127.0.0.1:3000");

module.exports = server;