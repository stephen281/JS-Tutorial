function symmetric(low, high) {
  let result = [];
  for (let i = low; i <= high; i++) {
    if (i.toString().length % 2 === 0) {
      result.push(i);
    }
  }
  // filter out symmetrics

  return result.filter((val) => {
    newVal = val.toString();
    let mid = Math.floor(newVal.length / 2);
    let firstPart = newVal.slice(0, mid);
    let secondPart = newVal.slice(mid + 1, val.length);

    Number(firstPart);
  });
}

let result = symmetric(1, 100);
console.log(result);
