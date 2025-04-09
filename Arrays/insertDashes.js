let arr = [0, 2, 5, 4, 6, 8];

function addDashes(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result.join("-");
}

console.log(addDashes(arr));
