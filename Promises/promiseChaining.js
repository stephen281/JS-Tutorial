function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("successfully fetched data1.");
    }, 4000);
  });
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("successfully fetched data 2");
    }, 4000);
  });
}

// console.log("fetching data1...");
// let data1 = getData1();
// console.log(data1);

// console.log("fetching data2...");
// let data2 = getData2();
// console.log(data2);

// console.log("fetching data1...");
// let p1 = getData1();
// p1.then(() => {
//   console.log("fetching data2...");
//   let p2 = getData2();
//   p2.then(() => {});
// });

console.log("Fetching data1...");
getData1().then((res) => {
  console.log(res);
  console.log("Fetching data2...");
  getData2().then((res) => {
    console.log(res);
  });
});
