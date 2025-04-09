const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

const res = [];

for(let i=0;i<arr.length;i++){
    if(!res.includes(arr[i])){
        res.push(arr[i]);
    }
}

console.log(res);