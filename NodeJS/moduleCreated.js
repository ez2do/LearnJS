const sum = (s1, s2) => s1 + s2;
const PI = 3.14;
class myObj{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log('Obj created');
    }

    get info(){
        console.log(`I'm ${this.name}, age of ${this.age}`);
    }
}

//export, that other files can access
module.exports = {sum: sum, PI: PI, myObj: myObj}