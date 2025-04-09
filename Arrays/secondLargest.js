let arr = [1, 2, 3, 4, 5, 6];

function getSecondLargest(arr) {
  let largest = arr[0];
  let sLargest = -1;

  for (i in arr) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}

console.log(getSecondLargest(arr));
