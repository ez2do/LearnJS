//this code will automatically set name as the global variable
function Person(name){this.name = name};
let ferdinand = Person("Ferdinand");
console.log(name);

class Student{
    constructor(name){
        this.name = name;
    }
}

let me = Student('Tuan Anh');
console.log(me.name);