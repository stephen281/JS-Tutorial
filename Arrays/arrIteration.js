const numbers = [45, 4, 9, 16, 25];

// array forEach method
numbers.forEach((val, idx, arr)=>{
    console.log(val);
    console.log(idx);
    console.log(arr);
});

// array map method.
numbers.map((val,idx,arr)=>{
    console.log(val);
    console.log(idx);
    console.log(arr);
})

// operation on each element on array and return a new array keeping the actual array unchanged.
const newArr = numbers.map((val, idx, arr)=>{
    return val*2;
})
console.log(newArr);

// filter method
const filteredArr = numbers.filter((val, idx, arr)=>{
    return val > 15;
})
console.log(filteredArr);


const sqrtArr =  numbers.map((num)=> {return Math.sqrt(num)});
console.log(sqrtArr);