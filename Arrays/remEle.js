const arr = [2, 5, 9, 6];

function remElement(arr, ele) {
  return arr.filter((val) => val !== 5);
}

console.log(remElement(arr, 5));
