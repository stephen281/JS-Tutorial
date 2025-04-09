const arr = [1, 2, 3, 4, 5];

let max = -Infinity;

for (i of arr) {
  max = Math.max(max, i);
}

console.log(max);


