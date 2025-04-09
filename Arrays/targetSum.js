const numbers = [10, 20, 10, 40, 50, 60, 70];

const temp = [...numbers];

function getPair(arr, target) {
  arr.sort((a, b) => a - b);

  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum == target) {
      return new Array(numbers.indexOf(arr[i]), numbers.indexOf(arr[j]));
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return -1;
}

console.log(getPair(temp, 100));
