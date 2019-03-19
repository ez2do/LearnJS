//stream in http, on(like addEventListener) to 2 event: 
//"data" for receiving data, "end" for the end of the stream
const {createServer} = require('http');

const {request} = require('http');
request({
    hostname: 'localhost',
    method: 'POST',
    port: 8000
}), response => {
    response.on("data", chunk => {
        process.stdout.write(chunk.toString());
        console.log('haha');
    }).end('Hello server');
}

let server = createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'});
    request.on("data", chunk => {
        console.log('dmm');
        response.write(chunk.toString().toUpperCase());
    });
    request.on("end", () => {
        response.end();
    })
}).listen(8000);