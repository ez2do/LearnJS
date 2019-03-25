const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.write('Hello');
    else if(req.url == '/goodbye')
        res.write('Goodbye');
    else
        res.write('Random');
    res.end();
});
server.listen('4004');
console.log('Listening on port 4004');
