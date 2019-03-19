console.log("Hello");
//console.log(process.argv);
const file_system = require('fs');
/* console.log(file_system); */

/* Import module from a file called moduleCreated from the same directory */
const moduleImport = require('./moduleCreated');
console.log(moduleImport);
moduleImport.sum(1,1);
console.log(moduleImport.PI);
let me = new moduleImport.myObj('Tuan Anh', 20);
me.info