const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      console.log(randomNum);
      resolve("Data successfully retrieved");
    } else {
      reject("Data can't be retrieved.");
    }
  }, 1000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
