let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = arr.reduce((acc, cur) => acc + cur);
console.log(sum);

let newArray = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(newArray);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countName = names.reduce((allNames, curName) => {
    if(curName in allNames){
        allNames[curName]++;
    }
    else{
        allNames[curName] = 1;
    }
    return allNames;
}, {});

console.log(countName);

var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

function GroupBy(objArr, property){
    return objArr.reduce((acc, obj) => {
        var key = obj[property];
        if(!acc[key]){
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

var arrangePeople = GroupBy(people, 'age');
console.log(arrangePeople);

var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];

var allbooks = friends.reduce((acc, cur) => {
    return [...acc, ...cur.books];
}, [])
console.log(allbooks);

//delete repeated element in array
let a = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let pure = a.sort().reduce((acc, cur) => {
    let length = acc.length;
    if(length === 0 || acc[length - 1] !== cur){
        acc.push(cur);
    }
    return acc;
}, [])
console.log(pure);

//everything
let u  = [2, 4, 6, 8];
let v = u.every(item => item % 2 == 0);
console.log(v);