const arr = ["apple", "banana", "orange", "mango"];

// length
console.log(arr.length);

// toString()
console.log(arr.toString());

// push & pop
console.log(arr.push("litchi"));
console.log(arr.pop());

// shift & unshift
console.log(arr.shift());
console.log(arr.unshift("lemon"));

// concat()
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
console.log(arr1.concat(arr2));

// splice() : adds new item to an array
console.log(arr);
arr.splice(2,0,"ävogado", "kiwi");
console.log(arr);

// remove an array element using splice();
console.log(arr.splice(0,1));
console.log(arr);

// find()
const numbers = [4,5,13,8,9,12];

let num = numbers.find((val)=> val % 3 == 0)
console.log(num);
console.log(numbers);

// reduce() method
let sum = numbers.reduce((acc, curr)=> acc+curr);
console.log(sum);


// filter() method : it returns a new array with those elements whose pass the test cases. Doesn't change the original array.
let evenNums = numbers.filter((val)=> val % 2 == 0);
console.log(evenNums);
console.log(numbers);

// map() method
let sqrtNum = numbers.map((val)=> Math.floor(Math.sqrt(val)));
console.log(sqrtNum);