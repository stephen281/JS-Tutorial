let array = [1, 2, 2, 3, 3, 3, 4];

function getCount(arr, ele) {
  return arr.filter((val) => val === ele).length;
}

console.log(getCount(array, 4));
