function sayHello(name, callback) {
  console.log("Hello", name);
  callback(name);
}

sayHello("jhon", (name) => {
  console.log("Good afternoon", name);
});
