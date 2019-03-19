const fs = require('fs');

//make directory
fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err);
    else{
        console.log('Folder created successfully');
        fs.writeFile('./tutorial/example.txt', 'hello babe', (err) => {
            if(err)
                console.log(err);
            else
                console.log('Successfully create file');
        });

    }
});

//note: if rmdir an unempty => error
//delete files in the directory first, then delete the dir
fs.readdir('cages', (err, files) => {
    if(err)
        console.log(err + ' readir');
    else{
        for(let file of files){
            fs.unlink('./cages/' + file, (err) => {
                if(err)
                    console.log(err + ' delete file');
                else
                    console.log(`successfully deleted ${file}`);
            })
        }
    }
});

fs.rmdir('cages', (err) => {
    if(err)
        console.log(err + ' of rmdir cages');
});

fs.mkdir('cages', (err) => {
    if(err)
        console.log(err);
    else{
        console.log("Create cages folder");
        fs.writeFile('./cages/dog.txt', 'gogo', (err) => {
            if(err)
                console.log(err + ' dog file');
        });
        fs.writeFile('./cages/cat.txt', 'meomeo', (err) => {
            if(err)
                console.log(err + ' cat file');
        });
    }
});

//asynchronous also occurs here when we not completely delete cat.txt and dog.txt 
//but the make file command work so it trigger the error


