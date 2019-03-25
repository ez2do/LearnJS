//create server, response with a piece of html at port 8000
const {createServer} = require("http");
let server = createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html'});
    response.write(`
    <h1>Hello</h1>
    <p>You request URL <code>${request.url}</code></p>
    `);
    response.end();
}).listen(8000);
console.log("Listening to port 8000");