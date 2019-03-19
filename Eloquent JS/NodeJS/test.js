var http = require("http");
http.createServer(function (request, response){
    response.writeHead(200, {'Content-type':'text/html'});
    for(let i = 0; i < 10; i++){
        response.write('Hello');
    }
    response.end();
}).listen(8080);
console.log("Server is running");