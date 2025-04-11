function getData(data, getNextData) {
  setTimeout(() => {
    console.log("data => ", data);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(123, () => {
  getData(456, () => {
    getData(789);
  });
});
