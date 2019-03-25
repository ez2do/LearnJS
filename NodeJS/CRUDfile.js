const fs = require('fs');
//create file
//filename, content, callback function
fs.writeFile('example.txt', "there is text in here",(error) => {
    if(error)
        console.log(error);
    else{
        console.log('File successfully created');
        //file name, encoding type, callback function
        fs.readFile('example.txt', 'utf8', (error, file) => {
            if(error)
                console.log(error);
            else
                console.log(file);
        })
    }
});

//rename a file
fs.rename('example.txt', 'example2.txt', (error) => {
    if(error)
        console.log(error);
    else
        console.log("Rename successfully");
});

//weird output
//rename occur before file was created

//append content to file
fs.appendFile('example2.txt', '\nAnd more new', (err) => {
    if(err)
        console.log(err);
    else
        console.log('Successfully appended data to file');
});


//delete a file
fs.unlink('example2.txt', (err) => {
    if(err)
        console.log(err);
    else
        console.log('Successfully deleted the file');
});

