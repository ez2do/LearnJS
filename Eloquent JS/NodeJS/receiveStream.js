const {request} = require('http');
const {createServer} = require('http');

let server = createServer(request({
    hostname: 'localhost',
    method: 'POST',
    port: 8000
}, response => {
    response.on("data", chunk => {
        process.stdout.write(chunk.toString());
    }).end('Hello server');
}).listen(8001)
