const arr = [ 43, 56, 23, 89, 88, 90, 99, 652];

function getNthLargest(arr, n){
    arr.sort((a,b)=> a-b);
    return arr[arr.length-n];
}

console.log(getNthLargest(arr, 3));