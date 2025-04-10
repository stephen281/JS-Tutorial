function asyncFunction1(callback) {
  setTimeout(() => {
    console.log("asyncFunction1 is done");
  }, 1000);
  callback();
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log("asyncFunction2 is done");
  }, 1000);
  callback();
}

function asyncFunction3(callback) {
  setTimeout(() => {
    console.log("asyncFunction3 is done");
  }, 1000);
  callback();
}

asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
      console.log("Äll are done");
    });
  });
});
