const arr = [2, 3, 4, 6, 7, 8, 13, 18, 22, 23];
// let even = arr.filter((val) => val % 2 === 0);
// let odd = arr.filter((val) => val % 2 !== 0);

// let even = [];
// let odd = [];

// arr.forEach((val) => {
//   if (val % 2 === 0) {
//     even.push(val);
//   } else {
//     odd.push(val);
//   }
// });

let even = arr.map((val) => {
  if (val % 2 === 0) {
    return val;
  }
});
let odd = arr.map((val) => {
  if (val % 2 !== 0) {
    return val;
  }
});
console.log(even);
console.log(odd);
