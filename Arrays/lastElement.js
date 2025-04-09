const arr = [7, 9, 0, 2];

// Method 1
function getLastElement1(idx, arr) {
  let ele = [];
  if (idx > arr.length || idx < 0) {
    return arr;
  }
  for (let i = arr.length - 1; i >= arr.length - idx; i--) {
    ele.unshift(arr[i]);
  }
  return ele;
}

let result = getLastElement1(3, arr);
console.log(result);

// Method 2
function getLastElement2(idx, arr) {
  if (idx > arr.length || idx < 0) {
  }
  return arr.slice(arr.length - idx);
}

let result1 = getLastElement2(3, arr);
console.log(result1);
