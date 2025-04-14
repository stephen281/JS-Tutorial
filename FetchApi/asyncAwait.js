const url = "https://jsonplaceholder.typicode.com/todos/1";
async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(Object.keys(json));
    console.log(Object.values(json));
    let arr = [];
    arr.push(json);
    console.log(arr);
  } catch (error) {
    console.log(error);
  }
}

getData(url);
