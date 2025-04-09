const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

arr2.map((val, idx, arr) => {
  if (!arr1.includes(val)) {
    arr1.push(val);
  }
});

console.log(arr1);
