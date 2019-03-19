//how to read line in node 
const readline = require('readline');

//process is a global object
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

//random number in range [1, 10]
let n1 = Math.floor((Math.random() * 10) + 1);
let n2 = Math.floor((Math.random() * 10) + 1);
let ans = n1 + n2;

//argv1: a string, argv2: a function
rl.question(`What is ${n1} + ${n2}?\n`, (userInput) => {
    if(userInput.trim() == ans){
        rl.emit('trueAnswerResponse');
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect answer! Try again.\n');
        rl.prompt();
        //line event occur when the user hit enter
        rl.on('line', () => {
            if(userInput.trim() == ans){
                rl.emit('trueAnswerResponse');
                rl.close();
            }
            else{
                rl.setPrompt('Incorrect answer. Try again!\n');
                rl.prompt();
            }
        })
    }
});

//rl also a EventEmitter obj
rl.on('trueAnswerResponse', () => {
    console.log('Correct!!!');
})