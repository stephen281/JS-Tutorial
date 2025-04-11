function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("I'm a promise");
    resolve("success");
    // reject("error");
  });
}

let promise = getPromise();
promise
  .then((res) => {
    console.log("promise fulfilled=>", res);
  })
  .catch((err) => {
    console.log("error occured=>", err);
  });
