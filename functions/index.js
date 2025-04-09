// function name( callback) {
  
//   callback();
// }

// function greet() {
//   console.log("Good afternoon.");
// }

// name( greet);

// another example

function calculator(num1, num2, callback) {
  callback(num1 + num2)
}

// function sum(sum) {
//     console.log(sum);
// }

calculator(5, 3, (result) => {
    console.log(result);
});
