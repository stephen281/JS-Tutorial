function greet(name, callback) {
  callback(name);
}

greet("Adam", (name) => {
  console.log("Good afternoon", name);
});
