//create eventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//listen to the event called 'tutorial'
eventEmitter.on('tutorial', (n1, n2) => {
    console.log('Event tutorial occured here');
    console.log('Sum: ' + (n1 + n2));
});

//emit an tutorial event
eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let me = new Person('Tuan Anh'); //obj me also an EventEmitter obj
let ronaldo = new Person('Ronaldo');
me.on('name', () => {
    console.log('My name is ' + me.name);
});
ronaldo.on('name', () => {
    console.log('Ro di la ' + ronaldo.name);
})

me.emit('name');
ronaldo.emit('name');