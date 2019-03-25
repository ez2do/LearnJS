const fs = require('fs');
const readStream = fs.createReadStream('./example2.txt', 'utf8');
const writeStream = fs.createWriteStream('./example3.txt');

const zlib = require('zlib'); //module for compressing file
const gzip = zlib.createGzip();
const compressedFile = fs.createWriteStream('./compressedFile.txt.gz');

//readStream is a EventEmitter, it load the file piece by pice
//so it don't have to wait to load the full file
//it make the power of the stream
readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});

//the simpler way
readStream.pipe(writeStream);

//compress file
readStream.pipe(gzip).pipe(compressedFile);

//decompress file
const gunzip = zlib.createGunzip();
const decompressedFile = fs.createWriteStream('decompressed.txt');
const input = fs.createReadStream('./compressedFile.txt.gz');
input.pipe(gunzip).pipe(decompressedFile);