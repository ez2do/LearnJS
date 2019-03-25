const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    //html file
    /* const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'content-type': 'text/html'}); */

    //json file
    /* const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'content-type': 'application/json'}); */

    //image
    const readStream = fs.createReadStream('./static/images/as.jpg');
    res.writeHead(200, {'content-type': 'image/jpg'});
    readStream.pipe(res);
}).listen('8001');
console.log("Listening on port 8001");