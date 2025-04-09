const student = {
  rollNo: 1234,
  name: "John",
  address: "Kolkata",
};

const parents = {
  rollNo: 1234,
  fatherName: "David",
  motherName: "Merry",
};

// let result = { ...student, ...parents };
let result = Object.assign({}, student, parents);
console.log(result);

const jsonStr = JSON.stringify(result);
console.log(jsonStr);
console.log(typeof jsonStr);
console.log(JSON.parse(jsonStr));


// set of props
// console.log(Object.keys(result));
// iteration
// for (key in parents) {
//   console.log(key, parents[key]);
// }
